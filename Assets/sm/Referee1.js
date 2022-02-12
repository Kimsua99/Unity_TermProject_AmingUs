#pragma strict
@script RequireComponent(Scorekeeper1)

var rewardPoint : int;

private var scorekeeper : Scorekeeper1;

function Start () 
{
	scorekeeper = GetComponent(Scorekeeper1) as Scorekeeper1;
}

function Update () 
{
}

function OnDestroyBox()
{
		scorekeeper.score += rewardPoint;
}

function StartGame()
{
	enabled = true;
}