import './styles.css';
import Collapse from './collapse';

document.addEventListener('DOMContentLoaded', () => {
  const collapseElement = document.querySelector('.collapse');
  new Collapse(collapseElement);
});
