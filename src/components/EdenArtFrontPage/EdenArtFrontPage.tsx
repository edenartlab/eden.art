import Link from 'next/link'
import Footer from '../Footer'
import { MenuOutlined, ControlOutlined, FileTextOutlined } from '@ant-design/icons'
import { useState } from 'react'
import useWindowSize from '@/hooks/useWindowSize'

export default function EdenArtFrontPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const size = useWindowSize()

  return (
    <div className="bg-black">
      <div
        className={`fixed z-50 w-full bg-black opacity-80 ${
          isMenuOpen && size.width < 640 ? 'h-72' : 'h-16'
        } mt-8`}
      >
        {' '}
        <div className="flex justify-between">
          <div className=" flex items-center">
            <Link href="/">
              <img
                src="logo.png"
                className="cursor-pointer h-16 sm:h-16 pl-4 sm:pl-24 pt-3 pb-3 object-contain"
              />
            </Link>
            <Link href="/">
              <p className="text-xl pl-2 font-sarif font-light text-white sm:text-2xl">
                eden.art
              </p>
            </Link>
            <Link href="https://app.eden.art/">
              {size.width > 640 && (
                <div className="flex">
                  <div className="border border-l-white h-8 ml-4 opacity-40"></div>

                  <p className="text-xl mt-0.5 pl-4 font-sarif font-light text-white sm:text-lg">
                    App
                  </p>
                </div>
              )}
            </Link>
            <Link href="https://docs.eden.art/">
              {size.width > 640 && (
                <div className="flex">
                  <div className="border border-l-white h-8 ml-4 opacity-40"></div>

                  <p className="text-xl mt-0.5 pl-4 font-sarif font-light text-white sm:text-lg">
                    Docs
                  </p>
                </div>
              )}
            </Link>
          </div>

          <div className="flex items-center pr-4 sm:pr-20">
            <div className="sm:hidden text-white pb-1">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="px-2 py-1"
              >
                <MenuOutlined />
              </button>
            </div>
            <div className="hidden sm:flex">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/edenartlab"
              >
                <img src="github.png" className="h-8 sm:h-10 object-contain" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.com/invite/4dSYwDT"
              >
                <img
                  src="discord.png"
                  className="h-8 ml-2 sm:h-10 sm:ml-4 object-contain"
                />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/Eden_Art_"
              >
                <img
                  src="twitter.png"
                  className="h-8 ml-2 sm:h-10 sm:ml-4 object-contain"
                />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/eden.art____"
              >
                <img
                  src="instagram.png"
                  className="h-8 ml-2 sm:h-10 sm:ml-4 object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
        {isMenuOpen && size.width < 640 && (
          <div className="flex flex-col mt-1">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.eden.art"
            >
              <div className="flex">
                <ControlOutlined
                  style={{ fontSize: '26px' }}
                  className="text-white ml-5 mt-1 mb-2"
                />{' '}
                <p className="text-white ml-2.5  mt-2 text-sm font-bold">
                  APP
                </p>
              </div>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.eden.art"
            >
              <div className="flex">
                <FileTextOutlined
                  style={{ fontSize: '26px' }}
                  className="text-white ml-5 mt-1 mb-2"
                />{' '}
                <p className="text-white ml-2.5  mt-2 text-sm font-bold">
                  DOCS
                </p>
              </div>
            </Link>
            <div className="border border-b mx-5 opacity-40 "></div>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/edenartlab"
            >
              <div className="flex">
                <img
                  src="github.png"
                  className="h-8 mt-1.5 ml-4 object-contain"
                />{' '}
                <p className="text-white ml-2  mt-3 text-sm font-bold">
                  GITHUB
                </p>
              </div>
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.com/invite/4dSYwDT"
            >
              <div className="flex">
                <img
                  src="discord.png"
                  className="h-8 ml-4 mt-0.5 object-contain"
                />{' '}
                <p className="text-white ml-2  mt-2 text-sm font-bold">
                  DISCORD
                </p>
              </div>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/Eden_Art_"
            >
              <div className="flex">
                <img src="twitter.png" className="h-8 ml-4 object-contain" />{' '}
                <p className="text-white ml-2 mt-2 text-sm font-bold">
                  TWITTER
                </p>
              </div>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/eden.art____"
            >
              <div className="flex">
                <img src="instagram.png" className="h-8 ml-4 object-contain" />{' '}
                <p className="text-white ml-2 mt-2 text-sm font-bold">
                  INSTAGRAM
                </p>
              </div>
            </Link>
          </div>
        )}
      </div>

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
        <div className="max-w-7xl px-14 pb-24 pt-32 sm:pb-32 md:flex md:px-24 md:py-32 lg:flex lg:px-24 lg:py-32 justify-start -mt-8 relative z-10">
          <div className="max-w-7xl flex-shrink-0  lg:pt-8">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-white lg:text-6xl">
              Create, remix, and share AI art
            </h1>
            <p className="mt-3 font-extralight text-md lg:text-2xl text-gray-300">
              Eden is a community of artists and technologists building a social
              hub for creative AI.
            </p>
            <Link href={'https://app.eden.art'}>
              <div className="mt-6">
                <button className="text-white text-lg md:text-sm lg:text-lg pl-4 pr-4 pt-3 pb-3 border border-2 rounded-2xl font-bold tracking-wide transition-transform hover:scale-105 hover:bg-black/40">
                  Enter the Garden
                </button>
              </div>
            </Link>
          </div>
        </div>
        {/* <div className="flex justify-center items-center ">
          <img className="h-8 sm:h-16 animate-bounce" src="downarrow.png" />
        </div> */}
      </div>
      <section className="flex flex-col">
        <div className="text-white flex px-4 xl:px-24 mt-10 flex-col">
          {/* 1st section */}
          <div className="flex flex-col sm:flex sm:flex-row sm:mt-6">
            <div className="lg:w-1/2 pt-3 pb-3 sm:w-10/12">
              <img
                src="/img1.jpg"
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="px-3 sm:px-4 md:pl-10 py-3 flex-grow">
              <p className="lg:mb-4 text-2xl font-semibold lg:text-4xl md:text-xl sm:text-lg">
                By artists, for artists
              </p>
              <p className="mt-2 md:mt-1 lg:mt-4 max-w-xl text-2xl text-white lg:text-2xl md:text-lg sm:text-xs font-extralight">
                Eden is built by OG AI artists with the express purpose of
                armoring digital artists with this technology.
              </p>
              <Link href={'https://docs.eden.art/docs/overview/intro/'}>
                <button className="mt-4 border border-xl rounded-3xl px-6 py-3 sm:text-sm sm:px-4 sm:py-2 sm:mt-3 md:mt-3 md:px-3 md:py-2 lg:text-2xl lg:px-6 lg:mt-3 lg:py-3 md:text-md hover:scale-105 hover:bg-[#F15EBF]/60">
                  Our Values
                </button>
              </Link>
            </div>
          </div>
          {/* 2nd section */}
          <div className="mt-4 flex flex-col-reverse sm:flex sm:flex-row lg:mt-4">
            <div className="px-3 sm:px-4 md:pr-10 sm:py-3 md:py-3 flex-grow sm:text-right">
              <p className="lg:mb-4 text-2xl font-semibold lg:text-4xl md:text-xl sm:text-lg">
                Open source, open access
              </p>
              <p className="mt-2 md:mt-1 lg:mt-4 max-w-xl text-2xl text-white lg:text-2xl md:text-lg sm:text-xs font-extralight">
                Eden pipelines are built on top of and contribute to the
                open-source Al revolution, and encourages free modification and
                experimentation on our tools. There are no walls around our
                garden.
              </p>
              <Link href={'https://docs.eden.art/docs/guides/sdk/'}>
                <button className="mt-4 border border-xl rounded-3xl px-6 py-3 sm:text-sm sm:px-4 sm:py-2 sm:mt-3 md:mt-3 md:px-3 md:py-2 lg:text-2xl lg:px-6 lg:mt-3 lg:py-3 md:text-md hover:scale-105 hover:bg-[#5E64F1]/60">
                  SDK Quickstart
                </button>
              </Link>
            </div>
            <div className=" lg:w-1/2 pt-3 pb-3 sm:w-10/12">
              <img
                src="/img2.jpg"
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* 3rd section */}
          <div className="mt-10 lg:mt-24 flex flex-col-reverse sm:flex-col">
            <div className="px-3 sm:pl-10  w-full flex justify-center sm:text-center flex-col sm:items-center">
              <p className="mb-4 md:mb-2 lg:mb-4 text-2xl font-semibold lg:text-4xl md:text-2xl sm:text-lg ">
                Create, remix, and share your art
              </p>
              <p className="text-2xl text-white lg:text-2xl md:text-lg  sm:text-xs font-extralight">
                Eden maintains an ever-growing suite of customizable pipelines
                that generate sublime images and video art.
              </p>
              <Link href={'https://app.eden.art/create/creations'}>
                <button className="mt-4 border border-xl rounded-3xl px-6 py-3 sm:text-sm sm:px-4 sm:py-2 sm:mt-3 md:mt-3 md:px-3 md:py-2 lg:text-2xl lg:px-6 lg:mt-3 lg:py-3 md:text-md hover:scale-105 hover:bg-[#34e0a1]/60">
                  Create Art in 1 Minute
                </button>
              </Link>
            </div>
            <div className="w-full md:pt-3 pb-3 xl:mt-6">
              <img
                src="/img3.png"
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* 4th section */}
          <div className="flex mt-6 sm:mt-10 md:mt-24 flex-col sm:flex sm:flex-row">
            <div className=" md:w-1/2 pt-3 pb-3 sm:w-10/12">
              <img
                src="/img4.png"
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="px-3 sm:px-4 md:pl-10 sm:py-3 md:py-6 flex-grow">
              <p className="md:mb-4 text-2xl font-semibold lg:text-4xl md:text-2xl sm:text-lg">
                Train custom models on your own work
              </p>
              <p className="mt-4 max-w-xl text-2xl text-white lg:text-2xl md:text-lg sm:text-xs font-extralight">
                Reclaim your likeness online, train your own model 
                on your work, and serve it to
                your fans.
              </p>
              <Link href={'https://app.eden.art/concepts'}>
                <button className="mt-4 border border-xl rounded-3xl px-6 py-3 sm:text-sm sm:px-4 sm:py-2 sm:mt-3 md:mt-3 md:px-3 md:py-2 lg:text-2xl lg:px-6 lg:mt-3 lg:py-3 md:text-md hover:scale-105 hover:bg-[#F15EBF]/60">
                  Explore Concepts
                </button>
              </Link>
              {/* <Link
                href={
                  'https://app.eden.art/creators/syntonikka?conceptId=657334e4377857179ca52d93'
                }
              >
                <p className="mt-4 sm:mt-20 md:text-2xl underline">
                  3D Art by Nico
                </p>
              </Link> */}
            </div>
          </div>

          {/* 5th section */}
          <div className="flex mt-6 sm:mt-10 md:mt-24 flex-col-reverse sm:flex sm:flex-row">
            <div className="px-3 sm:w-2/3 md:pr-10 sm:py-3 md:py-6 flex-grow sm:text-right">
              <p className="md:mb-4 text-2xl font-semibold lg:text-4xl md:text-2xl sm:text-lg">
                Build autonomous creative agents{' '}
              </p>
              <p className="mt-4  text-2xl text-white lg:text-2xl md:text-lg sm:text-xs font-extralight">
                Eden is developing an experimental chatbot who represents your
                artistic brand. Like a concierge who talks to your fans,
                sketches new works in your style, or handles commissions for
                new work.
              </p>
              <Link href={'https://docs.eden.art/docs/guides/characters/'}>
                <button className="mt-4 border border-xl rounded-3xl px-6 py-3 sm:text-sm sm:px-4 sm:py-2 sm:mt-3 md:mt-3 md:px-3 md:py-2 lg:text-2xl lg:px-6 lg:mt-3 lg:py-3 md:text-md hover:scale-105 hover:bg-[#5EF1E8]/60">
                  Apply to Beta Program
                </button>
              </Link>
            </div>
            <div className=" md:w-1/2 pt-3 pb-3 sm:w-6/12">
              <img
                src="/img5.jpg"
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  )
}
