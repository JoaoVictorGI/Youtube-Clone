import type { Request, Response } from "express"
import { v4 as uuidv4 } from "uuid"
import { pool } from "../../../mysql"

class VideoRepository {
	// Método para criar novo usuário
	create(req: Request, res: Response) {
		// Extrai titulo, descrição e id do usuário do corpo da requisição
		const { thumbnail, title, description, user_id } = req.body
		// Conecta no banco de dados
		pool.getConnection((err: any, connection: any) => {
			// Insere um novo vídeo no banco de dados
			connection.query(
				"INSERT INTO videos (video_id, user_id, thumbnail, title, description) VALUES (?,?,?,?,?)",
				[uuidv4(), user_id, thumbnail, title, description], // Gera um ID
				(error: any, result: any, fields: any) => {
					// Libera a conexão
					connection.release()
					if (error) {
						return res.status(400).json({ error })
					}
					res.status(200).json({ message: "Video uploaded" })
				}
			)
		})
	}

	getVideos(req: Request, res: Response) {
		// Extrai titulo, descrição e id do usuário do corpo da requisição
		const { user_id } = req.query
		// Conecta no banco de dados
		pool.getConnection((err: any, connection: any) => {
			connection.query(
				"SELECT * FROM videos WHERE user_id = ?",
				[user_id],
				(error: any, results: any, fields: any) => {
					// Libera a conexão
					connection.release()
					if (error) {
						return res.status(400).json({ error: "Erro ao buscar vídeo" })
					}
					return res.status(200).json({
						message: "Vídeos retornados com sucesso",
						videos: results,
					})
				}
			)
		})
	}

	searchVideos(req: Request, res: Response) {
		// Extrai titulo, descrição e id do usuário do corpo da requisição
		const { search } = req.query
		// Conecta no banco de dados
		pool.getConnection((err: any, connection: any) => {
			connection.query(
				"SELECT * FROM videos WHERE title OR description LIKE ?",
				[`%${search}%`],
				(error: any, results: any, fields: any) => {
					// Libera a conexão
					connection.release()
					if (error) {
						return res.status(400).json({ error: "Erro ao buscar vídeo" })
					}
					return res.status(200).json({
						message: "Vídeos retornados com sucesso",
						videos: results,
					})
				}
			)
		})
	}
}

export { VideoRepository }
