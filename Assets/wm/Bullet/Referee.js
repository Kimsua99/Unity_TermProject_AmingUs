#pragma strict
@script RequireComponent(Scorekeeper)

var rewardPoint : int;
var skin : GUISkin;

private var scorekeeper : Scorekeeper;

function Start () 
{
	scorekeeper = GetComponent(Scorekeeper) as Scorekeeper;
}

function Update () 
{
}

function OnDestroyBox(boxColorName : String)
{
		scorekeeper.score += rewardPoint;
}

function StartGame()
{
	enabled = true;
}