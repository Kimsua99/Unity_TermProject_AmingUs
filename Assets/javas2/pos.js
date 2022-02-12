#pragma strict

var pos : Vector3;
function Start () {

}

function Update () {
	
	pos=this.gameObject.transform.position;
	if(pos.z>58.0)
	{
		Application.LoadLevel("win");
	}
}