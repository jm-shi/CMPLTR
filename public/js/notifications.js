const publicVapidKey =
  'BCsuDKVvN21diCDOlfGVuuw7F9F-LsVotRfziFPgvT4kpriJVzYnHCpZPRExw2O5mlJZo5WvsQPN6BJdB4XomRM';

if ('serviceWorker' in navigator && 'PushManager' in window) {
  // send().catch(function(err) {
  //   console.log(err);
  // });
  console.log('Service Worker and Push is supported');

  navigator.serviceWorker
    .register('../sw.js', {
      scope: '/'
    })
    .then(function(register) {
      console.log('Service Worker is registered', register);
      // Register push
      register.pushManager
        .subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
        })
        .then(function() {
          console.log('Registered pushed');
        })
        .catch(function(err) {
          console.log(err);
        });
    })
    .catch(function(error) {
      console.error('Service Worker Error', error);
    });
} else {
  console.warn('Push messaging is not supported');
}

async function send(details) {
  // Register service worker
  const register = await navigator.serviceWorker.register('../sw.js', {
    scope: '/'
  });

  let routineTitle;
  let dayNumber;
  let completeRoutine;
  if (details) {
    routineTitle = details.routineTitle;
    dayNumber = details.dayNumber;
    completeRoutine = details.completeRoutine;
  }

  // Register push
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  });

  const additionalDetails = {
    routineTitle,
    dayNumber,
    completeRoutine
  };

  const dataToSend = {
    subscription,
    additionalDetails
  };

  // Send push notification
  await fetch('/subscribe', {
    method: 'POST',
    body: JSON.stringify(dataToSend),
    headers: {
      'content-type': 'application/json'
    }
  });
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
