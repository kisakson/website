import Component from '@ember/component';

export default Component.extend({
	actions: {
		showEntry(entry) {
			alert(entry);
			// TODO this will be different.... lol
			// reroute page to /title of category/title of entry
		}
	}
});
