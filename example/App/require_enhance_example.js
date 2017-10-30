/*************************************************
 * @copyright 2017 Flision Corporation Inc.
 * @author: Vincent Chan @ Canton
 * @date: 2017年10月30日
 * @version: 1.0.0
 * @description:
 **************************************************/

var require_enhance = require('../../index')(__dirname);

var root_module = require($root('OutsideModule'));
var my_module = require($lib('my-module'));
var at_moudle = require($at('Module/someutils'));

console.log(my_module.hello());
console.log(root_module.hello());
console.log(at_moudle.hello());
