Template.tabs.helpers({
	incompleteTaskCount: function(){
		return Tasks.find({done: {$ne: true}}).count();
	},
	incompleteChoresCount: function(){
		return Chores.find({done: {$ne: true}}).count();
	}
});

Template.tabs.events({
	"shown.bs.tab a[href='#older-tasks']": function(event){
		Session.set("tab-content", "older");
	},
	"shown.bs.tab a[href='#current-tasks']": function(event){
		Session.set("tab-content", "current");
	}
});


Template.tabs.rendered = function(){
	$('.nav a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});
	Sortable.create(urgentImportant, {group : 'tasks'});
	Sortable.create(urgentNotImportant, {group : 'tasks'});
}
