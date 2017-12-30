# WechatApp--Data-binding
微信小程序数据绑定模式中数据的增加和删除，正则匹配判断及是否存在

### 基础功能
+ input输入车牌同时实时更新输入的内容
+ 通过点击保存按钮保存输入的车牌号
 + 判断是否为空
 + 判断是否满足要求
  + 正则表达式
 + 判断是否重复
+ 生成的车牌号view可删除
 + 设置自定义属性
 + 判断数组中是否存在



### 部分代码
	<!--车牌号 -->
	<view class='mpdular_1'>
		<!--建立input输入车牌号  -->
		<input class='m1_inp1' value='' type='text' name='numbers' placeholder='请输入车牌号' bindinput="fun_input"></input>
		<!--显示车牌号  -->
		<view class='m1_view1'>车牌号：{{numbers}}</view>
		<!--保存按钮  -->
		<button class='m1_btn1' bindtap="fun_btn">保存</button>
		<!--添加车牌号  -->
		<block wx:for='{{numbers1}}' wx:key='index'> 
			<view class='m1_view2' wx:if='{{cons}}'>
      			车牌号：{{numbers1[index]}}  
      		<button bindtap='fun_brn2' data-id='{{index}}'>删</button>
    </view></block></view>

#### WXSS
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
