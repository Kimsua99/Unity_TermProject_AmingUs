#pragma strict

private var dostate : String="";
var labelStyle : GUIStyle;
private var statef : String="";
var lighte : GameObject;
private var saboReacF : boolean;
static var saboReac : boolean;

function OnTriggerEnter(other : Collider){
	if (other.isTrigger != true && other.gameObject.CompareTag ("Player"))
	{ 
		ss();
	}
}
function ss()
{
	statef="reacF";
	yield WaitForSeconds(4.0);
	statef="";
}

function Start () {

}

function Update () {
	if(saboReac==true && statef== "reacF")
	{
		if(Input.GetKey(KeyCode.F))
		{
			Application.LoadLevel("zs_r");
		}
	}
}
function OnGUI(){

	if(saboReac==true && statef=="reacF"){
		var sw : int = Screen.width;
		var sh : int = Screen.height;
		var rect : Rect = Rect(0,sh*3/4,sw,sh/4);
		GUI.Label(rect,"Press the ( F ) key to Fix the reactor.",labelStyle);
	}
}