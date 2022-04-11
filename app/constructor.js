window.appState=[];
window.appState['width']=3000;
window.appState['deepth']=3000;
window.appState['rooftype']=0;


window.appState['rooftype']=1;

window.appState['uiMenu1']=1;
window.appState['uiMenu2']=1;



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

for(let i = 1; i<=quantity; i++)
{
window.scene.getMeshByName('balk_front_' + i).position=new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack*-1)*0.001);
window.scene.getMeshByName('balk_back_' + i).position= new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack)*0.001-shiftZ);



window.scene.getMeshByName('balk_small_back_left_' + i).position=new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack)*0.001-shiftZ);
window.scene.getMeshByName('balk_small_back_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_back_right_' + i).position=new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack)*0.001-shiftZ);
window.scene.getMeshByName('balk_small_back_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);

window.scene.getMeshByName('balk_small_front_left_' + i).position=new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack*-1)*0.001);
window.scene.getMeshByName('balk_small_front_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_front_right_' + i).position=new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack*-1)*0.001);
window.scene.getMeshByName('balk_small_front_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);



window.scene.getMeshByName('balk_roof_' + i).position= new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack*1)*0.001);


//alert(i * (sectionWidth*0.001));
}

for(let i = 1; i<=7; i++)
{
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
}

if (i==quantity)
{
window.scene.getMeshByName('balk_small_front_left_' + i).rotation=new BABYLON.Vector3(0, 0  , 0);
window.scene.getMeshByName('balk_small_back_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI, 0);
}


}




}





if (window.appState['rooftype']==1)
{
 window.scene.getMeshByName("roofPlane").setEnabled(false);

 for(let roofNum=1;roofNum<=5;roofNum++)
 {
 for (let i=0; i<=81; i++)
 {
 window.scene.getMeshByName(roofNum + 'roof_tile_' + i).position=new BABYLON.Vector3(xStart + i * 0.25, 0.5, -0.5);
 if (x<(i*250-250)) window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);
 else window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(true);

 if (z==3000 ){if(roofNum!=1){window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);  }}
 if (z==3500 ){if(roofNum!=2){window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);  }}
 if (z==4000 ){if(roofNum!=3){window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);  }}
 if (z==4500 ){if(roofNum!=4){window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);  }}
 if (z==5000 ){if(roofNum!=5){window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);  }}

 }

 }

}

if (window.appState['rooftype']==0)
{
window.scene.getMeshByName("roofPlane").setEnabled(true);
window.scene.getMeshByName("roofPlane").scaling=new BABYLON.Vector3(x/1000 + 0.6, 1, z/1000 + 0.6);
window.scene.getMeshByName("roofPlane").position.y=2.30;



for(let roofNum=1;roofNum<=5;roofNum++)
{
for (let i=0; i<=81; i++)
{
window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);
}

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

	if (isInt(x)==false)x=3000;
	if (isInt(z)==false)z=3000;

x=Math.round(x/500)*500;
z=Math.round(z/500)*500;


if(x<3000){x=3000;}
if(x>20000){x=20000;}
if(z<3000){z=3000;}
if(z>5000){z=5000;}

window.appState['width']=x;
window.appState['deepth']=z;
document.getElementById('widthInput').value = x;
document.getElementById('deepthInput').value = z;

document.getElementById("rangeWidth").value=x;
document.getElementById("rangeDeepth").value=z;

buildRound(x,z);

}
