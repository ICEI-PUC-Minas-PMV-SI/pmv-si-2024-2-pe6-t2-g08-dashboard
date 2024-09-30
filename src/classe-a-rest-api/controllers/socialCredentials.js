import { getFirestore } from 'firebase-admin/firestore';
import SocialCredentials from '../models/SocialCredentials.js';

const db = getFirestore();
const socialCredentialsColl = db.collection('socialCredentials');

export default {
  addSocialCredentials: async (req, res) => {
    const { body: payload } = req;

    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: 'Body is empty, cannot create the socialCredentials.',
        },
      });
    }
    try {
      const socialCredentials = await socialCredentialsColl.doc(payload.id).set({ ...payload });
      return res.status(200).json({
        status: true,
        data: socialCredentials,
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        error: error.message,
      });
    }
  },

  getSocialCredentials: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      console.log("id",id);
      const socialCredentialsData = await socialCredentialsColl.doc(id).get();
      if (!socialCredentialsData.exists) {
        return res.status(400).send('No SocialCredentials found');
      } else {
        const socialCredentials = new SocialCredentials(
          socialCredentialsData.data().id,
          socialCredentialsData.data().clientId,
          socialCredentialsData.data().email,
          socialCredentialsData.data().password,
          socialCredentialsData.data().type,
        );
        console.log(socialCredentials);
        return res.status(200).send(socialCredentials);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  getAllSocialCredentials: async (req, res) => {
    try {
      const snapshot = await socialCredentialsColl.get();
      if (snapshot.empty) {
        return res.status(400).send('No SocialCredentials found');
      } else {
        const socialCredentialsList = snapshot.docs.map((doc) => {
          return new SocialCredentials(
            doc.data().id,
            doc.data().clientId,
            doc.data().email,
            doc.data().password,
            doc.data().type,
          );
        });
        return res.status(200).send(socialCredentialsList);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  updateSocialCredentials: async (req, res) => {
    const {
      params: { id },
      body: payload,
    } = req;

    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: 'Body is empty, cannot update the socialCredentials.',
        },
      });
    }
    try {
      const socialCredentialsData = socialCredentialsColl.doc(id).update(payload);
      return res.status(200).send('socialCredentials updated successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  deleteSocialCredentials: async (req, res) => {
    const {
      params: { id },
    } = req;
    try {
      await socialCredentialsColl.doc(id).delete();
      return res.status(200).send('socialCredentials deleted successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};
