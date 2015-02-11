Tasks = new Mongo.Collection("tasks");
Chores = new Mongo.Collection("chores");
Pages = new Meteor.Pagination(Tasks, {templateName: "oldTasks", 
										itemTemplate: "task", 
										infinite: true, 
										filters : {done: {$ne : false}},
										table : {"class": "table", fields: ["done", "text"]}, header: []});
// simple-todos.js
if (Meteor.isClient) {
	Meteor.subscribe("allTasks");
	Meteor.subscribe("allChores");
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
	new Cron(function(){
		Chores.update({}, {$set: {done: false}}, {multi: true});
		console.log("Resetting daily chores");
	}, {minute : 0, hour: 0});
  });
  Meteor.publish("allTasks", function () {
    return Tasks.find();
  });
  Meteor.publish("allChores", function () {
    return Chores.find();
  });
}