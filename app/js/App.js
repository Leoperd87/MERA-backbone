/**
 * Created by fima on 24/11/16.
 */

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var TabsComponent = require('./widgets/Tabs');

DataFacade = require('./DataFacade');

module.exports = Backbone.View.extend({
  el: $('#app'),

  initialize: function () {

    this.tabsComponent = new TabsComponent({
      collection: DataFacade.getTabsCollection()
    });

    this.$el.append(this.tabsComponent.render().$el);

    window.app = this;

  }
});