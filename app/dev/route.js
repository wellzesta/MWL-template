import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    let myObj = {text: "You rock!" };
    return myObj;
  }

});
