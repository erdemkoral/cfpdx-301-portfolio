(function (module) {
const homeController ={};

homeController.initHomeIndex = function () {
  Chicken.checkETag();
  $('.tab-content').hide();
  $('#chickens').fadeIn();
};
module.homeController = homeController;
})(window);
