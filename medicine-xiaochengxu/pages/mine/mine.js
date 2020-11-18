// pages/mine/mine.js
const app=getApp();
console.log(app.globalData.isLogin)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    islogin:app.globalData.isLogin,
    userInfo:{},
  },


  onShow: function () {
    const userInfo=wx.getStorageSync('userinfo');
    this.setData({userInfo:userInfo});
    console.log(this.data.userInfo)
  },
  
})