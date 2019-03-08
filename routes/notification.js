const webpush = require('web-push');

const publicVapidKey =
  'BCsuDKVvN21diCDOlfGVuuw7F9F-LsVotRfziFPgvT4kpriJVzYnHCpZPRExw2O5mlJZo5WvsQPN6BJdB4XomRM';
const privateVapidKey = 'R1n4lrGaq8wH86GctLrKMhdX5vH4R_rHYBy5ntIA7tI';
webpush.setVapidDetails('mailto:a@a.com', publicVapidKey, privateVapidKey);

exports.subscribe = function(req, res) {
  const subscription = req.body.subscription;
  const additionalDetails = req.body.additionalDetails;
  const routineTitle = additionalDetails.routineTitle;
  const dayNumber = additionalDetails.dayNumber;
  const completeRoutine = additionalDetails.completeRoutine;

  let title = '';
  let details = '';
  if (!completeRoutine) {
    const randomNum = Math.round(Math.random()) * 2;
    if (randomNum === 0) {
      title = 'Nice job!';
    } else if (randomNum === 1) {
      title = 'Keep up the good work!';
    } else {
      title = 'Awesome!';
    }
    details = `Completed day ${dayNumber} of: ${routineTitle}`;
  } else {
    title = 'Routine complete!';
    details = 'Routine has been archived.';
  }

  res.status(201).json({});
  const payload = JSON.stringify({
    title,
    details
  });
  webpush.sendNotification(subscription, payload).catch(function(e) {
    console.log(e);
  });
};
