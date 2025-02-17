import { Banner } from "@/components";
import { pageData } from "@/data/pageData";
import { About, ContactUs, Features, Gallery, OurFeatures, Testimonials } from "./components";
export default function Home() {
  return (
    <main>
      <Banner {...pageData.bannerData} />
      <About {...pageData.aboutUsData} /> 
      <Features {...pageData.features} />
      <OurFeatures {...pageData.ourFeatures} />
      <Testimonials />
      <ContactUs />
      <Gallery {...pageData.gallery} />
    </main>
  );
}
