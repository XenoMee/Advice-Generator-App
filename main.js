const adviceNumberEl = document.querySelector('#advice-number');
const adviceTextEl = document.querySelector('#advice-text');
const generateAdviceBtn = document.querySelector('.generator-btn');

const updateTextContent = (id, text) => {
  adviceNumberEl.textContent = id;
  adviceTextEl.textContent = text;
};

const getRandomAdvice = () => {
  fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
      updateTextContent(data.slip.id, data.slip.advice);
    });
};

generateAdviceBtn.addEventListener('click', getRandomAdvice);

getRandomAdvice();
