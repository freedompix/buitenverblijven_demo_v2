function createHouses()
{
  //walls for
//BALKS
window.scene.getMeshByName('1meter_balk').clone('house1_balk');
window.scene.getMeshByName('house1_balk' ).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);

//cloning TRIANGLE WALLS
for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('wall_roof_' + i).clone('house1_wall_roof_inside_' + i);
window.scene.getMeshByName('wall_roof_clone_' + i  ).clone('house1_wall_roof_' + i);
window.scene.getMeshByName('wall_roof_carcas_' + i ).clone('house1_wall_roof_carcas_' + i );
}

//CARCASS
window.scene.getMeshByName('wall_big_carcas').clone('wall_house1_front_carcas');
window.scene.getMeshByName('wall_big_carcas').clone('wall_house1_back_carcas');
window.scene.getMeshByName('wall_big_carcas').clone('wall_house1_left_carcas');
window.scene.getMeshByName('wall_big_carcas').clone('wall_house1_right_carcas');

window.scene.getMeshByName('wall_house1_front_carcas').makeGeometryUnique();
window.scene.getMeshByName('wall_house1_front_carcas').scaling.z=-1;
window.scene.getMeshByName('wall_house1_front_carcas').bakeCurrentTransformIntoVertices();

window.scene.getMeshByName('wall_house1_left_carcas').makeGeometryUnique();
window.scene.getMeshByName('wall_house1_left_carcas').rotation.y=Math.PI/-2;
window.scene.getMeshByName('wall_house1_left_carcas').bakeCurrentTransformIntoVertices();

window.scene.getMeshByName('wall_house1_right_carcas').makeGeometryUnique();
window.scene.getMeshByName('wall_house1_right_carcas').scaling.z=-1;
window.scene.getMeshByName('wall_house1_right_carcas').rotation.y=Math.PI/-2;
window.scene.getMeshByName('wall_house1_right_carcas').bakeCurrentTransformIntoVertices();

//CARCASS TRAP
window.scene.getMeshByName('wall_trap_1_carcas').clone('house1_trap_carcas');
window.scene.getMeshByName('wall_trap_1').clone('house1_trap');
window.scene.getMeshByName('wall_trap_0').clone('house1_trap_inside');

//WALLS
window.scene.getMeshByName('wall_big').clone('wall_house1_front');
window.scene.getMeshByName('wall_house1_front').makeGeometryUnique();
window.scene.getMeshByName('wall_house1_front').scaling.z=-1;
window.scene.getMeshByName('wall_house1_front').bakeCurrentTransformIntoVertices();
  //window.scene.getMeshByName('wall_house1_front').flipFaces();


  window.scene.getMeshByName('wall_big').clone('wall_house1_back');
  window.scene.getMeshByName('wall_big').clone('wall_house1_left');
  window.scene.getMeshByName('wall_big').clone('wall_house1_right');


  window.scene.getMeshByName('wall_house1_left').makeGeometryUnique();
  window.scene.getMeshByName('wall_house1_left').rotation.y=Math.PI/-2;
  window.scene.getMeshByName('wall_house1_left').bakeCurrentTransformIntoVertices();



  window.scene.getMeshByName('wall_house1_right').makeGeometryUnique();
  window.scene.getMeshByName('wall_house1_right').rotation.y=Math.PI/-2;
  window.scene.getMeshByName('wall_house1_right').scaling.z=-1;
//  window.scene.getMeshByName('wall_house1_right').flipFaces();
  window.scene.getMeshByName('wall_house1_right').bakeCurrentTransformIntoVertices();



  window.scene.getMeshByName('wall_house1_left').clone('wall_house1_right_inside');
  window.scene.getMeshByName('wall_house1_right').clone('wall_house1_left_inside');
  window.scene.getMeshByName('wall_house1_front').clone('wall_house1_back_inside');
  window.scene.getMeshByName('wall_house1_back').clone('wall_house1_front_inside');






///2

//walls for
//BALKS
window.scene.getMeshByName('1meter_balk').clone('house2_balk');
window.scene.getMeshByName('house2_balk' ).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);

//cloning TRIANGLE WALLS
for (let i=1; i<=5; i++)
{
//house2_wall_roof_inside_  house2_wall_roof_
window.scene.getMeshByName('wall_roof_' + i).clone('house2_wall_roof_' + i);
window.scene.getMeshByName('wall_roof_clone_' + i  ).clone('house2_wall_roof_inside_' + i);
window.scene.getMeshByName('wall_roof_carcas_' + i ).clone('house2_wall_roof_carcas_' + i );
}

//CARCASS
window.scene.getMeshByName('wall_big_carcas').clone('wall_house2_front_carcas');
window.scene.getMeshByName('wall_big_carcas').clone('wall_house2_back_carcas');
window.scene.getMeshByName('wall_big_carcas').clone('wall_house2_left_carcas');
window.scene.getMeshByName('wall_big_carcas').clone('wall_house2_right_carcas');

window.scene.getMeshByName('wall_house2_front_carcas').makeGeometryUnique();
window.scene.getMeshByName('wall_house2_front_carcas').scaling.z=-1;
window.scene.getMeshByName('wall_house2_front_carcas').bakeCurrentTransformIntoVertices();

window.scene.getMeshByName('wall_house2_left_carcas').makeGeometryUnique();
window.scene.getMeshByName('wall_house2_left_carcas').rotation.y=Math.PI/-2;
window.scene.getMeshByName('wall_house2_left_carcas').bakeCurrentTransformIntoVertices();

window.scene.getMeshByName('wall_house2_right_carcas').makeGeometryUnique();
window.scene.getMeshByName('wall_house2_right_carcas').scaling.z=-1;
window.scene.getMeshByName('wall_house2_right_carcas').rotation.y=Math.PI/-2;
window.scene.getMeshByName('wall_house2_right_carcas').bakeCurrentTransformIntoVertices();

//CARCASS TRAP
window.scene.getMeshByName('wall_trap_1_carcas').clone('house2_trap_carcas');

window.scene.getMeshByName('wall_trap_0').clone('house2_trap');
window.scene.getMeshByName('wall_trap_1').clone('house2_trap_inside');

//WALLS
window.scene.getMeshByName('wall_big').clone('wall_house2_front');
window.scene.getMeshByName('wall_house2_front').makeGeometryUnique();
window.scene.getMeshByName('wall_house2_front').scaling.z=-1;
window.scene.getMeshByName('wall_house2_front').bakeCurrentTransformIntoVertices();
//window.scene.getMeshByName('wall_house2_front').flipFaces();


window.scene.getMeshByName('wall_big').clone('wall_house2_back');
window.scene.getMeshByName('wall_big').clone('wall_house2_left');
window.scene.getMeshByName('wall_big').clone('wall_house2_right');


window.scene.getMeshByName('wall_house2_left').makeGeometryUnique();
window.scene.getMeshByName('wall_house2_left').rotation.y=Math.PI/-2;
window.scene.getMeshByName('wall_house2_left').bakeCurrentTransformIntoVertices();



window.scene.getMeshByName('wall_house2_right').makeGeometryUnique();
window.scene.getMeshByName('wall_house2_right').rotation.y=Math.PI/-2;
window.scene.getMeshByName('wall_house2_right').scaling.z=-1;
//  window.scene.getMeshByName('wall_house2_right').flipFaces();
window.scene.getMeshByName('wall_house2_right').bakeCurrentTransformIntoVertices();



window.scene.getMeshByName('wall_house2_left').clone('wall_house2_right_inside');
window.scene.getMeshByName('wall_house2_right').clone('wall_house2_left_inside');
window.scene.getMeshByName('wall_house2_front').clone('wall_house2_back_inside');
window.scene.getMeshByName('wall_house2_back').clone('wall_house2_front_inside');

}





function rebuildHouses()
{
let x = window.appState['width'];
let z = window.appState['deepth'];
let zBack=z/2;
let xStart=(x/2)*-0.001;
let insideShiftX = 0.00;
let insideShiftZ = 0.00;

let shiftZ;
if(window.appState['rooftype']==1) shiftZ=1; else shiftZ=0;




if (window.appState['house1on']==true)
{
//VISIBILITY
window.scene.getMeshByName('wall_house1_front').setEnabled(true);
window.scene.getMeshByName('wall_house1_back').setEnabled(true);
window.scene.getMeshByName('wall_house1_left').setEnabled(true);
window.scene.getMeshByName('wall_house1_right').setEnabled(true);

window.scene.getMeshByName('house1_balk').setEnabled(true);

window.scene.getMeshByName('wall_house1_front_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_house1_back_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_house1_left_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_house1_right_inside').setEnabled(window.appState['wallInside']);

window.scene.getMeshByName('wall_house1_front_carcas').setEnabled(true);
window.scene.getMeshByName('wall_house1_back_carcas').setEnabled(true);
window.scene.getMeshByName('wall_house1_left_carcas').setEnabled(true);
window.scene.getMeshByName('wall_house1_right_carcas').setEnabled(true);



if (window.appState['rooftype']==0)
{
window.scene.getMeshByName('house1_trap').setEnabled(false);
window.scene.getMeshByName('house1_trap_inside').setEnabled(false);
window.scene.getMeshByName('wall_trap_0_inside').setEnabled(false);
window.scene.getMeshByName('house1_trap_carcas').setEnabled(false);

for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('house1_wall_roof_' + i ).setEnabled(false);
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).setEnabled(false);
window.scene.getMeshByName('house1_wall_roof_carcas_' + i ).setEnabled(false);
}

}

if (window.appState['rooftype']==1)
{
window.scene.getMeshByName('house1_trap').setEnabled(true);
window.scene.getMeshByName('house1_trap_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_trap_0_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('house1_trap_carcas').setEnabled(true);
}



if(window.appState['rooftype']==1)
{
window.scene.getMeshByName('wall_house1_back'       ).setEnabled(false);
window.scene.getMeshByName('wall_house1_back_inside').setEnabled(false);
window.scene.getMeshByName('wall_house1_back_carcas'       ).setEnabled(false);
}



//SCALING
window.scene.getMeshByName('wall_house1_front').scaling.x=((window.appState['house1width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house1_back').scaling.x =((window.appState['house1width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house1_front_inside').scaling.x=((window.appState['house1width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house1_back_inside').scaling.x =((window.appState['house1width']-150)/1000)/2.775;

window.scene.getMeshByName('wall_house1_left').scaling.z  =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house1_right').scaling.z =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house1_left_inside').scaling.z  =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house1_right_inside').scaling.z =((z - (shiftZ*1000) - 300)/1000)/2.775;


//POSITIONS
window.scene.getMeshByName('wall_house1_front').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*-1)*0.001 + 0.075 - 0.0);
window.scene.getMeshByName('wall_house1_back').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*1)*0.001 - 0.075 - 0.0  - shiftZ);
window.scene.getMeshByName('wall_house1_front_inside').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*-1)*0.001 + 0.075 - 0.0 + insideShiftZ);
window.scene.getMeshByName('wall_house1_back_inside').position= new BABYLON.Vector3(xStart + 0.075, 0, (zBack* 1)*0.001 - 0.075 - 0.0 - insideShiftZ - shiftZ);

window.scene.getMeshByName('wall_house1_left').position=new BABYLON.Vector3(xStart + 0.01 , 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house1_right').position=new BABYLON.Vector3(  xStart  +  window.appState['house1width']/1000 - 0.01, 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house1_left_inside').position=new BABYLON.Vector3(xStart + 0.01 + insideShiftX, 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house1_right_inside').position=new BABYLON.Vector3(xStart  +  window.appState['house1width']/1000 - 0.01 - insideShiftX, 0, (zBack*-1)*0.001 + 0.15 - 0.0);

//POSITION TRAPETEUM
window.scene.getMeshByName('house1_trap').position=new BABYLON.Vector3(xStart  +  window.appState['house1width']/1000 - 0.01 - insideShiftX, 0, (z/1000)/ 2 - 1);
window.scene.getMeshByName('house1_trap_inside').position=new BABYLON.Vector3(xStart  +  window.appState['house1width']/1000 - 0.01 - insideShiftX, 0, (z/1000)/ 2 - 1);
window.scene.getMeshByName('house1_trap_carcas').position=new BABYLON.Vector3(xStart  +  window.appState['house1width']/1000 + 0.05 - insideShiftX, 0, (z/1000)/ 2 - 1);


//SCALING CARCASS
window.scene.getMeshByName('wall_house1_left_carcas').scaling.z  =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house1_right_carcas').scaling.z =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house1_front_carcas').scaling.x=((window.appState['house1width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house1_back_carcas').scaling.x =((window.appState['house1width']-150)/1000)/2.775;

//POSITION CARCASS
window.scene.getMeshByName('wall_house1_left_carcas').position=new BABYLON.Vector3(xStart + 0.01 , 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house1_right_carcas').position=new BABYLON.Vector3(  xStart  +  window.appState['house1width']/1000 - 0.01, 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house1_front_carcas').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*-1)*0.001 + 0.075 - 0.0);
window.scene.getMeshByName('wall_house1_back_carcas').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*1)*0.001 - 0.075 - 0.0  - shiftZ);


//ROOF WALL AND CARCASS

for (let i=1; i<=5; i++)
{

window.scene.getMeshByName('house1_wall_roof_' + i).position.x = (x/-2000) + window.appState['house1width']/1000;
window.scene.getMeshByName('house1_wall_roof_' + i).position.y = 2.35;
window.scene.getMeshByName('house1_wall_roof_' + i).position.z = (z/2000)-1.05;

window.scene.getMeshByName('house1_wall_roof_carcas_' + i).position.x = (x/-2000) + window.appState['house1width']/1000;
window.scene.getMeshByName('house1_wall_roof_carcas_' + i).position.y = 2.35;
window.scene.getMeshByName('house1_wall_roof_carcas_' + i).position.z = (z/2000)-1.05;

window.scene.getMeshByName('house1_wall_roof_inside_' + i ).position.x = (x/-2000) + window.appState['house1width']/1000;
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).position.y = 2.35;
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).position.z = (z/2000)-1.05;

}


//BALK
window.scene.getMeshByName('house1_balk').scaling.x  = z * 0.001 - shiftZ;
window.scene.getMeshByName('house1_balk').position=new BABYLON.Vector3(xStart + window.appState['house1width']/1000,  2.2+0.075, (zBack*-1)*0.001);


}

if (window.appState['house1on']==false)
{
window.scene.getMeshByName('wall_house1_front').setEnabled(false);
window.scene.getMeshByName('wall_house1_back').setEnabled(false);
window.scene.getMeshByName('wall_house1_left').setEnabled(false);
window.scene.getMeshByName('wall_house1_right').setEnabled(false);

window.scene.getMeshByName('house1_balk').setEnabled(false);

window.scene.getMeshByName('wall_house1_front_inside').setEnabled(false);
window.scene.getMeshByName('wall_house1_back_inside').setEnabled(false);
window.scene.getMeshByName('wall_house1_left_inside').setEnabled(false);
window.scene.getMeshByName('wall_house1_right_inside').setEnabled(false);

window.scene.getMeshByName('wall_house1_front_carcas').setEnabled(false);
window.scene.getMeshByName('wall_house1_back_carcas').setEnabled(false);
window.scene.getMeshByName('wall_house1_left_carcas').setEnabled(false);
window.scene.getMeshByName('wall_house1_right_carcas').setEnabled(false);


window.scene.getMeshByName('house1_trap').setEnabled(false);
window.scene.getMeshByName('house1_trap_inside').setEnabled(false);
window.scene.getMeshByName('house1_trap_carcas').setEnabled(false);

for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('house1_wall_roof_' + i ).setEnabled(false);
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).setEnabled(false);
window.scene.getMeshByName('house1_wall_roof_carcas_' + i ).setEnabled(false);
}


}

//////////
xStart=(x/2)*0.001 - window.appState['house2width']/1000;

if (window.appState['house2on']==true)
{
//VISIBILITY
window.scene.getMeshByName('wall_house2_front').setEnabled(true);
window.scene.getMeshByName('wall_house2_back').setEnabled(true);
window.scene.getMeshByName('wall_house2_left').setEnabled(true);
window.scene.getMeshByName('wall_house2_right').setEnabled(true);

window.scene.getMeshByName('house2_balk').setEnabled(true);

window.scene.getMeshByName('wall_house2_front_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_house2_back_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_house2_left_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_house2_right_inside').setEnabled(window.appState['wallInside']);

window.scene.getMeshByName('wall_house2_front_carcas').setEnabled(true);
window.scene.getMeshByName('wall_house2_back_carcas').setEnabled(true);
window.scene.getMeshByName('wall_house2_left_carcas').setEnabled(true);
window.scene.getMeshByName('wall_house2_right_carcas').setEnabled(true);



if (window.appState['rooftype']==0)
{
window.scene.getMeshByName('house2_trap').setEnabled(false);
window.scene.getMeshByName('house2_trap_inside').setEnabled(false);
window.scene.getMeshByName('wall_trap_0_inside').setEnabled(false);
window.scene.getMeshByName('house2_trap_carcas').setEnabled(false);

for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('house2_wall_roof_' + i ).setEnabled(false);
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).setEnabled(false);
window.scene.getMeshByName('house2_wall_roof_carcas_' + i ).setEnabled(false);
}

}

if (window.appState['rooftype']==1)
{
window.scene.getMeshByName('house2_trap').setEnabled(true);
window.scene.getMeshByName('house2_trap_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_trap_1_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('house2_trap_carcas').setEnabled(true);
}



if(window.appState['rooftype']==1)
{
window.scene.getMeshByName('wall_house2_back'       ).setEnabled(false);
window.scene.getMeshByName('wall_house2_back_inside').setEnabled(false);
window.scene.getMeshByName('wall_house2_back_carcas'       ).setEnabled(false);
}



//SCALING
window.scene.getMeshByName('wall_house2_front').scaling.x=((window.appState['house2width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house2_back').scaling.x =((window.appState['house2width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house2_front_inside').scaling.x=((window.appState['house2width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house2_back_inside').scaling.x =((window.appState['house2width']-150)/1000)/2.775;

window.scene.getMeshByName('wall_house2_left').scaling.z  =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house2_right').scaling.z =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house2_left_inside').scaling.z  =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house2_right_inside').scaling.z =((z - (shiftZ*1000) - 300)/1000)/2.775;


//POSITIONS
window.scene.getMeshByName('wall_house2_front').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*-1)*0.001 + 0.075 - 0.0);
window.scene.getMeshByName('wall_house2_back').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*1)*0.001 - 0.075 - 0.0  - shiftZ);
window.scene.getMeshByName('wall_house2_front_inside').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*-1)*0.001 + 0.075 - 0.0 + insideShiftZ);
window.scene.getMeshByName('wall_house2_back_inside').position= new BABYLON.Vector3(xStart + 0.075, 0, (zBack* 1)*0.001 - 0.075 - 0.0 - insideShiftZ - shiftZ);

window.scene.getMeshByName('wall_house2_left').position=new BABYLON.Vector3(xStart + 0.01 , 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house2_right').position=new BABYLON.Vector3(  xStart  +  window.appState['house2width']/1000 - 0.01, 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house2_left_inside').position=new BABYLON.Vector3(xStart + 0.01 + insideShiftX, 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house2_right_inside').position=new BABYLON.Vector3(xStart  +  window.appState['house2width']/1000 - 0.01 - insideShiftX, 0, (zBack*-1)*0.001 + 0.15 - 0.0);

//POSITION TRAPETEUM
window.scene.getMeshByName('house2_trap').position=       new BABYLON.Vector3(xStart  - 0.01 - insideShiftX, 0, (z/1000)/ 2 - 1);
window.scene.getMeshByName('house2_trap_inside').position=new BABYLON.Vector3(xStart  - 0.01 - insideShiftX, 0, (z/1000)/ 2 - 1);
window.scene.getMeshByName('house2_trap_carcas').position=new BABYLON.Vector3(xStart  + 0.05 - insideShiftX, 0, (z/1000)/ 2 - 1);


//SCALING CARCASS
window.scene.getMeshByName('wall_house2_left_carcas').scaling.z  =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house2_right_carcas').scaling.z =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house2_front_carcas').scaling.x=((window.appState['house2width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house2_back_carcas').scaling.x =((window.appState['house2width']-150)/1000)/2.775;

//POSITION CARCASS
window.scene.getMeshByName('wall_house2_left_carcas').position=new BABYLON.Vector3(xStart + 0.01 , 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house2_right_carcas').position=new BABYLON.Vector3(  xStart  +  window.appState['house2width']/1000 - 0.01, 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house2_front_carcas').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*-1)*0.001 + 0.075 - 0.0);
window.scene.getMeshByName('wall_house2_back_carcas').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*1)*0.001 - 0.075 - 0.0  - shiftZ);


//ROOF WALL AND CARCASS

for (let i=1; i<=5; i++)
{

window.scene.getMeshByName('house2_wall_roof_' + i).position.x = xStart;
window.scene.getMeshByName('house2_wall_roof_' + i).position.y = 2.35;
window.scene.getMeshByName('house2_wall_roof_' + i).position.z = (z/2000)-1.05;

window.scene.getMeshByName('house2_wall_roof_carcas_' + i).position.x = xStart;
window.scene.getMeshByName('house2_wall_roof_carcas_' + i).position.y = 2.35;
window.scene.getMeshByName('house2_wall_roof_carcas_' + i).position.z = (z/2000)-1.05;

window.scene.getMeshByName('house2_wall_roof_inside_' + i ).position.x = xStart;
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).position.y = 2.35;
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).position.z = (z/2000)-1.05;

}


//BALK
window.scene.getMeshByName('house2_balk').scaling.x  = z * 0.001 - shiftZ;
window.scene.getMeshByName('house2_balk').position=new BABYLON.Vector3(xStart,  2.2+0.075, (zBack*-1)*0.001);


}





if (window.appState['house2on']==false)
{
window.scene.getMeshByName('wall_house2_front').setEnabled(false);
window.scene.getMeshByName('wall_house2_back').setEnabled(false);
window.scene.getMeshByName('wall_house2_left').setEnabled(false);
window.scene.getMeshByName('wall_house2_right').setEnabled(false);

window.scene.getMeshByName('house2_balk').setEnabled(false);

window.scene.getMeshByName('wall_house2_front_inside').setEnabled(false);
window.scene.getMeshByName('wall_house2_back_inside').setEnabled(false);
window.scene.getMeshByName('wall_house2_left_inside').setEnabled(false);
window.scene.getMeshByName('wall_house2_right_inside').setEnabled(false);

window.scene.getMeshByName('wall_house2_front_carcas').setEnabled(false);
window.scene.getMeshByName('wall_house2_back_carcas').setEnabled(false);
window.scene.getMeshByName('wall_house2_left_carcas').setEnabled(false);
window.scene.getMeshByName('wall_house2_right_carcas').setEnabled(false);







window.scene.getMeshByName('house2_trap').setEnabled(false);
window.scene.getMeshByName('house2_trap_inside').setEnabled(false);
window.scene.getMeshByName('house2_trap_carcas').setEnabled(false);

for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('house2_wall_roof_' + i ).setEnabled(false);
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).setEnabled(false);
window.scene.getMeshByName('house2_wall_roof_carcas_' + i ).setEnabled(false);
}


}































if (window.appState['wallInside']==false || window.appState['rooftype']==0)
{
for (let i=1; i<=9; i++)
{
  window.scene.getMeshByName('wall_small_inside_' + i).setEnabled(false);
}
//disable roof inside
for(let i=1;i<=5;i++)
{
window.scene.getMeshByName('wall_roof_inside_' + i).setEnabled(false);
window.scene.getMeshByName('wall_roof_clone_inside_' + i).setEnabled(false);
}
}



if (window.appState['wallInside']==false)
{
//disable roof
for(let i=1;i<=5;i++)
{
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).setEnabled(false);
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).setEnabled(false);
window.scene.getMeshByName('wall_roof_inside_' + i).setEnabled(false);
window.scene.getMeshByName('wall_roof_clone_inside_' + i).setEnabled(false);
}
//disable inner trap
window.scene.getMeshByName('wall_trap_0_inside').setEnabled(false);
window.scene.getMeshByName('wall_trap_1_inside').setEnabled(false);
}







}
