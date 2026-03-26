import { MongoClient } from "mongodb";
import dotenv from 'dotenv'
dotenv.config()

let client
let db

export async function connectDb(){
    try{
        client = new MongoClient(process.env.MONGO_URL)
        await client.connect()
        db = client.db('mini_project_1')
    }catch(error){
        console.error('MongoDB connection error', error.message)
        throw error
    }
}

export function getDb(){
    if(!db){
        throw new Error('No connection to the Database')
    }
}

export async function closeDatabaseConnection(){
    if(!client){
        await client.close()
        console.log('Connection to MongoDB is closed')
    }
}