var mySwiper = new Swiper('#swiper-container1',{
      direction:'vertical',
      loop:true,
      onSlideChangeEnd: function(swiper){
      // alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
    	var slideAry=swiper.slides;
    	var curIn=swiper.activeIndex;
    	var total = slideAry.length;
    	var targetId="page";
    	switch(curIn){
    		case 0:
                targetId+=total - 2;
    		break;
    		case (total-1):
                targetId+=1;
    		break;
    		default:
                targetId+=curIn;
            break;

    	}
    	[].forEach.call(slideAry, function(item,index){
    		if(curIn===index){
    			item.id = targetId;
    			return;
    		}
    		item.id=null;
    	});   	
    }
});

(function(){
    var musicMenu=document.getElementById('musicMenu'),
        musicAudio=document.getElementById('musicAudio');

    musicMenu.addEventListener('click', function(){
        if(musicAudio.paused){
            musicAudio.play();
            musicMenu.className='music move';
            return;
        }
        musicAudio.pause();
        musicMenu.className='music';
    }, false);
      
    function controlMusic(){ 
        musicAudio.volume=0.3;
        musicAudio.play();
        musicAudio.addEventListener('canplay', function(){
            musicMenu.style.display="block";
            musicMenu.className="music move";
        }, false);
    }
    window.setTimeout(controlMusic,1000);

})();