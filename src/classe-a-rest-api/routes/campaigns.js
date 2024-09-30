import express from 'express';

import verifyToken from '../middleware.js';
import CampaignController from '../controllers/campaigns.js';

/**
 * @swagger
 * components:
 *   schemas:
 *     campaign:
 *       type: object
 *       required:
 *         - id
 *         - clientId
 *         - title
 *         - budget
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the campaign
 *         clientId:
 *           type: string
 *           description: The clients Id who the campaign belongs to
 *         title:
 *           type: string
 *           description: The title of the campaign
 *         budget:
 *           type: string
 *           description: the budget  of the campaign
 *         postCreativeId:
 *           type: string
 *           description: the creative media of the current campaign 
 *       example:
 *         id: qw464qwd4q5wd4654d465qw
 *         clientId: q5w4d4qd6w4q6wd465qdw
 *         title: New Campaign
 *         budget: 500
 *         postCreativeId: wq1d65qw1d651qwd61dw
 */

 /**
 * @swagger
 * tags:
 *   name: Campaigns
 *   description: The campaigns controller of the API
 * paths:
 *   /campaigns:
 *     get:
 *       security:
 *         - cookieAuth: []
 *       summary: Lists all the campaigns
 *       tags: [Campaigns]
 *       responses:
 *         200:
 *           description: The list of the campaigns
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/campaign'
 *     post:
 *       security:
 *         - cookieAuth: []
 *       summary: Create a new campaign
 *       tags: [Campaigns]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/campaign'
 *       responses:
 *         200:
 *           description: The created campaign.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/campaign'
 *         500:
 *           description: Some server error
 *   /campaigns/{id}:
 *     get:
 *       security:
 *         - cookieAuth: []
 *       summary: Get the campaign by id
 *       tags: [Campaigns]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The campaign id
 *       responses:
 *         200:
 *           description: The campaign response by id
 *           contens:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/campaign'
 *         404:
 *           description: The campaign was not found
 *     patch:
 *       security:
 *          - cookieAuth: []
 *       summary: Update the campaign by the id
 *       tags: [Campaigns]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The campaign id
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/campaign'
 *       responses:
 *         200:
 *           description: The campaign was updated
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/campaign'
 *         404:
 *           description: The campaign was not found
 *         500:
 *           description: Some error happened
 *     delete:
 *       security:
 *         - cookieAuth: []
 *       summary: Remove the campaign by id
 *       tags: [Campaigns]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The campaign id
 *  
 *       responses:
 *         200:
 *           description: The campaign was deleted
 *         404:
 *           description: The campaign was not found
 */

const router = express.Router();

router.get('/:id', verifyToken, CampaignController.getCampaign);

router.post('/', verifyToken, CampaignController.addCampaign);

router.patch('/:id', verifyToken, CampaignController.updateCampaign);

router.delete('/:id', verifyToken, CampaignController.deleteCampaign);

router.get('/', verifyToken, CampaignController.getAllCampaigns);

export default router;
