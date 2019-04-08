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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "audio/fullComplete.mp3",
    "revision": "6ee3a375e52dedf44627e44a42be65e3"
  },
  {
    "url": "audio/halfComplete.mp3",
    "revision": "24e4ae98ff06fec12eeeea897dba25a5"
  },
  {
    "url": "css/style.css",
    "revision": "ed8a492323a3ce047e7edd92088596e4"
  },
  {
    "url": "images/createRoutine.png",
    "revision": "58a4d75493be11851377fa0fab3244bd"
  },
  {
    "url": "images/currentRoutine.png",
    "revision": "84f2d6c467f7a701acffefac4cb26a1b"
  },
  {
    "url": "images/currentRoutine2.png",
    "revision": "a5b162fc40f527283c65f1f7fdb315e5"
  },
  {
    "url": "images/currentRoutines.png",
    "revision": "245059d4f5a25f05bf2bf978af228dc6"
  },
  {
    "url": "images/home.png",
    "revision": "3973aef0e62e99dd9a809405649e622f"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "534216d456dc3d99fcff75159d86b59f"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "772b8e514828bea62a4884dbd6d2592a"
  },
  {
    "url": "images/icons/icon-150x150.png",
    "revision": "628c09fd292fc7e1bd9a8d19bd4011ae"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "684d47b69c6e60526d5777e92da5dcec"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "02724f223125ccba1e29d9c9c8d3cef1"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "023359bb38fc4f29b2bb6a02ac855ba0"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "4764ef08ecc8e679a700c433d070cd5c"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "e80f2a467f2f1b803b84804e3c027c20"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "a5cea9c47cfc0d3a23362635e8f1c36e"
  },
  {
    "url": "images/logo.png",
    "revision": "54469408e6e03f7f6ca153ea573944b7"
  },
  {
    "url": "images/slide.png",
    "revision": "dab5d74ccb2e989b3b5fd7dd53849100"
  },
  {
    "url": "images/splash/ipad_splash.png",
    "revision": "bc422a10e9c6b1332f9805ac0407e449"
  },
  {
    "url": "images/splash/ipadpro1_splash.png",
    "revision": "ae7132ecf0affba552f2161e4bbf3f23"
  },
  {
    "url": "images/splash/ipadpro2_splash.png",
    "revision": "17337410052f2db0d964c35fc3db6356"
  },
  {
    "url": "images/splash/ipadpro3_splash.png",
    "revision": "b785f38ff8a965ba87c732ff26020dca"
  },
  {
    "url": "images/splash/iphone5_splash.png",
    "revision": "d2869bc27f2cdf0f4adce813393e4155"
  },
  {
    "url": "images/splash/iphone6_splash.png",
    "revision": "d132a24d5c32ff7a0ab88ee42d3b7a8e"
  },
  {
    "url": "images/splash/iphoneplus_splash.png",
    "revision": "439954f74cc4e1f4dcf45248ab3c7687"
  },
  {
    "url": "images/splash/iphonex_splash.png",
    "revision": "8d1fd4c901ea77eca78da1f86a522369"
  },
  {
    "url": "images/splash/iphonexr_splash.png",
    "revision": "5181a50caa24a395a032973a19fb8522"
  },
  {
    "url": "images/splash/iphonexsmax_splash.png",
    "revision": "e46fee59538ffc045f5d9ccfadf1c670"
  },
  {
    "url": "js/calendar.js",
    "revision": "2f057b4044f6ea873ae4585bea088468"
  },
  {
    "url": "js/chart.min.js",
    "revision": "97fc24605ac8278c6097b48ae533bf8a"
  },
  {
    "url": "js/facebook.js",
    "revision": "9d245b57384bcd488f07a6fe4a1f1ebc"
  },
  {
    "url": "js/forms.js",
    "revision": "fbd56220aefe33c2273f0150cd7034ab"
  },
  {
    "url": "js/notifications.js",
    "revision": "2735764d973379084d6fac05c6875692"
  },
  {
    "url": "js/repeatButtons.js",
    "revision": "579ff3e44cb5676caa0f493611bf2279"
  },
  {
    "url": "js/routines.js",
    "revision": "5df2e56a5c10615e29e3fed6d236a853"
  },
  {
    "url": "manifest.json",
    "revision": "2aca1b39a7acd8d405a02bf2612514d1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('push', function (e) {
  let data = {
    title: 'CMPLTR'
  };
  try {
    data = e.data.json();
  } catch (err) { }
  self.registration
    .showNotification(data.title, {
      body: data.details,
      icon: '/images/icons/icon-72x72.png'
    })
    .catch(function (err) {
      console.log(err);
    });
});
