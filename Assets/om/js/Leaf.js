#pragma strict

function OnTriggerEnter(other: Collider)
{
	other.gameObject.SendMessage("CatchLeaf",1);
	Destroy(gameObject);
}
function Start () {

}

function Update () {

}