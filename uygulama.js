// Balıkesir Kaya Tırmanış Rehberi — uygulama
"use strict";

/* ---------- Yardımcılar ---------- */
const $ = (s, k = document) => k.querySelector(s);
const $$ = (s, k = document) => [...k.querySelectorAll(s)];
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const kucuk = s => String(s).toLocaleLowerCase("tr");
const bugun = () => { const d = new Date(); return new Date(d - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10); };

const IKON = {
  ara: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  geri: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7"/></svg>',
  yildiz: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg>',
  tel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  indir: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m-5-5 5 5 5-5M5 20h14"/></svg>',
  yukle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20V9m-5 5 5-5 5 5M5 4h14"/></svg>',
  harita: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
};

/* ---------- Veri ---------- */
const SEKTORLER = [];
for (const b of BOLGELER) for (const s of b.sektorler) {
  s.bolge = b;
  s.rotalar.forEach((r, i) => { r.sektor = s; r.sira = i; r.id = `${s.id}:${r.no}:${r.isim}`; });
  SEKTORLER.push(s);
}
const TUM_ROTALAR = SEKTORLER.flatMap(s => s.rotalar);
const sektorBul = id => SEKTORLER.find(s => s.id === id);

// Fransız derecesini sıralanabilir sayıya çevirir (4+, 5a, 6b+ ...). Derece yoksa null.
function deger(fr) {
  const m = /^(\d)([abc])?(\+)?$/.exec(String(fr).trim());
  if (!m) return null;
  return +m[1] * 10 + (m[2] ? { a: 0, b: 3, c: 6 }[m[2]] : 3) + (m[3] ? 1 : 0);
}
function bant(fr) {
  const v = deger(fr);
  if (v === null) return "b0";
  if (v < 56) return "b1";   // 5c altı
  if (v < 60) return "b2";   // 5c, 5c+
  if (v < 66) return "b3";   // 6a - 6b+
  return "b4";               // 6c ve üstü
}
// Önce UIAA, altında Fransız derecesi. Renk zorluğa göre.
function dereceRozet(r, sinif = "derece") {
  if (!r.uiaa && !r.fr) return `<span class="${sinif} b0" aria-label="Derece yok">?</span>`;
  const ust = r.uiaa || r.fr, alt = r.uiaa ? r.fr : "";
  return `<span class="${sinif} ${bant(r.fr)}${ust.length > 4 ? " kucuk-yazi" : ""}">${esc(ust)}${alt ? `<small>${esc(alt)}</small>` : ""}</span>`;
}
const dereceYazi = r => r.uiaa && r.fr ? `${r.uiaa} (${r.fr})` : (r.uiaa || r.fr || "");
const deg = v => esc(v ?? "");   // rehberde boşsa boş kalır
function olcu(r) {
  const p = [];
  if (r.metre) p.push(`${esc(r.metre)} m`);
  if (r.bolt) p.push(`${esc(r.bolt)} bolt`);
  return p.join(" · ");
}

/* ---------- Defter (telefonda saklanan kişisel kayıtlar) ---------- */
const ANAHTAR = "kaya-defter-v1";
let DEFTER = {};
try { DEFTER = JSON.parse(localStorage.getItem(ANAHTAR) || "{}").rotalar || {}; } catch { DEFTER = {}; }
let kalicilikIstendi = false;
function defterKaydet() {
  try {
    localStorage.setItem(ANAHTAR, JSON.stringify({ surum: 1, rotalar: DEFTER }));
    if (!kalicilikIstendi && navigator.storage?.persist) { kalicilikIstendi = true; navigator.storage.persist(); }
    return true;
  } catch { bildir("Kaydedilemedi. Telefonda yer kalmamış olabilir."); return false; }
}
function kayitAl(id) { return DEFTER[id] || null; }
function kayitYaz(id, kayit) {
  const bosMu = !kayit.proje && !kayit.toprope && !kayit.lider && !kayit.not && !kayit.fav;
  if (bosMu) delete DEFTER[id]; else DEFTER[id] = kayit;
  return defterKaydet();
}

// Kayıt: { proje, toprope, lider, tarih, not, fav }
// toprope / lider değerleri: "" (yok), "dusme" (temiz değil), "temiz", "flash", "onsight"
// Eski sürümden kalan kayıtları yeni düzene çevir
for (const [id, k] of Object.entries(DEFTER)) {
  if (!("durum" in k)) continue;
  const y = { proje: k.durum === "proje", toprope: "", lider: "", tarih: k.tarih || "", not: k.not || "", fav: !!k.fav };
  if (k.durum === "toprope") y.toprope = k.temiz ? "temiz" : "dusme";
  if (k.durum === "lider") y.lider = k.temiz ? "temiz" : "dusme";
  if (k.durum === "flash" || k.durum === "onsight") y.lider = k.durum;
  DEFTER[id] = y;
}

const TEMIZ = ["temiz", "flash", "onsight"];
const tamamlandi = k => !!k && TEMIZ.includes(k.lider);
const topropeTemiz = k => !!k && TEMIZ.includes(k.toprope);
const LIDER_AD = { dusme: "Lider", temiz: "Redpoint", flash: "Flash", onsight: "Onsight" };
const TOPROPE_AD = { dusme: "Toprope", temiz: "Toprope temiz", flash: "Toprope flash", onsight: "Toprope onsight" };
function durumRozet(r) {
  const k = kayitAl(r.id);
  if (!k) return "";
  let h = k.fav ? `<span class="yildiz" aria-label="Favori">${IKON.yildiz}</span>` : "";
  if (k.lider) h += `<span class="durum ${k.lider === "dusme" ? "d-kirli" : "d-tamam"}">${LIDER_AD[k.lider]}</span>`;
  else if (k.toprope) h += `<span class="durum ${k.toprope === "dusme" ? "d-kirli" : "d-toprope"}">${TOPROPE_AD[k.toprope]}</span>`;
  else if (k.proje) h += `<span class="durum d-kirli">Proje</span>`;
  return h;
}

/* ---------- Ekran parçaları ---------- */
const ekran = $("#ekran");
function bar(geriHref, yol, baslik, sag = "") {
  return `<header class="bar">
    ${geriHref ? `<a class="geri" href="${geriHref}" aria-label="Geri">${IKON.geri}</a>` : ""}
    <div>${yol ? `<p class="yol">${esc(yol)}</p>` : ""}<h1>${esc(baslik)}</h1></div>${sag}</header>`;
}
function rotaSatiri(r, sektorGoster = false) {
  return `<li><a class="rota" href="#/rota/${r.sektor.id}/${r.sira}">
    <span class="no" aria-label="${esc(r.no)} numara">${esc(r.no)}</span>
    <span class="ad">${esc(r.isim)}<small>${sektorGoster ? esc(r.sektor.ad) + (olcu(r) ? " · " : "") : ""}${olcu(r)}</small></span>
    ${durumRozet(r)}${dereceRozet(r)}
  </a></li>`;
}
function fotoDugmesi(src, alt) {
  return `<button type="button" class="foto-dugme" data-foto="${esc(src)}" data-alt="${esc(alt)}">
    <img src="${esc(src)}" alt="${esc(alt)}" loading="lazy"><span>Dokun, büyüt</span></button>`;
}
function derecAraligi(s) {
  const v = s.rotalar.filter(r => deger(r.fr) !== null && r.uiaa).sort((a, b) => deger(a.fr) - deger(b.fr));
  if (!v.length) return "";
  const a = v[0].uiaa, b = v[v.length - 1].uiaa;
  return a === b ? a : `${a} – ${b}`;
}

/* ---------- iPhone / kurulum ipucu ---------- */
const iOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const kurulu = matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
let kurulumOlayi = null;
addEventListener("beforeinstallprompt", e => { e.preventDefault(); kurulumOlayi = e; if (aktifSayfa === "ana") goster(); });
function ipucuKapaliMi() { try { return localStorage.getItem("kaya-ipucu-kapali") === "1"; } catch { return false; } }
function kurulumIpucu() {
  if (kurulu) return "";
  if (iOS && !ipucuKapaliMi()) return `<div class="ipucu"><p><b>iPhone'da kayıtların silinmesin.</b> Alttaki Paylaş düğmesine dokun, sonra "Ana Ekrana Ekle"yi seç. Uygulamayı hep ana ekrandaki simgeden aç.</p><button type="button" class="kapat" data-ipucu-kapat>Tamam, anladım</button></div>`;
  if (kurulumOlayi) return `<div class="dugmeler"><button type="button" class="dugme ana" data-kur>Uygulamayı telefona yükle</button></div>`;
  return "";
}

/* ---------- Sayfalar ---------- */
let aktifSayfa = "";
let aramaMetni = "";
const filtreler = {}; // sektör id -> filtre

function sayfaAna() {
  aktifSayfa = "ana";
  const kayitlar = TUM_ROTALAR.map(r => [r, kayitAl(r.id)]);
  const tamam = kayitlar.filter(([, k]) => tamamlandi(k));
  const enZor = tamam.map(([r]) => r).filter(r => deger(r.fr) !== null).sort((a, b) => deger(b.fr) - deger(a.fr))[0];
  const ozet = tamam.length
    ? `<b>${tamam.length}</b> rota tamamladın <span class="sag">${enZor ? "en zor " + esc(dereceYazi(enZor)) : ""}</span>`
    : `<span class="sag" style="margin-left:0">${TUM_ROTALAR.length} rota, ${SEKTORLER.length} sektör</span>`;
  document.title = "Balıkesir Kaya Tırmanış Rehberi";
  ekran.innerHTML = `
    <header class="ust"><h1 class="logo">Balıkesir<br>Kaya Tırmanış<br>Rehberi</h1><p class="alt">2026</p></header>
    <label class="arama">${IKON.ara}<span class="gizli">Ara</span><input type="search" id="ara" placeholder="Rota ya da sektör ara" value="${esc(aramaMetni)}" autocomplete="off" enterkeyhint="search"></label>
    <div id="ana-icerik"></div>`;
  anaIcerik(ozet);
  $("#ara").addEventListener("input", e => { aramaMetni = e.target.value; anaIcerik(ozet); });
}
function anaIcerik(ozet) {
  const kap = $("#ana-icerik");
  const q = kucuk(aramaMetni.trim());
  if (q) {
    const sektorler = SEKTORLER.filter(s => kucuk(s.ad).includes(q));
    const rotalar = TUM_ROTALAR.filter(r => kucuk(r.isim).includes(q));
    kap.innerHTML = (sektorler.length ? `<h2 class="bolum-baslik">Sektörler</h2><ul class="liste">${sektorler.map(s =>
      `<li><a class="liste-oge" href="#/sektor/${s.id}"><span class="ad">${esc(s.ad)}<small>${esc(s.bolge.ad)} · ${s.rotalar.length} rota</small></span><span class="ok">${IKON.geri}</span></a></li>`).join("")}</ul>` : "")
      + (rotalar.length ? `<h2 class="bolum-baslik">Rotalar</h2><ol class="rotalar">${rotalar.map(r => rotaSatiri(r, true)).join("")}</ol>` : "")
      + (!sektorler.length && !rotalar.length ? `<p class="bos">"${esc(aramaMetni)}" ile eşleşen rota ya da sektör yok.</p>` : "");
    return;
  }
  kap.innerHTML = `
    <div class="ozet">${ozet}</div>
    ${kurulumIpucu()}
    <section class="pdf" aria-labelledby="pdf-baslik">
      <div class="pdf-ikon" aria-hidden="true">PDF</div>
      <div class="pdf-yazi"><h2 id="pdf-baslik">Rehberin tamamı</h2><p>Balıkesir Kaya Tırmanış Rehberi 2026 · 25 sayfa · 24 MB</p></div>
      <div class="pdf-dugmeler">
        <a class="dugme ana" href="rehber-2026.pdf" target="_blank" rel="noopener">Aç</a>
        <a class="dugme" href="rehber-2026.pdf" download="Balikesir-Kaya-Tirmanis-Rehberi-2026.pdf">${IKON.indir} İndir</a>
      </div>
    </section>
    <ul class="bolgeler">${BOLGELER.map(b => {
      const n = b.sektorler.reduce((t, s) => t + s.rotalar.length, 0);
      return `<li><a class="bolge" href="#/bolge/${b.id}"><img src="${b.kapak}" alt=""><div class="bolge-yazi"><h2>${esc(b.ad)}</h2><p>${b.sektorler.length} sektör · ${n} rota</p></div></a></li>`;
    }).join("")}</ul>
    <ul class="liste">
      <li><a class="liste-oge" href="#/hikayeler"><span class="ad">Sektör isimleri ve Balıkesirin değerleri<small>Rehberin 23. ve 24. sayfaları</small></span><span class="ok">${IKON.geri}</span></a></li>
      <li><a class="liste-oge" href="#/kapak"><span class="ad">Rehberin kapağı<small>Balıkesir Kaya Tırmanış Rehberi</small></span><span class="ok">${IKON.geri}</span></a></li>
    </ul>`;
}

function sayfaBolge(id) {
  const b = BOLGELER.find(x => x.id === id);
  if (!b) return sayfaYok();
  aktifSayfa = "bolge";
  document.title = b.ad + " · Balıkesir Kaya Tırmanış Rehberi";
  ekran.innerHTML = `${bar("#/", "Bölge", b.ad)}
    <figure class="harita">
      ${b.harita.map((h, i) => `<div class="harita-kap">
        <img src="${h.resim}" alt="${esc(b.ad)} bölgesi${b.harita.length > 1 ? " " + (i + 1) + ". kısım" : ""}, sektörler işaretli">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" role="group" aria-label="Sektörler">${Object.entries(h.alanlar).map(([sid, pts]) =>
          `<a href="#/sektor/${sid}" aria-label="${esc(sektorBul(sid).ad)}"><polygon points="${pts}"/></a>`).join("")}</svg>
      </div>`).join("")}
      <figcaption>${b.sektorler.length > 1 ? "Fotoğrafta bir sektöre dokun" : "Fotoğrafa dokun, sektör açılsın"}
        <button type="button" class="buyut" data-foto="${esc(b.sayfalar.find(x => /s04|s14/.test(x)) || b.harita[0].resim)}" data-alt="${esc(b.ad)} bölgesi">Büyüt</button></figcaption>
    </figure>
    <h2 class="bolum-baslik">Sektörler</h2>
    <ul class="liste">${b.sektorler.map(s => {
      const yapilan = s.rotalar.filter(r => tamamlandi(kayitAl(r.id))).length;
      const ara = derecAraligi(s);
      return `<li><a class="liste-oge" href="#/sektor/${s.id}"><span class="ad">${esc(s.ad)}<small>${s.rotalar.length} rota${ara ? " · " + esc(ara) : ""}${yapilan ? ` · ${yapilan} tamamladın` : ""}</small></span><span class="ok">${IKON.geri}</span></a></li>`;
    }).join("")}</ul>
    <h2 class="bolum-baslik">Ulaşım ve harita</h2>
    <div class="metin-kutu">
      ${b.ulasim_baslik ? `<p class="metin-baslik">${esc(b.ulasim_baslik)}</p>` : ""}
      <p class="metin">${esc(b.ulasim)}</p>
      <p class="kaynak">Rehber, ${b.ulasim_sayfa}. sayfa</p>
    </div>
    <div class="dugmeler"><a class="dugme ana" href="${esc(b.harita_link)}" target="_blank" rel="noopener">${IKON.harita} Haritada aç</a></div>
    <div class="fotolar">${b.sayfalar.map((s, i) => fotoDugmesi(s, `${b.ad} ulaşım ve harita ${i + 1}`)).join("")}</div>
    ${b.kapak_tam ? `<h2 class="bolum-baslik">Rehberin ${esc(b.ad)} sayfası</h2><div class="fotolar">${fotoDugmesi(b.kapak_tam, `${b.ad}: rehberdeki bölge kapağı`)}</div>` : ""}`;
}

function sayfaSektor(id) {
  const s = sektorBul(id);
  if (!s) return sayfaYok();
  aktifSayfa = "sektor";
  document.title = s.ad + " · Balıkesir Kaya Tırmanış Rehberi";
  const f = filtreler[id] || "hepsi";
  const secenekler = [["hepsi", "Hepsi"], ["kolay", "VI ve altı"], ["orta", "VI+ – VII+"], ["zor", "VIII- ve üstü"], ["proje", "Derecesiz"]];
  const uygun = r => {
    const v = deger(r.fr);
    return f === "hepsi" || (f === "kolay" && v !== null && v < 60) || (f === "orta" && v !== null && v >= 60 && v < 66)
      || (f === "zor" && v !== null && v >= 66) || (f === "proje" && v === null);
  };
  const varMi = k => k === "hepsi" || s.rotalar.some(r => { const v = deger(r.fr);
    return (k === "kolay" && v !== null && v < 60) || (k === "orta" && v !== null && v >= 60 && v < 66) || (k === "zor" && v !== null && v >= 66) || (k === "proje" && v === null); });
  const liste = s.rotalar.filter(uygun);
  ekran.innerHTML = `${bar("#/bolge/" + s.bolge.id, s.bolge.ad, s.ad)}
    <div class="fotolar">${s.foto.map((src, i) => fotoDugmesi(src, `${s.ad} sektörü fotoğrafı${s.foto.length > 1 ? " " + (i + 1) : ""}`)).join("")}</div>
    ${s.not ? `<p class="not-kutu">${esc(s.not)}</p>` : ""}
    ${(h => h ? `<details class="hikaye"><summary>İsmin hikâyesi</summary><h3>${esc(h.baslik)}</h3><p class="metin">${esc(h.metin)}</p><p class="kaynak">Rehber, ${h.sayfa}. sayfa</p></details>` : "")(HIKAYELER.find(h => h.sektorler.includes(s.id)))}
    <div class="filtre" role="group" aria-label="Derece filtresi">${secenekler.filter(([k]) => varMi(k)).map(([k, a]) =>
      `<button type="button" data-filtre="${k}" aria-pressed="${k === f}">${a}</button>`).join("")}</div>
    ${liste.length ? `<ol class="rotalar">${liste.map(r => rotaSatiri(r)).join("")}</ol>` : `<p class="bos">Bu derecede rota yok.</p>`}`;
  $$("[data-filtre]").forEach(b => b.onclick = () => { filtreler[id] = b.dataset.filtre; sayfaSektor(id); });
}

function sayfaRota(sektorId, sira) {
  const s = sektorBul(sektorId), r = s?.rotalar[+sira];
  if (!r) return sayfaYok();
  aktifSayfa = "rota";
  document.title = r.isim + " · Balıkesir Kaya Tırmanış Rehberi";
  const k = { proje: false, toprope: "", lider: "", tarih: "", not: "", fav: false, ...(kayitAl(r.id) || {}) };
  const ust = r.uiaa || r.fr;
  const buyuk = !ust ? `<b>?</b><span>Derece yok</span>`
    : `<b class="${ust.length > 4 ? "uzun" : ""}">${esc(ust)}</b>${r.uiaa && r.fr ? `<span>${esc(r.fr)}</span>` : ""}`;
  const stilSatiri = (tur, ad, altlar) => `
    <div class="stil" data-tur="${tur}">
      <button type="button" class="stil-ana" aria-pressed="${!!k[tur]}">${ad}</button>
      <div class="stil-alt" role="group" aria-label="${ad} nasıl">${altlar.map(([d, a]) =>
        `<button type="button" data-stil="${d}" aria-pressed="${k[tur] === d}">${a}</button>`).join("")}</div>
    </div>`;
  ekran.innerHTML = `${bar("#/sektor/" + s.id, `${s.ad} · ${r.no} numara`, r.isim,
      `<button type="button" class="ikon-dugme" id="fav" aria-pressed="${k.fav}" aria-label="Favori">${IKON.yildiz}</button>`)}
    <div class="kunye">
      <div class="buyuk-derece ${bant(r.fr)}">${buyuk}</div>
      <dl>
        <div><dt>Boy</dt><dd>${r.metre ? esc(r.metre) + (r.metre === "?" ? "" : " m") : ""}</dd></div>
        <div><dt>Bolt</dt><dd>${deg(r.bolt)}</dd></div>
        <div class="genis"><dt>Rotayı açan / ilk çıkış</dt><dd>${deg(r.acan)}</dd></div>
        <div><dt>Tarih</dt><dd>${deg(r.yil)}</dd></div>
        <div><dt>Rehberde</dt><dd>${esc(r.sayfa)}. sayfa</dd></div>
      </dl>
    </div>
    <section class="defter" aria-labelledby="defter-baslik">
      <h2 id="defter-baslik">Defterim <span class="kaydedildi" id="kaydedildi" aria-live="polite"></span></h2>
      ${stilSatiri("toprope", "Toprope", [["temiz", "Temiz"], ["flash", "Flash"], ["onsight", "Onsight"]])}
      ${stilSatiri("lider", "Lider", [["temiz", "Redpoint"], ["flash", "Flash"], ["onsight", "Onsight"]])}
      <div class="stil"><button type="button" class="stil-ana" id="proje" aria-pressed="${k.proje}">Proje</button></div>
      <div class="satir"><label for="tarih">Tarih</label><input type="date" class="tarih" id="tarih" value="${esc(k.tarih)}" max="${bugun()}"></div>
      <label class="not"><span>Not</span><textarea id="not" rows="4">${esc(k.not)}</textarea></label>
      <button type="button" class="sil" id="sil" ${kayitAl(r.id) ? "" : "hidden"}>Bu rotanın kaydını sil</button>
    </section>`;

  const yaz = (mesaj = "Kaydedildi") => {
    if (kayitYaz(r.id, k)) { $("#kaydedildi").textContent = mesaj; $("#sil").hidden = !kayitAl(r.id); }
  };
  const tarihVer = () => { if ((k.toprope || k.lider || k.proje) && !k.tarih) { k.tarih = bugun(); $("#tarih").value = k.tarih; } };
  const tazele = () => $$(".stil[data-tur]").forEach(el => {
    const tur = el.dataset.tur;
    $(".stil-ana", el).setAttribute("aria-pressed", String(!!k[tur]));
    $$("[data-stil]", el).forEach(b => b.setAttribute("aria-pressed", String(k[tur] === b.dataset.stil)));
  });
  $$(".stil[data-tur]").forEach(el => {
    const tur = el.dataset.tur;
    $(".stil-ana", el).onclick = () => { k[tur] = k[tur] ? "" : "dusme"; tarihVer(); tazele(); yaz(); };
    $$("[data-stil]", el).forEach(b => b.onclick = () => {
      k[tur] = k[tur] === b.dataset.stil ? "dusme" : b.dataset.stil;   // seçiliye tekrar dokununca "temiz değil"e döner
      tarihVer(); tazele(); yaz();
    });
  });
  $("#proje").onclick = e => { k.proje = !k.proje; e.currentTarget.setAttribute("aria-pressed", k.proje); tarihVer(); yaz(); };
  $("#tarih").onchange = e => { k.tarih = e.target.value; yaz(); };
  let zaman;
  $("#not").oninput = e => { k.not = e.target.value; $("#kaydedildi").textContent = "Yazılıyor…"; clearTimeout(zaman); zaman = setTimeout(() => yaz(), 500); };
  $("#not").onblur = () => { clearTimeout(zaman); yaz(); };
  $("#fav").onclick = e => { k.fav = !k.fav; e.currentTarget.setAttribute("aria-pressed", k.fav); yaz(k.fav ? "Favorilere eklendi" : "Favorilerden çıkarıldı"); };
  $("#sil").onclick = () => {
    if (!confirm("Bu rotadaki kayıt, not ve tarih silinsin mi?")) return;
    delete DEFTER[r.id]; defterKaydet(); bildir("Kayıt silindi"); sayfaRota(sektorId, sira);
  };
}

function sayfaDefter() {
  aktifSayfa = "defter";
  document.title = "Defterim · Balıkesir Kaya Tırmanış Rehberi";
  const kayitli = TUM_ROTALAR.filter(r => kayitAl(r.id));
  const k = r => kayitAl(r.id);
  const zorlugaGore = (a, b) => (deger(b.fr) ?? -1) - (deger(a.fr) ?? -1);
  const tamam = kayitli.filter(r => tamamlandi(k(r))).sort(zorlugaGore);
  const toprope = kayitli.filter(r => topropeTemiz(k(r))).sort(zorlugaGore);
  const projeler = kayitli.filter(r => k(r).proje);
  const favoriler = kayitli.filter(r => k(r).fav);
  const digerleri = kayitli.filter(r => (k(r).lider === "dusme" || k(r).toprope === "dusme") && !tamamlandi(k(r)) && !topropeTemiz(k(r)));
  const enZor = tamam.find(r => deger(r.fr) !== null);
  const bolum = (ad, l) => l.length ? `<h2 class="bolum-baslik">${ad} (${l.length})</h2><ol class="rotalar">${l.map(r => rotaSatiri(r, true)).join("")}</ol>` : "";
  ekran.innerHTML = `${bar("", "", "Defterim")}
    <div class="istatistik">
      <div><b>${tamam.length}</b><span>Lider tamamlanan</span></div>
      <div><b>${enZor ? esc(dereceYazi(enZor)) : "—"}</b><span>En zor lider</span></div>
      <div><b>${toprope.length}</b><span>Toprope temiz</span></div>
      <div><b>${projeler.length}</b><span>Proje</span></div>
    </div>
    ${kurulumIpucu()}
    ${kayitli.length ? "" : `<p class="bos">Defterin boş. Bir rotaya gir, tırmanışını işaretle ya da not yaz. Kayıtların sadece bu telefonda saklanır.</p>`}
    ${bolum("Favoriler", favoriler)}${bolum("Lider", tamam)}${bolum("Toprope temiz", toprope)}${bolum("Projeler", projeler)}${bolum("Düşerek", digerleri)}
    <h2 class="bolum-baslik">Yedekleme</h2>
    <p class="bolum" style="color:var(--soluk);font-size:14px">Kayıtların sadece bu telefonda durur. Telefonu değiştirmeden ya da sıfırlamadan önce yedeğini indir. Yeni telefonda "Yedekten geri yükle" ile geri getirirsin.</p>
    <div class="dugmeler">
      <button type="button" class="dugme" id="yedek-al">${IKON.indir} Yedeği indir</button>
      <button type="button" class="dugme" id="yedek-yukle">${IKON.yukle} Yedekten geri yükle</button>
      <input type="file" id="yedek-dosya" accept="application/json,.json" hidden>
    </div>`;
  $("#yedek-al").onclick = () => {
    const veri = JSON.stringify({ uygulama: "balikesir-kaya-rehberi", surum: 1, tarih: new Date().toISOString(), rotalar: DEFTER }, null, 1);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([veri], { type: "application/json" }));
    a.download = `kaya-defterim-${bugun()}.json`;
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    bildir("Yedek indirildi");
  };
  $("#yedek-yukle").onclick = () => $("#yedek-dosya").click();
  $("#yedek-dosya").onchange = async e => {
    const dosya = e.target.files[0]; if (!dosya) return;
    try {
      const veri = JSON.parse(await dosya.text());
      if (veri?.uygulama !== "balikesir-kaya-rehberi" || typeof veri.rotalar !== "object") throw 0;
      const n = Object.keys(veri.rotalar).length;
      if (!confirm(`Yedekte ${n} rota kaydı var. Bu telefondaki kayıtların yerine yüklensin mi?`)) return;
      DEFTER = veri.rotalar; defterKaydet(); bildir(`${n} kayıt geri yüklendi`); sayfaDefter();
    } catch { bildir("Bu dosya bir defter yedeği değil."); }
  };
}

const TERIMLER = [
  ["Lider (öncü)", "İpi aşağıdan kendin taşırsın, çıkarken duvardaki bolt'lara ekspres takıp ipi geçirirsin. Düşersen son taktığın bolt'un biraz altına kadar düşersin."],
  ["Toprope", "İp önceden en üstteki istasyondan geçirilmiştir. Düşersen hemen tutulursun. Yeni başlayanlar ve zor rotaya alışmak için kullanılır."],
  ["Temiz", "Rotayı baştan sona hiç düşmeden ve ipe asılıp dinlenmeden çıkmak."],
  ["Proje", "Üzerinde çalıştığın, henüz temiz çıkamadığın rota. Rehberde 'PROJE' yazan rotalar ise henüz kimsenin temiz çıkamadığı, derecesi belli olmayan rotalardır."],
  ["Redpoint", "Rotayı daha önce denedikten sonra, lider ve temiz çıkmak."],
  ["Flash", "Rotayı ilk denemende temiz çıkmak; önceden bilgi almışsındır (birini izlemişsin ya da sana anlatılmıştır). Toprope ya da lider olabilir."],
  ["Onsight", "Rotayı ilk denemende, hiç bilgi almadan temiz çıkmak. Toprope ya da lider olabilir."],
  ["Bolt", "Kayaya sabitlenmiş metal emniyet noktası. Rehberdeki 'bolt' sayısı, rotada kaç tane olduğunu gösterir; o kadar ekspres götürmen gerekir."],
  ["Ekspres", "İki karabinanın kısa bir bantla bağlandığı parça. Bir ucu bolt'a, diğer ucu ipe takılır."],
  ["İstasyon", "Rotanın sonundaki sağlam emniyet noktası. Buradan iple inilir ya da toprope kurulur."],
  ["Krux", "Rotanın en zor hareketi ya da bölümü."],
  ["Beta", "Bir rotanın nasıl çıkılacağına dair bilgi: hangi tutamak, hangi hareket."],
  ["Emniyet (belay)", "Aşağıdaki kişinin ipi tutarak tırmanıcıyı güvenceye alması."],
  ["Topo", "Sektör fotoğrafı üzerinde rotaların çizgilerle ve numaralarla gösterildiği çizim."],
  ["Sektör", "Bir bölgedeki kaya duvarlarından biri. Her sektörde birden fazla rota vardır."],
  ["Rotayı açan / ilk çıkış", "Rotayı temizleyip bolt'larını çakan ya da ilk kez çıkan kişi."],
  ["Derece", "Rotanın zorluğu. Rehberde iki sistem var: UIAA (Roma rakamı, ör. VI+) ve Fransız (ör. 6a). Sayı ve harf büyüdükçe rota zorlaşır."],
];
// Rehberdeki rotalarda yan yana geçen UIAA – Fransız eşleşmeleri (rehberde yazdığı gibi)
const ESLESMELER = [["IV+", "4b"], ["V-", "4+"], ["V", "5a"], ["V+", "5b"], ["VI-", "5c"], ["VI", "5c+"], ["VI+", "6a"], ["VII-", "6a+"], ["VII", "6b"], ["VII+", "6b+"], ["VIII-", "6c+"], ["VIII", "7a"], ["VIII+", "7a+"], ["VIII+/IX-", "7b"], ["IX-", "7b+"], ["IX / IX+", "7c+"], ["X-", "8a+"]];

function sayfaSozluk() {
  aktifSayfa = "sozluk";
  document.title = "Sözlük · Balıkesir Kaya Tırmanış Rehberi";
  ekran.innerHTML = `${bar("", "", "Tırmanış sözlüğü")}
    <dl class="terimler">${TERIMLER.map(([t, a]) => `<div class="terim"><dt>${esc(t)}</dt><dd>${esc(a)}</dd></div>`).join("")}</dl>
    <h2 class="bolum-baslik">Derece karşılıkları</h2>
    <p class="bolum" style="color:var(--soluk);font-size:14px">Bu rehberdeki rotalarda yan yana yazılan UIAA ve Fransız dereceleri.</p>
    <table class="tablo"><thead><tr><th>UIAA</th><th>Fransız</th></tr></thead><tbody>
      ${ESLESMELER.map(([u, f]) => `<tr><td>${dereceRozet({ uiaa: u, fr: f })}</td><td>${esc(f)}</td></tr>`).join("")}
    </tbody></table>`;
}

function sayfaAcil() {
  aktifSayfa = "acil";
  document.title = "Acil · Balıkesir Kaya Tırmanış Rehberi";
  ekran.innerHTML = `${bar("", "", "Acil durum")}
    <a class="ara-dugme kirmizi" href="tel:112">${IKON.tel}<div><b>112 Acil Çağrı</b><span>(Ambulans,Jandarma, Polis,İtfaiye)</span></div></a>
    <a class="ara-dugme" href="tel:+902665761795">${IKON.tel}<div><b>0266 576 1795</b><span>Kepsut İlçe Jandarma</span></div></a>
    <a class="ara-dugme" href="tel:+905052960296">${IKON.tel}<div><b>0505 296 02 96</b><span>Balıkesir Dağcılık İl Temsilciliği</span></div></a>
    <div class="uyari" style="margin-top:16px"><h2>UYARI!</h2><p>Kaya tırmanışı tehlikeli bir spordur.Sizin veya çevrenizdekilerin ciddi şekilde yaralanmasına ya da ölümüne nedenolabilir.Yeterli deneyim,bilgi,hazırlık,antrenman ve ekipman olmadan tırmanılmamalıdır</p></div>
    <h2 class="bolum-baslik">Rehberin son sayfası</h2>
    <div class="fotolar">${fotoDugmesi("img/s25.jpg", "Rehberin son sayfası: destekçiler, acil numaralar ve uyarı")}</div>
    <div class="kunye-alt"><p>Yazan: Serhat ALKIVILCIM</p><p>Fotoğraf: Serhat ALKIVILCIM, Murat ALAN</p><p>Tasarım: Sinan ŞAŞMAZ</p></div>`;
}

function sayfaResimler(baslik, resimler, geri = "#/") {
  aktifSayfa = "resim";
  document.title = baslik + " · Balıkesir Kaya Tırmanış Rehberi";
  ekran.innerHTML = `${bar(geri, "Rehber", baslik)}<div class="fotolar">${resimler.map(([s, a]) => fotoDugmesi(s, a)).join("")}</div>`;
}

function sayfaHikayeler() {
  aktifSayfa = "hikaye";
  document.title = "Sektör isimleri · Balıkesir Kaya Tırmanış Rehberi";
  ekran.innerHTML = `${bar("#/", "Rehber, 23. ve 24. sayfa", HIKAYELER_BASLIK)}
    ${HIKAYELER.map(h => `<section class="metin-kutu hikaye-bolum">
      <h2>${esc(h.baslik)}</h2><p class="metin">${esc(h.metin)}</p>
      <p class="kaynak">${h.sektorler.map(id => `<a href="#/sektor/${id}">${esc(sektorBul(id).ad)} sektörüne git</a>`).join(" · ")}</p>
    </section>`).join("")}
    <h2 class="bolum-baslik">Rehberdeki sayfalar</h2>
    <div class="fotolar">${fotoDugmesi("img/s23.jpg", "Rehber sayfa 23")}${fotoDugmesi("img/s24.jpg", "Rehber sayfa 24")}</div>`;
}

function sayfaYok() {
  aktifSayfa = "yok";
  ekran.innerHTML = `${bar("#/", "", "Sayfa bulunamadı")}<p class="bos">Bu sayfa yok. <a href="#/" style="text-decoration:underline">Ana sayfaya dön</a></p>`;
}

/* ---------- Yönlendirme ---------- */
function goster() {
  const p = (location.hash.replace(/^#\/?/, "") || "").split("/").map(decodeURIComponent);
  const sekme = { defter: "defter", sozluk: "sozluk", acil: "acil" }[p[0]] || "rehber";
  $$(".sekme").forEach(a => a.dataset.sekme === sekme ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
  switch (p[0]) {
    case "": sayfaAna(); break;
    case "bolge": sayfaBolge(p[1]); break;
    case "sektor": sayfaSektor(p[1]); break;
    case "rota": sayfaRota(p[1], p[2]); break;
    case "defter": sayfaDefter(); break;
    case "sozluk": sayfaSozluk(); break;
    case "acil": sayfaAcil(); break;
    case "hikayeler": sayfaHikayeler(); break;
    case "kapak": sayfaResimler("Rehberin kapağı", [["img/s01.jpg", "Balıkesir Kaya Tırmanış Rehberi kapağı"]]); break;
    default: sayfaYok();
  }
}
let oncekiHash = null;
addEventListener("hashchange", () => {
  if (fotoAcik) { fotoKapat(false); }
  const ayniSayfa = oncekiHash === location.hash;
  oncekiHash = location.hash;
  goster();
  if (!ayniSayfa) { scrollTo(0, 0); ekran.focus({ preventScroll: true }); }
});

/* ---------- Ortak tıklamalar ---------- */
document.addEventListener("click", e => {
  const f = e.target.closest("[data-foto]");
  if (f) { fotoAc(f.dataset.foto, f.dataset.alt); return; }
  if (e.target.closest("[data-ipucu-kapat]")) { try { localStorage.setItem("kaya-ipucu-kapali", "1"); } catch {} goster(); return; }
  if (e.target.closest("[data-kur]") && kurulumOlayi) { kurulumOlayi.prompt(); kurulumOlayi.userChoice.finally(() => { kurulumOlayi = null; goster(); }); }
});

/* ---------- Fotoğraf büyütme ---------- */
const fotoKutu = $("#foto"), fotoImg = $("#foto img"), fotoKaydir = $(".foto-kaydir");
const ZOOM = [1, 1.6, 2.5, 4];
let zoom = 0, fotoAcik = false, odakOnce = null;
function zoomUygula(yeni, merkez) {
  const eski = ZOOM[zoom]; zoom = Math.max(0, Math.min(ZOOM.length - 1, yeni));
  const oran = ZOOM[zoom] / eski;
  const cx = merkez ? merkez[0] : fotoKaydir.clientWidth / 2, cy = merkez ? merkez[1] : fotoKaydir.clientHeight / 2;
  const sx = fotoKaydir.scrollLeft, sy = fotoKaydir.scrollTop;
  fotoImg.style.width = ZOOM[zoom] * 100 + "%";
  fotoKaydir.scrollLeft = (sx + cx) * oran - cx; fotoKaydir.scrollTop = (sy + cy) * oran - cy;
}
function fotoAc(src, alt) {
  odakOnce = document.activeElement;
  fotoImg.src = src; fotoImg.alt = alt || ""; zoom = 0; fotoImg.style.width = "100%";
  fotoKutu.hidden = false; fotoAcik = true; document.body.style.overflow = "hidden";
  history.pushState({ foto: true }, "");
  $(".foto-kapat").focus();
}
function fotoKapat(geriGit = true) {
  if (!fotoAcik) return;
  fotoAcik = false; fotoKutu.hidden = true; document.body.style.overflow = "";
  if (geriGit && history.state?.foto) history.back();
  odakOnce?.focus?.({ preventScroll: true });
}
$$("[data-zoom]").forEach(b => b.onclick = () => zoomUygula(zoom + +b.dataset.zoom));
$(".foto-kapat").onclick = () => fotoKapat();
fotoImg.addEventListener("dblclick", e => {
  const r = fotoKaydir.getBoundingClientRect();
  zoomUygula(zoom === 0 ? 2 : 0, [e.clientX - r.left, e.clientY - r.top]);
});
addEventListener("popstate", () => { if (fotoAcik) fotoKapat(false); });
addEventListener("keydown", e => { if (e.key === "Escape" && fotoAcik) fotoKapat(); });

/* ---------- Bildirim ---------- */
let bildiriZaman;
function bildir(m) {
  const b = $("#bildiri"); b.textContent = m; b.classList.add("goster");
  clearTimeout(bildiriZaman); bildiriZaman = setTimeout(() => b.classList.remove("goster"), 2200);
}

/* ---------- Başlat ---------- */
oncekiHash = location.hash;
goster();
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
