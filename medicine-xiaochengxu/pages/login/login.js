// pages/login/login.js
const app=getApp();
console.log(app.globalData.isLogin)
Page({
  getUserInfoAction(info){
    const {userInfo}=info.detail; 
    wx.setStorageSync('userinfo', userInfo);
    wx.navigateBack({
      delta: 1,
    })
    if(info.detail.errMsg === 'getUserInfo:ok'){
      wx.request({
        url: 'http://localhost:3000/api/user/set_userinfo',
        method:'POST',
        data:{
          ...info.detail.userInfo,
          token: wx.getStorageSync('TOKEN')
        },
        success(res){
         console.log(res);
        },
        fail(error){
         console.log(error);
        }
      })
    }
 
   },
  /**
   * 页面的初始数据
   */
  data: {

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

  }
})