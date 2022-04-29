var modelsLoadingStatuses=[];
var modelsLoaded=false;


var ArchetypeUI = class {};



function openUIblock(id)
{
}

function closeUIblock(id)
{
}





ArchetypeUI.load3DModelByPath=function(importModelFilePath,importModelFileName, importedNewName) {

console.log('Start loading ' + importedNewName + ' ' + importModelFilePath+importModelFileName);
var sceneTemp = window.scene;

var arr2=BABYLON.SceneLoader.ImportMesh("", importModelFilePath, importModelFileName, sceneTemp, function (importedMeshes) {
//if (importedNewName!="")
//{
importedMeshes[0].name = importedNewName;
importedMeshes[0].id   = importedNewName;
window.modelsLoadingStatuses[importedNewName]=true;
//}


for(var i = 0; i < importedMeshes.length; i++){console.log(importedMeshes[i].name+''); }

//var newTempModel = importedMeshes[0].clone(importedNewName);
//importedMeshes[0].dispose();











if(importedNewName=='canopy1')
{
//bump
window.scene.getMaterialByName('Wood_Material').bumpTexture = new  BABYLON.Texture("models/texture_wood_normal.jpg", scene);
window.scene.getMaterialByName('Wood_Material').bumpTexture.wAng = window.scene.getMaterialByName('Wood_Material').albedoTexture.wAng;
window.scene.getMaterialByName('Wood_Material').bumpTexture.uOffset = window.scene.getMaterialByName('Wood_Material').albedoTexture.uOffset;
window.scene.getMaterialByName('Wood_Material').bumpTexture.vOffset = window.scene.getMaterialByName('Wood_Material').albedoTexture.vOffset;

//newX
window.scene.getMaterialByName('Wood_Material').clone('wood_dark_0');
window.scene.getMaterialByName('wood_dark_0').albedoTexture  = new  BABYLON.Texture("models/canopy1/wood_texture_dark_0.jpg", window.scene);
window.scene.getMaterialByName('wood_dark_0').albedoTexture.wAng = window.scene.getMaterialByName('Wood_Material').albedoTexture.wAng;

window.scene.getMaterialByName('wood_dark_0').bumpTexture = new  BABYLON.Texture("models/texture_wood_normal.jpg", scene);
window.scene.getMaterialByName('wood_dark_0').bumpTexture.wAng = window.scene.getMaterialByName('Wood_Material').albedoTexture.wAng;
window.scene.getMaterialByName('wood_dark_0').bumpTexture.uOffset = window.scene.getMaterialByName('Wood_Material').albedoTexture.uOffset;
window.scene.getMaterialByName('wood_dark_0').bumpTexture.vOffset = window.scene.getMaterialByName('Wood_Material').albedoTexture.vOffset;

window.scene.getMaterialByName('wood_dark_0').clone('wood_dark_1');
window.scene.getMaterialByName('wood_dark_1').albedoTexture.wAng = 0;
window.scene.getMaterialByName('wood_dark_1').bumpTexture.wAng = 0;




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

if (
window.modelsLoaded==false &&
window.modelsLoadingStatuses['wall_trap_0']==true  &&
window.modelsLoadingStatuses['wall_trap_0_carcas']==true  &&
window.modelsLoadingStatuses['wall_small_0']==true  &&
window.modelsLoadingStatuses['wall_small_carcas_0']==true  &&

window.modelsLoadingStatuses['wall_roof_carcas_1']==true  &&
window.modelsLoadingStatuses['wall_roof_carcas_2']==true  &&
window.modelsLoadingStatuses['wall_roof_carcas_3']==true  &&
window.modelsLoadingStatuses['wall_roof_carcas_4']==true  &&
window.modelsLoadingStatuses['wall_roof_carcas_5']==true  &&

window.modelsLoadingStatuses['wall_roof_1']==true  &&
window.modelsLoadingStatuses['wall_roof_2']==true  &&
window.modelsLoadingStatuses['wall_roof_3']==true  &&
window.modelsLoadingStatuses['wall_roof_4']==true  &&
window.modelsLoadingStatuses['wall_roof_5']==true  &&


window.modelsLoadingStatuses['1roof_tile_0']==true  &&
window.modelsLoadingStatuses['2roof_tile_0']==true  &&
window.modelsLoadingStatuses['3roof_tile_0']==true  &&
window.modelsLoadingStatuses['4roof_tile_0']==true  &&
window.modelsLoadingStatuses['5roof_tile_0']==true  &&

window.modelsLoadingStatuses['1roof_side_left']==true  &&
window.modelsLoadingStatuses['2roof_side_left']==true  &&
window.modelsLoadingStatuses['3roof_side_left']==true  &&
window.modelsLoadingStatuses['4roof_side_left']==true  &&
window.modelsLoadingStatuses['5roof_side_left']==true  &&


window.modelsLoadingStatuses['1roof_bulk_0']==true &&
window.modelsLoadingStatuses['2roof_bulk_0']==true &&
window.modelsLoadingStatuses['3roof_bulk_0']==true &&
window.modelsLoadingStatuses['4roof_bulk_0']==true &&
window.modelsLoadingStatuses['5roof_bulk_0']==true &&

window.modelsLoadingStatuses['1roof_wood']==true &&
window.modelsLoadingStatuses['2roof_wood']==true &&
window.modelsLoadingStatuses['3roof_wood']==true &&
window.modelsLoadingStatuses['4roof_wood']==true &&
window.modelsLoadingStatuses['5roof_wood']==true &&


window.modelsLoadingStatuses['1meter_balk']==true  &&
window.modelsLoadingStatuses['canopy1']==true  &&
window.modelsLoadingStatuses['balk_0']==true &&
window.modelsLoadingStatuses['balk_small_0']==true)
{

//window.scene.getMeshByName('canopy2').setEnabled(false);
//window.scene.getMeshByName('Object1259.004_primitive0').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('canopy1').setEnabled(false);
window.scene.getMeshByName('wall_small_0').setEnabled(false);
window.scene.getMeshByName('wall_small_carcas_0').setEnabled(false);

//materials
window.scene.getMeshByName('balk_small_0').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('balk_0').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('1meter_balk').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_small_0').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_small_carcas_0').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_trap_0').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_trap_0_carcas').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_roof_carcas_1').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_roof_carcas_2').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_roof_carcas_3').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_roof_carcas_4').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_roof_carcas_5').material=window.scene.getMaterialByName('Wood_Material');


window.scene.getMeshByName('wall_roof_1').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_2').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_3').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_4').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_5').material=window.scene.getMaterialByName('wood_dark_1');

//cloning waals
for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('wall_roof_' + i).clone('wall_roof_clone_' + i);
window.scene.getMeshByName('wall_roof_clone_' + i).makeGeometryUnique();
window.scene.getMeshByName('wall_roof_clone_' + i).scaling.x=-1;
window.scene.getMeshByName('wall_roof_clone_' + i).flipFaces();
window.scene.getMeshByName('wall_roof_carcas_' + i ).clone('wall_roof_carcas_clone_' + i );
}
//WALLS


window.scene.getMeshByName('wall_trap_0').clone('wall_trap_1');
window.scene.getMeshByName('wall_trap_1').makeGeometryUnique();
window.scene.getMeshByName('wall_trap_1').scaling.x=-1;
window.scene.getMeshByName('wall_trap_1').position.x=-1;
window.scene.getMeshByName('wall_trap_1').flipFaces();
window.scene.getMeshByName('wall_trap_1').clone('wall_trap_0_inside');
window.scene.getMeshByName('wall_trap_0').clone('wall_trap_1_inside');
window.scene.getMeshByName('wall_trap_0_carcas').clone('wall_trap_1_carcas');


window.scene.getMeshByName('wall_trap_1').position.z = 0.5;
window.scene.getMeshByName('wall_trap_0').position.z = 0.5;
window.scene.getMeshByName('wall_trap_0_inside').position.z = 0.5;
window.scene.getMeshByName('wall_trap_1_inside').position.z = 0.5;
window.scene.getMeshByName('wall_trap_0_carcas').position.z = 0.5;
window.scene.getMeshByName('wall_trap_1_carcas').position.z = 0.5;


///


//roof wood roof side
for (let i=1; i<=5; i++)
{
//roof wood material
window.scene.getMeshByName(i + 'roof_wood').material=window.scene.getMaterialByName('Wood_Material');


window.scene.getMeshByName(i + 'roof_side_left').material=window.scene.getMaterialByName('Wood_Material');


window.scene.getMeshByName(i + 'roof_side_left').clone(i + 'roof_side_right');
window.scene.getMeshByName(i + 'roof_side_right').makeGeometryUnique();
window.scene.getMeshByName(i + 'roof_side_left').scaling.x=-1;
window.scene.getMeshByName(i + 'roof_side_left').position.x=-1;
window.scene.getMeshByName(i + 'roof_side_left').flipFaces();
}

//middle roof
for (let i=1; i<=5; i++)
{
window.scene.getMeshByName(i + 'roof_bulk_0').material=window.scene.getMaterialByName('Wood_Material');

for(let ii=1; ii<=41; ii++)
{
  window.scene.getMeshByName(i + 'roof_bulk_0').clone(i + 'roof_bulk_'+ii);
}

}




//small wall
//need to disable 0

for (let i=1; i<=7; i++)
{
window.scene.getMeshByName('wall_small_carcas_0').clone('wall_small_carcas_'+i);
window.scene.getMeshByName('wall_small_0').clone('wall_small_'+i);
}




//parts 1m
window.scene.getMeshByName('1meter_balk').clone('1meter_balk_vertical_left');
window.scene.getMeshByName('1meter_balk').clone('1meter_balk_vertical_right');
window.scene.getMeshByName('1meter_balk_vertical_left' ).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('1meter_balk_vertical_right').rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);


//flatroof1
window.scene.getMeshByName('1meter_balk').clone('flatRoof1_front');
window.scene.getMeshByName('1meter_balk').clone('flatRoof1_back');
window.scene.getMeshByName('1meter_balk').clone('flatRoof1_left');
window.scene.getMeshByName('1meter_balk').clone('flatRoof1_right');
window.scene.getMeshByName('flatRoof1_left' ).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('flatRoof1_right').rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('flatRoof1_left').scaling.z  = 0.1 ;
window.scene.getMeshByName('flatRoof1_right').scaling.z = 0.1 ;
window.scene.getMeshByName('flatRoof1_front').scaling.z  = 0.1 ;
window.scene.getMeshByName('flatRoof1_back').scaling.z = 0.1 ;


//flatroof2
window.scene.getMeshByName('1meter_balk').clone('flatRoof2_front');
window.scene.getMeshByName('1meter_balk').clone('flatRoof2_back');
window.scene.getMeshByName('1meter_balk').clone('flatRoof2_left');
window.scene.getMeshByName('1meter_balk').clone('flatRoof2_right');
window.scene.getMeshByName('flatRoof2_left' ).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('flatRoof2_right').rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('flatRoof2_left').scaling.z  = 0.1 ;
window.scene.getMeshByName('flatRoof2_right').scaling.z = 0.1 ;
window.scene.getMeshByName('flatRoof2_front').scaling.z  = 0.1 ;
window.scene.getMeshByName('flatRoof2_back').scaling.z = 0.1 ;

//flat roof 15mm array
for(let i=0; i<=26;i++){
window.scene.getMeshByName('1meter_balk').clone('flat_roof_15mm' + i);
window.scene.getMeshByName('flat_roof_15mm' + i).rotation=new BABYLON.Vector3(0, 0, 0);
window.scene.getMeshByName('flat_roof_15mm' + i).scaling.y=0.1;
window.scene.getMeshByName('flat_roof_15mm' + i).scaling.z=1.33;
window.scene.getMeshByName('flat_roof_15mm' + i).position.y=2.47;
}

//flat roof mid bulk
for(let i=0; i<=41; i++)
{
window.scene.getMeshByName('1meter_balk').clone('flat_roof_bulk_'+i);
window.scene.getMeshByName('flat_roof_bulk_' + i ).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('flat_roof_bulk_' + i).scaling.x=4.1;
window.scene.getMeshByName('flat_roof_bulk_' + i).scaling.z=0.33;
window.scene.getMeshByName('flat_roof_bulk_' + i).position.y=2.42;
}

window.scene.getMeshByName('1meter_balk').clone('flat_roof_x1_bulk');
window.scene.getMeshByName('1meter_balk').clone('flat_roof_x2_bulk');
window.scene.getMeshByName('1meter_balk').clone('angle_roof_x_bulk');
window.scene.getMeshByName('flat_roof_x1_bulk').scaling.z=0.33;
window.scene.getMeshByName('flat_roof_x2_bulk').scaling.z=0.33;
window.scene.getMeshByName('angle_roof_x_bulk').scaling.z=0.33;

window.scene.getMeshByName('flat_roof_x1_bulk').position.y=2.42;
window.scene.getMeshByName('flat_roof_x2_bulk').position.y=2.42;

window.scene.getMeshByName('angle_roof_x_bulk').position.y=2.42;
window.scene.getMeshByName('angle_roof_x_bulk').position.z=-0.46;
///


//disable source 1m balk
window.scene.getMeshByName('1meter_balk').setEnabled(false);



//console.log(window.scene.getMaterialByName('Wood_Material').albedoTexture.uScale);
//console.log(window.scene.getMaterialByName('Wood_Material'));


//balk 7 section back
for(let i=1; i<=7;i++){
window.scene.getMeshByName('balk_0').clone('balk_front_' + i);
window.scene.getMeshByName('balk_front_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, 1,5);

//
window.scene.getMeshByName('balk_small_0').clone('balk_small_front_left_' + i);
window.scene.getMeshByName('balk_small_0').clone('balk_small_front_right_' + i);
window.scene.getMeshByName('balk_small_front_left_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, 1,5);
window.scene.getMeshByName('balk_small_front_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_front_right_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, 1,5);
window.scene.getMeshByName('balk_small_front_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);


//
window.scene.getMeshByName('1meter_balk').clone('1meter_balk_front_' + i);
window.scene.getMeshByName('1meter_balk').clone('1meter_balk_back_' + i);
window.scene.getMeshByName('1meter_balk').clone('1meter_balk_roof_' + i);



}

//balk 7 section front
for(let i=1; i<=7;i++){
window.scene.getMeshByName('balk_0').clone('balk_back_' + i);
window.scene.getMeshByName('balk_back_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, -1,5);

window.scene.getMeshByName('balk_0').clone('balk_roof_' + i);
window.scene.getMeshByName('balk_roof_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, -1,5);
window.scene.getMeshByName('balk_roof_' + i).scaling=new BABYLON.Vector3(1, 0.755, 1);


///
window.scene.getMeshByName('balk_small_0').clone('balk_small_back_left_' + i);
window.scene.getMeshByName('balk_small_0').clone('balk_small_back_right_' + i);
window.scene.getMeshByName('balk_small_back_left_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, -1,5);
window.scene.getMeshByName('balk_small_back_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_back_right_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, -1,5);
window.scene.getMeshByName('balk_small_back_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);

}

//balk center
window.scene.getMeshByName('balk_0').clone('balk_center_0');
window.scene.getMeshByName('balk_0').clone('balk_center_1');

for(let i=0; i<=1;i++){
window.scene.getMeshByName('balk_small_0').clone('balk_small_center_left_' + i);
window.scene.getMeshByName('balk_small_0').clone('balk_small_center_right_' + i);
window.scene.getMeshByName('balk_small_center_left_' + i).position.y=0.05;
window.scene.getMeshByName('balk_small_center_right_' + i).position.y=0.05;

window.scene.getMeshByName('balk_small_center_right_' + i).rotation=new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('balk_small_center_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/1, 0);
}






window.scene.getMeshByName('balk_small_0').setEnabled(false);
window.scene.getMeshByName('balk_0').setEnabled(false);

for(let roofNum=1;roofNum<=5;roofNum++)
{
window.scene.getMeshByName(roofNum +'roof_tile_0').material=window.scene.getMaterialByName('RoofTileMaterial');
for (let i=1; i<=81; i++)
{
window.scene.getMeshByName(roofNum +'roof_tile_0').clone(roofNum+'roof_tile_' + i);
//window.scene.getMeshByName('1roof_tile_' + i).position=new BABYLON.Vector3(-3 + i * 0.25, 0, 0);
}

}

//var plane = BABYLON.MeshBuilder.CreatePlane("roofPlane", {height:2, width: 1, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
var roofPlane = BABYLON.MeshBuilder.CreateBox("roofPlane", {height: 0.01, width: 1, depth: 1});
roofPlane.material=window.scene.getMaterialByName('RoofTileMaterial');

var groundPlane = BABYLON.MeshBuilder.CreateBox("groundPlane", {height: 0.01, width: 1, depth: 1});
var groundMaterial = new BABYLON.PBRMaterial("groundMaterial", window.scene);

groundPlane.visibility=0.3;
 //var myTexture  = new BABYLON.Texture("textures/texture.jpg", scene);

//myMaterial.albedoColor = new BABYLON.Color3(0,0,0);
//myMaterial.reflectivityColor=new BABYLON.Color3(1,1,1);


groundMaterial.albedoColor = new BABYLON.Color3(0.4,0.4,0.3);//Bordeaux Color RGB (95,2,31)
//groundMaterial.reflectivityColor = new BABYLON.Color3(0.003, 0.003, 0.003);
//myMaterial.albedoTexture  = new BABYLON.Texture("textures/wall_pattern.jpg", scene);
//myMaterial.emissiveTexture = new BABYLON.Texture("textures/wall_pattern_light.jpg", scene);
//myMaterial.emissiveColor = new BABYLON.Color3(	0.64, 0.29, 0.18);

// myMaterial.bumpTexture = new BABYLON.Texture("textures/6.jpg", scene);
//myMaterial.diffuseTexture  = new BABYLON.Texture("textures/texture.jpg", scene);
 //myMaterial.emissiveTexture = new BABYLON.Texture("textures/texture.jpg", scene);
 //myMaterial.emissiveColor = new BABYLON.Color3.White();

groundMaterial.metallic = 1;
groundMaterial.roughness = 0.85;
groundPlane.material=window.scene.getMaterialByName('groundMaterial');


buildRound(5000,3000);



//var box =  BABYLON.MeshBuilder.CreateBox("box", {height: 1, width: 0.75, depth: 0.25});

closeLoader();
window.modelsLoaded=true;
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
//document.getElementById('builderUI').style.display='none';
//document.getElementById('topDiv').style.display='none';
//document.getElementById('builderUI').style.top='600px';



//var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, -5,-25), scene);
var camera = new BABYLON.ArcRotateCamera("camera1", -1.57, 1.07, 11, BABYLON.Vector3.Zero(), scene);
camera.setTarget(new BABYLON.Vector3(0, 1.5, 0));
camera.fov=0.8;

camera.attachControl(canvas, false);

camera.lowerRadiusLimit=7;

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
var myMaterial = new BABYLON.PBRMaterial("material_wood_0", scene);
myMaterial.albedoColor = new BABYLON.Color3(1.0, 1.0, 1.0);//Bordeaux Color RGB (95,2,31)
//myMaterial.reflectivityColor = new BABYLON.Color3(0.003, 0.003, 0.003);

myMaterial.metallic = 1;
myMaterial.roughness = 0.85;
//texture
myMaterial.albedoTexture  = new  BABYLON.Texture("models/texture_wood.jpg", scene);
myMaterial.albedoTexture.uScale = 1;
myMaterial.albedoTexture.vScale = 1;
myMaterial.albedoTexture.wAng = 1.5707963705062866;
//bump
myMaterial.bumpTexture = new  BABYLON.Texture("models/texture_wood_normal.jpg", scene);
myMaterial.bumpTexture.uScale = 1;
myMaterial.bumpTexture.vScale = 1;
myMaterial.bumpTexture.wAng = 1.5707963705062866;

myMaterial.backFaceCulling = false;
myMaterial.twoSidedLighting.backFaceCulling = true;


myMaterial.environmentIntensity = 1;

//env

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

ArchetypeUI.load3DModelByPath("./models/converted/", "balk_244mm.obj", "balk_0");
ArchetypeUI.load3DModelByPath("./models/converted/", "balk_100mm.obj", "1meter_balk");

ArchetypeUI.load3DModelByPath("./models/converted/", "balk_corner.obj", "balk_small_0");




//ArchetypeUI.load3DModelByPath("./models/converted/", "roof_080420223.obj", "1roof_left");
ArchetypeUI.load3DModelByPath("./models/roof/day2/collect/resized/", "1.obj", "1roof_tile_0");
ArchetypeUI.load3DModelByPath("./models/roof/day2/collect/resized/", "2.obj", "2roof_tile_0");
ArchetypeUI.load3DModelByPath("./models/roof/day2/collect/resized/", "3.obj", "3roof_tile_0");
ArchetypeUI.load3DModelByPath("./models/roof/day2/collect/resized/", "4.obj", "4roof_tile_0");
ArchetypeUI.load3DModelByPath("./models/roof/day2/collect/resized/", "5.obj", "5roof_tile_0");

//ROOF side
ArchetypeUI.load3DModelByPath("./models/roof_side/", "1.obj", "1roof_side_left");
ArchetypeUI.load3DModelByPath("./models/roof_side/", "2.obj", "2roof_side_left");
ArchetypeUI.load3DModelByPath("./models/roof_side/", "3.obj", "3roof_side_left");
ArchetypeUI.load3DModelByPath("./models/roof_side/", "4.obj", "4roof_side_left");
ArchetypeUI.load3DModelByPath("./models/roof_side/", "5.obj", "5roof_side_left");

//roof bulk
ArchetypeUI.load3DModelByPath("./models/roof_bulk/", "m1.obj", "1roof_bulk_0");
ArchetypeUI.load3DModelByPath("./models/roof_bulk/", "m2.obj", "2roof_bulk_0");
ArchetypeUI.load3DModelByPath("./models/roof_bulk/", "m3.obj", "3roof_bulk_0");
ArchetypeUI.load3DModelByPath("./models/roof_bulk/", "m4.obj", "4roof_bulk_0");
ArchetypeUI.load3DModelByPath("./models/roof_bulk/", "m5.obj", "5roof_bulk_0");


///roof wood
ArchetypeUI.load3DModelByPath("./models/roof_wood/", "1.obj", "1roof_wood");
ArchetypeUI.load3DModelByPath("./models/roof_wood/", "2.obj", "2roof_wood");
ArchetypeUI.load3DModelByPath("./models/roof_wood/", "3.obj", "3roof_wood");
ArchetypeUI.load3DModelByPath("./models/roof_wood/", "4.obj", "4roof_wood");
ArchetypeUI.load3DModelByPath("./models/roof_wood/", "5.obj", "5roof_wood");

//walls 2.775
ArchetypeUI.load3DModelByPath("./models/wall_small/", "wall_small.obj", "wall_small_0");
ArchetypeUI.load3DModelByPath("./models/wall_small/", "wall_small_carcas.obj", "wall_small_carcas_0");
ArchetypeUI.load3DModelByPath("./models/wall_trap/", "wall_trap.obj", "wall_trap_0");
ArchetypeUI.load3DModelByPath("./models/wall_trap/", "wall_trap_carcas.obj", "wall_trap_0_carcas");


ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_1.obj", "wall_roof_1");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_1_carcas.obj", "wall_roof_carcas_1");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_2.obj", "wall_roof_2");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_2_carcas.obj", "wall_roof_carcas_2");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_3.obj", "wall_roof_3");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_3_carcas.obj", "wall_roof_carcas_3");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_4.obj", "wall_roof_4");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_4_carcas.obj", "wall_roof_carcas_4");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_5.obj", "wall_roof_5");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_5_carcas.obj", "wall_roof_carcas_5");


//scene.glb





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
