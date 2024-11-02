import Navbar from "@/components/Navbar";
import TimeDisplay from "@/components/TimeDisplay";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-bg-body-color-left to-bg-body-color-right bg-center bg-cover px-28 py-2">
        <Navbar />
        <div className="text-white mt-48 max-w-xl z-50 relative">
          <h1 className="font-semibold leading-normal sm:text-5xl md:text-6xl lg:text-6xl">
            About
            <br />
            <span className="font-light text-cur-text-tan">Xchange</span>Info
          </h1>
          <br />
          <p className="p-2">
            Observing the world currency exchange rates as the economic scales
            shift. This is a slow, yet sometimes accelerated marathon of
            progression. Is there an immintent change in the world reserve
            currency? How will cryptocurrency and CBDC's effect things? What has
            been and what is becoming the critical events that push the markets?
          </p>
          <br />
          <p className="text-sm">
            Features may be limited and this site is still in developement so
            some things may not work from time to time.
          </p>
          <br />
          <TimeDisplay />
          <div id="currencyContainer" className="mb-40"></div>
        </div>
      </div>
    </>
  );
}
