#pragma strict
var labelStyle : GUIStyle;
var labelStyled : GUIStyle;
private var pocket : int = 0;
private var state : String ="";
private var kstate : String ="";
private var dstate : String ="";
var k1 : GameObject;
var k2 : GameObject;
var k3 : GameObject;
private var kn : int;
var d1 : GameObject;
var d2 : GameObject;
var d3 : GameObject;
var d4 : GameObject;
var d5 : GameObject;
var d6 : GameObject;
var fd : GameObject;
private var dn : int;
private var mm : String;
private var first : boolean;
var street : AudioClip;
var strange : AudioClip;
var store : AudioClip;
var end : AudioClip;
var run : AudioClip;
var doors : AudioClip;

function AroundK(numb : int){
	kn = numb;
	state="AroundKey";
}

public function AroundD(numnum : int){
	dn = numnum;
	dstate="AroundDoor";
}
function FindD(){
	if(pocket==0)
		kstate="0";
		yield WaitForSeconds(3.0);
		kstate="";
	if(pocket==1)
		kstate="1";
		yield WaitForSeconds(3.0);
		kstate="";
	if(pocket==2)
		kstate="2";
		yield WaitForSeconds(3.0);
		kstate="";
	if(pocket==3)
		kstate="3";
		yield WaitForSeconds(3.0);
		kstate="";
}

function GetKey(amount : int){
 	pocket += amount;
}

function Start () {
	first=true;

}

function Update () {
	if(state=="AroundKey")
	{
		if(Input.GetKey(KeyCode.F))
		{
			if(kn==1){
			state="";
			GetKey(1);
			Destroy(k1);}
			if(kn==2){
			state="";
			GetKey(1);
			Destroy(k2);}
			if(kn==3){
			state="";
			GetKey(1);
			Destroy(k3);}
		}
	}
	if(dstate=="AroundDoor")
	{
		if(Input.GetKey(KeyCode.F))
		{
			if(dn==1){
			dstate="";
			Destroy(d1);
			audio.PlayOneShot(doors);}
			if(dn==2){
			dstate="";
			Destroy(d2);
			audio.PlayOneShot(doors);}
			if(dn==3){
			dstate="";
			Destroy(d3);
			audio.PlayOneShot(doors);}
			if(dn==4){
			dstate="";
			Destroy(d4);
			audio.PlayOneShot(doors);}
			if(dn==5){
			dstate="";
			Destroy(d5);
			audio.PlayOneShot(doors);}
			if(dn==6){
			dstate="";
			Destroy(d6);
			audio.PlayOneShot(doors);}
		}
	}
	if(kstate=="3")
		if(Input.GetKey(KeyCode.F))
		{
			kstate="";
			Destroy(fd);
		}
	if(pocket==3){
	if(first==true)
		{Disp();}
	}
}
function Disp(){
	audio.PlayOneShot(run);
	first=false;
	mm="now";
	yield WaitForSeconds(4.0);
	mm="not";
}


function OnGUI(){
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	var rect : Rect = Rect(sw*7/8,sh*7/8,sw/8,sh/8);
	var rect2 : Rect = Rect(0,sh*3/4,sw,sh/4);
	var rrect : Rect = Rect(0,sh/2,sw,sh/4);
	GUI.Label(rect,"Key "+pocket.ToString()+"/3");
	if(mm=="now"){
		GUI.Label(rrect,"I think there was an exit at the end of the road.",labelStyled);
	}
	if(kstate=="0"){
		GUI.Label(rect2,"Need 3 more keys",labelStyle);
	}
	if(kstate=="1"){
		GUI.Label(rect2,"Need 2 more keys",labelStyle);
	}
	if(kstate=="2"){
		GUI.Label(rect2,"Need 1 more key",labelStyle);
	}
	if(kstate=="3"){
		GUI.Label(rect2,"Press the ( F ) key to escape from here.",labelStyle);
	}
}