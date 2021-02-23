import { customElement, LitElement, property, css, html } from "lit-element"

@customElement("pool-wrapper")
class PoolWrapper extends LitElement {
  render() {
    return html`
      <div class="container">
        <div class="water-wrapper">
          <div class="water-waves">
            <div class="water-wave"></div>
            <div class="water-wave"></div>
            <div class="water-wave"></div>
            <div class="water-wave"></div>
            <div class="water-wave"></div>
            <div class="water-wave"></div>
          </div>
          <div class="second-water-waves">
            <div class="second-water-wave"></div>
            <div class="second-water-wave"></div>
            <div class="second-water-wave"></div>
            <div class="second-water-wave"></div>
            <div class="second-water-wave"></div>
            <div class="second-water-wave"></div>
            <div class="second-water-wave"></div>
            <div class="second-water-wave"></div>
          </div>
          <div class="water"></div>
        </div>
        <slot></slot>
      </div>
    `
  }

  static get styles() {
    return css`
      .container {
        position: relative;
        z-index: 0;
        overflow: hidden;
        padding: 160px 24px 80px;
      }

      .water-wrapper {
        z-index: -1;
        background-color: white;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-flow: column;
      }

      .water {
        flex: 1;
        background-color: #d4d8f0;
      }

      .water-waves {
        display: grid;
        grid-auto-flow: column;
        height: 120px;
        overflow: hidden;
        transform: translateY(50%);
      }

      .water-wave {
        min-width: 200px;
        background-color: #d4d8f0;
        border-radius: 50% 50% 0 0;
        margin: 0 -24px;
        animation: 2s wave 0s infinite;
      }

      .second-water-waves {
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: grid;
        grid-auto-flow: column;
        height: 100px;
        overflow: hidden;
        transform: translateY(25%);
      }

      .second-water-wave {
        min-width: 240px;
        background-color: #e4e6f7;
        border-radius: 50% 50% 0 0;
        margin: 0 -20px;
        animation: 2s wave 0.8s infinite;
      }

      @keyframes wave {
        0% {
          transform: rotate3d(1, 0, 0, 0deg);
        }
        50% {
          transform: rotate3d(1, 0, 0, 60deg);
        }
        100% {
          transform: rotate3d(1, 0, 0, 0deg);
        }
      }
    `
  }
}
