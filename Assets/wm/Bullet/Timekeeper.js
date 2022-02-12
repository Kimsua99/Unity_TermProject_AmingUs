#pragma strict
var gameLength : float;

private var elapsed : float;

function Start () {

}

function Update () {
	elapsed += Time.deltaTime;
	if(elapsed >= gameLength)
	{
		BroadcastMessage("TimeUp");
		GameObject.FindWithTag("MainCamera").SendMessage("TimeUp");
		enabled = false;
	}

}
function StartGame()
{
	enabled = true;
}