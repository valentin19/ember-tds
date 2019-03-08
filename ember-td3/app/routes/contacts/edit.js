import Route from '@ember/routing/route';
import EmberObject, {set} from '@ember/object';

export default Route.extend({
  templateName:'contacts/add',
  afterModel(model){
    set(model, "copy", EmberObject.create(model.toJSON()));
  },
  actions:{
    saveContact(contact){
      contact.setProperties(JSON.parse(JSON.stringify(contact.copy)));
      contact.save().then(()=> {
        this.translationTo('contacts');
      });
    }
  }
});
