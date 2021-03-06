const app = getApp()
Page({
  onLoad: function (options) {
    this.setData({
      scene: ['data:image/png;base64,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'],
      //title: options.title,
      //date: options.date,
      //time: options.time,
      //car: options.car,
      title: wx.getStorageSync('title'),
      date: wx.getStorageSync('date'),
      time: wx.getStorageSync('time'),
      car: wx.getStorageSync('car'),
      
      driver_name:options.driver_name,
      driver_avator: options.driver_avator,
      isDriver: options.isDriver,
      textArray: [{ name: '', img: '', add: "/images/addSeat.png" }, { name: '', img: '', add: "/images/addSeat.png" }, { name: '', img: '', add: "/images/addSeat.png" }, { name: '', img: '', add: "/images/addSeat.png"}]
    });

  },


  selectSeat: function(e) {
    if(this.data.isDriver === "true"){
      return;
    }
    var idx = parseInt(e.currentTarget.id);
    console.log(idx);
    let passengers = this.data.textArray;
    let user_name = app.globalData.userInfo ? app.globalData.userInfo.nickName : "Username";
    console.log(app.globalData.userInfo.name);
    let user_img = app.globalData.userInfo ? app.globalData.userInfo.avatarUrl : 'https://i.imgur.com/I8Ce8Ke.jpg';
    if (passengers[idx].img === ''){
        console.log('adding image');
        
        passengers.forEach(function(element) {

          if (element.name === user_name) {
            element.name = '';
            element.img = '';
            element.add = "/images/addSeat.png";
          }
        });
        passengers[idx].img = user_img;
        passengers[idx].name = user_name;
        passengers[idx].add = "";
    }
    this.setData({
      textArray: passengers
    });


  },

  toIndexView: function() {
    console.log("hi");
    wx.switchTab({
      url: '../index/index',
    });
  },
  deleteSeat: function(e) {
    let id = e.currentTarget.id;
    console.log(id);
    let passengers = this.data.textArray;
    console.log(passengers[parseInt(id[3])]);
    if (passengers[parseInt(id[3])].img === '') {
      console.log('errrrorrrrr');
    }
    else {
      passengers[parseInt(id[3])].img = '';
      passengers[parseInt(id[3])].del_display='none';
    }
    this.setData({
      textArray: passengers
    });
  },
  
   modifyRide: function (e) {
    wx.navigateTo({
      url: '../newRide/newRide'
    })
    console.log("end ride");
  },

  endRideAction: function(e){
    wx.setStorageSync('noNewRide', true);
    wx.navigateTo({
      url: '../rating/rating'
    })
    console.log("end ride");
  },

  toDriverView: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../driver/driver'
    })
  },


  longTap: function(e) {
    wx.previewImage({
      current: this.data.scene[0],
      urls: this.data.scene
    }) 
  }

  
})