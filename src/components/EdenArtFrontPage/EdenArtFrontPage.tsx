import EdenArtFrontPageStyles from './EdenArtFrontPageStyles'
import Link from 'next/link'
import Footer from '../Footer'
export default function EdenArtFrontPage() {
  return (
    <div className="bg-black">
      <EdenArtFrontPageStyles>
        <div className="home-wrapper ">
          <section className="section-wrapper header bg-black opacity-80">
            <div className="flex items-center justify-start ">
              <Link href="/">
                <img src="logo.png" className="h-16 sm:h-16 pl-24 pt-3 pb-3" />
              </Link>
              <Link href="/">
                <p className="text-xl pl-2 font-sarif font-light text-white sm:text-2xl">
                  eden.art
                </p>
              </Link>
              <div className="border border-l-white h-8 ml-4 opacity-80"></div>
              <Link href="https://docs.eden.art/">
                <p className="text-xl pl-4 font-sarif font-light text-white sm:text-lg">
                  Docs
                </p>
              </Link>
            </div>

            <div className="flex items-center justify-end pr-20 ">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/abraham-ai"
              >
                <img src="github.png" className="h-8 sm:h-10" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.com/invite/4dSYwDT"
              >
                <img src="discord.png" className="h-8 ml-2 sm:h-10 sm:ml-4" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/Eden_Art_"
              >
                <img src="twitter.png" className="h-8 ml-2 sm:h-10 sm:ml-4" />
              </Link>
            </div>
          </section>
          <div className="relative h-screen">
            <video
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              style={{ opacity: 0.4 }}
            >
              <source src="video.mp4" type="video/mp4" />
              {/* Add more <source> elements for other video formats if needed */}
              Your browser does not support the video tag.
            </video>
            <div className="max-w-7xl px-14 pb-24 pt-48 sm:pb-32 md:flex md:px-24 md:py-32 lg:flex lg:px-24 lg:py-32 justify-start -mt-8 relative z-10">
              <div className="max-w-3xl flex-shrink-0  lg:pt-8">
                <h1 className="mt-24 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Create, remix, and share AI art
                </h1>
                <p className="mt-3 font-extralight text-xl leading-8 text-gray-300">
                  Eden is a community of artists and technologists building a
                  social hub for creative AI.
                </p>
                <Link href={'https://app.eden.art'}>
                  <div className="mt-6">
                    <button className="text-white pl-4 pr-4 pt-3 pb-3 border border-2 rounded-2xl font-bold tracking-wide transition-transform hover:scale-105 hover:bg-black/40">
                      Enter the Garden
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <img className="h-16 animate-bounce" src="downarrow.png" />
            </div>
          </div>
          <section className="section-wrapper first-description flex flex-col">
            <div className="text-white flex px-24 flex-col">
              {/* 1st section */}
              <div className="flex">
                <div className="w-1/2 pt-3 pb-3">
                  <img
                    src="/img1.jpg"
                    className="rounded-2xl w-full h-auto object-cover"
                  />
                </div>
                <div className="pl-10 py-6 flex-grow">
                  <p className="mb-4 text-2xl font-semibold lg:text-4xl md:text-3xl ">
                    By artists, for artists
                  </p>
                  <p className="max-w-xl text-2xl text-white lg:text-2xl md:text-2xl font-extralight">
                    Eden is built by OG AI artists with the express purpose of
                    armoring digital artists with this technology. Artists train
                    your own personal models and reclaim your sovereignty in
                    this technology.
                  </p>
                  <Link href={'https://docs.eden.art/docs/overview/intro/'}>
                    <button className="border border-xl rounded-3xl px-6 py-3 mt-6 hover:scale-105 hover:bg-[#F15EBF]/60">
                      Our Values
                    </button>
                  </Link>
                </div>
              </div>
              {/* 2nd section */}
              <div className="flex">
                <div className="pr-10 py-6 flex-grow text-right">
                  <p className="mb-4 text-2xl font-semibold lg:text-4xl md:text-3xl ">
                    Open source, open access
                  </p>
                  <p className="max-w-xl text-2xl text-white lg:text-2xl md:text-2xl font-extralight">
                    Eden pipelines are built on top of and contribute to the
                    open-source Al revolution, and encourages free modification
                    and experimentation on our tools. There are no walls around
                    our garden.
                  </p>
                  <Link href={'https://docs.eden.art/docs/guides/sdk/'}>
                    <button className="border border-xl rounded-3xl px-6 py-3 mt-6 hover:scale-105 hover:bg-[#5E64F1]/60">
                      SDK Quickstart
                    </button>
                  </Link>
                </div>
                <div className="w-1/2 pt-3 pb-3">
                  <img
                    src="/img2.jpg"
                    className="rounded-2xl w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* 3rd section */}
              <div className="mt-24">
                <div className="pl-10 py-6 w-full flex justify-center flex-col items-center">
                  <p className="mb-4 text-2xl text-center font-semibold lg:text-4xl md:text-3xl ">
                    Create, remix, and share your art
                  </p>
                  <p className="text-2xl text-center text-white lg:text-2xl md:text-2xl font-extralight">
                    Eden maintains an ever-growing suite of customizable
                    pipelines that generate the most sublime and glorious image
                    and video art.
                  </p>
                  <Link href={'https://app.eden.art/create/creations'}>
                    <button className="border border-xl rounded-3xl px-6 py-3 mt-6 hover:scale-105 hover:bg-[#0FA795]/60">
                      Create Art in 1 Minute
                    </button>
                  </Link>
                </div>
                <div className="w-full pt-3 pb-3">
                  <img
                    src="/img3.png"
                    className="rounded-2xl w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* 4th section */}
              <div className="flex mt-24">
                <div className="w-1/3 pt-3 pb-3">
                  <img
                    src="/img4.png"
                    className="rounded-2xl w-full h-auto object-cover"
                  />
                </div>
                <div className="pl-10 py-6 flex-grow">
                  <p className="mb-4 text-2xl font-semibold lg:text-4xl md:text-3xl ">
                    Train custom models on your own work
                  </p>
                  <p className="max-w-xl text-2xl text-white lg:text-2xl md:text-2xl font-extralight">
                    For too long, artists have been left out of the process of
                    training foundation models on their work. Reclaim your
                    sovereignty, train your own model on your work, and serve it
                    to your fans.
                  </p>
                  <Link href={'https://docs.eden.art/docs/guides/concepts/'}>
                    <button className="border border-xl rounded-3xl px-6 py-3 mt-6 hover:scale-105 hover:bg-[#F15EBF]/60">
                      Training on Lora
                    </button>
                  </Link>
                  <Link
                    href={
                      'https://app.eden.art/creators/syntonikka?conceptId=657334e4377857179ca52d93'
                    }
                  >
                    <p className="mt-20 text-2xl underline">3D Art by Nico</p>
                  </Link>
                </div>
              </div>

              {/* 5th section */}
              <div className="flex mt-24">
                <div className="w-2/3 pr-10 py-6 flex-grow text-right">
                  <p className="mb-4 text-2xl font-semibold lg:text-4xl md:text-3xl ">
                    Train custom models on your own work
                  </p>
                  <p className="text-2xl text-white lg:text-2xl md:text-2xl font-extralight">
                    Eden is developing an experimental chatbot who represents
                    your artistic brand. Like a concierge who talks to your
                    fans, sketches new works in your style, and handles
                    commissions for new work.
                  </p>
                  <Link href={'https://docs.eden.art/docs/guides/characters/'}>
                    <button className="border border-xl rounded-3xl px-6 py-3 mt-6 hover:scale-105 hover:bg-[#5EF1E8]/60">
                      Apply to Beta Program
                    </button>
                  </Link>
                </div>
                <div className="w-1/3 pt-3 pb-3">
                  <img
                    src="/img5.jpg"
                    className="rounded-2xl w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </EdenArtFrontPageStyles>
    </div>
  )
}
