FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render("main", {content: "homepage"});
  }
});
FlowRouter.route("/about", {
  name: 'about',
  action() {
    BlazeLayout.render("main", {content: "about"});
  }
});
FlowRouter.route("/contact", {
  name: "contact",
  action() {
    BlazeLayout.render("maain", {content: "contact"});
  }
})
