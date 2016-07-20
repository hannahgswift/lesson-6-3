import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model() {
    return fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${config.nasaKey}&page=1`)
      .then((res) => res.json());
  }
});
