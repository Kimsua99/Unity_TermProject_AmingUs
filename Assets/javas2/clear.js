#pragma strict
var labelStyle : GUIStyle;
private var th : String;
private var cle : boolean;
var labelStyle2 : GUIStyle;
function Start () {
Thanks();
}

function Update () {

}
function Thanks(){
	th="clear";
	yield WaitForSeconds(3.0);
	th="ment";
	yield WaitForSeconds(4.0);
	th="my";
	yield WaitForSeconds(5.0);
	th="";
	yield WaitForSeconds(2.0);
	th="end";
}
function OnGUI(){
		var sw : int = Screen.width;
		var sh : int = Screen.height;
		var rect : Rect = Rect(sw/6,sh/5,sw*2/3,sh/3);
		var rect2 : Rect = Rect(sw/6,sh*9/10,sw*2/3,sh);

	if(th=="clear"){
		GUI.Label(rect,"WIN",labelStyle);
	}
	if(th=="ment"){
		GUI.Label(rect,"Thanks For Playing",labelStyle);
	}
	if(th=="my"){
		GUI.Label(rect,"This Game is made by Soo-ah & Jisoo\nof DSWU IT media Engineering.",labelStyle);
	}
	if(th=="end"){
		GUI.Label(rect,"End",labelStyle);
	}
	GUI.Label(rect2,"Click to Restart",labelStyle2);
		if(Input.GetButtonDown("Fire1"))
		{
			Application.LoadLevel("opening");
		}
}