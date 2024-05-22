import Link from 'next/link'
import Footer from '../Footer'
import NavHeader from '@/components/navigation/NavHeader';
import VideoHeroSection from '@/components/VideoHeroSection';

export default function EdenArtFrontPage() {
  return (
    <div className="bg-black">
      <div className="mt-8">
        <NavHeader />
      </div>
      <VideoHeroSection />
      <section className="flex flex-col">
        <div className="text-white flex px-4 xl:px-24 flex-col z-10 m-10 mt-10">
          {/* 1st section */}
          <div className="flex flex-col sm:flex sm:flex-row sm:mt-8">
            <div className="lg:w-8/12 md:w-1/2 sm:w-10/12 pt-3 pb-3">
              <Link href={'https://app.eden.art/'}>
                <img
                  alt="By artists, for artists"
                  src="/custom-models.jpg"
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </Link>
            </div>
            <div className="px-3 sm:px-4 md:pl-10 py-3 flex-grow lg:w-4/12">
              <p className="lg:mb-4 text-2xl font-bold lg:text-3xl md:text-xl sm:text-lg">
                <Link href={'https://app.eden.art/'}>
                Creative AI toolkit powered by custom models
                </Link>
              </p>
              <p
                className="mt-2 md:mt-1 lg:mt-4 max-w-xl text-2xl text-white lg:text-xl md:text-lg sm:text-xs font-extralight">
                Create with consistent results using custom models for styles, faces, and objects. Train your own models
                in minutes or use artist-crafted models from our collection.
              </p>
            </div>
          </div>

          {/* 2nd section */}
          <div className="mt-10 lg:mt-20 lg:mb-2 flex flex-col-reverse sm:flex sm:flex-row">
            <div className="px-3 sm:px-4 md:pr-10 sm:py-3 md:py-3 flex-grow sm:text-right lg:w-4/12">
              <p className="lg:mb-4 text-2xl font-bold lg:text-3xl md:text-xl sm:text-lg mb-2 mt-2">
                <Link href={'https://app.eden.art/'}>
                Full suite of creative AI tools
                </Link>
              </p>
              <p
                className="sm:mt-2 md:mt-1 lg:mt-4 max-w-xl text-2xl text-white lg:text-xl md:text-lg sm:text-xs font-extralight">
                Generate video and images from text, animate images, make looped animations, create audio-reactive
                video, video reels, stories, and more all using custom models. Get started in minutes for free.
              </p>
            </div>
            <div className="lg:w-8/12 md:w-1/2 sm:w-10/12 pt-3 pb-3">
              <Link href={'https://app.eden.art/'}>
              <img
                alt="Creative AI Tools"
                src="/ai-tools.jpg"
                className="rounded-2xl w-full h-auto object-cover"
              />
              </Link>
            </div>
          </div>

          {/* 3rd section */}
          <div className="mt-10 lg:mt-20 flex flex-col sm:flex sm:flex-row">
            <div className="sm:w-10/12 pt-3 pb-3">
              <Link href={'https://docs.eden.art/docs/guides/characters/'}>
              <img
                alt="Characters & Agents"
                src="/bot.jpg"
                className="rounded-2xl w-full h-auto object-cover"
              />
              </Link>
            </div>
            <div className="px-3 sm:px-4 md:pl-10 py-3 flex-grow">
              <p className="lg:mb-4 text-2xl font-semibold lg:text-3xl md:text-xl sm:text-lg">
                <Link href={'https://docs.eden.art/docs/guides/characters/'}>
                Bring your models to life with agents for Discord & Twitter
                </Link>
              </p>
              <p
                className="mt-2 md:mt-1 lg:mt-4 max-w-xl text-2xl text-white lg:text-xl md:text-lg sm:text-xs font-extralight">
                Create characters who represents you or your brand and create new
                works in your style.
              </p>
              <Link href={'https://docs.eden.art/docs/guides/characters/'}>
                <button
                  className="mt-8 border border-xl rounded-2xl px-6 py-3 sm:text-sm sm:px-4 sm:py-2 md:px-3 md:py-2 lg:text-xl lg:px-6 lg:py-3 md:text-md hover:scale-105">
                  Get started with characters
                </button>
              </Link>
              <br></br>
            </div>
          </div>

          {/* 4th section */}
          <div className="mt-10 lg:mt-20 flex flex-col-reverse sm:flex sm:flex-row">
            <div className="px-3 sm:px-4 md:pr-10 sm:py-3 md:py-3 flex-grow sm:text-right">
              <p className="lg:mb-4 text-2xl font-semibold lg:text-3xl md:text-xl sm:text-lg">
                <Link href={'https://docs.eden.art/docs/guides/sdk'}>
                Build custom AI apps
                </Link>
              </p>
              <p
                className="mt-2 md:mt-1 lg:mt-4 max-w-xl text-2xl text-white lg:text-xl md:text-lg sm:text-xs font-extralight">
                Develop custom frontends or interactive applications that plug into our ecosystem using our open source SDK. Deploy custom models to be used in any context.
              </p>
              <Link href={'https://docs.eden.art/docs/guides/sdk'}>
                <button
                  className="mt-8 border border-xl rounded-2xl px-6 py-3 sm:text-sm sm:px-4 sm:py-2 md:px-3 md:py-2 lg:text-xl lg:px-6 lg:py-3 md:text-md hover:scale-105">
                  Get started with our SDK
                </button>
              </Link>
            </div>
            <div className="sm:w-10/12 pt-3 pb-3">
              <Link href={'https://docs.eden.art/docs/guides/sdk'}>
              <img
                alt="SDK"
                src="/custom-apps.jpg"
                className="rounded-2xl w-full h-auto object-cover"
              />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-2">
        <Footer />
      </div>
    </div>
  )
}
