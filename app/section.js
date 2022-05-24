var section=[];

section['a2']={};

section['a2'].x=0;
section['a2'].width=4;

section['a2'].mesh=[];
section['a2'].mesh[0]={};
section['a2'].mesh[0].enabled=true;
section['a2'].mesh[0].id='zhaluzi_a2_0';
section['a2'].mesh[0].width=1;
section['a2'].mesh[0].type=1;
section['a2'].mesh[0].x=1;


section['a2'].mesh[1]={};
section['a2'].mesh[1].enabled=true;
section['a2'].mesh[1].id='zhaluzi_a2_1';
section['a2'].mesh[1].width=1;
section['a2'].mesh[1].type=1;
section['a2'].mesh[1].x=2.7;

section['a2'].mesh[2]={};
section['a2'].mesh[2].enabled=true;
section['a2'].mesh[2].id='zhaluzi_a2_2';
section['a2'].mesh[2].width=1;
section['a2'].mesh[2].type=1;
section['a2'].mesh[2].x=3.4;

//alert(section['a2'].x);



function updateSections()
{
return false;
for (let i=0; i < section['a2'].mesh.length; i++)
{
let id = section['a2'].mesh[i].id;
let mesh = window.scene.getMeshByName(id);
mesh.position.x = window.scene.getMeshByName('balk_front_2').position.x + section['a2'].mesh[i].x;
mesh.position.z = window.scene.getMeshByName('balk_front_2').position.z - 0.1;
mesh.minXposition =  window.scene.getMeshByName('balk_front_2').position.x + 0.4;
mesh.maxXposition =  window.scene.getMeshByName('balk_front_3').position.x - 0.4;
}


updateSectionElement('a2','zhaluzi_a2_2');

}

function updateSectionElement(sectionID,elementID)
{
//update object
let xStart = window.scene.getMeshByName('balk_front_2').position.x;
let sectionWidth =  window.scene.getMeshByName('balk_front_3').position.x -  window.scene.getMeshByName('balk_front_2').position.x;


for (let i=0; i<section[sectionID].mesh.length; i++)
{
if (section[sectionID].mesh[i].id == elementID)
{
section[sectionID].mesh[i].x=window.scene.getMeshByName(elementID).position.x - xStart;
}
}

let currentMeshId=section[sectionID].mesh.filter(obj => {return obj.id == 'zhaluzi_a2_2'});
console.log(currentMeshId);

//



//elements sorting
let elementArrayTemp1=[];

for (let i=0; i<section[sectionID].mesh.length; i++)
{
if (section[sectionID].mesh[i].enabled==true) elementArrayTemp1.push(section[sectionID].mesh[i]);
}

elementArrayTemp1.sort(function (a, b) {
  if (a.x - a.width/2 > b.x) {
    return 1;
  }
  if (a.x - a.width/2  < b.x) {
    return -1;
  }
  return 0;
});
console.log(elementArrayTemp1);
section[sectionID].mesh=elementArrayTemp1;


//SPAN

//first
for (let i=0; i<section[sectionID].mesh.length; i++)
{
  let mesh =  window.scene.getMeshByName(section[sectionID].mesh[i].id);



if (i==0){

if(section[sectionID].mesh[i].x < 0.875)
{

 mesh.position.x = xStart + 0.5 + 0.075;
 section[sectionID].mesh[i].x= 0.5 + 0.075;
}
}

if (i != 0 && i != section[sectionID].mesh.length - 1)
{

}



//last element
if (i == section[sectionID].mesh.length - 1)
{
if(section[sectionID].mesh[i].x > sectionWidth - 0.875)
{
 mesh.position.x = xStart + sectionWidth - 0.5 - 0.075;
 section[sectionID].mesh[i].x= sectionWidth - 0.5 - 0.075;
}

}


if (i< section[sectionID].mesh.length - 1  && section[sectionID].mesh[i].id == elementID)
{

if(section[sectionID].mesh[i+1].x - section[sectionID].mesh[i].x < 1.3){
section[sectionID].mesh[i].x = section[sectionID].mesh[i+1].x -1;
mesh.position.x = xStart + section[sectionID].mesh[i+1].x -1;
}

if(section[sectionID].mesh[i].x - section[sectionID].mesh[i-1].x < 1.3 && i!= 0 ){
section[sectionID].mesh[i].x = section[sectionID].mesh[i-1].x + 1;
mesh.position.x = xStart + section[sectionID].mesh[i-1].x + 1;
}

}


if (i==section[sectionID].mesh.length - 1  && section[sectionID].mesh[i].id == elementID)
{

}



}



let elementArrayTemp2=[];











let elementID_other1;
let elementID_other2;







if (5===4)
{
if (elementID == 0 ){elementID_other1=1; elementID_other2=2;}
if (elementID == 1 ){elementID_other1=0; elementID_other2=2;}
if (elementID == 2 ){elementID_other1=0; elementID_other2=1;}

let mesh =  window.scene.getMeshByName(section[sectionID].mesh[elementID].id);
let mesh1 =  window.scene.getMeshByName(section[sectionID].mesh[elementID_other1].id);
//let mesh2 =  window.scene.getMeshByName(section[sectionID].mesh[elementID].id);
section[sectionID].mesh[elementID].x = mesh.position.x;
let distanceTo1;


//check left
if(section[sectionID].mesh[elementID].x < 0.875)
{
 mesh.position.x = 0.5 + 0.075;
 section[sectionID].mesh[elementID].x= 0.5 + 0.075;



 distanceTo1=section[sectionID].mesh[elementID].x - section[sectionID].mesh[elementID_other1].x;

 if( distanceTo1 > -1.31 && distanceTo1 < 0)
 {
 mesh1.position.x = mesh.position.x + 1;
 section[sectionID].mesh[elementID_other1].x=section[sectionID].mesh[elementID].x + 1;
 }

}
else
{
distanceTo1=section[sectionID].mesh[elementID].x - section[sectionID].mesh[elementID_other1].x;

if( distanceTo1 < 1.31 && distanceTo1 >= 0)
{
mesh.position.x = mesh1.position.x + 1;
section[sectionID].mesh[elementID].x=section[sectionID].mesh[elementID_other1].x + 1;
}

if( distanceTo1 > -1.31 && distanceTo1 < 0)
{
mesh.position.x = mesh1.position.x - 1;
section[sectionID].mesh[elementID].x=section[sectionID].mesh[elementID_other1].x - 1;
}

}

}
/////



if (elementID==1)
{

}




}



//var onPointerDown=null;
var onPointerDown = function (evt) {
var pickInfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) {
return mesh;
});
if (pickInfo.hit) {
let currentMesh = pickInfo.pickedMesh;
if (currentMesh.draggable==true)
{
window.appState['currentDragMesh']=currentMesh.name;
console.log('StartDraggin ' + currentMesh.name + ' curent mesh sect and id ' + currentMesh.parentSectionID + ' / ' + currentMesh.elementID );
}
else window.appState['currentDragMesh']=false;


}
};

var onPointerUp = function (evt) {
if (window.appState['currentDragMesh']!=false)
{
let currentMesh = window.scene.getMeshByName(window.appState['currentDragMesh']);
console.log('StopDraggin ' + currentMesh.name + ' curent mesh sect and id ' + currentMesh.parentSectionID + ' / ' + currentMesh.elementID );
 updateSectionElement(currentMesh.parentSectionID , currentMesh.name);
}
};







var dragXbehaivor_a2_zhal_0=new BABYLON.PointerDragBehavior({dragAxis: new BABYLON.Vector3(1,0,0)});

dragXbehaivor_a2_zhal_0.validateDrag = function(targetPosition)
{
//console.log(targetPosition.x);
//let currentDragMesh=window.scene.getMeshByName(window.appState['currentDragMesh']);
let currentDragMesh = window.scene.getMeshByName(this.meshId);
window.appState['currentDragMesh']=this.meshId;

console.log(this.meshId);

if (targetPosition.x <
currentDragMesh.minXposition){
targetPosition.x = currentDragMesh.minXposition;
return false;
}

if (targetPosition.x >
currentDragMesh.maxXposition){
targetPosition.x = currentDragMesh.maxXposition;
return false;
}

//console.log(this);
return true;
}


var dragXbehaivor_a2_zhal_1 = new BABYLON.PointerDragBehavior({dragAxis: new BABYLON.Vector3(1,0,0)});

dragXbehaivor_a2_zhal_1.validateDrag = function(targetPosition)
{
//console.log(targetPosition.x);
//let currentDragMesh=window.scene.getMeshByName(window.appState['currentDragMesh']);
let currentDragMesh = window.scene.getMeshByName(this.meshId);
window.appState['currentDragMesh']=this.meshId;

console.log(this.meshId);

if (targetPosition.x <
currentDragMesh.minXposition){
targetPosition.x = currentDragMesh.minXposition;
return false;
}

if (targetPosition.x >
currentDragMesh.maxXposition){
targetPosition.x = currentDragMesh.maxXposition;
return false;
}

//console.log(this);
return true;
}


var dragXbehaivor_a2_zhal_2 = new BABYLON.PointerDragBehavior({dragAxis: new BABYLON.Vector3(1,0,0)});

dragXbehaivor_a2_zhal_2.validateDrag = function(targetPosition)
{
//console.log(targetPosition.x);
//let currentDragMesh=window.scene.getMeshByName(window.appState['currentDragMesh']);
let currentDragMesh = window.scene.getMeshByName(this.meshId);
window.appState['currentDragMesh']=this.meshId;

console.log(this.meshId);

if (targetPosition.x <
currentDragMesh.minXposition){
targetPosition.x = currentDragMesh.minXposition;
return false;
}

if (targetPosition.x >
currentDragMesh.maxXposition){
targetPosition.x = currentDragMesh.maxXposition;
return false;
}

//console.log(this);
return true;
}

















var dragZbehaivor=new BABYLON.PointerDragBehavior({dragAxis: new BABYLON.Vector3(0,0,1)});
dragZbehaivor.validateDrag = function(targetPosition)
{

//console.log(targetPosition.x);
//let currentDragMesh=window.scene.getMeshByName(window.appState['currentDragMesh']);
let currentDragMesh = window.scene.getMeshByName('zhaluziZ');
window.appState['currentDragMesh']=this.meshId;

if (targetPosition.z <
currentDragMesh.minZposition){
targetPosition.z = currentDragMesh.minZposition;
//return false;
}

if (targetPosition.z >
currentDragMesh.maxZposition){
targetPosition.z = currentDragMesh.maxZposition;
//return false;
}

//console.log(this);
return true;
}
