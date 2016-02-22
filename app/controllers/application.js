import Ember from 'ember';

export default Ember.Controller.extend({

  initialize() { 
    this.sendAction('menuClickedHandler', 'home')
  },

  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      console.log('__init__');
      this.sendAction('menuClickedHandler', 'home');
    });
  },

  actions: {
    menuClickedHandler(item) {
      console.log('button ' + item + ' pressed');
      $('.ui .item').removeClass('active');
      var sel = '#' + item;
      $(sel).addClass('active');
      this.transitionToRoute(item);
    }
  }
});


