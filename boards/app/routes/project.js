import Route from '@ember/routing/route';

export default Route.extend({
  model(data){
    return this.get('store').findRecord('project',data.project_id);
  },
});
