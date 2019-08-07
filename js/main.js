var app = angular.module("RCDnD", ['ordinal', 'ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "pages/home.html"
    })
    .when("/item", {
      templateUrl: "pages/item.html"
    });
});

app.filter("ceil", function() {
  return function(input) {
    return Math.ceil(input);
  };
});
app.filter("articulate", function() {
  return function(input) {
    var patt = new RegExp("^[AEIOUaeiou]");
    if(patt.test(input)) { return "an " + input; }
    else { return "a " + input; }
  };
});

function getTime(baseCost, hb, mod = 1) {
  if(hb) {
    // This being the homebrewed RAW approach.
    hours = Math.ceil( (baseCost * mod / 1000) * 8 );
    if(hours > 1) { return hours + " hours"; }
    else { return hours + " hour" }
  } else {
    // This being the RAI approach.
    days = Math.ceil(baseCost * mod / 1000);
    if(days > 1) { return days + " days"; }
    else { return days + " day"; }
  }
}
