import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('near-earth', { path: 'near-earth/page-1' });
});

export default Router;
