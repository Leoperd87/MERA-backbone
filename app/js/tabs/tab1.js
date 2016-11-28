/**
 * Created by fima on 28/11/16.
 */

var TextComponent = require('../widgets/Text');

module.exports = function () {
  return new TextComponent({
    model: DataFacade.getTab1TextModel()
  })
};
