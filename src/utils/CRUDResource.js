import API from '@/utils/api';
import pluralize from 'pluralize';
import { firstLetterToLowerCase } from '@/utils/helper';

export default class CRUDResource {
  static operations = ['list', 'details', 'create', 'delete', 'update'];

  constructor(fields, data) {
    fields.forEach(({ name }) => {
      this[name] = data[name];
    });
  }

  static get route() {
    return `/${pluralize(firstLetterToLowerCase(this.name))}`;
  }

  static async getAll() {
    const resources = await API.get(this.endpoint);
    return resources.map((resource) => new this(resource));
  }

  static async getById(id) {
    return new this(await API.get(`${this.endpoint}/${id}`));
  }

  static getListFields() {
    return this.fields.filter(({ hide, hideFromList }) => !(hide || hideFromList));
  }

  static getDetailsFields() {
    return this.fields.filter(({ hide, hideFromDetails }) => !(hide || hideFromDetails))
      .map((field) => ({
        ...field,
        type: field.relatedModel
          ? field.relatedModel.getRepresentationField().type
          : field.type,
      }));
  }

  static getRepresentationField() {
    return this.fields.find(({ represent }) => represent);
  }

  getRepresentationValue() {
    return this[this.constructor.getRepresentationField().name];
  }

  async getData() {
    console.log('getData');
    const data = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const field of this.constructor.fields) {
      const { name, relatedModel } = field;
      let value = this[name];

      if (relatedModel) {
        const relatedField = relatedModel.getRepresentationField();
        try {
          // eslint-disable-next-line no-await-in-loop
          value = (await relatedModel.getById(value))[relatedField.name];
        } catch {
          value = null;
        }
      }

      data[name] = value;
    }

    return data;
  }
}
