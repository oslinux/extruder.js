var section = jQuery('section');
var h1 = jQuery('h1');
var view = jQuery(window);
view.hheight = (view.height() / 2);
view.hwidth = (view.width() / 2);
var scrollRange = 16;
var scrollRatio = 10;

jQuery(window).load(function() {
	section.height(jQuery(window).height() * 2);
	section.width( jQuery(window).width()  * 2);
	
	section.centerx = (section.width()  / 2);
	section.centery = (section.height() / 2);
	
	h1.hheight = h1.innerHeight() / 2;
	h1.hwidth  = h1.innerWidth()  / 2;
	h1.css( 'top', section.centery - h1.hheight);
	h1.css('left', section.centerx - h1.hwidth );
	
	jQuery('html, body').scrollTop ((section.height()/2) - view.hheight);
	jQuery('html, body').scrollLeft((section.width() /2) - view.hwidth );
	
	h1.css('textShadow','0 5px 0 #de9251, 0 20px 20px rgba(0,0,0,.7)');
});

jQuery(window).scroll(function() {
	view.lscroll = jQuery(window).scrollLeft();
	view.tscroll = jQuery(window).scrollTop();
	view.centerx = view.lscroll + view.hwidth;
	view.centery = view.tscroll + view.hheight;
	view.cvx = view.centerx - section.centerx;
	view.cvy = view.centery - section.centery;
	view.slx = view.cvx / scrollRatio;
	view.slx = (view.slx < -scrollRange) ? -scrollRange : view.slx;
	view.slx = (view.slx > scrollRange)  ? scrollRange  : view.slx;
	view.sly = view.cvy / scrollRatio;
	view.sly = (view.sly < -scrollRange) ? -scrollRange : view.sly;
	view.sly = (view.sly > scrollRange)  ? scrollRange  : view.sly; 
	section.css('background-position-x', (view.centerx - 960)*1/16);
	section.css('background-position-y', (view.centery - 600)*1/16);
	
	h1.css('textShadow',(view.slx*1/8)+'px '+(view.sly*1/8)+'px 0 hsl(28,68%,59%), '+(view.slx*2/8)+'px '+(view.sly*2/8)+'px 0 hsl(28,68%,57%), '+(view.slx*3/8)+'px '+(view.sly*3/8)+'px 0 hsl(28,68%,55%), '+(view.slx*4/8)+'px '+(view.sly*4/8)+'px 0 hsl(28,68%,53%), '+(view.slx*5/8)+'px '+(view.sly*5/8)+'px 0 hsl(28,68%,51%), '+(view.slx*6/8)+'px '+(view.sly*6/8)+'px 0 hsl(28,68%,49%), '+(view.slx*7/8)+'px '+(view.sly*7/8)+'px 0 hsl(28,68%,47%), '+view.slx+'px '+view.sly+'px 0 hsl(28,68%,45%), '+view.slx*2+'px '+view.sly*2+'px 20px rgba(0,0,0,.7)');
}); 