import Route from '@ember/routing/route';
import EmberObject, {get} from '@ember/object';

export default Route.extend({
  model(){
    return Ember.RSVP.hash({
      developers: this.store.findAll("developer")
    });
  },
  actions: {
    save(story){
      this.set("tags", null);
      story = this.store.createRecord('story', story.copy);
      story.save().then(this.transitionTo('projects'));
    },
    annuler(){
      this.transitionTo('projects');
    },
    /*didTransition() {
      Ember.run.next(this, 'initUI');
    },
    initUI() {
      Ember.$('.ui.dropdown').dropdown();
    }*/
  }
});
