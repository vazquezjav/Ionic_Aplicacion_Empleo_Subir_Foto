import * as functions from 'firebase-functions';
import * as admin from "firebase-admin"
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

admin.initializeApp();
const db = admin.database();

/// como una clase main la que primera que se va a llamar

import * as test from './test';

export const hola=test.hello

export const makeUpper=test.makeUppercase
