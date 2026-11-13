// Bu dosya araclar/hazirla.py ile üretilir. Elle değiştirme; kaynak/veri/rotalar.csv'yi düzelt.
const BOLGELER = [
 {
  "id": "nusret",
  "ad": "Nusret",
  "kapak": "img/s02.jpg",
  "sayfalar": [
   "img/s03.jpg",
   "img/s04.jpg"
  ],
  "sektorler": [
   {
    "id": "hosmerim-sol",
    "ad": "Höşmerim Sol",
    "foto": [
     "img/s05.jpg"
    ],
    "rotalar": [
     {
      "no": "1",
      "isim": "DUVAR USTASI SOL",
      "uiaa": "VI",
      "fr": "5c+",
      "metre": "12",
      "bolt": "6",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "6"
     },
     {
      "no": "2",
      "isim": "DUVAR USTASI SAĞ",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "12",
      "bolt": "6",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "6"
     },
     {
      "no": "3",
      "isim": "KAMİLE",
      "uiaa": "VI",
      "fr": "5c+",
      "metre": "6",
      "bolt": "6",
      "acan": "Serhat Alkıvılcım",
      "yil": "2009",
      "sayfa": "6"
     },
     {
      "no": "4",
      "isim": "HÜNERLİ ELLER",
      "uiaa": "VI",
      "fr": "5c+",
      "metre": "14",
      "bolt": "6",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "6"
     },
     {
      "no": "5",
      "isim": "KAHVE MOLASI",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "12",
      "bolt": "6",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "6"
     },
     {
      "no": "6",
      "isim": "BALYOZDAN DOĞAN",
      "uiaa": "VII-",
      "fr": "6a+",
      "metre": "12",
      "bolt": "6",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "6"
     },
     {
      "no": "7",
      "isim": "AYARCI ENİŞTE",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "11",
      "bolt": "7",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "6"
     },
     {
      "no": "8",
      "isim": "LİMBİK",
      "uiaa": "VI",
      "fr": "5c+",
      "metre": "13",
      "bolt": "6",
      "acan": "Serhat Alkıvılcım",
      "yil": "2000",
      "sayfa": "6"
     },
     {
      "no": "9",
      "isim": "KATİL",
      "uiaa": "VI",
      "fr": "5c+",
      "metre": "13",
      "bolt": "5",
      "acan": "Serhat Alkıvılcım",
      "yil": "2002",
      "sayfa": "6"
     },
     {
      "no": "10",
      "isim": "DİKEY DİPLOPİ",
      "uiaa": "V+",
      "fr": "5b",
      "metre": "13",
      "bolt": "6",
      "acan": "Kemal Turan",
      "yil": "2017",
      "sayfa": "6"
     },
     {
      "no": "11",
      "isim": "EMLAK AVCISI",
      "uiaa": "VI-",
      "fr": "5c",
      "metre": "14",
      "bolt": "7",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "6"
     },
     {
      "no": "12",
      "isim": "AĞRI KESİCİ",
      "uiaa": "VI-",
      "fr": "5c",
      "metre": "16",
      "bolt": "8",
      "acan": "Kemal Turan",
      "yil": "2017",
      "sayfa": "6"
     },
     {
      "no": "13",
      "isim": "STELLIO",
      "uiaa": "VI",
      "fr": "5c+",
      "metre": "14",
      "bolt": "8",
      "acan": "Serhat Alkıvılcım",
      "yil": "2011",
      "sayfa": "6"
     },
     {
      "no": "14",
      "isim": "KAS GEVŞETİCİ",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "17",
      "bolt": "8",
      "acan": "Kemal Turan",
      "yil": "2017",
      "sayfa": "6"
     },
     {
      "no": "15",
      "isim": "KÜTÜK",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "14",
      "bolt": "7",
      "acan": "Serhat Alkıvılcım",
      "yil": "2001",
      "sayfa": "6"
     },
     {
      "no": "16",
      "isim": "İMAR AFFI",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "17",
      "bolt": "10",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "6"
     },
     {
      "no": "17",
      "isim": "KELEBEK",
      "uiaa": "V+",
      "fr": "5b",
      "metre": "17",
      "bolt": "10",
      "acan": "Serhat Alkıvılcım",
      "yil": "2017",
      "sayfa": "6"
     },
     {
      "no": "18",
      "isim": "ŞAHMERAN",
      "uiaa": "VI",
      "fr": "5c+",
      "metre": "26",
      "bolt": "10",
      "acan": "Kemal Turan",
      "yil": "2017",
      "sayfa": "6"
     },
     {
      "no": "19",
      "isim": "AKIL TUTULMASI",
      "uiaa": "VII-",
      "fr": "6a+",
      "metre": "9",
      "bolt": "5",
      "acan": "Kemal Turan",
      "yil": "2019",
      "sayfa": "6"
     },
     {
      "no": "20",
      "isim": "YARASA",
      "uiaa": "VI",
      "fr": "5c+",
      "metre": "24",
      "bolt": "7",
      "acan": "Serhat Alkıvılcım",
      "yil": "2000",
      "sayfa": "6"
     },
     {
      "no": "21",
      "isim": "ÖZBAY",
      "uiaa": "VIII-",
      "fr": "6c+",
      "metre": "24",
      "bolt": "7",
      "acan": "Serhat Alkıvılcım",
      "yil": "2014",
      "sayfa": "6"
     }
    ]
   },
   {
    "id": "hosmerim-sag",
    "ad": "Höşmerim Sağ",
    "foto": [
     "img/s07.jpg"
    ],
    "rotalar": [
     {
      "no": "1",
      "isim": "SIFIR HATA KAMİL",
      "uiaa": "VI-",
      "fr": "5c",
      "metre": "27",
      "bolt": "11",
      "acan": "Kemal Turan",
      "yil": "2017",
      "sayfa": "8"
     },
     {
      "no": "2",
      "isim": "TIRMANMANA BAK RECO",
      "uiaa": "VI",
      "fr": "5c+",
      "metre": "27",
      "bolt": "11",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "8"
     },
     {
      "no": "3",
      "isim": "HOŞMU ERİM",
      "uiaa": "V",
      "fr": "5a",
      "metre": "10",
      "bolt": "6",
      "acan": "Serhat Alkıvılcım",
      "yil": "2018",
      "sayfa": "8"
     },
     {
      "no": "4",
      "isim": "TÜKENMİŞLİK SENDROMU",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "28",
      "bolt": "10",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "8"
     },
     {
      "no": "5",
      "isim": "AVCI TOPLAYICI",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "28",
      "bolt": "10",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "8"
     },
     {
      "no": "6",
      "isim": "UZAY MARAŞELİ",
      "uiaa": "VI",
      "fr": "5c+",
      "metre": "28",
      "bolt": "9",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "8"
     },
     {
      "no": "7",
      "isim": "TAŞ BEBEK",
      "uiaa": "VI",
      "fr": "5c+",
      "metre": "28",
      "bolt": "8",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "8"
     },
     {
      "no": "8",
      "isim": "GAZLI PERDOVİTES",
      "uiaa": "VI",
      "fr": "5c+",
      "metre": "29",
      "bolt": "12",
      "acan": "Kemal Turan",
      "yil": "2017",
      "sayfa": "8"
     },
     {
      "no": "9",
      "isim": "ANNE KOKUSU",
      "uiaa": "VI-",
      "fr": "5c",
      "metre": "29",
      "bolt": "11",
      "acan": "Kemal Turan",
      "yil": "2017",
      "sayfa": "8"
     },
     {
      "no": "10",
      "isim": "BACADA BENGİ",
      "uiaa": "V+",
      "fr": "5b",
      "metre": "26",
      "bolt": "8",
      "acan": "Kemal Turan",
      "yil": "2017",
      "sayfa": "8"
     }
    ]
   },
   {
    "id": "kurtdereli",
    "ad": "Kurtdereli",
    "foto": [
     "img/s09.jpg"
    ],
    "rotalar": [
     {
      "no": "1",
      "isim": "ŞEKER",
      "uiaa": "VI",
      "fr": "5c+",
      "metre": "13",
      "bolt": "6",
      "acan": "Serhat Alkıvılcım",
      "yil": "2010",
      "sayfa": "10"
     },
     {
      "no": "2",
      "isim": "OO MON DIEU",
      "uiaa": "VII+",
      "fr": "6b+",
      "metre": "13",
      "bolt": "9",
      "acan": "Serhat Alkıvılcım",
      "yil": "2006",
      "sayfa": "10"
     },
     {
      "no": "3",
      "isim": "ÇIĞLIK",
      "uiaa": "VIII+",
      "fr": "7a+",
      "metre": "13",
      "bolt": "7",
      "acan": "Serhat Alkıvılcım",
      "yil": "2013",
      "sayfa": "10"
     },
     {
      "no": "4",
      "isim": "KURTDERELİ",
      "uiaa": "X-",
      "fr": "8a+",
      "metre": "13",
      "bolt": "9",
      "acan": "Serhat Alkıvılcım / M.Oğuz Kağanoğlu",
      "yil": "2012",
      "sayfa": "10"
     },
     {
      "no": "5",
      "isim": "YENİ GELİN",
      "uiaa": "PROJE",
      "fr": "",
      "metre": "13",
      "bolt": "9",
      "acan": "Serhat Alkıvılcım",
      "yil": "2012",
      "sayfa": "10"
     },
     {
      "no": "6",
      "isim": "BAYKUŞ",
      "uiaa": "VIII+",
      "fr": "7a+",
      "metre": "10",
      "bolt": "6",
      "acan": "Serhat Alkıvılcım",
      "yil": "2006",
      "sayfa": "10"
     },
     {
      "no": "7",
      "isim": "BAYANKUŞ",
      "uiaa": "VIII",
      "fr": "7a",
      "metre": "11",
      "bolt": "5",
      "acan": "Serhat Alkıvılcım",
      "yil": "2018",
      "sayfa": "10"
     },
     {
      "no": "8",
      "isim": "NİSMUS",
      "uiaa": "VIII+",
      "fr": "7a+",
      "metre": "12",
      "bolt": "6",
      "acan": "Serhat Alkıvılcım",
      "yil": "2006",
      "sayfa": "10"
     },
     {
      "no": "9",
      "isim": "KAYMAKLI",
      "uiaa": "IV+",
      "fr": "4b",
      "metre": "6",
      "bolt": "5",
      "acan": "Serhat Alkıvılcım",
      "yil": "2018",
      "sayfa": "10"
     }
    ]
   },
   {
    "id": "loca",
    "ad": "Loca",
    "foto": [
     "img/s11.jpg"
    ],
    "rotalar": [
     {
      "no": "1",
      "isim": "İKİ DİŞ FLETNER",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "13",
      "bolt": "4",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "12"
     },
     {
      "no": "2",
      "isim": "TULUMBACI SENDROMU",
      "uiaa": "",
      "fr": "",
      "metre": "10",
      "bolt": "5",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "12"
     },
     {
      "no": "3",
      "isim": "ÜTOPYAYA YOLCULUK",
      "uiaa": "VII-/VII",
      "fr": "6a+",
      "metre": "6",
      "bolt": "6",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "12"
     },
     {
      "no": "4",
      "isim": "GIARDANO BRUNO",
      "uiaa": "VII+",
      "fr": "6b+",
      "metre": "12",
      "bolt": "8",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "12"
     },
     {
      "no": "5",
      "isim": "GERÇEĞE SAYGI",
      "uiaa": "VII",
      "fr": "6b",
      "metre": "12",
      "bolt": "8",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "12"
     },
     {
      "no": "6",
      "isim": "TOUCH AND GO",
      "uiaa": "VIII-",
      "fr": "6c+",
      "metre": "13",
      "bolt": "9",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "12"
     },
     {
      "no": "7",
      "isim": "NUSRET",
      "uiaa": "VII",
      "fr": "6b",
      "metre": "10",
      "bolt": "?",
      "acan": "Serhat Alkıvılcım",
      "yil": "2011",
      "sayfa": "12"
     },
     {
      "no": "8",
      "isim": "MEZAR TAŞI",
      "uiaa": "VII-",
      "fr": "6a+",
      "metre": "11",
      "bolt": "7",
      "acan": "Serhat Alkıvılcım",
      "yil": "2017",
      "sayfa": "12"
     }
    ]
   },
   {
    "id": "yagci-bedir",
    "ad": "Yağcı Bedir",
    "foto": [
     "img/s11.jpg"
    ],
    "rotalar": [
     {
      "no": "1",
      "isim": "YAĞMUR",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "14",
      "bolt": "7",
      "acan": "Serhat Alkıvılcım",
      "yil": "2013",
      "sayfa": "12"
     },
     {
      "no": "2",
      "isim": "YOLLARIN KRALI",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "11",
      "bolt": "7",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "12"
     },
     {
      "no": "3",
      "isim": "İDRAR SÖKTÜRÜCÜ",
      "uiaa": "VII-",
      "fr": "6a+",
      "metre": "24",
      "bolt": "10",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "12"
     },
     {
      "no": "4",
      "isim": "SUÇ VE CEZA",
      "uiaa": "VI",
      "fr": "5c+",
      "metre": "9",
      "bolt": "5",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "12"
     },
     {
      "no": "5",
      "isim": "YAĞCI BEDİR SOL",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "25",
      "bolt": "10",
      "acan": "Kemal Turan",
      "yil": "2017",
      "sayfa": "12"
     },
     {
      "no": "6",
      "isim": "YAĞCI BEDİR SAĞ",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "23",
      "bolt": "10",
      "acan": "Kemal Turan",
      "yil": "2017",
      "sayfa": "12"
     },
     {
      "no": "7",
      "isim": "MİLLİ İRADE",
      "uiaa": "VI",
      "fr": "5c+",
      "metre": "20",
      "bolt": "8",
      "acan": "Kemal Turan",
      "yil": "2017",
      "sayfa": "12"
     },
     {
      "no": "8",
      "isim": "YURDUM İNSANI",
      "uiaa": "V",
      "fr": "5a",
      "metre": "20",
      "bolt": "8",
      "acan": "Kemal Turan",
      "yil": "2017",
      "sayfa": "12"
     },
     {
      "no": "9",
      "isim": "PİS YEDİLİ",
      "uiaa": "V+",
      "fr": "5b",
      "metre": "16",
      "bolt": "7",
      "acan": "Kemal Turan",
      "yil": "2017",
      "sayfa": "12"
     },
     {
      "no": "10",
      "isim": "TAHIL KAFA",
      "uiaa": "VI-",
      "fr": "5c",
      "metre": "16",
      "bolt": "8",
      "acan": "Kemal Turan",
      "yil": "2019",
      "sayfa": "12"
     },
     {
      "no": "11",
      "isim": "AKILSIZ TELEFON",
      "uiaa": "VI-",
      "fr": "5c",
      "metre": "15",
      "bolt": "8",
      "acan": "Kemal Turan",
      "yil": "2017",
      "sayfa": "12"
     },
     {
      "no": "12",
      "isim": "SEVGİ ARSIZI",
      "uiaa": "V+",
      "fr": "5b",
      "metre": "18",
      "bolt": "8",
      "acan": "Kemal Turan",
      "yil": "2019",
      "sayfa": "12"
     }
    ]
   },
   {
    "id": "kocaseyit",
    "ad": "Kocaseyit",
    "foto": [
     "img/s11.jpg"
    ],
    "rotalar": [
     {
      "no": "1",
      "isim": "SUSURLUK OUTLET 1",
      "uiaa": "V+",
      "fr": "5b",
      "metre": "27",
      "bolt": "10",
      "acan": "Kemal Turan",
      "yil": "2017",
      "sayfa": "12"
     },
     {
      "no": "2",
      "isim": "SUSURLUK OUTLET 2",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "15",
      "bolt": "9",
      "acan": "Kemal Turan",
      "yil": "2017",
      "sayfa": "12"
     },
     {
      "no": "3",
      "isim": "KILKUYRUK KAZIM",
      "uiaa": "V",
      "fr": "5a",
      "metre": "27",
      "bolt": "11",
      "acan": "Kemal Turan",
      "yil": "2017",
      "sayfa": "12"
     },
     {
      "no": "4",
      "isim": "ÇİFT ŞARJÖR 1",
      "uiaa": "V",
      "fr": "5a",
      "metre": "27",
      "bolt": "10",
      "acan": "Kemal Turan",
      "yil": "2017",
      "sayfa": "12"
     },
     {
      "no": "5",
      "isim": "ÇİFT ŞARJÖR 2",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "16",
      "bolt": "6",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "12"
     },
     {
      "no": "6",
      "isim": "BANG BANG",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "14",
      "bolt": "6",
      "acan": "Serhat Alkıvılcım",
      "yil": "2018",
      "sayfa": "12"
     },
     {
      "no": "7",
      "isim": "KARTAL YUVASI",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "17",
      "bolt": "9",
      "acan": "Serhat Alkıvılcım",
      "yil": "2018",
      "sayfa": "12"
     },
     {
      "no": "8",
      "isim": "ERSECEM SOLUCAN",
      "uiaa": "VII",
      "fr": "6b",
      "metre": "17",
      "bolt": "10",
      "acan": "Serhat Alkıvılcım",
      "yil": "2018",
      "sayfa": "12"
     },
     {
      "no": "9",
      "isim": "NİKELAJ",
      "uiaa": "",
      "fr": "",
      "metre": "16",
      "bolt": "8",
      "acan": "Serhat Alkıvılcım",
      "yil": "2018",
      "sayfa": "12"
     },
     {
      "no": "10",
      "isim": "TÜNEL",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "18",
      "bolt": "9",
      "acan": "Serhat Alkıvılcım",
      "yil": "2014",
      "sayfa": "12"
     },
     {
      "no": "11",
      "isim": "KOCA SEYİT",
      "uiaa": "VII",
      "fr": "6b",
      "metre": "18",
      "bolt": "10",
      "acan": "Serhat Alkıvılcım",
      "yil": "2015",
      "sayfa": "12"
     },
     {
      "no": "12",
      "isim": "AYIP OLUYOR",
      "uiaa": "VII",
      "fr": "6b",
      "metre": "?",
      "bolt": "9",
      "acan": "Serhat Alkıvılcım",
      "yil": "2018",
      "sayfa": "12"
     }
    ]
   },
   {
    "id": "bengi",
    "ad": "Bengi",
    "foto": [
     "img/s11.jpg"
    ],
    "not": "Bengi 1,2 numaralı rotalar küçük yaştaki tırmanıcılar için uygundur .",
    "rotalar": [
     {
      "no": "1",
      "isim": "EKMEK ARASI",
      "uiaa": "V",
      "fr": "5a",
      "metre": "22",
      "bolt": "8",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "12"
     },
     {
      "no": "2",
      "isim": "DUTY FREE",
      "uiaa": "V",
      "fr": "5a",
      "metre": "15",
      "bolt": "6",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "12"
     },
     {
      "no": "3",
      "isim": "DİŞ GICIRTISI",
      "uiaa": "VII-",
      "fr": "6a+",
      "metre": "15",
      "bolt": "7",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "12"
     },
     {
      "no": "4",
      "isim": "UNDER TAKER",
      "uiaa": "VI-",
      "fr": "5c",
      "metre": "17",
      "bolt": "10",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "12"
     },
     {
      "no": "5",
      "isim": "YOL ÜSTÜ",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "9",
      "bolt": "7",
      "acan": "Serhat Alkıvılcım",
      "yil": "2010",
      "sayfa": "12"
     },
     {
      "no": "6",
      "isim": "MAHALENİN DELİSİ",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "10",
      "bolt": "",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "12"
     },
     {
      "no": "7",
      "isim": "HAYAT TAMİRCİSİ",
      "uiaa": "VI",
      "fr": "5c+",
      "metre": "10",
      "bolt": "",
      "acan": "Kemal Turan",
      "yil": "2019",
      "sayfa": "12"
     },
     {
      "no": "8",
      "isim": "İTALYAN İŞİ",
      "uiaa": "VI-",
      "fr": "5c",
      "metre": "23",
      "bolt": "9",
      "acan": "Kemal Turan",
      "yil": "2018",
      "sayfa": "12"
     },
     {
      "no": "9",
      "isim": "SUFLÖRLÜ YAŞAM",
      "uiaa": "VI",
      "fr": "5c+",
      "metre": "12",
      "bolt": "6",
      "acan": "Kemal Turan",
      "yil": "2019",
      "sayfa": "12"
     },
     {
      "no": "10",
      "isim": "KARATAY DİYETİ",
      "uiaa": "VI",
      "fr": "5c+",
      "metre": "10",
      "bolt": "4",
      "acan": "Kemal Turan",
      "yil": "2019",
      "sayfa": "12"
     },
     {
      "no": "11",
      "isim": "KAPLAN PENÇESİ",
      "uiaa": "VI-",
      "fr": "5c",
      "metre": "11",
      "bolt": "5",
      "acan": "Kemal Turan",
      "yil": "2019",
      "sayfa": "12"
     }
    ]
   }
  ],
  "harita": [
   {
    "resim": "img/genel-nusret-1.jpg",
    "alanlar": {
     "hosmerim-sol": "2.3,89.3 13.6,40.1 40.9,40.1 40.5,85.9",
     "hosmerim-sag": "42.0,24.8 67.7,23.1 66.6,69.6 45.0,83.2",
     "kurtdereli": "70.0,11.2 89.8,11.2 90.9,23.1 88.2,41.8 75.5,52.6 71.6,24.8"
    }
   },
   {
    "resim": "img/genel-nusret-2.jpg",
    "alanlar": {
     "loca": "7.5,40.9 22.1,40.9 27.9,47.0 27.9,71.3 7.5,62.4",
     "yagci-bedir": "20.5,35.5 49.7,35.5 51.3,49.8 55.5,78.5 40.9,81.4 27.9,71.3 27.9,47.0",
     "kocaseyit": "44.8,8.6 74.0,14.0 78.9,49.8 69.2,78.5 55.5,78.5 51.3,49.8",
     "bengi": "77.3,46.2 93.5,46.2 99.0,76.7 82.1,82.8 69.2,78.5 74.7,52.3"
    }
   }
  ],
  "kapak_tam": "img/s02.jpg",
  "harita_link": "https://www.google.com.tr/maps/place/Nusret+Kaya+T%C4%B1rman%C4%B1%C5%9F+Bah%C3%A7esi/@39.6201549,28.1675638,18z/data=!4m12!1m6!3m5!1s0x14b64ce5b1a28853:0xf040b4bf88b3a8dc!2zTnVzcmV0IEtheWEgVMSxcm1hbsSxxZ8gQmFow6dlc2k!8m2!3d39.6200743!4d28.1683148!3m4!1s0x14b64ce5b1a28853:0xf040b4bf88b3a8dc!8m2!3d39.6200743!4d28.1683148",
  "ulasim_baslik": "Ulaşım ve Konaklama:",
  "ulasim": "Nusret kayalıkları Balıkesir Kepsut ilçesinin Nusret Köyü yakınındadır. Araç ile kayalıklara kadar ulaşılabilir. Ayrıca hergün Balıkesir’den saat 06:45de (tren saatleri değişiklik gösterebilir) tren ile köye ulaşım mümkündür. Saat 20:34 da aynı yerden dönüş treni mevcuttur. Köy minübüsü veya otostop ile ulaşım sağlanabilir. Kayalıklara 150 metre mesafede kamp alanı mevcuttur ve su imkanı vardır. Bölgede kamp güvenlidir ve köy halkı tarafından yadırganmaz.",
  "ulasim_sayfa": 3
 },
 {
  "id": "mezitler",
  "ad": "Mezitler",
  "kapak": "img/s17.jpg",
  "sayfalar": [
   "img/s13.jpg",
   "img/s14.jpg"
  ],
  "sektorler": [
   {
    "id": "tulutabak",
    "ad": "Tülütabak",
    "foto": [
     "img/s15.jpg"
    ],
    "rotalar": [
     {
      "no": "1",
      "isim": "BONSAİ",
      "uiaa": "V-",
      "fr": "4+",
      "metre": "19",
      "bolt": "8",
      "acan": "Barış Yıldırım",
      "yil": "2018",
      "sayfa": "16"
     },
     {
      "no": "2",
      "isim": "ULAN İBO",
      "uiaa": "VI-",
      "fr": "5c",
      "metre": "19",
      "bolt": "9",
      "acan": "Serhat Alkıvılcım",
      "yil": "2016",
      "sayfa": "16"
     },
     {
      "no": "3",
      "isim": "BUL BULABİLİRSEN",
      "uiaa": "VII+",
      "fr": "6b+",
      "metre": "26",
      "bolt": "12",
      "acan": "Serhat Alkıvılcım",
      "yil": "2005",
      "sayfa": "16"
     },
     {
      "no": "4",
      "isim": "UZAN UZAN",
      "uiaa": "VII-",
      "fr": "6a+",
      "metre": "25",
      "bolt": "10",
      "acan": "Serhat Alkıvılcım",
      "yil": "2005",
      "sayfa": "16"
     },
     {
      "no": "5",
      "isim": "SERÇEPARMAK",
      "uiaa": "VIII+",
      "fr": "7a+",
      "metre": "27",
      "bolt": "12",
      "acan": "Serhat Alkıvılcım",
      "yil": "2013",
      "sayfa": "16"
     },
     {
      "no": "6",
      "isim": "ENDER",
      "uiaa": "VII-",
      "fr": "6a+",
      "metre": "11",
      "bolt": "7",
      "acan": "Serhat Alkıvılcım",
      "yil": "2016",
      "sayfa": "16"
     },
     {
      "no": "7",
      "isim": "PEACE İN THE ARMY",
      "uiaa": "VIII",
      "fr": "7a",
      "metre": "17",
      "bolt": "11",
      "acan": "Serhat Alkıvılcım",
      "yil": "2016",
      "sayfa": "16"
     },
     {
      "no": "8",
      "isim": "GÜRİSTER",
      "uiaa": "PROJE",
      "fr": "",
      "metre": "33",
      "bolt": "17",
      "acan": "Serhat Alkıvılcım",
      "yil": "2021",
      "sayfa": "16"
     },
     {
      "no": "9",
      "isim": "ORTAYA KARIŞIK",
      "uiaa": "VIII+/IX-",
      "fr": "7b",
      "metre": "36",
      "bolt": "18",
      "acan": "Serhat Alkıvılcım/Doğan Palut",
      "yil": "2017",
      "sayfa": "16"
     },
     {
      "no": "10",
      "isim": "EZİKLER",
      "uiaa": "V",
      "fr": "5a",
      "metre": "16",
      "bolt": "10",
      "acan": "Serhat Alkıvılcım",
      "yil": "2017",
      "sayfa": "16"
     },
     {
      "no": "11",
      "isim": "ON DOKUZ MAYIS",
      "uiaa": "VI-",
      "fr": "5c",
      "metre": "24",
      "bolt": "9",
      "acan": "Serhat Alkıvılcım",
      "yil": "2017",
      "sayfa": "16"
     },
     {
      "no": "12",
      "isim": "TOPUK DİKENİ",
      "uiaa": "VIII",
      "fr": "7a",
      "metre": "35",
      "bolt": "16",
      "acan": "Serhat Alkıvılcım",
      "yil": "2010",
      "sayfa": "16"
     },
     {
      "no": "13",
      "isim": "ON YEDİLİK LAZIM",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "17",
      "bolt": "8",
      "acan": "Serhat Alkıvılcım",
      "yil": "2019",
      "sayfa": "16"
     },
     {
      "no": "14",
      "isim": "AFGAN",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "20",
      "bolt": "10",
      "acan": "Serhat Alkıvılcım",
      "yil": "2016",
      "sayfa": "16"
     },
     {
      "no": "14",
      "isim": "SICAK ÇARPTI",
      "uiaa": "VII+",
      "fr": "6b+",
      "metre": "28",
      "bolt": "12",
      "acan": "Serhat Alkıvılcım",
      "yil": "2018",
      "sayfa": "16"
     }
    ]
   },
   {
    "id": "balikesir-kuzusu",
    "ad": "Balıkesir Kuzusu",
    "foto": [
     "img/s17.jpg"
    ],
    "not": "- Bu sektördeki rotalar saat 11.00’a kadar gölgedir.",
    "rotalar": [
     {
      "no": "1",
      "isim": "YASAKLAR",
      "uiaa": "V+/VI-",
      "fr": "5b",
      "metre": "28",
      "bolt": "10",
      "acan": "Serhat Alkıvılcım",
      "yil": "2021",
      "sayfa": "18"
     },
     {
      "no": "2",
      "isim": "VOYTEK VE JUREK",
      "uiaa": "PROJE",
      "fr": "",
      "metre": "",
      "bolt": "",
      "acan": "Serhat Alkıvılcım",
      "yil": "2021",
      "sayfa": "18"
     }
    ]
   },
   {
    "id": "selale",
    "ad": "Şelale",
    "foto": [
     "img/s17.jpg"
    ],
    "not": "- Bu sektördeki rotalar saat 11.00’a kadar gölgedir.",
    "rotalar": [
     {
      "no": "1",
      "isim": "UÇURUM",
      "uiaa": "VI-",
      "fr": "5c",
      "metre": "16",
      "bolt": "9",
      "acan": "Serhat Alkıvılcım",
      "yil": "2017",
      "sayfa": "18"
     },
     {
      "no": "2",
      "isim": "BAÜDAKS",
      "uiaa": "VI-/VI",
      "fr": "5c",
      "metre": "14",
      "bolt": "7",
      "acan": "Serhat Alkıvılcım",
      "yil": "2018",
      "sayfa": "18"
     },
     {
      "no": "3",
      "isim": "BİZİ SARI FAKLAR",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "6",
      "bolt": "6",
      "acan": "Serhat Alkıvılcım",
      "yil": "2018",
      "sayfa": "18"
     },
     {
      "no": "4",
      "isim": "ŞELALE",
      "uiaa": "VI/VI+",
      "fr": "5c+",
      "metre": "10",
      "bolt": "8",
      "acan": "Serhat Alkıvılcım",
      "yil": "2015",
      "sayfa": "18"
     },
     {
      "no": "5",
      "isim": "HOPPALA",
      "uiaa": "VI/VI+",
      "fr": "6a",
      "metre": "10",
      "bolt": "8",
      "acan": "Serhat Alkıvılcım",
      "yil": "2015",
      "sayfa": "18"
     }
    ]
   },
   {
    "id": "tonguc",
    "ad": "Tonguç",
    "foto": [
     "img/s14.jpg"
    ],
    "rotalar": [
     {
      "no": "1",
      "isim": "TONGUÇ",
      "uiaa": "VIII+",
      "fr": "7a+",
      "metre": "9",
      "bolt": "6",
      "acan": "Serhat Alkıvılcım",
      "yil": "2007",
      "sayfa": "18"
     }
    ]
   },
   {
    "id": "kamp-alti",
    "ad": "Kamp Altı",
    "foto": [
     "img/s15.jpg",
     "img/s14.jpg"
    ],
    "rotalar": [
     {
      "no": "1",
      "isim": "TIFIL THE HOOK",
      "uiaa": "VIII+",
      "fr": "7a+",
      "metre": "11",
      "bolt": "8",
      "acan": "Serhat Alkıvılcım",
      "yil": "2019",
      "sayfa": "18"
     },
     {
      "no": "2",
      "isim": "BOYNUZ VE KULAK",
      "uiaa": "PROJE",
      "fr": "",
      "metre": "10",
      "bolt": "8",
      "acan": "Serhat Alkıvılcım",
      "yil": "2021",
      "sayfa": "18"
     }
    ]
   }
  ],
  "harita": [
   {
    "resim": "img/genel-mezitler-1.jpg",
    "alanlar": {
     "tonguc": "2.0,11.4 18.1,12.7 16.1,25.9 1.2,25.9",
     "tulutabak": "12.9,34.1 40.7,38.0 44.8,51.4 32.3,56.4 20.6,53.2",
     "kamp-alti": "47.6,49.5 58.1,50.1 62.5,61.8 47.6,61.8",
     "selale": "25.8,69.8 37.5,68.6 41.5,75.2 23.4,80.0",
     "balikesir-kuzusu": "23.8,80.5 48.0,80.5 51.6,100.0 23.8,100.0"
    }
   }
  ],
  "harita_link": "https://goo.gl/maps/FCVdg5VtsSF2",
  "ulasim": "Mezitler kayalıklarına en kolay ulaşım Balıkesir’den saat 07.15’de (değişebilir) kalkan tren aracılığı ile Sarıfakılar durağında inerek mümkündür. Dönüş gene aynı yerden saat 20.45 treni ile yapılır. Ayrıca arazi aracıyla da Sarıfakılar veya Nusret Köyü’nden ulaşım mümkündür. Su kaynağının yağışsız mevsimde kuruma ihtimali vardır. Bölgede yakın bir köy veya yerleşim olmadığı için tedbirli gidilmesi gerekir.",
  "ulasim_sayfa": 13
 },
 {
  "id": "deliktas",
  "ad": "Deliktaş",
  "kapak": "img/s19.jpg",
  "sayfalar": [
   "img/s20.jpg"
  ],
  "sektorler": [
   {
    "id": "deliktas",
    "ad": "Deliktaş",
    "foto": [
     "img/s21.jpg"
    ],
    "not": "Mevsimine bağlı olarak 5 ve 6 numaralı rotalar geç güneş alabilir.\n8 numaralı rota öğleye kadar gölgedir.\n12, 13 ve 14 numaralı rotalar sabah 10.00’dan sonra gölgedir.",
    "rotalar": [
     {
      "no": "1",
      "isim": "İVRİNDİK",
      "uiaa": "VIII",
      "fr": "7a",
      "metre": "19",
      "bolt": "11",
      "acan": "Serhat Alkıvılcım",
      "yil": "2017",
      "sayfa": "22"
     },
     {
      "no": "2",
      "isim": "KÖYLÜYE SORMA",
      "uiaa": "IX-",
      "fr": "7b+",
      "metre": "18",
      "bolt": "12",
      "acan": "Serhat Alkıvılcım",
      "yil": "2017",
      "sayfa": "22"
     },
     {
      "no": "3",
      "isim": "SAĞANAK",
      "uiaa": "IX / IX+",
      "fr": "7c+",
      "metre": "13",
      "bolt": "10",
      "acan": "Serhat Alkıvılcım/M.Oğuz Kağanoğlu",
      "yil": "2017",
      "sayfa": "22"
     },
     {
      "no": "4",
      "isim": "OMUZ",
      "uiaa": "VII",
      "fr": "6b",
      "metre": "11",
      "bolt": "8",
      "acan": "Serhat Alkıvılcım",
      "yil": "2016",
      "sayfa": "22"
     },
     {
      "no": "5",
      "isim": "KIRLANGIÇ",
      "uiaa": "PROJE",
      "fr": "",
      "metre": "18",
      "bolt": "10",
      "acan": "Serhat Alkıvılcım",
      "yil": "2019",
      "sayfa": "22"
     },
     {
      "no": "6",
      "isim": "SHELOB’UN İNİ",
      "uiaa": "XIII",
      "fr": "7a",
      "metre": "15",
      "bolt": "9",
      "acan": "Serhat Alkıvılcım",
      "yil": "2016",
      "sayfa": "22"
     },
     {
      "no": "7",
      "isim": "AKGEZEN",
      "uiaa": "VII+",
      "fr": "6b+",
      "metre": "16",
      "bolt": "8",
      "acan": "Serhat Alkıvılcım",
      "yil": "2015",
      "sayfa": "22"
     },
     {
      "no": "8",
      "isim": "RÜZGARLI",
      "uiaa": "VI",
      "fr": "5c+",
      "metre": "9",
      "bolt": "5",
      "acan": "Serhat Alkıvılcım",
      "yil": "2016",
      "sayfa": "22"
     },
     {
      "no": "9",
      "isim": "MADRA",
      "uiaa": "VIII+",
      "fr": "7a+",
      "metre": "19",
      "bolt": "10",
      "acan": "Serhat Alkıvılcım",
      "yil": "2018",
      "sayfa": "22"
     },
     {
      "no": "10",
      "isim": "HAKUNAMATATA",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "8",
      "bolt": "6",
      "acan": "Serhat Alkıvılcım",
      "yil": "2020",
      "sayfa": "22"
     },
     {
      "no": "11",
      "isim": "KIZILMASKE",
      "uiaa": "VII-",
      "fr": "6a+",
      "metre": "9",
      "bolt": "5",
      "acan": "Serhat Alkıvılcım",
      "yil": "2015",
      "sayfa": "22"
     },
     {
      "no": "12",
      "isim": "COVİD-AŞK",
      "uiaa": "PROJE",
      "fr": "",
      "metre": "12",
      "bolt": "8",
      "acan": "Serhat Alkıvılcım",
      "yil": "2020",
      "sayfa": "22"
     },
     {
      "no": "13",
      "isim": "VOLDEMORT 1. İSTASYON",
      "uiaa": "VII+",
      "fr": "6b+",
      "metre": "10",
      "bolt": "7",
      "acan": "Serhat Alkıvılcım",
      "yil": "2015",
      "sayfa": "22"
     },
     {
      "no": "14",
      "isim": "VOLDEMORT 2. İSTASYON",
      "uiaa": "PROJE",
      "fr": "",
      "metre": "",
      "bolt": "",
      "acan": "Serhat Alkıvılcım",
      "yil": "2019",
      "sayfa": "22"
     },
     {
      "no": "15",
      "isim": "SHADOW &SİLVER",
      "uiaa": "PROJE",
      "fr": "",
      "metre": "25",
      "bolt": "15",
      "acan": "Serhat Alkıvılcım",
      "yil": "2022",
      "sayfa": "22"
     },
     {
      "no": "16",
      "isim": "DADALAR",
      "uiaa": "IX-",
      "fr": "7b+",
      "metre": "13",
      "bolt": "6",
      "acan": "Serhat Alkıvılcım / Oğuz Işık",
      "yil": "2018",
      "sayfa": "22"
     },
     {
      "no": "17",
      "isim": "GÖBEKLİ KÖPEKBALIĞI",
      "uiaa": "VIII-",
      "fr": "6c+",
      "metre": "13",
      "bolt": "9",
      "acan": "Serhat Alkıvılcım",
      "yil": "2016",
      "sayfa": "22"
     },
     {
      "no": "18",
      "isim": "ATLA İBO",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "12",
      "bolt": "7",
      "acan": "Serhat Alkıvılcım",
      "yil": "2017",
      "sayfa": "22"
     },
     {
      "no": "19",
      "isim": "ÜZÜM",
      "uiaa": "V-",
      "fr": "4+",
      "metre": "9",
      "bolt": "5",
      "acan": "Serhat Alkıvılcım",
      "yil": "2017",
      "sayfa": "22"
     },
     {
      "no": "20",
      "isim": "ÜZÜM SAPI",
      "uiaa": "VI+",
      "fr": "6a",
      "metre": "9",
      "bolt": "6",
      "acan": "Serhat Alkıvılcım",
      "yil": "2019",
      "sayfa": "22"
     },
     {
      "no": "21",
      "isim": "YITIBIR",
      "uiaa": "VI",
      "fr": "5c+",
      "metre": "6",
      "bolt": "4",
      "acan": "Serhat Alkıvılcım",
      "yil": "2019",
      "sayfa": "22"
     }
    ]
   }
  ],
  "harita": [
   {
    "resim": "img/genel-deliktas-1.jpg",
    "alanlar": {
     "deliktas": "0.0,0.0 100.0,0.0 100.0,100.0 0.0,100.0"
    }
   }
  ],
  "kapak_tam": "img/s19.jpg",
  "harita_link": "https://goo.gl/maps/vXtHqW2c4cmJD9R2A",
  "ulasim": "Deliktaşa ulaşım İda Madra Geopark tarafından düzenlenen tabelalar ve yol takip edilerek rahat bir şekilde sağlanır İvrindi merkezden 3,5km gibi bir yürüyüşlede bölgeye ulaşabilirsiniz.Bölgede herhangi bir su kaynağı bulunmadığından dolayı tedbirli gidilmesi gereklidir.Kamp atılacaksa eğer tahta platformda veya platforma çıkmadan önce sola doğru giden patikada atılabilir.",
  "ulasim_sayfa": 20
 }
];
const HIKAYELER_BASLIK = "SEKTÖR İSİMLERİ VE BALIKESİRİN DEĞERLERİ";
const HIKAYELER = [
 {
  "baslik": "Kurtdereli Sektörü",
  "sektorler": [
   "kurtdereli"
  ],
  "sayfa": 23,
  "metin": "Kurtdereli Mehmet Pehlivan'a hitaben ismi verilmiştir. (195cm -145kg) Kırkpınar Başpehlivanlığı, Cihan şampiyonlugu, Türkiye şampiyonlugu gibi birçok başarısı vardır. Kendisine başarısının sırrını sorduklarında \"Ben, her güreşte arkamda Türk milletinin bulundugunu ve millet şerefini düşünürdüm ... \" diye yanıt vermesini duyan Atatürk, Kurtdereli'ye bu mektubu yazmıştır.\nKurtdereli Mehmet Pehlivan'a Ankara-15.11.1931\n...Bu dediğini en az yaptıkların kadar beğendim .Onun için senin bu değerli sözünü,Türk sporcularına bir meslek düsturu olarak kaydediyorum...\nGazi Mustafa Kemal\nRivayet o dur ki  Kemal Atatürk Kurtdereli’yi kazandığı bir güreş sonrasında ödüllendirmek  için çek yazar.Üzerine 1000 lira yazıp imzasını atar.Kurtdereli çeki bozdurmaya İş bankasına gider.Alır parayı Kurtdereli ve bekler. Veznedar \"Niye beklersin pehlivan\" diye sorar. Der ki Kurtdereli \"Çeki geri vermiyecek misiniz? \" \"Yok!\" der veznedar \"O bizde kalacak\". Kurtdereli şaşırır \"O zaman alin 1000 liranızı verin çekimi. Onda atamın imzası var\"."
 },
 {
  "baslik": "Koca Seyit Sektörü",
  "sektorler": [
   "kocaseyit"
  ],
  "sayfa": 23,
  "metin": "Çanakkale Kahramanı Balıkesir Havran’lı Onbaşı Koca Seyyid isminden alır.18 mart 1915’te Müttefik donanması Çanakkale Boğazı’nı geçmek için saldırdı.Bu sırada Seyit Onbaşı,Rumeli Mecidiye Tabyası’nda görevliydi.İngilizlerin  savaş gemilerinden Queen Elizabeth ve Ocean zırhlıları Koca Seyit’in bataryasının bulunduğu kıyıyı top ateşine tuttu.Atılan bir merminin cephaneliğine isabet etmesi sonucu bir çok şehit verildi ve Tabya’da çalışır durumunda vinci bozuk tek bir top kaldı.Seyit Onbaşı, vinç mekanizması bozulan bir topun mermisini(275kg)\nsırtına alarak namluya sürdü,ateşleyip İngiliz zırhlısını vurarak savaşın seyrini değiştirdi ."
 },
 {
  "baslik": "Bengi Sektörü",
  "sektorler": [
   "bengi"
  ],
  "sayfa": 23,
  "metin": "Balıkesir yöresi düğünlerinin baş oyunudur. Zeybek danına benzerlik gösterir. Ancak çökme kalkma çok fazla olup, hareketli bir oyundur. Bazı kaynaklara göre Bengi, savaşa çıkmadan once yapılan töreni ve savaşın zaferle bitmesi halini canlandıran temsili oyundur."
 },
 {
  "baslik": "Höşmerim Sektörü",
  "sektorler": [
   "hosmerim-sol",
   "hosmerim-sag"
  ],
  "sayfa": 24,
  "metin": "Askerden dönen eşine yoksulluk nedeni ile evindeki mutfakta pek bir şey bulamayıp, evde bulunan kendi ürettikleri peynir, irmik ve şekerden, ilk kez yaptığı bir tatlıyı eşine ikram eden kadın, eşinin tepkisini bekler. Bu tatlıyı ilk kez hazırlayıp eşine sunan genç; gelinin çekingen ve korkmuş bir şekilde eşine \"Hoş mu erim?\" diye sorması, ile Höşmerim tatlısının isminin buradan geldigine inanillr."
 },
 {
  "baslik": "Yağcı Bedir Sektörü",
  "sektorler": [
   "yagci-bedir"
  ],
  "sayfa": 24,
  "metin": "Günümüzde ozellikle halıları ile meşhur Balıkesir'in Sındırgı ve Bigadiç bölgelerine yerleşmiş Yagcı Bedir yörüklerinden ismini alır. Yay imal etmeleri ve oku iyi atmalarından dolayı, Yaycı Bedir ismi zamanla Yağcı Bedir'e dönüşmüştür. Yağcı Bedirli halıların çözgü ve atkıları yün olup, Gördes (Türk) düğümü ile dokunmaktadir. Hikayesi ve rivayeti çok olan Yağcı Bedir halılarında kız alma meselesi uzerine çıkan bir hikayeye göre halılarda; kırmızı ayrılığı, siyah üzüntüyü, beyaz umudu, mavi tükenmeyen umudu, dört nokta aşkı, engelleyen aile bireylerini, burgular gönül kilitlenmesini, çaplar engelleme araçlarını, kırmızıdan pembeye geçiş evlenme isteğini, bordürdeki yedi kat imler erdeme ulaşmanın zorluklanni dile getirmektedir."
 },
 {
  "baslik": "Tülütabak Sektörü",
  "sektorler": [
   "tulutabak"
  ],
  "sayfa": 24,
  "metin": "Balıkesir'i işgal eden Yunan askerlerini korkutmak için kendilerini baca kurumu ve soba isiyle boyayan, keçi, koyun postu, at kuyrugu, çan ve değneklerle korkutucu bir gürünüme kavuşan debbağlardan (tabak, deri işçisi) ismini alır. Özellikle hurafelere çok inanilan do,önemde geceleri düşmanları korkutarak devriye gezmişlerdir. Bu kahramanlık hikayesiyle tanınan Tulutabaklar, günümüzde Balıkesir'de her 6 Eylül'de kültürlerini yaşatmak adına ayni kılıkla sokaklarda dolaşırlar ve baca kurumunu insanların yüzüne sürerler."
 }
];
