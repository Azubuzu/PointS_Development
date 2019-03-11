var langs = ['en','fr','de'];
var langCode = '';
var langJS = null;


var translate = function (jsdata)
{
	$("[tkey]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('tkey')];
	    $(this).html (strTr);
	});
}


//langCode = navigator.language.substr (0, 2);
//langCode = 'fr';

/*if (langCode in langs)
	$.getJSON('lang/'+langCode+'.json', translate);
else
	$.getJSON('lang/fr.json', translate);
*/
//$.getJSON('lang/'+langCode+'.json',translate);
changeLang('fr');

function changeLang(langName) {
	$.getJSON('lang/'+langName+'.json',translate);
}