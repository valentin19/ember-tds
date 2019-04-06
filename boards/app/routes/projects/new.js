import Route from '@ember/routing/route';
import {get} from '@ember/object';

export default Route.extend({
  model(){
    return Ember.RSVP.hash({
      developers: this.store.findAll("developer"),
      copy: {},
    });
  },
  actions:{
    save(project){
      project = this.store.createRecord('project', project.copy);
      project.save().then(this.transitionTo('projects'));
    },
    annuler(){
      this.transitionTo('projects');
    }
  }

});
