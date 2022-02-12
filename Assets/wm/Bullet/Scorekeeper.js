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
	var left : int = 20 - score;
	var scoreText : String = "Destroyed : " + left.ToString();
	GUI.Label(Rect(0,0,sw,sh/4),scoreText, "Score");
	if (left == 0)
	{
		audio.PlayOneShot(s);
		GUI.Label(Rect(0,sw/4, sw, sh/4),"Cleared!",labelStyle);
		ss();
	}

}
function ss(){
	yield WaitForSeconds(2.0);
	Application.LoadLevel("zs_w");
}
function Start () {

}

function Update () {

}