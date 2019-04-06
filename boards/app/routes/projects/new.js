import Route from '@ember/routing/route';
import {get} from '@ember/object';

export default Route.extend({
  model(){
    return Ember.RSVP.hash({
      developers: this.store.findAll("developer"),
    });
  },
  actions:{
    save(project){
      project = this.store.createRecord('project', project.copy);
      console.log(project.get("name") + " " + project.get("owner"));
      project.save().then(this.transitionTo('projects'));
    },
    annuler(){
      this.transitionTo('projects');
    }
  }

});
