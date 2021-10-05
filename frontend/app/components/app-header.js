import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AppHeaderComponent extends Component {
  @service router;

  @action
  handleSearch(e) {
    const { target, keyCode } = e;
    if (keyCode === 13) {
      if (target.value) {
        this.router.transitionTo('restaurants', target.value);
      } else {
        this.router.transitionTo('all-restaurants');
      }
    }
  }

  get currentFilter() {
    if (this.router.currentRouteName === 'all-restaurants') {
      return 'all restaurants';
    }

    return this.router.currentRoute.params.keyword + ' restaurants';
  }
}
