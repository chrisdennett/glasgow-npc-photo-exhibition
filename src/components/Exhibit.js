import { Room } from "./Room";
import { Artwork } from "./Artwork";
import { useWindowSize } from "../hooks/useWindowSize";

export const Exhibit = ({
  galleryData,
  artworkIndex,
  direction,
  onNext,
  onPrev,
}) => {
  const windowSize = useWindowSize();
  let pictureWidth = 700;
  const photo = artworkIndex > 0 ? galleryData.photos[artworkIndex - 1] : null;

  if (windowSize && windowSize.height) {
    if (photo) {
      const floorHeight = windowSize.height > 500 ? 150 : 110;
      const topPadding = windowSize.height > 500 ? 110 : 30;
      const availableHeight = windowSize.height - (floorHeight + topPadding);
      const widthToFit = availableHeight * photo.hToWRatio;
      pictureWidth = widthToFit;
    }
  }

  return (
    <>
      <Room windowSize={windowSize} />
      <Artwork
        pictureWidth={pictureWidth}
        galleryData={galleryData}
        photo={photo}
        direction={direction}
        windowSize={windowSize}
        onNext={onNext}
        onPrev={onPrev}
      />
    </>
  );
};
