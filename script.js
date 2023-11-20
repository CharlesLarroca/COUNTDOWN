const $dias = document.querySelector("#dias");
const $horas = document.querySelector("#horas");
const $minutos = document.querySelector("#minutos");
const $segundos = document.querySelector("#segundos");

const formatDigit = (digito) => (digito < 10 ? `0${digito}` : digito);

const update = (time) => {
  const qtdSeconds = time % 60;
  $segundos.textContent = formatDigit(qtdSeconds);

  const qtdMinutes = Math.floor((time % (60 * 60)) / 60);
  $minutos.textContent = formatDigit(qtdMinutes);

  const qtdHours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
  $horas.textContent = formatDigit(qtdHours);

  const qtdDays = Math.floor(time / (60 * 60 * 24));
  $dias.textContent = formatDigit(qtdDays);
};

const countdown = (time) => {
  const stopCount = () => clearInterval(idSetInterval);
  const count = () => {
    if (time === 0) {
      stopCount();
    }
    update(time);
    time--;
  };
  const idSetInterval = setInterval(count, 1000);
};

const timeLeft = (days, hours, minutes, seconds) => {
  // let daysToSecond = days * (60 * 60 * 24);
  // let hoursToSecond = hours * (60 * 60);
  // let minutesToSecond = minutes * 60;
  // let secondsToSeconds = seconds;
  // return (daysToSecond+hoursToSecond+minutesToSecond+secondsToSeconds)

  const eventDate = new Date('2023-12-31 14:00:00')
  const today = Date.now()
  console.log(today)
  return Math.floor((eventDate - today)/1000)
};


countdown(timeLeft());
