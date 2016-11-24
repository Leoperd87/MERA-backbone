/**
 * Created by fima on 24/11/16.
 */

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var TextAreaComponent = require('./widgets/TextArea');
var ButtonComponent = require('./widgets/Button');
var AlertComponent = require('./widgets/Alert');

var TextComponent = require('./widgets/Text');
var TextModel = require('./models/Text');

var TabsComponent = require('./widgets/Tabs');
var TabModel = require('./models/Tab');
var TabsCollection = require('./collections/Tabs');

module.exports = Backbone.View.extend({
  el: $('#app'),

  initialize: function () {
    this.textModel_ = new TextModel({
      text: 'Hello world! ' + (new Date())
    });

    setInterval((function() {
      this.textModel_.set({text: 'Hello world! ' + (new Date())});
    }).bind(this), 1000);

    this.tabs = new TabsCollection([
      new TabModel({
        title: 'TAB 1',
        view: (function () {
          return new TextComponent({
            model: this.textModel_
          })
        }).bind(this)
      }),
      new TabModel({
        title: 'TAB 2',
        view: (function () {
          return new (Backbone.View.extend({
            tagName: 'div',
            initialize: function() {
              this.textModel_ = new TextModel({
                text: 'some text'
              });
            },
            render: function () {
              this.textArea_ = new TextAreaComponent({
                model: this.textModel_
              });
              this.$el.append(this.textArea_.render().$el);

              this.button_ = new ButtonComponent({
                title: 'Show popup',
                cb: (function() {
                  this.alert_ = new AlertComponent({
                    model: this.textModel_
                  });
                  $('body').append(this.alert_.render().$el);
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
        }).bind(this)
      })
    ]);

    this.tabsComponent = new TabsComponent({
      collection: this.tabs
    });

    this.$el.append(this.tabsComponent.render().$el);

    window.app = this;

  }
});