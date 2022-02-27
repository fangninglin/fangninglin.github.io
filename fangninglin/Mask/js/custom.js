// JavaScript Document

var options = {
		offset: 200,
		offsetSide: 'top',
		classes: {
			clone:   'header--clone',
			stick:   'header--stick',
			unstick: 'header--unstick'
		}
	};
	var header = new Headhesive('#header', options);
	$("#header.header--clone").attr('id', 'header2');
