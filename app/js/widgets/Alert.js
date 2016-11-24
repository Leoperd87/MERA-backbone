/**
 * Created by fima on 24/11/16.
 */
var ButtonComponent = require('./Button');

module.exports = Backbone.View.extend({
  tagName: 'div',
  className: 'alert-box',
  template: _.template(
    '<div class="alert-block"><div class="alert-message"><%= text %></div></div>'
  ),
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    this.button_ = new ButtonComponent({
      title: 'OK',
      cb: this.close.bind(this)
    });
    this.$el.find('.alert-block').append(this.button_.render().$el);
    return this;
  },
  close: function(){
    this.button_.close();
    this.remove();
    this.unbind();
    this.model.unbind("change", this.modelChanged);
  }
});