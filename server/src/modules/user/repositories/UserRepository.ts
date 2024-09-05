import { compare, hash } from "bcrypt"
import type { Request, Response } from "express"
import { sign, verify } from "jsonwebtoken"
import type { MysqlError, PoolConnection } from "mysql"
import { v4 as uuidv4 } from "uuid"
import { pool } from "../../../mysql"

class UserRepository {
	// Método para criar novo usuário
	create(req: Request, res: Response) {
		// Extrai nome, email e senha do corpo da requisição
		const { name, email, password } = req.body
		// Conecta no banco de dados
		pool.getConnection(
			(_err: MysqlError | null, connection: PoolConnection) => {
				// Gera um hash da senha
				hash(password, 10, (err, hash) => {
					if (err) {
						return res.status(500).json(err)
					}

					// Insere um novo usuário no banco de dados
					connection.query(
						"INSERT INTO users (user_id, name, email, password) VALUES (?,?,?,?)",
						[uuidv4(), name, email, hash], // Gera um ID
						(error: MysqlError | null, _result, _fields) => {
							// Libera a conexão
							connection.release()
							if (error) {
								return res.status(400).json({ error })
							}
							res.status(200).json({ message: "User created" })
						}
					)
				})
			}
		)
	}

	login(req: Request, res: Response) {
		// Extrai email e senha do corpo da requisição
		const { email, password } = req.body
		// Conecta no banco de dados
		pool.getConnection(
			(_err: MysqlError | null, connection: PoolConnection) => {
				// Busca pelo email do usuário no banco de dados
				connection.query(
					"SELECT * FROM users WHERE email = ?",
					[email],
					(error: MysqlError | null, results, _fields) => {
						connection.release()
						if (error) {
							return res.status(400).json({ error: "Erro na autenticação" })
						}

						// Compara senha que o usuário digitou com a hash do banco de dados
						compare(password, results[0].password, (err, result) => {
							if (err) {
								return res.status(400).json({ error: "Erro na autenticação" })
							}

							if (result) {
								// Gera um JWT se a senha estiver correta
								const token = sign(
									{
										id: results[0].user_id,
										email: results[0].email,
									},
									process.env.SECRET as string, // Chave para assinar o token
									{ expiresIn: "1d" } // Token expira um 1 dia
								)

								// Retorna o token JWT
								return res
									.status(200)
									.json({ token: token, message: "Authenticated" })
							}
						})
					}
				)
			}
		)
	}

	getUser(req: Request, res: Response): void {
		const decode = verify(
			req.headers.authorization as string,
			process.env.SECRET as string
		) as { email: string }

		if (decode.email) {
			pool.getConnection((_error: MysqlError | null, conn: PoolConnection) => {
				conn.query(
					"SELECT * FROM users WHERE email=?",
					[decode.email],
					(error, result, _fields) => {
						conn.release()
						if (error) {
							return res.status(400).send({
								error: error,
								res: null,
							})
						}

						return res.status(201).send({
							user: {
								nome: result[0].name,
								email: result[0].email,
								id: result[0].user_id,
							},
						})
					}
				)
			})
		}
	}
}

export { UserRepository }
