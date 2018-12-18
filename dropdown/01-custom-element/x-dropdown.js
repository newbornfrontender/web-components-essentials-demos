class XDropdown extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 'Hello from Custom Element!';
  }
}

customElements.define('x-dropdown', XDropdown);
