using UnityEngine;
using System.Collections;

public class PlayerController : MonoBehaviour {
	
	private float health = 100;
	public AudioClip ss;
	AudioSource audio;

	void Start() {
		audio = GetComponent<AudioSource>();
	}

	void Update () 
	{
		if (health <= 0) {
			Application.LoadLevel("lose");}
	}
	void ApplyDamage(float damage)
	{
		health -= damage;
		audio.PlayOneShot (ss, 1.0F);

	}

	void OnGUI()
	{
		GUI.Label (new Rect (130, 0, 600, 30), "HEALTH: " + health+" / 100");
	}
}
