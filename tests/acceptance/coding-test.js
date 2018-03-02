import { test } from 'qunit';
import moduleForAcceptance from 'website/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | coding');

test('visiting /coding', function(assert) {
  visit('/coding');

  andThen(function() {
    assert.equal(currentURL(), '/coding');
  });
});
