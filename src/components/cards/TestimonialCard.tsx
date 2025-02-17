import Image from "next/image";
import Paragraph from "../Paragraph/Paragraph";
import MainHeading from "../Heading/MainHeading";
import { FillStar } from "@/icons/icons";

const TestimonialCard = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="max-w-sm w-full">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src="/Frame.png"
            alt="rating"
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
      </div>
      <div className="pe-3">
        <Image src="/Group.png" alt="rating" width={95} height={90} />
      </div>
      <div className="w-full flex flex-col h-full gap-4">
        <ul className="flex gap-1">
          {[1, 2, 3, 4, 5].map((item) => (
            <li key={item}>
              <FillStar />
            </li>
          ))}
        </ul>
        <Paragraph text="Every burger from Burger Gully is packed with bold, irresistible flavors that take your taste buds on a delicious journey. From juicy patties to creative toppings, every bite is an unforgettable experience!" />

        <MainHeading title="Ashish" className="description1" />
      </div>
    </div>
  );
};

export default TestimonialCard;
