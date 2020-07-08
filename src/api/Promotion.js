import CRUDResource from '@/utils/CRUDResource';

export default class Promotion extends CRUDResource {
  static endpoint = `${process.env.VUE_APP_API}/promotions`;

  constructor(data) {
    super(Promotion.fields, data);
  }

  static fields = [
    { name: 'id', type: 'text' },
    { name: 'name', type: 'text', represent: true },
    { name: 'isActive', type: 'boolean' },
    { name: 'discount', type: 'text' },
    { name: 'startDate', type: 'date', hideFromList: true },
    { name: 'endDate', type: 'date', hideFromList: true },
  ];
}
