(function(){
	window.onload = function(){
		var LOCK = false,
			PAUSE  = true;

		var _cl = 100,
			_d = 16,
			_leftBallLeft = _cl-_d*0.75,
			_rightBallLeft = _cl+_d*0.75;

		var btnRecord = document.getElementById('btnRecord'),
			btnPause = document.getElementById('btnPause'),
			btnStop = document.getElementById('btnStop'),
			pathPause = document.getElementById('pathPause'),
			btnTwins = [btnPause,btnStop],
			t=12;

		var animationRecord = new Ash.S([{
			dom:btnRecord,
			css:[{
				'transform': 'scale(1)'
			},{
				'transform': 'scale(0.7)',
				'display':'none'
			}],
			time:t,
			delay:0,
			tween:'easeInOut'
		},{
			dom:btnPause,
			css:[{
				'left':'100px'
			},{
				'left':_leftBallLeft+'px'
			}],
			time:t,
			delay:t,
			tween:'easeOut'
		},{
			dom:btnStop,
			css:[{
				'left':'100px'
			},{
				'left':_rightBallLeft+'px'
			}],
			time:t,
			delay:t,
			tween:'easeOut'
		},{
			dom:btnTwins,
			css:[{
				'transform': 'scale(0.7)',
				'display':''
			},{
				'transform': 'scale(1)',
			}],
			time:t,
			delay:t,
			tween:'easeInOut'
		},{
			dom:btnTwins,
			css:[{
				'background': 'radial-gradient(rgb(255,80,60) 90%, rgb(255,80,60))'
			},{
				'background': 'radial-gradient(rgb(51,51,51) 80%, rgb(255,80,60))'
			}],
			time:t*0.5,
			delay:t,
			tween:'easeInOutInt'
		},{
			dom:btnTwins,
			css:[{
				'background': 'radial-gradient(rgb(51,51,51) 80%,rgb(255,255,60))'
			},{
				'background': 'radial-gradient(rgb(51,51,51) 10%, rgb(51,51,51))'
			}],
			time:t*0.5,
			delay:t*1.5,
			tween:'easeInOutInt'
		}],1,function(){
			LOCK = false;
			PAUSE =true;
		});

		var animationStop = new Ash.S([{
			dom:btnRecord,
			css:[{
				'transform': 'scale(0.8)',
				'display':''
			},{
				'transform': 'scale(1)'
			}],
			time:t,
			delay:t,
			tween:'easeOut'
		},{
			dom:btnPause,
			css:[{
				'left':_leftBallLeft+'px'
			},{
				'left':'100px'
			}],
			time:t,
			delay:0,
			tween:'easeIn'
		},{
			dom:btnStop,
			css:[{
				'left':_rightBallLeft+'px'
			},{
				'left':'100px'
			}],
			time:t,
			delay:0,
			tween:'easeIn'
		},{
			dom:btnTwins,
			css:[{
				'transform': 'scale(1)',
			},{
				'transform': 'scale(0.8)',
				display:'none'
			}],
			time:t,
			delay:0,
			tween:'easeInOut'
		},{
			dom:btnRecord,
			css:[{
				'background': 'radial-gradient(rgb(51,51,51) 10%, rgb(51,51,51))'
			},{
				'background': 'radial-gradient(rgb(255,80,60) 90%, rgb(255,80,60))'
			}],
			time:t,
			delay:t,
			tween:'easeInOutInt'
		}],1,function(){
			LOCK = false;
			PAUSE =true;
		});

		btnRecord.addEventListener('click',function(e){
			if(!LOCK){
				LOCK = true;
				animationRecord.play();
			}
			e.stopPropagation();
			return false;
		});

		btnStop.addEventListener('click',function(e){
			if(!LOCK){
				LOCK = true;
				animationStop.play();
			}
			e.stopPropagation();
			return false;
		});

		var animationPause = new Ash.S([{
			dom:pathPause,
			attr:[{
				d:''
			},{
				d:''
			}],
			time:20
		}],1,function(){
			PAUSE =true;
			LOCK = false;
		});

		var animationPlay =new Ash.S([{
			dom:pathPause,
			attr:[{
				d:''
			},{
				d:''	
			}],
			time:20
		}],1,function(){
			PAUSE =false;
			LOCK = false;
		});

		/*
		pathPause.addEventListener('click',function(e){
			if(!LOCK){
				LOCK=true;
				if(PAUSE){
					animationPlay.play();
				}else{
					animationPause.play();
				}
			}
			e.stopPropagation();
			return false;
		});
		*/
	};
})();

/*
var animationRecord = new Ash.S([{
			dom:btnRecord,
			css:[{
				'background': 'radial-gradient(rgb(255,80,60) 10%, rgb(255,80,60))'
			},{
				'background': 'radial-gradient(rgb(60,60,60) 50%, rgb(255,80,60))'
			}],
			time:t*2,
			delay:0,
			tween:'easeInOutInt'
		},{
			dom:btnRecord,
			css:[{
				'background': 'radial-gradient(rgb(60,60,60) 50%, rgb(255,80,60))'
			},{
				'background': 'radial-gradient(rgb(60,60,60) 30%, rgb(51,51,51))'
			}],
			time:t*0.5,
			delay:t*2,
			tween:'easeInOutInt'
		},{
			dom:btnRecord,
			css:[{
				'background': 'radial-gradient(rgb(60,60,60) 30%,rgb(51,51,51))'
			},{
				'background': 'radial-gradient(rgb(51,51,51) 0%, rgb(51,51,51))'
			}],
			time:t*0.5,
			delay:t*2.5,
			tween:'easeInOutInt'
		},{
			dom:btnRecord,
			css:[{
				'transform': 'scale(1)'
			},{
				'transform': 'scale(0.8)'
			}],
			time:t*1.5,
			delay:0,
			tween:'easeInOut'
		},{
			dom:btnRecord,
			css:[{
				'transform': 'scale(0.8)'
			},{
				'transform': 'scale(1)'
			}],
			time:t*1.5,
			delay:t*1.5,
			tween:'easeInOut'
		}],1,function(){
			LOCK = false;
		});
*/