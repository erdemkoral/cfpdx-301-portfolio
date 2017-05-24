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

Chicken.loadAll = function (rawChickenData){
  //sorts allChickens title alphabeticaly
  rawChickenData.sort(function(a,b){
    return (a.title > b.title);
  });
  rawChickenData.forEach(function(ele){
    Chicken.all.push(new Chicken(ele));
  })
}

Chicken.fetchAll = function() {
  if (localStorage.rawChickenData) {
    Chicken.loadAll(JSON.parse(localStorage.rawChickenData));
  } else {
    $.getJSON( 'data/appData.json', function ( json ) {
      console.log( 'JSON Data: ', json);
      localStorage.setItem('rawChickenData', JSON.stringify(json));
      Chicken.loadAll(json);
    });
  }
  view.initIndexPage();
}
