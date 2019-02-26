import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    toggleActive(service){
      Ember.set(service, 'active', !Ember.get(service, 'active'));
    },
    checkerPromo(service){

    },
  }
});
