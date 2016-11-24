/**
 * Created by fima on 24/11/16.
 */

var Tab = require('../models/Tab');

module.exports = Backbone.Collection.extend({

  model: Tab,

  initialize: function(models, options) {
    this.tabId_ = 0;
  },

  getCheckedId: function(){
    return this.tabId_;
  },

  getChecked: function(){
    return this.at(this.tabId_);
  },

  setChecked: function(id){
    if (id == this.tabId_) {
      return false
    }
    this.tabId_ = id;
    return true;
  },
  toJSON: function() {
    var r = [];
    this.models.forEach(function(v) {r.push(v.toJSON())});
    return r;
  }
});