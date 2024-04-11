import express from 'express'
import {verifyToken} from '../utils/verifyUser.js'
import { createComment, getPostcomments } from '../controllers/comment.controller.js'

const router = express.Router()

router.post('/create',verifyToken, createComment)
router.get('/getPostcomments/:postId', getPostcomments)

export default router;