var modelsLoadingStatuses=[];

var ArchetypeUI = class {};

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

function openUIblock(id)
{
}

function closeUIblock(id)
{
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


ArchetypeUI.load3DModelByPath=function(importModelFilePath,importModelFileName, importedNewName) {

console.log('Start loading ' + importedNewName + ' ' + importModelFilePath+importModelFileName);
var sceneTemp = window.scene;

var arr2=BABYLON.SceneLoader.ImportMesh("", importModelFilePath, importModelFileName, sceneTemp, function (importedMeshes) {

importedMeshes[0].name = importedNewName;
importedMeshes[0].id   = importedNewName;

for(var i = 0; i < importedMeshes.length; i++){console.log(importedMeshes[i].name+''); }

//var newTempModel = importedMeshes[0].clone(importedNewName);
//importedMeshes[0].dispose();


if(importedNewName=='balk_0'){
window.modelsLoadingStatuses['balk_0']=true;
}

if(importedNewName=='balk_small_0'){
window.modelsLoadingStatuses['balk_small_0']=true;
}


if(importedNewName=='canopy1')
{



importedMeshes[0].position=new BABYLON.Vector3(2, 0, 0);
//newTempModel.scaling=new BABYLON.Vector3(1, 2, 1);
//newTempModel.applyFog = false;
window.modelsLoadingStatuses['canopy1']=true;
window.scene.getMeshByName('canopy1').setEnabled(false);
}

if(importedNewName=='canopy2')
{
importedMeshes[0].position=new BABYLON.Vector3(-1, 1.7, 0);
importedMeshes[0].scaling=new BABYLON.Vector3(0.01, 0.01, 0.01);
window.scene.getMeshByName('canopy2').setEnabled(false);
//newTempModel.applyFog = false;
window.modelsLoadingStatuses['canopy2']=true;
}

if (window.modelsLoadingStatuses['canopy1']==true  && window.modelsLoadingStatuses['balk_0']==true && window.modelsLoadingStatuses['balk_small_0']==true)
{

//window.scene.getMeshByName('Object1259.004_primitive0').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('canopy1').setEnabled(false);
//window.scene.getMeshByName('canopy2').setEnabled(false);

window.scene.getMeshByName('balk_small_0').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('balk_0').material=window.scene.getMaterialByName('Wood_Material');


console.log(window.scene.getMaterialByName('Wood_Material').albedoTexture.uScale);
console.log(window.scene.getMaterialByName('Wood_Material'));

for(let i=1; i<=7;i++){
window.scene.getMeshByName('balk_0').clone('balk_front_' + i);
window.scene.getMeshByName('balk_front_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, 1,5);

///
window.scene.getMeshByName('balk_small_0').clone('balk_small_front_left_' + i);
window.scene.getMeshByName('balk_small_0').clone('balk_small_front_right_' + i);
window.scene.getMeshByName('balk_small_front_left_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, 1,5);
window.scene.getMeshByName('balk_small_front_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_front_right_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, 1,5);
window.scene.getMeshByName('balk_small_front_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);


}

for(let i=1; i<=7;i++){
window.scene.getMeshByName('balk_0').clone('balk_back_' + i);
window.scene.getMeshByName('balk_back_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, -1,5);

window.scene.getMeshByName('balk_0').clone('balk_roof_' + i);
window.scene.getMeshByName('balk_roof_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, -1,5);
window.scene.getMeshByName('balk_roof_' + i).scaling=new BABYLON.Vector3(1, 0.5, 1);


///
window.scene.getMeshByName('balk_small_0').clone('balk_small_back_left_' + i);
window.scene.getMeshByName('balk_small_0').clone('balk_small_back_right_' + i);
window.scene.getMeshByName('balk_small_back_left_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, -1,5);
window.scene.getMeshByName('balk_small_back_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_back_right_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, -1,5);
window.scene.getMeshByName('balk_small_back_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);

}
window.scene.getMeshByName('balk_small_0').setEnabled(false);
window.scene.getMeshByName('balk_0').setEnabled(false);


buildRound(3000,3000);



//var box =  BABYLON.MeshBuilder.CreateBox("box", {height: 1, width: 0.75, depth: 0.25});

closeLoader();

}



applyFog = false;

//


console.log(importedNewName + ' loaded.');
//window.modelsLoadingStatuses[importedNewName]=true;

});

};

ArchetypeUI.prototype.setXYZMeshPosition=function(meshName, newX, newY, newZ) {
parent.scene.getMeshByID(meshName).position.x = newX;
};

window.addEventListener('DOMContentLoaded', function(){

document.getElementById("rangeWidth").onchange=(function(){document.getElementById('widthInput').value=this.value;window.appState['width']=this.value;  setSizes();  });
document.getElementById("rangeDeepth").onchange=(function(){document.getElementById('deepthInput').value=this.value;window.appState['deepth']=this.value;  setSizes();  });
document.getElementById('widthInput').value=3000;
document.getElementById('deepthInput').value=3000;
document.getElementById("rangeWidth").value=3000;
document.getElementById("rangeDeepth").value=3000;


var canvas = document.getElementById('renderCanvas');
var engine = new BABYLON.Engine(canvas, true);
var createScene = function(){
var scene = new BABYLON.Scene(engine);







//debugLayer
//scene.debugLayer.show();


//var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, -5,-25), scene);
var camera = new BABYLON.ArcRotateCamera("camera1", -1.57, 1.57, 11, BABYLON.Vector3.Zero(), scene);
camera.setTarget(new BABYLON.Vector3(0, 1.5, 0));
camera.fov=0.8;

camera.attachControl(canvas, false);


scene.clearColor = new BABYLON.Color3(1, 1, 1);

var light1 = new BABYLON.HemisphericLight('light_sky', new BABYLON.Vector3(-0.1,1,0.3), scene);
light1.intensity=2;

// var light3 = new BABYLON.PointLight("light_point_red1", new BABYLON.Vector3(10, -25, 15), scene);
// light3.intensity=400;
// light3.diffuse=new BABYLON.Color3(1,0.0);

// var light4 = new BABYLON.PointLight("light_point_neon", new BABYLON.Vector3(-10, -20, 0), scene);
// light4.intensity=400;
// light4.diffuse=new BABYLON.Color3(0,0.5,1);

// var light5 = new BABYLON.PointLight("light_point_green", new BABYLON.Vector3(-10, -10, 50), scene);
// light5.intensity=400;
// light5.diffuse=new BABYLON.Color3(0,1,0);



//scene.createDefaultEnvironment();
//var hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("models/environmentSpecular.env", scene);
//scene.environmentTexture = hdrTexture;

///
var myMaterial = new BABYLON.PBRMaterial("materialWood", scene);
myMaterial.albedoColor = new BABYLON.Color3(1.0, 1.0, 1.0);//Bordeaux Color RGB (95,2,31)
//myMaterial.reflectivityColor = new BABYLON.Color3(0.003, 0.003, 0.003);

myMaterial.metallic = 1;
myMaterial.roughness = 0.85;

myMaterial.albedoTexture  = new  BABYLON.Texture("models/texture_wood.jpg", scene);
myMaterial.albedoTexture.uScale = 1;
myMaterial.albedoTexture.vScale = 1;
myMaterial.albedoTexture.wAng = 1.5707963705062866;

myMaterial.metallicTexture = new  BABYLON.Texture("models/texture_wood.jpg", scene);
myMaterial.metallicTexture.uScale = 1;
myMaterial.metallicTexture.vScale = 1;
myMaterial.metallicTexture.wAng = 1.5707963705062866;
myMaterial.backFaceCulling = false;
myMaterial.twoSidedLighting.backFaceCulling = true;


myMaterial.environmentIntensity = 1;

var envTexture = new BABYLON.CubeTexture("models/environmentSpecular.env", scene);
var hdrSkybox = BABYLON.Mesh.CreateBox("hdrSkyBox", 1000.0, scene);



var hdrSkyboxMaterial = new BABYLON.PBRMaterial("skyBox", scene);
hdrSkyboxMaterial.backFaceCulling = false;
hdrSkyboxMaterial.reflectionTexture = envTexture.clone();
hdrSkyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
hdrSkyboxMaterial.microSurface = 0.7;
hdrSkyboxMaterial.alpha = 0.3;
hdrSkyboxMaterial.disableLighting = true;
hdrSkybox.material = hdrSkyboxMaterial;
scene.environmentTexture = envTexture;



ArchetypeUI.load3DModelByPath("./models/canopy1/", "scene.gltf", "canopy1");
//ArchetypeUI.load3DModelByPath("./models/canopy2/", "scene.gltf", "canopy2");

ArchetypeUI.load3DModelByPath("./models/converted/", "5.obj", "balk_0");
ArchetypeUI.load3DModelByPath("./models/converted/", "3.obj", "balk_small_0");

//importedMeshes[0].clone(importedNewName);
//scene.getMeshByName('barkk').clone('bark_0');


return scene;
};

window.scene = createScene();


//ArchetypeUI.load3DModelByPath("./models/canopy1/", "scene.gltf", "canopy3");
//ArchetypeUI.load3DModelByPath("./models/canopy1/", "scene.gltf", "canopy2");

engine.runRenderLoop(function(){
window.scene.render();
});

window.addEventListener('resize', function(){
engine.resize();
});

});
