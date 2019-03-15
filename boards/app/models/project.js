import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr("string"),
  descriptif: DS.attr("string"),
  creationDate: DS.attr("date"),
  dueDate: DS.attr("date"),
  owner: DS.belongsTo("developer"),

});
