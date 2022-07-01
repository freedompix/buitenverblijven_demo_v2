function spaceOpenUI(id)
{
window.appState['uiSpaceID']=id;

for(let i=0; i<3; i++)
{

for(let ii=0; ii<4;ii++)
{
document.getElementById('uiSpaceButton'+ i + '_' + ii).style.borderColor='#CCCCCC';
if (window.appSection[id].place[i]==ii)
document.getElementById('uiSpaceButton'+ i + '_' + ii).style.borderColor='#FF0000';
}

}


//set all to null
if(window.appSection[id].place[1]==0)
{
}
}

function spaceUIupdateSections()
{
for(let i=0;i<=17;i++)
{
	let ID=i;
	if (window.appSection[ID].place[2]==3 && window.appSection[ID].place[1]==3) window.appSection[ID].place[2]=0;
	if (window.appSection[ID].place[2]==3 && window.appSection[ID].place[0]==3) window.appSection[ID].place[2]=0;



	if (window.appSection[ID].place[0]==3 && window.appSection[ID].place[1]==3)
	{
		window.appSection[ID].place[1]=window.appSection[ID].place[2];
		window.appSection[ID].place[2]=0;
	}




	if (window.appSection[ID].place[1]==0 && window.appSection[ID].place[2]!=0)
	{
		window.appSection[ID].place[1]=window.appSection[ID].place[2];
		window.appSection[ID].place[2]=0;
	}




	if (window.appSection[ID].place[0]==0 && window.appSection[ID].place[1]!=0)
	{
		window.appSection[ID].place[0]=window.appSection[ID].place[1];
		window.appSection[ID].place[1]=window.appSection[ID].place[2];
		window.appSection[ID].place[2]=0;
	}

	if (window.appSection[ID].place[0]==3 || window.appSection[ID].place[1]==3)
	{
		window.appSection[ID].place[2]=0;
	}

	if (window.appSection[ID].place[0]!=3 && window.appSection[ID].place[1]!=3 && window.appSection[ID].place[2]==3)
	{
		window.appSection[ID].place[2]=0;
	}




}
}






function spaceSetUI(elementID, value)
{
console.log(elementID + ' ' + value);

let ID = window.appState['uiSpaceID'];
window.appSection[ID].place[elementID]=value;
console.log(window.appSection[ID]);
spaceUIupdateSections();
spaceOpenUI(ID);
buildRound();
}
