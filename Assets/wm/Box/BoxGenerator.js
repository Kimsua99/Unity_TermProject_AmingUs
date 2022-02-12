#pragma strict

var interval : float;
var SpikeballPrefab : GameObject;

private var timer : float;


function Start () {
	timer = 0.0;
}

function Update () 
{
		timer -= Time.deltaTime;
		if(timer < 0.0)
	{
		var offsx : float = Random.Range(-8.0, 8.0);
		var offsz : float = Random.Range(-20.0, 20.0);
		var position : Vector3 = transform.position + Vector3(offsx,0,offsz);
		Instantiate(SpikeballPrefab, position, Random.rotation);
		timer = interval;
		
	}

}