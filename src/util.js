var cloudinary = require('cloudinary')
import jwt from 'jsonwebtoken'
import config from '../config'
import path from 'path'

const AWS = require('aws-sdk')
function getToken(email, userId) {
    const userData = { email, userId }
    return jwt.sign(userData, config.ACCESS_TOKEN_SECRETE)
}
function verifyToken(token) {
    return jwt.verify(token, config.ACCESS_TOKEN_SECRETE)
}

async function uploadFile(file, email, type) {
    const ID = 'AKIAJ3RIKEGSPV7OXKYQ'
    const SECRET = '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'
    const BUCKET_NAME = 'gsdata'

    const s3 = new AWS.S3({
        params: {
            Bucket: BUCKET_NAME,
        },
        accessKeyId: ID,
        secretAccessKey: SECRET,
        region: 'ap-south-1',
    })
    const fileName = `${file.md5}${email}${type}${path.extname(file.name)}`
    try {
        return new Promise((resolve, reject) => {
            return s3.upload(
                {
                    Bucket: BUCKET_NAME,
                    ACL: 'public-read',
                    Key: fileName,
                    Body: file.data,
                },
                (err, result) => {
                    if (err) reject(err)
                    else resolve(result)
                }
            )
        })
    } catch (e) {
        console.log(e)
    }
}
function authenticateToken(req, res, next) {
    const { authorization } = req.headers
    const token = authorization && authorization.split('.')[1]
    if (!token) {
        res.sendStatus(401)
    } else {
        try {
            if (verifyToken(authorization)) {
                next()
            } else {
                res.sendStatus(403)
            }
        } catch {
            res.sendStatus(403)
        }
    }
}

export { getToken, verifyToken, uploadFile, authenticateToken }
