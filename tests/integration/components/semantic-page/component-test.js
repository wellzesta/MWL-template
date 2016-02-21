import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('semantic-page', 'Integration | Component | semantic page', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{semantic-page}}`);

  assert.equal(this.$().text().trim(), 'Level 3:semantic-page');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#semantic-page}}
      template block text
    {{/semantic-page}}
  `);

  assert.equal(this.$().text().trim(), 'Level 3:semantic-page');
});
