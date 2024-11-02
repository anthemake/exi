import Head from 'next/head';
import Navbar from '@/components/Navbar';
import TimeDisplay from '@/components/TimeDisplay';
import News from '@/components/News';

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-bg-body-color-left to-bg-body-color-right bg-center bg-cover px-6 sm:px-28 py-6">
        <Navbar />
        
        <div className="text-white mt-20 sm:mt-48 max-w-screen-lg z-50 relative mx-auto">
        <h1 className="font-semibold leading-normal sm:text-5xl md:text-6xl lg:text-6xl">Economic<br /><span className="font-light text-cur-text-tan">Xchange</span>Info</h1>
          <br />
          <p className="p-2 sm:text-">The latest news.</p>
          <br />
          <TimeDisplay />

          <div className="flex flex-col sm:flex-row justify-between">
            {/* News Component */}
            <div className="w-full sm:w-1/2">
              <News />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
