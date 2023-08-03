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
  logger.info("Hello logs!", {structuredData: true});
  const options = {
    to: "010-2735-4302",
    from: "010-0000-0000",
    text: "테스트 메시지",
  };
  const result = await sendSms(options);
  response.send(result);
});
