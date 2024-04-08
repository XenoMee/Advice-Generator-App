const adviceNumberEl = document.querySelector('#advice-number');
const adviceTextEl = document.querySelector('#advice-text');

fetch('https://api.adviceslip.com/advice')
  .then((res) => res.json())
  .then((data) => {
    adviceNumberEl.textContent = data.slip.id;
    adviceTextEl.textContent = data.slip.advice;
  });
