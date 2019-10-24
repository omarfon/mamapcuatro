"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
exports.subscribeToTopic = functions.https.onCall(async (data, context) => {
    await admin.messaging().subscribeToTopic(data.token, data.topic);
    return `subscribed to ${data.topic}`;
});
exports.unsubscribeFromTopic = functions.https.onCall(async (data, context) => {
    await admin.messaging().unsubscribeFromTopic(data.token, data.topic);
    return `unsubscribed from ${data.topic}`;
});
exports.sendOnFirestoreCreate = functions.firestore
    .document('discounts/{discountId}')
    .onCreate(async (snapshot) => {
    const discount = snapshot.data();
    const notification = {
        title: 'New Discount Available!',
        body: discount ? discount.headline : 'Descuento 10%'
    };
    const payload = {
        notification,
        webpush: {
            notification: {
                vibrate: [200, 100, 200],
                icon: 'https://angularfirebase.com/images/logo.png',
                actions: [
                    {
                        action: 'like',
                        title: 'yey'
                    },
                    {
                        action: 'dislike',
                        title: 'Boooo!'
                    }
                ]
            }
        },
        topic: 'discounts'
    };
    return admin.messaging().send(payload);
});
//# sourceMappingURL=fcm.js.map