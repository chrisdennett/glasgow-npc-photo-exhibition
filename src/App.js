import { Image } from "./components/Image";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Glasgow National Park City Photo Exhibition</h1>
        <h2>
          <a
            className="app-link"
            href="https://www.glasgownationalparkcity.org/"
          >
            Glasgow National Park City
          </a>
        </h2>
      </header>

      <Image
        width={1400}
        height={787}
        placeholder="/img/test/test_w_50x28.jpg"
        src="/img/test/test_w_1400.jpg"
        sizes="(max-width: 1400px) 100vw, 1400px"
        srcSetData={{
          srcSet: `/img/test/test_w_200.jpg 200w,
              /img/test/test_w_353.jpg 353w,
              /img/test/test_w_463.jpg 463w,
              /img/test/test_w_557.jpg 557w,
              /img/test/test_w_644.jpg 644w,
              /img/test/test_w_722.jpg 722w,
              /img/test/test_w_792.jpg 792w,
              /img/test/test_w_863.jpg 863w,
              /img/test/test_w_926.jpg 926w,
              /img/test/test_w_987.jpg 987w,
              /img/test/test_w_1045.jpg 1045w,
              /img/test/test_w_1107.jpg 1107w,
              /img/test/test_w_1165.jpg 1165w,
              /img/test/test_w_1223.jpg 1223w,
              /img/test/test_w_1278.jpg 1278w,
              /img/test/test_w_1330.jpg 1330w,
              /img/test/test_w_1378.jpg 1378w,
              /img/test/test_w_1398.jpg 1398w,
              /img/test/test_w_1400.jpg 1400w`,
          sizes: "(max-width: 1400px) 100vw, 1400px",
        }}
      />

      {/* <ProgressiveImage
          delay={3000}
          srcSetData={{
            srcSet: `/img/test/test_w_200.jpg 200w,
            /img/test/test_w_353.jpg 353w,
            /img/test/test_w_463.jpg 463w,
            /img/test/test_w_557.jpg 557w,
            /img/test/test_w_644.jpg 644w,
            /img/test/test_w_722.jpg 722w,
            /img/test/test_w_792.jpg 792w,
            /img/test/test_w_863.jpg 863w,
            /img/test/test_w_926.jpg 926w,
              /img/test/test_w_987.jpg 987w,
              /img/test/test_w_1045.jpg 1045w,
              /img/test/test_w_1107.jpg 1107w,
              /img/test/test_w_1165.jpg 1165w,
              /img/test/test_w_1223.jpg 1223w,
              /img/test/test_w_1278.jpg 1278w,
              /img/test/test_w_1330.jpg 1330w,
              /img/test/test_w_1378.jpg 1378w,
              /img/test/test_w_1398.jpg 1398w,
              /img/test/test_w_1400.jpg 1400w`,
            sizes: "(max-width: 1400px) 100vw, 1400px",
          }}
          placeholder="/img/test/test_w_50x28.jpg"
          src="/img/test/test_w_1400.jpg"
        >
          {(src, loading, srcSetData) => (
            <img
              srcSet={srcSetData.srcSet}
              sizes={srcSetData.sizes}
              src={src}
              alt="an alternative text"
            />
          )}
        </ProgressiveImage> */}
    </div>
  );
}

export default App;
