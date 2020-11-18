import './styles.scss';

interface IInput {
  accesskey?: string;
  id: string;
  disabled?: boolean;
  required?: boolean;
  label: string;
  maxLength?: number;
  minLength?: number;
  name: string;
  placeholder: string;
  tabIndex?: string;
  template?: string;
  type?: string;
}

interface IOptions {
  template?: string;
}

export default class BrazilianAddressComponent {
  defaultInput: IInput = {
    id: 'input-id',
    disabled: false,
    required: false,
    label: 'Add your label here',
    name: 'input-name',
    placeholder: 'Add your placeholder',
    template: 'line',
    type: 'text',
  };
  defaultOptions: IOptions = {
    template: 'default',
  };
  options: IOptions;

  constructor(options: IOptions) {
    this.options = {
      ...this.defaultOptions,
      ...options,
    };

    this._buildComponentForm();
  }

  private _buildComponentFields(fieldset: HTMLFieldSetElement): HTMLFieldSetElement {
    const inputCep = this._buildInput({
      id: 'cep',
      label: 'CEP da sua residência (somente números)',
      name: 'input-cep',
      placeholder: 'Ex: 00000-000',
    });

    fieldset.appendChild(inputCep);

    return fieldset;
  }

  private _buildComponentForm() {
    const form: HTMLFormElement = document.createElement('form');
    const fieldset: HTMLFieldSetElement = document.createElement('fieldset');
    form.classList.add('form-address');
    fieldset.classList.add('form-fieldset');

    const fieldsetWithFields = this._buildComponentFields(fieldset);

    form.appendChild(fieldsetWithFields);

    document.body.appendChild(form);
  }

  private _buildInput(input: IInput): HTMLInputElement {
    const inputAttrs: IInput = {
      ...this.defaultInput,
      ...input,
    };
    const inputHtml: HTMLInputElement = document.createElement('input');
    this._setAttributesOnInput(inputAttrs, inputHtml);

    return inputHtml;
  }

  private _setAttributesOnInput(attrs: IInput, input: HTMLInputElement): HTMLInputElement {
    for (const key in attrs) {
      if (Object.prototype.hasOwnProperty.call(attrs, key)) {
        input.setAttribute(key, attrs[key]);
      }
    }

    return input;
  }
}
