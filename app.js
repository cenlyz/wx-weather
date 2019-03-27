//app.js
App({
  onLaunch: function () {//小程序初始化时执行
    var that = this;
    that.curid = wx.getStorageSync('curid') || that.curid;//API：获取本地缓存，若不存在设置为全局属性
    that.setlocal('curid',that.curid);//调用全局方法
  },
  setlocal:function(id,val){
    wx.setStorageSync(id, val);//API：设置本地缓存
  },
  curid:"CN101010100",
  version:"1.0",
  globalData: {
    userInfo: null
  }
})