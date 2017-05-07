var allChickens = [];
var view ={};
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
}

Chicken.prototype.toHtml = function() {
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  var template = $('#chickenTemplate').html();
  var compiledTemplate = Handlebars.compile(template);
  $('#chickens').append(compiledTemplate(this));
};

//passes constructed objects to allChickens
rawChickenData.forEach(function(ele){
  allChickens.push(new Chicken(ele));
});

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

allChickens.forEach(function(a){
  $('#chickens').append(a.toHtml());
  populateChickenFilter(a.title);
  populateTemperFilter(a.temperament);
});

// filter by title
view.chickFilter = function(){
  $('.chicken-filter').change(function(){
    $('article').hide();
    var selectedValue = $(this).val();
    console.log(selectedValue);
    if(selectedValue){
      $('article[data-name="' + selectedValue + '"]').fadeIn(800);
    }else{
      $('article').not('.template').show();
    }
    $('.temper-filter').val('');
  });
}

// filter by temperament
view.tempFilter = function(){
  $('.temper-filter').change(function(){
    $('article').hide();
    var selectedValue = $(this).val();
    console.log(selectedValue);
    if(selectedValue){
      $('article[data-temper="' + selectedValue + '"]').fadeIn(800);
    }else{
      $('article').not('.template').show();
    }
    $('.chicken-filter').val('');
  });
}

view.teaser = function(){
  console.log('in the fuction');
  var hiddenContent = $('.description *:nth-of-type(n+2)')
  hiddenContent.hide();
  $('.read-on').click(function(e) {
    e.preventDefault();
    console.log('you clicked');
    if($(this).text() === 'Read more') {
      $('.description').find('p').fadeIn();
      $(this).text('Show Less');
    } else if ($(this).text() === 'Show Less'){
      hiddenContent.hide();
      $(this).text('Read more');
    }
  });
}

view.singlePage = function(){
  //show only About section
  $('nav').find('li:first').on('click', function(){
    $('#chickens').hide();
    $('#about').fadeIn().css({"height": "600px"});
  });
  //show only Chickens section
  $('nav').find('li:nth-child(2)').on('click', function(e){
    console.log("ide click");
    e.preventDefault();
    $('#chickens').show();
    $('#about').hide();
  });
}

view.chickFilter();
view.tempFilter();
view.teaser();
view.singlePage();
