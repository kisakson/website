import Ember from 'ember';

export default Ember.Controller.extend({

  globalCssClass: 'css-basic',

  actions: {
    setCss(cssClass) {
      this.set('globalCssClass', cssClass);
      window.console.log(cssClass);
    }
  }
});
