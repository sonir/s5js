const DEF_SV_ATK = 0.1;
const DEF_SV_DECAY = 0.5;
const DEF_SV_SUS = 0.7;
const DEF_SV_RELEASE = 1.7;



class SubVoice {

    constructor(freq , q , gain){

        //Instanciates
        this.noise = new p5.Noise();
        this.filter = new p5.BandPass();
        this.env = new p5.Envelope();

        //Init
        this.noise.disconnect();
        this.noise.connect(this.filter);
        this.noise.start();
        this.filter.freq(freq);
        this.filter.res(q);
        
        this.env.setADSR(DEF_SV_ATK , DEF_SV_DECAY, DEF_SV_SUS, DEF_SV_RELEASE);
        this.env.setRange(1.0 , 0.0);
        //Set Vol
        this.env.mult(gain);

        this.noise.amp(this.env);


    }


    setGain(gain){

        this.env.mult(gain);

    }

    setAdsr(atk, dec, sus, rel){

        this.env.setADSR(atk , dec, sus, rel);

    }

    stop(){

        this.env.triggerRelease();

    }


    start(freq , q){

        this.filter.freq(freq);
        this.filter.res(q);
        this.env.triggerAttack();

    }

}
