import { getFirestore } from 'firebase-admin/firestore';
import CalendarEvent from '../models/CalendarEvent.js';

const db = getFirestore();
const calendarColl = db.collection('calendar');

export default {
  // Add a new calendar event
  addEvent: async (req, res) => {
    const { body: payload } = req;

    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: 'Body is empty, cannot create the calendar event.',
        },
      });
    }

    try {
      const calendarEvent = await calendarColl.add({ ...payload });
      return res.status(200).json({
        status: true,
        data: calendarEvent,
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        error: error.message,
      });
    }
  },

  // Get a specific calendar event by ID
  getEvent: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      console.log("id", id);
      const calendarData = await calendarColl.doc(id).get();

      if (!calendarData.exists) {
        return res.status(400).send('No calendar event found');
      } else {
        const event = new CalendarEvent(
          calendarData.data().id,
          calendarData.data().date,
          calendarData.data().title,
          calendarData.data().hour,
          calendarData.data().duration,
          calendarData.data().clientId
        );
        console.log(event);
        return res.status(200).send(event);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  // Get all calendar events
  getAllEvents: async (req, res) => {
    try {
      const snapshot = await calendarColl.get();
      if (snapshot.empty) {
        return res.status(400).send('No calendar events found');
      } else {
        const eventList = snapshot.docs.map((doc) => {
          return new CalendarEvent(
            doc.data().id,
            doc.data().date,
            doc.data().title,
            doc.data().hour,
            doc.data().duration,
            doc.data().clientId
          );
        });
        return res.status(200).send(eventList);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  // Update a specific calendar event by ID
  updateEvent: async (req, res) => {
    const {
      params: { id },
      body: payload,
    } = req;

    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: 'Body is empty, cannot update the calendar event.',
        },
      });
    }

    try {
      await calendarColl.doc(id).update(payload);
      return res.status(200).send('Calendar event updated successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // Delete a calendar event by ID
  deleteEvent: async (req, res) => {
    const {
      params: { id },
    } = req;
    try {
      await calendarColl.doc(id).delete();
      return res.status(200).send('Calendar event deleted successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // Controller method to create multiple calendar events
createMultipleCalendarEvents: async (req, res) => {
  try {
      // Validate that the body is an array of events
      const events = req.body;

      if (!Array.isArray(events) || events.length === 0) {
          return res.status(400).json({ error: 'The request body must be an array of events.' });
      }

      // Validate that each event in the array has necessary fields
      const invalidEvents = events.filter(event => 
          !event.date || !event.hour || !event.duration || !event.title || !event.clientId
      );

      if (invalidEvents.length > 0) {
          return res.status(400).json({ error: 'Each event must contain a date, hour, duration, title, and clientId.' });
      }

      // Create and save the events to the database
      //const createdEvents = await CalendarEvent.insertMany(events);
      var batch = db.batch()
      events.forEach((doc) => {
        var docRef = calendarColl.doc(); //automatically generate unique id
        batch.set(docRef, doc);
      });
      const createdEvents = await batch.commit();

      // Return the created events
      res.status(201).json(createdEvents);
  } catch (err) {
      console.error('Error creating multiple calendar events:', err);
      res.status(500).json({ error: 'Internal server error.' });
  }
},
};