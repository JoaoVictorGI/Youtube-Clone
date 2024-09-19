import {
  ChannelImage,
  Container,
  ImageBanner,
  TextCard,
  TextContainer,
  Title,
  TitleContainer,
} from "./styles"

function VideoComponent({ video }: object) {
  return (
    <Container>
      <ImageBanner src={video.thumbnail} />
      <TitleContainer>
        <ChannelImage>{video.name.charAt(0)}</ChannelImage>
      </TitleContainer>
      <TextContainer>
        <Title>{video.title}</Title>
        <TextCard>{video.name}</TextCard>
        <TextCard>1000 visualuzações - há 2 anos</TextCard>
      </TextContainer>
    </Container>
  )
}

export default VideoComponent
