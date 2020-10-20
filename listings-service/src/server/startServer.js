import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

import accessEnv from '#root/helpers/accessEnv'

import setupRoutes from './routes'

const PORT = accessEnv('PORT', 7100)

const app = express()

app.use(bodyParser.json())

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: [
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept",
      "X-Password-Expired"
    ],
    optionsSuccessStatus: 200
  })
);

setupRoutes(app)

app.listen(PORT, '0.0.0.0', () => {
  console.info(`Listings services listening on ${PORT}`)
})