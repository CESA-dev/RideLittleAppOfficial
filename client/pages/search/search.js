Page({

  /**
   * 页面的初始数据
   */
  data: {
    start: [{name: 'ORD', selected: false }, {name: '芝加哥市区', selected: false }, {name: '香槟', selected: false }, {name: '其他', selected: false }],
    otherStart: 'nk',
    otherDest : 'j',
    destination: [{ name: 'ORD', selected: false }, { name: '芝加哥市区', selected: false }, { name: '香槟', selected: false }, { name: '其他', selected: false }],
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
      date: e.detail.value
    })
  },

  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },

  bindOtherStart: function(e){
    console.log('设置特殊出发地：'+e.detail.value)
    this.setData(
      {
        otherStart: e.detail.value
      }
    )
  },

  bindOtherDest: function(e){
    console.log('设置特殊起始地：' + e.detail.value)
    this.setData(
      {
        otherDest: e.detail.value
      }
    )
  },

  addLoc: function (e) {
    console.log(e);
    let id = e.currentTarget.id;
    let isStart = id.substring(0,3) === 'des' ? false : true;

    let locs = [];
    if (isStart) {
      locs = this.data.start;
    }
    else {
      locs = this.data.destination;
    }
    let idx = id[id.length-1];
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

  search: function(e){
    let result = {};
    result.date = this.data.date;
    result.time = this.data.time;
    

    let locs = []; 
    locs = this.data.start;
    for (var i = 0; i < locs.length-1; i++){
      if(locs[i].selected == true){
        result.start = locs[i].name;
      }
    }
    if(locs[3].selected == true){
      result.start = this.data.otherStart;
    }
    locs = this.data.destination;
    for (var i = 0; i < locs.length - 1; i++) {
      if (locs[i].selected == true) {
        result.dest = locs[i].name;
      }
    }
    if (locs[3].selected == true) {
      result.dest = this.data.otherDest;
    }
    console.log(result)
    wx.navigateTo({
      url: '../index/index',
    })
  }
})
