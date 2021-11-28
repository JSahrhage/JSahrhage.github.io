'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a03dcb0295d903ee194ccb117b41f870",
".git/config": "a0ec38ee09b948318579a03cd26bbfb5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "848cb14cb9c44aa2b8d8d6c7cb68ef5c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f7012ca04ff276354a7826bfc2a9416d",
".git/logs/refs/heads/main": "1585bc92272fa488b1683cd5dc768cb2",
".git/logs/refs/remotes/origin/main": "c3da9a18241f8ec63fa5ff4a4248824f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0c/e784942601b6171ab868ac577c1f2807dd8b64": "8c58271702210ee06d7938a1b5e33c1d",
".git/objects/15/ebf1864f5d8145a1e58f020d5963f60b863181": "fb7a480296f1b4d30aca47f9559ded38",
".git/objects/18/2aee8ecd0ed836f6407de97840ad0c9ae47cb4": "331bf305c71f5ea59e5bb6bf030ced9e",
".git/objects/1e/5271ea032144eb11448d1e4a977408f1448682": "b904c742f59e87141970eb61522f32a4",
".git/objects/1e/9a3184fd3f8105969beabea4e0703ca7001390": "290820409db1d29997738f613c069cde",
".git/objects/20/030fcada88fa2fa27b545e3af4610b519d1e24": "d8d885b4a65404ee538ca7c2d07297ca",
".git/objects/22/0e69aa9382e36a8f836bc8e5338d5b8ab9e865": "27e57164dd459c2f85395c1bf1f97616",
".git/objects/22/4738909d9220040ce0bcb01daeb85743b941e1": "2ee0289a1aeb5b500d45bf2fa8f8d5f0",
".git/objects/2c/969fa17083682f768df4de5d5349c42685636a": "f5483f188ec0a3c00fd161e388fe481a",
".git/objects/2d/2fe4ffd2091a792552d91d5a33be33c670b4b5": "86e0b6699064fa5d3505fc6c08593c32",
".git/objects/2d/9d62f5a4bb23bd7ab8c5430e3ab2cc73050b7e": "9fd83e63975186cc2a1b2334f7ffddd1",
".git/objects/30/50047549facb94aef7183128bb9979ea0ec4ef": "95ae4d4bdad2a7d6b6a7918ac5e27423",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/d7082e6ae02cd4426ef96e212753b1e2e4c2c9": "4e67fffb4e95b0df0465818e9d497187",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/3975ca5b61ab4b4dc8c308ba3004115e08d631": "7ad3dc5d5df19fa68a45933267af8ab2",
".git/objects/5f/37b679537f0954977d10b8ccba2fd68471224a": "59f796d3ed22eba382fe43ce8bd9d0f5",
".git/objects/74/6b1e3bc3918ffa7b28eb1407ce0441523354a7": "f235cc2eebf3d6d3759d901f48b13c49",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/9525eaaba741a621aba45e7af442b720fcb1fb": "ebf742ba7fc8082fde7036a61b80860b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/3b2d1b797c9c5dd7cf6cd817b4e29240a30fa5": "e6db66ffb4c14ae8168115f369da6d83",
".git/objects/8d/4783bf6a978f9e6be1beafb556a0bf81851255": "38e8c96df1696290d283b1ba45512812",
".git/objects/95/0b74b673d0795489d6b037cf8392d760e08d4c": "6de86fd31e68288bc1d399a518958804",
".git/objects/9b/fa911c168aae530caf42962bac9f7bcf578576": "4e955d5c4f9ff007e4189fd488d7e9a6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/0b1bd8faf4e3b44eb4b542c1935c9e7cd6404d": "e1ec5d2c6589f6f8549c3f07e0e7a579",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6714fca5b41c227022967ff883f8d07217fb31": "01da540dd6140d81e7f5015597c29553",
".git/objects/c2/63146ae88e1f2db577bdf2728b3a130aa7a335": "90b79eacbd9eaf85352d9eb0786832c9",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/cd/92766b71263d0fc2cad60729dd18b22c5e7422": "28235244ace63e335dde66ab2c489812",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/b5e6eeba3447d3fe481417ad3cfb167c9f94c2": "61240e37aae34688619d4edffa309a87",
".git/objects/f6/b1b17d1929105c703dda02a99be995b5d11bbe": "4b4852a225253aa74fa426a8ad383c0c",
".git/objects/f9/a4d84ce07620b86ea9dd49e755a5a838419bc6": "b5fe87031d2683bddf40375d1e09684f",
".git/refs/heads/main": "397ce2eff9f6254ec8e112e96b312e57",
".git/refs/remotes/origin/main": "397ce2eff9f6254ec8e112e96b312e57",
"assets/AssetManifest.json": "476509a4f98c87732cf74611c42404fe",
"assets/assets/fonts/harry_potter.ttf": "181ef9a7aee45c119e68f294e8426a3a",
"assets/assets/images/harry_potter_deathly_hallows.jpg": "78b809df26d12b532c621cd8566d3282",
"assets/assets/images/harry_potter_oxford.jpg": "f1f86d61942e18b76119558308b2eb0a",
"assets/FontManifest.json": "bedfddac5af668310b294bc987d9cd9d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "51e102e40fdddaf755ac7601f1ac6515",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/ionicons/fonts/Ionicons.ttf": "0cdf2a324d5c21f08c7f446476aa2ee3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7cb7c197031468e057830a5c1a934db6",
"/": "7cb7c197031468e057830a5c1a934db6",
"main.dart.js": "0bcdc2a994fc659c386bce50126b3fc3",
"manifest.json": "23f4b295dc436454ff9134de87f9175f",
"version.json": "7a81e29c1b282ff86b53c33116997f0a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
