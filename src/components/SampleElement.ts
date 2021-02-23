import { LitElement, html, customElement, property, css } from "lit-element"

@customElement("sample-element")
export class SampleElement extends LitElement {
  @property({ type: Number }) count = 0

  render() {
    return html`
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
    `
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
    `
  }

  private _onClick() {
    this.count += 1
  }
}
