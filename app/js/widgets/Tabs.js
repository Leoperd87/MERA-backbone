/**
 * Created by fima on 24/11/16.
 */

module.exports = Backbone.View.extend({
  tagName: 'div',
  className: '___tabs__',

  template: _.template(
    '<ul class="___nav__">' +
    '  <% _.each(models, function(model, modelId) { %>' +
    '    <li<%= (modelId == currentTabId ? \' class="___active__"\' : "") %>>' +
    '      <button ' +
    '        data-id="<%= modelId %>"' +
    '        class="___tab__"' +
    '        >' +
    '        <%= model.title %>' +
    '      </button>' +
    '    </li>' +
    '  <% }); %>' +
    '</ul>' +
    '<div class="___container__"></div>'
  ),

  events: {
    "click .___nav__ button": "setPage"
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
    this.container_ = this.$el.find('.___container__');
    this.view_ = this.collection.getChecked().get('view')();
    this.container_.append(this.view_.render().$el);
    return this;
  },
  setPage: function(event) {
    var el = this.$(event.target);
    this.$('.___nav__ li.___active__').removeClass('___active__');
    el.parent().addClass('___active__');
    var newId = parseInt(el.data('id'));
    if (this.collection.setChecked(newId)) {
      this.view_.close();
      this.view_ = this.collection.getChecked().get('view')();
      this.container_.append(this.view_.render().$el);
    }
  }
});