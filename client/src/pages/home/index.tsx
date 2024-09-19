import { useEffect, useState } from "react"
import Categories from "../../components/categories"
import VideoComponent from "../../components/videoComponent"
import VideoIsLoadingComponent from "../../components/videoIsLoading"
import { Container } from "./styles"

interface IProps {
  openMenu: boolean
  searchTerm: string
}

interface Video {
  video_id: string
  thumbnail: string
  title: string
  description: string
  user_id: string
  name: string
}

function Home({ openMenu, searchTerm }: IProps) {
  const [videos, setVideo] = useState<Video[]>([])

  useEffect(() => {
    const url = searchTerm
      ? `http://localhost:4000/videos/search?search=${searchTerm}`
      : "http://localhost:4000/videos/get-all-videos"

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setVideo(data.videos)
      })
      .catch((error) => {
        console.error("Erro buscando vídeos: ", error)
      })
  }, [searchTerm])

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
