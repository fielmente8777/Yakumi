"use client";
import { SectionWithContainer, TestimonialCard } from "@/components";
import SliderSwip from "@/components/SliderSwip";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials: React.FC = () => {
  return (
    <SectionWithContainer
      sectionId="reviews"
      containerClassName="relative"
    >
      <div className="w-full h-full lg:p-8 max-sm:pt-7 max-sm:pb-14 rounded-lg box_shadow relative z-10 our_features_swiper">
        <SliderSwip
          data={[1, 2, 3]}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true, el: ".pagination_3" }}
        >
          {() => <TestimonialCard />}
        </SliderSwip>
        {/* <TestimonialCard /> */}
        <div className="absolute w-max left-5 lg:left-[38%] lg:bottom-16 bottom-8 z-50">
          <div className="pagination_3 flex items-center justify-center gap-2"></div>
        </div>
      </div>
      <div className="absolute lg:top-0 -top-4 lg:left-2 left-10 lg:rotate-3 -rotate-3 max-width1 h-[22rem] w-full bg-tertiary rounded-lg"></div>
    </SectionWithContainer>
  );
};

export default Testimonials;
