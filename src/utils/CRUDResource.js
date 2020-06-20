import API from '@/utils/api';

export default class CRUDResource {
  static operations = ['list', 'details', 'create', 'delete', 'update'];

  constructor(fields, data) {
    fields.forEach(({ name }) => {
      this[name] = data[name];
    });
  }

  static async getAll() {
    const resources = await API.get(this.endpoint);
    return resources.map((resource) => new this(resource));
  }
}
