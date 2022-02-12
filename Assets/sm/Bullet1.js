#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(collisionInfo : Collision)
{
	if(collisionInfo.gameObject.tag == "Shield")
	{
		collisionInfo.gameObject.SendMessage("YouAreHit");
	}
	Destroy(gameObject);
}
