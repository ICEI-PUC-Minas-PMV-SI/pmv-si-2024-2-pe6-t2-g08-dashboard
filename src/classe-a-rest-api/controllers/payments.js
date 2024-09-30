import { getFirestore } from 'firebase-admin/firestore';
import Payment from '../models/Payment.js';

const db = getFirestore();
const paymentColl = db.collection('payments');

export default {
  addPayment: async (req, res) => {
    const { body: payload } = req;

    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: 'Body is empty, cannot update the payment.',
        },
      });
    }
    try {
      const payment = await paymentColl.doc(payload.id).set({ ...payload });
      return res.status(200).json({
        status: true,
        data: payment,
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        error: error.message,
      });
    }
  },

  getPayment: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      console.log("id",id);
      const paymentData = await paymentColl.doc(id).get();
      if (!paymentData.exists) {
        return res.status(400).send('No Payments found');
      } else {
        const payment = new Payment(
          paymentData.data().id,
          paymentData.data().clientId,
          paymentData.data().amount,
          paymentData.data().date,
          paymentData.data().type,
        );
        console.log(payment);
        return res.status(200).send(payment);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  getAllPayments: async (req, res) => {
    try {
      const snapshot = await paymentColl.get();
      if (snapshot.empty) {
        return res.status(400).send('No Payments found');
      } else {
        const paymentList = snapshot.docs.map((doc) => {
          return new Payment(
            doc.data().id,
            doc.data().clientId,
            doc.data().amount,
            doc.data().date,
            doc.data().type,
          );
        });
        return res.status(200).send(paymentList);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  updatePayment: async (req, res) => {
    const {
      params: { id },
      body: payload,
    } = req;

    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: 'Body is empty, cannot update the payment.',
        },
      });
    }
    try {
      const paymentData = paymentColl.doc(id).update(payload);
      return res.status(200).send('payment updated successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  deletePayment: async (req, res) => {
    const {
      params: { id },
    } = req;
    try {
      await paymentColl.doc(id).delete();
      return res.status(200).send('payment deleted successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};
