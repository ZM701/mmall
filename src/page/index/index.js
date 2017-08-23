/*var $=require('jquery');*/
//$("body").html("this is jquery222~~");
require("./index.css");
//require("../common.js");
console.log("index");

var _user=require('service/user-service.js');
_user.login({
	"username":"zs",
	"password":"111111"
});