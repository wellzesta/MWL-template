// app/components/todo-page/component.js

/* 
Docstring: "Parent todo component"
Called by: todos (shim)
Vars (injected): todos  
Version History:
  GithubID        Date        Notes
  --------        ---------   -----
  johnmrobinson   2/20/2016   Init

*/

import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    addTodo(text) {
      this.get('todos').pushObject({text: text });
    }
  }

});
