#pragma strict

var labelStyle : GUIStyle;
var labelStyleG : GUIStyle;
var labelStyleY : GUIStyle;
var labelStyleF : GUIStyle;
var s : AudioClip;
private var state : String ="";

var weaponM : GameObject;
var shieldM : GameObject;
var o2M : GameObject;
var saboE : GameObject;
var saboEF : GameObject;
var saboR : GameObject;
var saboRF : GameObject;
var saboO : GameObject;
var saboOF : GameObject;

static var clearAM : boolean;
static var donWM : boolean;
static var donSM : boolean;
static var donOM : boolean;
static var saboElec : boolean;
static var saboElecF : boolean;
static var saboReac : boolean;
static var saboReacF : boolean;
static var saboO2 : boolean;
static var saboO2F : boolean;

function AroundWM(num : int){
	state="AroundWM";
}
function AroundSM(num : int){
	state="AroundSM";
}
function AroundOM(num : int){
	state="AroundOM";
}
function AroundNM(num : int){
	state="AroundNM";
}
function AroundNNM(num : int){
	state="";
}
function SaboE(num : int){
	audio.PlayOneShot(s);
	saboElec =true;
	sabo_eleF.saboElec=true;
}
function SaboR(num : int){
	audio.PlayOneShot(s);
	saboReac =true;
	sabo_reaF.saboReac=true;
}
function SaboO(num : int){
	audio.PlayOneShot(s);
	saboO2 =true;
	sabo_o2F.saboO2=true;
}

function Start () {
	
}

function DoWM( doneM : boolean){
	Application.LoadLevel("wm");
 	donWM = true;
}
function DoSM( doneM : boolean){
	Application.LoadLevel("sm");
 	donSM = true;
}
function DoOM( doneM : boolean){
	Application.LoadLevel("om");
 	donOM = true;
}
			
function EscapeHere(){
	yield WaitForSeconds(3.0);
	Application.LoadLevel("escape");
}
function Update () {
	if(state=="AroundWM")
	{
		if(Input.GetKey(KeyCode.F))
		{
			state="";
			DoWM(true);	
		}
	}
	if(donWM==true)
	{
		Destroy(weaponM);
	}
	
	if(state=="AroundSM")
	{
		if(Input.GetKey(KeyCode.F))
		{
			state="";
			DoSM(true);	
		}
	}
	if(donSM==true)
	{
		Destroy(shieldM);
	}
	if(state=="AroundOM")
	{
		if(Input.GetKey(KeyCode.F))
		{
			state="";
			DoOM(true);	
		}
	}
	if(state=="AroundNM"&&clearAM==true)
	{
		state="escape";
		EscapeHere();
	}
	
	if(donOM==true)
	{
		Destroy(o2M);
	}
	
	
	if(saboElec==true)
	{
		Destroy(saboE);
	}
	if(saboElecF==true)
	{
		Destroy(saboEF);
	}
	if(saboReac==true)
	{
		Destroy(saboR);
	}
	if(saboReacF==true)
	{
		Destroy(saboRF);
	}
	if(saboO2==true)
	{
		Destroy(saboO);
	}
	if(saboO2F==true)
	{
		Destroy(saboOF);
	}
	if(donWM==true&&donSM==true&&donOM==true)
	{
		clearAM=true;
	}
}

function OnGUI(){
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	var rect : Rect = Rect(0,0,sw,sh);
	var rect1 : Rect = Rect(0,sh/20,sw,sh);
	var rect2 : Rect = Rect(0,sh/10,sw,sh);
	var rect3 : Rect = Rect(0,sh*3/20,sw,sh);
	var rect4 : Rect = Rect(0,sh*3/20,sw,sh);
	var rect5 : Rect = Rect(0,sh*3/4,sw,sh/4);
	GUI.Label(rect,"Missions",labelStyle);
	if (donWM==true){
		GUI.Label(rect1,"Weapons: Clear Asteroids - cleared!",labelStyleG);}
	else{
		GUI.Label(rect1,"Weapons: Clear Asteroids",labelStyle);}
	if (donSM==true){
		GUI.Label(rect2,"Shields: Prime Shields - cleared!",labelStyleG);}
	else{
		GUI.Label(rect2,"Shields: Prime Shields",labelStyle);}
	if (donOM==true){
		GUI.Label(rect3,"O2: Clean O2 Filter - cleared!",labelStyleG);}
	else{
		GUI.Label(rect3,"O2: Clean O2 Filter",labelStyle);}
		
	if (clearAM==true){
		GUI.Label(rect4,"You clear All Missions, Go to Navigation",labelStyleY);}
	
	if(state=="escape"){
		GUI.Label(rect5,"Escape the SKELD after 3s.",labelStyleF);
	}
}