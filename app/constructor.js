window.appState=[];
window.appState['width']=5000;
window.appState['deepth']=3000;
window.appState['rooftype']=0;


window.appState['rooftype']=0;

window.appState['uiMenu1']=1;
window.appState['uiMenu2']=1;



window.appState['overhangLeft']=200;
window.appState['overhangRight']=200;
window.appState['overhangFront']=200;
window.appState['overhangBack']=200;



function buildRound(x,z)
{
var zBack=z/2;
var quantity=Math.floor(x/4000)+2;
if (x % 4000 ==0) quantity = x/4000+1;
//console.log(x % 3500);
if (x<4000)       quantity = 2;


var sectionWidth=x/(quantity-1);


//alert(sectionWidth + ' x '+ quantity);
var xStart=(x/2)*-0.001;
if(quantity>7) quantity=7;
//no more six
var shiftZ;
if(window.appState['rooftype']==1) shiftZ=1; else shiftZ=0;


//roof BALK

//window.scene.getMeshByName('1meter_balk_vertical_left').position=new BABYLON.Vector3(-0.075 + xStart, 1.7+0.075, (zBack)*0.001);
//window.scene.getMeshByName('1meter_balk_vertical_right').position=new BABYLON.Vector3(-0.075 + xStart -(sectionWidth*0.001)/1+ quantity * (sectionWidth*0.001), 1.7+0.075, (zBack)*0.001);
window.scene.getMeshByName('1meter_balk_vertical_left').position=new BABYLON.Vector3(xStart,  2.2+0.075, (zBack*-1)*0.001);
window.scene.getMeshByName('1meter_balk_vertical_right').position=new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1 + quantity * (sectionWidth*0.001),  2.2+0.075, (zBack*-1)*0.001);
window.scene.getMeshByName('1meter_balk_vertical_left').scaling.x  = z * 0.001 - shiftZ;
window.scene.getMeshByName('1meter_balk_vertical_right').scaling.x = z * 0.001 - shiftZ;


let roofBalkShift=0.08;
let roofFlatShiftLeft=window.appState['overhangLeft']*0.001 + roofBalkShift;
let roofFlatShiftRight=window.appState['overhangRight']*0.001  + roofBalkShift;
let roofFlatShiftFront=window.appState['overhangFront']*0.001  + roofBalkShift;
let roofFlatShiftBack=window.appState['overhangBack']*0.001  + roofBalkShift;












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
window.scene.getMeshByName('balk_small_back_left_' + i).position=new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0+smallYshift, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('balk_small_back_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_back_right_' + i).position=new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0+smallYshift, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('balk_small_back_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);

window.scene.getMeshByName('balk_small_front_left_' + i).position=new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0+smallYshift, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('balk_small_front_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_front_right_' + i).position=new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0+smallYshift, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('balk_small_front_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
//



// horisontal barks for roof
window.scene.getMeshByName('1meter_balk_front_' + i).position=new BABYLON.Vector3(-0.075 + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 2.2+0.075, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('1meter_balk_back_' + i).position= new BABYLON.Vector3(-0.075 + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 2.2+0.075, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('1meter_balk_roof_' + i).position= new BABYLON.Vector3(-0.075 + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 1.7+0.075, (zBack)*0.001 - 0.075);




window.scene.getMeshByName('1meter_balk_front_' + i).scaling.x = sectionWidth * 0.001  + 0.15;
window.scene.getMeshByName('1meter_balk_back_' + i).scaling.x  = sectionWidth * 0.001  + 0.15;
window.scene.getMeshByName('1meter_balk_roof_' + i).scaling.x  = sectionWidth * 0.001  + 0.15;



///TransformNormalFromFloatsToRef





//alert(i * (sectionWidth*0.001));
}

for(let i = 1; i<=7; i++)
{



  //roof
  if(i>0 && i<quantity){
  window.scene.getMeshByName('1meter_balk_front_' + i).setEnabled(true);
  window.scene.getMeshByName('1meter_balk_back_' + i).setEnabled(true);
  window.scene.getMeshByName('1meter_balk_roof_' + i).setEnabled(true);
  }

  //roof
  if(i>0 && i>quantity-1){
  window.scene.getMeshByName('1meter_balk_front_' + i).setEnabled(false);
  window.scene.getMeshByName('1meter_balk_back_' + i).setEnabled(false);
  window.scene.getMeshByName('1meter_balk_roof_' + i).setEnabled(false);
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
  window.scene.getMeshByName('1meter_balk_front_' + i).scaling.x = sectionWidth * 0.001  + 0.15 + 0.2;
  window.scene.getMeshByName('1meter_balk_roof_' + i).scaling.x  = sectionWidth * 0.001  + 0.15 + 0.2;

  window.scene.getMeshByName('1meter_balk_front_' + i).position.x = -0.075 + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001) -0.2;
  window.scene.getMeshByName('1meter_balk_roof_' + i).position.x  = -0.075 + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001) -0.2;


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
if (i>1)
{
window.scene.getMeshByName('1meter_balk_front_' + (i-1)).scaling.x = sectionWidth * 0.001  + 0.15 + 0.2;
window.scene.getMeshByName('1meter_balk_roof_' + (i-1)).scaling.x  = sectionWidth * 0.001  + 0.15 + 0.2;
}

if (i==2)
{
window.scene.getMeshByName('1meter_balk_front_' + (i-1)).scaling.x = sectionWidth * 0.001  + 0.15 + 0.4;
window.scene.getMeshByName('1meter_balk_roof_' + (i-1)).scaling.x  = sectionWidth * 0.001  + 0.15 + 0.4;
}

}
}

}




}





if (window.appState['rooftype']==1)
{
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

for (let i=0; i<=41; i++)
 {
 window.scene.getMeshByName('flat_roof_bulk_' + i).setEnabled(false);
 }

for(let i=0; i<=26;i++){
  window.scene.getMeshByName('flat_roof_15mm' + i).setEnabled(false);
}

  window.scene.getMeshByName('flat_roof_x1_bulk').setEnabled(false);
  window.scene.getMeshByName('flat_roof_x2_bulk').setEnabled(false);
// disabling end


//roof flangs
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


for(let roofNum=1;roofNum<=5;roofNum++)
 {
   if (z==3000 ){
     if(roofNum!=1){
     window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(false);
     window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(false);
     window.scene.getMeshByName(roofNum + 'roof_wood').setEnabled(false);

   }
else {
  window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(true);
  window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(true);
  window.scene.getMeshByName(roofNum + 'roof_wood').setEnabled(true);
}
}
   if (z==3500 ){
     if(roofNum!=2){
     window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(false);
     window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(false);
     window.scene.getMeshByName(roofNum + 'roof_wood').setEnabled(false);

   }
   else {
     window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(true);
     window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(true);
    window.scene.getMeshByName(roofNum + 'roof_wood').setEnabled(true);
   }
 }
   if (z==4000 ){
     if(roofNum!=3){
     window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(false);
     window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(false);
     window.scene.getMeshByName(roofNum + 'roof_wood').setEnabled(false);

   }
   else {
     window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(true);
     window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(true);
    window.scene.getMeshByName(roofNum + 'roof_wood').setEnabled(true);
   }

 }
   if (z==4500 ){
     if(roofNum!=4){
     window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(false);
     window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(false);
     window.scene.getMeshByName(roofNum + 'roof_wood').setEnabled(false);

   }
   else {
     window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(true);
     window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(true);
          window.scene.getMeshByName(roofNum + 'roof_wood').setEnabled(true);
   }

 }
   if (z==5000 ){
     if(roofNum!=5){
     window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(false);
     window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(false);
     window.scene.getMeshByName(roofNum + 'roof_wood').setEnabled(false);

   }
   else {
     window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(true);
     window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(true);
     window.scene.getMeshByName(roofNum + 'roof_wood').setEnabled(true);

   }

 }




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

 if (z==3000 ){if(roofNum!=1){
   window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);
   window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(false);
   window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(false);

 }}
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
new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1 + quantity * (sectionWidth*0.001) + roofFlatShiftRight * multiply,  2.2 + 0.075 + 0.15/i, (zBack*-1)*0.001 - roofFlatShiftFront * multiply + 0.075 + offset);


window.scene.getMeshByName('flatRoof' + i + '_front').position=new BABYLON.Vector3(xStart-roofFlatShiftLeft * multiply,  2.2 + 0.075 + 0.15/i, (zBack*-1)*0.001 - roofFlatShiftFront * multiply + 0.075 + offset);
window.scene.getMeshByName('flatRoof' + i + '_back').position =new BABYLON.Vector3(xStart-roofFlatShiftLeft * multiply,  2.2 + 0.075 + 0.15/i, (zBack)*0.001 + roofFlatShiftBack * multiply - 0.075 - offset);


window.scene.getMeshByName('flatRoof' + i + '_front').scaling.x  = x * 0.001 + roofFlatShiftLeft * multiply + roofFlatShiftRight * multiply;
window.scene.getMeshByName('flatRoof' + i + '_back').scaling.x = x * 0.001 + roofFlatShiftLeft * multiply + roofFlatShiftRight * multiply;

window.scene.getMeshByName('flatRoof' + i + '_left').scaling.x  = z * 0.001 - shiftZ + roofFlatShiftFront * multiply + roofFlatShiftBack * multiply - 0.15;
window.scene.getMeshByName('flatRoof' + i + '_right').scaling.x = z * 0.001 - shiftZ + roofFlatShiftFront * multiply + roofFlatShiftBack * multiply - 0.15;
}





 for(let roofNum=1;roofNum<=5;roofNum++)
 {
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


for(let i=1; i<=2;i++)
{
window.scene.getMeshByName('flatRoof' + i + '_left').setEnabled(true);
window.scene.getMeshByName('flatRoof' + i + '_right').setEnabled(true);
window.scene.getMeshByName('flatRoof' + i + '_front').setEnabled(true);
window.scene.getMeshByName('flatRoof' + i + '_back').setEnabled(true);
}



//disable canopy 2
window.scene.getMeshByName('angle_roof_x_bulk').setEnabled(false);

for(let i = 1; i<=7; i++)
{
window.scene.getMeshByName('1meter_balk_roof_' + i).setEnabled(false);
window.scene.getMeshByName('balk_roof_' + i).setEnabled(false);


}


}


window.scene.getMeshByName("groundPlane").scaling=new BABYLON.Vector3(x/1000 + 2, 1, z/1000 + 2);



window.scene.getCameraByID('camera1').spinTo("radius", 9+x/2000, 200);
window.scene.getCameraByID('camera1').lowerRadiusLimit=5+x/2000;

}

function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

function setSizes(){
	let x = window.appState['width'];
	let z = window.appState['deepth'];
  let overhangLeft = window.appState['overhangLeft'];
	let overhangRight = window.appState['overhangRight'];
	let overhangFront = window.appState['overhangFront'];
	let overhangBack = window.appState['overhangBack'];


	if (isInt(x)==false)x=3000;
	if (isInt(z)==false)z=3000;
	if (isInt(overhangLeft)==false) overhangLeft=200;
  if (isInt(overhangRight)==false) overhangRight=200;
  if (isInt(overhangFront)==false) overhangFront=200;
  if (isInt(overhangBack)==false) overhangBack=200;


x=Math.round(x/500)*500;
z=Math.round(z/500)*500;
overhangLeft=Math.round(overhangLeft/50)*50;
overhangRight=Math.round(overhangRight/50)*50;
overhangFront=Math.round(overhangFront/50)*50;
overhangBack=Math.round(overhangBack/50)*50;

if(x<3000){x=3000;}
if(x>20000){x=20000;}

if(overhangLeft<0){overhangLeft=0;}
if(overhangRight<0){overhangRight=0;}
if(overhangFront<0){overhangFront=0;}
if(overhangBack<0){overhangBack=0;}

if(z<3000){z=3000;}
if(z>5000){z=5000;}

if(overhangLeft>350){overhangLeft=350;}
if(overhangRight>350){overhangRight=350;}
if(overhangFront>350){overhangFront=350;}
if(overhangBack>350){overhangBack=350;}



window.appState['width']=x;
window.appState['deepth']=z;
window.appState['overhangLeft'] =  overhangLeft;
window.appState['overhangRight'] = overhangRight;
window.appState['overhangFront'] = overhangFront;
window.appState['overhangBack'] = overhangBack;


document.getElementById('widthInput').value = x;
document.getElementById('deepthInput').value = z;

document.getElementById("rangeWidth").value=x;
document.getElementById("rangeDeepth").value=z;

document.getElementById("overhangLeft").value=overhangLeft;
document.getElementById("overhangRight").value=overhangRight;
document.getElementById("overhangFront").value=overhangFront;
document.getElementById("overhangBack").value=overhangBack;






buildRound(x,z);

}
