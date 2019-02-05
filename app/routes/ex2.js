import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';
import { filterBy } from '@ember/object/computed';

const Services = EmberObject.extend({
  services: null,
  codePromo: null,
  remise: 0,
  totalRemise: 0,
  countActive: filterBy('services', 'active', true),
  sumActive: 0,
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

    let total = 0;
    service.countActive.forEach(function(s){
      if (s.active){
        total += s.price;
      }
    });

    service.set("sumActive", total);

    return service;
  }
});
