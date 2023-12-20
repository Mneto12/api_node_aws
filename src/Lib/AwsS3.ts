import { S3Client, GetObjectCommand, PutObjectCommand} from '@aws-sdk/client-s3'
import { configServices } from '../Config/services'
import fs from 'fs'

/**
   * Instancia del cliente S3 para realizar las operaciones de subida y bajada de archivos.
*/
// @ts-ignore
const S3 = new S3Client({
  region: configServices.S3.region,
  credentials: {
    accessKeyId: configServices.S3.accessKeyId,
    secretAccessKey: configServices.S3.secretAccessKey,
  },
})

const BUCKET_NAME = configServices.S3.bucket

/**
   * Metodo para obtener un archivo de S3.
   * @returns object
*/
const getFile = async (keyFile: string) => {
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: keyFile,
  })
  try {
    const data = await S3.send(command)
    return data
  } catch (e) {
    console.error('Error getting files from S3:', e)
    throw e
  }
}

/**
   * Metodo para obtener un archivo de S3.
   * @returns file
*/
const uploadFile = async (file: any) => {
  const stream = fs.createReadStream(file)
  stream.on('error', (err) => {
      throw new Error(`ReadStream Error: ${err.message}`)
  })

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: `path`,
    Body: stream,
  })

  try {
    const response = await S3.send(command)
    return {
      ...response
    }
  } catch (e) {
    console.error('Error uploading to S3:', e)
    throw e
  }
}

export default module.exports = { 
    getFile,
    uploadFile
}
  