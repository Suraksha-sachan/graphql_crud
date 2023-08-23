const { myDataSource } = require("../database/config");

async function getZendeskUser(){
    try{
    let zendeskUserToken = await myDataSource.getRepository('zendesk_user_token');
    const response =  zendeskUserToken.find();
    return response;
    }catch(err){
        console.log("🚀 ~ file: zendesk.service.js:10 ~ getZendeskUser ~ err:", err)
    }
}
module.exports = {
    getZendeskUser: getZendeskUser
}