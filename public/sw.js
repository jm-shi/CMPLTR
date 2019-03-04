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
    "revision": "6b3ce4a1f36ba431701abe43ae5c599a"
  },
  {
    "url": "images/createRoutine.png",
    "revision": "4c2fdd06c8ff913ad427fe9e0733a096"
  },
  {
    "url": "images/currentRoutine.png",
    "revision": "9c84c92083b036c810374691ed481590"
  },
  {
    "url": "images/currentRoutines.png",
    "revision": "70072ad8678786aa12e4b5dd1c9583c2"
  },
  {
    "url": "images/home.png",
    "revision": "da2e242f396a0f2d5ee1aaa276a18a39"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "168a77bb53438af233840fe4fb02a8bf"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "79c41af288c0b0de17fd0b56b9ef7022"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "56bdd4bb4defcdae89d6583d71593d1f"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "bedb777de1e5afddabad95a4e7dcd2b1"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "0809f6fabf9e47cf0687186e4909b6f5"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "f1556366e5f444e87ac35568c011df05"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "32e6c26d3283bbe32219213060d5db4d"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "c0623d42610aa5ad0ae373ed5a5541e8"
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
    "url": "js/repeatButtons.js",
    "revision": "ef5da77d93f625caaecc71e62074d6fb"
  },
  {
    "url": "js/routines.js",
    "revision": "5df2e56a5c10615e29e3fed6d236a853"
  },
  {
    "url": "manifest.json",
    "revision": "638008edc8c93e4da1efd3bf520f4086"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
