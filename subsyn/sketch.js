
var cl = null;
var count = 0;
// var subVoice = new SubVoice(440, 150, 0.5);


function test(){

  // subVoice.start(880,150);
  // subsyn_start(0);
  
  rst = cal_pos(45, 1.0);
  if(Math.round(rst.x*100)/100 != 0.71) print("cal_pos45.x::ERR" , Math.round(rst.x*100)/100);
  if(Math.round(rst.y*100)/100 != 0.71) print("cal_pos45.y::ERR" , Math.round(rst.y*100)/100);

  rst = cal_pos(180, 1.0);
  if(Math.round(rst.x*100)/100 != 0.0) print("cal_pos45.x::ERR" , Math.round(rst.x*100)/100);
  if(Math.round(rst.y*100)/100 != -1) print("cal_pos45.y::ERR" , Math.round(rst.y*100)/100);

  rst = cal_pos(225, 1.0);
  if(Math.round(rst.x*100)/100 != -0.71) print("cal_pos45.x::ERR" , Math.round(rst.x*100)/100);
  if(Math.round(rst.y*100)/100 != -0.71) print("cal_pos45.y::ERR" , Math.round(rst.y*100)/100);

  rst = cal_pos(270, 2.0);
  if(Math.round(rst.x*100)/100 != -2.0) print("cal_pos45.x::ERR" , Math.round(rst.x*100)/100);
  if(Math.round(rst.y*100)/100 != -0.0) print("cal_pos45.y::ERR" , Math.round(rst.y*100)/100);

  rst = cal_pos(315, 3.0);
  if(Math.round(rst.x*100)/100 != -2.12) print("cal_pos45.x::ERR" , Math.round(rst.x*100)/100);
  if(Math.round(rst.y*100)/100 != 2.12) print("cal_pos45.y::ERR" , Math.round(rst.y*100)/100);


}


function preload() { //SOUND Loading


}



function setup() {

  subsyn_setup();


  //Filter Setup

  // filter = new p5.BandPass();
  // noise = new p5.Noise();
  // noise.disconnect();
  // noise.connect(filter);
  // noise.start();
  // filter.freq(440);
  // filter.res(100);


  cl = color(255 , 255, 255);

    scSetupAuto ();
    // scSetupSemiAuto(SC_SIZE.IPHONE_X);
  test();

}



function draw() {

  
  background(20);
    checkScreen(true);

    // nofill();
    strokeWeight(1);
    stroke(cl);
    circle(cal_x(0.5), cal_y(0.5), 50);

    //Left/Top corner
    stroke(color( 'red' ));
    circle(cal_x(0.0), cal_y(0.0), 50);

    //Right/Top corner
    stroke(color( 'green' ));
    circle(cal_x(1.0), cal_y(0.0), 50);

    //Left/Bottom corner
    stroke(color( 'blue' ));
    circle(cal_x(0.0), cal_y(1.0), 50);

    //Left corner
    stroke(color( 'yellow' ));
    circle(cal_x(1.0), cal_y(1.0), 50);


    
}


function touchEnded() {

  print('touch');
  // noise.stop();
  // subVoice.stop();
  if(count!=0)subsyn_stop(count);
  subsyn_start(count);
  count+=1;
  
}



function deviceTurned(){

  // print("turned!!");
  setTimeout(scSetupAuto, 3000);
  // scSetupAuto();
  cl = color(random(0,255) , random(0,255) , random(0,255));
  // color = 255;

}




//////////////////////////////////////
