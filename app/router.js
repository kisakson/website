import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('art');
  this.route('coding');
  this.route('contact');
  this.route('sewing');
});

export default Router;
