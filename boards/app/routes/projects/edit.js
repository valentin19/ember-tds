import Route from '@ember/routing/route';
import EmberObject, {set} from "@ember/object";

export default Route.extend({
  templateName:'projects/new',
  afterModel(model){
    let copy = EmberObject.create(model.toJSON());
    set(model, "copy", copy);
  },
  actions:{
    save(model){
      model.set("name", model.copy.name);
      model.set("descriptif", model.copy.descriptif);
      model.set("creationDate", model.copy.creationDate);
      model.set("dueDate", model.copy.dueDate);
      model.set("owner", model.copy.owner);

      model.save().then(this.transitionTo('projects'));
    },
    annuler(){
      this.transitionTo('projects');
    }
  }
});
