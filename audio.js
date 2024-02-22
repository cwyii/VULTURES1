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
      type: 'audio/mpeg'
    },
    {
      src: '03-paid.mp3',
      type: 'audio/mpeg'
    },
    {
      src: '04-talking.mp3',
      type: 'audio/mpeg'
    },
    {
      src: '05-back-to-me.mp3',
      type: 'audio/mpeg'
    },
    {
      src: '06-hoodrat.mp3',
      type: 'audio/mpeg'
    },
    {
      src: '07-do-it.mp3',
      type: 'audio/mpeg'
    },
    {
      src: '08-paperwork.mp3',
      type: 'audio/mpeg'
    },
    {
      src: '09-burn.mp3',
      type: 'audio/mpeg'
    },
    {
      src: '10-fuk-sumn.mp3',
      type: 'audio/mpeg'
    },
    {
      src: '11-vultures.mp3',
      type: 'audio/mpeg'
    },
    {
      src: '12-carnival.mp3',
      type: 'audio/mpeg'
    },
    {
      src: '13-beg-forgiveness.mp3',
      type: 'audio/mpeg'
    },
     {
      src: '14-good-(don't-die).mp3',
      type: 'audio/mpeg'
    },
     {
      src: '15-problematic.mp3',
      type: 'audio/mpeg'
    },
     {
      src: '16-king.mp3',
      type: 'audio/mpeg'
    },
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
