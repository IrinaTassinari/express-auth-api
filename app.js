import express from 'express'
import authRouter from './routes/auth.router.js'
import { connectDb,closeDatabaseConnection } from './db/index.js'
import errorMidlleware from './middleware/errorMiddleware.js'
import notFound from './middleware/notFound.js'
import dotenv from 'dotenv'
import authMiddleware from './middleware/auth.js'
dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (_req,res) => {
    res.send({
        message: 'Server is running'
    })
})

//app.use('/authMiddleware', authMiddleware)
app.use('/auth', authRouter)
app.use('/notFound', notFound)
app.use('/error', errorMidlleware)


app.listen(PORT, async () => {
    try{
        await connectDb()
        console.log('Successfull connection to the DB')
        console.log(`Server is running on http://localhost:${PORT}`)
    }catch(error){
        console.error('Failed to connect with Database or server is not running', error.message)
        process.exit(1)
    }
})

process.on('SIGINT', async () => {
    console.log('Shutting down the application')
    await closeDatabaseConnection()
    process.exit(0)
})