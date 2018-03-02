import Ember from 'ember';

export default Ember.Component.extend({
  // title: given into item
  // image url: given into item
  // body text: entered into yield

  actions: {
    clickItem(title) {
      // Ultimately, I will want to redirect to the corresponding page on click.
      // For example, we know /coding is the parent url (pass into component?), redirect to /coding/{id}
      window.console.log(title);
    }
  }
});
