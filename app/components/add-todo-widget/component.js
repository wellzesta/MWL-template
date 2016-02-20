// app/components/add-todo-widget/component.js

/*

Docstring: "Widget to add a todo"
Called by: todo-page
Vars (injected): todos  
Version History:
  GithubID        Date        Notes
  --------        ---------   -----
  johnmrobinson   2/20/2016   Init

*/


import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    submit() {
      const text = this.get('text');
      this.get('onAdd')(text);
      this.set('text','');
      this.$('input').focus();
    }
  },

  // Insert form validation 
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      // use jQuery selectors
      this.$('#textForm') // this.$('.ui.form')
        .form({
          on: 'blur',
          fields: {
            empty: {
              identifier  : 'empty',
              rules: [
                {
                  type   : 'empty',
                  prompt : 'Please enter a value'
                }
              ]
            }
          }
        });
    });
  }


});
