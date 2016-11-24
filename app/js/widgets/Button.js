/**
 * Created by fima on 24/11/16.
 */

module.exports = Backbone.View.extend({
  tagName: 'button',
  className: 'btn',
  events:{
    'click': 'go'
  },
  initialize: function(options) {
    this.options = options;
    _.bindAll(this, 'render');
  },
  render: function () {
    this.$el.html(this.options.title);
    return this;
  },
  close: function(){
    this.remove();
    this.unbind();
  },
  go: function() {
    this.options.cb();
  }
});