<div id='audio'></div>
const audio = {
  controls: true,
  source: [
    {
      src: '01-stars.mp3',
      type: 'audio/mpeg'
    },
    {
      src: '02-keys-to-my-life.mp3',
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
