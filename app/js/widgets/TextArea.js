/**
 * Created by fima on 24/11/16.
 */

module.exports = Backbone.View.extend({
  tagName: 'textarea',
  events:{
    'change': 'updateV'
  },
  render: function () {
    this.$el.html(this.model.get('text'));
    return this;
  },
  close: function () {
    this.remove();
    this.unbind();
    this.model.unbind("change", this.modelChanged);
  },
  updateV: function () {
    this.model.set({text: this.$el.val()});
  }
});