import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		showEntry(entry) {
			alert(entry);
			// TODO this will be different.... lol
			// reroute page to /title of category/title of entry
		}
	}
});
