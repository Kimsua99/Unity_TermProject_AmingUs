#pragma strict

private var leaf : int = 0;
var leafParticlePrefab : GameObject;
var skin : GUISkin;
var labelStyle : GUIStyle;
var s : AudioClip;

function CatchLeaf(amount : int)
{
   Instantiate(leafParticlePrefab, transform.position, transform.rotation);
   leaf += amount;
}

function OnGUI()
{
   GUI.skin = skin;
   var sw : int = Screen.width;
   var sh : int = Screen.height;
   var leafText : String = "Pick up 10 Leaves! Now I have " + leaf.ToString()+" Leaves";
   var rect : Rect = Rect(Screen.width/2,0,Screen.width,Screen.height);
   GUI.Label(Rect(0,0,sw,sh),leafText,"Leaf");
   var tt : String;
   
   if (leaf == 10)
   {
   		audio.PlayOneShot(s);
   		GUI.Label(Rect(0,0, sw, sh),"Cleared!",labelStyle);
   		ss();
   }
   
}
function ss(){
	yield WaitForSeconds(2.0);
	Application.LoadLevel("zs_o");
}
function Start () 
{

}

function Update ()
{
}