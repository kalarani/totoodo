Template.task.events({
  "click .toggle-task": function () {
    Tasks.update(this._id, {$set: {done: ! this.done, completedAt: new Date()}});
  },
  "click .delete-task": function () {
    Tasks.remove(this._id);
  }
});