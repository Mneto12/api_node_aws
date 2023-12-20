import { Request, Response } from "express";
import service from '../../Services/AwsService'

/**
   * Método para obtener un archivo de S3
   * @param keyFile nombre del archivo
*/
const getFile = async ({ params }: Request, res: Response) => {
    const { keyFile } = params
    const data = await service.getFile(keyFile)
    res.send(data).status(200);
};

/**
   * Método para subir un archivo a S3
   * @param file 
*/
const uploadFile = async ({ file }: Request, res: Response) => {
    const data = await service.uploadFile(file)
    res.send(data).status(201);
};

export default module.exports = { 
    getFile,
    uploadFile
}