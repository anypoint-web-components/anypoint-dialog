import { TemplateResult, CSSResult, LitElement } from 'lit-element';
import { AnypointDialogMixin } from './AnypointDialogMixin';

export declare class AnypointDialog {
  static readonly styles: CSSResult;

  render(): TemplateResult;
}

export declare interface AnypointDialog extends AnypointDialogMixin, LitElement {
}
