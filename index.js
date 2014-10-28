/*!
 * arr-flatten <https://github.com/jonschlinkert/arr-flatten>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

module.exports = function (arr) {
  return flatten(arr, []);
};

function flatten(arr, res) {
  var len = arr.length;
  var num = 0;

  while (len--) {
    var i = num++;

    if (Array.isArray(arr[i])) {
      flatten(arr[i], res);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
