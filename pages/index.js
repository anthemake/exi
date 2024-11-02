import Head from 'next/head'
import Navbar from '@/components/Navbar';
import TimeDisplay from '@/components/TimeDisplay';
import Currency from '@/components/Currency';


export default function Home() {
  return (
    <>
    <Head>
    <meta name="description" content="Observing the world currency exchange rates as the economic scales shift." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Economic XchangeInfo</title>
    </Head>
     <div className="min-h-screen bg-gradient-to-r from-bg-body-color-left to-bg-body-color-right bg-center bg-cover px-28 py-2">
     <Navbar/>
      <div className="text-white mt-48 max-w-xl z-50 relative">
        <h1 className="font-semibold leading-normal sm:text-5xl md:text-6xl lg:text-6xl">Economic<br /><span className="font-light text-cur-text-tan">Xchange</span>Info</h1>
        <br />
        <p className="p-2">Observing the world currency exchange rates as the economic scales shift.</p>
        <br />
       
   
        <br />
        <TimeDisplay/>
        <h2 className="text-emerald-100 font-mono italic">Rates</h2>
        
        <p className="text-1sm text-gray-200 my-2">Base: USD</p>
        <div id="currencyContainer" className="mb-40"><Currency /></div>
      </div>
    </div>

    
    </>
  )
}
