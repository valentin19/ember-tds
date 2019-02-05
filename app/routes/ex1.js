import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

const Note = EmberObject.extend({
  content: document.cookie.split('note=')[1],
  MAX: 100,
  info: null,
  style: computed('content', function(){

    this.set('info', "Note modifiée");

    if(this.size < 20)
    {
      return "alert-danger";
    }
    else if(this.size < 50)
    {
      return "alert-warning";
    }
    else
    {
      return "alert-primary";
    }
  }),
  size: computed('content', function(){
    return this.MAX-this.content.length;
  }),
  alertVisible: false,

});

export default Route.extend({
  model(){

    let note =  Note.create();
    if(document.cookie.split('note=').length === 1)
    {
      note.set("content", "");
    }
    else
    {
      note.set("content", document.cookie.split('note=')[1]);
    }

    return note;

  }
});
