//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
}),

Page({
  hzpl:[{
   hzname:['高小跳'],
    hzpl:'我是来找石孝民医生来做包皮手术的。'
  },{
    hzname:['高大跳'],
    hzpl:'我是来找石孝民医生来做包皮手术的。'
  },{
     hzname:['高跳跳'],
    hzpl:'我是来找石孝民医生来做包皮手术的。'
  }],

  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function() {
    console.log('form发生了reset事件')
  },
    onLoad: function(options) {
    this.setData({
      title: options.title
    })
  },
   calling:function(){
    wx.makePhoneCall({
      phoneNumber: '05372938888', //此号码并非真实电话号码，仅用于测试
      success:function(){
        console.log("拨打电话成功！")
      },
      fail:function(){
        console.log("拨打电话失败！")
      }
    })
  }
})
//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    selectHide:false,
    inputValue:'',
    getSearch:[],
    modalHidden:true
  },
  bindInput:function(e){
     this.setData({
       inputValue:e.detail.value
     })
     console.log('bindInput'+this.data.inputValue)
  },
  setSearchStorage:function(){
    let data;
    let localStorageValue = [];
    if(this.data.inputValue != ''){
      //调用API从本地缓存中获取数据
      var searchData = wx.getStorageSync('searchData') || []
      searchData.push(this.data.inputValue)
      wx.setStorageSync('searchData', searchData)
      wx.navigateTo({
          url: '../result/result'
      })
      // console.log('马上就要跳转了！')
    }else{
      console.log('空白的你搜个jb')
    }
    // this.onLoad();
  },
  modalChangeConfirm:function(){
      wx.setStorageSync('searchData',[])
      this.setData({
        modalHidden:true
      })
      wx.redirectTo({
        url: '../search/search'
      })
      // this.onLoad();
      
  },
  modalChangeCancel:function(){
      this.setData({
        modalHidden:true
      })
  },
  clearSearchStorage:function(){
     this.setData({
        modalHidden:false
    })
    // this.onLoad();
  },
  onLoad: function() {
    console.log('search is onLoad');
  },
  onShow:function(){
    var getSearch = wx.getStorageSync('searchData');
    this.setData({
      getSearch:getSearch,
      inputValue:''
    })
    console.log('search is onshow')
  },
  onHide:function(){
    console.log('search is onHide')
    wx.redirectTo({
        url: '../search/search'
    })
  },
  bindchange:function(e){
    console.log('bindchange')
  },
  clearInput:function(){
    this.setData({
       inputValue:''
     })
  }
})