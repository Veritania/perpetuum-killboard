

// function resolveIcon(robotName){
//   return require("./images/bot_icons/"+robotName.toLowerCase()+".jpg")
// }

export default function resolveIcon(robotName){
	try{
		return require("./images/bot_icons/"+robotName.toLowerCase()+".jpg");
	}catch(err){
		return "";
	}
};