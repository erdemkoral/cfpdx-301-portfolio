var allChickens = [];

function Chicken (chix)  {
  this.title = chix.title;
  this.eggProduction = chix.eggProduction;
  this.temperament = chix.temperament;
  this.startLaying = chix.startLaying;
  this.weight = chix.weight;
  this.publishedOn = chix.publishedOn;
  this.description = chix.description;
  this.image = chix.image;
}

Chicken.prototype.toHtml = function() {
  var $newChicken =  $('article.template').clone().removeClass('template');
  var daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  $newChicken.attr('data-name', this.title);
  $newChicken.attr('data-startlaying', this.startLaying);
  $newChicken.find('h3').text(this.title);
  $newChicken.find('li:first').text("Egg Production: " + this.eggProduction);
  $newChicken.find('li:nth-child(2)').text("Temperament: " + this.temperament);
  $newChicken.find('li:nth-child(3)').text("Starts Laying Eggs By: " + this.startLaying);
  $newChicken.find('li:last').text("Average Weight: " + this.weight);
  $newChicken.find('.publishedOn').text("Published on " + this.publishedOn +" (" + daysAgo +" days ago)");
  $newChicken.find('.description').html(this.description);
  $newChicken.find('.headShot').html(this.image);

  return $newChicken;
};

rawChickenData.forEach(function(ele){
  allChickens.push(new Chicken(ele));
});

allChickens.forEach(function(a){
  $('#chickens').append(a.toHtml());
});

$('img').css("width", "180px");

$('.template').hide();

$('#hamburger').click(function(){
   $('.main-nav').fadeToggle("slow");
});
$('nav').find('li:first').on('click', function(){
  $('#chickens').hide();
  $('#about').fadeIn().css({"height": "600px"})
});
$('nav').find('li:nth-child(2)').on('click', function(){
  $('#about').hide();
  $('#chickens').fadeIn()
});
