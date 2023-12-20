// Credenciales para los servicios externos Apis, Bases de datos.
import dotenv from 'dotenv';
dotenv.config();
export const configServices = {
    PORT: process.env.PORT,
    DATABASE: process.env.DATABASE_URL,
    S3: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_DEFAULT_REGION,
        bucket: process.env.AWS_BUCKET,
        cdn: process.env.AWS_CDN_URL,
    },
}