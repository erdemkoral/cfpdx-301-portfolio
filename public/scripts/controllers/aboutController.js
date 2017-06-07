(function(module) {
  const aboutController = {};

  aboutController.initAboutPage = function () {
    $('.tab-content').hide();
    $('#about').fadeIn();
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
