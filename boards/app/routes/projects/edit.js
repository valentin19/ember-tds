import Route from '@ember/routing/route';
import EmberObject, {set} from "@ember/object";

export default Route.extend({
  templateName:'projects/new',
  afterModel(model){
    let copy = EmberObject.create(model.toJSON());
    set(model, "copy", copy);
    let developers = this.store.findAll('developer');
    set(model, 'developers', developers);
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
