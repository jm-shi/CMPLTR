/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js'
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    url: 'audio/fullComplete.mp3',
    revision: '6ee3a375e52dedf44627e44a42be65e3'
  },
  {
    url: 'audio/halfComplete.mp3',
    revision: '24e4ae98ff06fec12eeeea897dba25a5'
  },
  {
    url: 'css/style.css',
    revision: 'f865e938ee74e74573ad931d7477d8b9'
  },
  {
    url: 'images/createRoutine.png',
    revision: '58a4d75493be11851377fa0fab3244bd'
  },
  {
    url: 'images/currentRoutine.png',
    revision: '84f2d6c467f7a701acffefac4cb26a1b'
  },
  {
    url: 'images/currentRoutine2.png',
    revision: 'a5b162fc40f527283c65f1f7fdb315e5'
  },
  {
    url: 'images/currentRoutines.png',
    revision: '245059d4f5a25f05bf2bf978af228dc6'
  },
  {
    url: 'images/home.png',
    revision: '5511391a0acafbdd1828d37dfe8dad9d'
  },
  {
    url: 'images/icons/icon-128x128.png',
    revision: '47d63e7a28ddda833458c8b4342faf7e'
  },
  {
    url: 'images/icons/icon-144x144.png',
    revision: '7a5aa052f484e18c22b8ca5b7a5a1269'
  },
  {
    url: 'images/icons/icon-150x150.png',
    revision: '17377518739ba6a4bd9bee86629bf5c5'
  },
  {
    url: 'images/icons/icon-152x152.png',
    revision: '62fc3542219ac72f3e5a41eaf5b65e0a'
  },
  {
    url: 'images/icons/icon-192x192.png',
    revision: 'a3c97fa0227ca2ef02469c731e7da08c'
  },
  {
    url: 'images/icons/icon-384x384.png',
    revision: 'fc329869357ba45159aa3f8d3d06abe7'
  },
  {
    url: 'images/icons/icon-512x512.png',
    revision: '73e056ea4875f8230a1abf44b05f5cb7'
  },
  {
    url: 'images/icons/icon-72x72.png',
    revision: '759202fd5ca99b116ca361500a98d0fb'
  },
  {
    url: 'images/icons/icon-96x96.png',
    revision: '4de3f10dca90239fda98d390b7aefb3f'
  },
  {
    url: 'images/logo.png',
    revision: '722118d1fdc96e0b421c415e10ea0735'
  },
  {
    url: 'images/splash/ipad_splash.png',
    revision: 'b9f1f9ed7d2336b8aa340ad31bf92fe9'
  },
  {
    url: 'images/splash/ipadpro1_splash.png',
    revision: '9409eb233852f178a64ee6397aca5267'
  },
  {
    url: 'images/splash/ipadpro2_splash.png',
    revision: '7a7d0f2d97a2c7def984089ce2ad121d'
  },
  {
    url: 'images/splash/ipadpro3_splash.png',
    revision: '7fe392b6aa85361cd1aaabf935ceff72'
  },
  {
    url: 'images/splash/iphone5_splash.png',
    revision: 'f1bf28c74a76d4aee075924ebe8d86c3'
  },
  {
    url: 'images/splash/iphone6_splash.png',
    revision: '5d30a836790e5ee3a352711d33dd2a9c'
  },
  {
    url: 'images/splash/iphoneplus_splash.png',
    revision: '53a93d0c26000f6a552b4fc0f9ecb4d4'
  },
  {
    url: 'images/splash/iphonex_splash.png',
    revision: '5150ad2e20296873f54adfc0a699a297'
  },
  {
    url: 'images/splash/iphonexr_splash.png',
    revision: '41def3fd5270f15f3e5e8a3872eb4a96'
  },
  {
    url: 'images/splash/iphonexsmax_splash.png',
    revision: 'e4d8ac3d8c6864155cb4a1bc6c0d9199'
  },
  {
    url: 'js/calendar.js',
    revision: '2f057b4044f6ea873ae4585bea088468'
  },
  {
    url: 'js/chart.min.js',
    revision: '97fc24605ac8278c6097b48ae533bf8a'
  },
  {
    url: 'js/facebook.js',
    revision: '9d245b57384bcd488f07a6fe4a1f1ebc'
  },
  {
    url: 'js/forms.js',
    revision: 'fbd56220aefe33c2273f0150cd7034ab'
  },
  {
    url: 'js/notifications.js',
    revision: '2735764d973379084d6fac05c6875692'
  },
  {
    url: 'js/repeatButtons.js',
    revision: '579ff3e44cb5676caa0f493611bf2279'
  },
  {
    url: 'js/routines.js',
    revision: '5df2e56a5c10615e29e3fed6d236a853'
  },
  {
    url: 'manifest.json',
    revision: 'e0c14de2f1348449edcbe69508442736'
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('push', function(e) {
  let data = {
    title: 'CMPLTR'
  };
  try {
    data = e.data.json();
  } catch (err) {}
  self.registration
    .showNotification(data.title, {
      body: data.details,
      icon: '/images/icons/icon-72x72.png'
    })
    .catch(function(err) {
      console.log(err);
    });
});
