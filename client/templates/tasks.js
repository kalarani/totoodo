Template.tasks.helpers({
	tasks: function () {
	var filters = {done: {$ne: true}};
	if(Session.get('tab-content') === 'older'){
		console.log('loading completed tasks');
		filters = {done: {$ne : false}}
	}
	return Tasks.find(filters, {sort: {done: 1, createdAt: 1}});
	}
});
