gdjs.LobbyCode = {};
gdjs.LobbyCode.localVariables = [];
gdjs.LobbyCode.GDjoinObjects1= [];
gdjs.LobbyCode.GDjoinObjects2= [];
gdjs.LobbyCode.GDcreateObjects1= [];
gdjs.LobbyCode.GDcreateObjects2= [];
gdjs.LobbyCode.GDChannelObjects1= [];
gdjs.LobbyCode.GDChannelObjects2= [];


gdjs.LobbyCode.userFunc0x7242e0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Ensure that the Telegram WebApp API is available
if (window.Telegram && window.Telegram.WebApp) {
    const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
    // You can now access user data, for example:
    const user = initDataUnsafe.user;
    const chat = initDataUnsafe.chat;
    // Example: Store the user's first name in a GDevelop global variable
    // runtimeScene.getGame().getVariables().get("UserFirstName").setString(user.first_name);
    // Log some data to the console for debugging
    console.log("User: ", user);
    console.log("User's first name: ", user.first_name);
    console.log("Chat ", chat);
    console.log("Chat ID: ", chat ? chat.id : "No chat data");
} else {
    console.log("Telegram WebApp is not available");
}

};
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDjoinObjects1Objects = Hashtable.newFrom({"join": gdjs.LobbyCode.GDjoinObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDcreateObjects1Objects = Hashtable.newFrom({"create": gdjs.LobbyCode.GDcreateObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDChannelObjects1Objects = Hashtable.newFrom({"Channel": gdjs.LobbyCode.GDChannelObjects1});
gdjs.LobbyCode.eventsList0 = function(runtimeScene) {

{



}


{



}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.LobbyCode.userFunc0x7242e0(runtimeScene);

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("join"), gdjs.LobbyCode.GDjoinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDjoinObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Join", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("create"), gdjs.LobbyCode.GDcreateObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDcreateObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Create", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Channel"), gdjs.LobbyCode.GDChannelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDChannelObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9631148);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/channel/UCsZ4Ue8c94YLJDbGRafCI5Q", runtimeScene);
}}

}


};

gdjs.LobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LobbyCode.GDjoinObjects1.length = 0;
gdjs.LobbyCode.GDjoinObjects2.length = 0;
gdjs.LobbyCode.GDcreateObjects1.length = 0;
gdjs.LobbyCode.GDcreateObjects2.length = 0;
gdjs.LobbyCode.GDChannelObjects1.length = 0;
gdjs.LobbyCode.GDChannelObjects2.length = 0;

gdjs.LobbyCode.eventsList0(runtimeScene);

return;

}

gdjs['LobbyCode'] = gdjs.LobbyCode;
