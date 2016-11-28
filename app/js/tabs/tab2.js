/**
 * Created by fima on 28/11/16.
 */

var TextAreaComponent = require('../widgets/TextArea');
var ButtonComponent = require('../widgets/Button');
var AlertComponent = require('../widgets/Alert');

module.exports = function () {
  return new (Backbone.View.extend({
    tagName: 'div',
    render: function () {
      this.textArea_ = new TextAreaComponent({
        model: DataFacade.getInstance().getTab2TextModel()
      });
      this.$el.append(this.textArea_.render().$el);

      this.button_ = new ButtonComponent({
        title: 'Show popup',
        cb: (function() {
          this.alert_ = new AlertComponent({
            model: DataFacade.getInstance().getTab2TextModel()
          });
          Backbone.$('body').append(this.alert_.render().$el);
        }).bind(this)
      });
      this.$el.append(this.button_.render().$el);

      return this;
    },
    close: function () {
      this.textArea_.close();
      this.button_.close();
    }
  }));
};
