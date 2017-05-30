(function(module){
const view ={};
// filter by title
view.chickFilter = () => {
  $('.chicken-filter').change(function(){
    $('article').hide();
    var selectedValue = $(this).val();
    if(selectedValue){
      $('article[data-name="' + selectedValue + '"]').fadeIn(800);
    }else{
      $('article').not('.template').show();
    }
    $('.temper-filter').val('');
  });
};

// filter by temperament
view.tempFilter = () => {
  $('.temper-filter').change(function(){
    $('article').hide();
    var selectedValue = $(this).val();
    if(selectedValue){
      $('article[data-temper="' + selectedValue + '"]').fadeIn(800);
    }else{
      $('article').not('.template').show();
    }
    $('.chicken-filter').val('');
  });
};

view.teaser = () => {
  var hiddenContent = $('.description *:nth-of-type(n+2)')
  hiddenContent.hide();
  $('.read-on').click(function(e) {
    e.preventDefault();
    if($(this).text() === 'Read more') {
      $(this).parent().siblings().find('*').fadeIn();
      $(this).text('Show Less');
    } else if ($(this).text() === 'Show Less'){
      hiddenContent.hide();
      $(this).text('Read more');
    }
  });
};

view.populateChickenFilter = (chickenName) => {
  var optionTag = '<option value="' + chickenName+ '">' + chickenName + '</option>';
  if($('chicken-filter opt[value="' + chickenName +'"]').length === 0){
    $('.chicken-filter').append(optionTag);
  }
};

view.populateTemperFilter = (chickenTemper) => {
  var optionTag = '<option value="' + chickenTemper+ '">' + chickenTemper + '</option>';
  if($('.temper-filter option[value="' + chickenTemper + '"]').length === 0) {
    $('.temper-filter').append(optionTag);
  }
};

view.initIndexPage = () => {
  Chicken.all.map(a => {
    $('#chickens').append(a.toHtml());
    view.populateChickenFilter(a.title);
    view.populateTemperFilter(a.temperament);
  });
view.chickFilter();
view.tempFilter();
view.teaser();
};
module.view = view;
})(window);
