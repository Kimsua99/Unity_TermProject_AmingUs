#pragma strict

@HideInInspector
var score : int;
var skin : GUISkin;
var labelStyle : GUIStyle;
var s : AudioClip;

function OnGUI()
{
	GUI.skin = skin;
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	var left : int = 7 - score;
	if (left == 0)
	{
		audio.PlayOneShot(s);
		GUI.Label(Rect(0,0, sw, sh),"Cleared!",labelStyle);
		ss();
	}
}

function ss(){
	yield WaitForSeconds(2.0);
	Application.LoadLevel("zs_s");
}

function Start () {

}

function Update () {

}