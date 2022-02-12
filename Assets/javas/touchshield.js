#pragma strict

private var dostate : String="";
var labelStyle : GUIStyle;
private var state : String="";

function OnTriggerEnter(other : Collider){
	if (other.isTrigger != true && other.gameObject.CompareTag ("Player"))
	{ 
		MissionHere();
		other.gameObject.SendMessage("AroundSM", 1);
	}
}
function MissionHere(){
	dostate="MissionHereNow";
	yield WaitForSeconds(4.0);
	dostate="";
}
function Start () {

}

function Update () {

}
function OnGUI(){

	if(dostate=="MissionHereNow"){
		var sw : int = Screen.width;
		var sh : int = Screen.height;
		var rect : Rect = Rect(0,sh*3/4,sw,sh/4);
		GUI.Label(rect,"Press the ( F ) key to do Shield Mission.",labelStyle);
	}
}