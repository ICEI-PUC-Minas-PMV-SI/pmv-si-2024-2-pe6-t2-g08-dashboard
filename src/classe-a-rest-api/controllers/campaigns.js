import { getFirestore } from 'firebase-admin/firestore';
import Campaign from '../models/Campaign.js';

const db = getFirestore();
const campaignColl = db.collection('campaigns');

export default {
  addCampaign: async (req, res) => {
    const { body: payload } = req;

    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: 'Body is empty, cannot update the campaign.',
        },
      });
    }
    try {
      const campaign = await campaignColl.doc(payload.id).set({ ...payload });
      return res.status(200).json({
        status: true,
        data: campaign,
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        error: error.message,
      });
    }
  },

  getCampaign: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      console.log("id",id);
      const campaignData = await campaignColl.doc(id).get();
      if (!campaignData.exists) {
        return res.status(400).send('No Campaigns found');
      } else {
        const campaign = new Campaign(
          campaignData.data().id,
          campaignData.data().clientId,
          campaignData.data().title,
          campaignData.data().budget,
          campaignData.data().postCreativeId,
        );
        console.log(campaign);
        return res.status(200).send(campaign);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  getAllCampaigns: async (req, res) => {
    try {
      const snapshot = await campaignColl.get();
      if (snapshot.empty) {
        return res.status(400).send('No Campaigns found');
      } else {
        const campaignList = snapshot.docs.map((doc) => {
          return new Campaign(
            doc.data().id,
            doc.data().clientId,
            doc.data().title,
            doc.data().budget,
            doc.data().postCreativeId,
          );
        });
        return res.status(200).send(campaignList);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  updateCampaign: async (req, res) => {
    const {
      params: { id },
      body: payload,
    } = req;

    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: 'Body is empty, cannot update the campaign.',
        },
      });
    }
    try {
      const campaignData = campaignColl.doc(id).update(payload);
      return res.status(200).send('campaign updated successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  deleteCampaign: async (req, res) => {
    const {
      params: { id },
    } = req;
    try {
      await campaignColl.doc(id).delete();
      return res.status(200).send('campaign deleted successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};
