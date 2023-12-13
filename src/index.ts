console.log("Bonjour les amis du zero");
interface car {
  seat: number;
  drive: () => void;
}
interface vehicule {
  seat: number;
}
const renault: car | vehicule = {
  seat: 4,
};
console.log(renault);
interface func {
  type: "func";
  seat: number;
  drive(): void;
}
interface func1 {
  type: "func1";
  seat: number;
  drive(): void;
}
let myFunc: func | func1;
myFunc = {
  type: "func",
  seat: 3,
  drive() {},
};
console.log(myFunc);
function test(f: func | func1): {} {
  if (f.type === "func") {
    return f;
  } else {
    return f;
  }
}
console.log(test(myFunc));
interface Carre {
  forme: "carre";
  cote: number;
}
interface Rectangle {
  forme: "rectangle";
  largeur: number;
  longueur: number;
}
interface Cercle {
  forme: "cercle";
  rayon: number;
}
function calAire(e: Carre | Rectangle | Cercle) {
  switch (e.forme) {
    case "carre":
      return e.cote * 4;

    case "rectangle":
      return e.largeur * e.longueur;
    case "cercle":
      return Math.PI * e.rayon ** 2;
  }
}
console.log(
  calAire({
    forme: "carre",
    cote: 4,
  })
);
interface Bird {
  fly(): void;
}
interface Whale {
  swim: () => void;
}
function move(a: Bird | Whale) {
  if ("fly" in a) {
    a.fly();
  } else {
    a.swim();
  }
}
const a = {
  fly: () => {
    console.log("fly".toUpperCase());
  },
};
const b: Whale = {
  swim: () => {
    console.log("je nage".toUpperCase());
  },
};
move(b);
move(a);
function isBird(x: Bird | Whale): x is Bird {
  return (x as Bird).fly !== undefined;
}
function move2(x: Bird | Whale) {
  if (isBird(x)) {
    x.fly();
  } else {
    x.swim();
  }
}
move2(a);
const clientPersonne = {
  userName: "biakabakana",
  lastName: "odilon",
  adresse: {
    city: "Marlieux",
  },
};
if (clientPersonne.adresse?.city) {
  console.log(clientPersonne.adresse.city);
} else {
  console.log("ville inconnue");
}
interface User {
  nom: string;
  prenom: string;
  hello(x: string, a?: string): void;
  adresse?: {
    city: string;
    numero: number;
    rue: string;
    codePostal: string;
  };
}
const perso: User = {
  nom: "biakabakana",
  prenom: "odilon geordel",
  hello(x, a) {
    if (a) {
      console.log(`Bonjour ${x} ${a}`);
    } else {
      console.log(`Bonjour ${x}`);
    }
  },
};
perso.hello(perso.nom);
perso.hello(perso.nom, perso.prenom);
console.log(perso.adresse?.city);
type nomUser = string;
type TypeUser = {
  nom: string;
  prenom: string;
  direBonjour(): string;
};
function Bonjour(user: nomUser) {
  console.log(user);
}
Bonjour("lusette");
const odilon: TypeUser = {
  nom: "odilon",
  prenom: "lusette",
  direBonjour() {
    return `Bonjour ${this.nom} ${this.prenom}`;
  },
};
console.log(odilon.direBonjour());
type status = "online" | "offline" | "busy";
let etatStatus: status = "online";
if (etatStatus === "online") {
  console.log("vous etes connecté");
} else {
  console.log("vous déconnecté");
}
const promise: Promise<string> = new Promise((resolve, reject) => {
  resolve("mon amour je t'aime de tous mon coeur");
});
promise.then((response) => {
  console.log(response);
});
let tab: Array<String> = ["odilon", "geordel", "lusette", "helena"];
for (let nom of tab) {
  console.log(nom);
}
type Player = {
  nom: string;
  prenom: string;
  play(): string;
};
let tab2: Player[] = [
  {
    nom: "odilon",
    prenom: "kusette",
    play() {
      return this.nom;
    },
  },
];
console.log("valeur de play: " + tab2[0].play());
let tab3: Array<Player> = [
  {
    nom: "odilon",
    prenom: "kusette",
    play() {
      return this.nom;
    },
  },
];
function addItem<T>(item: T, collection: T[]): T[] {
  return [...collection, item];
}
const pl = {
  nom: "odilon",
  prenom: "lusette",
  play() {
    return this.nom;
  },
};
addItem(pl, tab3);
console.log(addItem(pl, tab3));
interface Add {
  <T>(x: T, z: T[]): T[];
}

const ajout: Add = (x, z) => {
  return [...z, x];
};
let t: number[] = [1, 2, 4];
let nbre = 2;
console.log(ajout(nbre, t));
interface typeFunc {
  pays: string;
}

interface Name {
  nom: string;
}
function func3<T extends Name>(x: T): object {
  console.log(x.nom);
  return {};
}
interface Test {
  nom: string;
}
function func4<T, U extends Test>(x: T, z: U) {
  console.log(z.nom);
}
function infoClient<T, U extends keyof T>(object: T, prop: U) {
  if (object[prop]) {
    console.log(` le client ${object[prop]} existe`);
  } else {
    console.log("le client n'existe pas ");
  }
}
const prop = "nom";
const obj = {
  nom: "biakabakana",
  age: 12,
};
infoClient(obj, prop);
interface Usert {
  readonly id: number;
  nom?: string;
  age: number;
}
const userLusette: Usert = {
  id: 12236,
  age: 38,
};
userLusette.nom = "lusette";
console.log(userLusette.nom);
interface Pays {
  nom: string;
  nbreHabitant: number;
  superficie: number;
  info: () => string;
}
let pays: Partial<Pays>;
pays = {
  nom: "Congo",
  superficie: 342000,
  info() {
    return this.nom;
  },
};
console.log(pays.info());
let monpays: Readonly<Pays>;
monpays = {
  nom: "Afrique du sud",
  superficie: 1236548,
  nbreHabitant: 0,
  info() {
    return `${this.nom} sa superfice est de : ${this.superfice}`;
  },
};
console.log(monpays.nbreHabitant);
type page = "home" | "contact" | "visite";
const p: page = "contact";
type Livres = {
  nom: string;
  nbrePages: number;
};
const myLivres: Livres = {
  nom: "le livre de la jungle",
  nbrePages: 500,
};
console.log(myLivres.nom);
let journal: Partial<Livres> = {
  nbrePages: 12,
  nom: "Le monde",
};
console.log(journal.nbrePages);
interface Todo {
  [x: string | number]: string;
}
const tod: Readonly<Todo> = {
  1: "odilon",
  test: "jeu",
};
console.log(tod[1]);
console.log(tod.test);
type todo1<T> = {
  [P in keyof T]?: T[P];
};
interface J {
  nom: string;
  prenom: string;
}
let jeu: todo1<J> = {
  nom: "odilon",
};
function mafonction<T>(x: T): T {
  return x;
}
mafonction(12);
type Sohan = {
  id: number;
  names: string;
};
function mafunc1<T extends Sohan>(x: T): T {
  return x;
}
console.log(mafunc1({ id: 12, names: "sohan" }));
type pageType = "home" | "contact" | "blog";
interface Page {
  title: string;
}
let pages: Record<pageType, Page> = {
  home: {
    title: "home",
  },
  blog: {
    title: "blog",
  },
  contact: {
    title: "contact",
  },
};
type myrecord<K extends string | number | symbol, T> = {
  [P in K]: T;
};
type Vehicule = "camions" | "automobile" | "tricycle";
interface nameEngine {
  title?: string;
}
const myCars: myrecord<Vehicule, nameEngine> = {
  camions: { title: "camions" },
  automobile: { title: "automobile" },
  tricycle: {},
};
console.log(myCars.automobile?.title);
type Mypick<T, K extends keyof T> = {
  [P in K]: T[P];
};
type Picks = {
  idPick: string;
  text: string;
  content: string;
};
const P: Mypick<Picks, "idPick" | "content"> = {
  idPick: "odilon",
  content: "bonjour les amis du zero je suis la pour une nouvelle aventure",
};
console.log(P);

type MyExclude<T, U> = T extends U ? never : T;
type U = {
  n: "U";
};
type lulu = {
  id: 25;
  gen: "gen";
};
type Exclure = Exclude<lulu, U>; //  3
type t = {
  id: string;
};
interface u extends t {
  j: string;
}
const h: u = {
  id: "12",
  j: "23",
};

import "./scss/index.scss";
import { shape } from "./test";
// let n = new shape.ClassB("je suis la ");
// console.log(n);
// console.log(n.add());
// const input = document.querySelector("input");
// input.addEventListener("input", (event) => {
//   const textArea = document.querySelector("textarea");
//   console.log(input.value);
//   textArea.value = input.value;
// });
let code = "";
const box = document.querySelector(".content-btn-connexion");
const btnConnexion = document.createElement("button");
btnConnexion.classList.add("btn", "btn-primary");
btnConnexion.disabled = true;
btnConnexion.textContent = "Connexion";
btnConnexion.addEventListener("click", () => {
  alert(`connexion établie votre code est: ${code}`);
});
const valid = document.querySelector(".valid-btn");
let count = valid.querySelectorAll(".fa-circle").length;
box.appendChild(btnConnexion);
const controlBtn = document.querySelector(".control-btn");
const btn = controlBtn.querySelectorAll(".btn");

// console.log(btn);
btn.forEach((Element) =>
  Element.addEventListener("click", (event) => {
    let index = 0;
    console.log(event.target);

    valid.querySelectorAll(".fa-circle").forEach((items, key) => {
      console.log(items);
      if (items.classList.contains("fas")) {
        key++;
        index = key;
        console.log("key: " + key);
      }
    });

    if (index < count) {
      code = code + Element.textContent;
      valid
        .querySelectorAll(".fa-circle")
        .item(index)
        .classList.replace("far", "fas");
      valid.querySelectorAll(".fa-circle").item(index).classList.add("valid");
      console.log("mon code: " + code);
      btnConnexion.disabled = code.length === count ? false : true;
      console.log(btnConnexion.disabled);
    } else {
      console.log("mon code: " + code);
    }
  })
);
/*
event pour supprimer les boutons selectionner
*/
document
  .querySelector(".fa-times-circle")
  .addEventListener("click", (event) => {
    document
      .querySelector(".valid-btn")
      .querySelectorAll(".fas")
      .forEach((Element) => {
        Element.classList.replace("fas", "far");
        Element.classList.remove("valid");
        code = "";
        btnConnexion.disabled = code.length === count ? false : true;
      });
  });
import { add } from "./feat/lulu";
import { addict } from "../mylib/addict.js";
console.log(addict(1, 2));
console.log(add("odilon"));
const titre = document.querySelector("h1").textContent;
type Mypartial<P, T> = P extends T ? never : T;
const boxSondage = document.querySelector(".content-sondage");
boxSondage.querySelectorAll(".box-avis").forEach((element) => {
  element.addEventListener("click", () => {
    boxSondage.querySelectorAll(".fa-solid").forEach((element) => {
      element.classList.replace("fa-circle-check", "fa-circle");
      element.classList.remove("color-valid");
    });
    element
      .querySelector(".fa-solid")
      .classList.replace("fa-circle", "fa-circle-check");
    element.querySelector(".fa-solid").classList.add("color-valid");

    boxSondage.querySelector("h1").textContent =
      titre +
      ": vous avez choisi " +
      element.querySelector(".box-avis-text").textContent;
  });
});
interface Personnage {
  firstName: string;
  age: number;
}
type Mypart = { [P in keyof Personnage]?: string | number };
const pers3: Mypart = {
  age: 20,
  firstName: "odilon",
};
type Mypart1<T> = {
  [P in keyof T]?: T[P];
};
const perso3: Mypart1<Personnage> = {
  age: 45,
};
interface Country {
  readonly country: string;
  readonly city: string;
  readonly nameCountry: string;
}
let country: Country = {
  country: "Congo",
  city: "Brazzaville",
  nameCountry: "republique du congo",
};

console.log(country.nameCountry);
console.log(country.country);
console.log(country.city);
interface D {
  [p: string | number]: string | number;
}
let declaration: D = {
  age: 38,
  1: "client1",
};
console.log(declaration[1]);
type DD = "d" | "c";
type DDD = {
  [p in DD]: string | number;
};
const initDDD: DDD = {
  d: 2,
  c: 3,
};
console.log(initDDD.d);
console.log(initDDD.c);
interface A {
  test: string;
  nbre: number;
  tel(P: string): number | string;
}
const clientA: A = {
  test: "sohan",
  nbre: 12,
  tel(numero: string) {
    return /[0-9]{10}/.test(numero)
      ? parseInt(numero)
      : "votre numéro téléphone invalide";
  },
};
console.log(clientA.tel("1234567892"));
const clientB: Partial<A> = {
  nbre: 45,
};
type Genre = "Homme" | "Femme";
let clientC: Genre = "Femme";
console.log(clientC);
clientC = "Homme";
console.log(clientC);
type Animal = {
  [P in Genre]: Genre;
};
let ani: Animal = {
  Homme: "Homme",
  Femme: "Femme",
};
console.log(ani.Homme, ani.Femme);
type cd = {
  test: string;
  her: number;
};
type cds = {
  [k in keyof cd]: cd;
};
let users: cds = {
  test: {
    test: "1",
    her: 23,
  },
  her: {
    test: "2",
    her: 63,
  },
};

console.log(users.test);
const { test: te, her } = users.her;
console.log(te);
console.log(her);
interface userodilon {
  country: string;
  city: string;
}
type od<T> = Partial<T> & {
  g: string;
  j: number;
};
let fod: od<userodilon> = {
  g: "g",
  j: 12365,
  city: "city",
  country: "ddffg",
};
type k = "age" | "jeu";

type find<T> = {
  [p in k]: T[];
};
let finds: find<number> = {
  age: [1, 2, 3],
  jeu: [5, 6, 7],
};
interface hg<T extends number | string> {
  func<T>(x: T): T;
}
const testfunc: hg<number> = {
  func: (x) => {
    return x;
  },
};
console.log(testfunc.func(56));
console.log(testfunc.func("bonjour lusette"));
type exclu<T, U> = T extends U ? never : T;
type t1 = "a" | "b" | "c";

type t2 = "a" | "b" | "d";
type uq = exclu<t1, t2>;
const userUq: uq = "c";
console.log(userUq);
declare function stand<W>(x: W): W extends String ? string : boolean;
type montype1 = {
  age: string;
  test: string;
}["age"];
let type1: montype1 = "string";
const objT = {
  age: "odilon",
  nom: "odilon",
  func() {
    console.log("function");
  },
}["nom"];
console.log(objT);
interface objT1 {
  age: string;
  nom: string;
  func(): void;
}
type typeProperties<T> = {
  [k in keyof T]: T[k] extends Function ? never : k;
}[keyof T];
type props = typeProperties<objT1>;
interface testUser {
  test: string;
  test2: string;
  nbre?: number;
}
function testUse<T extends testUser>(x: T, y?: T): T[] {
  return y?.nbre ? [x, y] : [x];
}
function testUser<T>(x: T, y?: T): T[] {
  return [x, y];
}

const kinzonzi: testUser = {
  test: "odilon",
  test2: "geordel",
  // nbre: 25,
};
console.log(testUse(kinzonzi, kinzonzi));
console.log(kinzonzi?.nbre);
type usin = {
  test: string;
  test2: string;
  nbre?: number;
};
const hn: usin = {
  test: "odilon",
  test2: "geordel",
};
console.log(testUser(hn, hn));

// type returnValue<T> = (...args: any[]) => T extends Function ? Function : any;
type R = {
  func(x: string): string;
};
type falseType = "false";
// type retour = returnValue<R>;
type mytype<T> = (x: T) => () => T;
const hs: mytype<boolean | string> = (x: boolean) => {
  return () => x;
};

console.log(hs("type est une fonction")());
function destinations(...args) {
  console.log("valeur de : " + args);
  console.log("valeur de : " + args[2]);
}
destinations(12, 52, "test", true);
interface Rt {
  (): boolean;
}
type mytype1<T> = T extends (...args: any[]) => infer R ? R : any;
type returnFunc = mytype1<Rt>;

function dsg(x: boolean): returnFunc {
  return x;
}
console.log(dsg(false));
const boxElement = document.querySelector(".box-element");
boxElement.querySelectorAll(".element").forEach((element, index, tab) => {
  element.addEventListener("click", (event) => {
    console.log("mon element :", element);
    console.log(tab.length);
    console.log(index);
    if (!element.querySelector(".fa-star").classList.contains("fa-solid")) {
      element
        .querySelector(".fa-star")
        .classList.replace("fa-regular", "fa-solid");
      if (index === tab.length - 1) {
        boxElement
          .querySelectorAll(".fa-star")
          .forEach((element) =>
            element.classList.replace("fa-regular", "fa-solid")
          );
      }
      if (index < tab.length - 1) {
        boxElement
          .querySelectorAll(".fa-star")
          .forEach((element, inferieur) => {
            if (inferieur < index) {
              element.classList.replace("fa-regular", "fa-solid");
            }
          });
      }
    } else {
      boxElement.querySelectorAll(".fa-star").forEach((element, diff) => {
        if (diff > index) {
          element.classList.replace("fa-solid", "fa-regular");
        }
      });
    }
  });
});
