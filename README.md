# Deprecated

This component has been moved to `anypoint-web-components/awc`.

-----

A material design dialog, also styled for Anypoint platform.

Anypoint web components are set of components that allows to build Anypoint enabled UI in open source projects.

Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.

[![Published on NPM](https://img.shields.io/npm/v/@anypoint-web-components/anypoint-dialog.svg)](https://www.npmjs.com/package/@anypoint-web-components/anypoint-dialog)

[![tests](https://github.com/anypoint-web-components/anypoint-dialog/actions/workflows/tests.yml/badge.svg)](https://github.com/anypoint-web-components/anypoint-dialog/actions/workflows/tests.yml)

## Usage

### Installation

```sh
npm install @anypoint-web-components/anypoint-dialog --save
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import '@anypoint-web-components/anypoint-dialog/anypoint-dialog.js';
      import '@anypoint-web-components/anypoint-dialog/anypoint-dialog-scrollable.js';
      import '@anypoint-web-components/anypoint-button/anypoint-button.js';
    </script>
  </head>
  <body>
    <anypoint-dialog>
      <h2>Dialog title</h2>
      <anypoint-dialog-scrollable>
        <p>Long content...</p>
      </anypoint-dialog-scrollable>
      <div class="buttons">
        <anypoint-button data-dialog-dismiss>Cancel</anypoint-button>
        <anypoint-button data-dialog-confirm autofocus>OK</anypoint-button>
      </div>
    </anypoint-dialog>
    <script>
    {
      document.querySelector('anypoint-dialog').addEventListener('overlay-closed', (e) => {
        console.log(e.detail.canceled); // only when outside click or ESC key press
        console.log(e.detail.confirmed); // true when "dialog-confirm" was pressed
      });
    }
    </script>
  </body>
</html>
```

### In a LitElement

```js
import { LitElement, html } from 'lit-element';
import '@anypoint-web-components/anypoint-dialog/anypoint-dialog.js';
import '@anypoint-web-components/anypoint-dialog/anypoint-dialog-scrollable.js';
import '@anypoint-web-components/anypoint-button/anypoint-button.js';

class SampleElement extends LitElement {
  render() {
    return html`
    <anypoint-dialog @overlay-closed="${this._dialogCloseHandler}">
      <h2>Dialog title</h2>
      <anypoint-dialog-scrollable>
        <p>Long content...</p>
      </anypoint-dialog-scrollable>
      <div class="buttons">
        <anypoint-button data-dialog-dismiss>Cancel</anypoint-button>
        <anypoint-button data-dialog-confirm autofocus>OK</anypoint-button>
      </div>
    </anypoint-dialog>
    `;
  }

  _dialogCloseHandler(e) {
    if (e.detail.confirmed) {
      // ...
    }
  }
}
customElements.define('sample-element', SampleElement);
```

### Action buttons

Button with "dialog-dismiss" attribute will dismiss the dialog with "confirmed" property on a detail object of "overlay-closed" event set to false.

Button with "dialog-confirm" attribute will close the dialog with "confirmed" property on a detail object of "overlay-closed" event set to true.

### Scrollable content

If the content of the dialog may exceed window size then use `anypoint-dialog-scrollable` as a content wrapper.
It has additional logic to keep the content in place. Otherwise use regular div or paragraph.

### Modal dialog

Set "modal" property to true to render the dialog over a scrim, with ESC button handler and mouse click disabled.
The user can dismiss the dialog only by using dialog actions.

## Development

```sh
git clone https://github.com/anypoint-web-components/anypoint-dialog
cd anypoint-dialog
npm install
```

### Running the demo locally

```sh
npm start
```

### Running the tests

```sh
npm test
```
