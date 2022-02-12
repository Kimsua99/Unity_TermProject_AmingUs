#pragma strict
var labelStyle : GUIStyle;
var labelStyle2 : GUIStyle;


function OnGUI(){
		var sw : int = Screen.width;
		var sh : int = Screen.height;
		var rect : Rect = Rect(sw/6,sh/5,sw*2/3,sh/3);
		var rect2 : Rect = Rect(sw/6,sh*9/10,sw*2/3,sh);
		
		
		GUI.Label(rect,"LOSE",labelStyle);
		GUI.Label(rect2,"Click to Restart",labelStyle2);
		if(Input.GetButtonDown("Fire1"))
		{
			Application.LoadLevel("opening");
		}
	

}