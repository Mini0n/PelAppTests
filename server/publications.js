Meteor.publish('terminos', function(){
  return Terminos.find({}, {sort: {name: 1}});
});
Meteor.publish('definitions', function(){
  return Definitions.find({}, {sort: {name: 1}});
});
Meteor.publish('sections', function(){
  return Sections.find({}, {sort: {name: 1}});
});