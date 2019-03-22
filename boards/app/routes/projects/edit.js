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
      //model.setAttribute(JSON.parse(JSON.stringify(model.copy)));
      model.set("identity", model.copy.identity);
      //model.save().then(this.transitionTo('projects'));
    },
    annuler(){
      this.transitionTo('projects');
    }
  }
});
