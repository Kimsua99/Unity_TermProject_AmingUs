#pragma strict

private var dostate : String="";
var labelStyle : GUIStyle;
private var state : String="";

function OnTriggerEnter(other : Collider){
	if (other.isTrigger != true && other.gameObject.CompareTag ("Player"))
	{ 
		other.gameObject.SendMessage("AroundNM", 1);
	}
}
function OnTriggerExit(other : Collider) {
        if (other.isTrigger != true && other.gameObject.CompareTag ("Player"))
	{ 
		other.gameObject.SendMessage("AroundNNM", 1);
	}
}

function Start () {
}

function Update () {

}
function OnGUI(){
}