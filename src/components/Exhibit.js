import { Room } from "./Room";
import { Artwork } from "./Artwork";
import { useWindowSize } from "../hooks/useWindowSize";

export const Exhibit = ({ galleryData, artworkIndex, direction }) => {
  const windowSize = useWindowSize();
  let pictureWidth = 700;
  const photo = artworkIndex > 0 ? galleryData.photos[artworkIndex - 1] : null;
  let showingFooter = true;

  if (windowSize && windowSize.height) {
    if (windowSize.height < windowSize.width && windowSize.height < 500) {
      showingFooter = false;
    }

    if (photo) {
      const floorHeight = showingFooter ? 150 : 0;
      const topPadding = 30;
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
        showingFooter={showingFooter}
      />
    </>
  );
};
