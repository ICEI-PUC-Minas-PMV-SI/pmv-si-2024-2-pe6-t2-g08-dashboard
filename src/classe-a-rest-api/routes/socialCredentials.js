import express from 'express';

import verifyToken from '../middleware.js';
import SocialCredentialsController from '../controllers/socialCredentials.js';

/**
 * @swagger
 * components:
 *   schemas:
 *     socialCredentials:
 *       type: object
 *       required:
 *         - id
 *         - clientId
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the socialCredentials
 *         clientId:
 *           type: string
 *           description: The clients Id who the socialCredentials belongs to
 *         email:
 *           type: string
 *           description: The email of the client social account
 *         password:
 *           type: string
 *           description: the password  of the client social account
 *         type:
 *           type: string
 *           description: the type of the current socialCredentials 
 *       example:
 *         id: qw464qwd4q5wd4654d465qw
 *         clientId: q5w4d4qd6w4q6wd465qdw
 *         email: alan.turing@sga.pucminas.br
 *         password: dqqdq44dqdq+d51qd1q51d6q1w5d1q65165q1w65qw65q1dw
 *         type: instagram-account
 */

 /**
 * @swagger
 * tags:
 *   name: SocialCredentials
 *   description: The socialCredentials controller of the API
 * paths:
 *   /social-credentials:
 *     get:
 *       security:
 *         - cookieAuth: []
 *       summary: Lists all the socialCredentials
 *       tags: [SocialCredentials]
 *       responses:
 *         200:
 *           description: The list of the socialCredentials
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/socialCredentials'
 *     post:
 *       security:
 *         - cookieAuth: []
 *       summary: Create a new socialCredentials
 *       tags: [SocialCredentials]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/socialCredentials'
 *       responses:
 *         200:
 *           description: The created socialCredentials.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/socialCredentials'
 *         500:
 *           description: Some server error
 *   /social-credentials/{id}:
 *     get:
 *       security:
 *         - cookieAuth: []
 *       summary: Get the socialCredentials by id
 *       tags: [SocialCredentials]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The socialCredentials id
 *       responses:
 *         200:
 *           description: The socialCredentials response by id
 *           contens:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/socialCredentials'
 *         404:
 *           description: The socialCredentials was not found
 *     patch:
 *       security:
 *          - cookieAuth: []
 *       summary: Uppassword the socialCredentials by the id
 *       tags: [SocialCredentials]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The socialCredentials id
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/socialCredentials'
 *       responses:
 *         200:
 *           description: The socialCredentials was updated
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/socialCredentials'
 *         404:
 *           description: The socialCredentials was not found
 *         500:
 *           description: Some error happened
 *     delete:
 *       security:
 *         - cookieAuth: []
 *       summary: Remove the socialCredentials by id
 *       tags: [SocialCredentials]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The socialCredentials id
 *  
 *       responses:
 *         200:
 *           description: The socialCredentials was deleted
 *         404:
 *           description: The socialCredentials was not found
 */

const router = express.Router();

router.get('/:id', verifyToken, SocialCredentialsController.getSocialCredentials);

router.post('/', verifyToken, SocialCredentialsController.addSocialCredentials);

router.patch('/:id', verifyToken, SocialCredentialsController.updateSocialCredentials);

router.delete('/:id', verifyToken, SocialCredentialsController.deleteSocialCredentials);

router.get('/', verifyToken, SocialCredentialsController.getAllSocialCredentials);

export default router;
