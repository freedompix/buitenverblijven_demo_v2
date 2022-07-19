
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




//window UI enable/disable elements
for(let i=1; i<5; i++)
{
for  (let ii=1; ii<=2; ii++)
{
//console.log('optionHouses_' + ii + '_' + i + ' _4');
document.getElementById('optionHouses_' + ii + '_' + i + '_0').style.cursor='pointer';
document.getElementById('optionHouses_' + ii + '_' + i + '_1').style.cursor='pointer';
document.getElementById('optionHouses_' + ii + '_' + i + '_2').style.cursor='pointer';
document.getElementById('optionHouses_' + ii + '_' + i + '_3').style.cursor='pointer';
document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.cursor='pointer';
document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.cursor='pointer';
document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.cursor='pointer';


document.getElementById('optionHouses_' + ii + '_' + i + '_1').style.filter='none';
document.getElementById('optionHouses_' + ii + '_' + i + '_2').style.filter='none';
document.getElementById('optionHouses_' + ii + '_' + i + '_3').style.filter='none';
document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.filter='none';
document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.filter='none';
document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.filter='none';


document.getElementById('optionHouses_' + ii + '_' + i + '_1').style.opacity=1;
document.getElementById('optionHouses_' + ii + '_' + i + '_2').style.opacity=1;
document.getElementById('optionHouses_' + ii + '_' + i + '_3').style.opacity=1;
document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.opacity=1;
document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.opacity=1;
document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.opacity=1;

if (window.appState['house' + ii + 'width'] < 2500 && (i==1 || i==2))
{
  document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.cursor='default';
  document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.cursor='default';
  document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.cursor='default';

  document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.filter='grayscale(100%)';
  document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.filter='grayscale(100%)';
  document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.filter='grayscale(100%)';

  document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.opacity=0.5;
  document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.opacity=0.5;
  document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.opacity=0.5;
}

if (window.appState['deepth']==3000 && window.appState['rooftype']==1 && (i==3 || i==4))
{

  document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.cursor='default';
  document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.cursor='default';
  document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.cursor='default';

  document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.filter='grayscale(100%)';
  document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.filter='grayscale(100%)';
  document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.filter='grayscale(100%)';

  document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.opacity=0.5;
  document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.opacity=0.5;
  document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.opacity=0.5;

}


if (window.appState['rooftype']==1 && i==2)
{
  document.getElementById('optionHouses_' + ii + '_' + i + '_1').style.cursor='default';
  document.getElementById('optionHouses_' + ii + '_' + i + '_2').style.cursor='default';
  document.getElementById('optionHouses_' + ii + '_' + i + '_3').style.cursor='default';
  document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.cursor='default';
  document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.cursor='default';
  document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.cursor='default';


  document.getElementById('optionHouses_' + ii + '_' + i + '_1').style.filter='grayscale(100%)';
  document.getElementById('optionHouses_' + ii + '_' + i + '_2').style.filter='grayscale(100%)';
  document.getElementById('optionHouses_' + ii + '_' + i + '_3').style.filter='grayscale(100%)';
  document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.filter='grayscale(100%)';
  document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.filter='grayscale(100%)';
  document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.filter='grayscale(100%)';


  document.getElementById('optionHouses_' + ii + '_' + i + '_1').style.opacity=0.5;
  document.getElementById('optionHouses_' + ii + '_' + i + '_2').style.opacity=0.5;
  document.getElementById('optionHouses_' + ii + '_' + i + '_3').style.opacity=0.5;
  document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.opacity=0.5;
  document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.opacity=0.5;
  document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.opacity=0.5;

}




}
// opacity: 0.5;
//  filter: grayscale(100%);
}



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


if (window.appState['house1on']==true)
{





}










for(let i=1; i<=4; i++)
{
let iName;
if(i==1) iName = 'front';
if(i==2) iName = 'back';
if(i==3) iName = 'left';
if(i==4) iName = 'right';

//mesh.isEnabled()
for(let ii=1; ii<=2; ii++)
{

//DELETING
if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted').dispose();
if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').dispose();
if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas').dispose();

//DELETING


///console.log(window.scene.getMeshByName('house_' + ii +'_window_' + i).isEnabled());



if (window.scene.getMeshByName('house_' + ii +'_window_' + i).isEnabled() == true)
{











  if (window.scene.getMeshByName('wallTempClone') != null) window.scene.getMeshByName('wallTempClone').dispose();
  if (window.scene.getMeshByName('boxCut') != null) window.scene.getMeshByName('boxCut').dispose();
  if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted').dispose();


  window.scene.getMeshByName('wall_house' + ii + '_' + iName).clone('wallTempClone');
  window.scene.getMeshByName('wallTempClone').makeGeometryUnique();
  window.scene.getMeshByName('wallTempClone').bakeCurrentTransformIntoVertices();


  let boxCut = BABYLON.MeshBuilder.CreateBox("boxCut", {height: 0.9, width: 0.8, depth: 0.8});
  boxCut.position.y = 1.5;
  boxCut.position.x = window.scene.getMeshByName('house_' + ii + '_window_' + i).position.x;
  boxCut.position.z = window.scene.getMeshByName('house_' + ii + '_window_' + i).position.z;


  let aCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('boxCut'));
  let bCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('wallTempClone'));
  let subCSG = bCSG.subtract(aCSG);
  let newMesh = subCSG.toMesh('wall_house' + ii + '_' + iName + '_cuted',   window.scene.getMeshByName('wall_house' + ii + '_' + iName).material, window.scene);
  //newMesh.position = new BABYLON.Vector3(-5, 3, 0);




//CUTING INNER WALL
if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').dispose();




//CUTING INNER WALL
if (window.scene.getMeshByName('wall_house' + ii +'_' + iName + '_inside').isEnabled() == true)
{

if (window.scene.getMeshByName('wallTempCloneInside') != null) window.scene.getMeshByName('wallTempCloneInside').dispose();


window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_inside').clone('wallTempCloneInside');

let aCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('boxCut'));
let bCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('wallTempCloneInside'));

let subCSG = bCSG.subtract(aCSG);

let newMesh = subCSG.toMesh('wall_house' + ii + '_' + iName + '_cuted_inside',   window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_inside').material, window.scene);


if (window.appState['color2']==0)
window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').material=window.scene.getMaterialByName('wood_dark_0');

if (window.appState['color2']==1)
window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').material=window.scene.getMaterialByName('Wood_Material');

if (window.appState['wallInside']==false)
window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').setEnabled(false);

console.log('enter inside status' + window.appState['wallInside']);

window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_inside').setEnabled(false);
window.scene.getMeshByName('wallTempCloneInside').dispose();
}





//CUTING CARCASS
if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas').dispose();


//CUTING CARCASS
if (window.scene.getMeshByName('wall_house' + ii +'_' + iName + '_carcas').isEnabled() == true)
{
//wallTempCloneCarcas
if (window.scene.getMeshByName('wallTempCloneCarcas') != null) window.scene.getMeshByName('wallTempCloneCarcas').dispose();


window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_carcas').clone('wallTempCloneCarcas');

let aCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('boxCut'));
let bCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('wallTempCloneCarcas'));

let subCSG = bCSG.subtract(aCSG);

let newMesh = subCSG.toMesh('wall_house' + ii + '_' + iName + '_cuted_carcas',   window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_carcas').material, window.scene);



window.scene.getMeshByName('wallTempCloneCarcas').dispose();
}







  window.scene.getMeshByName('wallTempClone').dispose();
  window.scene.getMeshByName('wall_house' + ii + '_' + iName).setEnabled(false);


  window.scene.getMeshByName('boxCut').dispose();


















}

///house_1_door_double_

if (window.scene.getMeshByName('house_' + ii +'_door_double_' + i).isEnabled() == true)
{











  if (window.scene.getMeshByName('wallTempClone') != null) window.scene.getMeshByName('wallTempClone').dispose();
  if (window.scene.getMeshByName('boxCut') != null) window.scene.getMeshByName('boxCut').dispose();
  if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted').dispose();


  window.scene.getMeshByName('wall_house' + ii + '_' + iName).clone('wallTempClone');
  window.scene.getMeshByName('wallTempClone').makeGeometryUnique();
  window.scene.getMeshByName('wallTempClone').bakeCurrentTransformIntoVertices();


  let boxCut = BABYLON.MeshBuilder.CreateBox("boxCut", {height: 2.0, width: 1.7, depth: 1.7});
  boxCut.position.y = 0.98;
  boxCut.position.x = window.scene.getMeshByName('house_' + ii + '_window_' + i).position.x;
  boxCut.position.z = window.scene.getMeshByName('house_' + ii + '_window_' + i).position.z;


  let aCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('boxCut'));
  let bCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('wallTempClone'));
  let subCSG = bCSG.subtract(aCSG);
  let newMesh = subCSG.toMesh('wall_house' + ii + '_' + iName + '_cuted',   window.scene.getMeshByName('wall_house' + ii + '_' + iName).material, window.scene);
  //newMesh.position = new BABYLON.Vector3(-5, 3, 0);




//CUTING INNER WALL
if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').dispose();




//CUTING INNER WALL
if (window.scene.getMeshByName('wall_house' + ii +'_' + iName + '_inside').isEnabled() == true)
{

if (window.scene.getMeshByName('wallTempCloneInside') != null) window.scene.getMeshByName('wallTempCloneInside').dispose();


window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_inside').clone('wallTempCloneInside');

let aCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('boxCut'));
let bCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('wallTempCloneInside'));

let subCSG = bCSG.subtract(aCSG);

let newMesh = subCSG.toMesh('wall_house' + ii + '_' + iName + '_cuted_inside',   window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_inside').material, window.scene);


if (window.appState['color2']==0)
window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').material=window.scene.getMaterialByName('wood_dark_0');

if (window.appState['color2']==1)
window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').material=window.scene.getMaterialByName('Wood_Material');

if (window.appState['wallInside']==false)
window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').setEnabled(false);

console.log('enter inside status' + window.appState['wallInside']);

window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_inside').setEnabled(false);
window.scene.getMeshByName('wallTempCloneInside').dispose();
}





//CUTING CARCASS
if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas').dispose();


//CUTING CARCASS
if (window.scene.getMeshByName('wall_house' + ii +'_' + iName + '_carcas').isEnabled() == true)
{
//wallTempCloneCarcas
if (window.scene.getMeshByName('wallTempCloneCarcas') != null) window.scene.getMeshByName('wallTempCloneCarcas').dispose();


window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_carcas').clone('wallTempCloneCarcas');

let aCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('boxCut'));
let bCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('wallTempCloneCarcas'));

let subCSG = bCSG.subtract(aCSG);

let newMesh = subCSG.toMesh('wall_house' + ii + '_' + iName + '_cuted_carcas',   window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_carcas').material, window.scene);



window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_carcas').setEnabled(false);
window.scene.getMeshByName('wallTempCloneCarcas').dispose();
}







  window.scene.getMeshByName('wallTempClone').dispose();
  window.scene.getMeshByName('wall_house' + ii + '_' + iName).setEnabled(false);


  window.scene.getMeshByName('boxCut').dispose();


















}


// house_1_door_single_left_
// house_1_door_single_right_

if (
(
window.scene.getMeshByName('house_' + ii +'_door_single_left_' + i).isEnabled() == true
||
window.scene.getMeshByName('house_' + ii +'_door_single_right_' + i).isEnabled() == true
)

)
{













  if (window.scene.getMeshByName('wallTempClone') != null) window.scene.getMeshByName('wallTempClone').dispose();
  if (window.scene.getMeshByName('boxCut') != null) window.scene.getMeshByName('boxCut').dispose();
//  if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted').dispose();


  if (window.scene.getMeshByName('house_' + ii +'_window_' + i).isEnabled() == false)  window.scene.getMeshByName('wall_house' + ii + '_' + iName).clone('wallTempClone');
  if (window.scene.getMeshByName('house_' + ii +'_window_' + i).isEnabled() == true)   window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted').clone('wallTempClone');


  window.scene.getMeshByName('wallTempClone').makeGeometryUnique();
  window.scene.getMeshByName('wallTempClone').bakeCurrentTransformIntoVertices();


  let boxCut = BABYLON.MeshBuilder.CreateBox("boxCut", {height: 2.0, width: 1.0, depth: 1.0});
  boxCut.position.y = 0.98;

  if (window.scene.getMeshByName('house_' + ii +'_door_single_left_' + i).isEnabled() == true)
{
  boxCut.position.x = window.scene.getMeshByName('house_' + ii + '_door_single_left_' + i).position.x;
  boxCut.position.z = window.scene.getMeshByName('house_' + ii + '_door_single_left_' + i).position.z;
}

if (window.scene.getMeshByName('house_' + ii +'_door_single_right_' + i).isEnabled() == true)
{
boxCut.position.x = window.scene.getMeshByName('house_' + ii + '_door_single_right_' + i).position.x;
boxCut.position.z = window.scene.getMeshByName('house_' + ii + '_door_single_right_' + i).position.z;
}


  let aCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('boxCut'));
  let bCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('wallTempClone'));
  let subCSG = bCSG.subtract(aCSG);


  if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted').dispose();
  let newMesh = subCSG.toMesh('wall_house' + ii + '_' + iName + '_cuted',   window.scene.getMeshByName('wall_house' + ii + '_' + iName).material, window.scene);
  //newMesh.position = new BABYLON.Vector3(-5, 3, 0);




//CUTING INNER WALL
//if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').dispose();




//CUTING INNER WALL
if (window.scene.getMeshByName('wall_house' + ii +'_' + iName + '_inside').isEnabled() == true || window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside')!= null)
{
console.log('editing wall');
if (window.scene.getMeshByName('wallTempCloneInside') != null) window.scene.getMeshByName('wallTempCloneInside').dispose();


//window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_inside').clone('wallTempCloneInside');

if (window.scene.getMeshByName('house_' + ii +'_window_' + i).isEnabled() == false)
{
  window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_inside').clone('wallTempCloneInside');
}

if (window.scene.getMeshByName('house_' + ii +'_window_' + i).isEnabled() == true)
{
  window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').clone('wallTempCloneInside');
  window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').dispose();
}




let aCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('boxCut'));
let bCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('wallTempCloneInside'));

let subCSG = bCSG.subtract(aCSG);

if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').dispose();


let newMesh2 = subCSG.toMesh('wall_house' + ii + '_' + iName + '_cuted_inside',   window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_inside').material, window.scene);


if (window.appState['color2']==0) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').material=window.scene.getMaterialByName('wood_dark_0');
if (window.appState['color2']==1) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').material=window.scene.getMaterialByName('Wood_Material');

//if (window.appState['wallInside']==false)
window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_inside').setEnabled(false);

window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').setEnabled(true);
window.scene.getMeshByName('wallTempCloneInside').dispose();
}





//CUTING CARCASS
//if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas').dispose();


//CUTING CARCASS
if (window.scene.getMeshByName('wall_house' + ii +'_' + iName + '_carcas').isEnabled() == true)
{
//wallTempCloneCarcas
if (window.scene.getMeshByName('wallTempCloneCarcas') != null) window.scene.getMeshByName('wallTempCloneCarcas').dispose();


//window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_carcas').clone('wallTempCloneCarcas');

if (window.scene.getMeshByName('house_' + ii +'_window_' + i).isEnabled() == false)  window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_carcas').clone('wallTempCloneCarcas');
if (window.scene.getMeshByName('house_' + ii +'_window_' + i).isEnabled() == true)
{

window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas').clone('wallTempCloneCarcas');
window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas').dispose();
}



let aCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('boxCut'));
let bCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('wallTempCloneCarcas'));

let subCSG = bCSG.subtract(aCSG);

let newMesh = subCSG.toMesh('wall_house' + ii + '_' + iName + '_cuted_carcas',   window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_carcas').material, window.scene);



window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_carcas').setEnabled(false);
//window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas').setEnabled(false);
window.scene.getMeshByName('wallTempCloneCarcas').dispose();

}







  window.scene.getMeshByName('wallTempClone').dispose();
  window.scene.getMeshByName('wall_house' + ii + '_' + iName).setEnabled(false);
  window.scene.getMeshByName('wall_house' + ii + '_' + iName).setEnabled(false);


  window.scene.getMeshByName('boxCut').dispose();


















}






































}
}





//disabling SMALL triangles
if (window.appState['house1on']==true)
{
//window.scene.getMeshByName('balk_small_back_left_' + i).setEnabled(false);

window.scene.getMeshByName('balk_small_back_left_1').setEnabled(false);
window.scene.getMeshByName('balk_small_back_right_1').setEnabled(false);
window.scene.getMeshByName('balk_small_front_left_1').setEnabled(false);
window.scene.getMeshByName('balk_small_front_right_1').setEnabled(false);

window.scene.getMeshByName('balk_small_back_right_2').setEnabled(false);
window.scene.getMeshByName('balk_small_front_right_2').setEnabled(false);
}

if (window.appState['house2on']==true)
{

let sectionsNumber =window.appState['sectionsNumber'];
let sectionsNumber2 =window.appState['sectionsNumber']+1;


window.scene.getMeshByName('balk_small_back_left_' + sectionsNumber2).setEnabled(false);
window.scene.getMeshByName('balk_small_back_right_'  + sectionsNumber2).setEnabled(false);
window.scene.getMeshByName('balk_small_front_left_' + sectionsNumber2).setEnabled(false);
window.scene.getMeshByName('balk_small_front_right_' + sectionsNumber2).setEnabled(false);

window.scene.getMeshByName('balk_small_back_left_' + sectionsNumber).setEnabled(false);
window.scene.getMeshByName('balk_small_front_left_' + sectionsNumber).setEnabled(false);

}


if (window.appState['house1on']==true && window.appState['house2on']==true)
{
let deltaX = window.appState['width'];
deltaX = deltaX - window.appState['house1width'] - window.appState['house2width'];

if (deltaX == 500)
{
window.scene.getMeshByName('balk_small_back_left_2').setEnabled(false);
window.scene.getMeshByName('balk_small_front_left_2').setEnabled(false);


window.scene.getMeshByName('balk_small_back_right_3').setEnabled(false);
window.scene.getMeshByName('balk_small_front_right_3').setEnabled(false);
}

}



houseSetUI();

}
