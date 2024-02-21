<div id='audio'></div>
const audio = {
  controls: true,
  source: [
    {
      src: 'https://testname.com/Track03.mp3',
      type: 'audio/mpeg'
    },
    {
      src: 'https://testname.com/Track03.ogg',
      type: 'audio/ogg'
    }
  ]
}
const theDiv = document.querySelector("#audio");
audio.source.forEach(as=>{
  let newAudioElement = document.createElement('audio');
  newAudioElement.src = as.src;
  newAudioElement.type = as.type;
  newAudioElement.controls = 'controls';
  theDiv.appendChild(newAudioElement);
})
