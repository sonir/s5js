var wd = 0;
var ht = 0;
// const NODE_SIZE = 80;


var troubled = false;
touched = false;

function test(){



}



function preload() { //SOUND Loading

  sample = loadSound('assets/bg.mp3');

  if(INIT_AGENTS==false && INIT_AGENTS_CONFIRMATION==false){
    //
    store.loadAgents();

  } //If when init, don't read

}



function setup() {

  // scSetupAuto ();
  scSetupSemiAuto(SC_SIZE.IPHONE_X);

  agmInit();
  test();

}



function draw() {

  background(20);

  stroke(color('purple'));
  circle(374, 0, 100);
  stroke(color('lightblue'));
  circle(cal_x(1.0), 0, 90);


  if(troubled != true){

    checkScreen(true);
    agmUpdate();

    agmStateCheck();

  }else{

    //If eccor occured in test, display yellow
    background(255,255,0);
    print("ERR :: Troubled !!")

  }

}


function touchEnded() {

  print('touch');
  let tmp =  new Agent(agents.length);
  tmp.resetNodes();
  tmp.nodes[0] = createVector(1.0,1.0);
  tmp.nodes[1] = createVector(1.0,-1.0);
  tmp.nodes[2] = createVector(-1.0,-1.0);
  tmp.nodes[3] = createVector(-1.0,1.0);
  tmp.initNodes();
  tmp.createEdge();

  agents.push(tmp);

  store.saveAgents();

}



function drawAgent(e){

  let ag = e.ag;

  push();
  ////////////////////////

  translate( cal_x(ag.position.x) , cal_y(ag.position.y) );

  noFill();
  stroke(ag.color);
  // square(cal_x(0.0)-(ag.size*0.5), cal_y(0.0)-(ag.size*0.5), ag.size);
  circle(cal_x(0.0), cal_y(0.0), ag.size*850);
  // //Draw View
  circle(cal_x(0.0), cal_y(0.0), wd*ag.view*AG_VIEW_MOD);
  text(str(ag.state), 0.0, 0.0);

  ////////////////////////
  pop();

}
document.addEventListener('/draw_agent' , drawAgent);
