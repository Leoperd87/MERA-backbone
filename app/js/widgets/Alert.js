/**
 * Created by fima on 24/11/16.
 */
var ButtonComponent = require('./Button');

module.exports = Backbone.View.extend({
  tagName: 'div',
  className: '___alert-box__',
  template: _.template(
    '<div class="___alert-block__"><div class="___alert-message__"><%= text %></div></div>'
  ),
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    this.button_ = new ButtonComponent({
      title: 'OK',
      cb: this.close.bind(this)
    });
    this.$el.find('.___alert-block__').append(this.button_.render().$el);
    return this;
  },
  close: function(){
    this.button_.close();
    this.remove();
    this.unbind();
    this.model.unbind("change", this.modelChanged);
  }
});