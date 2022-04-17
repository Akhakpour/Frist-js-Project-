const intro = document.querySelector(".intro");
const userName = document.querySelector(".username");
const userNameInsert = document.querySelector(".username-insert");
const start = document.querySelector(".start");
const hiUsername = document.querySelector(".hi-username");
const guessNumber = document.querySelector(".guessnumber");
const startGame = document.querySelector(".start-game");
const inputGuess = document.querySelector(".input-guess");
const win = document.querySelector(".win");
const time = document.querySelector(".time");
const showInfo = document.querySelector(".show-info");
const btnGuess = document.querySelector(".btn-guess")
const showTime = document.querySelector(".show-time")





let randomNumber;
let number = 0;
let number2 = 0;
let number3= 5



insertUsername = () => {

  let aa = userName.value
  aa = ""
  if (userName.value === aa){
   document.querySelector("h3").innerHTML = "وارد کردن نام ضروری است"
    
  }else {

    const userValue = userName.value;
    console.log(userValue);
    hiUsername.innerHTML = `سلام ${userValue}`;
    start.classList.add("startshow");
    intro.classList.add("time");
    // showTime.classList.add("time")
  }

}

goToStart = () => {

  guessNumber.classList.add("show-element")
  startGame.classList.add("time")
  randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);
  time.classList.add("show-element");
  showTime.innerHTML = `تعداد خون شما ${number3} است `
  document.querySelector(".h3").classList.add("time")
 

  let i = setInterval(()=>{
    number += 1
    if (number < 10) {
      time.innerHTML = `0${number2}:0${number}`
    } else {
  
      time.innerHTML = `0${number2}:${number}`
    }
  
    if (number == 60) {
      number2 += 1
      number = 0
      time.innerHTML = `0${number2}:${number}`
  
    }
    if (number2 === 2) {
      number = "00"
      if (number === "00") {
        showInfo.innerHTML = "متاسفم، دفعه بعد برنده میشی "
      }
      time.innerHTML = `0${number2}: ${number}`
    }
   
  
  }, 1000)


  btnGuess.addEventListener("click" ,guessHander)

function guessHander ()  {
  const inputGuessValue = inputGuess.value;

  if (inputGuessValue == randomNumber) {
    win.innerHTML ="آفرین دلاور خداقوت پهلوان"
    clearInterval(i);
    win.classList.add("wintext");

  }
   else {
    if (inputGuessValue > randomNumber) {
      showInfo.innerHTML =  "پایین تر";
    } else {
      showInfo.innerHTML = `  بالاتر`
    }

  }

  if (inputGuessValue !== randomNumber){
    number3--
    showTime.innerHTML = ` ${number3} فرصت باقی مانده`
    if (number3 == 0){
      btnGuess.removeEventListener("click", guessHander);
      showInfo.innerHTML =" "
      showTime.innerHTML ="به خودت نیومدی باختی"
      clearInterval(i);
    }else if (number3 == 1) {
      showTime.innerHTML =" به خودت بیا مرد این اخرین فرصته"
      showTime.style.color = "yellow"
    } if (inputGuessValue == randomNumber){
      showTime.innerHTML = ""
    }
  } 

  

  
  inputGuess.value = ""
  
   
}

}

