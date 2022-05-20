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

window.scene.getMeshByName('wall_house1_front').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house2_front').material=window.scene.getMaterialByName('wood_dark_0');


for (let i=1; i<=9; i++)
{
window.scene.getMeshByName('wall_small_'  + i).material=window.scene.getMaterialByName('wood_dark_1');
}


}






if (window.appState['color1']==1)
{

window.scene.getMeshByName('wall_roof_1').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_roof_2').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_roof_3').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_roof_4').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_roof_5').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_roof_clone_1').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_roof_clone_2').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_roof_clone_3').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_roof_clone_4').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_roof_clone_5').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_trap_0').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_trap_1').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_house1_front').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house2_front').material=window.scene.getMaterialByName('Wood_Material');


for (let i=1; i<=9; i++)
{
window.scene.getMeshByName('wall_small_'  + i).material=window.scene.getMaterialByName('Wood_Material');
}


}

if (window.appState['color2']==0)
{
window.scene.getMeshByName('wall_trap_0_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_trap_1_inside').material=window.scene.getMaterialByName('wood_dark_0');
}

if (window.appState['color2']==1)
{
window.scene.getMeshByName('wall_trap_0_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_trap_1_inside').material=window.scene.getMaterialByName('Wood_Material');
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
