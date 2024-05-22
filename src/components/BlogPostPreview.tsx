import Link from 'next/link';

const BlogPostPreview = ({post}) => {
  return (
    <div className="flex flex-col items-center gap-4 w-2xl">
      <Link href={post.permalink}>
        <img
          alt="By artists, for artists"
          src="/custom-models.jpg"
          className="rounded-2xl w-full h-72 object-cover object-top"
        />
      </Link>
      <div className="w-full">
        <p className="lg:mb-4 text-2xl font-bold lg:text-3xl md:text-xl sm:text-lg">
          <Link href={'https://app.eden.art/'}>
            {post.title}
          </Link>
        </p>
        <p
          className="mt-2 md:mt-1 lg:mt-4 max-w-xl text-lg text-white lg:text-xl md:text-lg sm:text-xs font-extralight">
          {post.content}
        </p>
      </div>

      <pre className="bg-gray-800 p-4 rounded-lg">{JSON.stringify(post, null, 2)}</pre>
    </div>
  )
}

export default BlogPostPreview