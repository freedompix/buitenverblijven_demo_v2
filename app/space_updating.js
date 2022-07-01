function spaceUpdating()
{




let x = window.appState['width']/1000;
let z = window.appState['deepth']/1000;

 window.appState['sectionsNumber']







for(let i=0;i<=17;i++)
{

//wall, redplane, buttonplane. 4 x 1m bulk
if (i==0)
{

window.scene.getMeshByName('sec_' + i + '_balk_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_balk_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_balk_3').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_balk_0').setEnabled(false);

window.scene.getMeshByName('sec_' + i + '_wall').setEnabled(false);

window.scene.getMeshByName('sec_' + i + '_plane').setEnabled(false);

window.scene.getMeshByName('sec_' + i + '_window_1_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_1_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_1_0').setEnabled(false);

window.scene.getMeshByName('sec_' + i + '_window_2_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_2_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_2_0').setEnabled(false);

window.scene.getMeshByName('sec_' + i + '_window_glass_1_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_glass_1_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_glass_1_0').setEnabled(false);

window.scene.getMeshByName('sec_' + i + '_window_glass_2_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_glass_2_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_glass_2_0').setEnabled(false);


window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + 0).setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + 1).setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + 2).setEnabled(false);

//if (window.appSection[0].place1==1)window.scene.getMeshByName('sec_' + i + '_zhaluzi_1').setEnabled(true);
//if (window.appSection[0].place2==1)window.scene.getMeshByName('sec_' + i + '_zhaluzi_2').setEnabled(true);
//if (window.appSection[0].place3==1)window.scene.getMeshByName('sec_' + i + '_zhaluzi_3').setEnabled(true);



let xID = i;
if (i>=6 && i<=13) xID = i - 7;

let balk1x = xID + 1;
let balk2x = xID + 2;


let balkXposition=[0,0,0,0];
let elementXposition = [0,0,0];

let cursorX=0;
let elementsMax = 3 - 1;
if (window.appSection[i].place[0]==3 || window.appSection[i].place[1]==3 || window.appSection[i].place[2]==3) elementsMax =elementsMax - 1;



let startX = window.scene.getMeshByName('1meter_balk_front_' + balk1x).position.x;
let sectionWidth = window.scene.getMeshByName('1meter_balk_front_' + balk2x).position.x - window.scene.getMeshByName('1meter_balk_front_' + balk1x).position.x;
console.log(sectionWidth);

if (window.appSection[i].orientation==0)
{
startX=startX+ 0.15;
//window.scene.getMeshByName('sec_' + i + '_balk_' + 3).setEnabled(true);
}

if (window.appSection[i].orientation==1)
{
//window.scene.getMeshByName('sec_' + i + '_balk_' + 0).setEnabled(true);
}



for(let ii=0; ii<=elementsMax; ii++)
{
let distanceBetweenElements=0;



if (ii!==0)
{
if(
(window.appSection[0].place[ii]==1   && (window.appSection[0].place[ii-1]==2 || window.appSection[0].place[ii-1]==3))
||
(window.appSection[0].place[ii-1]==1 && (window.appSection[0].place[ii]==2   || window.appSection[0].place[ii]==3))
)
{
cursorX = cursorX + 0.15;
window.scene.getMeshByName('sec_' + i + '_balk_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_balk_' + ii).position.x = cursorX - 0.075;
balkXposition[ii]=cursorX;
}
}

elementXposition[ii]=cursorX;

if (window.appSection[i].place[ii]==1)
{
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).setEnabled(true);
cursorX = cursorX + 1;
}

if (window.appSection[i].place[ii]==2)
{
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).setEnabled(true);
cursorX = cursorX + 1;
}

if (window.appSection[i].place[ii]==3)
{
window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).setEnabled(true);
cursorX = cursorX + 2;
}




}


//REDRAW FOR X AND Z


for(let ii=0; ii<=elementsMax; ii++)
{

//window.scene.getMeshByName('sec_' + i + '_balk_' + ii).position.x = balkXposition[ii];


window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).position.x = startX + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).position.x = startX +elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).position.x = startX +elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).position.x = startX + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).position.x = startX +elementXposition[ii] + 0.5;
window.scene.getMeshByName('sec_' + i + '_balk_' + ii).position.x = startX +  balkXposition[ii] - 0.075;


window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).position.z = z/-2
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).position.z = z/-2;
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).position.z = z/-2;
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).position.z = z/-2;
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).position.z = z/-2;
window.scene.getMeshByName('sec_' + i + '_balk_' + ii).position.z = z/-2;






}
//here code





//window.appState['sectionsNumber']



}






}









}
