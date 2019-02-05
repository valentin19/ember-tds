import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    toggleActive(service, listServices){

      if(service.active)
      {
        listServices.set("sumActive", listServices.get("sumActive")-service.price);
        Ember.set(service, 'active', false);
      }
      else
      {
        listServices.set("sumActive", listServices.get("sumActive")+service.price);
        Ember.set(service, 'active', true);
      }
    },
    remiseActive(service){
      console.log(service.promo);
    }
  }
});
