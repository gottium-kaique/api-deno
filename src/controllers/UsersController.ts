import connect from "../database/connect.ts"
import { Request, Response } from "https://deno.land/x/opine@0.21.2/src/types.ts"

class UsersController {
  async index(req: Request, res: Response) {
    const { 
      email
    } = req.parsedBody

    const [user] = connect
      .query(`SELECT * FROM users WHERE email='${email}'`)

    return res.json({
      id: user[0],
      name: user[1],
      email: user[2],
      age: user[3],
      password: user[4],
    })
  }

  async create(req: Request, res: Response) {
    const { 
      name, 
      email, 
      age, 
      password 
    } = req.parsedBody

    const [userAlreadyExists] = connect.query(`SELECT * FROM users 
      WHERE email='${email}'
    `)

    if(userAlreadyExists) {
      return res.sendStatus(409)
    }

    try {
      const user = connect.query(`INSERT INTO users 
      (name, email, age, password) VALUES
      ('${name}','${email}', '${age}', '${password}')
    `)
    } catch {
      res.status = 400
      return res.send("Algo deu errado!")
    }

    res.status = 200

    return res.send("Usuário cadastrado com sucesso!")
  }

  async update(req: Request, res: Response) {
    const { 
      userEmail, 
      userPassword, 
      name, 
      email, 
      age, 
      password 
    } = req.parsedBody

    const [user] = connect
      .query(`SELECT * FROM users WHERE 
        email='${userEmail}' AND password='${userPassword}'
    `)

    if (!user) {
      return res.send("Usuário ou senha incorretos!")
    }

    const userData = [
      {columnName: "name", value: name}, 
      {columnName: "email", value: email}, 
      {columnName: "age", value: age}, 
      {columnName: "password", value: password},
    ]

    userData.map(item => {
      if (item.value) {
        return connect.query(`UPDATE users SET ${item.columnName}='${item.value}' 
          WHERE email='${userEmail}' AND password='${userPassword}'
        `)
      }
    })

    return res.send("Dados da conta atualizados com sucesso!")
  }

  async delete(req: Request, res: Response) {
    const { email, password } = req.parsedBody

    const [user] = connect.query(`SELECT * FROM users 
      WHERE email='${email}' 
      AND password='${password}'
    `)

    if (!user) {
      res.status = 400
      return res.send("Usuário ou senha incorretos!")
    }

    connect.query(`DELETE FROM users 
      WHERE email='${email}' 
      AND password='${password}'
    `)

    res.status = 200
    return res.send("Deletado com sucesso!")
  }
}

export default new UsersController()