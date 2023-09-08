"use strict";

const displayDay = document.querySelector(".day");
const displayTime = document.querySelector(".time");

const date = new Date();
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayNum = date.getDay();
const dayName = daysOfTheWeek[dayNum];

displayDay.textContent = dayName;
displayTime.textContent = date.getTime();
