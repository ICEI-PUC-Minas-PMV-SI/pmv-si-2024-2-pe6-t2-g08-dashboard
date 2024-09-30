import express from 'express';

import verifyToken from '../middleware.js';
import PlansController from '../controllers/plans.js';

/**
 * @swagger
 * components:
 *   schemas:
 *     Plan:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - amount
 *         - options
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the plan
 *         name:
 *           type: string
 *           description: The name of the plan
 *         amount:
 *           type: string
 *           description: The plan amount
 *         options:
 *           type: string
 *           description: the properties and options of the plan
 *       example:
 *         id: basic-plan-instagram
 *         name: Instagram Basic Plan
 *         amount: 5000
 *         options: [Array of Info]
 */

 /**
 * @swagger
 * tags:
 *   name: Plans
 *   description: The plans controller of the API
 * paths:
 *   /plans:
 *     get:
 *       security:
 *         - cookieAuth: []
 *       summary: Lists all the plans
 *       tags: [Plans]
 *       responses:
 *         200:
 *           description: The list of the plans
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Plan'
 *     post:
 *       security:
 *         - cookieAuth: []
 *       summary: Create a new plan
 *       tags: [Plans]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Plan'
 *       responses:
 *         200:
 *           description: The created plan.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Plan'
 *         500:
 *           description: Some server error
 *   /plans/{id}:
 *     get:
 *       security:
 *         - cookieAuth: []
 *       summary: Get the plan by id
 *       tags: [Plans]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The plan id
 *       responses:
 *         200:
 *           description: The plan response by id
 *           contens:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Plan'
 *         404:
 *           description: The plan was not found
 *     patch:
 *       security:
 *          - cookieAuth: []
 *       summary: Update the plan by the id
 *       tags: [Plans]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The plan id
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Plan'
 *       responses:
 *         200:
 *           description: The plan was updated
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Plan'
 *         404:
 *           description: The plan was not found
 *         500:
 *           description: Some error happened
 *     delete:
 *       security:
 *         - cookieAuth: []
 *       summary: Remove the plan by id
 *       tags: [Plans]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The plan id
 *  
 *       responses:
 *         200:
 *           description: The plan was deleted
 *         404:
 *           description: The plan was not found
 */

const router = express.Router();

router.get('/:id', verifyToken, PlansController.getPlan);

router.post('/', verifyToken, PlansController.addPlan);

router.patch('/:id', verifyToken, PlansController.updatePlan);

router.delete('/:id', verifyToken, PlansController.deletePlan);

router.get('/', verifyToken, PlansController.getAllPlans);

export default router;
