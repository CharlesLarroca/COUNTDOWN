// const $dias = document.querySelector('#dias')
// const $horas = document.querySelector('#horas')
// const $minutos = document.querySelector('#minutos')
// const $segundos = document.querySelector('#segundos')

const countdown = (time) => {
  const stopCount = () => clearInterval(idSetInterval)
  if (time === 0) {
    stopCount()
  }
  const count = () => time--
  const idSetInterval = setInterval(count, 1000)
}

countdown(5)