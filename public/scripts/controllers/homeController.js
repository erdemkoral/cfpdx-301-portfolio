(function (module) {
  const homeController ={};

  homeController.initHomeIndex = function () {
    $('.filters').siblings().remove();
    Chicken.checkETag();
    $('.tab-content').hide();
    $('#chickens').fadeIn();
  };
  module.homeController = homeController;
})(window);
