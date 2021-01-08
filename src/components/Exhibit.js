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
  let showingFooter = true;
  let showPeople = false;

  if (windowSize && windowSize.height) {
    if (windowSize.height < windowSize.width && windowSize.height < 500) {
      showingFooter = false;
    }

    if (windowSize.height > 500 && windowSize.width > 800) {
      showPeople = true;
    }

    if (photo) {
      const floorHeight = showingFooter ? 150 : 0;
      // const topNavHeight = 60;
      const topPadding = windowSize.height > 500 ? 110 : 30;
      const availableHeight = windowSize.height - (floorHeight + topPadding);
      const widthToFit = availableHeight * photo.hToWRatio;
      pictureWidth = widthToFit;
    }
  }

  return (
    <>
      <Room showingFooter={showingFooter} />
      <Artwork
        pictureWidth={pictureWidth}
        galleryData={galleryData}
        photo={photo}
        direction={direction}
        showPeople={showPeople}
        showingFooter={showingFooter}
        onNext={onNext}
        onPrev={onPrev}
      />
    </>
  );
};
