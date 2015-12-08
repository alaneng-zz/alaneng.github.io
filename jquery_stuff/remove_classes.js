// start up jQuery
(function(){var jQueryVersion="1";var a=document.createElement("script");a.src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.js";a.type="text/javascript";document.getElementsByTagName("head")[0].appendChild(a);})()

// remove green background for correct answers
$('div.correct').removeClass('correct')

// remove check mark
$('img.questioncorrectnessicon').remove()

// remove radio button selection
$('input[type=radio]').removeAttr('checked')

// remove answer
$('div.outcome').remove() 

// remove incorrect answer
$('div.incorrect').removeClass('incorrect')