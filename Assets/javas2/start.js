#pragma strict
var labelStyle : GUIStyle;
function Start () {

}

function Update () {
      if(Input.GetKey(KeyCode.F))
      {
         Application.LoadLevel("zs");   
      }
}
function OnGUI(){

    if (GUI.Button (Rect (400,250,200,100), "PLAY")) {
        Application.LoadLevel ("zs");
    }

    // Make the second button.
    if (GUI.Button (Rect (400,350,200,100), "HOW TO PLAY")) {
        Application.LoadLevel ("manual");
    }
      var sw : int = Screen.width;
      var sh : int = Screen.height;
      var rect : Rect = Rect(sw/6,sh/5,sw*2/3,sh/3);
      GUI.Label(rect,"AMING - US",labelStyle);
}