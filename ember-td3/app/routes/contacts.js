import Route from '@ember/routing/route';
import EmberObject, {computed} from '@ember/object';

let Contacts=EmberObject.extend({
  datas:null,
  filtre:null,
  contacts:computed('datas.@each.isDeleted', 'filtre', function(){
    let deleteds = this.datas.filter((contact)=>!contact.get('isDeleted'));

    if(this.filtre == null){
      return deleteds;
    }

    let self = this;

    return deleteds.filter((contact)=>{

      let filtre=self.filtre.toLowerCase();

      let ck=function(attr){
        let v = get(contact, attr);
        return v && v.toLowerCase().includes(self.filtre);
      };

      return ck('nom') || ck('prenom') || ck('email');
    })
  }),
  deleteds:computed('datas.@each.isDeleted', function(){
    return this.datas.filter((contact)=>contact.get('isDeleted'))
  }),
  deletedsCount:computed('datas.@each.isDeleted', function(){
    return this.get('deleteds').length;
  })
});

export default Route.extend({
  model(){
    return Contacts.create({
      datas: this.store.findAll('contact')
    });
  },

  actions: {
    delete(contact) {
      contact.deleteRecord();
    },
    cancelDeletion(deleteds){
      deleteds.forEach((item)=>{item.rollbackAttributes();});
    },
    confirmDeletion(deleteds){
      deleteds.forEach((contact)=>{contact.save();})
    }
  }

});
