#pragma strict

private var hit : boolean;

function Start () {
	hit = false;

} 

function YouAreHit() {
	if(!hit)
	{
		hit = true;
	
		rigidbody.AddForce(Vector3.up * 15.0, ForceMode.Impulse);
	}

}

function Update()
{
	if(!hit)
		return;
		var gameController : GameObject = GameObject.FindWithTag("GameController");
		gameController.SendMessage("OnDestroyBox");
		Destroy(gameObject);
}