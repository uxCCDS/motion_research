(function(){
	window.onload= function(){
		var ball = document.getElementsByTagName('A'),
			rate = 5;

		var createAsh = function(dom,t,p,tween){
			return [{
				dom:dom,
				css:[{
					'background': 'radial-gradient(rgb(255,80,60) '+ p[0] +'%, rgb(255,80,60))'
				},{
					'background': 'radial-gradient(rgb(51,51,51) '+ p[1] +'%, rgb(255,80,60))'
				}],
				time:t[0]*rate,
				tween:tween[0]
			},{
				dom:dom,
				css:[{
					'background': 'radial-gradient(rgb(51,51,51) '+ p[1] +'%, rgb(255,80,60))'
				},{
					'background': 'radial-gradient(rgb(51,51,51) '+ p[2] +'%, rgb(255,80,60))'
				}],
				time:t[1]*rate,
				delay:(t[0])*rate,
				tween:tween[1]
			},{
				dom:dom,
				css:[{
					'background': 'radial-gradient(rgb(51,51,51) '+ p[2] +'%, rgb(255,80,60))'
				},{
					'background': 'radial-gradient(rgb(51,51,51) '+ p[3] +'%, rgb(51,51,51))'
				}],
				time:t[2]*rate,
				delay:(t[0]+t[1])*rate,
				tween:tween[2]
			}];
		};

		var a1 = createAsh(ball[0],
			[10,10,10],
			[10,30,80,30],
			['easeInInt','easeOutInt','linearInt']),
		a2 = createAsh(ball[1],
			[10,10,10],
			[10,80,50,30],
			['easeInOutInt','easeInOutInt','easeInOutInt']),
		a3 = createAsh(ball[2],
			[10,10,10],
			[10,30,0,30],
			['linearInt','linearInt','linearInt']),
		a4 = createAsh(ball[3],
			[10,10,10],
			[10,20,30,20],
			['easeInOutInt','easeInOutInt','easeInOutInt']),
		a5 = createAsh(ball[4],
			[10,10,10],
			[10,80,10,80],
			['easeOutInt','linearInt','linearInt']);

		var arr = a1.concat(a2).concat(a3).concat(a4).concat(a5).concat([{
			dom:ball,
			css:[{'background':'#FF503C'},{}],
			time:40,
			delay:30*rate+40
		}]);

		var animation = new Ash.S(arr,1,function(){});
		animation.repeat(Infinity);
	};
})();