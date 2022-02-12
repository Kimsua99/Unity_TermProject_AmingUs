#pragma strict
var skin : GUISkin;

private var timer : float;

function Start () {
}

function Update () {

}
function OnGUI()
{
	GUI.skin = skin;
	
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	
	var text : String = Mathf.CeilToInt(timer).ToString();
	GUI.color = Color(1,1,1,timer - Mathf.FloorToInt(timer));
	GUI.Label(Rect(0,sh/4,sw, sh/2),text,"Message");
}