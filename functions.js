import { adviceNumberEl, adviceTextEl } from './main.js';

export const updateTextContent = (id, text) => {
  adviceNumberEl.textContent = id;
  adviceTextEl.textContent = text;
};

export const addAnimationClass = () => {
  adviceNumberEl.className = 'fade-in';
  adviceTextEl.className = 'fade-in';
};
