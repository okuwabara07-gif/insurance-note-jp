import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Insurance Note', description: '保険・生命保険の比較情報' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body style={{margin:0,fontFamily:'sans-serif'}}>{children}</body></html>
}