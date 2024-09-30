import { getFirestore } from 'firebase-admin/firestore';
import Client from '../models/Client.js';

const db = getFirestore();
const clientColl = db.collection('clients');

export default {
  addClient: async (req, res) => {
    const { body: payload } = req;

    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: 'Body is empty, cannot update the client.',
        },
      });
    }
    try {
      const client = await clientColl.doc(payload.id).set({ ...payload });
      return res.status(200).json({
        status: true,
        data: client,
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        error: error.message,
      });
    }
  },

  getClient: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      console.log("id",id);
      const clientData = await clientColl.doc(id).get();
      if (!clientData.exists) {
        return res.status(400).send('No Clients found');
      } else {
        const client = new Client(
          clientData.data().id,
          clientData.data().companyName,
          clientData.data().contactInfo,
          clientData.data().userId,
          clientData.data().contractUrl,
          clientData.data().planId,
        );
        console.log(client);
        return res.status(200).send(client);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  getAllClients: async (req, res) => {
    try {
      const snapshot = await clientColl.get();
      if (snapshot.empty) {
        return res.status(400).send('No Clients found');
      } else {
        const clientList = snapshot.docs.map((doc) => {
          return new Client(
            doc.data().id,
            doc.data().companyName,
            doc.data().contactInfo,
            doc.data().userId,
            doc.data().contractUrl,
            doc.data().planId,
          );
        });
        return res.status(200).send(clientList);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  updateClient: async (req, res) => {
    const {
      params: { id },
      body: payload,
    } = req;

    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: 'Body is empty, cannot update the client.',
        },
      });
    }
    try {
      const clientData = clientColl.doc(id).update(payload);
      return res.status(200).send('client updated successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  deleteClient: async (req, res) => {
    const {
      params: { id },
    } = req;
    try {
      await clientColl.doc(id).delete();
      return res.status(200).send('client deleted successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};
