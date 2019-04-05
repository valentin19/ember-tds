import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr("string"),
  descriptif: DS.attr("string"),
  creationDate: DS.attr("utc"),
  dueDate: DS.attr("utc"),
  owner: DS.belongsTo("developer"),
  stories: DS.belongsTo("story")

});
