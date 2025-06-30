import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import createRoutes from './routes/createRoutes.js'
import authRoutes from './routes/authRoutes.js'

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(cors())

app.use(createRoutes)
app.use(authRoutes)

app.listen(PORT, console.log(`Servidor on fire 🔥 http://localhost:${PORT}`))