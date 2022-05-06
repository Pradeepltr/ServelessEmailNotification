'use strict';
const AWS=require('aws-sdk');
const SES=new AWS.SES();
module.exports.hello = async (event) => {
  var response
  console.log("event Call")
  const params={
     Destination:{
       ToAddresses:["pk6361439@gmail.com"]
     },
     Message:{
       Body:{
         Text:{Data:"All right worked perfectly"}
       },
       Subject:{Data:"Notification"}
     },
     Source:"pk6361439@gmail.com"
  };
  try{
    await SES.sendEmail(params).promise();
    response={
      statusCode:200,
      body:JSON.stringify("Email Notification send")
    }

  }
  catch(err){
    console.log(err);
    response={
       statusCode:400,
       body:JSON.stringify("Error occurs while sending email")
    }
  }
  return response;
};
