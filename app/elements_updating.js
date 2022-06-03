
function elementsUpdate(){
//set off

let x = window.appState['width'];
let z = window.appState['deepth'];
let zBack=z/2000;
let xStart=(x/2)*-0.001;

let house1width = window.appState['house1width']/1000;
let house2width = window.appState['house2width']/1000;

let shiftZ;
if(window.appState['rooftype']==1) shiftZ=1; else shiftZ=0;

let windowAndDoorShift=0;



if (window.appState['house1width'] < 2500 )
{
if (window.appState['house1wall1']>3)window.appState['house1wall1']=2;
if (window.appState['house1wall2']>3)window.appState['house1wall2']=2;
}

if (window.appState['house2width'] < 2500 )
{
if (window.appState['house2wall1']>3)window.appState['house2wall1']=2;
if (window.appState['house2wall2']>3)window.appState['house2wall2']=2;
}

if (window.appState['deepth']==3000 && window.appState['rooftype']==1)
{

  if (window.appState['house1wall3']>3)window.appState['house1wall3']=2;
  if (window.appState['house1wall4']>3)window.appState['house1wall4']=2;
  if (window.appState['house2wall3']>3)window.appState['house2wall3']=2;
  if (window.appState['house2wall4']>3)window.appState['house2wall4']=2;

}

if(window.appState['rooftype']==1)
{
window.appState['house1wall2']=0;
window.appState['house2wall2']=0;

}

for(let i=1; i<=4; i++)
{
  window.scene.getMeshByName('house_1_window_' + i).setEnabled(false);
  window.scene.getMeshByName('house_2_window_' + i).setEnabled(false);

  window.scene.getMeshByName('house_1_window_glass_' + i).setEnabled(false);
  window.scene.getMeshByName('house_2_window_glass_' + i).setEnabled(false);

  window.scene.getMeshByName('house_1_door_double_' + i).setEnabled(false);
  window.scene.getMeshByName('house_2_door_double_' + i).setEnabled(false);

  window.scene.getMeshByName('house_1_door_single_left_' + i).setEnabled(false);
  window.scene.getMeshByName('house_2_door_single_left_' + i).setEnabled(false);

  window.scene.getMeshByName('house_1_door_single_right_' + i).setEnabled(false);
  window.scene.getMeshByName('house_2_door_single_right_' + i).setEnabled(false);


if (window.appState['house1on']==true)
{
if (window.appState['house1wall' + i] == 1)
{
window.scene.getMeshByName('house_1_window_' + i).setEnabled(true);
window.scene.getMeshByName('house_1_window_glass_' + i).setEnabled(true);
}
if (window.appState['house1wall' + i] == 2) window.scene.getMeshByName('house_1_door_single_left_' + i).setEnabled(true);
if (window.appState['house1wall' + i] == 3) window.scene.getMeshByName('house_1_door_single_right_' + i).setEnabled(true);
if (window.appState['house1wall' + i] == 4) window.scene.getMeshByName('house_1_door_double_' + i).setEnabled(true);

if (window.appState['house1wall' + i] == 5) {
  window.scene.getMeshByName('house_1_door_single_left_' + i).setEnabled(true);
  window.scene.getMeshByName('house_1_window_' + i).setEnabled(true);
  window.scene.getMeshByName('house_1_window_glass_' + i).setEnabled(true);
}

if (window.appState['house1wall' + i] == 6) {
  window.scene.getMeshByName('house_1_door_single_right_' + i).setEnabled(true);
  window.scene.getMeshByName('house_1_window_' + i).setEnabled(true);
  window.scene.getMeshByName('house_1_window_glass_' + i).setEnabled(true);
}

}


if (window.appState['house2on']==true)
{

if (window.appState['house2wall' + i] == 1)
{
window.scene.getMeshByName('house_2_window_' + i).setEnabled(true);
window.scene.getMeshByName('house_2_window_glass_' + i).setEnabled(true);
}

if (window.appState['house2wall' + i] == 2) window.scene.getMeshByName('house_2_door_single_left_' + i).setEnabled(true);
if (window.appState['house2wall' + i] == 3) window.scene.getMeshByName('house_2_door_single_right_' + i).setEnabled(true);
if (window.appState['house2wall' + i] == 4) window.scene.getMeshByName('house_2_door_double_' + i).setEnabled(true);

if (window.appState['house2wall' + i] == 5) {
  window.scene.getMeshByName('house_2_door_single_left_' + i).setEnabled(true);
  window.scene.getMeshByName('house_2_window_' + i).setEnabled(true);
  window.scene.getMeshByName('house_2_window_glass_' + i).setEnabled(true);
}

if (window.appState['house2wall' + i] == 6) {
  window.scene.getMeshByName('house_2_door_single_right_' + i).setEnabled(true);
  window.scene.getMeshByName('house_2_window_' + i).setEnabled(true);
  window.scene.getMeshByName('house_2_window_glass_' + i).setEnabled(true);
}


}

}


//windows
window.scene.getMeshByName('house_1_window_1').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_1_window_2').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_1_window_1').position.z = zBack * -1 ;
window.scene.getMeshByName('house_1_window_2').position.z = zBack +0.01;

window.scene.getMeshByName('house_2_window_1').position.x = xStart*-1 - (house2width/2);
window.scene.getMeshByName('house_2_window_2').position.x = xStart*-1 - (house2width/2);
window.scene.getMeshByName('house_2_window_1').position.z = zBack * -1 ;
window.scene.getMeshByName('house_2_window_2').position.z = zBack +0.01;


///3 4
window.scene.getMeshByName('house_1_window_3').position.x = xStart - 0.09;
window.scene.getMeshByName('house_1_window_4').position.x = xStart + house1width + 0.08;
window.scene.getMeshByName('house_2_window_3').position.x = xStart * -1 - house2width - 0.09;
window.scene.getMeshByName('house_2_window_4').position.x = xStart * -1  + 0.08;

window.scene.getMeshByName('house_1_window_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_1_window_4').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_window_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_window_4').position.z = 0-shiftZ/2 ;




//_glass
window.scene.getMeshByName('house_1_window_glass_1').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_1_window_glass_2').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_2_window_glass_1').position.x = xStart*-1 - (house2width/2);
window.scene.getMeshByName('house_2_window_glass_2').position.x = xStart*-1 - (house2width/2);

window.scene.getMeshByName('house_1_window_glass_1').position.z = zBack * -1;
window.scene.getMeshByName('house_1_window_glass_2').position.z = zBack;
window.scene.getMeshByName('house_2_window_glass_1').position.z = zBack * -1;
window.scene.getMeshByName('house_2_window_glass_2').position.z = zBack;

// 3 4
window.scene.getMeshByName('house_1_window_glass_3').position.x = xStart - 0.08;
window.scene.getMeshByName('house_1_window_glass_4').position.x = xStart + house1width + 0.08;
window.scene.getMeshByName('house_2_window_glass_3').position.x = xStart * -1 - house2width - 0.08;
window.scene.getMeshByName('house_2_window_glass_4').position.x = xStart * -1  + 0.08;


window.scene.getMeshByName('house_1_window_glass_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_1_window_glass_4').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_window_glass_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_window_glass_4').position.z = 0-shiftZ/2 ;


//DOOR LEFT
window.scene.getMeshByName('house_1_door_single_left_1').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_1_door_single_left_2').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_2_door_single_left_1').position.x = xStart*-1 - (house2width/2);
window.scene.getMeshByName('house_2_door_single_left_2').position.x = xStart*-1 - (house2width/2);

window.scene.getMeshByName('house_1_door_single_left_1').position.z = zBack * -1 - 0.01;
window.scene.getMeshByName('house_1_door_single_left_2').position.z = zBack      + 0.01;
window.scene.getMeshByName('house_2_door_single_left_1').position.z = zBack * -1 - 0.01;
window.scene.getMeshByName('house_2_door_single_left_2').position.z = zBack      + 0.01;

// 3 4
window.scene.getMeshByName('house_1_door_single_left_3').position.x = xStart - 0.08;
window.scene.getMeshByName('house_1_door_single_left_4').position.x = xStart + house1width + 0.08;
window.scene.getMeshByName('house_2_door_single_left_3').position.x = xStart * -1 - house2width - 0.08;
window.scene.getMeshByName('house_2_door_single_left_4').position.x = xStart * -1  + 0.08;


window.scene.getMeshByName('house_1_door_single_left_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_1_door_single_left_4').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_door_single_left_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_door_single_left_4').position.z = 0-shiftZ/2 ;

//DOOR right
window.scene.getMeshByName('house_1_door_single_right_1').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_1_door_single_right_2').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_2_door_single_right_1').position.x = xStart*-1 - (house2width/2);
window.scene.getMeshByName('house_2_door_single_right_2').position.x = xStart*-1 - (house2width/2);

window.scene.getMeshByName('house_1_door_single_right_1').position.z = zBack * -1 - 0.01;
window.scene.getMeshByName('house_1_door_single_right_2').position.z = zBack      + 0.01;
window.scene.getMeshByName('house_2_door_single_right_1').position.z = zBack * -1 - 0.01;
window.scene.getMeshByName('house_2_door_single_right_2').position.z = zBack      + 0.01;

// 3 4
window.scene.getMeshByName('house_1_door_single_right_3').position.x = xStart - 0.08;
window.scene.getMeshByName('house_1_door_single_right_4').position.x = xStart + house1width + 0.08;
window.scene.getMeshByName('house_2_door_single_right_3').position.x = xStart * -1 - house2width - 0.08;
window.scene.getMeshByName('house_2_door_single_right_4').position.x = xStart * -1  + 0.08;


window.scene.getMeshByName('house_1_door_single_right_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_1_door_single_right_4').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_door_single_right_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_door_single_right_4').position.z = 0-shiftZ/2 ;



//double DOOR
window.scene.getMeshByName('house_1_door_double_1').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_1_door_double_2').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_2_door_double_1').position.x = xStart*-1 - (house2width/2);
window.scene.getMeshByName('house_2_door_double_2').position.x = xStart*-1 - (house2width/2);

window.scene.getMeshByName('house_1_door_double_1').position.z = zBack * -1 - 0.04;
window.scene.getMeshByName('house_1_door_double_2').position.z = zBack      + 0.04;
window.scene.getMeshByName('house_2_door_double_1').position.z = zBack * -1 - 0.04;
window.scene.getMeshByName('house_2_door_double_2').position.z = zBack      + 0.04;

// 3 4
window.scene.getMeshByName('house_1_door_double_3').position.x = xStart - 0.1;
window.scene.getMeshByName('house_1_door_double_4').position.x = xStart + house1width + 0.1;
window.scene.getMeshByName('house_2_door_double_3').position.x = xStart * -1 - house2width - 0.1;
window.scene.getMeshByName('house_2_door_double_4').position.x = xStart * -1  + 0.1;


window.scene.getMeshByName('house_1_door_double_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_1_door_double_4').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_door_double_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_door_double_4').position.z = 0-shiftZ/2 ;


//DOUBLE OPTION
windowAndDoorShift=0.5;

if (window.appState['house1wall1']==5){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_1_door_single_left_1').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_1').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_1').position.x += windowAndDoorShift;
}

if (window.appState['house1wall1']==6){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_1_door_single_right_1').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_1').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_1').position.x -= windowAndDoorShift;
}

if (window.appState['house1wall2']==5){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_1_door_single_left_2').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_2').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_2').position.x += windowAndDoorShift;
}

if (window.appState['house1wall2']==6){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_1_door_single_right_2').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_2').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_2').position.x -= windowAndDoorShift;
}

//

if (window.appState['house2wall1']==5){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_2_door_single_left_1').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_1').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_1').position.x += windowAndDoorShift;
}

if (window.appState['house2wall1']==6){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_2_door_single_right_1').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_1').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_1').position.x -= windowAndDoorShift;
}

if (window.appState['house2wall2']==5){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_2_door_single_left_2').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_2').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_2').position.x += windowAndDoorShift;
}

if (window.appState['house2wall2']==6){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_2_door_single_right_2').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_2').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_2').position.x -= windowAndDoorShift;
}


/////3
if (window.appState['house1wall3']==5){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_1_door_single_left_3').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_3').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_3').position.z += windowAndDoorShift;
}

if (window.appState['house1wall3']==6){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_1_door_single_right_3').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_3').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_3').position.z -= windowAndDoorShift;
}
///4
if (window.appState['house1wall4']==5){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_1_door_single_left_4').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_4').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_4').position.z += windowAndDoorShift;
}

if (window.appState['house1wall4']==6){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_1_door_single_right_4').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_4').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_4').position.z -= windowAndDoorShift;
}

// house 2 , 3 4
if (window.appState['house2wall3']==5){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_2_door_single_left_3').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_3').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_3').position.z += windowAndDoorShift;
}

if (window.appState['house2wall3']==6){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_2_door_single_right_3').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_3').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_3').position.z -= windowAndDoorShift;
}
///4
if (window.appState['house2wall4']==5){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_2_door_single_left_4').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_4').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_4').position.z += windowAndDoorShift;
}

if (window.appState['house2wall4']==6){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_2_door_single_right_4').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_4').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_4').position.z -= windowAndDoorShift;
}








if (window.appState['rooftype']==0 && z==5000 )
{
  windowAndDoorShift=-1.21;
//
  window.scene.getMeshByName('house_2_door_single_left_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_door_single_right_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_window_glass_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_window_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_door_double_4').position.z += windowAndDoorShift;

  window.scene.getMeshByName('house_2_door_single_left_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_door_single_right_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_window_glass_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_window_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_door_double_3').position.z += windowAndDoorShift;
//
  window.scene.getMeshByName('house_1_door_single_left_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_door_single_right_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_window_glass_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_window_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_door_double_4').position.z += windowAndDoorShift;

  window.scene.getMeshByName('house_1_door_single_left_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_door_single_right_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_window_glass_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_window_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_door_double_3').position.z += windowAndDoorShift;

}

if (window.appState['house1width'] == window.appState['width'] && window.appState['house1on'] == true)
{
  window.scene.getMeshByName('balk_small_front_left_2').setEnabled(false);
  window.scene.getMeshByName('balk_small_back_left_2').setEnabled(false);
}

if (window.appState['house2width'] == window.appState['width'] && window.appState['house2on'] == true)
{
  window.scene.getMeshByName('balk_small_front_right_2').setEnabled(false);
  window.scene.getMeshByName('balk_small_back_right_2').setEnabled(false);
}





houseSetUI();

}
