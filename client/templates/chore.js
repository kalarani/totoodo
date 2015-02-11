Template.chore.events({
  "click .toggle-chore": function () {
    Chores.update(this._id, {$set: {done: ! this.done, completedAt: new Date()}});
  },
  "click .delete-chore": function () {
    Chores.remove(this._id);
  }
});