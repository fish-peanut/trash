function addData() {
  db.collection('activeActivity').add({
    // data 字段表示需新增的 JSON 数据
    data: {
      detail:[
        {
          activeActivity:"play game",
          activeTime: db.serverDate(),
          description:"狗叫的最大声的是垃圾",
          limitNum:5,
          location:"32#513"
        }
      ],
      limitSex:1,
      members:[
        "ik","xiaoyu","花生"
      ],
      name:"花生",
      tags:[
        "娱乐","其他"
      ]
    },
    success: function(res) {
      // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
      console.log(res)
    }
  })
}


