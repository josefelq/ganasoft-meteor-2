import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Farms = new Mongo.Collection('farms');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish farms that are public or belong to the current user
  Meteor.publish('farms', function farmsPublication() {
    return Farms.find({
      $or: [
        { owner: this.userId },
      ],
    });
  });
}

Meteor.methods({
  'farms.insert'(name) {
    check(name, String);

    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Farms.insert({
      name,
      createdAt: new Date(),
      owner: this.userId,
    });
  },
  'farms.remove'(taskId) {
    console.log(taskId);
    //check(taskId, String);


    const task = Farms.findOne(taskId);
    if (task.owner !== this.userId) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Farms.remove(taskId);
  },
});
