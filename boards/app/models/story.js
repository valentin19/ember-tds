import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr("string"),
  descriptif: DS.attr("string"),
  developer: DS.belongsTo("developer"),
  step: DS.belongsTo("step"),
  project: DS.belongsTo("project"),
  tags: DS.hasMany("tag", {inverse:"story"}),
  tasks: DS.belongsTo("task")
});
