export default class Collapse {
    constructor(selector) {
      this.elements = document.querySelectorAll(selector);
      this.init();
    }
  
    init() {
      this.elements.forEach(el => {
        el.addEventListener('click', () => this.toggle(el));
      });
    }
  
    toggle(el) {
      const contentText = el.getAttribute('data-content');
      let contentDiv = el.querySelector('.collapse-content');
  
      if (!contentDiv) {
        contentDiv = document.createElement('div');
        contentDiv.className = 'collapse-content';
        contentDiv.textContent = contentText;
        contentDiv.style.height = '0px';
        contentDiv.style.overflow = 'hidden';
        contentDiv.style.transition = 'height 0.3s ease';
        el.appendChild(contentDiv);
  
        // Триггерим раскрытие
        requestAnimationFrame(() => {
          contentDiv.style.height = contentDiv.scrollHeight + 'px';
        });
      } else {
        // Скрытие
        contentDiv.style.height = '0px';
        setTimeout(() => contentDiv.remove(), 300);
      }
    }
  }
  