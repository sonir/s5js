
const SS_VOICE_NUM = 4;
const SAMPLER_INIT_VOL = 0.5;
let voices = new Array(SS_VOICE_NUM);

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

  //Write code for init each voices
  for(let i=0; i<voices.length; i++){
    soundFormats('mp3', 'ogg');
    voices[i] = loadSound( files[i] );
    // voices[i] = loadSound('assets/test.mp3');
  }

}



function samplerSetup(){

  //Write code for init vols of each voices
  for(let i=0; i<voices.length; i++){
    voices[i].setVolume(SAMPLER_INIT_VOL);
  }  
  
}



function samplerSetVol(voice_id, fval){

  if(sampler_voice_check(voice_id) == 1)return;
  voices[voice_id].setVolume(fval);

}



function samplerPlay(voice_id){
  if(sampler_voice_check(voice_id) == 1)return;
  print(voice_id);
  voices[voice_id].play();

}


function samplerStop(voice_id){
  if(sampler_voice_check(voice_id)==1)return;
  voices[voice_id].stop();

}


function sampler_voice_check(voice_id){

  if(voice_id < SS_VOICE_NUM){

    return 0;

  }else{

    print('the voice_id' , voice_id, 'was exceeded.');
    return 1;

  }


}