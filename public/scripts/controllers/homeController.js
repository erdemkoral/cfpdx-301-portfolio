(function (module) {
const homeController ={};

homeController.initHomeIndex = function () {
  Chicken.fetchAll();
  $('.tab-content').hide();
  $('#chickens').fadeIn();
};
module.homeController = homeController;
})(window);
