'use client'

import { useState } from 'react'
import { trackFormSubmit } from '@/lib/ga'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const purposes = formData.getAll('purpose').join(', ')
    trackFormSubmit(purposes || 'unspecified')
    // TODO: formrun 連携に差し替え
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      form.reset()
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Purpose */}
      <div>
        <label className="mb-1.5 block text-sm font-medium">ご用件</label>
        <div className="flex flex-col gap-2.5">
          {[
            '体験（お花遊び）に参加してみたい',
            'オーダーメイドを作ってほしい',
            'その他のお問い合わせ',
          ].map((label) => (
            <label key={label} className="flex cursor-pointer items-center gap-2.5 text-sm">
              <input
                type="checkbox"
                name="purpose"
                value={label}
                className="h-[18px] w-[18px] accent-primary"
              />
              {label}
            </label>
          ))}
        </div>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
          お名前<span className="ml-1 text-xs text-critical">必須</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="山田 花子"
          className="w-full rounded-[10px] border-[1.5px] border-border bg-surface px-4 py-3 text-sm text-text-main transition-colors duration-300 focus:border-primary focus:outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          メールアドレス<span className="ml-1 text-xs text-critical">必須</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="example@email.com"
          className="w-full rounded-[10px] border-[1.5px] border-border bg-surface px-4 py-3 text-sm text-text-main transition-colors duration-300 focus:border-primary focus:outline-none"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
          お電話番号<span className="ml-1 text-xs text-text-sub">任意</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="090-1234-5678"
          className="w-full rounded-[10px] border-[1.5px] border-border bg-surface px-4 py-3 text-sm text-text-main transition-colors duration-300 focus:border-primary focus:outline-none"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          メッセージ<span className="ml-1 text-xs text-text-sub">任意</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="ご質問やご希望がありましたら、お気軽にお書きください。"
          className="w-full resize-y rounded-[10px] border-[1.5px] border-border bg-surface px-4 py-3 text-sm text-text-main transition-colors duration-300 focus:border-primary focus:outline-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitted}
        className={`w-full rounded-full py-3.5 font-display text-sm font-medium text-white transition-all duration-300 ${
          submitted
            ? 'bg-success'
            : 'bg-primary shadow-primary hover:-translate-y-0.5 hover:bg-primary-hover'
        }`}
      >
        {submitted ? '送信しました！' : '送信する'}
      </button>
    </form>
  )
}
