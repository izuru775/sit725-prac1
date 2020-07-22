// This class generate a living simulator
  class Biosensor{
      constructor(name){
          //we want to initialise with owner and keep track with heart rate 
         this.owner = name ;
         this.heartrate = 0 ;
         this.live();
      }
      generateRandomNumbersBetween(min, max) {
        return Math.random() * (max - min) + min;
      }
      // function to generate the heart rate and record it to the sensor
      //This function generate a random number between 60 -90
      generateHeartBeat(){
          let hr=this.generateRandomNumbersBetween(60,70);
          this.heartrate=hr;
          console.log('[Owner]:' +this.owner+ '-----[HR] :'+ this.heartrate)
      }
      // living function simply starts an endless interval to generate a beat
      live(){
          setInterval(()=>{this.generateHeartBeat()},1000)
      }
  }
  let james = new Biosensor("james");
  
  //console.log(james)