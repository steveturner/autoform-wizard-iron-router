Wizard.registerRouter('iron:router', {
  go: function(name, stepId) {
    Router.go(name, this.getParams(stepId));
  },
  getParams: function(stepId) {
    return Tracker.nonreactive(function() {
      var route = Router.current()
        , params = route.params || {};
    
      return _.extend(params, {step: stepId});
    });
  },
  getStep: function() {
    var current = Router.current();
    return current && current.params.step;
  },
  path: function(name, stepId) {
    return Router.path(name, this.getParams(stepId));
  }
});