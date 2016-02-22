import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todos');
  this.route('semantic');
  this.route('home',{ path: '/' });
  this.route('dev');
});

export default Router;
