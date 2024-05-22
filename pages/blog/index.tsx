import LayoutBlog from '@/components/layouts/LayoutBlog';
import BlogPostPreview from '@/components/BlogPostPreview';

export async function getStaticProps() {
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  const posts = [{
    id: '1',
    title: 'title',
    image: '/123.png',
    date: 'date',
    content: 'content content content',
    permalink: '/blog/1'
  },
    {
      id: '2',
      title: 'title',
      image: '/456.png',
      date: 'date',
      content: 'content content content',
      permalink: '/blog/2'
    }]

  return {
    props: {
      posts,
    },
  }
}

const BlogIndexPage = ({posts}) => {
  return (
    <LayoutBlog>
      <div>
        <h2>Blog</h2>
        <div>
          <h4>Posts</h4>
          <div className="flex flex-col gap-16">
            {posts.map(post => (<BlogPostPreview key={post.id} post={post}/>))}
          </div>
      </div>
    </div>
</LayoutBlog>
)
}

export default BlogIndexPage