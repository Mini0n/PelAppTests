Meteor.publish('terminos', function(){
  return Terminos.find();
});
Meteor.publish('definitions', function(){
  return Definitions.find();
});