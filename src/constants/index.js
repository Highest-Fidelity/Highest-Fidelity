import { people01, people02, people03, instagram, send, shield, star  } from "../assets";
import { sisi } from '../assets/staff'

/* === NAV LINKS ===  */
/* ALLE LINKS IN DER NAVBAR (Oben rechts) */

export const navLinks = [
  {
    id: "#about-us",
    title: "Über Uns",
  },
  {
    id: "#service",
    title: "Service",
  },
  {
    id: "https://shops.act.at/10001743/desktop/de/kontakt/",
    title: "Kontakt",
  },
  {
    id: "https://shops.act.at/10001743/desktop/",
    title: "Webshop",
  },
];

/* === FEATURES ===  */
/* Alle Angebote/Features */

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Umfassende Auswahl",
    content:
      "Große Auswahl an hochwertigen Audioprodukten, die Ihren Bedürfnissen entspreche",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Sichere Transaktionen",
    content:
      "Kaufen Sie mit Vertrauen ein, in dem Wissen, dass Ihre Informationen geschützt sind. star Expertenteam",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Expertenteam",
    content:
    "Persönliche Beratung durch unser Team von Audio-Enthusiasten",
  },
];

/* === FEEDBACK ===  */
/* FÜR FEEDBACK KARTEN */

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Hervorragende Produkte, unterstützt von einem Team echter Audio-Experten. Ich könnte nicht glücklicher sein!",
    name: "Reinhard Lutz",
    title: "Music Enthusiast",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Hervorragende Produkte, unterstützt von einem Team echter Audio-Experten. Ich könnte nicht glücklicher sein!",
    name: "Shane Matejka",
    title: "Empolyee",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Unglaubliche Klarheit und Tiefe im Klang! Ich bin völlig begeistert.",
    name: "Ali Shah Hussain",
    title: "Founder & Leader",
    img: people03,
  },
];

/* === STATS ===  */
/* STATS UNTER HERO SECTION */
/* ALLE STATISTIKEN WERDEN AUTOMATISCH ERRECHNET ALSO AM BESTEN NICHTS ÄNDERN WENN NICHT NÖTIG */


const yearsExperienece = new Date().getFullYear() - 1995; // 1.1.1995 (https://uefas.act.at/act_fb_details.asp?fnr=12)

export const stats = [
  {
    id: "stats-1",
    title: "Jahre Erfahrung",
    value: `${yearsExperienece}+`,
  },
  {
    id: "stats-2",
    title: "B2B-Kunden",
    value: `${yearsExperienece * 25}+`
  },
  {
    id: "stats-3",
    title: "Transaktionen",
    value: `${yearsExperienece * 110}+`
  },
];

/* === FOOTER LINKS ===  */
  /* ALLE LINKS FÜR DEN FOOTER (GANZ UNTEN) */

export const footerLinks = [
  {
    title: "Links",
    links: [
      {
        name: "Kontakt",
        link: "https://shops.act.at/10001743/desktop/de/kontakt/",
      },
      {
        name: "Impressum",
        link: "https://shops.act.at/10001743/desktop/de/impressum/",
      },
      {
        name: "AGBs",
        link: "https://shops.act.at/10001743/desktop/de/allgemeine-gesch%C3%A4ftsbedingungen/",
      },
    ],
  },
  {
    title: "Webshop",
    links: [
      {
        name: "Homepage",
        link: "https://shops.act.at/10001743/desktop/",
      },
      {
        name: "Lieferbedingungen",
        link: "https://shops.act.at/10001743/desktop/de/lieferbedingungen/",
      },

    ],
  },
  {
    title: "Act",
    links: [
      {
        name: "Details",
        link: "https://uefas.act.at/act_fb_details.asp?fnr=12",
      },
      
    ],
  },
];

/* === SOCIAL MEDIA PROFILE ===  */
/* LINKS FÜR SOCIAL MEDIA ACCOUNTS IM FOOTER */

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/highest.fidelity/",
  },
];

/* === LISTE DER MITARBEITER ===  */

export const staff = [
  {
    id: "mawa",
    name: "Markus Wanke",
    position: "Office & Einkauf",
    image: sisi
  },
  {
    id: "sisi",
    name: "Simrith Singh",
    position: "Einkauf",
    image: sisi
  },
  {
    id: "shma",
    name: "Shane Matejka",
    position: "Verkauf & Lager",
    image: sisi
  },
  {
    id: "adna",
    name: "Adin Nacicevic",
    position: "Verkauf & Lager",
    image: sisi
  },
  {
    id: "anow",
    name: "Anthony Owah",
    position: "Rechnungswesen",
    image: sisi
  },
  {
    id: "paud",
    name: "Patrik Udvari",
    position: "Rechnungswesen",
    image: sisi
  },
  {
    id: "kape",
    name: "Katarina Petrovic",
    position: "Personal",
    image: sisi
  },
  {
    id: "visi",
    name: "Viktoria Simon",
    position: "Personal",
    image: sisi
  },
  {
    id: "fipa",
    name: "Filip Paunovic",
    position: "Marketing",
    image: sisi
  },
  {
    id: "jusc",
    name: "Julian Schmidt",
    position: "Marketing",
    image: sisi
  },
]