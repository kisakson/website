import { test } from 'qunit';
import moduleForAcceptance from 'website/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | sewing');

test('visiting /sewing', function(assert) {
  visit('/sewing');

  andThen(function() {
    assert.equal(currentURL(), '/sewing');
  });
});
