import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from './constants'
import { FAQ_ITEMS } from './constants'

/** WebSite 構造化データ（トップページ用） */
export function getWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  }
}

/** LocalBusiness 構造化データ（全ページ共通） */
export function getLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    description: '「お花で遊ぶ」をコンセプトにしたフラワーアレンジメント教室',
    url: SITE_URL,
    // TODO: 以下は教室情報確定後に設定
    // telephone: '',
    // address: { ... },
    // geo: { ... },
    // openingHoursSpecification: { ... },
    image: `${SITE_URL}/og-image.jpg`,
    priceRange: '￥',
  }
}

/** FAQPage 構造化データ（Menu ページ用） */
export function getFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
