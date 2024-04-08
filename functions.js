const updateTextContent = (id, text) => {
  adviceNumberEl.textContent = id;
  adviceTextEl.textContent = text;
};

const addAnimationClass = () => {
  adviceNumberEl.className = 'fade-in';
  adviceTextEl.className = 'fade-in';
};
