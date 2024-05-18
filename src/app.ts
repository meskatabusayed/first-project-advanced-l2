import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { studentRoutes } from './app/modules/student/student.route'
const app: Application = express()


//parser
app.use(express.json())
app.use(cors())

//application routes

app.use('api/v1/students' , studentRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10
  res.send({a})
}

app.get('/', getAController);

// console.log(process.cwd());
export default app
