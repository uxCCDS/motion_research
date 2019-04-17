window.onload=function() {
	var b1 = document.getElementById('b1'),
		b2 = document.getElementById('b2'),
		b3 = document.getElementById('b3'),
		b4 = document.getElementById('b4'),
		bArr= [b1,b2,b3,b4],
		avatar = document.getElementById('avatar');

	var step = 10,
		arr=[],
		t1=10,
		t12=20,
		t2=60,
		delay=0,
		scale=1,
		i=0,
		l = bArr.length;

	for(;i<l;i++){
		delay = i * step;
		scale = (l-i)*0.1+1;
		arr.push({
			dom:bArr[i],
			css:[{opacity:0},{opacity:1}],
			time:t1,
			tween:'easeIn',
			delay:delay
		});
		arr.push({
			dom:bArr[i],
			css:[{transform: 'scale(1)'},{transform: 'scale('+scale+')'}],
			time:t2,
			delay:delay
		});
		arr.push({
			dom:bArr[i],
			css:[{opacity:1},{opacity:0}],
			tween:'easeIn',
			time:t12,
			delay:(delay+t2-t12)>>0
		});
	}
	var dl = step,
		t3 = 50,
		stop = 10;
	arr.push({
		dom:avatar,
		css:[{transform: 'scale(1)'},{transform: 'scale(1.1)'}],
		time:t3,
		delay:dl,
		tween:'easeOut'
	});
	arr.push({
		dom:avatar,
		css:[{transform: 'scale(1.1)'},{transform: 'scale(1)'}],
		time:t3,
		delay:dl+t3,
		tween:'easeInOut'
	});

	var a1 = new Ash.S(arr,1,function(){

	});
	a1.repeat(Infinity);
	// body...
}