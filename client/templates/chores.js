Template.chores.helpers({
	chores: function () {
		return Chores.find({}, {sort: {done: 1, createdAt: 1}});
	}
});