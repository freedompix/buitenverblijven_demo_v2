

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


function zoom(direction)
{
if (direction==1) window.scene.getCameraByID('camera1').spinTo("radius", window.scene.getCameraByID('camera1').radius - 2, 200);
if (direction==0) window.scene.getCameraByID('camera1').spinTo("radius", window.scene.getCameraByID('camera1').radius + 2, 200);
}
