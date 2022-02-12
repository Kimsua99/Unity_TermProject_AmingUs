#pragma strict

private var dostate : String="";
var labelStyle : GUIStyle;
private var statef : String="";
var lighte : GameObject;
private var saboElecF : boolean;
static var saboElec : boolean;

function OnTriggerEnter(other : Collider){
	if (other.isTrigger != true && other.gameObject.CompareTag ("Player"))
	{ 
		ss();
	}
}
function ss()
{
	statef="elecF";
	yield WaitForSeconds(4.0);
	statef="";
}

function Start () {

}

function Update () {
	if(saboElec==true && statef== "elecF")
	{
		if(Input.GetKey(KeyCode.F))
		{
			Application.LoadLevel("zs_e");
		}
	}
}
function OnGUI(){

	if(saboElec==true && statef=="elecF"){
		var sw : int = Screen.width;
		var sh : int = Screen.height;
		var rect : Rect = Rect(0,sh*3/4,sw,sh/4);
		GUI.Label(rect,"Press the ( F ) key to Fix the lights.",labelStyle);
	}
}