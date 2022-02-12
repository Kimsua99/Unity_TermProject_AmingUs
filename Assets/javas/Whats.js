#pragma strict
private var dostate : String="";
var labelStyled : GUIStyle;
private var first : boolean;
var strange : AudioClip;

function OnTriggerEnter(other : Collider){
	if (other.isTrigger != true && other.gameObject.CompareTag ("Player"))
	{ 
	if(first==true){
		FindKK();}

	}
}
function FindKK(){
	first=false;
	dostate="AroundKeyNow";
	yield WaitForSeconds(4.0);
	dostate="";
	
}
function Start () {
first=true;

}

function Update () {

}
function OnGUI(){

	if(dostate=="AroundKeyNow"){
		var sw : int = Screen.width;
		var sh : int = Screen.height;
		var rrect : Rect = Rect(0,sh/2,sw,sh/4);
		GUI.Label(rrect,"What's that strange place? Let's go.",labelStyled);
	}
}