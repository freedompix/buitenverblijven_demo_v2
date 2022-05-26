function setColor()
{
if (window.appState['color1']==0)
{

window.scene.getMeshByName('wall_roof_1').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_2').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_3').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_4').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_5').material=window.scene.getMaterialByName('wood_dark_1');

window.scene.getMeshByName('wall_roof_clone_1').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_clone_2').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_clone_3').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_clone_4').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_clone_5').material=window.scene.getMaterialByName('wood_dark_1');

window.scene.getMeshByName('wall_trap_0').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_trap_1').material=window.scene.getMaterialByName('wood_dark_0');

window.scene.getMeshByName('house1_trap').material=window.scene.getMaterialByName('wood_dark_0');

window.scene.getMeshByName('wall_house1_front').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house1_back').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house1_left').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house1_right').material=window.scene.getMaterialByName('wood_dark_0');

window.scene.getMeshByName('house2_trap').material=window.scene.getMaterialByName('wood_dark_0');

window.scene.getMeshByName('wall_house2_front').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house2_back').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house2_left').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house2_right').material=window.scene.getMaterialByName('wood_dark_0');


for (let i=1; i<=9; i++)
{
window.scene.getMeshByName('wall_small_'  + i).material=window.scene.getMaterialByName('wood_dark_0');
}

for(let i=1;i<=5;i++)
{
window.scene.getMeshByName('house1_wall_roof_' + i ).material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('house2_wall_roof_' + i ).material=window.scene.getMaterialByName('wood_dark_1');
}


}






if (window.appState['color1']==1)
{

window.scene.getMeshByName('wall_roof_1').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_2').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_3').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_4').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_5').material=window.scene.getMaterialByName('Wood_Material_1');

window.scene.getMeshByName('wall_roof_clone_1').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_clone_2').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_clone_3').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_clone_4').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_clone_5').material=window.scene.getMaterialByName('Wood_Material_1');

window.scene.getMeshByName('wall_trap_0').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_trap_1').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('house1_trap').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_house1_front').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house1_back').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house1_left').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house1_right').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('house2_trap').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_house2_front').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house2_back').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house2_left').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house2_right').material=window.scene.getMaterialByName('Wood_Material');







for (let i=1; i<=9; i++)
{
window.scene.getMeshByName('wall_small_'  + i).material=window.scene.getMaterialByName('Wood_Material');
}

for(let i=1;i<=5;i++)
{
window.scene.getMeshByName('house1_wall_roof_' + i ).material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('house2_wall_roof_' + i ).material=window.scene.getMaterialByName('Wood_Material_1');

}



}


///2




if (window.appState['color2']==0)
{
window.scene.getMeshByName('wall_trap_0_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_trap_1_inside').material=window.scene.getMaterialByName('wood_dark_0');

window.scene.getMeshByName('house1_trap_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('house2_trap_inside').material=window.scene.getMaterialByName('wood_dark_0');


window.scene.getMeshByName('wall_house1_front_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house1_back_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house1_left_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house1_right_inside').material=window.scene.getMaterialByName('wood_dark_0');

window.scene.getMeshByName('wall_house2_front_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house2_back_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house2_left_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house2_right_inside').material=window.scene.getMaterialByName('wood_dark_0');



for (let i=1; i<=9; i++)
{
  window.scene.getMeshByName('wall_small_inside_' + i).material=window.scene.getMaterialByName('wood_dark_0');
}

for(let i=1;i<=5;i++)
{
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).material=window.scene.getMaterialByName('wood_dark_1');

window.scene.getMeshByName('wall_roof_inside_' + i ).material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_clone_inside_' + i ).material=window.scene.getMaterialByName('wood_dark_1');


}


}

if (window.appState['color2']==1)
{
window.scene.getMeshByName('wall_trap_0_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_trap_1_inside').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('house1_trap_inside').material=window.scene.getMaterialByName('Wood_Material');


window.scene.getMeshByName('wall_house1_front_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house1_back_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house1_left_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house1_right_inside').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_house2_front_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house2_back_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house2_left_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house2_right_inside').material=window.scene.getMaterialByName('Wood_Material');


for (let i=1; i<=9; i++)
{
  window.scene.getMeshByName('wall_small_inside_' + i).material=window.scene.getMaterialByName('Wood_Material');
}

for(let i=1;i<=5;i++)
{
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).material=window.scene.getMaterialByName('Wood_Material_1');


window.scene.getMeshByName('wall_roof_inside_' + i ).material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_clone_inside_' + i ).material=window.scene.getMaterialByName('Wood_Material_1');


}



}



}











function setWallsInside()
{
  if (document.getElementById("wallInside").checked == false)
{
window.appState['wallInside']=false;
document.getElementById('color2optionsDiv').style.display='none';
}

  if (document.getElementById("wallInside").checked == true)
{
window.appState['wallInside']=true;
document.getElementById('color2optionsDiv').style.display='block';
}

buildRound();


}


function color1_1Select()
{
  document.getElementById('optionColor1_1').classList.add('optionColorActive');
  document.getElementById('optionColor1_1').classList.remove('optionColorInactive');

  document.getElementById('optionColor1_2').classList.add('optionColorInactive');
  document.getElementById('optionColor1_2').classList.remove('optionColorActive');

  document.getElementById('color1_1Checkbox').classList.add('optionColorCheckboxActive');
  document.getElementById('color1_1Checkbox').classList.remove('optionColorCheckboxInative');

  document.getElementById('color1_2Checkbox').classList.add('optionColorCheckboxInative');
  document.getElementById('color1_2Checkbox').classList.remove('optionColorCheckboxActive');

window.appState['color1']=0;
setColor();

}


function color1_2Select()
{
  document.getElementById('optionColor1_2').classList.add('optionColorActive');
  document.getElementById('optionColor1_2').classList.remove('optionColorInactive');

  document.getElementById('optionColor1_1').classList.add('optionColorInactive');
  document.getElementById('optionColor1_1').classList.remove('optionColorActive');

  document.getElementById('color1_2Checkbox').classList.add('optionColorCheckboxActive');
  document.getElementById('color1_2Checkbox').classList.remove('optionColorCheckboxInative');

  document.getElementById('color1_1Checkbox').classList.add('optionColorCheckboxInative');
  document.getElementById('color1_1Checkbox').classList.remove('optionColorCheckboxActive');

window.appState['color1']=1;
setColor();
}


function color2_1Select()
{
  document.getElementById('optionColor2_1').classList.add('optionColorActive');
  document.getElementById('optionColor2_1').classList.remove('optionColorInactive');

  document.getElementById('optionColor2_2').classList.add('optionColorInactive');
  document.getElementById('optionColor2_2').classList.remove('optionColorActive');

  document.getElementById('color2_1Checkbox').classList.add('optionColorCheckboxActive');
  document.getElementById('color2_1Checkbox').classList.remove('optionColorCheckboxInative');

  document.getElementById('color2_2Checkbox').classList.add('optionColorCheckboxInative');
  document.getElementById('color2_2Checkbox').classList.remove('optionColorCheckboxActive');

window.appState['color2']=0;
setColor();
}


function color2_2Select()
{
  document.getElementById('optionColor2_2').classList.add('optionColorActive');
  document.getElementById('optionColor2_2').classList.remove('optionColorInactive');

  document.getElementById('optionColor2_1').classList.add('optionColorInactive');
  document.getElementById('optionColor2_1').classList.remove('optionColorActive');

  document.getElementById('color2_2Checkbox').classList.add('optionColorCheckboxActive');
  document.getElementById('color2_2Checkbox').classList.remove('optionColorCheckboxInative');

  document.getElementById('color2_1Checkbox').classList.add('optionColorCheckboxInative');
  document.getElementById('color2_1Checkbox').classList.remove('optionColorCheckboxActive');

window.appState['color2']=1;
setColor();
}
