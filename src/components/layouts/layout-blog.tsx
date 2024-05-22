import { ReactNode } from 'react';
import Footer from '@/components/Footer';
import NavHeader from '@/components/navigation/NavHeader';

export default function LayoutBlog({ children }: { children: ReactNode }) {
  return (
    <div className="bg-black">
      <NavHeader/>
      <div className="relative min-h-screen flex flex-col ">
        <section className="flex-grow">
          <div className="text-white flex px-4 xl:px-24 flex-col z-10 m-10 mt-32">
            {children}
          </div>
        </section>
        <div className="mt-2">
          <Footer/>
        </div>
      </div>
    </div>
  )
}