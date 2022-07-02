window.appSection=[];
window.appSection[0]={};
window.appSection[0].place=[];

window.appSection[0].place[0]=0;
window.appSection[0].place[1]=0;
window.appSection[0].place[2]=0;
window.appSection[0].orientation=0;
window.appSection[0].wall=0;


window.appSection.push(window.appSection[0]);
window.appSection.push(window.appSection[0]);
window.appSection.push(window.appSection[0]);
window.appSection.push(window.appSection[0]);
window.appSection.push(window.appSection[0]);
window.appSection.push(window.appSection[0]);
window.appSection.push(window.appSection[0]);
window.appSection.push(window.appSection[0]);
window.appSection.push(window.appSection[0]);
window.appSection.push(window.appSection[0]);
window.appSection.push(window.appSection[0]);
window.appSection.push(window.appSection[0]);
window.appSection.push(window.appSection[0]);
window.appSection.push(window.appSection[0]);
window.appSection.push(window.appSection[0]);
window.appSection.push(window.appSection[0]);
window.appSection.push(window.appSection[0]);

window.appSection[0].place[0]=0;
window.appSection[0].place[1]=0;
window.appSection[0].place[2]=0;


function spaceCreating()
{

  spaceUIupdateSections();
  spaceOpenUI(window.appState['uiSpaceID']);


var glass2Material  = new BABYLON.PBRMaterial("glass2Material", window.scene);
glass2Material.albedoColor = new BABYLON.Color3(1,1,1);
glass2Material.metallic = 0.1;
glass2Material.roughness = 0.1;
glass2Material.alpha = 0.2;


var glassBorderMaterial  = new BABYLON.PBRMaterial("glassBorderMaterial", window.scene);
glassBorderMaterial.albedoColor = new BABYLON.Color3(0,0,0);
glassBorderMaterial.metallic = 0.1;
glassBorderMaterial.roughness = 0.8;


var planeUI = BABYLON.MeshBuilder.CreateBox("planeUI", {height: 0.03, width: 1, depth: 1});
planeUI.visibility=0.0;
planeUI.setEnabled(false);

var planeUIMaterial  = new BABYLON.PBRMaterial("planeUIMaterial", window.scene);
planeUIMaterial.albedoColor = new BABYLON.Color3(1,0,0);




//groundPlane.material=window.scene.getMaterialByName('glass2Material');

window.scene.getMeshByName('window_2').material=window.scene.getMaterialByName('glassBorderMaterial');
window.scene.getMeshByName('window_glass_2').material=window.scene.getMaterialByName('glass2Material');

window.scene.getMeshByName('window_glass_2').scaling.x=0.01;
window.scene.getMeshByName('window_glass_2').scaling.y=0.01;
window.scene.getMeshByName('window_glass_2').scaling.z=0.01;

window.scene.getMeshByName('window_2').scaling.x=0.01;
window.scene.getMeshByName('window_2').scaling.y=0.01;
window.scene.getMeshByName('window_2').scaling.z=0.01;

//
window.scene.getMeshByName('window_1').material=window.scene.getMaterialByName('glassBorderMaterial');
window.scene.getMeshByName('window_glass_1').material=window.scene.getMaterialByName('glass2Material');

window.scene.getMeshByName('window_glass_1').scaling.x=0.01;
window.scene.getMeshByName('window_glass_1').scaling.y=0.01;
window.scene.getMeshByName('window_glass_1').scaling.z=0.01;

window.scene.getMeshByName('window_1').scaling.x=0.01;
window.scene.getMeshByName('window_1').scaling.y=0.01;
window.scene.getMeshByName('window_1').scaling.z=0.01;



//disabling
window.scene.getMeshByName('window_1').setEnabled(false);
window.scene.getMeshByName('window_glass_1').setEnabled(false);

window.scene.getMeshByName('window_2').setEnabled(false);
window.scene.getMeshByName('window_glass_2').setEnabled(false);
window.scene.getMeshByName('zhaluzi').setEnabled(false);




// 7 max with 2 house - 5 max with 0
// 7 + 7 =14 + 4

//
for(let i=0;i<=17;i++)
{

//wall, redplane, buttonplane. 4 x 1m bulk


window.scene.getMeshByName('balk_0').clone('sec_' + i + '_balk_1');
window.scene.getMeshByName('balk_0').clone('sec_' + i + '_balk_2');
window.scene.getMeshByName('balk_0').clone('sec_' + i + '_balk_3');
window.scene.getMeshByName('balk_0').clone('sec_' + i + '_balk_0');

window.scene.getMeshByName('wall_big').clone('sec_' + i + '_wall');

window.scene.getMeshByName('planeUI').clone('sec_' + i + '_plane');

window.scene.getMeshByName('window_1').clone('sec_' + i + '_window_1_1');
window.scene.getMeshByName('window_1').clone('sec_' + i + '_window_1_2');
window.scene.getMeshByName('window_1').clone('sec_' + i + '_window_1_0');

window.scene.getMeshByName('window_2').clone('sec_' + i + '_window_2_1');
window.scene.getMeshByName('window_2').clone('sec_' + i + '_window_2_2');
window.scene.getMeshByName('window_2').clone('sec_' + i + '_window_2_0');

window.scene.getMeshByName('window_glass_1').clone('sec_' + i + '_window_glass_1_1');
window.scene.getMeshByName('window_glass_1').clone('sec_' + i + '_window_glass_1_2');
window.scene.getMeshByName('window_glass_1').clone('sec_' + i + '_window_glass_1_0');

window.scene.getMeshByName('window_glass_2').clone('sec_' + i + '_window_glass_2_1');
window.scene.getMeshByName('window_glass_2').clone('sec_' + i + '_window_glass_2_2');
window.scene.getMeshByName('window_glass_2').clone('sec_' + i + '_window_glass_2_0');

window.scene.getMeshByName('zhaluzi').clone('sec_' + i + '_zhaluzi_0');
window.scene.getMeshByName('zhaluzi').clone('sec_' + i + '_zhaluzi_1');
window.scene.getMeshByName('zhaluzi').clone('sec_' + i + '_zhaluzi_2');




}






}
