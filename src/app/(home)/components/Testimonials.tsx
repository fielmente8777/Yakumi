"use client";
import { SectionWithContainer, TestimonialCard } from "@/components";
import SliderSwip from "@/components/SliderSwip";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials: React.FC = () => {
  return (
    <SectionWithContainer sectionId="reviews" containerClassName="relative">
      <div className="w-full h-full p-8 rounded-lg box_shadow relative z-10">
        <SliderSwip
          data={[1, 2, 3]}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2000 }}
        >
          {() => <TestimonialCard />}
        </SliderSwip>
        {/* <TestimonialCard /> */}
      </div>
      <div className="absolute top-0 left-2 rotate-3 max-width1 h-[22rem] w-full bg-tertiary rounded-lg"></div>
    </SectionWithContainer>
  );
};

export default Testimonials;
