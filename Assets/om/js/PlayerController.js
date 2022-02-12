#pragma strict

var walkSpeed : float = 3.0;
var gravity : float = 20.0;
var jumpSpeed : float = 8.0;
var jumpSE : AudioClip;

private var velocity : Vector3;

function Start () 
{ 
}
function Wait (){
   yield WaitForSeconds(0.65);
   audio.Play();

}

function Update () 
{   
   var controller : CharacterController = GetComponent(CharacterController);
  
    if(Input.GetButtonDown("Jump"))
      {
         velocity.y = jumpSpeed;
         animation.Play("Jump");
         Wait();
   }
   velocity.y -= gravity * Time.deltaTime;
   controller.Move(velocity * Time.deltaTime);

}