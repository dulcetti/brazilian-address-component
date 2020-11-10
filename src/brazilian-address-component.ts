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

    this._buildComponentFields();
  }

  private _buildComponentFields() {
    const form: HTMLFormElement = document.createElement('form');
    form.classList.add('form-address');
  }
}
