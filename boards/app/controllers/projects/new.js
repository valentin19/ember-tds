import Controller from '@ember/controller';

export default Controller.extend({
  selectedOption: "ok",
  actions: {
    setSelection: function(selected) {
      this.set('selectedOption', selected)
      console.log(this.get('selectedOption'));
    },
    select: function(value, option, isSelected){
      console.log(value);
    }
  }
});
