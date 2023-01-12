'use strict';

// remove cwd craziness when this is fixed:
// https://github.com/joyent/node/issues/7824
global.cwd = process.cwd();

var nex = module.exports = {

  /**
   * Creates an npm module id with which npm install can be used
   */
  id: function (version, name) {
    return name + (version ? ('@' + version) : '');
  },

  /**
   * Converts the name of a nex module to a package.json field name
   */
  toField: function (field) {
    return 'nex-'+ field.replace(/[_.-](\w|$)/g, function (_, x) {
      return x.toUpperCase();
    });
  },

  /**
   * Converts a field name to the name of a nex module
   */
  toNpm: function (field) {
    return 'nex-'+ field.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase();
  },

  Handler: function (field) {
    this.field = field;

    this.do = function (field, pkg) {
      throw new Error('Handler.do must be overridden');
    };

    this.undo = function (field, pkg) {
      throw new Error('Handler.undo must be overridden');
    };
  }
};
