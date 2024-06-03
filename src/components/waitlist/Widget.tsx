'use client'

import Script from 'next/script';
import styles from './Widget.module.css'

const WaitListWidget = () => {
  return (
    <div className='flex justify-center items-center'>
      <div id="getWaitlistContainer"
           style={styles}
           data-waitlist_id="17436"
           data-widget_type="WIDGET_1"
           className='w-full flex justify-center'
      />
      <Script
        src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded: https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js`)
        }
      />
    </div>
  )
}

export default WaitListWidget