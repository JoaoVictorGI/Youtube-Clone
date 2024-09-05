import { Router } from "express"
import { auth } from "../middleware/auth"
import { VideoRepository } from "../modules/videos/repositories/VideoRepository"

const videosRoutes = Router()
const videoRepository = new VideoRepository()

videosRoutes.post("/create-video", auth, (req, res) => {
	videoRepository.create(req, res)
})

videosRoutes.get("/get-videos", auth, (req, res) => {
	videoRepository.getVideos(req, res)
})

videosRoutes.get("/search", (req, res) => {
	videoRepository.searchVideos(req, res)
})

export { videosRoutes }
