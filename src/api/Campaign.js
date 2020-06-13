import API from '@/utils/api';

export default class Campaign {
  static endpoint = 'https://5eb98bef4181540016932ca9.mockapi.io/campaigns';

  constructor(data) {
    this.id = data.id;
    this.promotionId = data.promotionId;
    this.name = data.name;
    this.slug = data.slug;
    this.description = data.description;
    this.image = data.image;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
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

  static async getAll() {
    const resources = await API.get(this.endpoint);
    return resources.map((resource) => new this(resource));
  }
}
