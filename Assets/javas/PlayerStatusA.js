#pragma strict

var labelStyle : GUIStyle;
var labelStyleG : GUIStyle;
var weaponM : GameObject;
private var state : String ="";
var mainC: GameObject;
static var camp : Vector3;
static var donWM : boolean;

function AroundWM(num : int){
	state="AroundWM";
}

function Start () {
	gameObject.transform.position=camp;
}

function DoWM( doneM : boolean){
	Application.LoadLevel("wm");
 	donWM = true;
}

function Update () {
	if(state=="AroundWM")
	{
		if(Input.GetKey(KeyCode.F))
		{
			state="";
			DoWM(true);
			camp=gameObject.transform.position;
			Destroy(weaponM);
		}
	}
	if(DoWM==true)
	{
		donWM=true;
	}
}

function OnGUI(){
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	var rect : Rect = Rect(0,0,Screen.width,Screen.height);
	if (donWM==true){
		GUI.Label(rect,"Weapons: Clear Asteroids - cleard!",labelStyleG);}
	else{
		GUI.Label(rect,"Weapons: Clear Asteroids",labelStyle);}
	
	
}