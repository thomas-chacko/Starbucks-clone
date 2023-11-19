import bestseller from "../assets/Bestseller.jpg";
import drinks from "../assets/Drinks.jpg";
import food from "../assets/Food.jpg";
import merchandise from "../assets/Merchandise.jpg";
import coffee from "../assets/CoffeeAtHome.jpg";
import ready from "../assets/ReadyToEat.jpg";

import offer1 from "../assets/102257.webp";
import offer2 from "../assets/114211_1.webp";
import offer3 from "../assets/114215_1.webp";

import Recommends1 from '../assets/112570.webp'
import Recommends2 from '../assets/112573.webp'

export const data = [
  { id: 1, name: "Bestseller", image: bestseller },
  { id: 2, name: "Drinks", image: drinks },
  { id: 3, name: "Food", image: food },
  { id: 4, name: " Merchandise", image: merchandise },
  { id: 5, name: "Coffee At Home", image: coffee },
  { id: 6, name: "Ready to Eat", image: ready },
];

export const letestOffers = [
  {
    id: 1,
    name: "Pumpkin Spice Latte",
    image: offer1,
    price: 456.75,
    dec: " but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 2,
    name: "Iced Pumpkin Spice Latte",
    image: offer2,
    price: 543.0,
    dec: "long established fact that a reader will be distracted by the readable content of a page when looking ",
  },
  {
    id: 3,
    name: "Pumpkin Spice Frappuccino",
    image: offer3,
    price: 323.45,
    dec: "n publishing and graphic design, Lorem ipsum is a placeholder",
  },
];

export const recommends = [
  {
    id: 1,
    name: "Strawberry Milkshake",
    price: 367.50,
    dec: "TALL(tall strawberry milkshakes) PRE SERVE (354ml) - 549kcal",
    image:Recommends1
  },
  {
    id: 2,
    name: "Vanilla Milkshake",
    price: 350.50,
    dec: "TALL(354ml).PRE SERVE(354ml) - 531kcal",
    image:Recommends2
  },
];
