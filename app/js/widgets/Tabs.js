/**
 * Created by fima on 24/11/16.
 */

module.exports = Backbone.View.extend({
  tagName: 'div',
  className: 'tabs',

  template: _.template(
    '<ul class="nav">' +
    '  <% _.each(models, function(model, modelId) { %>' +
    '    <li<%= (modelId == currentTabId ? \' class="active"\' : "") %>>' +
    '      <button ' +
    '        data-id="<%= modelId %>"' +
    '        class="tab"' +
    '        >' +
    '        <%= model.title %>' +
    '      </button>' +
    '    </li>' +
    '  <% }); %>' +
    '</ul>' +
    '<div class="container"></div>'
  ),

  events: {
    "click .nav button": "setPage"
  },

  initialize: function () {
    this.collection.on('change', this.render, this);
    this.render();
  },
  render: function () {
    this.$el.html(this.template({
      models: this.collection.toJSON(),
      currentTabId: this.collection.getCheckedId()
    }));
    this.container_ = this.$el.find('.container');
    this.view_ = this.collection.getChecked().get('view')();
    this.container_.append(this.view_.render().$el);
    return this;
  },
  setPage: function(event) {
    var el = this.$(event.target);
    this.$('.nav li.active').removeClass('active');
    el.parent().addClass('active');
    var newId = parseInt(el.data('id'));
    if (this.collection.setChecked(newId)) {
      this.view_.close();
      this.view_ = this.collection.getChecked().get('view')();
      this.container_.append(this.view_.render().$el);
    }
  }
});