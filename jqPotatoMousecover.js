(function($) {	
	var mouse;
	$.fn.potatoMouse = function(callerMouse) {
		mouse = $.extend({
			div_Element:null,
			speed: 200
		},callerMouse || {});

		$(mouse.div_Element).each(function(index) {
			$(mouse.div_Element).eq(index).bind("mouseenter mouseleave",function(e) {
				var w = $(this).width();
				var h = $(this).height();
				var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
				var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
				var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;//0,1,2,3 = 上,右,下,左
				//var dirName = new Array('上方','右侧','下方','左侧');
				if(e.type == 'mouseenter'){
					switch (direction) {
						case 0:
						$(".cover").eq(index).css("left","0px").css("top","-100%");
						$(".cover").eq(index).stop(false,true).animate({"top":"0px"},mouse.speed);
						break;
						case 1:
						$(".cover").eq(index).css("top","0px").css("left","100%");
						$(".cover").eq(index).stop(false,true).animate({"left":"0px"},mouse.speed);
						break;
						case 2:
						$(".cover").eq(index).css("left","0px").css("top","100%");
						$(".cover").eq(index).stop(false,true).animate({"top":"0px"},mouse.speed);
						break
						case 3:
						$(".cover").eq(index).css("top","0px").css("left","-100%");
						$(".cover").eq(index).stop(false,true).animate({"left":"0px"},mouse.speed);
						break;
					}					
				}else{
					switch (direction) {
						case 0:
						$(".cover").eq(index).stop(false,true).animate({"top":"-100%"},mouse.speed);
						break;
						case 1:
						$(".cover").eq(index).stop(false,true).animate({"left":"100%"},mouse.speed);
						break;
						case 2:
						$(".cover").eq(index).stop(false,true).animate({"top":"100%"},mouse.speed);
						break
						case 3:
						$(".cover").eq(index).stop(false,true).animate({"left":"-100%"},mouse.speed);
						break;
					}
				}
			});
		});
	}
})(jQuery); 
