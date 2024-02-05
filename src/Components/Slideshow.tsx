import { VStack } from "@chakra-ui/react";
import SimpleImageSlider from "react-simple-image-slider";

interface Props {
  images: { url: string }[];
}
const Slideshow = ({ images }: Props) => {
  return (
    <>
      {/* base */}
      <VStack display={{ base: "flex", sm: "none", md: "none", lg: "none" }}>
        <SimpleImageSlider
          images={images}
          width={320}
          height={180}
          showNavs={true}
          showBullets={false}
          navMargin={0}
          autoPlay={true}
          autoPlayDelay={4}
        />
      </VStack>

      {/* sm */}
      <VStack display={{ base: "none", sm: "flex", md: "none", lg: "none" }}>
        <SimpleImageSlider
          images={images}
          width={480}
          height={270}
          showNavs={true}
          showBullets={false}
          navMargin={0}
          autoPlay={true}
          autoPlayDelay={4}
        />
      </VStack>
      {/* md */}
      <VStack display={{ base: "none", sm: "none", md: "flex", lg: "none" }}>
        <SimpleImageSlider
          images={images}
          width={700}
          height={394}
          showNavs={true}
          showBullets={false}
          navMargin={0}
          autoPlay={true}
          autoPlayDelay={4}
        />
      </VStack>

      {/* lg */}
      <VStack display={{ base: "none", sm: "none", md: "none", lg: "flex" }}>
        <SimpleImageSlider
          images={images}
          width={900}
          height={506}
          showNavs={true}
          showBullets={false}
          navMargin={0}
          autoPlay={true}
          autoPlayDelay={4}
          style={{ background: "black", color: "black" }}
        />
      </VStack>
    </>
  );
};

export default Slideshow;
