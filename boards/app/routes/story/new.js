import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    didTransition() {
      Ember.run.next(this, 'initUI');
    },
    initUI() {
      Ember.$('.ui.dropdown').dropdown();
    }
  }
});
