import { Response } from "express"

export const handleHttp = (res: Response, error: string, err?: unknown) => {
  console.log(err)
  res.status(500).send({error})
}