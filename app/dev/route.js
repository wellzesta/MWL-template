import Ember from 'ember';

let myObj = {text: "You rock!" };

export default Ember.Route.extend({

  model: function() {
    return myObj;
  }

});
