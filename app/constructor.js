window.appState=[];
window.appState['width']=3000;
window.appState['deepth']=3000;
window.appState['rooftype']=0;


window.appState['rooftype']=0;

window.appState['uiMenu1']=1;
window.appState['uiMenu2']=1;



function buildRound(x,z)
{
var zBack=z/2;
var quantity=Math.floor(x/3500)+2;
if (x % 3500 ==0) quantity = x/3500+1;
//console.log(x % 3500);
if (x<3500)       quantity = 2;


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

//%%
}

function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

function setSizes(){
	let x = window.appState['width'];
	let z = window.appState['deepth'];

	if (isInt(x)==false)x=3000;
	if (isInt(z)==false)z=3000;
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

function setPlusWidth(){
let x = window.appState['width'];

if (isInt(x)==false) x = 3000; else x = x * 1 + 500;
document.getElementById('widthInput').value = x;
window.appState['width'] = x;

setSizes();
}

function setMinusWidth()
{
let x = window.appState['width'];

if (isInt(x)==false) x = 3000; else x = x * 1 - 500;
document.getElementById('widthInput').value = x ;
window.appState['width'] = x;

setSizes();
}


function setPlusDeepth(){
let x = window.appState['deepth'];

if (isInt(x)==false) x = 3000; else x = x * 1 + 500;
document.getElementById('deepthInput').value = x;
window.appState['deepth'] = x;

setSizes();
}

function setMinusDeepth()
{
let x = window.appState['deepth'];

if (isInt(x)==false) x = 3000; else x = x * 1 - 500;
document.getElementById('deepthInput').value = x ;
window.appState['deepth'] = x;

setSizes();
}





function setWidthByEnter(){
	    if(event.key === 'Enter') {
let value = document.getElementById('widthInput').value;
value=Math.round(value/500)*500;
document.getElementById('widthInput').value=value;
window.appState['width']=value;
document.getElementById("rangeWidth").value=value;
setSizes();
}
}

function setDeepthByEnter(){
	    if(event.key === 'Enter') {
let value = document.getElementById('deepthInput').value;
value=Math.round(value/500)*500;
document.getElementById('deepthInput').value=value;
window.appState['deepth']=value;
document.getElementById("rangeDeepth").value=value;
setSizes();
}
}
