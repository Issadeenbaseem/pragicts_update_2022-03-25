!function(t){function n(n,e,i,r){var a=n.text(),o=a.split(e),c="";o.length&&(t(o).each(function(t,n){c+='<span class="'+i+(t+1)+'" aria-hidden="true">'+n+"</span>"+r}),n.attr("aria-label",a).empty().append(c))}var e={init:function(){return this.each(function(){n(t(this),"","char","")})},words:function(){return this.each(function(){n(t(this)," ","word"," ")})},lines:function(){return this.each(function(){var e="eefec303079ad17405c889e092e105b0";n(t(this).children("br").replaceWith(e).end(),e,"line","")})}};t.fn.lettering=function(n){return n&&e[n]?e[n].apply(this,[].slice.call(arguments,1)):"letters"!==n&&n?(t.error("Method "+n+" does not exist on jQuery.lettering"),this):e.init.apply(this,[].slice.call(arguments,0))}}(jQuery),function(t){t.fn.fitText=function(n,e){var i=n||1,r=t.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},e);return this.each(function(){var n=t(this),e=function(){n.css("font-size",Math.max(Math.min(n.width()/(10*i),parseFloat(r.maxFontSize)),parseFloat(r.minFontSize)))};e(),t(window).on("resize.fittext orientationchange.fittext",e)})}}(jQuery);
