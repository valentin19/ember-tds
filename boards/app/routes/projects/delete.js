import Route from '@ember/routing/route';
import EmberObject, {set} from "@ember/object";

export default Route.extend({
  afterModel(model){
    let copy = EmberObject.create(model.toJSON());
    set(model, "copy", copy);
  },
  actions:{
    save(model){
      model.destroyRecord();
      this.transitionTo('projects');
    },
    annuler(){
      this.transitionTo('projects');
    }
  }
});
