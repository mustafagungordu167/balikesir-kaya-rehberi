// İnternetsiz çalışma: uygulamanın tüm dosyalarını telefona saklar.
// Liste ve sürüm araclar/hazirla.py ile güncellenir.
// <liste>
const SURUM = "f49087c065";
const DOSYALAR = ["./", "index.html", "stil.css", "uygulama.js", "veri.js", "manifest.webmanifest", "ikon-192.png", "ikon-512.png", "img/genel-deliktas-1.jpg", "img/genel-mezitler-1.jpg", "img/genel-nusret-1.jpg", "img/genel-nusret-2.jpg", "img/s01.jpg", "img/s02.jpg", "img/s03.jpg", "img/s04.jpg", "img/s05.jpg", "img/s07.jpg", "img/s09.jpg", "img/s11.jpg", "img/s13.jpg", "img/s14.jpg", "img/s15.jpg", "img/s17.jpg", "img/s19.jpg", "img/s20.jpg", "img/s21.jpg", "img/s23.jpg", "img/s24.jpg", "img/s25.jpg"];
// </liste>
const AD = "kaya-" + SURUM;

self.addEventListener("install", e => {
  e.waitUntil(caches.open(AD).then(c => c.addAll(DOSYALAR)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith("kaya-") && ![AD, "kaya-pdf", "kaya-font"].includes(k)).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const istek = e.request;
  if (istek.method !== "GET") return;
  const url = new URL(istek.url);
  // Yazı tipleri (Google Fonts): ilk açılışta saklanır, sonra internetsiz de çalışır
  if (url.hostname.endsWith("fonts.googleapis.com") || url.hostname.endsWith("fonts.gstatic.com")) {
    e.respondWith(caches.open("kaya-font").then(async c => {
      const kayitli = await c.match(istek);
      if (kayitli) return kayitli;
      const cevap = await fetch(istek);
      c.put(istek, cevap.clone());
      return cevap;
    }));
    return;
  }
  if (url.origin !== location.origin) return;
  // Rehber PDF'i (24 MB): kurulumda indirilmez; ilk açılışta saklanır, sonra internetsiz de açılır
  if (url.pathname.endsWith(".pdf")) {
    e.respondWith(caches.open("kaya-pdf").then(async c => {
      const kayitli = await c.match(istek, { ignoreSearch: true });
      if (kayitli) return kayitli;
      const cevap = await fetch(istek);
      if (cevap.ok && cevap.status === 200) c.put(istek, cevap.clone());
      return cevap;
    }));
    return;
  }
  e.respondWith(caches.match(istek, { ignoreSearch: true }).then(k => k || fetch(istek)));
});
