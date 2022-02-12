#pragma strict

private var dostate : String="";
var labelStyleS : GUIStyle;
private var state : String="";
private var states : String="";
var lighte : GameObject;


function OnTriggerEnter(other : Collider){
	if (other.isTrigger != true && other.gameObject.CompareTag ("Player"))
	{ 
		saboElectric();
		other.gameObject.SendMessage("SaboE", 1);
	}
}

function saboElectric(){
	dostate="elec";
	lighte.light.range=60;
	yield WaitForSeconds(4.0);
	dostate="";
}
function Start () {

}

function Update () {
	

}
function OnGUI(){

	if(dostate=="elec"){
		var sw : int = Screen.width;
		var sh : int = Screen.height;
		var rect : Rect = Rect(0,sh*3/4,sw,sh/4);
		GUI.Label(rect,"Fix Lights in Electrical.",labelStyleS);
	}
}