export default class Collapse {
    constructor(container) {
      this.container = container;
      this.button = this.container.querySelector('.collapse__button');
      this.content = this.container.querySelector('.collapse__content');
  
      this.button.addEventListener('click', () => this.toggle());
    }
  
    toggle() {
      if (this.content.classList.contains('active')) {
        this.content.style.maxHeight = null;
        this.content.classList.remove('active');
      } else {
        this.content.classList.add('active');
        this.content.style.maxHeight = this.content.scrollHeight + 'px';
      }
    }
  }
  