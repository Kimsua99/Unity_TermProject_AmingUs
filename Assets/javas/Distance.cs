using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Distance : MonoBehaviour {
	
	public GameObject Crewone;
	private int health = 1000;
	public GameObject imposter;
	
	void Start () {
	}
	
	void Update()
	{
		float dist = Vector3.Distance(Crewone.transform.position, imposter.transform.position);
		if (dist <= 820) 
		{
			health -= 1;
		}
		else if (dist >=900)
		{
			health += 1;
		}
	}
	
	void OnGUI()
	{
		GUILayout.Label ("health: 1000/" + health);
	}
}
