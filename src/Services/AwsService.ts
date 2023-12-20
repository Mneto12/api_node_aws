import service from '../Lib/AwsS3'

const getFile = async (keyFile: string) => {
    return await service.getFile(keyFile)
};

const uploadFile = async (file: any) => {
    return await service.uploadFile(file)
}

export default module.exports = { 
    getFile,
    uploadFile
}