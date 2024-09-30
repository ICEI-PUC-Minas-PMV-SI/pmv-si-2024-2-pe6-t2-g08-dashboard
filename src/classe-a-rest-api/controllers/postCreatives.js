import { getFirestore } from 'firebase-admin/firestore';
import PostCreative from '../models/PostCreative.js';

const db = getFirestore();
const postCreativeColl = db.collection('postCreatives');

export default {
  addPostCreative: async (req, res) => {
    const { body: payload } = req;

    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: 'Body is empty, cannot update the postCreative.',
        },
      });
    }
    try {
      const postCreative = await postCreativeColl.doc(payload.id).set({ ...payload });
      return res.status(200).json({
        status: true,
        data: postCreative,
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        error: error.message,
      });
    }
  },

  getPostCreative: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      console.log("id",id);
      const postCreativeData = await postCreativeColl.doc(id).get();
      if (!postCreativeData.exists) {
        return res.status(400).send('No PostCreatives found');
      } else {
        const postCreative = new PostCreative(
          postCreativeData.data().id,
          postCreativeData.data().clientId,
          postCreativeData.data().content,
          postCreativeData.data().mediaType,
          postCreativeData.data().mediaUrl,
          postCreativeData.data().evaluation,
        );
        console.log(postCreative);
        return res.status(200).send(postCreative);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  getAllPostCreatives: async (req, res) => {
    try {
      const snapshot = await postCreativeColl.get();
      if (snapshot.empty) {
        return res.status(400).send('No PostCreatives found');
      } else {
        const postCreativeList = snapshot.docs.map((doc) => {
          return new PostCreative(
            doc.data().id,
            doc.data().clientId,
            doc.data().content,
            doc.data().mediaType,
            doc.data().mediaUrl,
            doc.data().evaluation,
          );
        });
        return res.status(200).send(postCreativeList);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  updatePostCreative: async (req, res) => {
    const {
      params: { id },
      body: payload,
    } = req;

    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: 'Body is empty, cannot update the postCreative.',
        },
      });
    }
    try {
      const postCreativeData = postCreativeColl.doc(id).update(payload);
      return res.status(200).send('postCreative updated successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  deletePostCreative: async (req, res) => {
    const {
      params: { id },
    } = req;
    try {
      await postCreativeColl.doc(id).delete();
      return res.status(200).send('postCreative deleted successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};
