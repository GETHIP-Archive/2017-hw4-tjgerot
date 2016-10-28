import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Classes } from '../lib/classes.js';
import { Homeworks } from '../lib/homeworks.js';
import './main.html';
Template.homepage.events({
  'submit .addclass': function(event) {
    const target = event.target;
    const period = target.period.value;
    const room = target.room.value;
    const teacher = target.teacher.value;
    const name = target.title.value;
    event.preventDefault();
    Classes.insert({
      period: period,
      room: room,
      teacher: teacher,
      name: name
    });
    console.log(Classes.find({}).count());
  },
  'submit .addhomework': function(event) {
    event.preventDefault();
    const target = event.target;
    const title = target.title.value;
    const classname = target.class.value;
    const minutes = target.minutes.value;
    Homeworks.insert({
      title: title,
      classname: classname,
      minutes: minutes
    });
    console.log(Homeworks.find({}).count())
  }
});
Template.homepage.helpers({
  classes() {
    var cursor = Classes.find({});
    return cursor;
  },
  homeworks() {
    var cursor = Homeworks.find({});
    return cursor;
  }
});
