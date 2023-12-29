import { VStack } from "@chakra-ui/react";
import SimpleImageSlider from "react-simple-image-slider";

interface Props {
  images: { url: string }[];
}
const Slideshow = ({ images }: Props) => {
  return (
    <>
      {/* small */}
      <VStack display={{ base: "flex", sm: "none", md: "none", lg: "none" }}>
        <SimpleImageSlider
          images={images}
          width={320}
          height={180}
          showNavs={true}
          showBullets={true}
          navMargin={0}
        />
      </VStack>

      {/* med */}
      <VStack display={{ base: "none", sm: "flex", md: "none", lg: "none" }}>
        <SimpleImageSlider
          images={images}
          width={480}
          height={270}
          showNavs={true}
          showBullets={true}
          navMargin={0}
        />
      </VStack>
      {/* lg */}
      <VStack display={{ base: "none", sm: "none", md: "flex", lg: "none" }}>
        <SimpleImageSlider
          images={images}
          width={700}
          height={394}
          showNavs={true}
          showBullets={true}
          navMargin={0}
        />
      </VStack>

      {/* >lg */}
      <VStack display={{ base: "none", sm: "none", md: "none", lg: "flex" }}>
        <SimpleImageSlider
          images={images}
          width={900}
          height={506}
          showNavs={true}
          showBullets={true}
          navMargin={0}
        />
      </VStack>
    </>
  );
};

export default Slideshow;
