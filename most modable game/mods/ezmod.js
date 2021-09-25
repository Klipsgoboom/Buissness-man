//Money starting value
// VVV
var delay = 1000; //1 second

setTimeout(function() {
money = 50;
document.getElementById("money").innerHTML = money;
  aq.setAttribute("src", "player.png");
  aq.setAttribute("width", "175");
  aq.setAttribute("height", "245");
  aq.setAttribute("id", "player");
  aq.style.marginLeft = xpos;
  aq.style.maringTop = up;
  document.body.appendChild(aq);
}, delay);
resetui();
//above sets the value to the text on the menu

//multigun
gunnum = 0;
//Gun switcher, Must be triggered by a function you make.
function switchtogun1() {
var delplayer = document.getElementById('player');
 delplayer.parentNode.removeChild(delplayer);


  aq.setAttribute("src", "mods/ezmod/playerrightw2.png");
  aq.setAttribute("width", "175");
  aq.setAttribute("height", "245");
  aq.setAttribute("id", "player");
  aq.style.marginLeft = xpos;
  aq.style.maringTop = up;
  document.body.appendChild(aq);
}




