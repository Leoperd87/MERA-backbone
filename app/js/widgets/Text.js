/**
 * Created by fima on 24/11/16.
 */

module.exports = Backbone.View.extend({
  tagName: 'p',
  initialize: function () {
    this.model.on('change', this.render, this);
    this.render();
  },
  render: function () {
    this.$el.html(this.model.get('text'));
    return this;
  },
  close: function(){
    this.remove();
    this.unbind();
    this.model.unbind("change", this.modelChanged);
  }
});