import Ember from 'ember';
import { computed } from '@ember/object';

export default Ember.Controller.extend({

  globalCssClass: 'css-basic',

  navItems: computed(function () {
    return [
      { title: 'Home', link: 'index' },
      { title: 'About', link: 'about' },
      { title: 'Coding', link: 'coding' },
      { title: 'Art', link: 'art' },
      { title: 'Sewing', link: 'sewing' },
      { title: 'Contact', link: 'contact' }
    ];
  }),

  styleButtons: computed(function () {
    return [
      { name: 'Basic', cssClass: 'css-basic' },
      { name: 'Stylish', cssClass: 'css-stylish' }
    ];
  }),

  actions: {
    setCss(cssClass) {
      this.set('globalCssClass', cssClass);
    }
  }
});
