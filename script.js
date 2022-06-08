function clicked()
{
  x=prompt("Enter Timezone");
  alert(x + " cannot be shown..SITE UNDER MAINTENANCE");
}
function clicked_1()
{
  alert("\\\\NOT ACCESSIBLE");
}
let a; 
let date;
let time;
let a2; 
let date2;
let time2;
let a3; 
let date3;
let time3;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
a = new Date();
a2 = new Date();
a3 = new Date();
date = a.toLocaleString(undefined,options);
ausdate = a2.toLocaleString("en-US",{timeZone: "Australia/Melbourne"});
usdate = a3.toLocaleString("en-US",{timeZone: "America/New_York"});
time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
document.getElementById('time').innerHTML= time + "<br>" + date;
document.getElementById('time2').innerHTML= ausdate;
document.getElementById('time3').innerHTML= usdate;
}, 1000)
let prevHTML=document.getElementsByTagName('click').innerHTML;
container.addEventListener('mouseover',function(){
  document.getElementsByTagName('click').innerHTML="Site Under Maintanence";
})
container.addEventListener('mouseout',function(){
  document.getElementsByTagName('click').innerHTML=prevHTML;
})