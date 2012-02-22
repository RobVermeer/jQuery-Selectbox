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
		var selectbox = 1;
		
		$('html').click(function() {
			$(".selectbox").find('ul').hide();
		});
		
		return this.each(function(){
			var $this = $(this);
			$this.hide();
			$this.attr('id', 'sb_' + selectbox);
			$this.before('<div class="selectbox sb_' + selectbox + '"><span>' + $this.children().first().text() + '</span></div>');
			$(".sb_" + selectbox).data('sb', selectbox).append('<ul></ul>');
			$($this).find('option').each( function() {
				$(".sb_" + selectbox + ' ul').append('<li>' + $(this).text() + '</li>').hide();
			});
			
			$($this).find('option:selected').each( function() {
				$(".sb_" + selectbox + ' span').text($(this).text());
			});

			
			$(".sb_" + selectbox).click(function(e) {
				$(this).find('ul').toggle();
				e.stopPropagation();
			});
			
			$(".sb_" + selectbox + ' li').click(function() {
				var $this = $(this);
				var sb_id = $this.parent().parent().data('sb');
				var this_val = $this.html();
				$this.parent().parent().find('span').text(this_val);
				$('#sb_' + sb_id + ' option[selected]').removeAttr("selected");
				$('#sb_' + sb_id).children().filter(function() {
					return $(this).text() == this_val;
				}).attr("selected", "selected");
				opts.callback.call(this);
			});
			selectbox++;
		});
	};
})(jQuery);
