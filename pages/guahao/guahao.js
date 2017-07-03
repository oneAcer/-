Page({
  data: {
    array: ['前列腺疾病', '阳痿', '早泄','包皮包茎','阴茎延长','射精痛','男性不育'],
    objectArray: [
      {
        id: 0,
        name: '前列腺疾病'
      },
      {
        id: 1,
        name: '阳痿'
      },
      {
        id: 2,
        name: '早泄'
      },
       {
        id: 3,
        name: '包皮包茎'
      },
      {
        id: 4,
        name: '阴茎延长'
      },
       {
        id: 5,
        name: '射精痛'
      },
       {
        id: 6,
        name: '男性不育'
      }
    ],
    index: 0,
    date: '2017-07-01',
    time: '12:01',
    items: [
      { name: 'man', value: '男' , checked: 'true'},
      { name: 'woman', value: '女'},
    ]
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  }
})