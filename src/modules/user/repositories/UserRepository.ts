import { compare, hash } from "bcrypt";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { pool } from "../../../mysql";

class UserRepository {
  // Método para criar novo usuário
  create(req: Request, res: Response) {
    // Extrai nome, email e senha do corpo da requisição
    const { name, email, password } = req.body;
    // Conecta no banco de dados
    pool.getConnection((err: any, connection: any) => {
      // Gera um hash da senha
      hash(password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json(err);
        }

        // Insere um novo usuário no banco de dados
        connection.query(
          "INSERT INTO users (user_id, name, email, password) VALUES (?,?,?,?)",
          [uuidv4(), name, email, hash], // Gera um ID
          (error: any, result: any, fields: any) => {
            // Libera a conexão
            connection.release();
            if (error) {
              return res.status(400).json({ error });
            } else {
              res.status(200).json({ message: "User created" });
            }
          },
        );
      });
    });
  }

  login(req: Request, res: Response) {
    // Extrai email e senha do corpo da requisição
    const { email, password } = req.body;
    // Conecta no banco de dados
    pool.getConnection((err: any, connection: any) => {
      // Busca pelo email do usuário no banco de dados
      connection.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (error: any, results: any, fields: any) => {
          connection.release();
          if (error) {
            return res.status(400).json({ error: "Erro na autenticação" });
          }

          // Compara senha que o usuário digitou com a hash do banco de dados
          compare(password, results[0].password, (err, result) => {
            if (err) {
              return res.status(400).json({ error: "Erro na autenticação" });
            }

            if (result) {
              // Gera um JWT se a senha estiver correta
              const token = sign(
                {
                  id: results[0].user_id,
                  email: results[0].email,
                },
                process.env.SECRET as string, // Chave para assinar o token
                { expiresIn: "1d" }, // Token expira um 1 dia
              );

              // Retorna o token JWT
              return res
                .status(200)
                .json({ token: token, message: "Authenticated" });
            }
          });
        },
      );
    });
  }
}

export { UserRepository };
