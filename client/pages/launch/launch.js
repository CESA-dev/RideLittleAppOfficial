// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    buttonArray: [{ "role": "我是乘客", "icon": "/images/man.png", "tap":"passengerTap"},
                  { "role": "我要开车", "icon": "/images/car.png", "tap": "driverTap"},
                  { "role": "浏览记录", "icon": "/images/history.png", "tap": "historyTap" }/*, { "role": "个人信息", "icon": "/images/me.png", "tap": "profileTap"}*/]
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  passengerTap: function(e){
    console.log('passengerTap');
    wx.navigateTo({
      url: '../search/search',
    })

    
  },

  driverTap: function(e){
    wx.navigateTo({
      url: '../newRide/newRide',
    })
  },

  historyTap: function(e){
    wx.navigateTo({
      url: '../history/history',
    })
  },
  profileTap: function (e) {
    wx.navigateTo({
      url: '../me/me',
    })
  }
})


//HTTP GET REQUEST

// wx.request({
//       url: 'https://cecywoii.qcloud.la/weapp/hello',
//       data:'',
//       header: {
//         // "Content-Type":"application/json"
//       },
//       success: function (res) {
//         console.log(res.data.data)
//       },
//       fail: function (err) {
//         console.log(err)
//       }

//     })
