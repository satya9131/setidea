var i = 0;
	function show() {
		if(!i){
			document.querySelector('.T-body').style.display=' block';
			document.querySelector('.T-head').style.borderBottom='1px solid #53A600';
			document.querySelector('#blink').innerHTML=' Hide';
			
			i= 1;
			
		}else{
			document.querySelector('.T-body').style.display='none';
			document.querySelector('#blink').innerHTML=' Show';
			document.querySelector('.T-head').style.borderBottom='none';
			
			i= 0;
			
		}
		}
