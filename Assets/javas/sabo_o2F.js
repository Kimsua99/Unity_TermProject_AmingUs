#pragma strict

private var dostate : String="";
var labelStyle : GUIStyle;
private var statef : String="";
var lighte : GameObject;
private var saboO2F : boolean;
static var saboO2 : boolean;

function OnTriggerEnter(other : Collider){
	if (other.isTrigger != true && other.gameObject.CompareTag ("Player"))
	{ 
		ss();
	}
}
function ss()
{
	statef="o2F";
	yield WaitForSeconds(4.0);
	statef="";
}

function Start () {

}

function Update () {
	if(saboO2==true && statef== "o2F")
	{
		if(Input.GetKey(KeyCode.F))
		{
			Application.LoadLevel("saboo2");
			lighte.light.range=200;
			lighte.light.color=Color.white;
			saboO2=false;
		}
	}
}
function OnGUI(){

	if(saboO2==true && statef=="o2F"){
		var sw : int = Screen.width;
		var sh : int = Screen.height;
		var rect : Rect = Rect(0,sh*3/4,sw,sh/4);
		GUI.Label(rect,"Press the ( F ) key to Fix the O2.",labelStyle);
	}
}