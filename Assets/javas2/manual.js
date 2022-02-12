#pragma strict
var labelStyle1 : GUIStyle;
var labelStyle2 : GUIStyle;
var labelStyle3 : GUIStyle;


function OnGUI(){
		var sw : int = Screen.width;
		var sh : int = Screen.height;
		
		var rect1 : Rect = Rect(sw/6,sh/7,sw*2/3,sh/3);
		var rect2 : Rect = Rect(sw/6,sh/4,sw*2/3,sh/3);
		var rect3 : Rect = Rect(sw/6,sh/3,sw*2/3,sh/3);
		
		
		GUI.Label(rect1,"게임 방법",labelStyle1);
		GUI.Label(rect2,"WASD로 이동, 마우스로 화면 전환\n돌아다니는 임포스터들을 피하고\n주어진 미션을 클리어하면서 항해실까지 도착하시오.",labelStyle2);
		GUI.Label(rect3,"Click To Start",labelStyle3);
		if(Input.GetButtonDown("Fire1"))
		{
			Application.LoadLevel("zs");
		}
		
		
		
	

}