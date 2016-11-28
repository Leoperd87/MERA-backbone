/**
 * Created by fima on 28/11/16.
 */

var u = require('./utils');

var TextModel = require('./models/Text');
var TabModel = require('./models/Tab');
var TabsCollection = require('./collections/Tabs');

var tab1 = require('./tabs/tab1');
var tab2 = require('./tabs/tab2');

var DataFacade = function() {};
u.addSingletonGetter(DataFacade);

DataFacade.prototype.getTab1TextModel = function() {
  if (!u.isDef(this.tab1TextModel_)) {
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
  if (!u.isDef(this.tab2TextModel_)) {
    this.tab2TextModel_ = new TextModel({
      text: 'some text'
    });
  }
  return this.tab2TextModel_;
};

DataFacade.prototype.getTabsCollection = function() {
  if (!u.isDef(this.tabs_)) {
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

module.exports = DataFacade;