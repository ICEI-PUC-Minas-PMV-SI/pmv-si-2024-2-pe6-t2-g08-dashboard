import { getFirestore } from 'firebase-admin/firestore';
import Plan from '../models/Plan.js';

const db = getFirestore();
const planColl = db.collection('plans');

export default {
  addPlan: async (req, res) => {
    const { body: payload } = req;

    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: 'Body is empty, cannot update the plan.',
        },
      });
    }
    try {
      const plan = await planColl.doc(payload.id).set({ ...payload });
      return res.status(200).json({
        status: true,
        data: plan,
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        error: error.message,
      });
    }
  },

  getPlan: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      console.log("id",id);
      const planData = await planColl.doc(id).get();
      if (!planData.exists) {
        return res.status(400).send('No Plans found');
      } else {
        const plan = new Plan(
          planData.data().id,
          planData.data().name,
          planData.data().amount,
          planData.data().options,
        );
        console.log(plan);
        return res.status(200).send(plan);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  getAllPlans: async (req, res) => {
    try {
      const snapshot = await planColl.get();
      if (snapshot.empty) {
        return res.status(400).send('No Plans found');
      } else {
        const planList = snapshot.docs.map((doc) => {
          return new Plan(
            doc.data().id,
            doc.data().name,
            doc.data().amount,
            doc.data().options,
          );
        });
        return res.status(200).send(planList);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  updatePlan: async (req, res) => {
    const {
      params: { id },
      body: payload,
    } = req;

    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: 'Body is empty, cannot update the plan.',
        },
      });
    }
    try {
      const planData = planColl.doc(id).update(payload);
      return res.status(200).send('plan updated successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  deletePlan: async (req, res) => {
    const {
      params: { id },
    } = req;
    try {
      await planColl.doc(id).delete();
      return res.status(200).send('plan deleted successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};
