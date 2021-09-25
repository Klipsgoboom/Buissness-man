  var aq = document.createElement("IMG");
  var up = 60;
  var xpos = 50;
  var money = 50;
  var carowner = 0;
//gun variable makes it easier for mods to detect if gun is used
  var gun = 0;
function theft() {
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "Gas station robbery";
  btn.setAttribute("onclick","theftg()")
  btn.setAttribute("id","gas")
  document.body.appendChild(btn);
}
function resetui() {





  var bta = document.createElement("BUTTON");
  bta.innerHTML = "Free Mode";
  bta.setAttribute("onclick","freemode()")
  document.body.appendChild(bta);

  var btn1 = document.createElement("BUTTON");
  btn1.innerHTML = "Find Work";
  btn1.setAttribute("onclick","work1()")
  document.body.appendChild(btn1);

  var btn11 = document.createElement("BUTTON");
  btn11.innerHTML = "Commit theft";
  btn11.setAttribute("onclick","theft()")
  document.body.appendChild(btn11);

  var btn111 = document.createElement("BUTTON");
  btn111.innerHTML = "Da web";
  btn111.setAttribute("onclick","daweb()")
  document.body.appendChild(btn111);

if (carowner=1) {
  var text = document.createElement("p1");
  text.innerHTML = "Owned Car";
  document.body.appendChild(text);
}
}
function theftg () {
alert('Robbery begun.');


  var brrr = document.createElement("br");
  document.body.appendChild(brrr);

  var ttt = document.createElement("p1");
  ttt.innerHTML = "Rob with gun";
  ttt.setAttribute("id","tt")
  document.body.appendChild(ttt);

  var brr = document.createElement("br");
  document.body.appendChild(brr);

  var tt = document.createElement("p1");
  tt.innerHTML = "Yes or no?";
  tt.setAttribute("id","yesno")
  document.body.appendChild(tt);


  var btn = document.createElement("BUTTON");
  btn.innerHTML = "Yes";
  btn.setAttribute("onclick","yestr()")
  btn.setAttribute("id","yes")
  document.body.appendChild(btn);

  var btn1 = document.createElement("BUTTON");
  btn1.innerHTML = "No";
  btn1.setAttribute("onclick","notr()")
  btn1.setAttribute("id","no")
  document.body.appendChild(btn1);



}
function a2() {
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "CLICK ME";
  document.body.appendChild(btn);
}
function a() {
  var x = document.createElement("IMG");
  x.setAttribute("src", "building");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  document.body.appendChild(x);
}
function check() {
if (document.getElementById="in" == yes) {
alert('they called the cops and you were shot.')
}
}
function yestr() {
alert('starting your robbery...')
alert('you died');
}

function notr() {
alert('ok.')
alert('Success! You backhanded the clerk jumped on the register and stole the money. You got away with $9,000.')
alert('you also stole his car!')
money += 9000;
document.getElementById("money").innerHTML = money;

  aq.setAttribute("src", "player.png");
  aq.setAttribute("width", "175");
  aq.setAttribute("height", "245");
  aq.setAttribute("id", "player");
  aq.style.marginLeft = xpos;
  aq.style.maringTop = up;
  document.body.appendChild(aq);

var yess = document.getElementById('yes');
 yess.parentNode.removeChild(yess);

var noo = document.getElementById('no');
 noo.parentNode.removeChild(noo);

var yessno = document.getElementById('yesno');
 yessno.parentNode.removeChild(yessno);

var tttt = document.getElementById('tt');
 tttt.parentNode.removeChild(tttt);

var gass = document.getElementById('gas');
 gass.parentNode.removeChild(gass);

resetui();
}
function freemode() {
var brrr = document.createElement("br");
  document.body.appendChild(brrr);
var brr = document.createElement("br");
  document.body.appendChild(brr);

  aq.setAttribute("src", "player.png");
  aq.setAttribute("width", "175");
  aq.setAttribute("height", "245");
  aq.setAttribute("id", "player");
  aq.style.marginLeft = xpos;
  aq.style.maringTop = up;
  document.body.appendChild(aq);


  var btna = document.createElement("BUTTON");
  btna.innerHTML = "Gun";
  btna.setAttribute("onclick","guns()")
  btna.setAttribute("id","pistol")
  document.body.appendChild(btna);


}
function fforward() {
  xpos = '100px';
  up = '65px';

}

function guns() {
var delplayer = document.getElementById('player');
 delplayer.parentNode.removeChild(delplayer);

  aq.setAttribute("src", "playerwgunright.png");
  aq.setAttribute("width", "175");
  aq.setAttribute("height", "245");
  aq.setAttribute("id", "player");
  aq.style.marginLeft = xpos;
  aq.style.maringTop = up;
  document.body.appendChild(aq);

var delgunbtn = document.getElementById('pistol');
 delgunbtn.parentNode.removeChild(delgunbtn);

  var btn1 = document.createElement("BUTTON");
  btn1.innerHTML = "Shoot";
  btn1.setAttribute("onclick","firepistol()")
  document.body.appendChild(btn1);
gun = 1;
}
function firepistol() {
var gun = new Audio('gun.mp3');
  gun.play();
var delay = 1000; //1 second

setTimeout(function() {
alert('You fired your pistol. The bullet shot someone. You are in jail.')
alert('Idk since you clicked ok you are now out?')
}, delay);

}
function daweb() {

  var btn1 = document.createElement("BUTTON");
  btn1.innerHTML = "Buy A $8,000 car";
  btn1.setAttribute("onclick","buycar()")
  document.body.appendChild(btn1);

}

function buycar() {
(money -= 8000)
carowner = 1;
document.getElementById("money").innerHTML = money;
}
function work1() {
  var work = document.createElement("BUTTON");
  work.innerHTML = "Work";
  work.setAttribute("onclick","work()")
  work.setAttribute("id","work")
  document.body.appendChild(work);
}
function work() {
  var work = document.createElement("BUTTON");
  work.innerHTML = "Click me";
  work.setAttribute("onclick","workp()")
  work.setAttribute("id","work1")
  document.body.appendChild(work);
}
function workp() {
alert('you finished this days job, Here is your pay.');
(money += 60);

var workq = document.getElementById('work');
 workq.parentNode.removeChild(workq);

var worka = document.getElementById('work1');
 worka.parentNode.removeChild(worka);

document.getElementById("money").innerHTML = money;

  aq.setAttribute("src", "player.png");
  aq.setAttribute("width", "175");
  aq.setAttribute("height", "245");
  aq.setAttribute("id", "player");
  aq.style.marginLeft = xpos;
  aq.style.maringTop = up;
  document.body.appendChild(aq);

 resetui();
}
