const book = document.querySelectorAll(".book");
const bgImage = document.querySelector("body");
const newBgImage = "url(./image/you-dont-know-js.jpg)";
const title = document.querySelectorAll("a");
const adv = document.querySelector(".adv");
const lists = document.querySelectorAll("li");
const newElem = document.createElement("li");
//1
book[0].before(book[1]);
book[0].after(book[4]);
book[4].after(book[3]);
book[3].after(book[5]);
//2
bgImage.style.backgroundImage = newBgImage;
//3
title[4].textContent = "Книга 3. this и Прототипы Объектов";
//4
adv.style.display = "none";
//5
lists[3].after(lists[6]);
lists[6].after(lists[8]);
lists[9].after(lists[2]);
lists[47].after(lists[55]);
lists[55].after(lists[49]);
lists[50].after(lists[48]);
lists[53].after(lists[51]);
//6
newElem.textContent = "Глава 8: За пределами ES6";
lists[25].append(newElem);
