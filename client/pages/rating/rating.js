Page({
  data: {
    rideTime: {
      hours: 2,
      minutes: 45
    },
    driverInfo: {
      avatarUrl: 
      'http://s3.amazonaws.com/nvest/Blank_Club_Website_Avatar_Gray.jpg',
      nickName: '老司机'
    },
    star: 0,
    starMap: [
      '非常差',
      '差',
      '一般',
      '好',
      '非常好',
    ],
  },
  myStarChoose(e) {
    let star = parseInt(e.target.dataset.star) || 0;
    this.setData({
      star: star,
    });
  },
  onUnload() {
    wx.redirectTo({
      url: '../launch/launch'
    })
  }
});

// 接收：顺风车时长 司机头像 id
// 发送：该次顺风车评分