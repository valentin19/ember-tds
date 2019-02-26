import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    save(note){
      document.cookie="note="+note.get('content'),
        note.set("info", "Note sauvegardée");
      note.set('alertVisible', true);

    },
    /*save(){
      let model = this.get('model');
      console.log('Sauvegarde : ' + model.get('content'));
    },*/
    clear(note) {
      document.cookie = "note=";
      note.set('content', "");
      note.set('alertVisible', false);
    }
  }
});
