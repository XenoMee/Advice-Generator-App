import { adviceNumberEl, adviceTextEl } from './main.js';

export const updateTextContent = (id, text) => {
  adviceNumberEl.textContent = id;
  adviceTextEl.textContent = text;
};
