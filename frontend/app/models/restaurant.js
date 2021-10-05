import Model, { attr } from '@ember-data/model';

export default class RestaurantModel extends Model {
  @attr name;
  @attr description;
  @attr cusine;
  @attr city;
  @attr image;
  @attr createdAt;
}
