setInterval(() => {

    const HOURHAND = document.querySelector("#hour");
    const MINUTEHAND = document.querySelector("#minute");
    const SECONDHAND = document.querySelector("#second");


 function run_the_clock(){
  var date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log("Hour: "+hr+ " Minute: "+ min + " Second: "+ sec);

  let hrPosition = 30*hr + min/2;
  let minPosition = 6*min;
  let secPosition = 6*sec;

  //Then we need to apply these numbers as degrees in the inline styles for transform on each of the objects.
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}


var interval = setInterval(run_the_clock, 1000);
    
     /*d = new Date();
     htime = d.getHours();
     mtime = d.getMinutes();
     stime = d.getSeconds();
    mrotation = 6*mtime;
     srotation = 6*stime;

    htime.style.transform = 'rotate(${hrotation}deg)';
    mtime.style.transform = 'rotate(${mrotation}deg)';
    stime.style.transform = 'rotate(${srotation}deg)';*/
   
}, 1000);