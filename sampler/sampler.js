
const SMPL_VOICE_NUM = 4;
const SAMPLER_INIT_VOL = 0.5;
let smpl_voices = new Array(SMPL_VOICE_NUM);

//FIleNames
let files = [

  //0
  'assets/test.mp3' ,

  //1
  'assets/test2.mp3' ,

  //2
  'assets/test.mp3' ,

  //3
  'assets/test2.mp3' ,

]


function samplerPreload(){

  //Write code for init each smpl_voices
  for(let i=0; i<smpl_voices.length; i++){
    soundFormats('mp3', 'ogg');
    smpl_voices[i] = loadSound( files[i] );
    // smpl_voices[i] = loadSound('assets/test.mp3');
  }

}



function samplerSetup(){

  //Write code for init vols of each smpl_voices
  for(let i=0; i<smpl_voices.length; i++){
    smpl_voices[i].setVolume(SAMPLER_INIT_VOL);
  }  
  
}



function samplerSetVol(voice_id, fval){

  if(sampler_voice_check(voice_id) == 1)return;
  smpl_voices[voice_id].setVolume(fval);

}



function samplerPlay(voice_id){
  if(sampler_voice_check(voice_id) == 1)return;
  print(voice_id);
  smpl_voices[voice_id].play();

}


function samplerStop(voice_id){
  if(sampler_voice_check(voice_id)==1)return;
  smpl_voices[voice_id].stop();

}


function sampler_voice_check(voice_id){

  if(voice_id < SMPL_VOICE_NUM){

    return 0;

  }else{

    print('the voice_id' , voice_id, 'was exceeded.');
    return 1;

  }


}