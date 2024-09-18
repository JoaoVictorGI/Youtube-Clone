import { useEffect, useState } from "react"
import Categories from "../../components/categories"
import VideoComponent from "../../components/videoComponent"
import { Container } from "./styles"
import VideoIsLoadingComponent from "../../components/videoIsLoading"

interface IProps {
  openMenu: boolean
}

interface Video {
  video_id: string
  thumbnail: string
  title: string
  description: string
  user_id: string
  name: string
}

function Home({ openMenu }: IProps) {
  const [videos, setVideo] = useState<Video[]>([])

  useEffect(() => {
    fetch("http://localhost:4000/videos/get-all-videos")
      .then((response) => response.json())
      .then((data) => {
        setVideo(data.videos)
      })
      .catch((error) => {
        console.error("Erro buscando vídeos: ", error)
      })
  }, [])

  return (
    <Container>
      <>
        <Categories />
        {videos.length > 0 ? (
          videos.map((video) => (
            <VideoComponent key={video.video_id} video={video} />
          ))
        ) : (
          <VideoIsLoadingComponent videos={8} />
        )}
      </>
    </Container>
  )
}

export default Home
