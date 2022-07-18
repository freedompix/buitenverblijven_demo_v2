function zoomMove(direction, house)
{
let x;
let radiusMax = 0;
let deltaX = window.appState['width'];
if (window.appState['house1on']==true) deltaX = deltaX - window.appState['house1width'];
if (window.appState['house2on']==true) deltaX = deltaX - window.appState['house2width'];

if (window.appState['house1on']==false || window.appState['house2on']==false) deltaX = 4000;


if (house==1)
{
x = (window.appState['width']/-2 + window.appState['house1width']/2) /1000;
radiusMax = Math.max(window.appState['house1width'], window.appState['deepth'])/2000;
}

if (house==2)
{
x = (window.appState['width']/ 2 - window.appState['house2width']/2) /1000;
radiusMax = Math.max(window.appState['house2width'], window.appState['deepth'])/2000;
}

radiusMax = radiusMax + 4;

if (direction=='front')
{
window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI/2, 200);
window.scene.getCameraByID('camera1').spinTo("beta", Math.PI/2, 200);
window.scene.getCameraByID('camera1').spinTo("target", new BABYLON.Vector3(x, 1.5, 0), 200);
window.scene.getCameraByID('camera1').spinTo("radius", radiusMax, 200);
window.scene.getCameraByID('camera1').lowerRadiusLimit=radiusMax;
}

if (direction=='back')
{
window.scene.getCameraByID('camera1').spinTo("alpha", Math.PI/2, 200);
window.scene.getCameraByID('camera1').spinTo("beta", Math.PI/2, 200);
window.scene.getCameraByID('camera1').spinTo("target", new BABYLON.Vector3(x, 1.5, 0), 200);
window.scene.getCameraByID('camera1').spinTo("radius", radiusMax, 200);
window.scene.getCameraByID('camera1').lowerRadiusLimit=radiusMax;
}

if (direction=='left')
{
//window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI, 200);

if (house==1) window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI, 200);
//7000 / (3500 - deltaX)

if (house==2 && deltaX >= 3500) window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI, 200);
if (house==2 && deltaX == 3000) window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI/1.26, 200);
if (house==2 && deltaX == 2500) window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI/1.37, 200);
if (house==2 && deltaX == 2000) window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI/1.37, 200);
if (house==2 && deltaX == 1500) window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI/1.50, 200);
if (house==2 && deltaX == 1000) window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI/1.64, 200);
if (house==2 && deltaX == 500) window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI/1.85, 200);
if (house==2 && deltaX == 0) window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI/2, 200);

if (house==2 && deltaX < 3500 && window.appState['house1on']==true && window.appState['house2on']==true)
x = (window.appState['width']/2 - window.appState['house2width']) /1000;




window.scene.getCameraByID('camera1').spinTo("beta", Math.PI/2, 200);
window.scene.getCameraByID('camera1').spinTo("target", new BABYLON.Vector3(x, 1.5, 0), 200);
window.scene.getCameraByID('camera1').spinTo("radius", radiusMax, 200);
window.scene.getCameraByID('camera1').lowerRadiusLimit=radiusMax;
}


if (direction=='right')
{

//window.scene.getCameraByID('camera1').spinTo("alpha", 0, 200);


if (house==2) window.scene.getCameraByID('camera1').spinTo("alpha", 0, 200);
//7000 / (3500 - deltaX)

if (house==1 && deltaX >= 3500) window.scene.getCameraByID('camera1').spinTo("alpha",  0 , 200);
if (house==1 && deltaX == 3000) window.scene.getCameraByID('camera1').spinTo("alpha",  0 - (Math.PI - Math.PI/1.26), 200);
if (house==1 && deltaX == 2500) window.scene.getCameraByID('camera1').spinTo("alpha",  0 - (Math.PI - Math.PI/1.37), 200);
if (house==1 && deltaX == 2000) window.scene.getCameraByID('camera1').spinTo("alpha",  0 - (Math.PI - Math.PI/1.37), 200);
if (house==1 && deltaX == 1500) window.scene.getCameraByID('camera1').spinTo("alpha",  0 - (Math.PI - Math.PI/1.50), 200);
if (house==1 && deltaX == 1000) window.scene.getCameraByID('camera1').spinTo("alpha",  0 - (Math.PI - Math.PI/1.64), 200);
if (house==1 && deltaX == 500) window.scene.getCameraByID('camera1').spinTo("alpha",   0 - (Math.PI - Math.PI/1.85), 200);
if (house==1 && deltaX == 0) window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI/2, 200);

if (house==1 && deltaX < 3500 && window.appState['house1on']==true && window.appState['house2on']==true)
x = (window.appState['width']/-2 + window.appState['house2width']) /1000;


window.scene.getCameraByID('camera1').spinTo("beta", Math.PI/2, 200);
window.scene.getCameraByID('camera1').spinTo("target", new BABYLON.Vector3(x, 1.5, 0), 200);
window.scene.getCameraByID('camera1').spinTo("radius", radiusMax, 200);
window.scene.getCameraByID('camera1').lowerRadiusLimit=radiusMax;
}

}




function switchUI(id){
let newstate=window.appState['uiMenu'+id];
if(window.appState['uiMenu'+id]==1)
{
  document.getElementById('builderBlock' + id).classList.remove('builderBlockStyleActive');
  document.getElementById('builderBlock' + id).classList.add('builderBlockStyleInactive');
newstate=0;

  //document.getElementById('builderBlock' + id).classList.remove('optionHouseCheckboxActive');

  //document.getElementById('builderBlock' + id).classList.add('optionHouseCheckboxInctive');
  document.getElementById('builderBlockText' + id).classList.remove('builderBlockTextActive');
  document.getElementById('builderBlockText' + id).classList.add('builderBlockTextInactive');

  document.getElementById('builderOptions' + id).style.display='none';

  document.getElementById('builderArrow' + id).classList.remove('builderArrowActive');
  document.getElementById('builderArrow' + id).classList.add('builderArrowInactive');


}
else
{
  document.getElementById('builderBlock' + id).classList.add('builderBlockStyleActive');
  document.getElementById('builderBlock' + id).classList.remove('builderBlockStyleInactive');

  document.getElementById('builderBlockText' + id).classList.add('builderBlockTextActive');
  document.getElementById('builderBlockText' + id).classList.remove('builderBlockTextInactive');

  document.getElementById('builderOptions' + id).style.display='block';


  document.getElementById('builderArrow' + id).classList.add('builderArrowActive');
  document.getElementById('builderArrow' + id).classList.remove('builderArrowInactive');

newstate=1;

}
window.appState['uiMenu'+id]=newstate;
}


function closeLoader()
{
document.getElementById('loader1').style.display='none';
document.getElementById('loader2').style.display='none';
document.getElementById('loaderBG').style.display='none';

}

function switchUIsummary()
{
if (document.getElementById('optionsBox').style.display=='none')
document.getElementById('optionsBox').style.display='block'; else document.getElementById('optionsBox').style.display='none';

}


function buildingType1Select()
{
window.appState['rooftype']=0;
setSizes();
//window.scene.getMeshByName('canopy2').setEnabled(false);
//window.scene.getMeshByName('canopy1').setEnabled(true);

//window.scene.getMeshByName('canopy2').visibility=false;

//document.getElementById('loader1').style.display='none';
//document.getElementById('loader2').style.display='none';


document.getElementById('optionHouse1').classList.remove('optionHouseInactive');
document.getElementById('optionHouse1').classList.add('optionHouseActive');
document.getElementById('optionHouse2').classList.remove('optionHouseActive');
document.getElementById('optionHouse2').classList.add('optionHouseInactive');


document.getElementById('optionHouse1Checkbox').classList.remove('optionHouseCheckboxInctive');
document.getElementById('optionHouse1Checkbox').classList.add('optionHouseCheckboxActive');
document.getElementById('optionHouse2Checkbox').classList.remove('optionHouseCheckboxActive');
document.getElementById('optionHouse2Checkbox').classList.add('optionHouseCheckboxInctive');

document.getElementById('builderOptions2_1').style.display='block';



}

function buildingType2Select()
{
window.appState['rooftype']=1;
setSizes();
//window.scene.getMeshByName('canopy1').setEnabled(false);
//window.scene.getMeshByName('canopy2').setEnabled(true);

document.getElementById('optionHouse2').classList.remove('optionHouseInactive');
document.getElementById('optionHouse2').classList.add('optionHouseActive');
document.getElementById('optionHouse1').classList.remove('optionHouseActive');
document.getElementById('optionHouse1').classList.add('optionHouseInactive');


document.getElementById('optionHouse2Checkbox').classList.remove('optionHouseCheckboxInctive');
document.getElementById('optionHouse2Checkbox').classList.add('optionHouseCheckboxActive');
document.getElementById('optionHouse1Checkbox').classList.remove('optionHouseCheckboxActive');
document.getElementById('optionHouse1Checkbox').classList.add('optionHouseCheckboxInctive');


document.getElementById('builderOptions2_1').style.display='none';

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
console.log (window.appState['deepth']);
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


function setValueByEnter(id, stateId, value, defaultValue)
{
if(event.key === 'Enter') {
let x =  document.getElementById(id).value;
if (isInt(x)==false) x = defaultValue;
document.getElementById(id).value = x ;
window.appState[stateId] = x;

setSizes();
}
}



function zoom(direction)
{
if (direction==1) window.scene.getCameraByID('camera1').spinTo("radius", window.scene.getCameraByID('camera1').radius - 2, 200);
if (direction==0) window.scene.getCameraByID('camera1').spinTo("radius", window.scene.getCameraByID('camera1').radius + 2, 200);
}


//overhangs

function uiPlus(id,stateId, value, defaultValue)
{
  let x = window.appState[stateId];

  if (isInt(x)==false) x = defaultValue; else x = x * 1 + value;
  document.getElementById(id).value = x ;
  window.appState[stateId] = x;

  setSizes();

}



function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

function setSizes(){

//ocument.getElementById("myCheck").checked = true;
if (document.getElementById("house1on").checked == false) window.appState['house1on']=false;
if (document.getElementById("house1on").checked == true)  window.appState['house1on']=true;
if (document.getElementById("house2on").checked == false) window.appState['house2on']=false;
if (document.getElementById("house2on").checked == true)  window.appState['house2on']=true;

if (window.appState['house1on']==false) document.getElementById("house1optionsBlock").style.display='none';
if (window.appState['house1on']==true)  document.getElementById("house1optionsBlock").style.display='block';
if (window.appState['house2on']==false) document.getElementById("house2optionsBlock").style.display='none';
if (window.appState['house2on']==true)  document.getElementById("house2optionsBlock").style.display='block';


console.log(document.getElementById("house2on").checked);


	let x = window.appState['width'];
	let z = window.appState['deepth'];
  let overhangLeft = window.appState['overhangLeft'];
	let overhangRight = window.appState['overhangRight'];
	let overhangFront = window.appState['overhangFront'];
	let overhangBack = window.appState['overhangBack'];
  let house1width = window.appState['house1width'];
  let house2width = window.appState['house2width'];


	if (isInt(x)==false)x=3000;
	if (isInt(z)==false)z=3000;
	if (isInt(overhangLeft)==false) overhangLeft=200;
  if (isInt(overhangRight)==false) overhangRight=200;
  if (isInt(overhangFront)==false) overhangFront=200;
  if (isInt(overhangBack)==false) overhangBack=200;
  if (isInt(house1width)==false)house1width=2000;
	if (isInt(house2width)==false)house2width=2000;

x=Math.round(x/500)*500;
z=Math.round(z/500)*500;
overhangLeft=Math.round(overhangLeft/50)*50;
overhangRight=Math.round(overhangRight/50)*50;
overhangFront=Math.round(overhangFront/50)*50;
overhangBack=Math.round(overhangBack/50)*50;
house1width=Math.round(house1width/500)*500;
house2width=Math.round(house2width/500)*500;


if(x<3000){x=3000;}
if(x>20000){x=20000;}

if(overhangLeft<0){overhangLeft=0;}
if(overhangRight<0){overhangRight=0;}
if(overhangFront<0){overhangFront=0;}
if(overhangBack<0){overhangBack=0;}

if(z<3000){z=3000;}
if(z>5000){z=5000;}

if(house1width<1500){house1width=1500;}
if(house1width>4000){house1width=4000;}
if(house2width<1500){house2width=1500;}
if(house2width>4000){house2width=4000;}




if(overhangLeft>350){overhangLeft=350;}
if(overhangRight>350){overhangRight=350;}
if(overhangFront>350){overhangFront=350;}
if(overhangBack>350){overhangBack=350;}


if (window.appState['house1on']==true && window.appState['house2on']==true)
{
if (x< house1width + house2width) x =  house1width + house2width;
}

if (window.appState['house1on']==true && window.appState['house2on']==false)
{
if (x< house1width) x =  house1width;
}

if (window.appState['house1on']==false && window.appState['house2on']==true)
{
if (x < house2width) x =  house2width;
}




window.appState['width']=x;
window.appState['deepth']=z;
window.appState['overhangLeft'] =  overhangLeft;
window.appState['overhangRight'] = overhangRight;
window.appState['overhangFront'] = overhangFront;
window.appState['overhangBack'] = overhangBack;

window.appState['house1width'] = house1width;
window.appState['house2width'] = house2width;




document.getElementById('widthInput').value = x;
document.getElementById('deepthInput').value = z;

document.getElementById('house1width').value = house1width;
document.getElementById('house2width').value = house2width;


document.getElementById("rangeWidth").value=x;
document.getElementById("rangeDeepth").value=z;

document.getElementById("overhangLeft").value=overhangLeft;
document.getElementById("overhangRight").value=overhangRight;
document.getElementById("overhangFront").value=overhangFront;
document.getElementById("overhangBack").value=overhangBack;






buildRound();



}
