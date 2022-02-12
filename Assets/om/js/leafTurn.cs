using UnityEngine;
using System.Collections;

public class leafTurn : MonoBehaviour {

	public float speed = 10.0f;
	private void Update(){
		Self_Rotation();
	}

	void Self_Rotation()
	{
		transform.Rotate (Vector3.down * speed * Time.deltaTime);
	}
}
