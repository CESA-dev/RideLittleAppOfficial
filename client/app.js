//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
var util = require('./utils/util.js')
App({
  data: {
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    var that = this
    qcloud.setLoginUrl(config.service.loginUrl)
    // 调用登录接口
    qcloud.login({
      success(result) {
        if (result) {
          console.log(result)
          util.showSuccess('登录成功')
          that.globalData.userInfo = result.data.data
          that.globalData.logged = true
          console.log(that.globalData)
          qcloud.request({
            url: config.service.updateUserUrl,
            method: 'POST',
            data: {
              newUser: false,
              info: result.data.data
            }
          })
          // update userinfo in database

        } else {
          // 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
          qcloud.request({
            url: config.service.requestUrl,
            login: true,
            
            success(result) {
              console.log(result)
              util.showSuccess('登录成功')
              that.globalData.userInfo = result.data.data
              that.globalData.logged = true
              console.log(that.globalData)

              // update userinfo in database
              qcloud.request({
                url:config.service.updateUserUrl,
                method: 'POST',
                data: {
                  newUser: false,
                  info: result.data.data
                },
                success(result) {
                  console.log(result)
                },
                fail(error) {
                  console.log('request fail', error)
                }

              })
            },

            fail(error) {
              util.showModel('请求失败', error)
              console.log('request fail', error)
            }
          })
        }
      },

      fail(error) {
        util.showModel('登录失败', error)
        console.log('登录失败', error)
      }
    })
    
  },
  globalData: {
    userInfo: null,
    logged: false
  }
})