//object constructor
function Chicken (chix)  {
  this.title = chix.title;
  this.eggProduction = chix.eggProduction;
  this.temperament = chix.temperament;
  this.startLaying = chix.startLaying;
  this.weight = chix.weight;
  this.publishedOn = chix.publishedOn;
  this.description = chix.description;
  this.image = chix.image;
  this.toHtml = function() {
    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    var template = $('#chickenTemplate').html();
    var compiledTemplate = Handlebars.compile(template);
    // $('#chickens').append(compiledTemplate(this));
    return compiledTemplate(this);
  };
}

Chicken.all = [];
//passes constructed objects to allChickens
// rawChickenData.forEach(function(ele){
//   allChickens.push(new Chicken(ele));
// });

//sorts allChickens title alphabeticaly
Chicken.loadAll = function (rawChickenData){
rawChickenData.sort(function(a,b){
  return (a.title > b.title);
});
rawChickenData.forEach(function(ele){
  Chicken.all.push(new Chicken(ele));
})
}


function populateChickenFilter (chickenName){
  var optionTag = '<option value="' + chickenName+ '">' + chickenName + '</option>';
  if($('chicken-filter opt[value="' + chickenName +'"]').length === 0){
    $('.chicken-filter').append(optionTag);
  }
}

function populateTemperFilter (chickenTemper){
  var optionTag = '<option value="' + chickenTemper+ '">' + chickenTemper + '</option>';
  if($('.temper-filter option[value="' + chickenTemper + '"]').length === 0) {
    $('.temper-filter').append(optionTag);
  }
}


Chicken.fetchAll = function() {
  if (localStorage.rawChickenData) {
    Chicken.loadAll(JSON.parse(localStorage.rawChickenData));
  } else {
    $.getJSON( 'data/appData.json', function ( json ) {
      console.log( 'JSON Data: ', json);
      localStorage.setItem('rawChickenData', JSON.stringify(json));
    });
  }
  view.initIndexPage();
}


// $.getJSON('app/appData.json', function(json){
//   console.log(json);
// });
