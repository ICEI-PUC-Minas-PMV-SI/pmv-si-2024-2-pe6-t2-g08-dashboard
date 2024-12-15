import express from 'express';

import verifyToken from '../middleware.js';
import CalendarController from '../controllers/calendarEvents.js';

/**
 * @swagger
 * components:
 *   schemas:
 *     CalendarEvent:
 *       type: object
 *       required:
 *         - date
 *         - title
 *         - hour
 *         - duration
 *         - clientId
 *       properties:
 *         date:
 *           type: string
 *           format: date
 *           description: The date of the event
 *         title:
 *           type: string
 *           description: The title of the event
 *         hour:
 *           type: string
 *           description: The start hour of the event (e.g., "14:00")
 *         duration:
 *           type: string
 *           description: The duration of the event (e.g., "2 hours")
 *         clientId:
 *           type: string
 *           description: The clientId of the event (e.g., "q5w4d4qd6w4q6wd465qdw")
 *       example:
 *         date: "2024-12-25"
 *         title: "Christmas Party"
 *         hour: "18:00"
 *         duration: "3 hours"
 *         clientId: "q5w4d4qd6w4q6wd465qdw"
 */

/**
 * @swagger
 * tags:
 *   name: Calendar
 *   description: The calendar controller of the API
 * paths:
 *   /calendar:
 *     get:
 *       security:
 *         - cookieAuth: []
 *       summary: Lists all calendar events
 *       tags: [Calendar]
 *       responses:
 *         200:
 *           description: The list of the calendar events
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/CalendarEvent'
 *     post:
 *       security:
 *         - cookieAuth: []
 *       summary: Create a new calendar event
 *       tags: [Calendar]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CalendarEvent'
 *       responses:
 *         200:
 *           description: The created calendar event
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/CalendarEvent'
 *         500:
 *           description: Some server error
 *   /calendar/{id}:
 *     get:
 *       security:
 *         - cookieAuth: []
 *       summary: Get the calendar event by id
 *       tags: [Calendar]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The calendar event id
 *       responses:
 *         200:
 *           description: The calendar event response by id
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/CalendarEvent'
 *         404:
 *           description: The calendar event was not found
 *     patch:
 *       security:
 *         - cookieAuth: []
 *       summary: Update the calendar event by the id
 *       tags: [Calendar]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The calendar event id
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CalendarEvent'
 *       responses:
 *         200:
 *           description: The calendar event was updated
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/CalendarEvent'
 *         404:
 *           description: The calendar event was not found
 *         500:
 *           description: Some error happened
 *     delete:
 *       security:
 *         - cookieAuth: []
 *       summary: Remove the calendar event by id
 *       tags: [Calendar]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The calendar event id
 *       responses:
 *         200:
 *           description: The calendar event was deleted
 *         404:
 *           description: The calendar event was not found
 * 
 * /calendar/bulk:
 *    post:
 *      security:
 *         - cookieAuth: []
 *      summary: Create multiple calendar events
 *      description: This endpoint allows you to create multiple calendar events in bulk.
 *      tags: [Calendar]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                schema:
 *                $ref: '#/components/schemas/CalendarEvent'
 *      responses:
 *        '201':
 *          description: Successfully created the events
 *        '400':
 *          description: Bad request - Validation errors (e.g., missing fields in the request)
 *        '500':
 *          description: Internal Server Error
 */

const router = express.Router();

// Route to get a specific calendar event by id
router.get('/:id', verifyToken, CalendarController.getEvent);

// Route to create a new calendar event
router.post('/', verifyToken, CalendarController.addEvent);

// Route to update a calendar event by id
router.patch('/:id', verifyToken, CalendarController.updateEvent);

// Route to delete a calendar event by id
router.delete('/:id', verifyToken, CalendarController.deleteEvent);

// Route to get all calendar events
router.get('/', verifyToken, CalendarController.getAllEvents);

router.post('/bulk', CalendarController.createMultipleCalendarEvents);

export default router;
