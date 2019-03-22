import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {copy:{}};
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
