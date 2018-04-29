const app = getApp()
Page({
  onLoad: function (options) {
    this.setData({
      title: options.title,
      date: options.date,
      time: options.time,
      car: options.car,
      textArray: [{ name: '', img: '', add: "/images/addSeat.png" }, { name: '', img: '', add: "/images/addSeat.png" }, { name: '', img: '', add: "/images/addSeat.png" }, { name: '', img: '', add: "/images/addSeat.png"}]
    });
  },


  selectSeat: function(e) {
    
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
  
  endRideAction: function(e){
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
  }

  
})