function elementsCreating2()
{
}
function elementsCreating()
{

window.appState['house1wall1']=0;
window.appState['house1wall2']=0;
window.appState['house1wall3']=0;
window.appState['house1wall4']=0;

window.appState['house2wall1']=0;
window.appState['house2wall2']=0;
window.appState['house2wall3']=0;
window.appState['house2wall4']=0;

window.appState['house1wall1']=2;
window.appState['house1wall3']=1;
window.appState['house2wall1']=3;
window.appState['house2wall4']=1;

window.scene.getMaterialByName('Wood_Material').clone('Wood_Material_Doors');
window.scene.getMaterialByName('Wood_Material_Doors').metallic = 0;


//glass
var window_glass_material = new BABYLON.PBRMaterial("window_glass_material", window.scene);
window_glass_material.albedoColor = new BABYLON.Color3(0.2, 0.3, 0.3);
window_glass_material.albedoColor = new BABYLON.Color3(0.051, 0.051, 0.051);
//window_glass_material.reflectivityColor = new BABYLON.Color3(1.0, 0.766, 0.336);

window_glass_material.refractionTexture = new  BABYLON.Texture("models/env.jpg", window.scene);
window_glass_material.refractionTexture.depth = 4;
window_glass_material.refractionTexture.coordinatesMode = BABYLON.Texture.SPHERE_MODE;
window_glass_material.refractionTexture.level = 0.05;

//window_glass_material.reflectionTexture =  new  BABYLON.Texture("models/env.jpg", window.scene);



//window_glass_material.refractionTexture.wAng = 1.34;

window_glass_material.indexOfRefraction = 1;



window_glass_material.metallic = 1;
window_glass_material.roughness = 0.1;

window_glass_material.metallic = 0.9;
window_glass_material.roughness = 0.2;


var window_glass = BABYLON.MeshBuilder.CreateBox("window_glass", {height: 0.01, width: 0.7, depth: 1});
window.scene.getMeshByName('window_glass').rotation = new BABYLON.Vector3(Math.PI/-2, 0 , 0);
window_glass.material=window.scene.getMaterialByName('window_glass_material');


//singleoor
window.scene.getMeshByName('door_single').scaling.x=10;
window.scene.getMeshByName('door_single').scaling.z=10;
window.scene.getMeshByName('door_single').scaling.y=10;

window.scene.getMeshByName('door_single').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('door_single').bakeCurrentTransformIntoVertices;

window.scene.getMeshByName('door_wood').material=window.scene.getMaterialByName('Wood_Material');
//window.scene.getMeshByName('door_border').material=window.scene.getMaterialByName('Wood_Material_Doors');


//window
window.scene.getMeshByName('window').material=window.scene.getMaterialByName('Wood_Material');

//door_double

//window.scene.getMeshByName('double_door_wood').material=window.scene.getMaterialByName('Wood_Material_Doors');
//window.scene.getMeshByName('double_door_middle').material=window.scene.getMaterialByName('Wood_Material_Doors');
//window.scene.getMeshByName('double_door_border').material=window.scene.getMaterialByName('Wood_Material_Doors');

window.scene.getMeshByName('double_door_wood').material=window.scene.getMaterialByName('Wood_Material');


window.scene.getMeshByName('double_door_hingles').material=window.scene.getMaterialByName('door_hingles');
//window.scene.getMeshByName('double_door_hangle').material=window.scene.getMaterialByName('door_handle');



window.scene.getMeshByName('door_double').scaling.x=10;
window.scene.getMeshByName('door_double').scaling.z=10;
window.scene.getMeshByName('door_double').scaling.y=10;



for(let i=1; i<=4; i++)
{
window.scene.getMeshByName('door_single').clone('house_1_door_single_left_' + i);
window.scene.getMeshByName('door_single').clone('house_2_door_single_left_' + i);

window.scene.getMeshByName('door_single').clone('house_1_door_single_right_' + i);
window.scene.getMeshByName('door_single').clone('house_2_door_single_right_' + i);

window.scene.getMeshByName('door_double').clone('house_1_door_double_' + i);
window.scene.getMeshByName('door_double').clone('house_2_door_double_' + i);



window.scene.getMeshByName('house_1_door_single_left_' + i).scaling.z=-10;
window.scene.getMeshByName('house_1_door_single_left_' + i).bakeCurrentTransformIntoVertices;
window.scene.getMeshByName('house_1_door_single_left_' + i).position.x=-1;

window.scene.getMeshByName('house_2_door_single_left_' + i).scaling.z=-10;
window.scene.getMeshByName('house_2_door_single_left_' + i).bakeCurrentTransformIntoVertices;
window.scene.getMeshByName('house_2_door_single_left_' + i).position.x=-1;



window.scene.getMeshByName('window').clone('house_1_window_' + i);
window.scene.getMeshByName('window').clone('house_2_window_' + i);


window.scene.getMeshByName('window_glass').clone('house_1_window_glass_' + i);
window.scene.getMeshByName('window_glass').clone('house_2_window_glass_' + i);
}


//hide garbage
window.scene.getMeshByName('window').setEnabled(false);
window.scene.getMeshByName('window_glass').setEnabled(false);
window.scene.getMeshByName('door_double').setEnabled(false);
window.scene.getMeshByName('door_single').setEnabled(false);


//window1
window.scene.getMeshByName('house_1_window_3').rotation = new BABYLON.Vector3(0, Math.PI/-2, 0);
window.scene.getMeshByName('house_1_window_4').rotation = new BABYLON.Vector3(0, Math.PI/-2, 0);
window.scene.getMeshByName('house_2_window_3').rotation = new BABYLON.Vector3(0, Math.PI/-2, 0);
window.scene.getMeshByName('house_2_window_4').rotation = new BABYLON.Vector3(0, Math.PI/-2, 0);


window.scene.getMeshByName('house_1_window_glass_3').rotation = new BABYLON.Vector3(Math.PI/-2, Math.PI/-2, 0);
window.scene.getMeshByName('house_1_window_glass_4').rotation = new BABYLON.Vector3(Math.PI/-2, Math.PI/-2, 0);
window.scene.getMeshByName('house_2_window_glass_3').rotation = new BABYLON.Vector3(Math.PI/-2, Math.PI/-2, 0);
window.scene.getMeshByName('house_2_window_glass_4').rotation = new BABYLON.Vector3(Math.PI/-2, Math.PI/-2, 0);


//single door left
window.scene.getMeshByName('house_1_door_single_left_1').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('house_1_door_single_left_2').rotation = new BABYLON.Vector3(0, Math.PI/2 , 0);
window.scene.getMeshByName('house_1_door_single_left_3').rotation = new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('house_1_door_single_left_4').rotation = new BABYLON.Vector3(0, Math.PI, 0);

window.scene.getMeshByName('house_2_door_single_left_1').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('house_2_door_single_left_2').rotation = new BABYLON.Vector3(0, Math.PI/2 , 0);
window.scene.getMeshByName('house_2_door_single_left_3').rotation = new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('house_2_door_single_left_4').rotation = new BABYLON.Vector3(0, Math.PI, 0);


//single door right
window.scene.getMeshByName('house_1_door_single_right_1').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('house_1_door_single_right_2').rotation = new BABYLON.Vector3(0, Math.PI/2 , 0);
window.scene.getMeshByName('house_1_door_single_right_3').rotation = new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('house_1_door_single_right_4').rotation = new BABYLON.Vector3(0, Math.PI, 0);

window.scene.getMeshByName('house_2_door_single_right_1').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('house_2_door_single_right_2').rotation = new BABYLON.Vector3(0, Math.PI/2 , 0);
window.scene.getMeshByName('house_2_door_single_right_3').rotation = new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('house_2_door_single_right_4').rotation = new BABYLON.Vector3(0, Math.PI, 0);

//double door

window.scene.getMeshByName('house_1_door_double_1').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('house_1_door_double_2').rotation = new BABYLON.Vector3(0, Math.PI/2 , 0);
window.scene.getMeshByName('house_1_door_double_3').rotation = new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('house_1_door_double_4').rotation = new BABYLON.Vector3(0, Math.PI, 0);

window.scene.getMeshByName('house_2_door_double_1').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('house_2_door_double_2').rotation = new BABYLON.Vector3(0, Math.PI/2 , 0);
window.scene.getMeshByName('house_2_door_double_3').rotation = new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('house_2_door_double_4').rotation = new BABYLON.Vector3(0, Math.PI, 0);


//Window Y
window.scene.getMeshByName('house_1_window_1').position.y = 1;
window.scene.getMeshByName('house_1_window_2').position.y = 1;
window.scene.getMeshByName('house_1_window_3').position.y = 1;
window.scene.getMeshByName('house_1_window_4').position.y = 1;

window.scene.getMeshByName('house_2_window_1').position.y = 1;
window.scene.getMeshByName('house_2_window_2').position.y = 1;
window.scene.getMeshByName('house_2_window_3').position.y = 1;
window.scene.getMeshByName('house_2_window_4').position.y = 1;


window.scene.getMeshByName('house_1_window_glass_1').position.y = 1.5;
window.scene.getMeshByName('house_1_window_glass_2').position.y = 1.5;
window.scene.getMeshByName('house_1_window_glass_3').position.y = 1.5;
window.scene.getMeshByName('house_1_window_glass_4').position.y = 1.5;

window.scene.getMeshByName('house_2_window_glass_1').position.y = 1.5;
window.scene.getMeshByName('house_2_window_glass_2').position.y = 1.5;
window.scene.getMeshByName('house_2_window_glass_3').position.y = 1.5;
window.scene.getMeshByName('house_2_window_glass_4').position.y = 1.5;





}

function houseSetUI()
{
for(let houseID=1; houseID<=2; houseID++)
{
for(let wallID=1; wallID<=4; wallID++)
{
  for(let i=0; i<=6; i++)
  {
  document.getElementById('optionHouses_' + houseID + '_' + wallID + '_' + i).classList.remove('optionHousesActive');
  document.getElementById('optionHouses_' + houseID + '_' + wallID + '_' + i).classList.add('optionHousesInactive');

  document.getElementById('houses_' + houseID + '_' + wallID + '_' + i + '_Checkbox').classList.remove('optionHousesCheckboxActive');
  document.getElementById('houses_' + houseID + '_' + wallID + '_' + i + '_Checkbox').classList.add('optionHousesCheckboxInative');



if (window.appState['house' +  houseID + 'wall' + wallID] == i)
{
document.getElementById('optionHouses_' + houseID + '_' + wallID + '_' + i).classList.add('optionHousesActive');
document.getElementById('optionHouses_' + houseID + '_' + wallID + '_' + i).classList.remove('optionHousesInactive');
document.getElementById('houses_' + houseID + '_' + wallID + '_' + i + '_Checkbox').classList.add('optionHousesCheckboxActive');
document.getElementById('houses_' + houseID + '_' + wallID + '_' + i + '_Checkbox').classList.remove('optionHousesCheckboxInative');
}

}
}
}

}

function housesSet(houseID, wallID, elementID)
{
  console.log (window.appState['house' +  houseID + 'wall' + wallID] );
window.appState['house' +  houseID + 'wall' + wallID] = elementID;
buildRound();
  console.log (window.appState['house' +  houseID + 'wall' + wallID] );
}
