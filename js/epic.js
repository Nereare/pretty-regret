app.controller("epicSpell", function($scope) {
  $scope.seeds = {
    afflict: {
      code: "afflict",
      name: "Afflict",
      school: "Enchantment",
      subschool: "Compulsion",
      descriptor: "Fear, Mind-Affecting",
      dc: 14,
      v: true,
      s: true,
      df: false,
      ct: "1 st action",
      range: "300 ft",
      target: "One creature",
      dismiss: false,
      duration: "20 min",
      dur_time: 20,
      saving_throw: "Will",
      st_effect: "Negates",
      spell_resist: true,
      harmless: null,
      link: "http://www.d20srd.org/srd/epic/seeds/afflict.htm"
    },
    animate: {
      code: "animate",
      name: "Animate",
      school: "Transmutation",
      subschool: "null",
      descriptor: "null",
      dc: 25,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "300 ft",
      target: "30 ft³ matter",
      dismiss: false,
      duration: "20 rounds",
      dur_time: 2,
      saving_throw: "None",
      st_effect: "null",
      spell_resist: false,
      harmless: null,
      link: "http://www.d20srd.org/srd/epic/seeds/animate.htm"
    },
    animateDead: {
      code: "animateDead",
      name: "Animate Dead",
      school: "Necromancy",
      subschool: "null",
      descriptor: "Evil",
      dc: 23,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "Touch",
      target: "Corpse",
      dismiss: false,
      duration: "Instantaneous",
      dur_time: 0,
      saving_throw: "None",
      st_effect: "null",
      spell_resist: false,
      harmless: null,
      link: "http://www.d20srd.org/srd/epic/seeds/animateDead.htm"
    },
    armor: {
      code: "armor",
      name: "Armor",
      school: "Conjuration",
      subschool: "Creation",
      descriptor: "Force",
      dc: 14,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "Touch",
      target: "Creature",
      dismiss: true,
      duration: "24 h",
      dur_time: 1440,
      saving_throw: "Will",
      st_effect: "Negates",
      spell_resist: true,
      harmless: true,
      link: "http://www.d20srd.org/srd/epic/seeds/armor.htm"
    },
    banish: {
      code: "banish",
      name: "Banish",
      school: "Abjuration",
      subschool: "null",
      descriptor: "null",
      dc: 27,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "75 ft",
      target: "Extraplanar creature",
      dismiss: false,
      duration: "Instantaneous",
      dur_time: 0,
      saving_throw: "Will",
      st_effect: "Negates",
      spell_resist: true,
      harmless: null,
      link: "http://www.d20srd.org/srd/epic/seeds/banish.htm"
    },
    compel: {
      code: "compel",
      name: "Compel",
      school: "Enchantment",
      subschool: "Compulsion",
      descriptor: "Mind-Affecting",
      dc: 19,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "75 ft",
      target: "Creature",
      dismiss: false,
      duration: "20 h",
      dur_time: 1200,
      saving_throw: "Will",
      st_effect: "Negates",
      spell_resist: true,
      harmless: null,
      link: "http://www.d20srd.org/srd/epic/seeds/compel.htm"
    },
    conceal: {
      code: "conceal",
      name: "Conceal",
      school: "Illusion",
      subschool: "Glamer",
      descriptor: "null",
      dc: 17,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "Touch",
      target: "Creature",
      dismiss: true,
      duration: "200 min",
      dur_time: 200,
      saving_throw: "Will",
      st_effect: "Negates",
      spell_resist: true,
      harmless: null,
      link: "http://www.d20srd.org/srd/epic/seeds/conceal.htm"
    },
    conjure: {
      code: "conjure",
      name: "Conjure",
      school: "Conjuration",
      subschool: "Creation",
      descriptor: "null",
      dc: 21,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "0 ft",
      target: "20 ft³ matter",
      dismiss: false,
      duration: "8 h",
      dur_time: 480,
      saving_throw: "None",
      st_effect: "null",
      spell_resist: false,
      harmless: null,
      link: "http://www.d20srd.org/srd/epic/seeds/conjure.htm"
    },
    contact: {
      code: "contact",
      name: "Contact",
      school: "Divination",
      subschool: "null",
      descriptor: "null",
      dc: 23,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "N/A",
      target: "One creature",
      dismiss: false,
      duration: "200 min",
      dur_time: 200,
      saving_throw: "None",
      st_effect: "null",
      spell_resist: false,
      harmless: null,
      link: "http://www.d20srd.org/srd/epic/seeds/contact.htm"
    },
    delude: {
      code: "delude",
      name: "Delude",
      school: "Illusion",
      subschool: "Figment",
      descriptor: "null",
      dc: 14,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "12.000 ft",
      target: "N/A",
      dismiss: false,
      duration: "20 h",
      dur_time: 1200,
      saving_throw: "Will",
      st_effect: "Disbelief",
      spell_resist: false,
      harmless: null,
      link: "http://www.d20srd.org/srd/epic/seeds/delude.htm"
    },
    destroy: {
      code: "destroy",
      name: "Destroy",
      school: "Transmutation",
      subschool: "null",
      descriptor: "null",
      dc: 29,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "12.000 ft",
      target: "One creature",
      dismiss: false,
      duration: "Instantaneous",
      dur_time: 0,
      saving_throw: "Fortitude",
      st_effect: "Half",
      spell_resist: true,
      harmless: null,
      link: "http://www.d20srd.org/srd/epic/seeds/destroy.htm"
    },
    dispel: {
      code: "dispel",
      name: "Dispel",
      school: "Abjuration",
      subschool: "null",
      descriptor: "null",
      dc: 19,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "300 ft",
      target: "One target",
      dismiss: false,
      duration: "Instantaneous",
      dur_time: 0,
      saving_throw: "None",
      st_effect: "null",
      spell_resist: false,
      harmless: null,
      link: "http://www.d20srd.org/srd/epic/seeds/dispel.htm"
    },
    energy: {
      code: "energy",
      name: "Energy",
      school: "Evocation",
      subschool: "null",
      descriptor: "Acid, Fire, Electricity, Cold or Sonic",
      dc: 19,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "300 ft",
      target: "Area",
      dismiss: false,
      duration: "Instantaneous",
      dur_time: 0,
      saving_throw: "Reflex",
      st_effect: "Half",
      spell_resist: true,
      harmless: null,
      link: "http://www.d20srd.org/srd/epic/seeds/energy.htm"
    },
    foresee: {
      code: "foresee",
      name: "Foresee",
      school: "Divination",
      subschool: "null",
      descriptor: "null",
      dc: 17,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "Personal",
      target: "You",
      dismiss: false,
      duration: "Instantaneous",
      dur_time: 0,
      saving_throw: "None",
      st_effect: "null",
      spell_resist: false,
      harmless: null,
      link: "http://www.d20srd.org/srd/epic/seeds/foresee.htm"
    },
    fortify: {
      code: "fortify",
      name: "Fortify",
      school: "Transmutation",
      subschool: "null",
      descriptor: "null",
      dc: 17,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "Touch",
      target: "One creature",
      dismiss: false,
      duration: "20 h",
      dur_time: 1200,
      saving_throw: "Will",
      st_effect: "Negates",
      spell_resist: true,
      harmless: true,
      link: "http://www.d20srd.org/srd/epic/seeds/fortify.htm"
    },
    heal: {
      code: "heal",
      name: "Heal",
      school: "Conjuration",
      subschool: "Healing",
      descriptor: "null",
      dc: 25,
      v: true,
      s: true,
      df: true,
      ct: "1 min",
      range: "Touch",
      target: "One creature",
      dismiss: false,
      duration: "Instantaneous",
      dur_time: 0,
      saving_throw: "Fortitude",
      st_effect: "Partial",
      spell_resist: true,
      harmless: true,
      link: "http://www.d20srd.org/srd/epic/seeds/heal.htm"
    },
    life: {
      code: "life",
      name: "Life",
      school: "Conjuration",
      subschool: "Healing",
      descriptor: "null",
      dc: 27,
      v: true,
      s: true,
      df: true,
      ct: "1 min",
      range: "Touch",
      target: "Dead creature",
      dismiss: false,
      duration: "Instantaneous",
      dur_time: 0,
      saving_throw: "None",
      st_effect: "null",
      spell_resist: true,
      harmless: true,
      link: "http://www.d20srd.org/srd/epic/seeds/life.htm"
    },
    reflect: {
      code: "reflect",
      name: "Reflect",
      school: "Abjuration",
      subschool: "null",
      descriptor: "null",
      dc: 27,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "Personal",
      target: "You",
      dismiss: false,
      duration: "12 h",
      dur_time: 720,
      saving_throw: "None",
      st_effect: "null",
      spell_resist: false,
      harmless: null,
      link: "http://www.d20srd.org/srd/epic/seeds/reflect.htm"
    },
    reveal: {
      code: "reveal",
      name: "Reveal",
      school: "Divination",
      subschool: "null",
      descriptor: "null",
      dc: 19,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "N/A",
      target: "N/A",
      dismiss: true,
      duration: "20 min",
      dur_time: 20,
      saving_throw: "None",
      st_effect: "null",
      spell_resist: false,
      harmless: null,
      link: "http://www.d20srd.org/srd/epic/seeds/reveal.htm"
    },
    slay: {
      code: "slay",
      name: "Slay",
      school: "Necromancy",
      subschool: "null",
      descriptor: "Death",
      dc: 25,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "300 ft",
      target: "One living creature",
      dismiss: false,
      duration: "Instantaneous",
      dur_time: 0,
      saving_throw: "Fortitude",
      st_effect: "Partial",
      spell_resist: true,
      harmless: null,
      link: "http://www.d20srd.org/srd/epic/seeds/slay.htm"
    },
    summon: {
      code: "summon",
      name: "Summon",
      school: "Conjuration",
      subschool: "Summoning",
      descriptor: "null",
      dc: 14,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "75 ft",
      target: "N/A",
      dismiss: true,
      duration: "20 rounds",
      dur_time: 2,
      saving_throw: "Will",
      st_effect: "Negates",
      spell_resist: true,
      harmless: null,
      link: "http://www.d20srd.org/srd/epic/seeds/summon.htm"
    },
    transform: {
      code: "transform",
      name: "Transform",
      school: "Transmutation",
      subschool: "null",
      descriptor: "null",
      dc: 21,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "300 ft",
      target: "One creature",
      dismiss: false,
      duration: "Permanent",
      dur_time: 1000000000,
      saving_throw: "Fortitude",
      st_effect: "Negates",
      spell_resist: true,
      harmless: null,
      link: "http://www.d20srd.org/srd/epic/seeds/transform.htm"
    },
    transport: {
      code: "transport",
      name: "Transport",
      school: "Conjuration",
      subschool: "null",
      descriptor: "Teleportation",
      dc: 27,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "Touch",
      target: "Creature",
      dismiss: false,
      duration: "Instantaneous",
      dur_time: 0,
      saving_throw: "Will",
      st_effect: "Negates",
      spell_resist: true,
      harmless: null,
      link: "http://www.d20srd.org/srd/epic/seeds/transport.htm"
    },
    ward: {
      code: "ward",
      name: "Ward",
      school: "Abjuration",
      subschool: "null",
      descriptor: "null",
      dc: 14,
      v: true,
      s: true,
      df: false,
      ct: "1 min",
      range: "Touch",
      target: "Creature",
      dismiss: false,
      duration: "24 h",
      dur_time: 1440,
      saving_throw: "None",
      st_effect: "null",
      spell_resist: true,
      harmless: null,
      link: "http://www.d20srd.org/srd/epic/seeds/ward.htm"
    }
  };

  $scope.seedList     = {};
  $scope.mainSeedList = {};

  $scope.mySeeds      = [];
  $scope.dc           = {
    seeds   : 0,
    factors : 0
  };
  $scope.spellType    = {
    text     : "Arcane",
    seedLock : false,
  };
  $scope.mainSeed     = "";

  $scope.school       = "";
  $scope.subschool    = "";
  $scope.descriptorl  = [];
  $scope.descriptors  = "";

  $scope.ct           = "1 min";
  $scope.components   = {
    isRitual : false,
    xp       : false
  };
  $scope.range        = "";
  $scope.target       = "";
  $scope.duration     = {
    text    : "",
    time    : 0,
    dismiss : false
  };
  $scope.save         = {
    type     : "",
    effect   : "",
    harmless : false
  };
  $scope.spellResist  = false;

  $scope.factors      = {
    plus   : {
      save      : "",
      resist    : {
        resist  : "",
        dispel  : ""
      },
      damage    : ""
    },
    minus  : {
      backslash : "",
      xp        : {
        amount  : "",
        all     : false
      },
      ritual    : {
        slot1   : "",
        slot2   : "",
        slot3   : "",
        slot4   : "",
        slot5   : "",
        slot6   : "",
        slot7   : "",
        slot8   : "",
        slot9   : "",
        slotEp  : ""
      }
    },
    global : {
      permanent : false,
      stone     : false
    }
  };

  $scope.$watch("seedList", function(newVal, oldVal, scope) {
    scope.mySeeds            = {};
    scope.dc.seeds           = 0;
    scope.descriptorl        = [];
    scope.descriptors        = "";
    scope.duration           = { text: "", time: 1000000000, dismiss: false };
    scope.spellResist        = false;
    scope.spellType.text     = ( (scope.type) ? "Divine" : "Arcane" );
    scope.spellType.seedLock = false;

    for(var sood in newVal) {
      if(newVal[sood]) {
        scope.dc.seeds += scope.seeds[sood].dc;
        scope.mySeeds[scope.seeds[sood].code] = scope.seeds[sood];
        scope.descriptorl.push(scope.seeds[sood].descriptor);
        scope.descriptors = scope.descriptorl.filter(filterOnlyUnique).filter(filterNotNull).join(", ");
        if(scope.descriptors != "") { scope.descriptors = " [" + scope.descriptors + "]"; }
        if(scope.seeds[sood].dur_time < scope.duration.time) {
          scope.duration.text = scope.seeds[sood].duration;
          scope.duration.time = scope.seeds[sood].dur_time;
        }
        if(scope.seeds[sood].dismiss) { scope.duration.dismiss = true; }
        if(scope.seeds[sood].spell_resist) { scope.spellResist = true; }
        if(scope.seeds[sood].code == "heal" || scope.seeds[sood].code == "life") {
          scope.spellType.text     = "Divine";
          scope.spellType.seedLock = true;
        }
      }
    }
  }, true); // Setting `objectEquality` to `true` is important do to the fact that Angular"s falsey doesn"t throw for this watching.
  $scope.$watch("mainSeedList", function(newVal, oldVal, scope) {
    scope.mainSeed      = "";
    scope.school        = "";
    scope.subschool     = "";
    scope.ct            = "1 min";
    scope.range         = "";
    scope.target        = "";
    scope.save.type     = "";
    scope.save.effect   = "";
    scope.save.harmless = false;

    for(var sood in newVal) {
      if(newVal[sood]) {
        scope.mainSeed  = sood;
        scope.school    = scope.seeds[sood].school;
        scope.subschool = scope.seeds[sood].subschool;
        scope.range     = scope.seeds[sood].range;
        scope.target    = scope.seeds[sood].target;
        scope.save.type = scope.seeds[sood].saving_throw;
        if(scope.subschool == "null") { scope.subschool = ""; }
        else { scope.subschool = " (" + scope.subschool + ")"; }
        if(scope.seeds[sood].ct != "1 min") { scope.ct = scope.seeds[sood].ct; }
        if(scope.save.type == "None") { scope.save.effect = ""; }
        else {
          scope.save.effect = " " + scope.seeds[sood].st_effect;
          if(scope.seeds[sood].harmless == true) { scope.save.harmless = true; }
        }
        break;
      }
    }
  }, true);
  $scope.$watch("type", function(newVal, oldVal, scope) {
    if(!scope.spellType.seedLock) {
      if(newVal) { scope.spellType.text = "Divine"; }
      else { scope.spellType.text = "Arcane"; }
    }
  });

  // ##################################
  // # HERE THERE BE FACTORS HANDLING #
  // ##################################
});

app.filter("getFinalDC", function() {
  return function(input) {
    return getEpicSpellDC(input);
  };
});
app.filter("getComponents", function() {
  return function(input, seeds, type) {
    comps = "V, S";
    if(input.isRitual) { comps += ", Ritual"; }
    if(input.xp)       { comps += ", XP"; }
    if(mustBeDivine(seeds) || type.text == "Divine") { comps += ", DF"; }
    return comps;
  };
});
app.filter("getSavingThrow", function() {
  return function(input) {
    return input.type + input.effect + ((input.harmless) ? " (Harmless)": "");
  };
});
app.filter("getDuration", function() {
  return function(input) {
    return input.text + ((input.dismiss) ? " (D)" : "");
  };
});
app.filter("getEpicSpellType", function() {
  return function(input) {
    return input.text + ((input.seedLock) ? " (due to seed)" : "");
  };
});

function getEpicSpellDC(elem) { return elem.seeds + elem.factors; }
function getEpicSpellCost(dc) { return dc * 9000; }
function getEpicSpellXP(cost) { return Math.ceil(cost / 25); }
function getEpicSpellTime(cost) { return Math.ceil(cost / 50000); }

function mustBeDivine(seeds) {
  for(sood in seeds) {
    if(sood == "heal" || sood == "life") { return true; }
  }
  return false;
}

// Array filter functions
function filterOnlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
function filterNotNull(value, index, self) {
  return value != "null";
}
