/**
 * Selectbox plugin for jQuery
 * Version: 1.0.0
 * http://vermeertech.nl
 * Copyright (c) 2011 Rob Vermeer
 * http://vermeertech.nl
 * 13 Februari, 2012
 */
(function ($) {
	$.fn.selectbox = function(options) {
		var defaults = {
			callback: function(){}
		};
		var opts = $.extend(defaults, options);
		
		$('html').click(function() {
			$(".selectbox").find('ul').hide();
		});
		
		return this.each(function(){
			var $this = $(this),
				selectbox = $this.attr('id');
			$this.hide();
			$this.before('<div class="selectbox ' + selectbox + '"><span>' + $this.children().first().text() + '</span></div>');
			$("." + selectbox).data('sb', selectbox).append('<ul></ul>');
			$($this).find('option').each( function() {
				$("." + selectbox + ' ul').append('<li>' + $(this).text() + '</li>').hide();
			});
			
			$($this).find('option:selected').each( function() {
				$("." + selectbox + ' span').text($(this).text());
			});

			
			$("." + selectbox).click(function(e) {
				$(this).find('ul').toggle();
				e.stopPropagation();
			});
			
			$("." + selectbox + ' li').on('click', function() {
				var $this = $(this),
					sb_id = $this.parent().parent().data('sb'),
					this_val = $this.html();
				$this.parent().parent().find('span').text(this_val);
				$('#' + sb_id + ' option[selected]').removeAttr("selected");
				$('#' + sb_id).children().filter(function() {
					return $(this).text() == this_val;
				}).attr("selected", "selected");
				opts.callback.call(undefined, $('#' + sb_id + ' option[selected]'));
			});
		});
	};
})(jQuery);
