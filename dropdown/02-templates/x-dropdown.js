const template = document.createElement('template');

template.innerHTML = `
  <div>Hello from Custom Element!</div>
`;

class XDropdown extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('x-dropdown', XDropdown);
