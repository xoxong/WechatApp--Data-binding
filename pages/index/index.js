//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    // 车牌号
    numbers: "",
    numbers1: ["贵A-22222","贵A-33333"],
    cons:true
  },
  onLoad: function () {
  },
  // 输入车牌号inputs输入触发时间
  fun_input:function(e){
    var that=this;
    that.setData({
      numbers: e.detail.value
    })
  },
  // 保存车牌号
  fun_btn:function(){
    var that = this;
    // 判断是否为空
    if (that.data.numbers.length<1){
      wx.showModal({
        title: '错误',
        content: '车牌号不能为空',
      })
      return;
    }
    // 正则判断是否正确
    if (/^[\u4e00-\u9fa5][A-Z]{1}[-]{1}[0-9]{5}$/.test(that.data.numbers)==false){
      wx.showModal({
        title: '提示',
        content: '号码牌错误',
      })
      return;
    }
    else{
      var that = this;
      // 判断是否存在
      for (var index in that.data.numbers1){
        if (that.data.numbers1[index] == that.data.numbers){
          wx.showModal({
            title: '提示',
            content: '号码牌重复',
          })
          return;
        }
      }
      // 声明一个数组添加填写的数据
      var arrnum = that.data.numbers1
      arrnum.push(that.data.numbers)
      // 赋值data
      that.setData({
        numbers1: arrnum
      })
    }
  },
  // 删除车牌号
  fun_brn2:function(e){
    var that = this;
    // 获取自定义属性
    var numid = e.currentTarget.dataset.id
    var arrnum = that.data.numbers1
    // 删除数组方法
    arrnum.splice(numid,1)
    that.setData({
      numbers1: arrnum
    })
  }

})
