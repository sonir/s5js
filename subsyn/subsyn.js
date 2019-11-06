
const SS_VOICE_NUM = 8;
let ss_voices = new Array(SS_VOICE_NUM);
let freqs = new Array(SS_VOICE_NUM);
let qs = new Array(SS_VOICE_NUM);

function subsyn_setup(){

  //Write code for init each ss_voices
  for(let i=0; i<ss_voices.length; i++){

    ss_voices[i] = new SubVoice(440, 150, 0.75);
    freqs[i] = 440*(i+1);
    qs[i] = 75;

  }

}



function subsyn_start(voice_id){
  if(subsyn_voice_check(voice_id) == 1)return;
  ss_voices[voice_id].start(freqs[voice_id] , qs[voice_id]);

}


function subsyn_stop(voice_id){
  if(subsyn_voice_check(voice_id)==1)return;
  ss_voices[voice_id].stop();

}


function subsyn_voice_check(voice_id){

  if(voice_id < SS_VOICE_NUM){

    return 0;

  }else{

    print('the voice_id' , voice_id, 'was exceeded.');
    return 1;

  }


}