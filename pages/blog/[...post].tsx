import LayoutBlog from '@/components/layouts/LayoutBlog';
import Link from 'next/link';

const BlogPostPage = ({post}) => {
  return (
    <LayoutBlog>
      <div>
        A blog post / article
        <div className="dark:bg-gray-900">
          <Link href={'/blog'}>
            Back to list
          </Link>
          {JSON.stringify(post)}
        </div>
      </div>
    </LayoutBlog>
  )
}

export default BlogPostPage