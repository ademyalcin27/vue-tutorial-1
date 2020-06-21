import CRUDResource from '@/utils/CRUDResource';
import Promotions from '@/api/Promotions';

export default class Campaign extends CRUDResource {
  static endpoint = `${process.env.VUE_APP_API}campaigns`;

  static operations = ['details'];

  constructor(data) {
    super(Campaign.fields, data);
  }

  static fields = [
    { name: 'id', type: 'text' },
    { name: 'promotionId', type: 'number', relatedModel: Promotions },
    { name: 'name', type: 'text' },
    { name: 'slug', type: 'text' },
    { name: 'description', type: 'text' },
    { name: 'image', type: 'image', hideFromList: true },
    { name: 'startDate', type: 'date', hideFromList: true },
    { name: 'endDate', type: 'date', hideFromList: true },
  ];
}
