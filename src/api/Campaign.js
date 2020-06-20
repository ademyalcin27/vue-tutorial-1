import CRUDResource from '@/utils/CRUDResource';

export default class Campaign extends CRUDResource {
  static endpoint = 'https://5eb98bef4181540016932ca9.mockapi.io/campaigns';

  static operations = ['details'];

  constructor(data) {
    super(Campaign.fields, data);
  }

  static fields = [
    { name: 'id', type: 'text' },
    { name: 'promotionId', type: 'number' },
    { name: 'name', type: 'text' },
    { name: 'slug', type: 'text' },
    { name: 'description', type: 'text' },
    { name: 'image', type: 'image' },
    { name: 'startDate', type: 'date' },
    { name: 'endDate', type: 'date' },
  ];
}
