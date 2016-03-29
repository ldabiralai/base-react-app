module.exports = function() {

  this.Given(/^I go to the home page$/, function(done) {
    this.browser.visit(this.baseUrl, done);
  });

  this.When(/^I click '(.*)'$/, function(text) {
    this.browser.clickLink(text); 
  });

};
