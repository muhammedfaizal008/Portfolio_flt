'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aa1a094d58ddde57a610d5739ca189d9",
".git/config": "83e8bc2ebea59d603b3a1a71c67362c2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "614fcb5f06a793dd53b1e5bf7ce742bd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "70021147b2cb60964fb1ba328ea30198",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc407476d0983b1d2028b83919d0313a",
".git/logs/refs/heads/main": "bc407476d0983b1d2028b83919d0313a",
".git/logs/refs/remotes/origin/main": "a7d342f6eede8d84590636f483d24a0e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/12/26d56359f429c3758ff4138027b194b0aa1bbf": "36f0f44aeaa61c522296c1c6958d5116",
".git/objects/12/4d4d11150ee46b3c73dc7a74485a448d507716": "3d1f5f5ca4e4706634b37dad5a5b0877",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/bc03a3b16eedeeec009e962ab7651f7a1eb3da": "b9cd8413b2e6c74ad6ddc468683c751b",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2b/39611658e8bdfd477a62f94e254ed4b469d1c2": "dee1582cb9bcef51415888e54e1a7538",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/b1699405869fd7c965bd12e3531e4345b22fc6": "d201b4ea89d5b9574a68252855512e1a",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/430ac115eae85a77cabc751874b4c68f7fe455": "f21294492fb4a22e5c19694b51d0ad71",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/4bd7459d3feb18d3262f1c3f72ef7e0341930d": "61222ffa3c3453bb82bc04940fc56aea",
".git/objects/49/bc1adfe826dcb7c72a3f49dee87880c613224b": "217afc16832926391e8e8bc6a31416c4",
".git/objects/55/8f2eded4597c62b8917761f70da117ebe7cde6": "318d8d5f2ff110192a8ec300feb85397",
".git/objects/57/6c47fb791d181254f59fc7eb93b30ac4c95d7c": "47257dd35d375ed8eea83801724de3d5",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/66/7ec3df6983e716d1316cae4f94f69c6856883c": "0f5b7e4aa80cdc7c79a7fefd5840c2b6",
".git/objects/6a/9e43d7d0d526e51b66e24e71501c0e201bdc66": "02942d5c59770a8106c625612d67e16c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/7a/1c4fb624f3805ff0d158a02e7a469428879bce": "7aa2000212191755526cdafb6391db52",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/6ea2a559aba0f9b1085504333ceef582ba8a5f": "a6c0500d6119d1144d333edb453eda2e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/6adbd8e9af3b557926342cda89a76ead921219": "e1285d0114b2c4f451da079a081102ca",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/95/5d2fbaecd986cc31917ba36bf69a053f348cd1": "c4f905f42eee14529e38c82a9dd491d8",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/6817201f81f991ce011f49ee8610aff73df02f": "8959c2e096f32f26ca3ad8d81eee7cdc",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/a2/d9f6114679ae83c659289cc3efeeae6951bfdf": "dcec71c187fd8eb160206373df91e76d",
".git/objects/a3/264384a703366fb61ac0733d58c8bfe7012064": "3e5e7041acd7c8afb6276ba27463922b",
".git/objects/a5/bd0a170fc94282629f1ec69490a186ccd43cce": "935c9eaa6d5a0be9070dcedede4d1cc1",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/27822034463380189668cd86686356de085683": "0e362953e5b95fe981a946a7098a0a4f",
".git/objects/b6/3ec6856ba0e7ff341ddf6d64cc8ec652e416e3": "37d56bc8d8bf06ad6fab649b77d7917e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c1/e79fc21c27273f277916e9d0f736313adde619": "db032099bce45cb5b43de33b3f97f67f",
".git/objects/c4/5d7e2fc5284cc5397803d225911db472430e67": "1f3e68da77318aeca19c551dd949f508",
".git/objects/c5/4ba93280faab7ddf8dd008f43f90a4db948aec": "45bf177a5974071a275ae01fa476c5cd",
".git/objects/c7/0b9aac1a3b4eabf3d837f8ba357ed041ea778c": "456a1831ae81108cf515913239ef82de",
".git/objects/ca/855d7f20fc938d0e01a6ae7f78fc4128824030": "37800b1f66ed26a9a06474a7614a4f3f",
".git/objects/cd/0f3769359a1ec9e65065d6e734f8ddc757c263": "5ea40d50a65f1d3e22b0ab43307eee10",
".git/objects/ce/a841aa895aa724bcc7c7780ff0869ab8add1a7": "31883a161b8ea17e1876ac97411f3296",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/48b9ac0898bbfb3784c37d27507fb3a244f2b1": "3fd85768a65681c0b71636bd85cc8816",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/f67e73d85e8c17e8d42d56aaf4f43914cd8445": "6800149a0a424a27afad3e7cb6bf7cf6",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/2eea15ec879872bd3d0f8587e4be553bc06ecf": "32e49ab7a333116a8c85cc322d5c3d5c",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/e35c86b5a678992706304f887d41d007bdd371": "155dbbf4ed518b915ee3af06f6184ff6",
".git/objects/e0/ffae609d78e9ea9f7cdc7c038742dd46250a73": "6841bd3fcab74bdcbc8afed5b79dcec8",
".git/objects/e8/97a315776ca333668b8974712730f9e71222bf": "39579f70e98fde5ce2257335215711aa",
".git/objects/ea/c90b150d587e65a7d2b8c9bf3ee945ff0838d1": "b098c96b6c18efad0c7ef717e731b436",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/ee330f9651ba0ee37111bfcd536a5a490b974d": "ee3e11f3a5c48deb272e215fb567467f",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "38817a5716b5196e31ff29272dc5dc4c",
".git/refs/heads/main": "38817a5716b5196e31ff29272dc5dc4c",
".git/refs/remotes/origin/main": "38817a5716b5196e31ff29272dc5dc4c",
"assets/AssetManifest.bin": "718e548d08e8ebe3cc80e5ab7bd680e0",
"assets/AssetManifest.bin.json": "e97edea0bb57a0f874f4c31ba3fec434",
"assets/AssetManifest.json": "c34648b0fac4bafe7f5c4a4193d965ab",
"assets/assets/AppstoreImage.jpg": "0d212e4c31e549235d3f4ceb2902d769",
"assets/assets/Ecommerce%2520Image.jpg": "3240fe6427163e399c0b89e5e5a34b12",
"assets/assets/Image.jpg": "ce7762317a36b174c87e762eda5fb2ef",
"assets/assets/NewsAppImage.jpg": "8294031723dc56e1a6479f8e9f2d6464",
"assets/assets/social%2520media%2520logos/github.svg": "73df13e9453fad75828c2071b924febf",
"assets/assets/social%2520media%2520logos/linkedin.svg": "cff2ba4d48cdc3bbd4f060ac02bf584f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "095241fd6511ec2e747f9fa07d0c8ba8",
"assets/NOTICES": "3cc2f57df6e93b5360dad536d2ce2c87",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "cd2224730bb3670d981479e59b0ff49d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "64ca42a82668cf4c5b5e91e4ae2d87b3",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
