const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start: [{ name: 'ORD', selected: false }, { name: '芝加哥市区', selected: false }, { name: '香槟', selected: false }, { name: '其他', selected: false }],
    otherStart: 'nk',
    otherDest: 'j',
    destination: [{ name: 'ORD', selected: false }, { name: '芝加哥市区', selected: false }, { name: '香槟', selected: false }, { name: '其他', selected: false }],
    contact:[{name:'微信号',selected:false},{name:'微信二维码', selected:false}],
    contactID:'',
    QRcode:'',
    QRcodeprovided:false,
    numberOfSeat: [1,2,3,4,5],
    selectDate:'',
    selectTime:'',
    selectSeatNumber:0,
    
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


  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      
      date: e.detail.value,
      selectDate: e.detail.value
    })
  },

  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value,
      selectTime: e.detail.value
    })
  },

  bindSeatChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      selectSeatNumber: e.detail.value
    })
  },

  bindOtherStart: function (e) {
    console.log('设置特殊出发地：' + e.detail.value)
    this.setData(
      {
        otherStart: e.detail.value
      }
    )
  },

  bindOtherDest: function (e) {
    console.log('设置特殊起始地：' + e.detail.value)
    this.setData(
      {
        otherDest: e.detail.value
      }
    )
  },

  bindWeChatId: function(e){
    console.log('设置联络方式：' + e.detail.value)
    this.setData(
      {
        contactID: e.detail.value
      }
    )
  },

  addContact: function (e){
    console.log(e);
    let id = e.currentTarget.id;
    let index = id[id.length - 1];
    let options = this.data.contact;
    options[0].selected = false;
    options[1].selected = false;
    options[index].selected = true;
    this.setData({
      contact:options
    })
    if(index == 1){
      let _this = this
      wx.showActionSheet({
        itemList: ['从相册中选择', '拍照'],
        itemColor: "blue",
        success: function (res) {
          if (!res.cancel) {
            if (res.tapIndex == 0) {
              _this.chooseWxImage('album')
            } else if (res.tapIndex == 1) {
              _this.chooseWxImage('camera')
            }
          }
        }
      })
    }
  },

  chooseWxImage: function (type) {
    let _this = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        console.log(res);
        wx.showToast({
          title: '成功',
          icon: 'succes',
          duration: 1000,
          mask: false
        })
        _this.setData({
          QRcode: res.tempFilePaths[0],
          QRcodeprovided:true
        })
      }
    })
  },


  addLoc: function (e) {
    console.log(e);
    let id = e.currentTarget.id;
    let isStart = id.substring(0, 3) === 'des' ? false : true;

    let locs = [];
    if (isStart) {
      locs = this.data.start;
    }
    else {
      locs = this.data.destination;
    }
    let idx = id[id.length - 1];
    // if the seat clicked is empty
    if (locs[idx].selected === false) {
      // parse the locs to remove the old loc selected
      locs.forEach((val, idx, arr_whole) => {
        if (val.selected) {
          val.selected = false;
        }
      });
      // add user info
      locs[idx].selected = true;
    }
    if (isStart) {
      this.setData({
        start: locs
      });
    }
    else {
      this.setData({
        destination: locs
      });
    }

  },

  

  create:function(e){
    console.log('创建房间' + this.data.selectSeatNumber + this.data.selectDate + this.data.selectTime + this.data.driver);
    let title = e.currentTarget.dataset.title
    let date = e.currentTarget.dataset.date
    let time = e.currentTarget.dataset.time
    let car = e.currentTarget.dataset.car
    let driver_name = app.globalData.userInfo.nickName
    let driver_avator = app.globalData.userInfo.avatarUrl
    let isDriver = "true"
    wx.navigateTo({
      url: '../detail/detail?title=' + title + "&date="
      + date + "&time=" + time + "&car=" + car + "&driver_name=" + driver_name + "&driver_avator=" + driver_avator + "&isDriver=" + isDriver
    })
    
  }
})
