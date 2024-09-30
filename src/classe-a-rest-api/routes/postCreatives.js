import express from 'express';

import verifyToken from '../middleware.js';
import PostCreativeController from '../controllers/postCreatives.js';

/**
 * @swagger
 * components:
 *   schemas:
 *     PostCreative:
 *       type: object
 *       required:
 *         - id
 *         - clientId
 *         - content
 *         - mediaType
 *         - mediaUrl
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the postCreative
 *         clientId:
 *           type: string
 *           description: The clientId of the postCreative
 *         content:
 *           type: string
 *           description: The postCreative content
 *         mediaType:
 *           type: string
 *           description: the type of media of the postCreative
 *         mediaUrl:
 *           type: string
 *           description: the url of the media 
 *         evaluation:
 *           type: string[]
 *           description: the evaluations of the postCreative
 *       example:
 *         id: Lx2gPf5q5fhDoBtAf5j2KCemKkv2
 *         clientId: q5w4d4qd6w4q6wd465qdw
 *         content: This is the text content of a post directed to a social network
 *         mediaType: Image
 *         mediaUrl: https://someurl.com/some-file.jpg
 *         evaluation: [Array of evaluations]
 */

 /**
 * @swagger
 * tags:
 *   name: PostCreatives
 *   description: The postCreatives controller of the API
 * paths:
 *   /post-creatives:
 *     get:
 *       security:
 *         - cookieAuth: []
 *       summary: Lists all the postCreatives
 *       tags: [PostCreatives]
 *       responses:
 *         200:
 *           description: The list of the postCreatives
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/PostCreative'
 *     post:
 *       security:
 *         - cookieAuth: []
 *       summary: Create a new postCreative
 *       tags: [PostCreatives]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PostCreative'
 *       responses:
 *         200:
 *           description: The created postCreative.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/PostCreative'
 *         500:
 *           description: Some server error
 *   /post-creatives/{id}:
 *     get:
 *       security:
 *         - cookieAuth: []
 *       summary: Get the postCreative by id
 *       tags: [PostCreatives]
 *       parameters:
 *         - in: path
 *           clientId: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The postCreative id
 *       responses:
 *         200:
 *           description: The postCreative response by id
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/PostCreative'
 *         404:
 *           description: The postCreative was not found
 *     patch:
 *       security:
 *          - cookieAuth: []
 *       summary: Update the postCreative by the id
 *       tags: [PostCreatives]
 *       parameters:
 *         - in: path
 *           clientId: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The postCreative id
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PostCreative'
 *       responses:
 *         200:
 *           description: The postCreative was updated
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/PostCreative'
 *         404:
 *           description: The postCreative was not found
 *         500:
 *           description: Some error happened
 *     delete:
 *       security:
 *         - cookieAuth: []
 *       summary: Remove the postCreative by id
 *       tags: [PostCreatives]
 *       parameters:
 *         - in: path
 *           clientId: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The postCreative id
 *  
 *       responses:
 *         200:
 *           description: The postCreative was deleted
 *         404:
 *           description: The postCreative was not found
 */

const router = express.Router();

router.get('/:id', verifyToken, PostCreativeController.getPostCreative);

router.post('/', verifyToken, PostCreativeController.addPostCreative);

router.patch('/:id', verifyToken, PostCreativeController.updatePostCreative);

router.delete('/:id', verifyToken, PostCreativeController.deletePostCreative);

router.get('/', verifyToken, PostCreativeController.getAllPostCreatives);

export default router;
