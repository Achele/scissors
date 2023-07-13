/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const { onRequest } = require("firebase-functions/v2/https");
// const { onDocumentCreated } = require("firebase-functions/v2/firestore");
// const { onDocumentWritten } = require("firebase-functions/v2/firestore");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   // logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.linkCreated = functions.firestore
  .document("users/{userUid}/links/{linkID}")
  .onCreate((snapshot, context) => {
    const { userUid, linkID } = context.params;
    const { longURL, shortCode } = snapshot.data();

    return admin.firestore().doc(`links/${shortCode}`).set({
      userUid,
      linkID,
      longURL,
    });
  });

exports.linkDeleted = functions.firestore
  .document("users/{userUid}/links/{linkID}")
  .onDelete((snapshot) => {
    const { shortCode } = snapshot.data();

    return admin.firestore().doc(`links/${shortCode}`).delete();
  });
