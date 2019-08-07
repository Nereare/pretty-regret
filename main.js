var app = angular.module("RCDnD", ['ordinal']);

app.controller("scrollCreate", function($scope) {
  $scope.CL    = "";
  $scope.SL    = "";
  $scope.SN    = "";
  $scope.type  = "";
  $scope.mat   = "";
  $scope.SLp   = 0;
  $scope.time  = "";

  $scope.getBasePrice = function(cl, sl) {
    return cl * sl * 25;
  };

  $scope.$watch("CL", function(newVal, oldVal, scope) {
    scope.time = getTime(scope.getBasePrice(newVal, scope.SLp), scope.HB);
  });
  $scope.$watch("SL", function(newVal, oldVal, scope) {
    if(newVal == 0) { scope.SLp = 0.5; }
    else { scope.SLp = newVal; }

    scope.time = getTime(scope.getBasePrice(scope.CL, scope.SLp), scope.HB);
  });
  $scope.$watch("HB", function(newVal, oldVal, scope) {
    scope.time = getTime(scope.getBasePrice(scope.CL, scope.SLp), newVal);
  });
});

app.controller("ringCreate", function($scope) {
  $scope.BP    = "";
  $scope.EC    = "";
  $scope.XP    = "";
  $scope.name  = "";
  $scope.time  = "";
  $scope.type  = "Ring of ";
  $scope.place = "Ring Type";

  $scope.$watch("BP", function(newVal, oldVal, scope) {
    scope.time = getTime((newVal + scope.EC), scope.HB);
  });
  $scope.$watch("EC", function(newVal, oldVal, scope) {
    scope.time = getTime((scope.BP + newVal), scope.HB);
  });
  $scope.$watch("HB", function(newVal, oldVal, scope) {
    scope.time = getTime((scope.BP + scope.EC), newVal);
  });
  $scope.$watch("RW", function(newVal, oldVal, scope) {
    if(newVal) {
      scope.type  = "";
      scope.place = "Wondrous Item"
    } else {
      scope.type  = "Ring of ";
      scope.place = "Ring Type";
    }
  });
});

app.controller("wandCreate", function($scope) {
  $scope.CL    = "";
  $scope.SL    = "";
  $scope.SN    = "";
  $scope.mat   = "";
  $scope.SLp   = 0;
  $scope.time  = "";

  $scope.getBasePrice = function(cl, sl) {
    return cl * sl * 750;
  };

  $scope.$watch("CL", function(newVal, oldVal, scope) {
    scope.time = getTime(scope.getBasePrice(newVal, scope.SLp), scope.HB);
  });
  $scope.$watch("SL", function(newVal, oldVal, scope) {
    if(newVal == 0) { scope.SLp = 0.5; }
    else { scope.SLp = newVal; }

    scope.time = getTime(scope.getBasePrice(scope.CL, scope.SLp), scope.HB);
  });
  $scope.$watch("HB", function(newVal, oldVal, scope) {
    scope.time = getTime(scope.getBasePrice(scope.CL, scope.SLp), newVal);
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
    else { return hours + " hours" }
  } else {
    // This being the RAI approach.
    days = Math.ceil(baseCost * mod / 1000);
    if(days > 1) { return days + " days"; }
    else { return days + " day"; }
  }
}
