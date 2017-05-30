(function(module) {
const aboutController = {};

aboutController.initAboutPage = function () {
  $('.tab-content').hide();
  $('#about').fadeIn();
};

module.aboutController = aboutController;
})(window);
