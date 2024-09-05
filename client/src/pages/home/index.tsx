import Categories from "../../components/categories"
import VideoComponent from "../../components/videoComponent"
import { Container } from "./styles"

interface IProps {
  openMenu: boolean
}

const videos = [
  {
    image: "https://i.ytimg.com/vi/EHtAi64-c4A/maxresdefault.jpg",
    title: "Genetos - O jogo da evolução humana",
    channel: "Lixeira do Frost",
    views: "7.7k",
    time: "1 ano",
  },
  {
    image: "https://i.ytimg.com/vi/ednxq2jWeU0/hqdefault.jpg",
    title: "Seven nation army by the White stripes (live cover) Orlaith Toral",
    channel: "Orlaith Toral",
    views: "1.7k",
    time: "1 ano",
  },
  {
    image: "https://i.ytimg.com/vi/zy_-l1QRO2s/hqdefault.jpg",
    title: "Back to black by Amy winehouse (live cover) Orlaith Toral",
    channel: "Orlaith Toral",
    views: "2.4k",
    time: "1 ano",
  },
  {
    image:
      "https://i.ytimg.com/vi/iiGDzQG0AlU/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLB2FY2bF8bp3dvA9imc8EqxBIz7Cw",
    title:
      "Amazing crowd reaction as Paul Jenkinson gives a brilliant performance of 'I Gotta Feeling'.",
    channel: "Dublin City Today",
    views: "883k",
    time: "2 anos",
  },
  {
    image: "https://i.ytimg.com/vi_webp/0uHsUE95_qo/maxresdefault.webp",
    title: "Someone You Loved (Lewis Capaldi) Orlaith Toral Cover 🇵🇭",
    channel: "Dublin City Today",
    views: "24k",
    time: "4 anos",
  },
]

function Home({ openMenu }: IProps) {
  return (
    <Container variant={openMenu ? "opened" : "closed"}>
      <>
        <Categories />
        {videos.map((video) => (
          <VideoComponent video={video} />
        ))}
      </>
    </Container>
  )
}

export default Home
