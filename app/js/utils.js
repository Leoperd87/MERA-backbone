/**
 * Created by fima on 28/11/16.
 */

module.exports = {
  addSingletonGetter: function (ctor) {
    ctor.getInstance = function () {
      if (ctor.instance_) {
        return ctor.instance_;
      }
      return ctor.instance_ = new ctor;
    };
  }
};