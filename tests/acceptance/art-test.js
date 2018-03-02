import { test } from 'qunit';
import moduleForAcceptance from 'website/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | art');

test('visiting /art', function(assert) {
  visit('/art');

  andThen(function() {
    assert.equal(currentURL(), '/art');
  });
});
