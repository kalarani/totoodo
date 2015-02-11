Template.addNewTask.events({
	"submit .new-task": function(event){
		var taskName = event.target.taskName.value;
		Tasks.insert({text: taskName, createdAt: new Date(), createdBy: 'App'});
		event.target.taskName.value = "";
		return false;
	}
});

Template.addNewChore.events({
	"submit .new-chore": function(event){
		var chore = event.target.choreName.value;
		Chores.insert({text: chore, createdAt: new Date(), createdBy: 'App'});
		event.target.choreName.value = "";
		return false;
	}
})
