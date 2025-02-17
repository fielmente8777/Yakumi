import { AboutUsDataProps } from "@/@types/types";
import { SectionWithContainer } from "@/components";
import TwoColGridCard from "@/components/TwoColGridCard";

const About: React.FC<AboutUsDataProps> = ({
  title,
  subtitle,
  desc,
  src,
  label,
  href,
}) => {
  return (
    <SectionWithContainer sectionId="about">
      <TwoColGridCard
        title={title}
        subtitle={subtitle}
        desc={desc}
        src={src}
        label={label}
        href={href}
      />
    </SectionWithContainer>
  );
};

export default About;
