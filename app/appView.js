const view ={};

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
      $(this).parent().siblings().find('*').fadeIn();
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


//this is the form building function
/*view.create = function(){
  let chicken = new Chicken({
    title: $('#chicken-title').val(),
    description: $('#chicken-body').val(),
    eggProduction: $('#chicken-eggProduction').val(),
    temperament: $('#chicken-temperament').val(),
    startLaying: $('#chicken-startLaying').val(),
    weight: $('#chicken-weight').val(),
    publishedOn: new Date(),
  });
  $('#articles').empty();
  $('#articles').append(chicken.toHtml());
  console.log('ek',chicken.toHtml());
}
$('#new-form').on('change', 'input, textarea', view.create);*/
view.initIndexPage = function() {
  Chicken.all.forEach(function(a){
    $('#chickens').append(a.toHtml());
    populateChickenFilter(a.title);
    populateTemperFilter(a.temperament);
  });
view.chickFilter();
view.tempFilter();
view.teaser();
view.singlePage();
};
