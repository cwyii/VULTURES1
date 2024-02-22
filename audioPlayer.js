function audioPlayer(){
            var currentSong = 1;
            $("#audioPlayer")[0].src = $("#playlist li a")[0];
            $("#audioPlayer")[0].play();
            $("#playlist li a").click(function(e){
               e.preventDefault(); 
               $("#audioPlayer")[0].src = this;
               $("#audioPlayer")[0].play();
               $("#playlist li").removeClass("current-song");
                currentSong = $(this).parent().index();
                $(this).parent().addClass("current-song");
            });
        
        audio[0].addEventListener('ended',function(e){

    if(current == len){
        current = 0;
        link = playlist.find('a')[0];
    }else{
        link = playlist.find('a')[current];    
        current++; // <-- Increment after the check
    }
    run($(link),audio[0]);
});
        }