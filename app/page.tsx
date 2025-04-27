import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MasonryGrid from "./components/MasonryGrid";
import Slider from "./components/Slider";
import { About } from "./components/about";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero
        title="musicXchange"
        videoSrc="https://videos.pexels.com/video-files/5659545/5659545-uhd_2732_1440_25fps.mp4"
        subtitle="Invest in your favorite artists"
        ctaText="Get Funding"
        ctaLink="https://funding.chordcash.com/musicxchange"
      />

      <div className="relative flex flex-col items-center pt-20 pb-12 overflow-hidden">
        <img
          src="https://static.wixstatic.com/media/6b5f13_9e2cf134e8164d1b820730596b464b65~mv2.gif"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 text-center flex flex-col gap-4">
          <h1 className="text-5xl text-white">Don't sacrifice ownership</h1>
          <h1 className="text-5xl text-white">Flexible terms</h1>
          <h1 className="text-5xl text-white">Transparent process</h1>
          <h1 className="text-5xl text-white">Simple closing</h1>
          <div>
            <p className="bg-white text-black rounded-md inline-block mt-4 px-4 py-2">
              Where will your music take you?
            </p>
          </div>
        </div>
      </div>
      <Slider />
      <MasonryGrid />
      <Footer />
    </div>
  );
}
