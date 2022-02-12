using UnityEngine;
using System.Collections;

public class Perspective : Sense
{
	public int FieldOfView = 20;
	public int ViewDistance = 20;
	
	private Transform playerTrans;
	private Vector3 rayDirection;
	
	public float force = 5.0f;
	public float minimumDistToAvoid = 2.0f;
	
	protected override void Initialise() 
	{
		playerTrans = GameObject.FindGameObjectWithTag("Player").transform;
	}
	
	// Update is called once per frame
	protected override void UpdateSense() 
	{
		elapsedTime += Time.deltaTime;
		
		if (elapsedTime >= detectionRate)
			DetectAspect();
	}
	
	//Detect perspective field of view for the AI Character
	void DetectAspect()
	{
		RaycastHit hit;
		rayDirection = playerTrans.position - transform.position;
		
		if ((Vector3.Angle(rayDirection, transform.forward)) < FieldOfView)
		{
			// Detect if player is within the field of view
			if (Physics.Raycast(transform.position, rayDirection, out hit, ViewDistance))
			{
				Aspect aspect = hit.collider.GetComponent<Aspect>();
				if (aspect != null)
				{
					//Check the aspect
					if (aspect.aspectName == aspectName)
					{
						print(aspectName + " Detected Visually");
					}
				}
			}
		}
	}
	
	void OnDrawGizmos()
	{
		if ( playerTrans == null)
			return;
		
		Debug.DrawLine(transform.position, playerTrans.position, Color.red);
		
		Vector3 frontRayPoint = transform.position + (transform.forward * ViewDistance);
		
		//Approximate perspective visualization
		Vector3 leftRayPoint = frontRayPoint;
		leftRayPoint.x += FieldOfView * 0.5f;
		
		Vector3 rightRayPoint = frontRayPoint;
		rightRayPoint.x -= FieldOfView * 0.5f;
		
		Debug.DrawLine(transform.position, frontRayPoint, Color.green);
		Debug.DrawLine(transform.position, leftRayPoint, Color.green);
		Debug.DrawLine(transform.position, rightRayPoint, Color.green);
	}
	
	void Update()
	{
		Vector3 dir = (playerTrans.position - transform.position);
		AvoidObstacles (ref dir);
	}
	
	public void AvoidObstacles(ref Vector3 dir)
	{
		RaycastHit hit;
		
		//Only detect layer 8 (Obstacles)
		int layerMask = 1 << 8;
		
		//Check that the vehicle hit with the obstacles within it's minimum distance to avoid
		if (Physics.Raycast(transform.position, transform.forward, out hit, minimumDistToAvoid, layerMask))
		{
			//Get the normal of the hit point to calculate the new direction
			Vector3 hitNormal = hit.normal;
			hitNormal.y = 0.0f; //Don't want to move in Y-Space
			
			//Get the new directional vector by adding force to vehicle's current forward vector
			dir = transform.forward + hitNormal * force;
		}
		
	}
	
	
}