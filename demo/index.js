/* eslint-disable lit-a11y/no-autofocus */
import { html } from 'lit-html';
import { ArcDemoPage } from '@advanced-rest-client/arc-demo-helper/ArcDemoPage.js';
import '@anypoint-web-components/anypoint-checkbox/anypoint-checkbox.js';
import '@anypoint-web-components/anypoint-button/anypoint-button.js';
import '@anypoint-web-components/anypoint-styles/colors.js';
import '@advanced-rest-client/arc-demo-helper/arc-interactive-demo.js';
import '../anypoint-dialog.js';
import '../anypoint-dialog-scrollable.js';

class DemoPage extends ArcDemoPage {
  constructor() {
    super();
    this.initObservableProperties([
      'demoCompatibility',
      'demoDisabled',
      'hasTitle',
      'hasActions',
      'modal',
      'nested',
      'scrolled'
    ]);
    this._componentName = 'anypoint-dialog';

    this.demoStates = ['Material Design', 'Anypoint'];
    this.hasTitle = true;
    this.hasActions = true;

    this._demoStateHandler = this._demoStateHandler.bind(this);
    this._toggleMainOption = this._toggleMainOption.bind(this);
    this._openHandler = this._openHandler.bind(this);
    this._nestedHandler = this._nestedHandler.bind(this);
  }

  _toggleMainOption(e) {
    const { name, checked } = e.target;
    this[name] = checked;
  }

  _demoStateHandler(e) {
    const state = e.detail.value;
    this.demoCompatibility = state === 1;
  }

  _openHandler() {
    document.getElementById('dialog').opened = true;
  }

  _nestedHandler() {
    document.getElementById('nested').opened = true;
  }

  _demoTemplate() {
    const {
      demoStates,
      demoCompatibility,
      darkThemeActive,
      hasTitle,
      hasActions,
      modal,
      nested,
      scrolled
    } = this;
    return html`
      <section class="documentation-section">
        <h3>Interactive demo</h3>
        <p>
          This demo lets you preview the text field element with various
          configuration options.
        </p>


        <arc-interactive-demo
          .states="${demoStates}"
          @state-chanegd="${this._demoStateHandler}"
          ?dark="${darkThemeActive}"
        >
          <anypoint-button
            slot="content"
            ?compatibility="${demoCompatibility}"
            @click="${this._openHandler}"
          >
            Open dialog
          </anypoint-button>

          <label slot="options" id="mainOptionsLabel">Options</label>
          <anypoint-checkbox
            aria-describedby="mainOptionsLabel"
            slot="options"
            name="hasTitle"
            checked
            @change="${this._toggleMainOption}">With title</anypoint-checkbox>
          <anypoint-checkbox
            aria-describedby="mainOptionsLabel"
            slot="options"
            name="hasActions"
            checked
            @change="${this._toggleMainOption}">With actions</anypoint-checkbox>
          <anypoint-checkbox
            aria-describedby="mainOptionsLabel"
            slot="options"
            name="modal"
            @change="${this._toggleMainOption}">Modal</anypoint-checkbox>
          <anypoint-checkbox
            aria-describedby="mainOptionsLabel"
            slot="options"
            name="nested"
            @change="${this._toggleMainOption}">Nested</anypoint-checkbox>
          <anypoint-checkbox
            aria-describedby="mainOptionsLabel"
            slot="options"
            name="scrolled"
            @change="${this._toggleMainOption}">Scrolled</anypoint-checkbox>
        </arc-interactive-demo>


        <anypoint-dialog
          id="dialog"
          ?compatibility="${demoCompatibility}"
          ?modal="${modal}">
          ${hasTitle ? html`<h6 class="title">Dialog Title</h6>` : ''}



          ${scrolled ? html`
            <anypoint-dialog-scrollable>
              <p class="whitespace">
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex
ea commodo consequat. Duis aute
irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p class="whitespace">
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex
ea commodo consequat. Duis aute
irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p class="whitespace">
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex
ea commodo consequat. Duis aute
irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p class="whitespace">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </anypoint-dialog-scrollable>
            ` : html`<p class="whitespace">
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex
ea commodo consequat. Duis aute
irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>`}

          ${hasActions ? html`<div class="buttons">
            ${nested ? html`<anypoint-button
              @click="${this._nestedHandler}"
              ?compatibility="${demoCompatibility}">Open nested</anypoint-button>` : ''}
            <anypoint-button
              data-dialog-dismiss
              ?compatibility="${demoCompatibility}">Cancel</anypoint-button>
            <anypoint-button
              data-dialog-confirm
              autofocus
              ?compatibility="${demoCompatibility}">OK</anypoint-button>
          </div>` : ''}
        </anypoint-dialog>

        <anypoint-dialog
          id="nested"
          ?compatibility="${demoCompatibility}">
          <h6 class="title">Nested dialog</h6>

          <p>
            This appears above the first dialog
          </p>

          <div class="buttons">
            <anypoint-button data-dialog-confirm autofocus>OK</anypoint-button>
          </div>
        </anypoint-dialog>
      </section>
    `;
  }

  _introductionTemplate() {
    return html`
      <section class="documentation-section">
        <h3>Introduction</h3>
        <p>
          This component is based on Material Design dialog and adjusted for
          Anypoint platform components.
        </p>
        <p>
          Anypoint web components are set of components that allows to build
          Anypoint enabled UI in open source projects.
        </p>
        <p>
          Dialogs inform users about a task and can contain critical information,
          require decisions, or involve multiple tasks.
        </p>
      </section>
    `;
  }

  _usageTemplate() {
    return html`
      <section class="documentation-section">
        <h2>Usage</h2>
        <p>Anypoint dialog comes with 2 predefied styles:</p>
        <ul>
          <li><b>Material Design</b> - Normal state</li>
          <li>
            <b>Compatibility</b> - To provide compatibility with Anypoint design
          </li>
        </ul>

        <h3>Basic usage</h3>

        <p>
          The dialog can have a header (h2 or .title) and action buttons that are
          inside .buttons container.
        </p>

        <p>
          Button with "data-dialog-dismiss" attribute will dismiss the dialog with
          "confirmed" property on a detail object of "overlay-closed" event set to false.
        </p>

        <p>
          Button with "data-dialog-confirm" attribute will close the dialog with
          "confirmed" property on a detail object of "overlay-closed" event set to true.
        </p>

        <details>
          <summary>Code example</summary>
          <code>
            <pre>
            ${`<anypoint-dialog>
              <h2>Dialog title</h2>
              <p>Dialog content</p>
              <div class="buttons">
                <anypoint-button data-dialog-dismiss>Cancel</anypoint-button>
                <anypoint-button data-dialog-confirm autofocus>OK</anypoint-button>
              </div>
            </anypoint-dialog>`}
            </pre>
          </code>
        </details>

        <h3>Scrollable dialogs</h3>
        <p>
          If the content of the dialog may exceed window size then use
          "anypoint-dialog-scrollable" as a content wrapper.
        </p>

        <details>
          <summary>Code example</summary>
          <code>
            <pre>
            ${`<anypoint-dialog>
              <h2>Dialog title</h2>
              <anypoint-dialog-scrollable>
                <p>Long content...</p>
              </anypoint-dialog-scrollable>
              <div class="buttons">
                <anypoint-button data-dialog-dismiss>Cancel</anypoint-button>
                <anypoint-button data-dialog-confirm autofocus>OK</anypoint-button>
              </div>
            </anypoint-dialog>`}
            </pre>
          </code>
        </details>
      </section>
    `;
  }

  contentTemplate() {
    return html`
      <h2>Anypoint dialog</h2>
      ${this._demoTemplate()}
      ${this._introductionTemplate()}
      ${this._usageTemplate()}
    `;
  }
}

const instance = new DemoPage();
instance.render();
