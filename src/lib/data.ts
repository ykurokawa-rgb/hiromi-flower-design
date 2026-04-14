/**
 * データ取得レイヤー
 *
 * microCMS が設定されていればCMSからデータを取得し、
 * 未設定の場合はフォールバックデータを返す。
 * Phase 3 完了後にCMS連携を有効化する。
 */

import { PLACEHOLDER_TESTIMONIALS } from './constants'

const CMS_CONFIGURED =
  !!process.env.MICROCMS_SERVICE_DOMAIN && !!process.env.MICROCMS_API_KEY

// ===== Testimonials =====

export type TestimonialData = {
  body: string
  age: string
}

export async function getTestimonialsData(): Promise<TestimonialData[]> {
  if (CMS_CONFIGURED) {
    try {
      const { getTestimonials } = await import('./microcms')
      const items = await getTestimonials()
      return items.map((item) => ({ body: item.body, age: item.age }))
    } catch (e) {
      console.warn('microCMS fetch failed, using fallback:', e)
    }
  }
  return PLACEHOLDER_TESTIMONIALS.map((t) => ({ body: t.body, age: t.age }))
}

// ===== Gallery =====

export type GalleryData = {
  src: string
  alt: string
  width: number
  height: number
}

export async function getGalleryData(): Promise<GalleryData[]> {
  if (CMS_CONFIGURED) {
    try {
      const { getGalleryItems } = await import('./microcms')
      const items = await getGalleryItems()
      return items.map((item) => ({
        src: item.image.url,
        alt: item.title,
        width: item.image.width ?? 800,
        height: item.image.height ?? 600,
      }))
    } catch (e) {
      console.warn('microCMS fetch failed, using fallback:', e)
    }
  }
  // フォールバック: プレースホルダー（空配列 → GalleryPlaceholder を使用）
  return []
}

// ===== Order Works =====

export type OrderWorkData = {
  src: string
  alt: string
  width: number
  height: number
}

export async function getOrderWorksData(): Promise<OrderWorkData[]> {
  if (CMS_CONFIGURED) {
    try {
      const { getOrderWorks } = await import('./microcms')
      const items = await getOrderWorks()
      return items.map((item) => ({
        src: item.image.url,
        alt: item.title,
        width: item.image.width ?? 800,
        height: item.image.height ?? 600,
      }))
    } catch (e) {
      console.warn('microCMS fetch failed, using fallback:', e)
    }
  }
  return []
}
