import { Mongo } from 'meteor/mongo';
export const Homeworks = new Mongo.Collection('Homeworks');
HomeworksSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    optional: false
  },
  classname: {
    type: String,
    label: "Classname",
    optional: false
  },
  minutes: {
    type: Number,
    label: "Time needed (min)",
    optional: false
  }
});
Homeworks.attachSchema(HomeworksSchema);
