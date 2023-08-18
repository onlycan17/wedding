/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import {sendSms} from "../../src/pages/config/sendMessage";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const sendFireFunctionSms = onRequest(async (request, response) => {
  logger.info("TEST LOG", {structuredData: true});
  console.log(`param data....${request.body}`);

  const options = {
    from: "01051613620",
    to: request.body.phoneNum,
    text: request.body.message,
  };
  const result = await sendSms(options);
  console.log(`result....${result}`);
  response.send(result);
});
