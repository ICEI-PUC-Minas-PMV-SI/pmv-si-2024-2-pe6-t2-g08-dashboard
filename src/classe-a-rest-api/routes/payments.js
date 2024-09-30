import express from 'express';

import verifyToken from '../middleware.js';
import PaymentController from '../controllers/payments.js';

/**
 * @swagger
 * components:
 *   schemas:
 *     payment:
 *       type: object
 *       required:
 *         - id
 *         - clientId
 *         - amount
 *         - date
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the payment
 *         clientId:
 *           type: string
 *           description: The clients Id who the payment belongs to
 *         amount:
 *           type: string
 *           description: The amount of the payment
 *         date:
 *           type: string
 *           description: the date  of the payment
 *         type:
 *           type: string
 *           description: the type of the current payment 
 *       example:
 *         id: qw464qwd4q5wd4654d465qw
 *         clientId: q5w4d4qd6w4q6wd465qdw
 *         amount: 500
 *         date: 29/09/2024 00:00 
 *         type: plan-payment
 */

 /**
 * @swagger
 * tags:
 *   name: Payments
 *   description: The payments controller of the API
 * paths:
 *   /payments:
 *     get:
 *       security:
 *         - cookieAuth: []
 *       summary: Lists all the payments
 *       tags: [Payments]
 *       responses:
 *         200:
 *           description: The list of the payments
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/payment'
 *     post:
 *       security:
 *         - cookieAuth: []
 *       summary: Create a new payment
 *       tags: [Payments]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/payment'
 *       responses:
 *         200:
 *           description: The created payment.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/payment'
 *         500:
 *           description: Some server error
 *   /payments/{id}:
 *     get:
 *       security:
 *         - cookieAuth: []
 *       summary: Get the payment by id
 *       tags: [Payments]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The payment id
 *       responses:
 *         200:
 *           description: The payment response by id
 *           contens:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/payment'
 *         404:
 *           description: The payment was not found
 *     patch:
 *       security:
 *          - cookieAuth: []
 *       summary: Update the payment by the id
 *       tags: [Payments]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The payment id
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/payment'
 *       responses:
 *         200:
 *           description: The payment was updated
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/payment'
 *         404:
 *           description: The payment was not found
 *         500:
 *           description: Some error happened
 *     delete:
 *       security:
 *         - cookieAuth: []
 *       summary: Remove the payment by id
 *       tags: [Payments]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The payment id
 *  
 *       responses:
 *         200:
 *           description: The payment was deleted
 *         404:
 *           description: The payment was not found
 */

const router = express.Router();

router.get('/:id', verifyToken, PaymentController.getPayment);

router.post('/', verifyToken, PaymentController.addPayment);

router.patch('/:id', verifyToken, PaymentController.updatePayment);

router.delete('/:id', verifyToken, PaymentController.deletePayment);

router.get('/', verifyToken, PaymentController.getAllPayments);

export default router;
