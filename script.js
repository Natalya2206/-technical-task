'use strict';

const slider = [
    {
      name: "Сергей",
      image: "img/man.jpg",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum autem dignissimos mollitia, minus cumque velit maiores? Deleniti quo ipsa, facilis veniam et nihil aperiam voluptatum, quod, doloribus neque voluptates?",
    },
    {
      name: "Иван",
      image: "img/man.jpg",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum autem dignissimos mollitia, minus cumque velit maiores? Deleniti quo ipsa, facilis veniam et nihil aperiam voluptatum, quod, doloribus neque voluptates?",
    },
    {
      name: "Дмитрий",
      image: "img/man.jpg",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum autem dignissimos mollitia, minus cumque velit maiores? Deleniti quo ipsa, facilis veniam et nihil aperiam voluptatum, quod, doloribus neque voluptates?",
    },
  ];
  
let i = 0;
let j = slider.length;
  
let sliderContainer = document.getElementById("slider-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
  
nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displaySlider();
});

prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displaySlider();
});
  
let displaySlider = () => {
     sliderContainer.innerHTML = `
      <p>${slider[i].text}</p>
      <img src=${slider[i].image}>
      <h2>${slider[i].name}</h2>
    `;
};

window.onload = displaySlider;

let numberOfminutes = 30;  
let currentTime = new Date(); 
let deadlineTime = currentTime.setMinutes(currentTime.getMinutes() + 30); 
let countdown = setInterval(function() {
	let now = new Date().getTime(); 
	let restOfTime = deadlineTime - now; 
	let minutes = Math.floor( (restOfTime % (1000 * 60 * 60)) / (1000 * 60) );
	let seconds = Math.floor( (restOfTime % (1000 * 60)) / 1000 );
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;
	document.getElementById("deadline-timer").innerHTML = minutes + ":" + seconds;
		if (minutes == 0) {
				document.getElementById("min-or-sec").innerHTML = "секунд";
		}
		if (restOfTime < 0) {
				clearInterval(countdown);
				document.getElementById("time-remainer").innerHTML = "<h3>Время истекло!</h3>";
		}
}, 1000);

const form = document.forms["form"];
form.addEventListener('input', inputHandler);

function inputHandler ({target}) {
  if (target.hasAttribute("data-reg")) {
    inputCheck(target);
  };
};

function inputCheck(el) {
  const inputValue = el.value;
  const inputReg = el.getAttribute("data-reg");
  const reg = new RegExp(inputReg);
  if (reg.test(inputValue)) {
    el.style.border = "2px solid rgb(0, 196, 0)";
  } else {
    el.style.border = "2px solid rgb(255, 0, 0)";
  };
};