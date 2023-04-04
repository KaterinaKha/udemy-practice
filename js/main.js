"use strict";

//---------------------------------------------
// const text1 = "powiększ mnie!";
// console.log(text1.toUpperCase());
// const text2 = "ZAPISZ MNIE MAŁYMI LITERAMI";
// console.log(text2.toLowerCase());
// const text3 = "$#%#^ wytnij te dziwne znaki na początku!";
// console.log(text3.slice(6, -1));
// const text4 = 'sprawdź, czy zawieram słowo "czy"';
// console.log(text4.includes("czy"));
// const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"';
// console.log(text5.charAt(2));
// const text6 = "pies zamień każde słowo pies, na słowo kot pies";
// console.log(text6.replaceAll("pies", "kot"));
// const text7 = "podziel, ten, string, od, przecinków";
// console.log(text7.split(","));

//---------------------------------------------
// const x = 50;
// const y = 30;

// if (x > y) {
// 	console.log(`${x} jest większe niż ${y}`);
// }

//---------------------------------------------
// const color = "blue";
// const newColor = "green";
// if (color === newColor) {
// 	console.log("Kolory sie zgadzaja");
// } else {
// 	console.log("Kolory sie nie zgadzaja");
// }

//---------------------------------------------

// const x = 100;
// const y = 50;

// if (x > y) {
// 	console.log(`${x} > ${y}`);
// } else if (x === y) {
// 	console.log(`${x} = ${y}`);
// } else {
// 	console.log(`${x} < ${y}`);
// }

//---------------------------------------------
// const promo = "20%";
// switch (promo) {
// 	case "10%":
// 		console.log("Dzis mamy 10% znizki");
// 		break;
// 	case "20%":
// 		console.log("Dzis mamy 20% znizki");
// 		break;
// 	case "30%":
// 		console.log("Dzis mamy 30% znizki");
// 		break;

// 	default:
// 		console.log(`Dzis mamy ${promo} znizki`);
// 		break;
// }

//---------------------------------------------
// const x = 101;
// // if (x % 2 === 0) {
// // 	console.log("X jest parzyste");
// // } else {
// // 	console.log("X jest nie parzyste");
// // }
// const y = x % 2 === 0 ? console.log("X jest parzyste") : console.log("X jest nie parzyste");

//---------------------------------------------
// const x = 60;
// let msg = "";
// if (x >= 100) {
// 	msg = "X>100";
// } else if (x < 100 && x > 30) {
// 	msg = "X jest sredniakiem";
// } else {
// 	msg = "X jest malym";
// }
// console.log(msg.toUpperCase());

//---------------------------------------------
// const cities = ["Warsaw", "Kiiv", "London", "Paris", "Berlin", "Madrid"];

// for (let i = 0; i < cities.length; i++) {
// 	console.log(" this is: " + cities[i]);
// }

//---------------------------------------------
// let x = 0;
// do {
// 	console.log((x += 2));
// } while (x <= 10);

// let x = 0;
// while (x < 10) {
// 	console.log((x += 2));
// }

//---------------------------------------------
// const a = [5, 8, 10, 23, 48, 60];
// for (const i of a) {
// 	const b = i / 5;
// 	console.log(b);
// }
// console.log("------------------------");
// for (const i of a) {
// 	if (i % 2 === 0) {
// 		console.log(`%cliczba ${i} jest parzysta`, "background-color: red; color: white;");
// 	} else {
// 		console.log(`%cliczba ${i} jest nie parzysta`, "background-color: blue; color: yellow;");
// 	}
// }

//---------------------------------------------
// const numbers = [0, 0, 1, 1, 2, 2, 2];
// const colors = ["red", "green", "blue", true, 123];
// const cars = [123, true, "audi", "bmw", "mercedes", "ferrari", "🤷‍♂️", "👀"];

// const numbers2 = numbers.slice(0, 2);
// const numbers3 = numbers.slice(4);

// const randomStuff = colors.splice(-2);
// const newCars = cars.splice(2, 4, "test");

// console.log(numbers2);
// console.log(numbers3);
// console.log(colors);
// console.log(randomStuff);
// console.log(cars);
// console.log(newCars);

//---------------------------------------------
