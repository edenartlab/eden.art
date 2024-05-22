import Link from 'next/link';
import { ControlOutlined, FileTextOutlined, MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import useWindowSize from '@/hooks/useWindowSize';

const NavHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const size = useWindowSize()

  return (
    <div
      className={`fixed z-50 w-full bg-black opacity-75 ${
        isMenuOpen && size.width < 640 ? 'h-72' : 'h-16'
      }`}
    >
      {' '}
      <div className="flex justify-between">
        <div className=" flex items-center">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Eden Logo"
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
                  Explore
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
              <MenuOutlined/>
            </button>
          </div>
          <div className="hidden sm:flex">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/edenartlab"
            >
              <img alt="Github Logo" src="/github.png" className="h-8 sm:h-10 object-contain"/>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.com/invite/4dSYwDT"
            >
              <img
                alt="Discord Logo"
                src="/discord.png"
                className="h-8 ml-2 sm:h-10 sm:ml-4 object-contain"
              />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/Eden_Art_"
            >
              <img
                alt="Twitter Logo"
                src="/twitter.png"
                className="h-8 ml-2 sm:h-10 sm:ml-4 object-contain"
              />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/eden.art____"
            >
              <img
                alt="Instagram Logo"
                src="/instagram.png"
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
                EXPLORE
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
                alt="Github Logo"
                src="/github.png"
                className="h-8 mt-1.5 ml-4 object-contain"
              />{' '}
              <p className="text-white ml-2 mt-3 text-sm font-bold">
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
                alt="Discord Logo"
                src="/discord.png"
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
              <img alt="Twitter Logo" src="/twitter.png" className="h-8 ml-4 object-contain"/>{' '}
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
              <img alt="Instagram Logo" src="/instagram.png" className="h-8 ml-4 object-contain"/>{' '}
              <p className="text-white ml-2 mt-2 text-sm font-bold">
                INSTAGRAM
              </p>
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}

export default NavHeader