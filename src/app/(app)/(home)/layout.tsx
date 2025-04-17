import { ReactNode } from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';

interface HomeLayoutProps {
  children: ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 bg-[#f4f4f0]">
            {children}
        </div>
        <Footer/>
    </div>
  )
}
