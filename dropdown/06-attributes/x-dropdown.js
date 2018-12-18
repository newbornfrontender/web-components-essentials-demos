const template = document.createElement('template');

template.innerHTML = `
  <button></button>

  <div><slot></slot></div>
`;

class XDropdown extends HTMLElement {
  static get observedAttributes() {
    return ['title'];
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
    this.buttomElement.innerHTML = this._title;
  }

  constructor() {
    super();

    this._title = 'dropdown';
    this.show = false;

    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));

    this.contentElement = this.root.querySelector('div');
    this.contentElement.style.display = 'none';

    this.buttomElement = this.root.querySelector('button');
    this.buttomElement.addEventListener('click', () => this.toggle());
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'title' && oldVal !== newVal) {
      this.title = newVal;
    }
  }

  toggle() {
    this.show = !this.show;

    this.contentElement.style.display = this.show ? 'block' : 'none';

    this.dispatchEvent(new CustomEvent('show', { detail: this.show }));
  }
}

customElements.define('x-dropdown', XDropdown);
