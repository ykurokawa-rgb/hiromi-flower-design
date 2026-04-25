import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

type ContactPayload = {
  purpose?: string
  name?: string
  email?: string
  phone?: string
  message?: string
}

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const fromAddress = process.env.CONTACT_FROM_EMAIL
  const toAddress = process.env.CONTACT_TO_EMAIL

  if (!apiKey || !fromAddress || !toAddress) {
    return NextResponse.json(
      { error: 'メール送信が設定されていません。管理者にお知らせください。' },
      { status: 500 },
    )
  }

  let payload: ContactPayload
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: '不正なリクエストです。' }, { status: 400 })
  }

  const name = (payload.name ?? '').trim()
  const email = (payload.email ?? '').trim()
  const phone = (payload.phone ?? '').trim()
  const message = (payload.message ?? '').trim()
  const purpose = (payload.purpose ?? '').trim()

  if (!name || !email) {
    return NextResponse.json({ error: 'お名前とメールアドレスは必須です。' }, { status: 400 })
  }

  const resend = new Resend(apiKey)

  const subject = `【ひろみフラワーデザイン教室】お問い合わせ${purpose ? ` - ${purpose}` : ''}`

  const lines = [
    `ご用件: ${purpose || '（未選択）'}`,
    `お名前: ${name}`,
    `メールアドレス: ${email}`,
    `お電話番号: ${phone || '（未入力）'}`,
    '',
    'メッセージ:',
    message || '（なし）',
  ]
  const text = lines.join('\n')

  const html = `
<div style="font-family: sans-serif; line-height: 1.7; color: #333;">
  <h2 style="color: #E08A82;">新しいお問い合わせが届きました</h2>
  <table style="border-collapse: collapse;">
    <tr><td style="padding: 6px 12px; font-weight: bold;">ご用件</td><td style="padding: 6px 12px;">${escapeHtml(purpose || '（未選択）')}</td></tr>
    <tr><td style="padding: 6px 12px; font-weight: bold;">お名前</td><td style="padding: 6px 12px;">${escapeHtml(name)}</td></tr>
    <tr><td style="padding: 6px 12px; font-weight: bold;">メールアドレス</td><td style="padding: 6px 12px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
    <tr><td style="padding: 6px 12px; font-weight: bold;">お電話番号</td><td style="padding: 6px 12px;">${escapeHtml(phone || '（未入力）')}</td></tr>
  </table>
  <h3 style="margin-top: 24px;">メッセージ</h3>
  <div style="padding: 12px; background: #FAF9F5; border-left: 3px solid #E08A82; white-space: pre-wrap;">${escapeHtml(message || '（なし）')}</div>
</div>
`

  try {
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: email,
      subject,
      text,
      html,
    })
    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: '送信に失敗しました。' }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: '送信に失敗しました。' }, { status: 500 })
  }
}
