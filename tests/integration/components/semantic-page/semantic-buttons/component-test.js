import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('semantic-page/semantic-buttons', 'Integration | Component | semantic page/semantic buttons', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{semantic-page/semantic-buttons}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#semantic-page/semantic-buttons}}
      template block text
    {{/semantic-page/semantic-buttons}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
