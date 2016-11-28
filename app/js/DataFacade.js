/**
 * Created by fima on 28/11/16.
 */

var TextModel = require('./models/Text');
var TabModel = require('./models/Tab');
var TabsCollection = require('./collections/Tabs');

var tab1 = require('./tabs/tab1');
var tab2 = require('./tabs/tab2');

var DataFacade = function() {};

DataFacade.prototype.getTab1TextModel = function() {
  if (!this.tab1TextModel_) {
    this.tab1TextModel_ = new TextModel({
      text: 'Hello world! ' + (new Date())
    });

    setInterval((function() {
      this.tab1TextModel_.set({text: 'Hello world! ' + (new Date())});
    }).bind(this), 1000);
  }
  return this.tab1TextModel_;
};

DataFacade.prototype.getTab2TextModel = function() {
  if (!this.tab2TextModel_) {
    this.tab2TextModel_ = new TextModel({
      text: 'some text'
    });
  }
  return this.tab2TextModel_;
};

DataFacade.prototype.getTabsCollection = function() {
  if (!this.tabs_) {
    this.tabs_ = new TabsCollection([
      new TabModel({
        title: 'TAB 1',
        view: tab1
      }),
      new TabModel({
        title: 'TAB 2',
        view: tab2
      })
    ]);
  }
  return this.tabs_;
};

module.exports = new DataFacade();