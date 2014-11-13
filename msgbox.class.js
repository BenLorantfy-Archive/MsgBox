/*
 * MsgBox
 *
 * Version 1.0
 *
 * MsgBox provides a way to display quick messages to the user, such as "Saved Successfully" or "Operation Failed"
 *
 * Open source under the MIT License (MIT)
 *
 * Copyright (c) 2014 Benjamin Lorantfy
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
*/

MsgBox = (function(){

	var msgBox = $("<div id = 'msgBox'></div>");
	
	var style = "position: fixed; top:-40px; left:50%; min-width:200px; height:30px; box-sizing:border-box; -moz-box-sizing: border-box; padding-top:5px; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; color:white; text-align: center; padding-left:20px; padding-right:20px;";
	
	var redGradient = "background: #a90329; background: -moz-linear-gradient(top,  #a90329 0%, #8f0222 44%, #6d0019 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#a90329), color-stop(44%,#8f0222), color-stop(100%,#6d0019)); background: -webkit-linear-gradient(top,  #a90329 0%,#8f0222 44%,#6d0019 100%); background: -o-linear-gradient(top,  #a90329 0%,#8f0222 44%,#6d0019 100%); background: -ms-linear-gradient(top,  #a90329 0%,#8f0222 44%,#6d0019 100%); background: linear-gradient(to bottom,  #a90329 0%,#8f0222 44%,#6d0019 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a90329', endColorstr='#6d0019',GradientType=0 );";
	
	var greenGradient = "background: #33b70e; background: -moz-linear-gradient(top,  #33b70e 0%, #0b7509 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#33b70e), color-stop(100%,#0b7509)); background: -webkit-linear-gradient(top,  #33b70e 0%,#0b7509 100%); background: -o-linear-gradient(top,  #33b70e 0%,#0b7509 100%); background: -ms-linear-gradient(top,  #33b70e 0%,#0b7509 100%); background: linear-gradient(to bottom,  #33b70e 0%,#0b7509 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#33b70e', endColorstr='#0b7509',GradientType=0 );";
	
	function init(){
		msgBox.attr("style",style);	
		$("body").append(msgBox);		
	}
	
	function animate(stay,duration){
		if(typeof stay === "undefined"){
			var stay = false;
		}else if(typeof stay === "number"){
			var duration = stay;
			var stay = false;
		}
		
		if(typeof duration === "undefined"){
			var duration = 1300;
		}

		msgBox.stop();
		msgBox.css("top",-1*(msgBox.height() + 10));
		msgBox.animate({ top: 0 }, 600, "easeOutQuart",function(){
			if(!stay){
				msgBox.delay(duration).animate({ top: -1*(msgBox.height() + 10) }, 600, "easeOutQuart");
			}	
		});		
	}
	
	//Public:
	function error(msg,stay,duration){
		msgBox.html(msg);
		msgBox.attr("style",style + redGradient);
		
		// Center message box
		msgBox.css("margin-left","-" + msgBox.width()/2 + "px");
		animate(stay,duration);
	}

	function success(msg,stay,duration){
		msgBox.html(msg);
		msgBox.attr("style",style + greenGradient);
		
		// Center message box
		msgBox.css("margin-left","-" + msgBox.width()/2 + "px");
		animate(stay,duration);
	}	
	
	function close(){
		msgBox.animate({ top: -1*(msgBox.height() + 10)}, 600, "easeOutQuart");
	}
	
	//return public methods so they are accessible
	return{
		error:error,
		success:success,
		close:close,
		init:init
	}
})();