import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import fileUpload from 'express-fileUpload'
// import config from './Utils/Config'
import VideoLogic from '../Logic/VideoLogicMYSQL'

// REST:
// GET => WWW.SOME-SHIT.CO.IL/LOGIN/?USER=JAMES&PASSWORD=12345 => UPTO 256 CHAR => NOT SECURED
// POST => WWW.SOME-SHIT.CO.IL/LOGIN + BODY{'USER':'JAMES', 'PASSWORD':'12345} => UPTO 2GB => SECURED
// PUT => LIKE POST BUT FOR UPDATE
// DELETE => LIKE GET BUT FOR DELETE

//addVideo => POST
//deleteVideo => DELETE
//videoList => GET
//videoSelect => GET
//videoUpdate => PUT

const router = express.Router()

router.post(
  '/addVideo',
  async (request: Request, response: Response, next: NextFunction) => {
    const body = request.body
    console.log('request body: ', body)
    response.status(201).json("{'msg':'video was uploaded'}")
  },
)

//URL=> https://localhost:8080/deleteVideo/5
router.delete(
  '/deleteVideo/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    const videoId = +request.params.id
    if (videoId === null || videoId < 1) {
      response.status(404).json("{'msg':'video not found'}")
    }
    console.log('Deleting: ', videoId)
    response.status(204)
  },
)

router.get(
  '/videoList',
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await VideoLogic.videoList())
  },
)

export default router
