const FCM = require("fcm-node");
// const serverKey = require('./keys.json')
// const token = require('./token');
// const serverKey = 'AAAAEGILETM:APA91bFYpx3srHe8WS_m_-AM8SsIURmdDdRaKNRsoIGf91hxeDJqdLWLeGht2IOtQKEXOINO42Ygb69Rvhk2b-5pTLfg4e84dTWSmMQ1IZ3tzbuq6ugeHAzyC1yzvMauBn4ACaEURfoX';
const iosserverkey= 'AAAAEGILETM:APA91bFYpx3srHe8WS_m_-AM8SsIURmdDdRaKNRsoIGf91hxeDJqdLWLeGht2IOtQKEXOINO42Ygb69Rvhk2b-5pTLfg4e84dTWSmMQ1IZ3tzbuq6ugeHAzyC1yzvMauBn4ACaEURfoX'
const deviceToken = token;
const fcm = new FCM(iosserverkey);
const data={"token":"f1HTw5Pbfxk:APA91bEQFNKAnU23mvsV5BBhypTnGqNj3OUwGZEGxo70ZjeTD0YrXeq69WNbYHy2LJBSldIMxruc9FFz8nsgDMpBqcBqo4a6IzVLApSnWs1m_hQJC-8dlNw6l-zntzBy8u7whfoOyIbB","os":"android"};


const message = {
  to: data.token,
  notification: {
    title: "Orient",
    body: "DASHBOARD_CONTACTUS",
  },
  data:{
    module:'DASHBOARD_ABOUTUS'
  }
};
sendMsg = () => {
  fcm.send(message, (err, response) => {
    if (err) {
      console.log("Something has gone wrong!", err);
    } else {
      console.log("Successfully sent!");
    }
  });
};

module.exports = { sendMsg };
