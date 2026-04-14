import { createClient } from 'microcms-js-sdk'
import type { MicroCMSImage, MicroCMSDate, MicroCMSListContent } from 'microcms-js-sdk'

// microCMS クライアント
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
})

// ===== コンテンツ型定義 =====

/** ギャラリー作品 */
export type GalleryItem = {
  image: MicroCMSImage
  title: string
  category?: string[]
} & MicroCMSListContent

/** お客様の声 */
export type Testimonial = {
  body: string
  age: string
  visible: boolean
} & MicroCMSListContent

/** オーダー作品 */
export type OrderWork = {
  image: MicroCMSImage
  title: string
  category?: string[]
} & MicroCMSListContent

/** お知らせ（将来用） */
export type News = {
  title: string
  body: string
} & MicroCMSListContent &
  MicroCMSDate

// ===== データ取得関数 =====

export async function getGalleryItems() {
  const data = await client.getList<GalleryItem>({
    endpoint: 'gallery',
    queries: { limit: 20, orders: 'publishedAt' },
  })
  return data.contents
}

export async function getTestimonials() {
  const data = await client.getList<Testimonial>({
    endpoint: 'testimonials',
    queries: { limit: 20, filters: 'visible[equals]true' },
  })
  return data.contents
}

export async function getOrderWorks() {
  const data = await client.getList<OrderWork>({
    endpoint: 'order-works',
    queries: { limit: 20, orders: 'publishedAt' },
  })
  return data.contents
}
