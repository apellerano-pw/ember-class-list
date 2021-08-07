import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | class-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it exists', async function (assert) {
    await render(hbs`
      {{class-list "a"}}
    `);

    assert.dom(this.element).hasText('a');
  });

  test('it works for class attributes', async function (assert) {
    await render(hbs`
      <div class={{class-list "a"}}></div>
    `);

    assert.dom('div').hasClass('a');
  });

  test('it handles arbitrarily long class lists', async function (assert) {
    await render(hbs`
      <div class={{class-list "a" "b" "c" "d" "e"}}></div>
    `);

    assert.dom('div').hasClass('a');
    assert.dom('div').hasClass('b');
    assert.dom('div').hasClass('c');
    assert.dom('div').hasClass('d');
    assert.dom('div').hasClass('e');
    assert.dom('div').doesNotHaveClass('abcde');
  });

  test('it fixes whitespace issues within params', async function (assert) {
    this.set('a', 'a ');
    this.set('b', ' b');
    this.set('c', ' c ');

    await render(hbs`
      <div class={{class-list this.a this.b this.c}}></div>
    `);

    assert.dom('div').hasAttribute('class', 'a b c');
  });

  test('it filters out falsey values', async function (assert) {
    this.set('a', 'a');
    this.set('b', '');
    this.set('c', null);
    this.set('d', false);
    this.set('e', 'e');

    await render(hbs`
      <div class={{class-list this.a this.b this.c this.d this.e}}></div>
    `);

    assert.dom('div').hasAttribute('class', 'a e');
  });

  test('it solves whitespace issues in complex templates', async function (assert) {
    this.set('a', 'bar');

    await render(hbs`
      <div class={{class-list
        "foo"
        this.a
        (if true "enabled" "disabled")
        (if false "active")
      }}></div>
    `);

    assert.dom('div').hasAttribute('class', 'foo bar enabled');
  });
});
