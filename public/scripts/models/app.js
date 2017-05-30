
(function(module) {
  //object constructor
  function Chicken (chix) {
    Object.keys(chix).forEach(e => this[e] = chix[e]);
    this.toHtml = function() {
      this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
      var compiledTemplate = Handlebars.compile($('#chickenTemplate').html());
      return compiledTemplate(this);
    };
  };

  Chicken.all = [];

  Chicken.loadAll = rawChickenData => {
    Chicken.all = rawChickenData.sort(function(a,b){
      return (a.title > b.title)})
      .map(function(ele){ return new Chicken(ele);
      });
    };


  Chicken.checkETag = function () {
    // get etag already in local storage
    var existingEtag = localStorage.getItem('ETAG');
    console.log('existing e tag: ', existingEtag);
    var etag;

    $.ajax({
      type: 'HEAD',
      url: 'data/appData.json',
      success: function (data, message, xhr) {
        etag = xhr.getResponseHeader('ETag');
        console.log('e tag:', etag);
        // check if etg is not null and diff
        if (etag !== existingEtag) {
          // erase old local storage
          localStorage.removeItem('rawChickenData');
          console.log('removed raw data from local storage');
        }
        // set the etag
        localStorage.setItem('ETAG', etag);
        // create a new local storage from current data
        Chicken.fetchAll();
      }
    });
  };
  Chicken.checkETag();


  Chicken.fetchAll = () => {
    if (localStorage.rawChickenData) {
      Chicken.loadAll(JSON.parse(localStorage.rawChickenData));
      view.initIndexPage();
    } else {
      $.getJSON( 'data/appData.json' )
      .then(function(rawChickenData) {
        localStorage.rawChickenData = JSON.stringify(rawChickenData);
        Chicken.loadAll(rawChickenData);
        view.initIndexPage();
      });
    };
  };


    module.Chicken = Chicken;
  })(window);
