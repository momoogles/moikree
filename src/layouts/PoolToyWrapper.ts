import { customElement, LitElement, property, css, html } from "lit-element"

@customElement("pool-toy-wrapper")
class PoolToyWrapper extends LitElement {
  @property() name = "sample toy"

  render() {
    return html`
      <div class="container">
        <div class="display">
          <slot />
        </div>
        <div class="display-name">${this.name}</div>
      </div>
    `
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }

      .container {
        background-color: #eebbc3;
        box-sizing: border-box;
        border: 6px solid #00214d;
        border-radius: 16px;
        padding: 16px;
        display: flex;
        flex-flow: column;
      }

      .display {
        background-color: #fffffe;
        border-radius: 8px;
        border: 4px solid #00214d;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        padding: 24px;
      }

      .display-name {
        margin-top: 8px;
        font-weight: bold;
      }
    `
  }
}
