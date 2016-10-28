import { Mongo } from 'meteor/mongo';
export const Classes = new Mongo.Collection('Classes');
Classes.schema = new SimpleSchema({
  period: {
    type: Number,
    label: "Period",
    optional: false
  },
  room: {
    type: Number,
    label: "Room",
    optional: true
  },
  teacher: {
    type: String,
    label: "Teacher",
    optional: false
  },
  name: {
    type: String,
    label: "Name",
    optional: false
  }
});
Classes.attachSchema(Classes.schema);
