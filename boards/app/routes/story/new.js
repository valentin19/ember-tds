import Route from '@ember/routing/route';
import EmberObject, {get} from '@ember/object';

export default Route.extend({
  model(data){
    return Ember.RSVP.hash({
      developers: this.store.findAll("developer"),
      copy: {project: this.get('store').findRecord('project',data.project_id)},
    });
  },
  actions: {
    save(story){
      story = this.store.createRecord('story', story.copy);
      story.save().then(this.transitionTo('projects'));
    },
    annuler(){
      this.transitionTo('projects');
    },
  }
});
