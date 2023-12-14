// COMPONENTS
import Head from 'next/head'

// STYLES
import styled from 'styled-components'

// PAGES
import EdenArtFrontPage from '@/components/EdenArtFrontPage/EdenArtFrontPage'

const OverviewWrapperStyles = styled.section`
  overflow: auto;
  background-color: white;
  flex: 1;
  overflow-x: hidden;

  ::-moz-selection {
    /* Code for Firefox */
    color: red;
    background: yellow;
  }


`

export default function IndexPage() {
  return (
    <OverviewWrapperStyles id="overview-wrapper">
      <Head>
        <title>Eden</title>
      </Head>
      <EdenArtFrontPage />
    </OverviewWrapperStyles>
  )
}
