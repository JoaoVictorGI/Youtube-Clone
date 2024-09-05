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
      <ImageBanner src={video.image} />
      <TitleContainer>
        <ChannelImage>{video.channel.charAt(0)}</ChannelImage>
      </TitleContainer>
      <TextContainer>
        <Title>{video.title}</Title>
        <TextCard>{video.channel}</TextCard>
        <TextCard>
          {video.views} visualuzações - há {video.time}
        </TextCard>
      </TextContainer>
    </Container>
  )
}

export default VideoComponent
