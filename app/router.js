import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('near-earth', { path: 'near-earth/page/:page' });
  this.route('aliens-list', { path: 'aliens' });
  this.route('aliens-new', { path: 'aliens/new' });
  this.route('aliens-edit', { path: 'aliens/:id' });
});

export default Router;
