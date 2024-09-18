import {
  ChannelImage,
  Container,
  ImageBanner,
  TextCard,
  TextContainer,
  Title,
  TitleContainer,
  TitleGrayContainer,
} from "./styles"

function VideoIsLoadingComponent({ videos }) {
  return Array(videos)
    .fill(0)
    .map((_, i) => (
      <Container key={i}>
        <ImageBanner />
        <TitleContainer>
          <ChannelImage />
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
            }}
          >
            <TitleGrayContainer>
              <span>ㅤ</span>
            </TitleGrayContainer>

            <TitleGrayContainer>
              <span>ㅤ</span>
            </TitleGrayContainer>
          </div>
        </TitleContainer>
      </Container>
    ))
}

export default VideoIsLoadingComponent
