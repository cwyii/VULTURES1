        <li class="current-song">
        function audioPlayer(){
            var currentSong = 0;
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
                
        $("#audioPlayer")[0].addEventListener("ended", function(){
               currentSong++;
                if(currentSong == $("#playlist li a").length)
                    currentSong = 0;
                $("#playlist li").removeClass("current-song");
                $("#playlist li:eq("+currentSong+")").addClass("current-song");
                $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
                $("#audioPlayer")[0].play();
            });
            
let playlist = [
    '01-stars.mp3',
    '02-key-to-my-life.mp3',
    '03-paid.mp3',
    '04-talking.mp3',
    '05-back-to-me.mp3',
        '06-hoodrat.mp3',
        '07-do-it.mp3',
        '08-paperwork.mp3',
        '09-burn.mp3',
        '10-fuk0-sumn.mp3',
        '11-vultures.mp3',
        '12-carinval.mp3',
        '13-beg-forgiveness.mp3',
        '14-good-dont-die.mp3',
        '15-problematic.mp3',
        '16-king.mp3',
];
        }
