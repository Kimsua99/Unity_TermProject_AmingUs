using UnityEngine;
using System.Collections;


public class DiceGame : MonoBehaviour {
	
	
	int code;
	public bool rr;
	public bool rm;
	public bool wm;
	public string inputValue = "";
	
	void OnGUI()
	{
		guiText.text=" Today's code : "+code.ToString();
		
		GUI.Label (new Rect (Screen.width/2-50, Screen.height/2-200, 150, 20), "What is today's code?:");
		GUI.Label (new Rect (Screen.width / 2 - 150, Screen.height / 2 + 200, 500, 30), "Plz don't remove all number in the box, drag the number and type the code");
		inputValue = GUI.TextField(new Rect(Screen.width/2+100, Screen.height/2-200, 100, 20),inputValue, 25);
		
		if (GUI.Button (new Rect (Screen.width/2+30, Screen.height/2-100, 55, 25), "v")) {

			rm=false;
			wm=false;
			
			if(rr==true)
			{
				rm=true;
			}
			else{
				wm=true;
			}
		}
		if (rm == true) {
			guiText.text="RIGHT CODE - Clear!";
			Invoke("Test",2f);

				}
		if (wm == true) {
			guiText.text="WRONG CODE!\r\nToday's code : "+code.ToString();
				}
		
	}
	// Use this for initialization
	void Start () {

		code = Random.Range(10000,100000);
	}
	
	// Update is called once per frame
	void Update () {
		if(code==int.Parse(inputValue))
		{
			rr=true;
		}
		
	}
	void Test(){
		Application.LoadLevel("zs_so");
	}
}