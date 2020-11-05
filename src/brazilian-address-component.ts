import './styles.scss';

interface Options {
  template?: string;
}

export default class BrazilianAddressComponent {
  defaultOptions: Options = {
    template: 'default',
  };
  options: Options;

  constructor(options: Options) {
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
