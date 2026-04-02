import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: '保険ノート',
  description: '保険・生命保険比較',
  keywords: '保険ノート,保険・生命保険比較',
  openGraph: {
    title: '保険ノート',
    description: '保険・生命保険比較',
    type: 'website',
    locale: 'ja_JP',
    siteName: '保険ノート',
  },
  twitter: {
    card: 'summary_large_image',
    title: '保険ノート',
    description: '保険・生命保険比較',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
      <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
      <body>{children}</body>
    </html>
  )
}
