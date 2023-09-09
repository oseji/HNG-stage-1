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
  "saturday",
];

const dayNum = date.getUTCDay();
const dayName = daysOfTheWeek[dayNum];

displayDay.textContent = dayName;
displayTime.textContent = date.getTime();
