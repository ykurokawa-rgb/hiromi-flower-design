/**
 * 画像パス定義
 *
 * 写真が納品されたら、ここのパスを更新するだけで全ページに反映される。
 * public/images/ に写真を配置して使用する。
 */

export const IMAGES = {
  // ===== Hero =====
  hero: {
    main: '/images/hero-main.jpg',          // A-4: レッスン全体風景
    circle: '/images/hero-circle.jpg',      // A-2: 先生ポートレート（丸型用）
  },

  // ===== About =====
  about: {
    profile: '/images/profile-hiromi.jpg',  // A-1: 先生ポートレート（アーチ型用）
    lesson: '/images/lesson-scene.jpg',     // A-5: 先生と生徒の会話
  },

  // ===== Menu =====
  menu: {
    hands: '/images/menu-hands.jpg',        // A-6: 手元アップ
    tea: '/images/menu-tea.jpg',            // A-7: お茶タイム
  },

  // ===== Contact =====
  contact: {
    exterior: '/images/exterior.jpg',       // A-9: 教室外観
    interior: '/images/interior.jpg',       // A-10: 教室内観
  },

  // ===== OGP =====
  ogp: '/images/og-image.jpg',             // 1200×630px
} as const

/**
 * 画像が存在するかチェック（ビルド時にはチェックしない）
 * 開発中はプレースホルダーを使い、写真納品後に差し替える
 */
export function hasImage(path: string): boolean {
  // クライアントサイドでは常にtrueを返す（Next.js Imageが404をハンドリング）
  return path !== ''
}
