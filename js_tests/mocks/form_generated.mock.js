//These forms are generated by the php unit_test controller -> generate_js_test_form_mocks()
//original xml forms are located in /devinfo/Forms

var generated_forms =
{
	'issue208.xml':
	{
		'html_form' : '<form class="jr" autocomplete="off" id="issue208"><!--This form was created by transforming a javaRosa-style (X)Form using an XSLT sheet created by Aid Web Solutions.--><section class="form-logo"></section><h3 id="form-title">issue208</h3><div id="stats" style="display: none;"><span id="jrSelect">0</span><span id="jrSelect1">2</span><span id="jrItemset">0</span><span id="jrItem">6</span><span id="jrInput">0</span><span id="jrUpload">0</span><span id="jrTrigger">0</span><span id="jrRepeat">1</span><span id="jrRelevant">1</span><span id="jrConstraint">0</span><span id="jrCalculate">1</span><span id="jrPreload">0</span></div><div id="form-languages" style="display:none;" data-default-lang=""><a href="#" lang="en"><span>English</span></a></div><fieldset class="jr-group " name="/issue208/rep"><fieldset class="jr-repeat " name="/issue208/rep"><fieldset><legend><span lang="en" data-itext-id="/issue208/rep/nodeA:label">Select</span></legend><label><span lang="en" data-itext-id="/issue208/rep/nodeA/yes:label">Yes</span><input autocomplete="off" type="radio" name="/issue208/rep/nodeA" value="yes" data-type-xml="select1"/></label><label><span lang="en" data-itext-id="/issue208/rep/nodeA/no:label">No</span><input autocomplete="off" type="radio" name="/issue208/rep/nodeA" value="no" data-type-xml="select1"/></label><label><span lang="en" data-itext-id="/issue208/rep/nodeA/dkrf:label">Don&quot;t know</span><input autocomplete="off" type="radio" name="/issue208/rep/nodeA" value="dkrf" data-type-xml="select1"/></label></fieldset><fieldset><legend><span lang="en" data-itext-id="/issue208/rep/nodeB:label">Select</span></legend><label><span lang="en" data-itext-id="/issue208/rep/nodeB/yes:label">Yes</span><input autocomplete="off" type="radio" name="/issue208/rep/nodeB" value="yes" data-relevant="/issue208/rep/nodeA = &quot;yes&quot;" data-type-xml="select1"/></label><label><span lang="en" data-itext-id="/issue208/rep/nodeB/no:label">No</span><input autocomplete="off" type="radio" name="/issue208/rep/nodeB" value="no" data-relevant="/issue208/rep/nodeA = &quot;yes&quot;" data-type-xml="select1"/></label><label><span lang="en" data-itext-id="/issue208/rep/nodeB/dkrf:label">Don&quot;t know</span><input autocomplete="off" type="radio" name="/issue208/rep/nodeB" value="dkrf" data-relevant="/issue208/rep/nodeA = &quot;yes&quot;" data-type-xml="select1"/></label></fieldset></fieldset><!--end of repeat fieldset with name /issue208/rep--></fieldset><!--end of group --><fieldset id="jr-calculated-items" style="display:none;"><label><input autocomplete="off" type="hidden" name="/issue208/formhub/uuid" data-calculate="&quot;06b37a5069414b1b98cdd92155f6a793&quot;" data-type-xml="string"/></label></fieldset></form>',
		'xml_model': '<model><instance xmlns="http://www.w3.org/2002/xforms"><issue208 id="issue208"><formhub><uuid/></formhub><rep template=""><nodeA/><nodeB/></rep><meta><instanceID/></meta></issue208></instance></model>'
	},
	'cascading_mixture_itext_noitext.xml':
	{
		'html_form' : '<form class="jr" autocomplete="off" id="CascadingTripleSelect"><!--This form was created by transforming a javaRosa-style (X)Form using an XSLT sheet created by Aid Web Solutions.--><section class="form-logo"></section><h3 id="form-title">Cascading Triple Select Form</h3><div id="stats" style="display: none;"><span id="jrSelect">0</span><span id="jrSelect1">3</span><span id="jrItemset">3</span><span id="jrItem">0</span><span id="jrInput">0</span><span id="jrUpload">0</span><span id="jrTrigger">0</span><span id="jrRepeat">0</span><span id="jrRelevant">0</span><span id="jrConstraint">0</span><span id="jrCalculate">0</span><span id="jrPreload">0</span></div><div id="form-languages" data-default-lang=""><a href="#" lang="en"><span>english</span></a><a href="#" lang="it"><span>italian</span></a></div><fieldset><legend></legend><label class="itemset-template" data-items-path="instance(&quot;choices&quot;)/states/state"><input type="radio" name="/form/state" data-type-xml="select1" value=""/></label><span class="itemset-labels" data-value-ref="value" data-label-type="itext" data-label-ref="value"><span lang="en" data-itext-id="washington">Washington State</span><span lang="it" data-itext-id="washington">State of Washington</span><span lang="en" data-itext-id="illinois">Illinois State</span><span lang="it" data-itext-id="illinois">State of Illinois</span></span></fieldset><fieldset><legend></legend><label class="itemset-template" data-items-path="instance(&quot;choices&quot;)/states/state[value=/form/state]/counties/county"><input type="radio" name="/form/county" data-type-xml="select1" value=""/></label><span class="itemset-labels" data-value-ref="value" data-label-type="itext" data-label-ref="value"><span lang="en" data-itext-id="king">King County</span><span lang="it" data-itext-id="king">County King</span><span lang="en" data-itext-id="pierce">Pierce County</span><span lang="it" data-itext-id="pierce">County Pierce</span><span lang="en" data-itext-id="douglas">Douglas County</span><span lang="it" data-itext-id="douglas">County Douglas</span><span lang="en" data-itext-id="cook">Cook County</span><span lang="it" data-itext-id="cook">County Cook</span><span lang="en" data-itext-id="douglas">Douglas County</span><span lang="it" data-itext-id="douglas">County Douglas</span></span></fieldset><fieldset><legend></legend><label class="itemset-template" data-items-path="instance(&quot;choices&quot;)/states/state[value=/form/state]/counties/county[value=/form/county]/cities/city"><input type="radio" name="/form/city" data-type-xml="select1" value=""/></label><span class="itemset-labels" data-value-ref="value" data-label-ref="name"></span></fieldset></form>',
		'xml_model': '<model><instance xmlns="http://www.w3.org/2002/xforms"><form id="CascadingTripleSelect" version="2012072301"><state/><county/><city/><meta><instanceID/></meta></form></instance><instance xmlns="http://www.w3.org/2002/xforms" id="choices"><states><state><value>washington</value><counties><county><value>king</value><cities><city><name>Seattle</name><value>sea</value></city><city><name>Redmond</name><value>red</value></city></cities></county><county><value>pierce</value><cities><city><name>Tacoma</name><value>tac</value></city><city><name>Puyallup</name><value>puy</value></city></cities></county><county><value>douglas</value><cities><city><name>Bridgeport</name><value>bri</value></city><city><name>Coulee Dam</name><value>cod</value></city><city><name>East Wenatchee</name><value>ewe</value></city><city><name>Rock Island</name><value>roi</value></city></cities></county></counties></state><state><value>illinois</value><counties><county><value>cook</value><cities><city><name>Chicago</name><value>chi</value></city><city><name>Oak Lawn</name><value>oal</value></city><city><name>Oak Forest</name><value>oaf</value></city></cities></county><county><value>douglas</value><cities><city><name>Arcola</name><value>arc</value></city><city><name>Tuscola</name><value>tus</value></city><city><name>Villa Grove</name><value>vig</value></city></cities></county></counties></state></states></instance></model>'
	},
	'new_cascading_selections.xml':
	{
		'html_form' : '<form class="jr" autocomplete="off" id="cascading_select_test"><!--This form was created by transforming a javaRosa-style (X)Form using an XSLT sheet created by Aid Web Solutions.--><section class="form-logo"></section><h3 id="form-title">cascading select test</h3><div id="stats" style="display: none;"><span id="jrSelect">0</span><span id="jrSelect1">12</span><span id="jrItemset">12</span><span id="jrItem">0</span><span id="jrInput">0</span><span id="jrUpload">0</span><span id="jrTrigger">0</span><span id="jrRepeat">0</span><span id="jrRelevant">0</span><span id="jrConstraint">0</span><span id="jrCalculate">1</span><span id="jrPreload">0</span></div><div id="form-languages" data-default-lang=""><a href="#" lang="nl"><span>Dutch</span></a><a href="#" lang="en"><span>English</span></a></div><fieldset class="jr-group " name="/new_cascading_selections/group1"><h4><span lang="" class="">Cascading Selects with Radio Buttons</span></h4><fieldset><legend><span lang="" class="">Country</span></legend><label class="itemset-template" data-items-path="instance(&quot;countries&quot;)/root/item"><input type="radio" name="/new_cascading_selections/group1/country" data-type-xml="select1" value=""/></label><span class="itemset-labels" data-value-ref="name" data-label-type="itext" data-label-ref="itextId"><span lang="nl" data-itext-id="static_instance-countries-0">Nederland</span><span lang="en" data-itext-id="static_instance-countries-0">The Netherlands</span><span lang="nl" data-itext-id="static_instance-countries-1">Verenigde Staten</span><span lang="en" data-itext-id="static_instance-countries-1">United States</span></span></fieldset><fieldset><legend><span lang="" class="">City</span></legend><label class="itemset-template" data-items-path="instance(&quot;cities&quot;)/root/item[country=/new_cascading_selections/group1/country]"><input type="radio" name="/new_cascading_selections/group1/city" data-type-xml="select1" value=""/></label><span class="itemset-labels" data-value-ref="name" data-label-type="itext" data-label-ref="itextId"><span lang="nl" data-itext-id="static_instance-cities-0">Amsterdam</span><span lang="en" data-itext-id="static_instance-cities-0">Amsterdam</span><span lang="nl" data-itext-id="static_instance-cities-1">Denver</span><span lang="en" data-itext-id="static_instance-cities-1">Denver</span><span lang="nl" data-itext-id="static_instance-cities-2">Nieuw Amsterdam</span><span lang="en" data-itext-id="static_instance-cities-2">New York City</span><span lang="nl" data-itext-id="static_instance-cities-3">De Engelen</span><span lang="en" data-itext-id="static_instance-cities-3">Los Angeles</span><span lang="nl" data-itext-id="static_instance-cities-4">Rotterdam</span><span lang="en" data-itext-id="static_instance-cities-4">Rotterdam</span><span lang="nl" data-itext-id="static_instance-cities-5">Dronten</span><span lang="en" data-itext-id="static_instance-cities-5">Dronten</span></span></fieldset><fieldset><legend><span lang="" class="">Neighborhood</span></legend><label class="itemset-template" data-items-path="instance(&quot;neighborhoods&quot;)/root/item[country=/new_cascading_selections/group1/country and city=/new_cascading_selections/group1/city]"><input type="radio" name="/new_cascading_selections/group1/neighborhood" data-type-xml="select1" value=""/></label><span class="itemset-labels" data-value-ref="name" data-label-type="itext" data-label-ref="itextId"><span lang="nl" data-itext-id="static_instance-neighborhoods-0">Van der Bronk Plantage</span><span lang="en" data-itext-id="static_instance-neighborhoods-0">Bronx</span><span lang="nl" data-itext-id="static_instance-neighborhoods-1">Haarlem</span><span lang="en" data-itext-id="static_instance-neighborhoods-1">Harlem</span><span lang="nl" data-itext-id="static_instance-neighborhoods-2">Goeie lucht</span><span lang="en" data-itext-id="static_instance-neighborhoods-2">Bel Air</span><span lang="nl" data-itext-id="static_instance-neighborhoods-3">Westerpark</span><span lang="en" data-itext-id="static_instance-neighborhoods-3">Westerpark</span><span lang="nl" data-itext-id="static_instance-neighborhoods-4">Park Heuvel</span><span lang="en" data-itext-id="static_instance-neighborhoods-4">Park Hill</span><span lang="nl" data-itext-id="static_instance-neighborhoods-5">De haven</span><span lang="en" data-itext-id="static_instance-neighborhoods-5">Harbor</span><span lang="nl" data-itext-id="static_instance-neighborhoods-6">De Dam</span><span lang="en" data-itext-id="static_instance-neighborhoods-6">Dam</span><span lang="nl" data-itext-id="static_instance-neighborhoods-7">&quot;t Centrum</span><span lang="en" data-itext-id="static_instance-neighborhoods-7">Downtown</span><span lang="nl" data-itext-id="static_instance-neighborhoods-8">De haven</span><span lang="en" data-itext-id="static_instance-neighborhoods-8">Harbor</span></span></fieldset></fieldset><!--end of group --><fieldset class="jr-group " name="/new_cascading_selections/group2"><h4><span lang="" class="">Cascading Selects with Pulldowns</span></h4><label class="jr-appearance-minimal"><span lang="" class="">Country</span><select name="/new_cascading_selections/group2/country2" data-type-xml="select1"><option class="itemset-template" value="" data-items-path="instance(&quot;countries&quot;)/root/item">...</option></select><span class="jr-option-translations" style="display:none;"></span><span class="itemset-labels" data-value-ref="name" data-label-type="itext" data-label-ref="itextId"><span lang="nl" data-itext-id="static_instance-countries-0">Nederland</span><span lang="en" data-itext-id="static_instance-countries-0">The Netherlands</span><span lang="nl" data-itext-id="static_instance-countries-1">Verenigde Staten</span><span lang="en" data-itext-id="static_instance-countries-1">United States</span></span></label><label class="jr-appearance-minimal"><span lang="" class="">City</span><select name="/new_cascading_selections/group2/city2" data-type-xml="select1"><option class="itemset-template" value="" data-items-path="instance(&quot;cities&quot;)/root/item[country=/new_cascading_selections/group2/country2]">...</option></select><span class="jr-option-translations" style="display:none;"></span><span class="itemset-labels" data-value-ref="name" data-label-type="itext" data-label-ref="itextId"><span lang="nl" data-itext-id="static_instance-cities-0">Amsterdam</span><span lang="en" data-itext-id="static_instance-cities-0">Amsterdam</span><span lang="nl" data-itext-id="static_instance-cities-1">Denver</span><span lang="en" data-itext-id="static_instance-cities-1">Denver</span><span lang="nl" data-itext-id="static_instance-cities-2">Nieuw Amsterdam</span><span lang="en" data-itext-id="static_instance-cities-2">New York City</span><span lang="nl" data-itext-id="static_instance-cities-3">De Engelen</span><span lang="en" data-itext-id="static_instance-cities-3">Los Angeles</span><span lang="nl" data-itext-id="static_instance-cities-4">Rotterdam</span><span lang="en" data-itext-id="static_instance-cities-4">Rotterdam</span><span lang="nl" data-itext-id="static_instance-cities-5">Dronten</span><span lang="en" data-itext-id="static_instance-cities-5">Dronten</span></span></label><label class="jr-appearance-minimal"><span lang="" class="">Neighborhood</span><select name="/new_cascading_selections/group2/neighborhood2" data-type-xml="select1"><option class="itemset-template" value="" data-items-path="instance(&quot;neighborhoods&quot;)/root/item[country=/new_cascading_selections/group2/country2 and city=/new_cascading_selections/group2/city2]">...</option></select><span class="jr-option-translations" style="display:none;"></span><span class="itemset-labels" data-value-ref="name" data-label-type="itext" data-label-ref="itextId"><span lang="nl" data-itext-id="static_instance-neighborhoods-0">Van der Bronk Plantage</span><span lang="en" data-itext-id="static_instance-neighborhoods-0">Bronx</span><span lang="nl" data-itext-id="static_instance-neighborhoods-1">Haarlem</span><span lang="en" data-itext-id="static_instance-neighborhoods-1">Harlem</span><span lang="nl" data-itext-id="static_instance-neighborhoods-2">Goeie lucht</span><span lang="en" data-itext-id="static_instance-neighborhoods-2">Bel Air</span><span lang="nl" data-itext-id="static_instance-neighborhoods-3">Westerpark</span><span lang="en" data-itext-id="static_instance-neighborhoods-3">Westerpark</span><span lang="nl" data-itext-id="static_instance-neighborhoods-4">Park Heuvel</span><span lang="en" data-itext-id="static_instance-neighborhoods-4">Park Hill</span><span lang="nl" data-itext-id="static_instance-neighborhoods-5">De haven</span><span lang="en" data-itext-id="static_instance-neighborhoods-5">Harbor</span><span lang="nl" data-itext-id="static_instance-neighborhoods-6">De Dam</span><span lang="en" data-itext-id="static_instance-neighborhoods-6">Dam</span><span lang="nl" data-itext-id="static_instance-neighborhoods-7">&quot;t Centrum</span><span lang="en" data-itext-id="static_instance-neighborhoods-7">Downtown</span><span lang="nl" data-itext-id="static_instance-neighborhoods-8">De haven</span><span lang="en" data-itext-id="static_instance-neighborhoods-8">Harbor</span></span></label></fieldset><!--end of group --><fieldset class="jr-group " name="/new_cascading_selections/group3"><h4><span lang="" class="">Cascading Selects with Radio Buttons With a Default</span></h4><fieldset><legend><span lang="" class="">Country (default: USA)</span></legend><label class="itemset-template" data-items-path="instance(&quot;countries&quot;)/root/item"><input type="radio" name="/new_cascading_selections/group3/country3" data-type-xml="select1" value=""/></label><span class="itemset-labels" data-value-ref="name" data-label-type="itext" data-label-ref="itextId"><span lang="nl" data-itext-id="static_instance-countries-0">Nederland</span><span lang="en" data-itext-id="static_instance-countries-0">The Netherlands</span><span lang="nl" data-itext-id="static_instance-countries-1">Verenigde Staten</span><span lang="en" data-itext-id="static_instance-countries-1">United States</span></span></fieldset><fieldset><legend><span lang="" class="">City</span></legend><label class="itemset-template" data-items-path="instance(&quot;cities&quot;)/root/item[country=/new_cascading_selections/group3/country3]"><input type="radio" name="/new_cascading_selections/group3/city3" data-type-xml="select1" value=""/></label><span class="itemset-labels" data-value-ref="name" data-label-type="itext" data-label-ref="itextId"><span lang="nl" data-itext-id="static_instance-cities-0">Amsterdam</span><span lang="en" data-itext-id="static_instance-cities-0">Amsterdam</span><span lang="nl" data-itext-id="static_instance-cities-1">Denver</span><span lang="en" data-itext-id="static_instance-cities-1">Denver</span><span lang="nl" data-itext-id="static_instance-cities-2">Nieuw Amsterdam</span><span lang="en" data-itext-id="static_instance-cities-2">New York City</span><span lang="nl" data-itext-id="static_instance-cities-3">De Engelen</span><span lang="en" data-itext-id="static_instance-cities-3">Los Angeles</span><span lang="nl" data-itext-id="static_instance-cities-4">Rotterdam</span><span lang="en" data-itext-id="static_instance-cities-4">Rotterdam</span><span lang="nl" data-itext-id="static_instance-cities-5">Dronten</span><span lang="en" data-itext-id="static_instance-cities-5">Dronten</span></span></fieldset><fieldset><legend><span lang="" class="">Neighborhood</span></legend><label class="itemset-template" data-items-path="instance(&quot;neighborhoods&quot;)/root/item[country=/new_cascading_selections/group3/country3 and city=/new_cascading_selections/group3/city3]"><input type="radio" name="/new_cascading_selections/group3/neighborhood3" data-type-xml="select1" value=""/></label><span class="itemset-labels" data-value-ref="name" data-label-type="itext" data-label-ref="itextId"><span lang="nl" data-itext-id="static_instance-neighborhoods-0">Van der Bronk Plantage</span><span lang="en" data-itext-id="static_instance-neighborhoods-0">Bronx</span><span lang="nl" data-itext-id="static_instance-neighborhoods-1">Haarlem</span><span lang="en" data-itext-id="static_instance-neighborhoods-1">Harlem</span><span lang="nl" data-itext-id="static_instance-neighborhoods-2">Goeie lucht</span><span lang="en" data-itext-id="static_instance-neighborhoods-2">Bel Air</span><span lang="nl" data-itext-id="static_instance-neighborhoods-3">Westerpark</span><span lang="en" data-itext-id="static_instance-neighborhoods-3">Westerpark</span><span lang="nl" data-itext-id="static_instance-neighborhoods-4">Park Heuvel</span><span lang="en" data-itext-id="static_instance-neighborhoods-4">Park Hill</span><span lang="nl" data-itext-id="static_instance-neighborhoods-5">De haven</span><span lang="en" data-itext-id="static_instance-neighborhoods-5">Harbor</span><span lang="nl" data-itext-id="static_instance-neighborhoods-6">De Dam</span><span lang="en" data-itext-id="static_instance-neighborhoods-6">Dam</span><span lang="nl" data-itext-id="static_instance-neighborhoods-7">&quot;t Centrum</span><span lang="en" data-itext-id="static_instance-neighborhoods-7">Downtown</span><span lang="nl" data-itext-id="static_instance-neighborhoods-8">De haven</span><span lang="en" data-itext-id="static_instance-neighborhoods-8">Harbor</span></span></fieldset></fieldset><!--end of group --><fieldset class="jr-group " name="/new_cascading_selections/group4"><h4><span lang="" class="">Cascading Select with Pulldowns and Defaults</span></h4><label class="jr-appearance-minimal"><span lang="" class="">Country (default: USA)</span><select name="/new_cascading_selections/group4/country4" data-type-xml="select1"><option class="itemset-template" value="" data-items-path="instance(&quot;countries&quot;)/root/item">...</option></select><span class="jr-option-translations" style="display:none;"></span><span class="itemset-labels" data-value-ref="name" data-label-type="itext" data-label-ref="itextId"><span lang="nl" data-itext-id="static_instance-countries-0">Nederland</span><span lang="en" data-itext-id="static_instance-countries-0">The Netherlands</span><span lang="nl" data-itext-id="static_instance-countries-1">Verenigde Staten</span><span lang="en" data-itext-id="static_instance-countries-1">United States</span></span></label><label class="jr-appearance-minimal"><span lang="" class="">City (default: Denver)</span><select name="/new_cascading_selections/group4/city4" data-type-xml="select1"><option class="itemset-template" value="" data-items-path="instance(&quot;cities&quot;)/root/item[country=/new_cascading_selections/group4/country4]">...</option></select><span class="jr-option-translations" style="display:none;"></span><span class="itemset-labels" data-value-ref="name" data-label-type="itext" data-label-ref="itextId"><span lang="nl" data-itext-id="static_instance-cities-0">Amsterdam</span><span lang="en" data-itext-id="static_instance-cities-0">Amsterdam</span><span lang="nl" data-itext-id="static_instance-cities-1">Denver</span><span lang="en" data-itext-id="static_instance-cities-1">Denver</span><span lang="nl" data-itext-id="static_instance-cities-2">Nieuw Amsterdam</span><span lang="en" data-itext-id="static_instance-cities-2">New York City</span><span lang="nl" data-itext-id="static_instance-cities-3">De Engelen</span><span lang="en" data-itext-id="static_instance-cities-3">Los Angeles</span><span lang="nl" data-itext-id="static_instance-cities-4">Rotterdam</span><span lang="en" data-itext-id="static_instance-cities-4">Rotterdam</span><span lang="nl" data-itext-id="static_instance-cities-5">Dronten</span><span lang="en" data-itext-id="static_instance-cities-5">Dronten</span></span></label><label class="jr-appearance-minimal"><span lang="" class="">Neighborhood</span><select name="/new_cascading_selections/group4/neighborhood4" data-type-xml="select1"><option class="itemset-template" value="" data-items-path="instance(&quot;neighborhoods&quot;)/root/item[country=/new_cascading_selections/group4/country4 and city=/new_cascading_selections/group4/city4]">...</option></select><span class="jr-option-translations" style="display:none;"></span><span class="itemset-labels" data-value-ref="name" data-label-type="itext" data-label-ref="itextId"><span lang="nl" data-itext-id="static_instance-neighborhoods-0">Van der Bronk Plantage</span><span lang="en" data-itext-id="static_instance-neighborhoods-0">Bronx</span><span lang="nl" data-itext-id="static_instance-neighborhoods-1">Haarlem</span><span lang="en" data-itext-id="static_instance-neighborhoods-1">Harlem</span><span lang="nl" data-itext-id="static_instance-neighborhoods-2">Goeie lucht</span><span lang="en" data-itext-id="static_instance-neighborhoods-2">Bel Air</span><span lang="nl" data-itext-id="static_instance-neighborhoods-3">Westerpark</span><span lang="en" data-itext-id="static_instance-neighborhoods-3">Westerpark</span><span lang="nl" data-itext-id="static_instance-neighborhoods-4">Park Heuvel</span><span lang="en" data-itext-id="static_instance-neighborhoods-4">Park Hill</span><span lang="nl" data-itext-id="static_instance-neighborhoods-5">De haven</span><span lang="en" data-itext-id="static_instance-neighborhoods-5">Harbor</span><span lang="nl" data-itext-id="static_instance-neighborhoods-6">De Dam</span><span lang="en" data-itext-id="static_instance-neighborhoods-6">Dam</span><span lang="nl" data-itext-id="static_instance-neighborhoods-7">&quot;t Centrum</span><span lang="en" data-itext-id="static_instance-neighborhoods-7">Downtown</span><span lang="nl" data-itext-id="static_instance-neighborhoods-8">De haven</span><span lang="en" data-itext-id="static_instance-neighborhoods-8">Harbor</span></span></label></fieldset><!--end of group --><fieldset id="jr-calculated-items" style="display:none;"><label><input autocomplete="off" type="hidden" name="/new_cascading_selections/meta/instanceID" data-calculate="concat(&quot;uuid:&quot;, uuid())" data-type-xml="string"/></label></fieldset></form>',
		'xml_model': '<model><instance xmlns="http://www.w3.org/2002/xforms"><new_cascading_selections id="cascading_select_test"><group1><country/><city/><neighborhood/></group1><group2><country2/><city2/><neighborhood2/></group2><group3><country3>usa</country3><city3/><neighborhood3/></group3><group4><country4>usa</country4><city4>den</city4><neighborhood4/></group4><meta><instanceID/></meta></new_cascading_selections></instance><instance xmlns="http://www.w3.org/2002/xforms" id="cities"><root><item><itextId>static_instance-cities-0</itextId><country>nl</country><name>ams</name></item><item><itextId>static_instance-cities-1</itextId><country>usa</country><name>den</name></item><item><itextId>static_instance-cities-2</itextId><country>usa</country><name>nyc</name></item><item><itextId>static_instance-cities-3</itextId><country>usa</country><name>la</name></item><item><itextId>static_instance-cities-4</itextId><country>nl</country><name>rot</name></item><item><itextId>static_instance-cities-5</itextId><country>nl</country><name>dro</name></item></root></instance><instance xmlns="http://www.w3.org/2002/xforms" id="neighborhoods"><root><item><itextId>static_instance-neighborhoods-0</itextId><city>nyc</city><country>usa</country><name>bronx</name></item><item><itextId>static_instance-neighborhoods-1</itextId><city>nyc</city><country>usa</country><name>harlem</name></item><item><itextId>static_instance-neighborhoods-2</itextId><city>la</city><country>usa</country><name>belair</name></item><item><itextId>static_instance-neighborhoods-3</itextId><city>ams</city><country>nl</country><name>wes</name></item><item><itextId>static_instance-neighborhoods-4</itextId><city>den</city><country>usa</country><name>parkhill</name></item><item><itextId>static_instance-neighborhoods-5</itextId><city>rot</city><country>nl</country><name>haven</name></item><item><itextId>static_instance-neighborhoods-6</itextId><city>ams</city><country>nl</country><name>dam</name></item><item><itextId>static_instance-neighborhoods-7</itextId><city>rot</city><country>nl</country><name>centrum</name></item><item><itextId>static_instance-neighborhoods-8</itextId><city>dro</city><country>nl</country><name>haven</name></item></root></instance><instance xmlns="http://www.w3.org/2002/xforms" id="countries"><root><item><itextId>static_instance-countries-0</itextId><name>nl</name></item><item><itextId>static_instance-countries-1</itextId><name>usa</name></item></root></instance></model>'
	}
};