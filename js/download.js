(function(){
	window.onload= function(){		
		var LOCK = false,
			NEEDRESET = false;

		var arrow = document.getElementById('arrow'),
			bottom_line = document.getElementById('bottom_line'),
			cricle_bg = document.getElementById('cricle_bg'),
			cricle_fg = document.getElementById('cricle_fg'),
			check_right = document.getElementById('check_right'),
			file = document.getElementById('file');

		var btnDownload = document.getElementById('btnDownload');

		var t1=20,
			t2=40,
			t3=80,
			t4=10,
			t5=30,
			t6=16,
			t7=10,
			t8=10;

		var animation = new Ash.S([{
			dom:arrow,
			css:[{},{display:'none'}],
			attr:[{
				d:'M7.646,11.853 C7.692,11.899 7.748,11.936 7.809,11.962 C7.87,11.987 7.935,12 8,12 C8.065,12 8.13,11.987 8.191,11.962 C8.253,11.936 8.308,11.899 8.354,11.853 L12.354,7.854 C12.549,7.658 12.549,7.342 12.354,7.147 C12.158,6.951 11.842,6.951 11.647,7.147 L8.5,10.293 L8.5,1.5 C8.5,1.224 8.276,1 8,1 C7.724,1 7.5,1.224 7.5,1.5 L7.5,10.293 L4.354,7.147 C4.158,6.951 3.842,6.951 3.647,7.147 C3.451,7.342 3.451,7.658 3.647,7.854 L7.646,11.853 Z',
				transform:"translate(0,0)",
				'fill-opacity':1
			},{
				d:'M7.646,11.853 C7.692,11.899 7.748,11.936 7.809,11.962 C7.87,11.987 7.935,12 8,12 C8.065,12 8.13,11.987 8.191,11.962 C8.253,11.936 8.308,11.899 8.354,11.853 L8.62455144,7.854 C8.81955144,7.658 8.81955144,7.342 8.62455144,7.147 C8.42855144,6.951 7.695,6.951 7.5,7.147 L8.5,10.293 L8.5,1.5 C8.5,1.224 8.276,1 8,1 C7.724,1 7.5,1.224 7.5,1.5 L7.5,10.293 L8.62455144,7.147 C8.42855144,6.951 7.695,6.951 7.5,7.147 C7.304,7.342 7.304,7.658 7.5,7.854 L7.646,11.853 Z',
				transform:"translate(0,15)",
				'fill-opacity':0.12
			}],			
			time:t1,
			delay:0,
			tween:'linear'
		},{
			dom:bottom_line,
			css:[{},{display:'none'}],
			attr:[{
				d:'M1.53846154,14.0001 C1.24123077,14.0001 1,14.2241 1,14.5001 C1,14.7761 1.24123077,15.0001 1.53846154,15.0001 L14.4615385,15.0001 C14.7587692,15.0001 15,14.7761 15,14.5001 C15,14.2241 14.7587692,14.0001 14.4615385,14.0001 L1.53846154,14.0001 Z',
				transform:"translate(0,0)",
				'fill-opacity':1
			},{
				d:'M7.07692308,14 C7.03446154,14 7,14.224 7,14.5 C7,14.776 7.03446154,15 7.07692308,15 L8.92307692,15 C8.96553846,15 9,14.776 9,14.5 C9,14.224 8.96553846,14 8.92307692,14 L7.07692308,14 Z',
				transform:"translate(0,1)",
				'fill-opacity':0.12
			}],
			time:t1,
			delay:0,
			tween:'linear'
		},{
			dom:cricle_bg,
			attr:[{
				'stroke-dashoffset':'-48'
			},{
				'stroke-dashoffset':'0'
			}],
			time:t2,
			delay:t1,
			tween:'easeInOut'
		},{
			dom:cricle_fg,
			attr:[{
				'stroke-dashoffset':'-48'
			},{
				'stroke-dashoffset':'0'
			}],
			time:t3,
			delay:t1+t2,
			tween:'linear'
		},{
			dom:cricle_bg,
			attr:[{},{'stroke-dashoffset':'-48'}],
			time:0,
			delay:t1+t2+t3,
			tween:'linear'
		},{
			dom:check_right,
			css:[{opacity:0},{opacity:1}],
			time:t4,
			delay:t1+t2+t3,
			tween:'linear'
		},{
			dom:cricle_fg,
			css:[{opacity:1},{opacity:0}],
			time:t6,
			delay:t1+t2+t3+t4+t5,
			tween:'linear'		
		},{
			dom:check_right,
			css:[{opacity:1},{opacity:0}],
			time:t6,
			delay:t1+t2+t3+t4+t5,
			tween:'linear'
		},{
			dom:file,
			css:[{opacity:0},{opacity:1}],
			time:t6,
			delay:t1+t2+t3+t4+t5,
			tween:'linear'
		}],1,function(){
			LOCK = false;
		});

		var reset= function(){
			cricle_fg.setAttribute('stroke-dashoffset','-48');

			cricle_bg.setAttribute('stroke-dashoffset','-48');
			cricle_fg.style.opacity = '1';

			arrow.style.display='';
			arrow.setAttribute('d','M7.646,11.853 C7.692,11.899 7.748,11.936 7.809,11.962 C7.87,11.987 7.935,12 8,12 C8.065,12 8.13,11.987 8.191,11.962 C8.253,11.936 8.308,11.899 8.354,11.853 L12.354,7.854 C12.549,7.658 12.549,7.342 12.354,7.147 C12.158,6.951 11.842,6.951 11.647,7.147 L8.5,10.293 L8.5,1.5 C8.5,1.224 8.276,1 8,1 C7.724,1 7.5,1.224 7.5,1.5 L7.5,10.293 L4.354,7.147 C4.158,6.951 3.842,6.951 3.647,7.147 C3.451,7.342 3.451,7.658 3.647,7.854 L7.646,11.853 Z');
			arrow.setAttribute('transform','translate(0,0)');
			arrow.setAttribute('fill-opacity','1');

			bottom_line.setAttribute('d','M1.53846154,14.0001 C1.24123077,14.0001 1,14.2241 1,14.5001 C1,14.7761 1.24123077,15.0001 1.53846154,15.0001 L14.4615385,15.0001 C14.7587692,15.0001 15,14.7761 15,14.5001 C15,14.2241 14.7587692,14.0001 14.4615385,14.0001 L1.53846154,14.0001 Z');
			bottom_line.setAttribute('transform','translate(0,0)');
			bottom_line.setAttribute('fill-opacity','1');
			bottom_line.style.display='';

			check_right.style.opacity = '0';

			file.style.opacity = '0';

			NEEDRESET = false;
		};

		btnDownload.addEventListener('click',function(e){
			if(!LOCK && !NEEDRESET){
				LOCK = true;
				NEEDRESET = true;
				animation.play();
			}
			e.stopPropagation();
			return false;
		});

		window.addEventListener('click',function(e){
			if(!LOCK && NEEDRESET){
				reset();
			}
		});
		
	};
})();