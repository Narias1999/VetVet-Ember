import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RestaurantsRoute extends Route {
  @service store;

  model(params) {
    const { keyword } = params;

    return this.store.query('restaurant', { keyword });
  }
}
