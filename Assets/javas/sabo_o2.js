#pragma strict

private var dostate : String="";
var labelStyleS : GUIStyle;
private var state : String="";
private var states : String="";
var lighte : GameObject;

function OnTriggerEnter(other : Collider){
	if (other.isTrigger != true && other.gameObject.CompareTag ("Player"))
	{ 
		saboO2();
		other.gameObject.SendMessage("SaboO", 1);
	}
}

function saboO2(){
	dostate="o2";
	lighte.light.range=150;
	lighte.light.color=Color.red;
	yield WaitForSeconds(4.0);
	dostate="";
}
function Start () {

}

function Update () {
	

}
function OnGUI(){

	if(dostate=="o2"){
		var sw : int = Screen.width;
		var sh : int = Screen.height;
		var rect : Rect = Rect(0,sh*3/4,sw,sh/4);
		GUI.Label(rect,"Fix O2 in Admin.",labelStyleS);
	}
}