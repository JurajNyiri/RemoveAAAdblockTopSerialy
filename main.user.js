// ==UserScript==
// @name         RemoveAAAdblockTopSerialy
// @namespace    https://github.com/JurajNyiri/
// @version      1.0
// @description  Removes anti-anti adblock on TopSerialy
// @author       Juraj Nyíri | jurajnyiri.eu
// @encoding utf-8
// @license http://opensource.org/licenses/MIT
// @homepage https://github.com/JurajNyiri/RemoveAAAdblockTopSerialy
// @match        http://www.topserialy.sk/*
// @require http://code.jquery.com/jquery-latest.js
// @updateURL https://raw.githubusercontent.com/JurajNyiri/RemoveAAAdblockTopSerialy/master/main.user.js
// @downloadURL https://raw.githubusercontent.com/JurajNyiri/RemoveAAAdblockTopSerialy/master/main.user.js
// @run-at   document-start
// ==/UserScript==


var openLoad = ""
var parentIframe = ""
$(function() 
{
    $.each($("iframe"), function( i, l ){
        if($(l).attr("src").indexOf("openload") > -1)
        {
            openLoad = $(l).attr("src");
            parentIframe = $(l).parent();
            
            var newHtmlContent = "<iframe src='"+openLoad+"' scrolling='no' frameborder='0' width='100%' height='405' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true'></iframe>";
            
            setTimeout(function() {
                parentIframe.html(newHtmlContent)
                console.log(parentIframe.html())
            },1)
        }
    });
});
