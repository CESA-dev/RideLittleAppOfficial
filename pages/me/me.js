// pages/me/me.js
const app = getApp()

Page({
  data: {
    motto: 'Email: NETID@illinois.edu',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('open-type.getUserInfo'),
    edit: true,
    buttonText: "编辑资料",
    buttonType: "primary",
    details: {email: "", major: "", year: "", music: "", sports: ""}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  onClick: function () {
    if(this.data.edit){
      this.setData({
        buttonText: "保存修改",
        buttonType: "warn",
        edit: false
      })
    }
    else{
      this.setData({
        buttonText: "编辑资料",
        buttonType: "primary",
        edit: true
      })
    }
  }

  
})

// 接收：用户头像 id 顺风车次数 邮箱 专业 年级 喜欢的音乐 喜欢的运动
// 发送：用户邮箱 专业 年级 喜欢的音乐 喜欢的运动
