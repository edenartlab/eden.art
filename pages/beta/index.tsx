import Head from 'next/head'

import EdenArtFrontPage from '@/components/EdenArtFrontPage/EdenArtFrontPageBeta'

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Eden</title>
      </Head>
      <EdenArtFrontPage />
    </div>
  )
}
