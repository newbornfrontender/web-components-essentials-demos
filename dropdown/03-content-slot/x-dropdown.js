const template = document.createElement('template');

template.innerHTML = `
  <button>dropdown</button>

  <div><slot></slot></div>
`;

class XDropdown extends HTMLElement {
  constructor() {
    super();

    this.show = false;

    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));

    this.contentElement = this.root.querySelector('div');
    this.contentElement.style.display = 'none';

    this.buttomElement = this.root.querySelector('button');
    this.buttomElement.addEventListener('click', () => {
      this.show = !this.show;

      this.contentElement.style.display = this.show ? 'block' : 'none';
    });
  }
}

customElements.define('x-dropdown', XDropdown);
