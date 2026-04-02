import type { Metadata } from 'next'

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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:`{"@context": "https://schema.org", "@type": "WebSite", "name": "保険ノート", "description": "保険・生命保険比較", "url": "https://insurance-note-jp.vercel.app", "publisher": {"@type": "Organization", "name": "AOKAE合同会社", "url": "https://colorpass-web.vercel.app"}, "potentialAction": {"@type": "SearchAction", "target": "https://insurance-note-jp.vercel.app/blog/{search_term_string}", "query-input": "required name=search_term_string"}}`}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
