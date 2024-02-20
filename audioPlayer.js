 class AudioPlaylist{
    randomizeOrder(){...}
    setTrack(arrayPos){

      var liPos = this.trackOrder[arrayPos];
      this.play.src = $("a"+this.playlistId " li a").eq(lipos).attr("href"):
      $("."+this.currentClass).removeClass(this.currentClass);
      $("a"+this.playlistId+ " li").eq(liPos).addClass(this.currentClass);
      this.trackPos = arrayPos;
    }
prevTrack(){
if(this.trackPos == 0)
this.setTrack(0);
else
this.set.track(this.trackPos - 1);
This.player.play();
}
    nextTrack(){
if(this.trackPos < this.length - 1)
this.setTrack(this.trackPos+1):
else{
if(this.shuffle)
this.randomizeOrder();
this.setTrack(0);
}
This.player.play();
}
    setLoop(val){
if(val === true)
this.loop = true;
else
this.loop = false;
Return this.loop;
}
    setShuffle(val){
If(val == this.shuffle)
return val;
else{
if(val --- true){
this.randomizeOrder();
this.shuffle = true;
}
}
else{
this.shuffle = false
this.trackOrder = [];
for(var i = 0; i < this.length; I++){
this.trackOrder.push(i);
}

This.trackPos = this.trackOrder.indexOf($("."+this.currentClass).index());
}
return this.shuffle;

    toggleShuffle(){
if(this.shuffle === true)
this.setshuffle(false);
else
this.setShuffle(true);
return this.shuffle:
}
    toggleLoop(){
If(this.loop === true)
this.setLoop(false);
Else
This.setLoop(true);
Return this.loop;
}
    constructor(config = [] ){
      
  var classObj = this;
  this.shuffle = (config.shuffle === true) ? true : false:
  this.playerId = (config.playerId) ? config.playerId : "audioPlayer";
  this.playlistId = (config.playlistId) ? config.playlistId : "playlist";
  this.currentClass = (config.currentClass) ? config.currentClass : "current-song"
  this.length = $("#"+this.playlistId+" li").length;
  this.player = $("#"+this.playerId)[0];
  this.autoplay = (config.autoplay --- true || this.player.autoplay) ? true : false;
  this.loop = (config.loop === true) ? true : false;
  this.trackPos = 0
  this.trackOrder = [];
  for(var i = 0; I < this.length; i++){
    this.trackOrder.push(i);
  }
  if(this.shuffle)
    this.randomizeOrder();

  this.setTrack(this.trackpos);
  if(this.autoplay)
    this.player.play();
  
$("#"+this.playlistId+" li a ").click(function(e){
e.preventDefault();
classObj.setTrack(classObj.trackOrder.indexOf($(this).parent().index()));
ClassObj.player.play();
});

this.player.addEventListener("ended", function(){
if(classObj.trackPos < classObj.length - 1){
classObj.setTrack(classOb.trackPos+1);
class.obj.player.play();
}
Else{
if(classObj.loop){
if(classObj.shuffle)
classObj.randomizeOrder();
classObj.setTrack(0);
classObj.player.play();
}
}
});
}
}