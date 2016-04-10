$(window).load(function(){	
    
    // ieCheck
    var ie = false;
    var aniButtonDuration = 700;
    if($.browser.msie && $.browser.version < 9){
        ie = true;
        aniButtonDuration = 0;
    }
	
    // resize event
	var _content = $('#content');
    $(window).resize(function()
    {
        resizeContent();
    });
    
    function resizeContent()
    {
        var window_H = $(window).height();
        var _content_H = 467;
        
        if (window_H > 900) {
            var newY = 387 + ((window_H - 900)/2);
		     _content.css({top:newY});
		} else {
		     _content.css({top:'347px'});
		}
    }
    
    resizeContent();
    
    // bg 
    $('#bgStretch').bgStretch({
    })
    
    // scroll
    $('.scroll_1').cScroll({
		duration:700,
		step:100,
		trackCl:'track',
		shuttleCl:'shuttle_1',
	})
	$('.scroll_2').cScroll({
		duration:700,
		step:100,
		trackCl:'track',
		shuttleCl:'shuttle_2',
	})
    $('.scroll_3').cScroll({
		duration:700,
		step:100,
		trackCl:'track',
		shuttleCl:'shuttle_3',
	})
    $('.scroll_4').cScroll({
		duration:700,
		step:100,
		trackCl:'track',
		shuttleCl:'shuttle_4',
	})
    $('.scroll_5').cScroll({
		duration:700,
		step:100,
		trackCl:'track',
		shuttleCl:'shuttle_5',
	})
    
    $('.rm1, .rm2, .rm3, .rm4, .rm5, .btns a').sprites({
		method:'gStretch',
        easing:'easeOutCubic',
		hover:true
	})
    
    // hover
    $('#picOver a, #picOver1 a, #picOver2 a, #picOver3 a').css({opacity:0}).hover(function()
    {
        $(this).stop().animate({opacity:1}, aniButtonDuration/2,'easeOutCubic')					   
    }, function(){
    	$(this).stop().animate({opacity:0}, aniButtonDuration/2,'easeOutCubic')						   
    })
         
     //content switch
    $('ul#menu').superfish({
          delay:       700,
          animation:   {height:'show'},
          speed:       700,
          autoArrows:  false,
          dropShadows: false
    });

	var content=$('#content'),
	nav=$('.menu');
	nav.navs({
		useHash:true,
		hoverIn:function(li){
			$('>a span',li).stop().animate({opacity:1},aniButtonDuration,'easeOutCubic');
            if (!li.hasClass('sfHover')) {
                if(!ie){
                    $('>a b',li).stop().animate({scale:1.13},220,'easeInSine', function(){
                        $(this).animate({scale:1},300,'easeOutCubic');
                    })   
                }
            }
		},
		hoverOut:function(li){
			if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
				$('>a span',li).stop().animate({opacity:0},(aniButtonDuration/2),'easeOutCubic');
                if(!ie){
                    $('>a b',li).stop().animate({scale:1},300,'easeOutCubic');  
                }
			}
		},
		hover:true
	})
	nav.navs(function(n, _){
		content.cont_sw(n);
	})
	content.cont_sw({
		showFu:function()
        {
            var _=this
            
            if(_.prev > -1){
                aniDelay = 350;
            }else{
                aniDelay = 500;
                $('header').animate({top:'0px'}, 900,'easeInOutCubic');
                $('#logo').animate({top:'-250px'}, 400,'easeInCubic', function(){
                    $(this).css({margin:'0', width:'367px', height:'180px', backgroundImage:'url(images/logo_2.png)'}).animate({top:'0px'}, 500, 'easeOutCubic');
                });
                $('.menu').animate({top:'100px'}, 900,'easeInOutCubic');
            }
             var hidePosition = $(window).height();
             if(hidePosition > 1000){
                hidePosition -= 400;
             } else {
                hidePosition = 520;
             }                   
		    _.next.css({top:hidePosition, display:'block', zIndex:2}).stop().delay(aniDelay).animate({top:'0px'}, 900,'easeOutBack');	
		},
		hideFu:function()
        {
            var _=this
            
            var hidePosition = $(window).height();
            if(hidePosition > 1000){
                hidePosition -= 400;
            } else {
                hidePosition = 520;
            }      
		    _.li.css({zIndex:3}).stop().animate({top:hidePosition}, 500,'easeInCubic', function(){
                $(this).css({display:'none'});
            });                       
		},
		preFu:function()
        {
			var _=this;

			_.li.css({display:'none'});
		}
	})
	
})