import LayoutBlog from '@/components/layouts/LayoutBlog';
import WaitListWidget from '@/components/waitlist/Widget';

const WaitListIndexPage = () => {
  return (
    <LayoutBlog>
      <div>
        <h2>Eden2 - Wait list signup</h2>
        <WaitListWidget />
      </div>
    </LayoutBlog>
  )
}

export default WaitListIndexPage