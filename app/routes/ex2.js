import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

const Services = EmberObject.extend({
  services: null,
  remise: computed("promo", "services.@each.active", function(){
    if(this.get('services').filter(service => service.active).length > 0)
    {
      let promos = this.get("codePromo");
      let promo = this.get("promo");

      this.set('totalRemise', this.sumActive-promos[promo]);
      return promos[promo];
    }
    return 0;

  }),
  countActive:  computed("services.@each.active", function(){
    let nbService = this.get('services').filter(service => service.active).length;
    if(nbService == 0)
    {
      return 'aucun service';
    }
    else if(nbService == 1)
    {
      return nbService + " service selectionné";
    }
      return nbService + " services selectionnés";

    }),
  sumActive: computed("services.@each.active", function(){
    let somme = 0;
    this.get('services').forEach(service => {
      if(service.active){
        somme += service.price;
      }
    });
    return somme;
  }),
})

export default Route.extend({
  model(){
    let service =  Services.create({
      services:[
        {
          "name": "Web Development",
          "price": 300,
          "active":true
        },{
          "name": "Design",
          "price": 400,
          "active":false
        },{
          "name": "Integration",
          "price": 250,
          "active":false
        },{
          "name": "Formation",
          "price": 220,
          "active":false
        }
      ],
      codePromo: {
        "B22":0.05,
        "AZ":0.01,
        "UBOAT":0.02
      }

    });

    return service;
  }
});
