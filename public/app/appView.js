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


view.singlePage = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click();
};

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
