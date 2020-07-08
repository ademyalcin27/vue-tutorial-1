import CRUDResource from '@/utils/CRUDResource';
import Promotion from '@/api/Promotion';

export default class Campaign extends CRUDResource {
  static endpoint = `${process.env.VUE_APP_API}campaigns`;

  static operations = ['details', 'list'];

  constructor(data) {
    super(Campaign.fields, data);
  }

  static fields = [
    { name: 'id', type: 'text' },
    { name: 'promotionId', type: 'number', relatedModel: Promotion },
    { name: 'name', type: 'text' },
    { name: 'slug', type: 'text' },
    { name: 'description', type: 'text' },
    { name: 'image', type: 'image', hideFromList: true },
    { name: 'startDate', type: 'date', hideFromList: true },
    { name: 'endDate', type: 'date', hideFromList: true },
  ];
}
