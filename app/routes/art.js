import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return ['Art1', 'Art2', 'Art3'];
	}
});
