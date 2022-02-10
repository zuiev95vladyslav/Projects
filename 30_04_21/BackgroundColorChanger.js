function bgcolor()
{
loopID = window.setTimeout("bgcolor()",500); // 500 milliseconds delay
var index = Math.floor(Math.random() * 10);
var ColorValue = "FFFFFF"; // default color - white (index = 0)
if(index == 1)
ColorValue = "FFCCCC"; //peach
if(index == 2)
ColorValue = "CCAFFF"; //violet
if(index == 3)
ColorValue = "A6BEFF"; //lt blue
if(index == 4)
ColorValue = "99FFFF"; //cyan
if(index == 5)
ColorValue = "D5CCBB"; //tan
if(index == 6)
ColorValue = "99FF99"; //lt green
if(index == 7)
ColorValue = "FFFF99"; //lt yellow
if(index == 8)
ColorValue = "FFCC99"; //lt orange
if(index == 9)
ColorValue = "CCCCCC"; //lt grey
document.getElementsByTagName("div")[0].style.backgroundColor = "#" + ColorValue;
}
function stopcolor()
{
document.body.style.backgroundColor="white";
clearTimeout(loopID);
}