window.appState=[];
window.appState['width']=5000;
window.appState['deepth']=3000;


window.appState['rooftype']=0;

window.appState['uiMenu1']=1;
window.appState['uiMenu2']=1;
window.appState['uiMenu3']=1;


window.appState['overhangLeft']=200;
window.appState['overhangRight']=200;
window.appState['overhangFront']=200;
window.appState['overhangBack']=200;


window.appState['currentDragMesh']='';

window.appState['house1on']=false;
window.appState['house2on']=false;

window.appState['house1width']=3000;
window.appState['house2width']=3000;


window.appState['color1']=0;
window.appState['color2']=0;
window.appState['wallInside']=false;



function buildRound()
{
  setColor();
var x = window.appState['width'];
var z = window.appState['deepth'];

var zBack=z/2;


/////

var quantity=Math.floor(x/4000)+2;
if (x % 4000 ==0) quantity = x/4000+1;
//console.log(x % 3500);
if (x<4000)     quantity = 2;
var sectionWidth=x/(quantity-1);



if (window.appState['house1on']==true && window.appState['house2on']==false)
{
let middleX = x - window.appState['house1width'];
quantity=Math.floor(middleX/4000) + 2;
if (middleX % 4000 ==0) quantity = middleX/4000 + 1;
if (middleX<4000)  quantity = 2;
sectionWidth= middleX/(quantity - 1);
// add store roof_bulk
quantity = quantity + 1;
}

if (window.appState['house1on']==false && window.appState['house2on']==true)
{
  let middleX = x - window.appState['house2width'];
  quantity=Math.floor(middleX/4000) + 2;
  if (middleX % 4000 ==0) quantity = middleX/4000 + 1;
  if (middleX<4000)  quantity = 2;
  sectionWidth= middleX/(quantity - 1);
  // add store roof_bulk
  quantity = quantity + 1;

}

if (window.appState['house1on']==true && window.appState['house2on']==true)
{

  let middleX = x - window.appState['house1width'] - window.appState['house2width'];
  quantity=Math.floor(middleX/4000) + 2;
  if (middleX % 4000 ==0) quantity = middleX/4000 + 1;
  if (middleX<4000)  quantity = 2;
  sectionWidth= middleX/(quantity - 1);
  // add store roof_bulk
  quantity = quantity + 2;

}


////



//alert(sectionWidth + ' x '+ quantity);
var xStart=(x/2)*-0.001;

//if(quantity>7) quantity=7;

//no more six
var shiftZ;
if(window.appState['rooftype']==1) shiftZ=1; else shiftZ=0;


//roof BALK

//window.scene.getMeshByName('1meter_balk_vertical_left').position=new BABYLON.Vector3(-0.075 + xStart, 1.7+0.075, (zBack)*0.001);
//window.scene.getMeshByName('1meter_balk_vertical_right').position=new BABYLON.Vector3(-0.075 + xStart -(sectionWidth*0.001)/1+ quantity * (sectionWidth*0.001), 1.7+0.075, (zBack)*0.001);
window.scene.getMeshByName('1meter_balk_vertical_left').position=new BABYLON.Vector3(xStart,  2.2+0.075, (zBack*-1)*0.001);
window.scene.getMeshByName('1meter_balk_vertical_right').position=new BABYLON.Vector3(xStart *-1,  2.2+0.075, (zBack*-1)*0.001);
window.scene.getMeshByName('1meter_balk_vertical_left').scaling.x  = z * 0.001 - shiftZ;
window.scene.getMeshByName('1meter_balk_vertical_right').scaling.x = z * 0.001 - shiftZ;


let roofBalkShift=0.08;
let roofFlatShiftLeft=window.appState['overhangLeft']*0.001 + roofBalkShift;
let roofFlatShiftRight=window.appState['overhangRight']*0.001  + roofBalkShift;
let roofFlatShiftFront=window.appState['overhangFront']*0.001  + roofBalkShift;
let roofFlatShiftBack=window.appState['overhangBack']*0.001  + roofBalkShift;










if (window.appState['house1on']==false && window.appState['house2on']==false)
{

for(let i = 1; i<=quantity; i++)
{
window.scene.getMeshByName('balk_front_' + i).position=new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack*-1)*0.001 +  0.075);
if (window.appState['rooftype']==1)
window.scene.getMeshByName('balk_back_' + i).position= new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack)*0.001-shiftZ - 0.075);
if (window.appState['rooftype']==0)
window.scene.getMeshByName('balk_back_' + i).position= new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack)*0.001-shiftZ - 0.075);

//small vertiсal balks
window.scene.getMeshByName('balk_roof_' + i).position= new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack*1)*0.001  - 0.075);


//
let smallYshift=0.05;
let fringeXOffset=0;
//if (i==1) fringeXOffset = -0.075;
//if (i==quantity-1) fringeXOffset = 0.075;

window.scene.getMeshByName('balk_small_back_left_' + i).position=new BABYLON.Vector3(fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0+smallYshift, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('balk_small_back_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_back_right_' + i).position=new BABYLON.Vector3(fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0+smallYshift, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('balk_small_back_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);

window.scene.getMeshByName('balk_small_front_left_' + i).position=new BABYLON.Vector3(fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0+smallYshift, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('balk_small_front_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_front_right_' + i).position=new BABYLON.Vector3(fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0+smallYshift, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('balk_small_front_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
//


// horisontal barks for roof
window.scene.getMeshByName('1meter_balk_front_' + i).position=new BABYLON.Vector3(fringeXOffset + -0.075 + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 2.2+0.075, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('1meter_balk_back_' + i).position= new BABYLON.Vector3(fringeXOffset + -0.075 + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 2.2+0.075, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('1meter_balk_roof_' + i).position= new BABYLON.Vector3(fringeXOffset + -0.075 + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 1.66+0.075, (zBack)*0.001 - 0.075);

window.scene.getMeshByName('1meter_balk_front_' + i).scaling.x = sectionWidth * 0.001  + 0.15;
window.scene.getMeshByName('1meter_balk_back_' + i).scaling.x  = sectionWidth * 0.001  + 0.15;
window.scene.getMeshByName('1meter_balk_roof_' + i).scaling.x  = sectionWidth * 0.001  + 0.15;

//back roof wall
window.scene.getMeshByName('wall_small_carcas_' + i).position=new BABYLON.Vector3(0.075-fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack*1)*0.001 - 0.075);
window.scene.getMeshByName('wall_small_'  + i).position=new BABYLON.Vector3(0.075-fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack*1)*0.001 - 0.075);

window.scene.getMeshByName('wall_small_carcas_'  + i).scaling.x=((sectionWidth-150)/1000)/2.775;
window.scene.getMeshByName('wall_small_'  + i).scaling.x=((sectionWidth-150)/1000)/2.775;

window.scene.getMeshByName('wall_small_inside_'  + i).position=new BABYLON.Vector3(0.075-fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack*1)*0.001 - 0.075);
window.scene.getMeshByName('wall_small_inside_'  + i).scaling.x=((sectionWidth-150)/1000)/2.775;

}
}


///////////














if (window.appState['house1on']==true || window.appState['house2on']==true)
{
let currentSectionWidth = sectionWidth;
let currentXposition;
let firstSectionWidth;
let lastSectionWidth;

if (window.appState['house1on'] == true)
firstSectionWidth = window.appState['house1width'];
else firstSectionWidth = currentSectionWidth;



//if ()

for(let i = 1; i<=quantity; i++)
{


if (i == 1)
{
currentXposition = xStart;
}

if (i > 1 && i < quantity)
{
if (window.appState['house1on'] == true)  currentXposition = xStart  + (firstSectionWidth*0.001) + ((i - 2) * (currentSectionWidth*0.001));
if (window.appState['house1on'] == false) currentXposition = xStart  + (firstSectionWidth*0.001) + ((i - 2) * (currentSectionWidth*0.001));

}

if (i == quantity)
{
currentXposition = xStart * -1;
}



window.scene.getMeshByName('balk_front_' + i).position=
new BABYLON.Vector3(currentXposition, 0, (zBack*-1)*0.001 +  0.075);
if (window.appState['rooftype']==1)
window.scene.getMeshByName('balk_back_' + i).position= new BABYLON.Vector3(currentXposition, 0, (zBack)*0.001-shiftZ - 0.075);
if (window.appState['rooftype']==0)
window.scene.getMeshByName('balk_back_' + i).position= new BABYLON.Vector3(currentXposition, 0, (zBack)*0.001-shiftZ - 0.075);

//small vertiсal balks
window.scene.getMeshByName('balk_roof_' + i).position= new BABYLON.Vector3(currentXposition, 0, (zBack*1)*0.001  - 0.075);


//
let smallYshift=0.05;
let fringeXOffset=0;
//if (i==1) fringeXOffset = -0.075;
//if (i==quantity-1) fringeXOffset = 0.075;

window.scene.getMeshByName('balk_small_back_left_' + i).position=new BABYLON.Vector3(fringeXOffset + currentXposition, 0+smallYshift, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('balk_small_back_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_back_right_' + i).position=new BABYLON.Vector3(fringeXOffset + currentXposition, 0+smallYshift, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('balk_small_back_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);

window.scene.getMeshByName('balk_small_front_left_' + i).position=new BABYLON.Vector3(fringeXOffset + currentXposition, 0+smallYshift, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('balk_small_front_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_front_right_' + i).position=new BABYLON.Vector3(fringeXOffset + currentXposition, 0+smallYshift, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('balk_small_front_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
//


// horisontal barks for roof
window.scene.getMeshByName('1meter_balk_front_' + i).position=new BABYLON.Vector3(fringeXOffset + -0.075 + currentXposition, 2.2+0.075, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('1meter_balk_back_' + i).position= new BABYLON.Vector3(fringeXOffset + -0.075 + currentXposition, 2.2+0.075, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('1meter_balk_roof_' + i).position= new BABYLON.Vector3(fringeXOffset + -0.075 + currentXposition, 1.66+0.075, (zBack)*0.001 - 0.075);

let  tempCurrentSectionWidth = currentSectionWidth;
if (window.appState['house1on'] == true && i == 1)         tempCurrentSectionWidth = window.appState['house1width'];
if (window.appState['house2on'] == true && i == quantity-1)  tempCurrentSectionWidth = window.appState['house2width'];


window.scene.getMeshByName('1meter_balk_front_' + i).scaling.x = tempCurrentSectionWidth * 0.001  + 0.15;
window.scene.getMeshByName('1meter_balk_back_' + i).scaling.x  = tempCurrentSectionWidth * 0.001  + 0.15;
window.scene.getMeshByName('1meter_balk_roof_' + i).scaling.x  = tempCurrentSectionWidth * 0.001  + 0.15;


if (window.appState['house2on'] == true && i == quantity-1)  tempCurrentSectionWidth = window.appState['house2width'];
//back roof wall
window.scene.getMeshByName('wall_small_carcas_' + i).position=new BABYLON.Vector3(0.075-fringeXOffset + currentXposition, 0, (zBack*1)*0.001 - 0.075);
window.scene.getMeshByName('wall_small_'  + i).position=new BABYLON.Vector3(0.075-fringeXOffset + currentXposition, 0, (zBack*1)*0.001 - 0.075);

window.scene.getMeshByName('wall_small_carcas_'  + i).scaling.x=((tempCurrentSectionWidth-150)/1000)/2.775;
window.scene.getMeshByName('wall_small_'  + i).scaling.x=((tempCurrentSectionWidth-150)/1000)/2.775;

window.scene.getMeshByName('wall_small_inside_'  + i).position=new BABYLON.Vector3(0.075-fringeXOffset + currentXposition, 0, (zBack*1)*0.001 - 0.075);
window.scene.getMeshByName('wall_small_inside_'  + i).scaling.x=((tempCurrentSectionWidth-150)/1000)/2.775;


}



}











































for(let i = 1; i<=9; i++)
{

  let currentSectionWidth = sectionWidth;


  if (window.appState['house1on'] == true && i == 1)  currentSectionWidth = window.appState['house1width'];
  if (window.appState['house2on'] == true && i == quantity-1)  currentSectionWidth = window.appState['house2width'];




  //roof
  if(i>0 && i<quantity){
  window.scene.getMeshByName('1meter_balk_front_' + i).setEnabled(true);
  window.scene.getMeshByName('1meter_balk_back_' + i).setEnabled(true);
  window.scene.getMeshByName('1meter_balk_roof_' + i).setEnabled(true);

  window.scene.getMeshByName('wall_small_carcas_' + i).setEnabled(true);
  window.scene.getMeshByName('wall_small_' + i).setEnabled(true);
  window.scene.getMeshByName('wall_small_inside_' + i).setEnabled(true);

  }

  //roof
  if(i>0 && i>quantity-1){
  window.scene.getMeshByName('1meter_balk_front_' + i).setEnabled(false);
  window.scene.getMeshByName('1meter_balk_back_' + i).setEnabled(false);
  window.scene.getMeshByName('1meter_balk_roof_' + i).setEnabled(false);

  window.scene.getMeshByName('wall_small_carcas_' + i).setEnabled(false);
  window.scene.getMeshByName('wall_small_' + i).setEnabled(false);
  window.scene.getMeshByName('wall_small_inside_' + i).setEnabled(false);


  }


if (i>quantity){
window.scene.getMeshByName('balk_back_' + i).setEnabled(false);
window.scene.getMeshByName('balk_front_' + i).setEnabled(false);
window.scene.getMeshByName('balk_roof_' + i).setEnabled(false);
window.scene.getMeshByName('balk_small_back_right_' + i).setEnabled(false);
window.scene.getMeshByName('balk_small_back_left_' + i).setEnabled(false);
window.scene.getMeshByName('balk_small_front_right_' + i).setEnabled(false);
window.scene.getMeshByName('balk_small_front_left_' + i).setEnabled(false);




}
else
{
window.scene.getMeshByName('balk_back_' + i).setEnabled(true);
window.scene.getMeshByName('balk_front_' + i).setEnabled(true);
window.scene.getMeshByName('balk_roof_' + i).setEnabled(true);
window.scene.getMeshByName('balk_small_back_right_' + i).setEnabled(true);
window.scene.getMeshByName('balk_small_back_left_' + i).setEnabled(true);
window.scene.getMeshByName('balk_small_front_right_' + i).setEnabled(true);
window.scene.getMeshByName('balk_small_front_left_' + i).setEnabled(true);





if (i==1)
{
window.scene.getMeshByName('balk_small_front_right_' + i).rotation=new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('balk_small_back_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI , 0);

if(window.appState['rooftype']==1)
{
let currentSectionWidthTEMP = sectionWidth;
if (window.appState['house1on'] == true) currentSectionWidthTEMP = window.appState['house1width'];


  window.scene.getMeshByName('1meter_balk_front_' + i).scaling.x = currentSectionWidthTEMP * 0.001  + 0.15 + 0.2;
  window.scene.getMeshByName('1meter_balk_roof_' + i).scaling.x  = currentSectionWidthTEMP * 0.001  + 0.15 + 0.2;

  window.scene.getMeshByName('1meter_balk_front_' + i).position.x = -0.075 + xStart  -0.2;
  window.scene.getMeshByName('1meter_balk_roof_' + i).position.x  = -0.075 + xStart  -0.2;
}

}

if (i==quantity)
{
  console.log(quantity + ' quantity' );
window.scene.getMeshByName('balk_small_front_left_' + i).rotation=new BABYLON.Vector3(0, 0  , 0);
window.scene.getMeshByName('balk_small_back_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI, 0);
//if roof type ==1





if(window.appState['rooftype']==1)
{
let currentSectionWidthTEMP = sectionWidth;


if (i>2)
{
if (window.appState['house2on'] == true) currentSectionWidthTEMP = window.appState['house2width'];
window.scene.getMeshByName('1meter_balk_front_' + (i-1)).scaling.x = currentSectionWidthTEMP * 0.001  + 0.15 + 0.2;
window.scene.getMeshByName('1meter_balk_roof_' + (i-1)).scaling.x  = currentSectionWidthTEMP * 0.001  + 0.15 + 0.2;
}

// if BALK Is SINGLE

if (i==2)
{
currentSectionWidthTEMP = x;

window.scene.getMeshByName('1meter_balk_front_' + (i-1)).scaling.x = currentSectionWidthTEMP * 0.001  + 0.15 + 0.4;
window.scene.getMeshByName('1meter_balk_roof_' + (i-1)).scaling.x  = currentSectionWidthTEMP * 0.001  + 0.15 + 0.4;
}

}





}

}




}





if (window.appState['rooftype']==1)
{
  //enaabling waalls roof2
window.scene.getMeshByName('wall_trap_0_carcas').setEnabled(true);
window.scene.getMeshByName('wall_trap_1_carcas').setEnabled(true);
window.scene.getMeshByName('wall_trap_0').setEnabled(true);
window.scene.getMeshByName('wall_trap_1').setEnabled(true);
//if wall 2 sided
window.scene.getMeshByName('wall_trap_0_inside').setEnabled(true);
window.scene.getMeshByName('wall_trap_1_inside').setEnabled(true);


//wall side flangs
window.scene.getMeshByName('wall_trap_0').position.x = (x/1000)/-2 ;
window.scene.getMeshByName('wall_trap_1').position.x = (x/1000)/ 2 ;

window.scene.getMeshByName('wall_trap_0_carcas').position.x = (x/1000)/-2 ;
window.scene.getMeshByName('wall_trap_1_carcas').position.x = (x/1000)/ 2 ;

window.scene.getMeshByName('wall_trap_0_inside').position.x = (x/1000)/-2 - 0.01;
window.scene.getMeshByName('wall_trap_1_inside').position.x = (x/1000)/ 2 + 0.01;



window.scene.getMeshByName('wall_trap_0').position.z = (z/1000)/ 2 - 1;
window.scene.getMeshByName('wall_trap_1').position.z = (z/1000)/ 2 - 1;
window.scene.getMeshByName('wall_trap_0_carcas').position.z = (z/1000)/ 2 - 1;
window.scene.getMeshByName('wall_trap_1_carcas').position.z = (z/1000)/ 2 - 1;
window.scene.getMeshByName('wall_trap_0_inside').position.z = (z/1000)/ 2 - 1;
window.scene.getMeshByName('wall_trap_1_inside').position.z = (z/1000)/ 2 - 1;


//if wall 2 sided




//roof central bulk
window.scene.getMeshByName('angle_roof_x_bulk').setEnabled(true);
window.scene.getMeshByName('angle_roof_x_bulk').scaling.x=x*0.001 + 0.5;
window.scene.getMeshByName('angle_roof_x_bulk').position.x= (x/1000)/-2 - 0.25;
if (z==3000)window.scene.getMeshByName('angle_roof_x_bulk').position.y=2.9;
if (z==3500)window.scene.getMeshByName('angle_roof_x_bulk').position.y=3.04;
if (z==4000)window.scene.getMeshByName('angle_roof_x_bulk').position.y=3.18;
if (z==4500)window.scene.getMeshByName('angle_roof_x_bulk').position.y=3.33;
if (z==5000)window.scene.getMeshByName('angle_roof_x_bulk').position.y=3.47;

//disabling flatRoof

window.scene.getMeshByName("balk_center_0").setEnabled(false);
window.scene.getMeshByName("balk_center_1").setEnabled(false);
window.scene.getMeshByName("balk_small_center_left_0").setEnabled(false);
window.scene.getMeshByName("balk_small_center_right_0").setEnabled(false);
window.scene.getMeshByName("balk_small_center_left_1").setEnabled(false);
window.scene.getMeshByName("balk_small_center_right_1").setEnabled(false);



 window.scene.getMeshByName("roofPlane").setEnabled(false);
 for(let i=1; i<=2;i++)
 {
 window.scene.getMeshByName('flatRoof' + i + '_left').setEnabled(false);
 window.scene.getMeshByName('flatRoof' + i + '_right').setEnabled(false);
 window.scene.getMeshByName('flatRoof' + i + '_front').setEnabled(false);
 window.scene.getMeshByName('flatRoof' + i + '_back').setEnabled(false);
 }

 window.scene.getMeshByName('roofBorder1').setEnabled(false);
 window.scene.getMeshByName('roofBorder2').setEnabled(false);
 window.scene.getMeshByName('roofBorder3').setEnabled(false);
 window.scene.getMeshByName('roofBorder4').setEnabled(false);


//for (let i=0; i<=41; i++)
// {
// window.scene.getMeshByName('flat_roof_bulk_' + i).setEnabled(false);
// }

for(let i=0; i<=26;i++){
  window.scene.getMeshByName('flat_roof_15mm' + i).setEnabled(false);
}

  window.scene.getMeshByName('flat_roof_x1_bulk').setEnabled(false);
  window.scene.getMeshByName('flat_roof_x2_bulk').setEnabled(false);
// disabling end


for (let i=0; i<=41; i++)
{
window.scene.getMeshByName('flat_roof_bulk_' + i).position.x=xStart + i * 0.50;

window.scene.getMeshByName('flat_roof_bulk_' + i).position.z=(z/1000)/-2 + 0.10;
window.scene.getMeshByName('flat_roof_bulk_' + i).scaling.x= z/1000 - 1.1;
if (x<(i*500)) window.scene.getMeshByName('flat_roof_bulk_' + i).setEnabled(false);
else window.scene.getMeshByName('flat_roof_bulk_' + i).setEnabled(true);
}



//roof  sideflangs
for (let i=1; i<=5; i++)
{
window.scene.getMeshByName(i + 'roof_side_left').position.x  = (x/-2) * 0.001 - 0.15;
window.scene.getMeshByName(i + 'roof_side_right').position.x = (x/2)  * 0.001 + 0.15;

window.scene.getMeshByName(i + 'roof_side_right').position.y =1.7;
window.scene.getMeshByName(i + 'roof_side_left').position.y =1.7;
}

//roof_wood
for (let i=1; i<=5; i++)
{
window.scene.getMeshByName(i + 'roof_wood').scaling.x=x*0.001+0.5;
window.scene.getMeshByName(i + 'roof_wood').position.x  = (x/2) * 0.001 + 0.25;
window.scene.getMeshByName(i + 'roof_wood').position.y=2.35 + (i*0.075);
}

//roof wall
for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('wall_roof_' + i).position.x = (x/-2000);
window.scene.getMeshByName('wall_roof_' + i).position.y = 2.35;
window.scene.getMeshByName('wall_roof_' + i).position.z = (z/2000)-1.05;

window.scene.getMeshByName('wall_roof_inside_' + i).position.x = (x/-2000);
window.scene.getMeshByName('wall_roof_inside_' + i).position.y = 2.35;
window.scene.getMeshByName('wall_roof_inside_' + i).position.z = (z/2000)-1.05;

//
window.scene.getMeshByName('wall_roof_clone_' + i).position.x = (x/2000);
window.scene.getMeshByName('wall_roof_clone_' + i).position.y = 2.35;
window.scene.getMeshByName('wall_roof_clone_' + i).position.z = (z/2000)-1.05;

window.scene.getMeshByName('wall_roof_clone_inside_' + i).position.x = (x/2000) ;
window.scene.getMeshByName('wall_roof_clone_inside_' + i).position.y = 2.35;
window.scene.getMeshByName('wall_roof_clone_inside_' + i).position.z = (z/2000)-1.05;
//
window.scene.getMeshByName('wall_roof_carcas_' + i ).position.x = (x/-2000);
window.scene.getMeshByName('wall_roof_carcas_' + i ).position.y = 2.35;
window.scene.getMeshByName('wall_roof_carcas_' + i ).position.z = (z/2000)-1.05;

window.scene.getMeshByName('wall_roof_carcas_clone_' + i ).position.x = (x/2000)+0.035;
window.scene.getMeshByName('wall_roof_carcas_clone_' + i ).position.y = 2.35;
window.scene.getMeshByName('wall_roof_carcas_clone_' + i ).position.z = (z/2000)-1.05;




}




for(let roofNum=1;roofNum<=5;roofNum++)
 {

let roofStatus = false;

if ((z==3000 && roofNum==1)||(z==3500 && roofNum==2)||(z==4000 && roofNum==3)||(z==4500 && roofNum==4)||(z==5000 && roofNum==5)) roofStatus = true;

//roof walls enabling
window.scene.getMeshByName('wall_roof_' + roofNum).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_' + roofNum).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_' + roofNum).setEnabled(roofStatus);

window.scene.getMeshByName('wall_roof_carcas_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_carcas_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_carcas_' + roofNum ).setEnabled(roofStatus);

window.scene.getMeshByName('wall_roof_clone_' + roofNum).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_clone_' + roofNum).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_clone_' + roofNum).setEnabled(roofStatus);

window.scene.getMeshByName('wall_roof_carcas_clone_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_carcas_clone_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_carcas_clone_' + roofNum ).setEnabled(roofStatus);




window.scene.getMeshByName('house1_wall_roof_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('house1_wall_roof_inside_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('house1_wall_roof_carcas_' + roofNum ).setEnabled(roofStatus);

window.scene.getMeshByName('wall_roof_inside_' + roofNum).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_clone_inside_' + roofNum).setEnabled(roofStatus);

window.scene.getMeshByName('wall_roof_inside_' + roofNum).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_clone_inside_' + roofNum).setEnabled(roofStatus);

if (window.appState['rooftype'] == 0)
{
  window.scene.getMeshByName('wall_roof_inside_' + roofNum).setEnabled(false);
  window.scene.getMeshByName('wall_roof_clone_inside_' + roofNum).setEnabled(false);
}

window.scene.getMeshByName('house2_wall_roof_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('house2_wall_roof_inside_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('house2_wall_roof_carcas_' + roofNum ).setEnabled(roofStatus);













window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(roofStatus);
window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(roofStatus);
window.scene.getMeshByName(roofNum + 'roof_wood').setEnabled(roofStatus);

window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(roofStatus);
window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(roofStatus);
window.scene.getMeshByName(roofNum + 'roof_wood').setEnabled(roofStatus);











//middle ROOF
for (let i=0; i<=41; i++)
{
window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).position.x=xStart + i * 0.50;
window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).position.y=1.7;
window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).position.z=0;
//window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).position=new BABYLON.Vector3(xStart + i * 0.50, 0.5, -0.5);
//


if (x<(i*500)) window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);
 else window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(true);

if (z==3000 ){if(roofNum!=1){window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);  }}
if (z==3500 ){if(roofNum!=2){window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);  }}
if (z==4000 ){if(roofNum!=3){window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);  }}
if (z==4500 ){if(roofNum!=4){window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);  }}
if (z==5000 ){if(roofNum!=5){window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);  }}



}





// roof TILE
 for (let i=0; i<=81; i++)
 {
 window.scene.getMeshByName(roofNum + 'roof_tile_' + i).position=new BABYLON.Vector3(xStart + i * 0.25, 0.55, -0.47);


 if (x<(i*250-250)) window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);
 else window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(true);

 if (z==3000 ){if(roofNum!=1){   window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false); }}
 if (z==3500 ){if(roofNum!=2){window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);  }}
 if (z==4000 ){if(roofNum!=3){window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);  }}
 if (z==4500 ){if(roofNum!=4){window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);  }}
 if (z==5000 ){if(roofNum!=5){window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);  }}

 }

} //end roof5

}

if (window.appState['rooftype']==0)
{
//central balk
if (z==5000)
{
  window.scene.getMeshByName("balk_center_0").setEnabled(true);
  window.scene.getMeshByName("balk_center_1").setEnabled(true);
  window.scene.getMeshByName("balk_small_center_left_0").setEnabled(true);
  window.scene.getMeshByName("balk_small_center_right_0").setEnabled(true);
  window.scene.getMeshByName("balk_small_center_left_1").setEnabled(true);
  window.scene.getMeshByName("balk_small_center_right_1").setEnabled(true);




  window.scene.getMeshByName("balk_center_0").position.x=(x/1000)/2;
  window.scene.getMeshByName("balk_center_1").position.x=(x/1000)/-2;

 window.scene.getMeshByName('balk_small_center_left_0').position.x = (x/1000)/2;
window.scene.getMeshByName('balk_small_center_right_0').position.x = (x/1000)/2;

window.scene.getMeshByName('balk_small_center_left_1').position.x = (x/1000)/-2;
window.scene.getMeshByName('balk_small_center_right_1').position.x = (x/1000)/-2;


}
else
{
  window.scene.getMeshByName("balk_center_0").setEnabled(false);
  window.scene.getMeshByName("balk_center_1").setEnabled(false);

  window.scene.getMeshByName("balk_small_center_left_0").setEnabled(false);
  window.scene.getMeshByName("balk_small_center_right_0").setEnabled(false);

  window.scene.getMeshByName("balk_small_center_left_1").setEnabled(false);
  window.scene.getMeshByName("balk_small_center_right_1").setEnabled(false);


}

window.scene.getMeshByName('flat_roof_x1_bulk').scaling.x=  roofFlatShiftLeft + roofFlatShiftRight + x/1000;
window.scene.getMeshByName('flat_roof_x2_bulk').scaling.x=  roofFlatShiftLeft + roofFlatShiftRight + x/1000;
window.scene.getMeshByName('flat_roof_x1_bulk').position.x =(x/1000)/-2 - roofFlatShiftLeft;
window.scene.getMeshByName('flat_roof_x2_bulk').position.x =(x/1000)/-2 - roofFlatShiftLeft;
window.scene.getMeshByName('flat_roof_x1_bulk').position.z =(z/1000)/-2 + 0.00075;
window.scene.getMeshByName('flat_roof_x2_bulk').position.z =(z/1000)/2  - 0.00075;




//ROFF FLAT 2
for(let i=1; i<=2;i++)
{
let multiply=1;
if (i==1) multiply=1.0;
if (i==2) multiply=0.95;

let offset=1;
if (i==1) offset=0;
if (i==2) offset=0;

window.scene.getMeshByName('flatRoof' + i + '_left').position=
new BABYLON.Vector3(xStart-roofFlatShiftLeft * multiply,  2.2 + 0.075 + 0.15/i, (zBack*-1)*0.001 - roofFlatShiftFront * multiply + 0.075 + offset);
window.scene.getMeshByName('flatRoof' + i + '_right').position=
new BABYLON.Vector3(xStart *-1 + roofFlatShiftRight * multiply,  2.2 + 0.075 + 0.15/i, (zBack*-1)*0.001 - roofFlatShiftFront * multiply + 0.075 + offset);


window.scene.getMeshByName('flatRoof' + i + '_front').position=new BABYLON.Vector3(xStart-roofFlatShiftLeft * multiply,  2.2 + 0.075 + 0.15/i, (zBack*-1)*0.001 - roofFlatShiftFront * multiply + 0.075 + offset);
window.scene.getMeshByName('flatRoof' + i + '_back').position =new BABYLON.Vector3(xStart-roofFlatShiftLeft * multiply,  2.2 + 0.075 + 0.15/i, (zBack)*0.001 + roofFlatShiftBack * multiply - 0.075 - offset);


window.scene.getMeshByName('flatRoof' + i + '_front').scaling.x  = x * 0.001 + roofFlatShiftLeft * multiply + roofFlatShiftRight * multiply;
window.scene.getMeshByName('flatRoof' + i + '_back').scaling.x = x * 0.001 + roofFlatShiftLeft * multiply + roofFlatShiftRight * multiply;

window.scene.getMeshByName('flatRoof' + i + '_left').scaling.x  = z * 0.001 - shiftZ + roofFlatShiftFront * multiply + roofFlatShiftBack * multiply - 0.15;
window.scene.getMeshByName('flatRoof' + i + '_right').scaling.x = z * 0.001 - shiftZ + roofFlatShiftFront * multiply + roofFlatShiftBack * multiply - 0.15;
}

//BORDERS




let roofFlatShiftLeftBorder = roofFlatShiftLeft + 0.04 - 0.035;
let roofFlatShiftRightBorder = roofFlatShiftRight + 0.04 - 0.035;
let roofFlatShiftFrontBorder = roofFlatShiftFront + 0.04 - 0.035;
let roofFlatShiftBackBorder = roofFlatShiftBack + 0.04 - 0.035;

let offset=0;
let borderDeltaX = (roofFlatShiftLeftBorder - roofFlatShiftRightBorder)/2;
let borderDeltaZ = (roofFlatShiftFrontBorder - roofFlatShiftBackBorder)/2;
let borderY=2.55;


window.scene.getMeshByName('roofBorder1').position=
new BABYLON.Vector3(0 - borderDeltaX,  borderY, (zBack*-1)*0.001 - roofFlatShiftFrontBorder + 0.075 + 0.025);
window.scene.getMeshByName('roofBorder2').position =
new BABYLON.Vector3(0 - borderDeltaX,  borderY, (zBack)*0.001 + roofFlatShiftBackBorder  - 0.075 - 0.025);
//left right
window.scene.getMeshByName('roofBorder3').position=
new BABYLON.Vector3(xStart-roofFlatShiftLeftBorder + 0.025,  borderY, 0-borderDeltaZ);
window.scene.getMeshByName('roofBorder4').position=
new BABYLON.Vector3(xStart *-1 + roofFlatShiftRightBorder  - 0.025,  borderY, 0-borderDeltaZ);

window.scene.getMeshByName('roofBorder1').scaling.x =  x * 0.001 + roofFlatShiftLeftBorder  + roofFlatShiftRightBorder ;
window.scene.getMeshByName('roofBorder2').scaling.x =  x * 0.001 + roofFlatShiftLeftBorder  + roofFlatShiftRightBorder ;
window.scene.getMeshByName('roofBorder3').scaling.z = z * 0.001  + roofFlatShiftFrontBorder + roofFlatShiftBackBorder  - 0.15;
window.scene.getMeshByName('roofBorder4').scaling.z = z * 0.001  + roofFlatShiftFrontBorder  + roofFlatShiftBackBorder  - 0.15;



//disabling waalls roof2
window.scene.getMeshByName('wall_trap_0_carcas').setEnabled(false);
window.scene.getMeshByName('wall_trap_1_carcas').setEnabled(false);
window.scene.getMeshByName('wall_trap_0').setEnabled(false);
window.scene.getMeshByName('wall_trap_1').setEnabled(false);
window.scene.getMeshByName('wall_trap_0_inside').setEnabled(false);
window.scene.getMeshByName('wall_trap_1_inside').setEnabled(false);


//disable canopy 2
window.scene.getMeshByName('angle_roof_x_bulk').setEnabled(false);

for(let i = 1; i<=9; i++)
{
window.scene.getMeshByName('1meter_balk_roof_' + i).setEnabled(false);
window.scene.getMeshByName('balk_roof_' + i).setEnabled(false);

window.scene.getMeshByName('wall_small_' + i).setEnabled(false);
window.scene.getMeshByName('wall_small_carcas_' + i).setEnabled(false);
}


//disabling 5 roofs
 for(let roofNum=1;roofNum<=5;roofNum++)
 {

//roof wall_roof

window.scene.getMeshByName('wall_roof_' + roofNum).setEnabled(false);
window.scene.getMeshByName('wall_roof_' + roofNum).setEnabled(false);
window.scene.getMeshByName('wall_roof_' + roofNum).setEnabled(false);

window.scene.getMeshByName('wall_roof_carcas_' + roofNum ).setEnabled(false);
window.scene.getMeshByName('wall_roof_carcas_' + roofNum ).setEnabled(false);
window.scene.getMeshByName('wall_roof_carcas_' + roofNum ).setEnabled(false);

window.scene.getMeshByName('wall_roof_clone_' + roofNum).setEnabled(false);
window.scene.getMeshByName('wall_roof_clone_' + roofNum).setEnabled(false);
window.scene.getMeshByName('wall_roof_clone_' + roofNum).setEnabled(false);

window.scene.getMeshByName('wall_roof_carcas_clone_' + roofNum ).setEnabled(false);
window.scene.getMeshByName('wall_roof_carcas_clone_' + roofNum ).setEnabled(false);
window.scene.getMeshByName('wall_roof_carcas_clone_' + roofNum ).setEnabled(false);

window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(false);
window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(false);
window.scene.getMeshByName(roofNum + 'roof_wood').setEnabled(false);






  for (let i=0; i<=81; i++)
  {
  window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);
  }

  for (let i=0; i<=41; i++)
  {
  window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);
  }

}


//flat roof 15mm array
for(let i=0; i<=26;i++){

window.scene.getMeshByName('flat_roof_15mm' + i).scaling.x= x/1000 + roofFlatShiftLeft + roofFlatShiftRight;
window.scene.getMeshByName('flat_roof_15mm' + i).scaling.z=1.33;

window.scene.getMeshByName('flat_roof_15mm' + i).position.x= (x/1000)/-2 - roofFlatShiftLeft;
window.scene.getMeshByName('flat_roof_15mm' + i).position.z= (z/1000)/2 - (i) * 0.2 + 0.1;
window.scene.getMeshByName('flat_roof_15mm' + i).position.y=2.47;



if(z<((i-1)*200))
window.scene.getMeshByName('flat_roof_15mm' + i).setEnabled(false);
else
window.scene.getMeshByName('flat_roof_15mm' + i).setEnabled(true);

if(z==((i-1)*200) || i==0)
window.scene.getMeshByName('flat_roof_15mm' + i).position.y=2.48;

if(i==0)
{
window.scene.getMeshByName('flat_roof_15mm' + i).scaling.z=3;
window.scene.getMeshByName('flat_roof_15mm' + i).position.z=(z/1000)/2 - (i) * 0.2 + roofFlatShiftBack - 0.225 - 0.09;
}

if(z==((i-1)*200))
{
window.scene.getMeshByName('flat_roof_15mm' + i).scaling.z=3;
window.scene.getMeshByName('flat_roof_15mm' + i).position.z=(z/1000)/2 - (i-1) * 0.2 - roofFlatShiftFront + 0.225 + 0.09;
}



}


//flat roof mid
for (let i=0; i<=41; i++)
{
window.scene.getMeshByName('flat_roof_bulk_' + i).position.x=xStart + i * 0.50;

window.scene.getMeshByName('flat_roof_bulk_' + i).position.z=(z/1000)/-2 - roofFlatShiftFront + 0.10;
window.scene.getMeshByName('flat_roof_bulk_' + i).scaling.x= roofFlatShiftFront + roofFlatShiftBack + z/1000 -0.2;




if (x<(i*500)) window.scene.getMeshByName('flat_roof_bulk_' + i).setEnabled(false);
else window.scene.getMeshByName('flat_roof_bulk_' + i).setEnabled(true);
}


window.scene.getMeshByName("roofPlane").setEnabled(true);
window.scene.getMeshByName("roofPlane").scaling=new BABYLON.Vector3(  x/1000 + roofFlatShiftLeft + roofFlatShiftRight,  1,   z/1000 +  + roofFlatShiftBack + roofFlatShiftFront -0.15);

window.scene.getMeshByName("roofPlane").position.x=(roofFlatShiftLeft - roofFlatShiftRight)/-2;
window.scene.getMeshByName("roofPlane").position.z=(roofFlatShiftFront - roofFlatShiftBack)/-2;
window.scene.getMeshByName("roofPlane").position.y=2.50;

//enabling flaat roof balks
for(let i=1; i<=2;i++)
{
window.scene.getMeshByName('flatRoof' + i + '_left').setEnabled(true);
window.scene.getMeshByName('flatRoof' + i + '_right').setEnabled(true);
window.scene.getMeshByName('flatRoof' + i + '_front').setEnabled(true);
window.scene.getMeshByName('flatRoof' + i + '_back').setEnabled(true);
}

window.scene.getMeshByName('roofBorder1').setEnabled(true);
window.scene.getMeshByName('roofBorder2').setEnabled(true);
window.scene.getMeshByName('roofBorder3').setEnabled(true);
window.scene.getMeshByName('roofBorder4').setEnabled(true);





}

x=x+30;
window.scene.getMeshByName("groundPlane").scaling=new BABYLON.Vector3(x/1000 + 2, 1, z/1000 + 2);

window.scene.getMaterialByName('groundMaterial').albedoTexture.vScale = 1 * (x/1000 + 2);
window.scene.getMaterialByName('groundMaterial').albedoTexture.uScale = 1 * (z/1000 + 2);

window.scene.getMaterialByName('groundMaterial').bumpTexture.vScale = 1 * (x/1000 + 2);
window.scene.getMaterialByName('groundMaterial').bumpTexture.uScale = 1* (z/1000 + 2);


window.scene.getMaterialByName('RoofTileMaterialFlat').albedoTexture.vScale = 0.65 * (x/1000 );
window.scene.getMaterialByName('RoofTileMaterialFlat').albedoTexture.uScale = 0.65 * (z/1000 );
window.scene.getMaterialByName('RoofTileMaterialFlat').bumpTexture.vScale = 0.65 * (x/1000 );
window.scene.getMaterialByName('RoofTileMaterialFlat').bumpTexture.uScale = 0.65 * (z/1000 );



updateSections();
rebuildHouses();
elementsUpdate();

window.scene.getCameraByID('camera1').spinTo("radius", 9+x/2000, 200);
window.scene.getCameraByID('camera1').lowerRadiusLimit=4+x/2000;
window.scene.getCameraByID('camera1').upperRadiusLimit=20+x/2000;


window.scene.getLightByName('light_point_2').position.x = 4 + x/2000;
window.scene.getLightByName('light_point_4').position.x = -4 - x/2000;

window.scene.getLightByName('light_point_3').position.z = 8 + z/2000;
window.scene.getLightByName('light_point_5').position.z = -8 - z/2000;

}
