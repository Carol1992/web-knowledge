let configs = []
configs[1]= {
  bindto: '#bar_1',
  data: {
    type: 'bar',
    json: [
      {Embarked: "P", 'mean(Fare)': 7.5875, 'sum(Survived)': 1},
      {Embarked: "C", 'mean(Fare)': 59.95414404761905, 'sum(Survived)': 93},
      {Embarked: "S", 'mean(Fare)': 27.141456786271394, 'sum(Survived)': 215},
      {Embarked: "Q", 'mean(Fare)': 13.44620897435897, 'sum(Survived)': 31},
      {Embarked: "null", 'mean(Fare)': 80, 'sum(Survived)': 2}
    ],
    range: {
      //[[], []]
      color: []
    },
    column: {
      categories: ['Embarked'],
      aggressions: []
    },
    row: {
      categories: [],
      aggressions: [['sum(Survived)']]
    },
    combined: [
      [{
        axis: 'y', 
        aggr: 'sum(Survived)',
        show: true,
        title: 'sum(Survived)',
        color: {
          feature: 'mean(Fare)',
          type: 'linear',
          stacked: false,
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['mean(Fare)', 'sum(Survived)'],
        type: 'bar',
        data: [
          {Embarked: "P", 'mean(Fare)': 7.5875, 'sum(Survived)': 1},
          {Embarked: "C", 'mean(Fare)': 59.95414404761905, 'sum(Survived)': 93},
          {Embarked: "S", 'mean(Fare)': 27.141456786271394, 'sum(Survived)': 215},
          {Embarked: "Q", 'mean(Fare)': 13.44620897435897, 'sum(Survived)': 31},
          {Embarked: "null", 'mean(Fare)': 80, 'sum(Survived)': 2}
        ]
      }]
    ]
  },
  bar: { 
    //柱子间的距离
    padding: { 
      inner: 0.01, 
      outter: 0.25
    } 
  },
  //画坐标轴
  axis: {
    rotated: false,
    x: {
      show: true,
      type: '', //bin, category, numeric, (timeseries: 暂未实现)
    },
    //这几个跟zoom axis有关
    zoom: {
      scale: 1,
      translate: undefined,
      panning: undefined,
      enable: true
    }
  },
}
configs[2]= {
  bindto: '#bar_2',
  data: {
    type: 'bar',
    json: [
      {Embarked: "P", 'mean(Fare)': 7.5875, 'sum(Survived)': 1, Sex: 'male'},
      {Embarked: "P", 'mean(Fare)': 7.5875, 'sum(Survived)': 1, Sex: 'female'},
      {Embarked: "C", 'mean(Fare)': 59.95414404761905, 'sum(Survived)': 93, Sex: 'male'},
      {Embarked: "C", 'mean(Fare)': 59.95414404761905, 'sum(Survived)': 93, Sex: 'female'},
      {Embarked: "S", 'mean(Fare)': 27.141456786271394, 'sum(Survived)': 215, Sex: 'male'},
      {Embarked: "S", 'mean(Fare)': 27.141456786271394, 'sum(Survived)': 215, Sex: 'female'},
      {Embarked: "Q", 'mean(Fare)': 13.44620897435897, 'sum(Survived)': 31, Sex: 'male'},
      {Embarked: "Q", 'mean(Fare)': 13.44620897435897, 'sum(Survived)': 31, Sex: 'female'},
      {Embarked: "null", 'mean(Fare)': 80, 'sum(Survived)': 2, Sex: 'male'},
      {Embarked: "null", 'mean(Fare)': 80, 'sum(Survived)': 2, Sex: 'female'}
    ],
    range: {
      //[[], []]
      color: []
    },
    column: {
      categories: ['Embarked'],
      aggressions: []
    },
    row: {
      categories: [],
      aggressions: [['sum(Survived)']]
    },
    combined: [
      [{
        axis: 'y', 
        aggr: 'sum(Survived)',
        show: true,
        title: 'sum(Survived)',
        color: {
          feature: 'Sex',
          type: 'ordinal',
          stacked: true,
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['mean(Fare)', 'sum(Survived)', 'Sex'],
        type: 'bar',
        data: [
          {Embarked: "P", 'mean(Fare)': 7.5875, 'sum(Survived)': 1, Sex: 'male'},
          {Embarked: "P", 'mean(Fare)': 7.5875, 'sum(Survived)': 1, Sex: 'female'},
          {Embarked: "C", 'mean(Fare)': 59.95414404761905, 'sum(Survived)': 93, Sex: 'male'},
          {Embarked: "C", 'mean(Fare)': 59.95414404761905, 'sum(Survived)': 93, Sex: 'female'},
          {Embarked: "S", 'mean(Fare)': 27.141456786271394, 'sum(Survived)': 215, Sex: 'male'},
          {Embarked: "S", 'mean(Fare)': 27.141456786271394, 'sum(Survived)': 215, Sex: 'female'},
          {Embarked: "Q", 'mean(Fare)': 13.44620897435897, 'sum(Survived)': 31, Sex: 'male'},
          {Embarked: "Q", 'mean(Fare)': 13.44620897435897, 'sum(Survived)': 31, Sex: 'female'},
          {Embarked: "null", 'mean(Fare)': 80, 'sum(Survived)': 2, Sex: 'male'},
          {Embarked: "null", 'mean(Fare)': 80, 'sum(Survived)': 2, Sex: 'female'}
        ]
      }]
    ]
  },
  bar: { 
    //柱子间的距离
    padding: { 
      inner: 0.01, 
      outter: 0.05
    } 
  },
  //画坐标轴
  axis: {
    rotated: false,
    x: {
      show: true,
      type: '', //bin, category, numeric, (timeseries: 暂未实现)
    },
    //这几个跟zoom axis有关
    zoom: {
      scale: 1,
      translate: undefined,
      panning: undefined,
      enable: true
    }
  },
}
configs[3]= {
  bindto: '#bar_3',
  data: {
    type: 'bar',
    json: [
      {Embarked: "P", Pclass: "3", Sex: "male", 'sum(Survived)': 0},
      {Embarked: "P", Pclass: "3", Sex: "female", 'sum(Survived)': 1},
      {Embarked: "C", Pclass: "3", Sex: "male", 'sum(Survived)': 10},
      {Embarked: "C", Pclass: "3", Sex: "female", 'sum(Survived)': 15},
      {Embarked: "C", Pclass: "1", Sex: "male", 'sum(Survived)': 17},
      {Embarked: "C", Pclass: "1", Sex: "female", 'sum(Survived)': 42},
      {Embarked: "C", Pclass: "2", Sex: "male", 'sum(Survived)': 2},
      {Embarked: "C", Pclass: "2", Sex: "female", 'sum(Survived)': 7},
      {Embarked: "S", Pclass: "3", Sex: "male", 'sum(Survived)': 34},
      {Embarked: "S", Pclass: "3", Sex: "female", 'sum(Survived)': 32},
      {Embarked: "S", Pclass: "1", Sex: "male", 'sum(Survived)': 28},
      {Embarked: "S", Pclass: "1", Sex: "female", 'sum(Survived)': 45},
      {Embarked: "S", Pclass: "2", Sex: "male", 'sum(Survived)': 15},
      {Embarked: "S", Pclass: "2", Sex: "female", 'sum(Survived)': 61},
      {Embarked: "Q", Pclass: "3", Sex: "male", 'sum(Survived)': 3},
      {Embarked: "Q", Pclass: "3", Sex: "female", 'sum(Survived)': 24},
      {Embarked: "Q", Pclass: "1", Sex: "male", 'sum(Survived)': 0},
      {Embarked: "Q", Pclass: "1", Sex: "female", 'sum(Survived)': 2},
      {Embarked: "Q", Pclass: "2", Sex: "male", 'sum(Survived)': 0},
      {Embarked: "Q", Pclass: "2", Sex: "female", 'sum(Survived)': 2},
      {Embarked: "null", Pclass: "1", Sex: "male", 'sum(Survived)': NaN},
      {Embarked: "null", Pclass: "1", Sex: "female", 'sum(Survived)': 2}
    ],
    range: {
      //[[], []]
      color: []
    },
    column: {
      categories: ['Embarked', 'Pclass'],
      aggressions: []
    },
    row: {
      categories: ['Sex'],
      aggressions: [['sum(Survived)']]
    },
    combined: [
      [{
        axis: 'y', 
        aggr: 'sum(Survived)',
        color: {
          feature: 'Embarked',
          type: 'ordinal',
          stacked: false,
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['sum(Survived)'],
        type: 'bar',
        data: [
          {Embarked: "P", Pclass: "3", Sex: "male", 'sum(Survived)': 0},
          {Embarked: "P", Pclass: "3", Sex: "female", 'sum(Survived)': 1},
          {Embarked: "C", Pclass: "3", Sex: "male", 'sum(Survived)': 10},
          {Embarked: "C", Pclass: "3", Sex: "female", 'sum(Survived)': 15},
          {Embarked: "C", Pclass: "1", Sex: "male", 'sum(Survived)': 17},
          {Embarked: "C", Pclass: "1", Sex: "female", 'sum(Survived)': 42},
          {Embarked: "C", Pclass: "2", Sex: "male", 'sum(Survived)': 2},
          {Embarked: "C", Pclass: "2", Sex: "female", 'sum(Survived)': 7},
          {Embarked: "S", Pclass: "3", Sex: "male", 'sum(Survived)': 34},
          {Embarked: "S", Pclass: "3", Sex: "female", 'sum(Survived)': 32},
          {Embarked: "S", Pclass: "1", Sex: "male", 'sum(Survived)': 28},
          {Embarked: "S", Pclass: "1", Sex: "female", 'sum(Survived)': 45},
          {Embarked: "S", Pclass: "2", Sex: "male", 'sum(Survived)': 15},
          {Embarked: "S", Pclass: "2", Sex: "female", 'sum(Survived)': 61},
          {Embarked: "Q", Pclass: "3", Sex: "male", 'sum(Survived)': 3},
          {Embarked: "Q", Pclass: "3", Sex: "female", 'sum(Survived)': 24},
          {Embarked: "Q", Pclass: "1", Sex: "male", 'sum(Survived)': 0},
          {Embarked: "Q", Pclass: "1", Sex: "female", 'sum(Survived)': 2},
          {Embarked: "Q", Pclass: "2", Sex: "male", 'sum(Survived)': 0},
          {Embarked: "Q", Pclass: "2", Sex: "female", 'sum(Survived)': 2},
          {Embarked: "null", Pclass: "1", Sex: "male", 'sum(Survived)': NaN},
          {Embarked: "null", Pclass: "1", Sex: "female", 'sum(Survived)': 2}
        ]
      }]
    ]
  },
  bar: { 
    //柱子间的距离
    padding: { 
      inner: 0.01, 
      outter: 0.05
    } 
  },
  //画坐标轴
  axis: {
    rotated: false,
    x: {
      show: true,
      type: '', //bin, category, numeric, (timeseries: 暂未实现)
    },
    //这几个跟zoom axis有关
    zoom: {
      scale: 1,
      translate: undefined,
      panning: undefined,
      enable: true
    }
  },
}
configs[4]= {
  bindto: '#bar_4',
  //固定y, y2轴的时候需要
  size: {
    height: 800
  },
  container: { 
    width: '600',  //1080
    height: '800' //600
  },
  data: {
    type: 'bar',
    json: [
      {'sum(销售金额)': 151682777.09000546, 'sum(销售数量)': 51682777.09000546, 省份: "河南省"},
      {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 11229200.95999943, 省份: "浙江省"},
      {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 1932274.78999999, 省份: "吉林省"},
      {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 8320015.72999907, 省份: "四川省"},
      {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 731732.48999999, 省份: "天津市"},
      {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 656606.460000008, 省份: "宁夏"},
      {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 4926494.39999879, 省份: "安徽省"},
      {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 16092377.04000114, 省份: "山东省"},
      {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 4982340.380000211, 省份: "山西省"},
      {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 4657181.70000026, 省份: "广东省"},
      {'sum(销售金额)': 5409940.109999983, 'sum(销售数量)': 409940.109999983, 省份: "广西省"},
      {'sum(销售金额)': 93506928.76000081, 'sum(销售数量)': 3506928.76000081, 省份: "新疆"},
      {'sum(销售金额)': 73817839.26999827, 'sum(销售数量)': 3817839.26999827, 省份: "河北省"},
      {'sum(销售金额)': 47782957.6399988, 'sum(销售数量)': 7782957.6399988, 省份: "江西省"},
      {'sum(销售金额)': 52447454.51999989, 'sum(销售数量)': 2447454.51999989, 省份: "甘肃省"},
      {'sum(销售金额)': 22314036.31000011, 'sum(销售数量)': 2314036.31000011, 省份: "江苏省"},
      {'sum(销售金额)': 49899185.33999957, 'sum(销售数量)': 9899185.33999957, 省份: "福建省"},
      {'sum(销售金额)': 24532260.47999992, 'sum(销售数量)': 4532260.47999992, 省份: "西藏"},
      {'sum(销售金额)': 13954131.150000064, 'sum(销售数量)': 6532260.47999992, 省份: "贵州省"},
      {'sum(销售金额)': 62926304.729999356, 'sum(销售数量)': 8532260.47999992, 省份: "辽宁省"},
      {'sum(销售金额)': 21032236.2500001, 'sum(销售数量)': 7532260.47999992, 省份: "云南省"},
      {'sum(销售金额)': 42603900.739999704, 'sum(销售数量)': 4532260.47999992, 省份: "内蒙古"},
      {'sum(销售金额)': 142972736.7700018, 'sum(销售数量)': 5532260.47999992, 省份: "湖南省"},
      {'sum(销售金额)': 2171847.9199999967, 'sum(销售数量)': 9532260.47999992, 省份: "重庆市"},
      {'sum(销售金额)': 62313281.32999914, 'sum(销售数量)': 2532260.47999992, 省份: "陕西省"},
      {'sum(销售金额)': 27317151.43999988, 'sum(销售数量)': 1532260.47999992, 省份: "青海省"},
      {'sum(销售金额)': 9744438.810000032, 'sum(销售数量)': 532260.47999992, 省份: "黑龙江"},
      {'sum(销售金额)': 73518422.87, 'sum(销售数量)': 2532260.47999992, 省份: "湖北省"}
    ],
    column: {
      categories: ['省份'],
      aggressions: []
    },
    row: {
      categories: [],
      aggressions: [['sum(销售金额)', 'sum(销售数量)']]
    },
    combined: [
      [{
        axis: 'y', 
        aggr: 'sum(销售金额)',
        colored: {
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['sum(销售金额)'],
        type: 'bar',
        data: [
          {'sum(销售金额)': 151682777.09000546, 省份: "河南省"},
          {'sum(销售金额)': 101229200.95999943, 省份: "浙江省"},
          {'sum(销售金额)': 11932274.78999999, 省份: "吉林省"},
          {'sum(销售金额)': 68320015.72999907, 省份: "四川省"},
          {'sum(销售金额)': 3731732.48999999, 省份: "天津市"},
          {'sum(销售金额)': 9656606.460000008, 省份: "宁夏"},
          {'sum(销售金额)': 54926494.39999879, 省份: "安徽省"},
          {'sum(销售金额)': 116092377.04000114, 省份: "山东省"},
          {'sum(销售金额)': 14982340.380000211, 省份: "山西省"},
          {'sum(销售金额)': 34657181.70000026, 省份: "广东省"},
          {'sum(销售金额)': 5409940.109999983, 省份: "广西省"},
          {'sum(销售金额)': 93506928.76000081, 省份: "新疆"},
          {'sum(销售金额)': 73817839.26999827, 省份: "河北省"},
          {'sum(销售金额)': 47782957.6399988, 省份: "江西省"},
          {'sum(销售金额)': 52447454.51999989, 省份: "甘肃省"},
          {'sum(销售金额)': 22314036.31000011, 省份: "江苏省"},
          {'sum(销售金额)': 49899185.33999957, 省份: "福建省"},
          {'sum(销售金额)': 24532260.47999992, 省份: "西藏"},
          {'sum(销售金额)': 13954131.150000064, 省份: "贵州省"},
          {'sum(销售金额)': 62926304.729999356, 省份: "辽宁省"},
          {'sum(销售金额)': 21032236.2500001, 省份: "云南省"},
          {'sum(销售金额)': 42603900.739999704, 省份: "内蒙古"},
          {'sum(销售金额)': 142972736.7700018, 省份: "湖南省"},
          {'sum(销售金额)': 2171847.9199999967, 省份: "重庆市"},
          {'sum(销售金额)': 62313281.32999914, 省份: "陕西省"},
          {'sum(销售金额)': 27317151.43999988, 省份: "青海省"},
          {'sum(销售金额)': 9744438.810000032, 省份: "黑龙江"},
          {'sum(销售金额)': 73518422.87, 省份: "湖北省"}
        ]
      },
      {
        axis: 'y2', 
        aggr: 'sum(销售数量)',
        color: {
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['sum(销售数量)'],
        type: 'bar',
        data: [
          {'sum(销售金额)': 151682777.09000546, 'sum(销售数量)': 51682777.09000546, 省份: "河南省"},
          {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 11229200.95999943, 省份: "浙江省"},
          {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 1932274.78999999, 省份: "吉林省"},
          {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 8320015.72999907, 省份: "四川省"},
          {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 731732.48999999, 省份: "天津市"},
          {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 656606.460000008, 省份: "宁夏"},
          {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 4926494.39999879, 省份: "安徽省"},
          {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 16092377.04000114, 省份: "山东省"},
          {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 4982340.380000211, 省份: "山西省"},
          {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 4657181.70000026, 省份: "广东省"},
          {'sum(销售金额)': 5409940.109999983, 'sum(销售数量)': 409940.109999983, 省份: "广西省"},
          {'sum(销售金额)': 93506928.76000081, 'sum(销售数量)': 3506928.76000081, 省份: "新疆"},
          {'sum(销售金额)': 73817839.26999827, 'sum(销售数量)': 3817839.26999827, 省份: "河北省"},
          {'sum(销售金额)': 47782957.6399988, 'sum(销售数量)': 7782957.6399988, 省份: "江西省"},
          {'sum(销售金额)': 52447454.51999989, 'sum(销售数量)': 2447454.51999989, 省份: "甘肃省"},
          {'sum(销售金额)': 22314036.31000011, 'sum(销售数量)': 2314036.31000011, 省份: "江苏省"},
          {'sum(销售金额)': 49899185.33999957, 'sum(销售数量)': 9899185.33999957, 省份: "福建省"},
          {'sum(销售金额)': 24532260.47999992, 'sum(销售数量)': 4532260.47999992, 省份: "西藏"},
          {'sum(销售金额)': 13954131.150000064, 'sum(销售数量)': 6532260.47999992, 省份: "贵州省"},
          {'sum(销售金额)': 62926304.729999356, 'sum(销售数量)': 8532260.47999992, 省份: "辽宁省"},
          {'sum(销售金额)': 21032236.2500001, 'sum(销售数量)': 7532260.47999992, 省份: "云南省"},
          {'sum(销售金额)': 42603900.739999704, 'sum(销售数量)': 4532260.47999992, 省份: "内蒙古"},
          {'sum(销售金额)': 142972736.7700018, 'sum(销售数量)': 5532260.47999992, 省份: "湖南省"},
          {'sum(销售金额)': 2171847.9199999967, 'sum(销售数量)': 9532260.47999992, 省份: "重庆市"},
          {'sum(销售金额)': 62313281.32999914, 'sum(销售数量)': 2532260.47999992, 省份: "陕西省"},
          {'sum(销售金额)': 27317151.43999988, 'sum(销售数量)': 1532260.47999992, 省份: "青海省"},
          {'sum(销售金额)': 9744438.810000032, 'sum(销售数量)': 532260.47999992, 省份: "黑龙江"},
          {'sum(销售金额)': 73518422.87, 'sum(销售数量)': 2532260.47999992, 省份: "湖北省"}
        ]
      }]
    ]
  },
  bar: { 
    //柱子间的距离
    padding: { 
      inner: 0.01, 
      outter: 0.1
    } 
  },
  //画坐标轴
  axis: {
    rotated: false,
    x: {
      show: true,
      type: '', //bin, category, numeric, (timeseries: 暂未实现)
    },
    //这几个跟zoom axis有关
    zoom: {
      scale: 1,
      translate: undefined,
      panning: undefined,
      enable: true
    }
  },
}
configs[5]= {
  bindto: '#bar_5',
  //固定y, y2轴的时候需要
  size: {
    width: 600,
  },
  container: { 
    width: '600',  //1080
    height: '400' //600
  },
  data: {
    type: 'bar',
    json: [
      {'sum(销售金额)': 151682777.09000546, 'sum(销售数量)': 51682777.09000546, 省份: "河南省"},
      {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 11229200.95999943, 省份: "浙江省"},
      {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 1932274.78999999, 省份: "吉林省"},
      {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 8320015.72999907, 省份: "四川省"},
      {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 731732.48999999, 省份: "天津市"},
      {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 656606.460000008, 省份: "宁夏"},
      {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 4926494.39999879, 省份: "安徽省"},
      {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 16092377.04000114, 省份: "山东省"},
      {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 4982340.380000211, 省份: "山西省"},
      {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 4657181.70000026, 省份: "广东省"},
      {'sum(销售金额)': 5409940.109999983, 'sum(销售数量)': 409940.109999983, 省份: "广西省"},
      {'sum(销售金额)': 93506928.76000081, 'sum(销售数量)': 3506928.76000081, 省份: "新疆"},
      {'sum(销售金额)': 73817839.26999827, 'sum(销售数量)': 3817839.26999827, 省份: "河北省"},
      {'sum(销售金额)': 47782957.6399988, 'sum(销售数量)': 7782957.6399988, 省份: "江西省"},
      {'sum(销售金额)': 52447454.51999989, 'sum(销售数量)': 2447454.51999989, 省份: "甘肃省"},
      {'sum(销售金额)': 22314036.31000011, 'sum(销售数量)': 2314036.31000011, 省份: "江苏省"},
      {'sum(销售金额)': 49899185.33999957, 'sum(销售数量)': 9899185.33999957, 省份: "福建省"},
      {'sum(销售金额)': 24532260.47999992, 'sum(销售数量)': 4532260.47999992, 省份: "西藏"},
      {'sum(销售金额)': 13954131.150000064, 'sum(销售数量)': 6532260.47999992, 省份: "贵州省"},
      {'sum(销售金额)': 62926304.729999356, 'sum(销售数量)': 8532260.47999992, 省份: "辽宁省"},
      {'sum(销售金额)': 21032236.2500001, 'sum(销售数量)': 7532260.47999992, 省份: "云南省"},
      {'sum(销售金额)': 42603900.739999704, 'sum(销售数量)': 4532260.47999992, 省份: "内蒙古"},
      {'sum(销售金额)': 142972736.7700018, 'sum(销售数量)': 5532260.47999992, 省份: "湖南省"},
      {'sum(销售金额)': 2171847.9199999967, 'sum(销售数量)': 9532260.47999992, 省份: "重庆市"},
      {'sum(销售金额)': 62313281.32999914, 'sum(销售数量)': 2532260.47999992, 省份: "陕西省"},
      {'sum(销售金额)': 27317151.43999988, 'sum(销售数量)': 1532260.47999992, 省份: "青海省"},
      {'sum(销售金额)': 9744438.810000032, 'sum(销售数量)': 532260.47999992, 省份: "黑龙江"},
      {'sum(销售金额)': 73518422.87, 'sum(销售数量)': 2532260.47999992, 省份: "湖北省"}
    ],
    column: {
      categories: [],
      aggressions: [['sum(销售金额)', 'sum(销售数量)']]
    },
    row: {
      categories: ['省份'],
      aggressions: []
    },
    combined: [
      [{
        axis: 'y', 
        aggr: 'sum(销售金额)',
        color: {
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['sum(销售金额)'],
        type: 'bar',
        data: [
          {'sum(销售金额)': 151682777.09000546, 'sum(销售数量)': 51682777.09000546, 省份: "河南省"},
          {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 11229200.95999943, 省份: "浙江省"},
          {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 1932274.78999999, 省份: "吉林省"},
          {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 8320015.72999907, 省份: "四川省"},
          {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 731732.48999999, 省份: "天津市"},
          {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 656606.460000008, 省份: "宁夏"},
          {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 4926494.39999879, 省份: "安徽省"},
          {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 16092377.04000114, 省份: "山东省"},
          {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 4982340.380000211, 省份: "山西省"},
          {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 4657181.70000026, 省份: "广东省"},
          {'sum(销售金额)': 5409940.109999983, 'sum(销售数量)': 409940.109999983, 省份: "广西省"},
          {'sum(销售金额)': 93506928.76000081, 'sum(销售数量)': 3506928.76000081, 省份: "新疆"},
          {'sum(销售金额)': 73817839.26999827, 'sum(销售数量)': 3817839.26999827, 省份: "河北省"},
          {'sum(销售金额)': 47782957.6399988, 'sum(销售数量)': 7782957.6399988, 省份: "江西省"},
          {'sum(销售金额)': 52447454.51999989, 'sum(销售数量)': 2447454.51999989, 省份: "甘肃省"},
          {'sum(销售金额)': 22314036.31000011, 'sum(销售数量)': 2314036.31000011, 省份: "江苏省"},
          {'sum(销售金额)': 49899185.33999957, 'sum(销售数量)': 9899185.33999957, 省份: "福建省"},
          {'sum(销售金额)': 24532260.47999992, 'sum(销售数量)': 4532260.47999992, 省份: "西藏"},
          {'sum(销售金额)': 13954131.150000064, 'sum(销售数量)': 6532260.47999992, 省份: "贵州省"},
          {'sum(销售金额)': 62926304.729999356, 'sum(销售数量)': 8532260.47999992, 省份: "辽宁省"},
          {'sum(销售金额)': 21032236.2500001, 'sum(销售数量)': 7532260.47999992, 省份: "云南省"},
          {'sum(销售金额)': 42603900.739999704, 'sum(销售数量)': 4532260.47999992, 省份: "内蒙古"},
          {'sum(销售金额)': 142972736.7700018, 'sum(销售数量)': 5532260.47999992, 省份: "湖南省"},
          {'sum(销售金额)': 2171847.9199999967, 'sum(销售数量)': 9532260.47999992, 省份: "重庆市"},
          {'sum(销售金额)': 62313281.32999914, 'sum(销售数量)': 2532260.47999992, 省份: "陕西省"},
          {'sum(销售金额)': 27317151.43999988, 'sum(销售数量)': 1532260.47999992, 省份: "青海省"},
          {'sum(销售金额)': 9744438.810000032, 'sum(销售数量)': 532260.47999992, 省份: "黑龙江"},
          {'sum(销售金额)': 73518422.87, 'sum(销售数量)': 2532260.47999992, 省份: "湖北省"}
        ]
     },
     {
        axis: 'y2', 
        aggr: 'sum(销售数量)',
        color: {
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['sum(销售数量)'],
        type: 'bar',
        data: [
          {'sum(销售金额)': 151682777.09000546, 'sum(销售数量)': 51682777.09000546, 省份: "河南省"},
          {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 11229200.95999943, 省份: "浙江省"},
          {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 1932274.78999999, 省份: "吉林省"},
          {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 8320015.72999907, 省份: "四川省"},
          {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 731732.48999999, 省份: "天津市"},
          {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 656606.460000008, 省份: "宁夏"},
          {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 4926494.39999879, 省份: "安徽省"},
          {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 16092377.04000114, 省份: "山东省"},
          {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 4982340.380000211, 省份: "山西省"},
          {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 4657181.70000026, 省份: "广东省"},
          {'sum(销售金额)': 5409940.109999983, 'sum(销售数量)': 409940.109999983, 省份: "广西省"},
          {'sum(销售金额)': 93506928.76000081, 'sum(销售数量)': 3506928.76000081, 省份: "新疆"},
          {'sum(销售金额)': 73817839.26999827, 'sum(销售数量)': 3817839.26999827, 省份: "河北省"},
          {'sum(销售金额)': 47782957.6399988, 'sum(销售数量)': 7782957.6399988, 省份: "江西省"},
          {'sum(销售金额)': 52447454.51999989, 'sum(销售数量)': 2447454.51999989, 省份: "甘肃省"},
          {'sum(销售金额)': 22314036.31000011, 'sum(销售数量)': 2314036.31000011, 省份: "江苏省"},
          {'sum(销售金额)': 49899185.33999957, 'sum(销售数量)': 9899185.33999957, 省份: "福建省"},
          {'sum(销售金额)': 24532260.47999992, 'sum(销售数量)': 4532260.47999992, 省份: "西藏"},
          {'sum(销售金额)': 13954131.150000064, 'sum(销售数量)': 6532260.47999992, 省份: "贵州省"},
          {'sum(销售金额)': 62926304.729999356, 'sum(销售数量)': 8532260.47999992, 省份: "辽宁省"},
          {'sum(销售金额)': 21032236.2500001, 'sum(销售数量)': 7532260.47999992, 省份: "云南省"},
          {'sum(销售金额)': 42603900.739999704, 'sum(销售数量)': 4532260.47999992, 省份: "内蒙古"},
          {'sum(销售金额)': 142972736.7700018, 'sum(销售数量)': 5532260.47999992, 省份: "湖南省"},
          {'sum(销售金额)': 2171847.9199999967, 'sum(销售数量)': 9532260.47999992, 省份: "重庆市"},
          {'sum(销售金额)': 62313281.32999914, 'sum(销售数量)': 2532260.47999992, 省份: "陕西省"},
          {'sum(销售金额)': 27317151.43999988, 'sum(销售数量)': 1532260.47999992, 省份: "青海省"},
          {'sum(销售金额)': 9744438.810000032, 'sum(销售数量)': 532260.47999992, 省份: "黑龙江"},
          {'sum(销售金额)': 73518422.87, 'sum(销售数量)': 2532260.47999992, 省份: "湖北省"}
        ]
     }]
    ]
  },
  bar: { 
    //柱子间的距离
    padding: { 
      inner: 0.01, 
      outter: 0.1
    } 
  },
  //画坐标轴
  axis: {
    rotated: true,
    x: {
      show: true,
      type: '', //bin, category, numeric, (timeseries: 暂未实现)
    },
    //这几个跟zoom axis有关
    zoom: {
      scale: 1,
      translate: undefined,
      panning: undefined,
      enable: true
    }
  },
}
configs[6]= {
  bindto: '#bar_6',
  size: {
    width: 600,
    height: 400
  },
  data: {
    type: 'bar',
    json: [
      {Embarked: "P", 'mean(Fare)': 7.5875, 'sum(Survived)': 1},
      {Embarked: "C", 'mean(Fare)': 59.95414404761905, 'sum(Survived)': 93},
      {Embarked: "S", 'mean(Fare)': 27.141456786271394, 'sum(Survived)': 215},
      {Embarked: "Q", 'mean(Fare)': 13.44620897435897, 'sum(Survived)': 31},
      {Embarked: "null", 'mean(Fare)': 80, 'sum(Survived)': 2}
    ],
    column: {
      categories: [],
      aggressions: [['sum(Survived)']]
    },
    row: {
      categories: ['Embarked'],
      aggressions: []
    },
    combined: [
      [{
        axis: 'y', 
        aggr: 'sum(Survived)',
        color: {
          feature: 'mean(Fare)',
          type: 'linear',
          stacked: false,
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['mean(Fare)', 'sum(Survived)'],
        type: 'bar',
        data: [
          {Embarked: "P", 'mean(Fare)': 7.5875, 'sum(Survived)': 1},
          {Embarked: "C", 'mean(Fare)': 59.95414404761905, 'sum(Survived)': 93},
          {Embarked: "S", 'mean(Fare)': 27.141456786271394, 'sum(Survived)': 215},
          {Embarked: "Q", 'mean(Fare)': 13.44620897435897, 'sum(Survived)': 31},
          {Embarked: "null", 'mean(Fare)': 80, 'sum(Survived)': 2}
        ]
      }]
    ]
  },
  bar: { 
    //柱子间的距离
    padding: { 
      inner: 0.01, 
      outter: 0.25
    } 
  },
  //画坐标轴
  axis: {
    rotated: true,
    x: {
      show: true,
      type: '', //bin, category, numeric, (timeseries: 暂未实现)
    },
    //这几个跟zoom axis有关
    zoom: {
      scale: 1,
      translate: undefined,
      panning: undefined,
      enable: true
    }
  },
}
configs[7]= {
  bindto: '#bar_7',
  size: {
    width: 600,
    height: 800
  },
  container: { 
    width: '600',  //1080
    height: '800' //600
  },
  data: {
    type: 'bar',
    json: [
      {Embarked: "P", 'mean(Fare)': 7.5875, 'sum(Survived)': 1, Sex: 'male'},
      {Embarked: "P", 'mean(Fare)': 7.5875, 'sum(Survived)': 1, Sex: 'female'},
      {Embarked: "C", 'mean(Fare)': 59.95414404761905, 'sum(Survived)': 93, Sex: 'male'},
      {Embarked: "C", 'mean(Fare)': 59.95414404761905, 'sum(Survived)': 93, Sex: 'female'},
      {Embarked: "S", 'mean(Fare)': 27.141456786271394, 'sum(Survived)': 215, Sex: 'male'},
      {Embarked: "S", 'mean(Fare)': 27.141456786271394, 'sum(Survived)': 215, Sex: 'female'},
      {Embarked: "Q", 'mean(Fare)': 13.44620897435897, 'sum(Survived)': 31, Sex: 'male'},
      {Embarked: "Q", 'mean(Fare)': 13.44620897435897, 'sum(Survived)': 31, Sex: 'female'},
      {Embarked: "null", 'mean(Fare)': 80, 'sum(Survived)': 2, Sex: 'male'},
      {Embarked: "null", 'mean(Fare)': 80, 'sum(Survived)': 2, Sex: 'female'}
    ],
    column: {
      categories: [],
      aggressions: [['sum(Survived)']]
    },
    row: {
      categories: ['Embarked'],
      aggressions: []
    },
    combined: [
      [{
        axis: 'y', 
        aggr: 'sum(Survived)',
        color: {
          feature: 'Sex',
          type: 'ordinal',
          stacked: true,
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['mean(Fare)', 'sum(Survived)', 'Sex'],
        type: 'bar',
        data: [
          {Embarked: "P", 'mean(Fare)': 7.5875, 'sum(Survived)': 1, Sex: 'male'},
          {Embarked: "P", 'mean(Fare)': 7.5875, 'sum(Survived)': 1, Sex: 'female'},
          {Embarked: "C", 'mean(Fare)': 59.95414404761905, 'sum(Survived)': 93, Sex: 'male'},
          {Embarked: "C", 'mean(Fare)': 59.95414404761905, 'sum(Survived)': 93, Sex: 'female'},
          {Embarked: "S", 'mean(Fare)': 27.141456786271394, 'sum(Survived)': 215, Sex: 'male'},
          {Embarked: "S", 'mean(Fare)': 27.141456786271394, 'sum(Survived)': 215, Sex: 'female'},
          {Embarked: "Q", 'mean(Fare)': 13.44620897435897, 'sum(Survived)': 31, Sex: 'male'},
          {Embarked: "Q", 'mean(Fare)': 13.44620897435897, 'sum(Survived)': 31, Sex: 'female'},
          {Embarked: "null", 'mean(Fare)': 80, 'sum(Survived)': 2, Sex: 'male'},
          {Embarked: "null", 'mean(Fare)': 80, 'sum(Survived)': 2, Sex: 'female'}
        ]
      }]
    ]
  },
  bar: { 
    //柱子间的距离
    padding: { 
      inner: 0.01, 
      outter: 0.05
    } 
  },
  //画坐标轴
  axis: {
    rotated: true,
    x: {
      show: true,
      type: '', //bin, category, numeric, (timeseries: 暂未实现)
    },
    //这几个跟zoom axis有关
    zoom: {
      scale: 1,
      translate: undefined,
      panning: undefined,
      enable: true
    }
  },
}
configs[8]= {
  bindto: '#bar_8',
  size: {
    width: 600,
    height: 800
  },
  container: { 
    width: '600',  //1080
    height: '800' //600
  },
  data: {
    type: 'bar',
    json: [
      {Embarked: "P", Pclass: "3", Sex: "male", 'sum(Survived)': 0},
      {Embarked: "P", Pclass: "3", Sex: "female", 'sum(Survived)': 1},
      {Embarked: "C", Pclass: "3", Sex: "male", 'sum(Survived)': 10},
      {Embarked: "C", Pclass: "3", Sex: "female", 'sum(Survived)': 15},
      {Embarked: "C", Pclass: "1", Sex: "male", 'sum(Survived)': 17},
      {Embarked: "C", Pclass: "1", Sex: "female", 'sum(Survived)': 42},
      {Embarked: "C", Pclass: "2", Sex: "male", 'sum(Survived)': 2},
      {Embarked: "C", Pclass: "2", Sex: "female", 'sum(Survived)': 7},
      {Embarked: "S", Pclass: "3", Sex: "male", 'sum(Survived)': 34},
      {Embarked: "S", Pclass: "3", Sex: "female", 'sum(Survived)': 32},
      {Embarked: "S", Pclass: "1", Sex: "male", 'sum(Survived)': 28},
      {Embarked: "S", Pclass: "1", Sex: "female", 'sum(Survived)': 45},
      {Embarked: "S", Pclass: "2", Sex: "male", 'sum(Survived)': 15},
      {Embarked: "S", Pclass: "2", Sex: "female", 'sum(Survived)': 61},
      {Embarked: "Q", Pclass: "3", Sex: "male", 'sum(Survived)': 3},
      {Embarked: "Q", Pclass: "3", Sex: "female", 'sum(Survived)': 24},
      {Embarked: "Q", Pclass: "1", Sex: "male", 'sum(Survived)': 0},
      {Embarked: "Q", Pclass: "1", Sex: "female", 'sum(Survived)': 2},
      {Embarked: "Q", Pclass: "2", Sex: "male", 'sum(Survived)': 0},
      {Embarked: "Q", Pclass: "2", Sex: "female", 'sum(Survived)': 2},
      {Embarked: "null", Pclass: "1", Sex: "male", 'sum(Survived)': NaN},
      {Embarked: "null", Pclass: "1", Sex: "female", 'sum(Survived)': 2}
    ],
    row: {
      categories: ['Embarked', 'Pclass'],
      aggressions: []
    },
    column: {
      categories: ['Sex'],
      aggressions: [['sum(Survived)']]
    },
    combined: [
      [{
        axis: 'y', 
        aggr: 'sum(Survived)',
        color: {
          feature: 'Embarked',
          type: 'ordinal',
          stacked: false,
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['sum(Survived)'],
        type: 'bar',
        data: [
          {Embarked: "P", Pclass: "3", Sex: "male", 'sum(Survived)': 0},
          {Embarked: "P", Pclass: "3", Sex: "female", 'sum(Survived)': 1},
          {Embarked: "C", Pclass: "3", Sex: "male", 'sum(Survived)': 10},
          {Embarked: "C", Pclass: "3", Sex: "female", 'sum(Survived)': 15},
          {Embarked: "C", Pclass: "1", Sex: "male", 'sum(Survived)': 17},
          {Embarked: "C", Pclass: "1", Sex: "female", 'sum(Survived)': 42},
          {Embarked: "C", Pclass: "2", Sex: "male", 'sum(Survived)': 2},
          {Embarked: "C", Pclass: "2", Sex: "female", 'sum(Survived)': 7},
          {Embarked: "S", Pclass: "3", Sex: "male", 'sum(Survived)': 34},
          {Embarked: "S", Pclass: "3", Sex: "female", 'sum(Survived)': 32},
          {Embarked: "S", Pclass: "1", Sex: "male", 'sum(Survived)': 28},
          {Embarked: "S", Pclass: "1", Sex: "female", 'sum(Survived)': 45},
          {Embarked: "S", Pclass: "2", Sex: "male", 'sum(Survived)': 15},
          {Embarked: "S", Pclass: "2", Sex: "female", 'sum(Survived)': 61},
          {Embarked: "Q", Pclass: "3", Sex: "male", 'sum(Survived)': 3},
          {Embarked: "Q", Pclass: "3", Sex: "female", 'sum(Survived)': 24},
          {Embarked: "Q", Pclass: "1", Sex: "male", 'sum(Survived)': 0},
          {Embarked: "Q", Pclass: "1", Sex: "female", 'sum(Survived)': 2},
          {Embarked: "Q", Pclass: "2", Sex: "male", 'sum(Survived)': 0},
          {Embarked: "Q", Pclass: "2", Sex: "female", 'sum(Survived)': 2},
          {Embarked: "null", Pclass: "1", Sex: "male", 'sum(Survived)': NaN},
          {Embarked: "null", Pclass: "1", Sex: "female", 'sum(Survived)': 2}
        ]
      }]
    ]
  },
  bar: { 
    //柱子间的距离
    padding: { 
      inner: 0.01, 
      outter: 0.05
    } 
  },
  //画坐标轴
  axis: {
    rotated: true,
    x: {
      show: true,
      type: '', //bin, category, numeric, (timeseries: 暂未实现)
    },
    //这几个跟zoom axis有关
    zoom: {
      scale: 1,
      translate: undefined,
      panning: undefined,
      enable: true
    }
  },
}
configs[11] = {
  bindto: '#line_1',
  size: {
    height: 800
  },
  data: {
    type: 'line',
    json: [
      {Embarked: "P", 'mean(Fare)': 7.5875, 'sum(Survived)': 1},
      {Embarked: "C", 'mean(Fare)': 59.95414404761905, 'sum(Survived)': 93},
      {Embarked: "S", 'mean(Fare)': 27.141456786271394, 'sum(Survived)': 215},
      {Embarked: "Q", 'mean(Fare)': 13.44620897435897, 'sum(Survived)': 31},
      {Embarked: "null", 'mean(Fare)': 80, 'sum(Survived)': 2}
    ],
    column: {
      categories: ['Embarked'],
      aggressions: []
    },
    row: {
      categories: [],
      aggressions: [['sum(Survived)']]
    },
    combined: [
      [{
        axis: 'y', 
        aggr: 'sum(Survived)',
        color: {
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['mean(Fare)', 'sum(Survived)'],
        type: 'line',
        data: [
          {Embarked: "P", 'mean(Fare)': 7.5875, 'sum(Survived)': 1},
          {Embarked: "C", 'mean(Fare)': 59.95414404761905, 'sum(Survived)': 93},
          {Embarked: "S", 'mean(Fare)': 27.141456786271394, 'sum(Survived)': 215},
          {Embarked: "Q", 'mean(Fare)': 13.44620897435897, 'sum(Survived)': 31},
          {Embarked: "null", 'mean(Fare)': 80, 'sum(Survived)': 2}
        ]
      }]
    ]
  },
  line: {
    //线粗细+点大小
    size: 1,
    //点形状
    pattern: 'circle', //cross, cross45, triangle, triangle180, star, diamond, square, wye
  },
  //画坐标轴
  axis: {
    rotated: false,
    x: {
      show: true,
      type: '', //bin, category, numeric, (timeseries: 暂未实现)
    },
    //这几个跟zoom axis有关
    zoom: {
      scale: 1,
      translate: undefined,
      panning: undefined,
      enable: true
    }
  },
}
configs[12] = {
  bindto: '#line_2',
  size: {
    height: 800
  },
  data: {
    type: 'line',
    json: [
      {Embarked: "P", 'mean(Fare)': 7.5875, 'sum(Survived)': 1, Sex: 'male'},
      {Embarked: "P", 'mean(Fare)': 17.5875, 'sum(Survived)': 11, Sex: 'female'},
      {Embarked: "C", 'mean(Fare)': 59.95414404761905, 'sum(Survived)': 93, Sex: 'male'},
      {Embarked: "C", 'mean(Fare)': 159.95414404761905, 'sum(Survived)': 193, Sex: 'female'},
      {Embarked: "S", 'mean(Fare)': 27.141456786271394, 'sum(Survived)': 215, Sex: 'male'},
      {Embarked: "S", 'mean(Fare)': 127.141456786271394, 'sum(Survived)': 1215, Sex: 'female'},
      {Embarked: "Q", 'mean(Fare)': 13.44620897435897, 'sum(Survived)': 31, Sex: 'male'},
      {Embarked: "Q", 'mean(Fare)': 113.44620897435897, 'sum(Survived)': 131, Sex: 'female'},
      {Embarked: "null", 'mean(Fare)': 80, 'sum(Survived)': 2, Sex: 'male'},
      {Embarked: "null", 'mean(Fare)': 180, 'sum(Survived)': 12, Sex: 'female'}
    ],
    column: {
      categories: ['Embarked'],
      aggressions: []
    },
    row: {
      categories: [],
      aggressions: [['sum(Survived)']]
    },
    combined: [
      [{
        axis: 'y', 
        aggr: 'sum(Survived)',
        color: {
          feature: 'Sex',
          type: 'ordinal',
          stacked: true,
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['mean(Fare)', 'sum(Survived)', 'Sex'],
        type: 'line',
        data: [
          {Embarked: "P", 'mean(Fare)': 7.5875, 'sum(Survived)': 1, Sex: 'male'},
          {Embarked: "P", 'mean(Fare)': 17.5875, 'sum(Survived)': 11, Sex: 'female'},
          {Embarked: "C", 'mean(Fare)': 59.95414404761905, 'sum(Survived)': 93, Sex: 'male'},
          {Embarked: "C", 'mean(Fare)': 159.95414404761905, 'sum(Survived)': 193, Sex: 'female'},
          {Embarked: "S", 'mean(Fare)': 27.141456786271394, 'sum(Survived)': 215, Sex: 'male'},
          {Embarked: "S", 'mean(Fare)': 127.141456786271394, 'sum(Survived)': 1215, Sex: 'female'},
          {Embarked: "Q", 'mean(Fare)': 13.44620897435897, 'sum(Survived)': 31, Sex: 'male'},
          {Embarked: "Q", 'mean(Fare)': 113.44620897435897, 'sum(Survived)': 131, Sex: 'female'},
          {Embarked: "null", 'mean(Fare)': 80, 'sum(Survived)': 2, Sex: 'male'},
          {Embarked: "null", 'mean(Fare)': 180, 'sum(Survived)': 12, Sex: 'female'}
        ]
      }]
    ]
  },
  line: {
    //线粗细+点大小
    size: 1.5,
    //点形状
    pattern: 'cross', //cross, cross45, triangle, triangle180, star, diamond, square, wye
  },
  //画坐标轴
  axis: {
    rotated: false,
    x: {
      show: true,
      type: '', //bin, category, numeric, (timeseries: 暂未实现)
    },
    //这几个跟zoom axis有关
    zoom: {
      scale: 1,
      translate: undefined,
      panning: undefined,
      enable: true
    }
  },
}
configs[13] = {
  bindto: '#line_3',
  data: {
    type: 'line',
    json: [
      {Embarked: "P", Pclass: "3", Sex: "male", 'sum(Survived)': 0},
      {Embarked: "P", Pclass: "3", Sex: "female", 'sum(Survived)': 1},
      {Embarked: "C", Pclass: "3", Sex: "male", 'sum(Survived)': 10},
      {Embarked: "C", Pclass: "3", Sex: "female", 'sum(Survived)': 15},
      {Embarked: "C", Pclass: "1", Sex: "male", 'sum(Survived)': 17},
      {Embarked: "C", Pclass: "1", Sex: "female", 'sum(Survived)': 42},
      {Embarked: "C", Pclass: "2", Sex: "male", 'sum(Survived)': 2},
      {Embarked: "C", Pclass: "2", Sex: "female", 'sum(Survived)': 7},
      {Embarked: "S", Pclass: "3", Sex: "male", 'sum(Survived)': 34},
      {Embarked: "S", Pclass: "3", Sex: "female", 'sum(Survived)': 32},
      {Embarked: "S", Pclass: "1", Sex: "male", 'sum(Survived)': 28},
      {Embarked: "S", Pclass: "1", Sex: "female", 'sum(Survived)': 45},
      {Embarked: "S", Pclass: "2", Sex: "male", 'sum(Survived)': 15},
      {Embarked: "S", Pclass: "2", Sex: "female", 'sum(Survived)': 61},
      {Embarked: "Q", Pclass: "3", Sex: "male", 'sum(Survived)': 3},
      {Embarked: "Q", Pclass: "3", Sex: "female", 'sum(Survived)': 24},
      {Embarked: "Q", Pclass: "1", Sex: "male", 'sum(Survived)': 0},
      {Embarked: "Q", Pclass: "1", Sex: "female", 'sum(Survived)': 2},
      {Embarked: "Q", Pclass: "2", Sex: "male", 'sum(Survived)': 0},
      {Embarked: "Q", Pclass: "2", Sex: "female", 'sum(Survived)': 2},
      {Embarked: "null", Pclass: "1", Sex: "male", 'sum(Survived)': NaN},
      {Embarked: "null", Pclass: "1", Sex: "female", 'sum(Survived)': 2}
    ],
    column: {
      categories: ['Embarked', 'Pclass'],
      aggressions: []
    },
    row: {
      categories: ['Sex'],
      aggressions: [['sum(Survived)']]
    },
    combined: [
      [{
        axis: 'y', 
        aggr: 'sum(Survived)',
        color: {
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['sum(Survived)'],
        type: 'line',
        data: [
          {Embarked: "P", Pclass: "3", Sex: "male", 'sum(Survived)': 0},
          {Embarked: "P", Pclass: "3", Sex: "female", 'sum(Survived)': 1},
          {Embarked: "C", Pclass: "3", Sex: "male", 'sum(Survived)': 10},
          {Embarked: "C", Pclass: "3", Sex: "female", 'sum(Survived)': 15},
          {Embarked: "C", Pclass: "1", Sex: "male", 'sum(Survived)': 17},
          {Embarked: "C", Pclass: "1", Sex: "female", 'sum(Survived)': 42},
          {Embarked: "C", Pclass: "2", Sex: "male", 'sum(Survived)': 2},
          {Embarked: "C", Pclass: "2", Sex: "female", 'sum(Survived)': 7},
          {Embarked: "S", Pclass: "3", Sex: "male", 'sum(Survived)': 34},
          {Embarked: "S", Pclass: "3", Sex: "female", 'sum(Survived)': 32},
          {Embarked: "S", Pclass: "1", Sex: "male", 'sum(Survived)': 28},
          {Embarked: "S", Pclass: "1", Sex: "female", 'sum(Survived)': 45},
          {Embarked: "S", Pclass: "2", Sex: "male", 'sum(Survived)': 15},
          {Embarked: "S", Pclass: "2", Sex: "female", 'sum(Survived)': 61},
          {Embarked: "Q", Pclass: "3", Sex: "male", 'sum(Survived)': 3},
          {Embarked: "Q", Pclass: "3", Sex: "female", 'sum(Survived)': 24},
          {Embarked: "Q", Pclass: "1", Sex: "male", 'sum(Survived)': 0},
          {Embarked: "Q", Pclass: "1", Sex: "female", 'sum(Survived)': 2},
          {Embarked: "Q", Pclass: "2", Sex: "male", 'sum(Survived)': 0},
          {Embarked: "Q", Pclass: "2", Sex: "female", 'sum(Survived)': 2},
          {Embarked: "null", Pclass: "1", Sex: "male", 'sum(Survived)': NaN},
          {Embarked: "null", Pclass: "1", Sex: "female", 'sum(Survived)': 2}
        ]
      }]
    ]
  },
  line: {
    //线粗细+点大小
    size: 2,
    //点形状
    pattern: 'triangle', //cross, cross45, triangle, triangle180, star, diamond, square, wye
  },
  //画坐标轴
  axis: {
    rotated: false,
    x: {
      show: true,
      type: '', //bin, category, numeric, (timeseries: 暂未实现)
    },
    //这几个跟zoom axis有关
    zoom: {
      scale: 1,
      translate: undefined,
      panning: undefined,
      enable: true
    }
  },
}
configs[14] = {
  bindto: '#line_4',
  //固定y, y2轴的时候需要
  size: {
    height: 400
  },
  container: { 
    width: '600',  //1080
    height: '400' //600
  },
  data: {
    type: 'line',
    json: [
      {'sum(销售金额)': 151682777.09000546, 'sum(销售数量)': 51682777.09000546, 省份: "河南省"},
      {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 11229200.95999943, 省份: "浙江省"},
      {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 1932274.78999999, 省份: "吉林省"},
      {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 8320015.72999907, 省份: "四川省"},
      {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 731732.48999999, 省份: "天津市"},
      {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 656606.460000008, 省份: "宁夏"},
      {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 4926494.39999879, 省份: "安徽省"},
      {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 16092377.04000114, 省份: "山东省"},
      {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 4982340.380000211, 省份: "山西省"},
      {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 4657181.70000026, 省份: "广东省"},
      {'sum(销售金额)': 5409940.109999983, 'sum(销售数量)': 409940.109999983, 省份: "广西省"},
      {'sum(销售金额)': 93506928.76000081, 'sum(销售数量)': 3506928.76000081, 省份: "新疆"},
      {'sum(销售金额)': 73817839.26999827, 'sum(销售数量)': 3817839.26999827, 省份: "河北省"},
      {'sum(销售金额)': 47782957.6399988, 'sum(销售数量)': 7782957.6399988, 省份: "江西省"},
      {'sum(销售金额)': 52447454.51999989, 'sum(销售数量)': 2447454.51999989, 省份: "甘肃省"},
      {'sum(销售金额)': 22314036.31000011, 'sum(销售数量)': 2314036.31000011, 省份: "江苏省"},
      {'sum(销售金额)': 49899185.33999957, 'sum(销售数量)': 9899185.33999957, 省份: "福建省"},
      {'sum(销售金额)': 24532260.47999992, 'sum(销售数量)': 4532260.47999992, 省份: "西藏"},
      {'sum(销售金额)': 13954131.150000064, 'sum(销售数量)': 6532260.47999992, 省份: "贵州省"},
      {'sum(销售金额)': 62926304.729999356, 'sum(销售数量)': 8532260.47999992, 省份: "辽宁省"},
      {'sum(销售金额)': 21032236.2500001, 'sum(销售数量)': 7532260.47999992, 省份: "云南省"},
      {'sum(销售金额)': 42603900.739999704, 'sum(销售数量)': 4532260.47999992, 省份: "内蒙古"},
      {'sum(销售金额)': 142972736.7700018, 'sum(销售数量)': 5532260.47999992, 省份: "湖南省"},
      {'sum(销售金额)': 2171847.9199999967, 'sum(销售数量)': 9532260.47999992, 省份: "重庆市"},
      {'sum(销售金额)': 62313281.32999914, 'sum(销售数量)': 2532260.47999992, 省份: "陕西省"},
      {'sum(销售金额)': 27317151.43999988, 'sum(销售数量)': 1532260.47999992, 省份: "青海省"},
      {'sum(销售金额)': 9744438.810000032, 'sum(销售数量)': 532260.47999992, 省份: "黑龙江"},
      {'sum(销售金额)': 73518422.87, 'sum(销售数量)': 2532260.47999992, 省份: "湖北省"}
    ],
    column: {
      categories: ['省份'],
      aggressions: []
    },
    row: {
      categories: [],
      aggressions: [['sum(销售金额)', 'sum(销售数量)']]
    },
    combined: [
      [{
        axis: 'y', 
        aggr: 'sum(销售金额)',
        color: {
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['sum(销售金额)'],
        type: 'line',
        data: [
          {'sum(销售金额)': 151682777.09000546, 'sum(销售数量)': 51682777.09000546, 省份: "河南省"},
          {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 11229200.95999943, 省份: "浙江省"},
          {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 1932274.78999999, 省份: "吉林省"},
          {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 8320015.72999907, 省份: "四川省"},
          {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 731732.48999999, 省份: "天津市"},
          {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 656606.460000008, 省份: "宁夏"},
          {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 4926494.39999879, 省份: "安徽省"},
          {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 16092377.04000114, 省份: "山东省"},
          {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 4982340.380000211, 省份: "山西省"},
          {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 4657181.70000026, 省份: "广东省"},
          {'sum(销售金额)': 5409940.109999983, 'sum(销售数量)': 409940.109999983, 省份: "广西省"},
          {'sum(销售金额)': 93506928.76000081, 'sum(销售数量)': 3506928.76000081, 省份: "新疆"},
          {'sum(销售金额)': 73817839.26999827, 'sum(销售数量)': 3817839.26999827, 省份: "河北省"},
          {'sum(销售金额)': 47782957.6399988, 'sum(销售数量)': 7782957.6399988, 省份: "江西省"},
          {'sum(销售金额)': 52447454.51999989, 'sum(销售数量)': 2447454.51999989, 省份: "甘肃省"},
          {'sum(销售金额)': 22314036.31000011, 'sum(销售数量)': 2314036.31000011, 省份: "江苏省"},
          {'sum(销售金额)': 49899185.33999957, 'sum(销售数量)': 9899185.33999957, 省份: "福建省"},
          {'sum(销售金额)': 24532260.47999992, 'sum(销售数量)': 4532260.47999992, 省份: "西藏"},
          {'sum(销售金额)': 13954131.150000064, 'sum(销售数量)': 6532260.47999992, 省份: "贵州省"},
          {'sum(销售金额)': 62926304.729999356, 'sum(销售数量)': 8532260.47999992, 省份: "辽宁省"},
          {'sum(销售金额)': 21032236.2500001, 'sum(销售数量)': 7532260.47999992, 省份: "云南省"},
          {'sum(销售金额)': 42603900.739999704, 'sum(销售数量)': 4532260.47999992, 省份: "内蒙古"},
          {'sum(销售金额)': 142972736.7700018, 'sum(销售数量)': 5532260.47999992, 省份: "湖南省"},
          {'sum(销售金额)': 2171847.9199999967, 'sum(销售数量)': 9532260.47999992, 省份: "重庆市"},
          {'sum(销售金额)': 62313281.32999914, 'sum(销售数量)': 2532260.47999992, 省份: "陕西省"},
          {'sum(销售金额)': 27317151.43999988, 'sum(销售数量)': 1532260.47999992, 省份: "青海省"},
          {'sum(销售金额)': 9744438.810000032, 'sum(销售数量)': 532260.47999992, 省份: "黑龙江"},
          {'sum(销售金额)': 73518422.87, 'sum(销售数量)': 2532260.47999992, 省份: "湖北省"}
        ]
      },
      {
        axis: 'y2', 
        aggr: 'sum(销售数量)',
        color: {
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['sum(销售数量)'],
        type: 'line',
        data: [
          {'sum(销售金额)': 151682777.09000546, 'sum(销售数量)': 51682777.09000546, 省份: "河南省"},
          {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 11229200.95999943, 省份: "浙江省"},
          {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 1932274.78999999, 省份: "吉林省"},
          {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 8320015.72999907, 省份: "四川省"},
          {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 731732.48999999, 省份: "天津市"},
          {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 656606.460000008, 省份: "宁夏"},
          {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 4926494.39999879, 省份: "安徽省"},
          {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 16092377.04000114, 省份: "山东省"},
          {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 4982340.380000211, 省份: "山西省"},
          {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 4657181.70000026, 省份: "广东省"},
          {'sum(销售金额)': 5409940.109999983, 'sum(销售数量)': 409940.109999983, 省份: "广西省"},
          {'sum(销售金额)': 93506928.76000081, 'sum(销售数量)': 3506928.76000081, 省份: "新疆"},
          {'sum(销售金额)': 73817839.26999827, 'sum(销售数量)': 3817839.26999827, 省份: "河北省"},
          {'sum(销售金额)': 47782957.6399988, 'sum(销售数量)': 7782957.6399988, 省份: "江西省"},
          {'sum(销售金额)': 52447454.51999989, 'sum(销售数量)': 2447454.51999989, 省份: "甘肃省"},
          {'sum(销售金额)': 22314036.31000011, 'sum(销售数量)': 2314036.31000011, 省份: "江苏省"},
          {'sum(销售金额)': 49899185.33999957, 'sum(销售数量)': 9899185.33999957, 省份: "福建省"},
          {'sum(销售金额)': 24532260.47999992, 'sum(销售数量)': 4532260.47999992, 省份: "西藏"},
          {'sum(销售金额)': 13954131.150000064, 'sum(销售数量)': 6532260.47999992, 省份: "贵州省"},
          {'sum(销售金额)': 62926304.729999356, 'sum(销售数量)': 8532260.47999992, 省份: "辽宁省"},
          {'sum(销售金额)': 21032236.2500001, 'sum(销售数量)': 7532260.47999992, 省份: "云南省"},
          {'sum(销售金额)': 42603900.739999704, 'sum(销售数量)': 4532260.47999992, 省份: "内蒙古"},
          {'sum(销售金额)': 142972736.7700018, 'sum(销售数量)': 5532260.47999992, 省份: "湖南省"},
          {'sum(销售金额)': 2171847.9199999967, 'sum(销售数量)': 9532260.47999992, 省份: "重庆市"},
          {'sum(销售金额)': 62313281.32999914, 'sum(销售数量)': 2532260.47999992, 省份: "陕西省"},
          {'sum(销售金额)': 27317151.43999988, 'sum(销售数量)': 1532260.47999992, 省份: "青海省"},
          {'sum(销售金额)': 9744438.810000032, 'sum(销售数量)': 532260.47999992, 省份: "黑龙江"},
          {'sum(销售金额)': 73518422.87, 'sum(销售数量)': 2532260.47999992, 省份: "湖北省"}
        ]
      }]
    ]
  },
  line: {
    //线粗细+点大小
    size: 2.5,
    //点形状
    pattern: 'diamond', //cross, cross45, triangle, triangle180, star, diamond, square, wye
  },
  //画坐标轴
  axis: {
    rotated: false,
    x: {
      show: true,
      type: '', //bin, category, numeric, (timeseries: 暂未实现)
    },
    //这几个跟zoom axis有关
    zoom: {
      scale: 1,
      translate: undefined,
      panning: undefined,
      enable: true
    }
  },
}
configs[15] = {
  bindto: '#barline_1',
  //固定y, y2轴的时候需要
  size: {
    height: 400
  },
  container: { 
    width: '600',  //1080
    height: '400' //600
  },
  data: {
    type: 'bar-line',
    json: [
      {'sum(销售金额)': 151682777.09000546, 'sum(销售数量)': 51682777.09000546, 省份: "河南省"},
      {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 11229200.95999943, 省份: "浙江省"},
      {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 1932274.78999999, 省份: "吉林省"},
      {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 8320015.72999907, 省份: "四川省"},
      {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 731732.48999999, 省份: "天津市"},
      {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 656606.460000008, 省份: "宁夏"},
      {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 4926494.39999879, 省份: "安徽省"},
      {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 16092377.04000114, 省份: "山东省"},
      {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 4982340.380000211, 省份: "山西省"},
      {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 4657181.70000026, 省份: "广东省"},
      {'sum(销售金额)': 5409940.109999983, 'sum(销售数量)': 409940.109999983, 省份: "广西省"},
      {'sum(销售金额)': 93506928.76000081, 'sum(销售数量)': 3506928.76000081, 省份: "新疆"},
      {'sum(销售金额)': 73817839.26999827, 'sum(销售数量)': 3817839.26999827, 省份: "河北省"},
      {'sum(销售金额)': 47782957.6399988, 'sum(销售数量)': 7782957.6399988, 省份: "江西省"},
      {'sum(销售金额)': 52447454.51999989, 'sum(销售数量)': 2447454.51999989, 省份: "甘肃省"},
      {'sum(销售金额)': 22314036.31000011, 'sum(销售数量)': 2314036.31000011, 省份: "江苏省"},
      {'sum(销售金额)': 49899185.33999957, 'sum(销售数量)': 9899185.33999957, 省份: "福建省"},
      {'sum(销售金额)': 24532260.47999992, 'sum(销售数量)': 4532260.47999992, 省份: "西藏"},
      {'sum(销售金额)': 13954131.150000064, 'sum(销售数量)': 6532260.47999992, 省份: "贵州省"},
      {'sum(销售金额)': 62926304.729999356, 'sum(销售数量)': 8532260.47999992, 省份: "辽宁省"},
      {'sum(销售金额)': 21032236.2500001, 'sum(销售数量)': 7532260.47999992, 省份: "云南省"},
      {'sum(销售金额)': 42603900.739999704, 'sum(销售数量)': 4532260.47999992, 省份: "内蒙古"},
      {'sum(销售金额)': 142972736.7700018, 'sum(销售数量)': 5532260.47999992, 省份: "湖南省"},
      {'sum(销售金额)': 2171847.9199999967, 'sum(销售数量)': 9532260.47999992, 省份: "重庆市"},
      {'sum(销售金额)': 62313281.32999914, 'sum(销售数量)': 2532260.47999992, 省份: "陕西省"},
      {'sum(销售金额)': 27317151.43999988, 'sum(销售数量)': 1532260.47999992, 省份: "青海省"},
      {'sum(销售金额)': 9744438.810000032, 'sum(销售数量)': 532260.47999992, 省份: "黑龙江"},
      {'sum(销售金额)': 73518422.87, 'sum(销售数量)': 2532260.47999992, 省份: "湖北省"}
    ],
    column: {
      categories: ['省份'],
      aggressions: []
    },
    row: {
      categories: [],
      aggressions: [['sum(销售金额)', 'sum(销售数量)']]
    },
    combined: [
      [{
        axis: 'y', 
        aggr: 'sum(销售金额)',
        color: {
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['sum(销售金额)'],
        type: 'bar',
        data: [
          {'sum(销售金额)': 151682777.09000546, 'sum(销售数量)': 51682777.09000546, 省份: "河南省"},
          {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 11229200.95999943, 省份: "浙江省"},
          {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 1932274.78999999, 省份: "吉林省"},
          {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 8320015.72999907, 省份: "四川省"},
          {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 731732.48999999, 省份: "天津市"},
          {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 656606.460000008, 省份: "宁夏"},
          {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 4926494.39999879, 省份: "安徽省"},
          {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 16092377.04000114, 省份: "山东省"},
          {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 4982340.380000211, 省份: "山西省"},
          {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 4657181.70000026, 省份: "广东省"},
          {'sum(销售金额)': 5409940.109999983, 'sum(销售数量)': 409940.109999983, 省份: "广西省"},
          {'sum(销售金额)': 93506928.76000081, 'sum(销售数量)': 3506928.76000081, 省份: "新疆"},
          {'sum(销售金额)': 73817839.26999827, 'sum(销售数量)': 3817839.26999827, 省份: "河北省"},
          {'sum(销售金额)': 47782957.6399988, 'sum(销售数量)': 7782957.6399988, 省份: "江西省"},
          {'sum(销售金额)': 52447454.51999989, 'sum(销售数量)': 2447454.51999989, 省份: "甘肃省"},
          {'sum(销售金额)': 22314036.31000011, 'sum(销售数量)': 2314036.31000011, 省份: "江苏省"},
          {'sum(销售金额)': 49899185.33999957, 'sum(销售数量)': 9899185.33999957, 省份: "福建省"},
          {'sum(销售金额)': 24532260.47999992, 'sum(销售数量)': 4532260.47999992, 省份: "西藏"},
          {'sum(销售金额)': 13954131.150000064, 'sum(销售数量)': 6532260.47999992, 省份: "贵州省"},
          {'sum(销售金额)': 62926304.729999356, 'sum(销售数量)': 8532260.47999992, 省份: "辽宁省"},
          {'sum(销售金额)': 21032236.2500001, 'sum(销售数量)': 7532260.47999992, 省份: "云南省"},
          {'sum(销售金额)': 42603900.739999704, 'sum(销售数量)': 4532260.47999992, 省份: "内蒙古"},
          {'sum(销售金额)': 142972736.7700018, 'sum(销售数量)': 5532260.47999992, 省份: "湖南省"},
          {'sum(销售金额)': 2171847.9199999967, 'sum(销售数量)': 9532260.47999992, 省份: "重庆市"},
          {'sum(销售金额)': 62313281.32999914, 'sum(销售数量)': 2532260.47999992, 省份: "陕西省"},
          {'sum(销售金额)': 27317151.43999988, 'sum(销售数量)': 1532260.47999992, 省份: "青海省"},
          {'sum(销售金额)': 9744438.810000032, 'sum(销售数量)': 532260.47999992, 省份: "黑龙江"},
          {'sum(销售金额)': 73518422.87, 'sum(销售数量)': 2532260.47999992, 省份: "湖北省"}
        ]
      },
      {
        axis: 'y2', 
        aggr: 'sum(销售数量)',
        color: {
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['sum(销售数量)'],
        type: 'line',
        data: [
          {'sum(销售金额)': 151682777.09000546, 'sum(销售数量)': 51682777.09000546, 省份: "河南省"},
          {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 11229200.95999943, 省份: "浙江省"},
          {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 1932274.78999999, 省份: "吉林省"},
          {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 8320015.72999907, 省份: "四川省"},
          {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 731732.48999999, 省份: "天津市"},
          {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 656606.460000008, 省份: "宁夏"},
          {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 4926494.39999879, 省份: "安徽省"},
          {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 16092377.04000114, 省份: "山东省"},
          {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 4982340.380000211, 省份: "山西省"},
          {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 4657181.70000026, 省份: "广东省"},
          {'sum(销售金额)': 5409940.109999983, 'sum(销售数量)': 409940.109999983, 省份: "广西省"},
          {'sum(销售金额)': 93506928.76000081, 'sum(销售数量)': 3506928.76000081, 省份: "新疆"},
          {'sum(销售金额)': 73817839.26999827, 'sum(销售数量)': 3817839.26999827, 省份: "河北省"},
          {'sum(销售金额)': 47782957.6399988, 'sum(销售数量)': 7782957.6399988, 省份: "江西省"},
          {'sum(销售金额)': 52447454.51999989, 'sum(销售数量)': 2447454.51999989, 省份: "甘肃省"},
          {'sum(销售金额)': 22314036.31000011, 'sum(销售数量)': 2314036.31000011, 省份: "江苏省"},
          {'sum(销售金额)': 49899185.33999957, 'sum(销售数量)': 9899185.33999957, 省份: "福建省"},
          {'sum(销售金额)': 24532260.47999992, 'sum(销售数量)': 4532260.47999992, 省份: "西藏"},
          {'sum(销售金额)': 13954131.150000064, 'sum(销售数量)': 6532260.47999992, 省份: "贵州省"},
          {'sum(销售金额)': 62926304.729999356, 'sum(销售数量)': 8532260.47999992, 省份: "辽宁省"},
          {'sum(销售金额)': 21032236.2500001, 'sum(销售数量)': 7532260.47999992, 省份: "云南省"},
          {'sum(销售金额)': 42603900.739999704, 'sum(销售数量)': 4532260.47999992, 省份: "内蒙古"},
          {'sum(销售金额)': 142972736.7700018, 'sum(销售数量)': 5532260.47999992, 省份: "湖南省"},
          {'sum(销售金额)': 2171847.9199999967, 'sum(销售数量)': 9532260.47999992, 省份: "重庆市"},
          {'sum(销售金额)': 62313281.32999914, 'sum(销售数量)': 2532260.47999992, 省份: "陕西省"},
          {'sum(销售金额)': 27317151.43999988, 'sum(销售数量)': 1532260.47999992, 省份: "青海省"},
          {'sum(销售金额)': 9744438.810000032, 'sum(销售数量)': 532260.47999992, 省份: "黑龙江"},
          {'sum(销售金额)': 73518422.87, 'sum(销售数量)': 2532260.47999992, 省份: "湖北省"}
        ]
      }]
    ]
  },
  bar: { 
    //柱子间的距离
    padding: { 
      inner: 0.01, 
      outter: 0.1
    } 
  },
  line: {
    //线粗细+点大小
    size: 1.5,
    //点形状
    pattern: 'diamond', //cross, cross45, triangle, triangle180, star, diamond, square, wye
  },
  //画坐标轴
  axis: {
    rotated: false,
    x: {
      show: true,
      type: '', //bin, category, numeric, (timeseries: 暂未实现)
    },
    //这几个跟zoom axis有关
    zoom: {
      scale: 1,
      translate: undefined,
      panning: undefined,
      enable: true
    }
  },
}
configs[16] = {
  bindto: '#barcombined_1',
  //固定y, y2轴的时候需要
  size: {
    height: 400
  },
  container: { 
    width: '600',  //1080
    height: '400' //600
  },
  data: {
    type: 'bar',
    json: [
      {'sum(销售金额)': 151682777.09000546, 'sum(销售数量)': 51682777.09000546, 省份: "河南省"},
      {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 11229200.95999943, 省份: "浙江省"},
      {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 1932274.78999999, 省份: "吉林省"},
      {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 8320015.72999907, 省份: "四川省"},
      {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 731732.48999999, 省份: "天津市"},
      {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 656606.460000008, 省份: "宁夏"},
      {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 4926494.39999879, 省份: "安徽省"},
      {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 16092377.04000114, 省份: "山东省"},
      {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 4982340.380000211, 省份: "山西省"},
      {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 4657181.70000026, 省份: "广东省"},
      {'sum(销售金额)': 5409940.109999983, 'sum(销售数量)': 409940.109999983, 省份: "广西省"},
      {'sum(销售金额)': 93506928.76000081, 'sum(销售数量)': 3506928.76000081, 省份: "新疆"},
      {'sum(销售金额)': 73817839.26999827, 'sum(销售数量)': 3817839.26999827, 省份: "河北省"},
      {'sum(销售金额)': 47782957.6399988, 'sum(销售数量)': 7782957.6399988, 省份: "江西省"},
      {'sum(销售金额)': 52447454.51999989, 'sum(销售数量)': 2447454.51999989, 省份: "甘肃省"},
      {'sum(销售金额)': 22314036.31000011, 'sum(销售数量)': 2314036.31000011, 省份: "江苏省"},
      {'sum(销售金额)': 49899185.33999957, 'sum(销售数量)': 9899185.33999957, 省份: "福建省"},
      {'sum(销售金额)': 24532260.47999992, 'sum(销售数量)': 4532260.47999992, 省份: "西藏"},
      {'sum(销售金额)': 13954131.150000064, 'sum(销售数量)': 6532260.47999992, 省份: "贵州省"},
      {'sum(销售金额)': 62926304.729999356, 'sum(销售数量)': 8532260.47999992, 省份: "辽宁省"},
      {'sum(销售金额)': 21032236.2500001, 'sum(销售数量)': 7532260.47999992, 省份: "云南省"},
      {'sum(销售金额)': 42603900.739999704, 'sum(销售数量)': 4532260.47999992, 省份: "内蒙古"},
      {'sum(销售金额)': 142972736.7700018, 'sum(销售数量)': 5532260.47999992, 省份: "湖南省"},
      {'sum(销售金额)': 2171847.9199999967, 'sum(销售数量)': 9532260.47999992, 省份: "重庆市"},
      {'sum(销售金额)': 62313281.32999914, 'sum(销售数量)': 2532260.47999992, 省份: "陕西省"},
      {'sum(销售金额)': 27317151.43999988, 'sum(销售数量)': 1532260.47999992, 省份: "青海省"},
      {'sum(销售金额)': 9744438.810000032, 'sum(销售数量)': 532260.47999992, 省份: "黑龙江"},
      {'sum(销售金额)': 73518422.87, 'sum(销售数量)': 2532260.47999992, 省份: "湖北省"}
    ],
    column: {
      categories: ['省份'],
      aggressions: []
    },
    row: {
      categories: [],
      aggressions: [['sum(销售金额)'], ['sum(销售数量)']]
    },
    combined: [
      [{
        axis: 'y', 
        aggr: 'sum(销售金额)',
        color: {
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['sum(销售金额)'],
        type: 'bar',
        data: [
          {'sum(销售金额)': 151682777.09000546, 'sum(销售数量)': 51682777.09000546, 省份: "河南省"},
          {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 11229200.95999943, 省份: "浙江省"},
          {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 1932274.78999999, 省份: "吉林省"},
          {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 8320015.72999907, 省份: "四川省"},
          {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 731732.48999999, 省份: "天津市"},
          {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 656606.460000008, 省份: "宁夏"},
          {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 4926494.39999879, 省份: "安徽省"},
          {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 16092377.04000114, 省份: "山东省"},
          {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 4982340.380000211, 省份: "山西省"},
          {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 4657181.70000026, 省份: "广东省"},
          {'sum(销售金额)': 5409940.109999983, 'sum(销售数量)': 409940.109999983, 省份: "广西省"},
          {'sum(销售金额)': 93506928.76000081, 'sum(销售数量)': 3506928.76000081, 省份: "新疆"},
          {'sum(销售金额)': 73817839.26999827, 'sum(销售数量)': 3817839.26999827, 省份: "河北省"},
          {'sum(销售金额)': 47782957.6399988, 'sum(销售数量)': 7782957.6399988, 省份: "江西省"},
          {'sum(销售金额)': 52447454.51999989, 'sum(销售数量)': 2447454.51999989, 省份: "甘肃省"},
          {'sum(销售金额)': 22314036.31000011, 'sum(销售数量)': 2314036.31000011, 省份: "江苏省"},
          {'sum(销售金额)': 49899185.33999957, 'sum(销售数量)': 9899185.33999957, 省份: "福建省"},
          {'sum(销售金额)': 24532260.47999992, 'sum(销售数量)': 4532260.47999992, 省份: "西藏"},
          {'sum(销售金额)': 13954131.150000064, 'sum(销售数量)': 6532260.47999992, 省份: "贵州省"},
          {'sum(销售金额)': 62926304.729999356, 'sum(销售数量)': 8532260.47999992, 省份: "辽宁省"},
          {'sum(销售金额)': 21032236.2500001, 'sum(销售数量)': 7532260.47999992, 省份: "云南省"},
          {'sum(销售金额)': 42603900.739999704, 'sum(销售数量)': 4532260.47999992, 省份: "内蒙古"},
          {'sum(销售金额)': 142972736.7700018, 'sum(销售数量)': 5532260.47999992, 省份: "湖南省"},
          {'sum(销售金额)': 2171847.9199999967, 'sum(销售数量)': 9532260.47999992, 省份: "重庆市"},
          {'sum(销售金额)': 62313281.32999914, 'sum(销售数量)': 2532260.47999992, 省份: "陕西省"},
          {'sum(销售金额)': 27317151.43999988, 'sum(销售数量)': 1532260.47999992, 省份: "青海省"},
          {'sum(销售金额)': 9744438.810000032, 'sum(销售数量)': 532260.47999992, 省份: "黑龙江"},
          {'sum(销售金额)': 73518422.87, 'sum(销售数量)': 2532260.47999992, 省份: "湖北省"}
        ]
      }],
      [{
        axis: 'y', 
        aggr: 'sum(销售数量)',
        color: {
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['sum(销售数量)'],
        type: 'line',
        data: [
          {'sum(销售金额)': 151682777.09000546, 'sum(销售数量)': 51682777.09000546, 省份: "河南省"},
          {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 11229200.95999943, 省份: "浙江省"},
          {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 1932274.78999999, 省份: "吉林省"},
          {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 8320015.72999907, 省份: "四川省"},
          {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 731732.48999999, 省份: "天津市"},
          {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 656606.460000008, 省份: "宁夏"},
          {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 4926494.39999879, 省份: "安徽省"},
          {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 16092377.04000114, 省份: "山东省"},
          {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 4982340.380000211, 省份: "山西省"},
          {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 4657181.70000026, 省份: "广东省"},
          {'sum(销售金额)': 5409940.109999983, 'sum(销售数量)': 409940.109999983, 省份: "广西省"},
          {'sum(销售金额)': 93506928.76000081, 'sum(销售数量)': 3506928.76000081, 省份: "新疆"},
          {'sum(销售金额)': 73817839.26999827, 'sum(销售数量)': 3817839.26999827, 省份: "河北省"},
          {'sum(销售金额)': 47782957.6399988, 'sum(销售数量)': 7782957.6399988, 省份: "江西省"},
          {'sum(销售金额)': 52447454.51999989, 'sum(销售数量)': 2447454.51999989, 省份: "甘肃省"},
          {'sum(销售金额)': 22314036.31000011, 'sum(销售数量)': 2314036.31000011, 省份: "江苏省"},
          {'sum(销售金额)': 49899185.33999957, 'sum(销售数量)': 9899185.33999957, 省份: "福建省"},
          {'sum(销售金额)': 24532260.47999992, 'sum(销售数量)': 4532260.47999992, 省份: "西藏"},
          {'sum(销售金额)': 13954131.150000064, 'sum(销售数量)': 6532260.47999992, 省份: "贵州省"},
          {'sum(销售金额)': 62926304.729999356, 'sum(销售数量)': 8532260.47999992, 省份: "辽宁省"},
          {'sum(销售金额)': 21032236.2500001, 'sum(销售数量)': 7532260.47999992, 省份: "云南省"},
          {'sum(销售金额)': 42603900.739999704, 'sum(销售数量)': 4532260.47999992, 省份: "内蒙古"},
          {'sum(销售金额)': 142972736.7700018, 'sum(销售数量)': 5532260.47999992, 省份: "湖南省"},
          {'sum(销售金额)': 2171847.9199999967, 'sum(销售数量)': 9532260.47999992, 省份: "重庆市"},
          {'sum(销售金额)': 62313281.32999914, 'sum(销售数量)': 2532260.47999992, 省份: "陕西省"},
          {'sum(销售金额)': 27317151.43999988, 'sum(销售数量)': 1532260.47999992, 省份: "青海省"},
          {'sum(销售金额)': 9744438.810000032, 'sum(销售数量)': 532260.47999992, 省份: "黑龙江"},
          {'sum(销售金额)': 73518422.87, 'sum(销售数量)': 2532260.47999992, 省份: "湖北省"}
        ]
      }]
    ]
  },
  bar: { 
    //柱子间的距离
    padding: { 
      inner: 0.01, 
      outter: 0.1
    } 
  },
  line: {
    //线粗细+点大小
    size: 1.5,
    //点形状
    pattern: 'diamond', //cross, cross45, triangle, triangle180, star, diamond, square, wye
  },
  //画坐标轴
  axis: {
    rotated: false,
    x: {
      show: true,
      type: '', //bin, category, numeric, (timeseries: 暂未实现)
    },
    //这几个跟zoom axis有关
    zoom: {
      scale: 1,
      translate: undefined,
      panning: undefined,
      enable: true
    }
  },
}
configs[17] = {
  bindto: '#barcombined_2',
  //固定y, y2轴的时候需要
  size: {
    width: 1205,
  },
  container: { 
    width: '1205',  //1080
    height: '400' //600
  },
  data: {
    type: 'bar',
    json: [
      {'sum(销售金额)': 151682777.09000546, 'sum(销售数量)': 51682777.09000546, 省份: "河南省"},
      {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 11229200.95999943, 省份: "浙江省"},
      {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 1932274.78999999, 省份: "吉林省"},
      {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 8320015.72999907, 省份: "四川省"},
      {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 731732.48999999, 省份: "天津市"},
      {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 656606.460000008, 省份: "宁夏"},
      {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 4926494.39999879, 省份: "安徽省"},
      {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 16092377.04000114, 省份: "山东省"},
      {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 4982340.380000211, 省份: "山西省"},
      {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 4657181.70000026, 省份: "广东省"},
      {'sum(销售金额)': 5409940.109999983, 'sum(销售数量)': 409940.109999983, 省份: "广西省"},
      {'sum(销售金额)': 93506928.76000081, 'sum(销售数量)': 3506928.76000081, 省份: "新疆"},
      {'sum(销售金额)': 73817839.26999827, 'sum(销售数量)': 3817839.26999827, 省份: "河北省"},
      {'sum(销售金额)': 47782957.6399988, 'sum(销售数量)': 7782957.6399988, 省份: "江西省"},
      {'sum(销售金额)': 52447454.51999989, 'sum(销售数量)': 2447454.51999989, 省份: "甘肃省"},
      {'sum(销售金额)': 22314036.31000011, 'sum(销售数量)': 2314036.31000011, 省份: "江苏省"},
      {'sum(销售金额)': 49899185.33999957, 'sum(销售数量)': 9899185.33999957, 省份: "福建省"},
      {'sum(销售金额)': 24532260.47999992, 'sum(销售数量)': 4532260.47999992, 省份: "西藏"},
      {'sum(销售金额)': 13954131.150000064, 'sum(销售数量)': 6532260.47999992, 省份: "贵州省"},
      {'sum(销售金额)': 62926304.729999356, 'sum(销售数量)': 8532260.47999992, 省份: "辽宁省"},
      {'sum(销售金额)': 21032236.2500001, 'sum(销售数量)': 7532260.47999992, 省份: "云南省"},
      {'sum(销售金额)': 42603900.739999704, 'sum(销售数量)': 4532260.47999992, 省份: "内蒙古"},
      {'sum(销售金额)': 142972736.7700018, 'sum(销售数量)': 5532260.47999992, 省份: "湖南省"},
      {'sum(销售金额)': 2171847.9199999967, 'sum(销售数量)': 9532260.47999992, 省份: "重庆市"},
      {'sum(销售金额)': 62313281.32999914, 'sum(销售数量)': 2532260.47999992, 省份: "陕西省"},
      {'sum(销售金额)': 27317151.43999988, 'sum(销售数量)': 1532260.47999992, 省份: "青海省"},
      {'sum(销售金额)': 9744438.810000032, 'sum(销售数量)': 532260.47999992, 省份: "黑龙江"},
      {'sum(销售金额)': 73518422.87, 'sum(销售数量)': 2532260.47999992, 省份: "湖北省"}
    ],
    row: {
      categories: ['省份'],
      aggressions: []
    },
    column: {
      categories: [],
      aggressions: [['sum(销售金额)'], ['sum(销售数量)']]
    },
    combined: [
      [{
        axis: 'y', 
        aggr: 'sum(销售金额)',
        color: {
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['sum(销售金额)'],
        type: 'bar',
        data: [
          {'sum(销售金额)': 151682777.09000546, 'sum(销售数量)': 51682777.09000546, 省份: "河南省"},
          {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 11229200.95999943, 省份: "浙江省"},
          {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 1932274.78999999, 省份: "吉林省"},
          {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 8320015.72999907, 省份: "四川省"},
          {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 731732.48999999, 省份: "天津市"},
          {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 656606.460000008, 省份: "宁夏"},
          {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 4926494.39999879, 省份: "安徽省"},
          {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 16092377.04000114, 省份: "山东省"},
          {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 4982340.380000211, 省份: "山西省"},
          {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 4657181.70000026, 省份: "广东省"},
          {'sum(销售金额)': 5409940.109999983, 'sum(销售数量)': 409940.109999983, 省份: "广西省"},
          {'sum(销售金额)': 93506928.76000081, 'sum(销售数量)': 3506928.76000081, 省份: "新疆"},
          {'sum(销售金额)': 73817839.26999827, 'sum(销售数量)': 3817839.26999827, 省份: "河北省"},
          {'sum(销售金额)': 47782957.6399988, 'sum(销售数量)': 7782957.6399988, 省份: "江西省"},
          {'sum(销售金额)': 52447454.51999989, 'sum(销售数量)': 2447454.51999989, 省份: "甘肃省"},
          {'sum(销售金额)': 22314036.31000011, 'sum(销售数量)': 2314036.31000011, 省份: "江苏省"},
          {'sum(销售金额)': 49899185.33999957, 'sum(销售数量)': 9899185.33999957, 省份: "福建省"},
          {'sum(销售金额)': 24532260.47999992, 'sum(销售数量)': 4532260.47999992, 省份: "西藏"},
          {'sum(销售金额)': 13954131.150000064, 'sum(销售数量)': 6532260.47999992, 省份: "贵州省"},
          {'sum(销售金额)': 62926304.729999356, 'sum(销售数量)': 8532260.47999992, 省份: "辽宁省"},
          {'sum(销售金额)': 21032236.2500001, 'sum(销售数量)': 7532260.47999992, 省份: "云南省"},
          {'sum(销售金额)': 42603900.739999704, 'sum(销售数量)': 4532260.47999992, 省份: "内蒙古"},
          {'sum(销售金额)': 142972736.7700018, 'sum(销售数量)': 5532260.47999992, 省份: "湖南省"},
          {'sum(销售金额)': 2171847.9199999967, 'sum(销售数量)': 9532260.47999992, 省份: "重庆市"},
          {'sum(销售金额)': 62313281.32999914, 'sum(销售数量)': 2532260.47999992, 省份: "陕西省"},
          {'sum(销售金额)': 27317151.43999988, 'sum(销售数量)': 1532260.47999992, 省份: "青海省"},
          {'sum(销售金额)': 9744438.810000032, 'sum(销售数量)': 532260.47999992, 省份: "黑龙江"},
          {'sum(销售金额)': 73518422.87, 'sum(销售数量)': 2532260.47999992, 省份: "湖北省"}
        ]
     }],
     [{
        axis: 'y', 
        aggr: 'sum(销售数量)',
        color: {
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['sum(销售数量)'],
        type: 'bar',
        data: [
          {'sum(销售金额)': 151682777.09000546, 'sum(销售数量)': 51682777.09000546, 省份: "河南省"},
          {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 11229200.95999943, 省份: "浙江省"},
          {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 1932274.78999999, 省份: "吉林省"},
          {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 8320015.72999907, 省份: "四川省"},
          {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 731732.48999999, 省份: "天津市"},
          {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 656606.460000008, 省份: "宁夏"},
          {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 4926494.39999879, 省份: "安徽省"},
          {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 16092377.04000114, 省份: "山东省"},
          {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 4982340.380000211, 省份: "山西省"},
          {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 4657181.70000026, 省份: "广东省"},
          {'sum(销售金额)': 5409940.109999983, 'sum(销售数量)': 409940.109999983, 省份: "广西省"},
          {'sum(销售金额)': 93506928.76000081, 'sum(销售数量)': 3506928.76000081, 省份: "新疆"},
          {'sum(销售金额)': 73817839.26999827, 'sum(销售数量)': 3817839.26999827, 省份: "河北省"},
          {'sum(销售金额)': 47782957.6399988, 'sum(销售数量)': 7782957.6399988, 省份: "江西省"},
          {'sum(销售金额)': 52447454.51999989, 'sum(销售数量)': 2447454.51999989, 省份: "甘肃省"},
          {'sum(销售金额)': 22314036.31000011, 'sum(销售数量)': 2314036.31000011, 省份: "江苏省"},
          {'sum(销售金额)': 49899185.33999957, 'sum(销售数量)': 9899185.33999957, 省份: "福建省"},
          {'sum(销售金额)': 24532260.47999992, 'sum(销售数量)': 4532260.47999992, 省份: "西藏"},
          {'sum(销售金额)': 13954131.150000064, 'sum(销售数量)': 6532260.47999992, 省份: "贵州省"},
          {'sum(销售金额)': 62926304.729999356, 'sum(销售数量)': 8532260.47999992, 省份: "辽宁省"},
          {'sum(销售金额)': 21032236.2500001, 'sum(销售数量)': 7532260.47999992, 省份: "云南省"},
          {'sum(销售金额)': 42603900.739999704, 'sum(销售数量)': 4532260.47999992, 省份: "内蒙古"},
          {'sum(销售金额)': 142972736.7700018, 'sum(销售数量)': 5532260.47999992, 省份: "湖南省"},
          {'sum(销售金额)': 2171847.9199999967, 'sum(销售数量)': 9532260.47999992, 省份: "重庆市"},
          {'sum(销售金额)': 62313281.32999914, 'sum(销售数量)': 2532260.47999992, 省份: "陕西省"},
          {'sum(销售金额)': 27317151.43999988, 'sum(销售数量)': 1532260.47999992, 省份: "青海省"},
          {'sum(销售金额)': 9744438.810000032, 'sum(销售数量)': 532260.47999992, 省份: "黑龙江"},
          {'sum(销售金额)': 73518422.87, 'sum(销售数量)': 2532260.47999992, 省份: "湖北省"}
        ]
     }],
    ]
  },
  bar: { 
    //柱子间的距离
    padding: { 
      inner: 0.01, 
      outter: 0.1
    } 
  },
  //画坐标轴
  axis: {
    rotated: true,
    x: {
      show: true,
      type: '', //bin, category, numeric, (timeseries: 暂未实现)
    },
    //这几个跟zoom axis有关
    zoom: {
      scale: 1,
      translate: undefined,
      panning: undefined,
      enable: true
    }
  }
}
configs[18] = {
  bindto: '#barcombined_3',
  //固定y, y2轴的时候需要
  size: {
    height: 400
  },
  container: { 
    width: '600',  //1080
    height: '400' //600
  },
  data: {
    type: 'bar',
    json: [
      {'sum(销售金额)': 151682777.09000546, 'sum(销售数量)': 11682777.09000546, 省份: "河南省", 品牌: '国际品牌'},
      {'sum(销售金额)': 151682777.09000546, 'sum(销售数量)': 9682777.09000546, 省份: "河南省", 品牌: '非国际品牌'},
      {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 5229200.95999943, 省份: "浙江省", 品牌: '国际品牌'},
      {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 6229200.95999943, 省份: "浙江省", 品牌: '非国际品牌'},
      {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 932274.78999999, 省份: "吉林省", 品牌: '国际品牌'},
      {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 1032274.78999999, 省份: "吉林省", 品牌: '非国际品牌'},
      {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 3320015.72999907, 省份: "四川省", 品牌: '国际品牌'},
      {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 5020015.72999907, 省份: "四川省", 品牌: '非国际品牌'},
      {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 231732.48999999, 省份: "天津市", 品牌: '国际品牌'},
      {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 431732.48999999, 省份: "天津市", 品牌: '非国际品牌'},
      {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 556606.460000008, 省份: "宁夏", 品牌: '国际品牌'},
      {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 56606.460000008, 省份: "宁夏", 品牌: '非国际品牌'},
      {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 2926494.39999879, 省份: "安徽省", 品牌: '国际品牌'},
      {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 1926494.39999879, 省份: "安徽省", 品牌: '非国际品牌'},
      {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 1092377.04000114, 省份: "山东省", 品牌: '国际品牌'},
      {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 6092377.04000114, 省份: "山东省", 品牌: '非国际品牌'},
      {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 982340.380000211, 省份: "山西省", 品牌: '国际品牌'},
      {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 3082340.380000211, 省份: "山西省", 品牌: '非国际品牌'},
      {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 3657181.70000026, 省份: "广东省", 品牌: '国际品牌'},
      {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 1657181.70000026, 省份: "广东省", 品牌: '非国际品牌'}
    ],
    column: {
      categories: ['省份'],
      aggressions: []
    },
    row: {
      categories: [],
      aggressions: [['sum(销售数量)'], ['sum(销售金额)']]
    },
    combined: [
      [{
        axis: 'y', 
        aggr: 'sum(销售数量)',
        color: {
          feature: '品牌',
          stacked: true,
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['sum(销售数量)'],
        type: 'bar',
        data: [
          {'sum(销售数量)': 11682777.09000546, 省份: "河南省", 品牌: '国际品牌'},
          {'sum(销售金额)': 151682777.09000546, 'sum(销售数量)': 9682777.09000546, 省份: "河南省", 品牌: '非国际品牌'},
          {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 5229200.95999943, 省份: "浙江省", 品牌: '国际品牌'},
          {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 6229200.95999943, 省份: "浙江省", 品牌: '非国际品牌'},
          {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 932274.78999999, 省份: "吉林省", 品牌: '国际品牌'},
          {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 1032274.78999999, 省份: "吉林省", 品牌: '非国际品牌'},
          {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 3320015.72999907, 省份: "四川省", 品牌: '国际品牌'},
          {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 5020015.72999907, 省份: "四川省", 品牌: '非国际品牌'},
          {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 231732.48999999, 省份: "天津市", 品牌: '国际品牌'},
          {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 431732.48999999, 省份: "天津市", 品牌: '非国际品牌'},
          {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 556606.460000008, 省份: "宁夏", 品牌: '国际品牌'},
          {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 56606.460000008, 省份: "宁夏", 品牌: '非国际品牌'},
          {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 2926494.39999879, 省份: "安徽省", 品牌: '国际品牌'},
          {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 1926494.39999879, 省份: "安徽省", 品牌: '非国际品牌'},
          {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 1092377.04000114, 省份: "山东省", 品牌: '国际品牌'},
          {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 6092377.04000114, 省份: "山东省", 品牌: '非国际品牌'},
          {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 982340.380000211, 省份: "山西省", 品牌: '国际品牌'},
          {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 3082340.380000211, 省份: "山西省", 品牌: '非国际品牌'},
          {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 3657181.70000026, 省份: "广东省", 品牌: '国际品牌'},
          {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 1657181.70000026, 省份: "广东省", 品牌: '非国际品牌'}
        ]
      }],
      [{
        axis: 'y', 
        aggr: 'sum(销售金额)',
        color: {
          opacity: 1,
          schemes: [],
          patterns: [],
          range: []
        },
        labels: ['sum(销售金额)'],
        type: 'line',
        data: [
          {'sum(销售金额)': 151682777.09000546, 省份: "河南省", 品牌: '国际品牌'},
          {'sum(销售金额)': 151682777.09000546, 省份: "河南省", 品牌: '非国际品牌'},
          {'sum(销售金额)': 101229200.95999943,省份: "浙江省", 品牌: '国际品牌'},
          {'sum(销售金额)': 101229200.95999943, 'sum(销售数量)': 6229200.95999943, 省份: "浙江省", 品牌: '非国际品牌'},
          {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 932274.78999999, 省份: "吉林省", 品牌: '国际品牌'},
          {'sum(销售金额)': 11932274.78999999, 'sum(销售数量)': 1032274.78999999, 省份: "吉林省", 品牌: '非国际品牌'},
          {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 3320015.72999907, 省份: "四川省", 品牌: '国际品牌'},
          {'sum(销售金额)': 68320015.72999907, 'sum(销售数量)': 5020015.72999907, 省份: "四川省", 品牌: '非国际品牌'},
          {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 231732.48999999, 省份: "天津市", 品牌: '国际品牌'},
          {'sum(销售金额)': 3731732.48999999, 'sum(销售数量)': 431732.48999999, 省份: "天津市", 品牌: '非国际品牌'},
          {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 556606.460000008, 省份: "宁夏", 品牌: '国际品牌'},
          {'sum(销售金额)': 9656606.460000008, 'sum(销售数量)': 56606.460000008, 省份: "宁夏", 品牌: '非国际品牌'},
          {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 2926494.39999879, 省份: "安徽省", 品牌: '国际品牌'},
          {'sum(销售金额)': 54926494.39999879, 'sum(销售数量)': 1926494.39999879, 省份: "安徽省", 品牌: '非国际品牌'},
          {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 1092377.04000114, 省份: "山东省", 品牌: '国际品牌'},
          {'sum(销售金额)': 116092377.04000114, 'sum(销售数量)': 6092377.04000114, 省份: "山东省", 品牌: '非国际品牌'},
          {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 982340.380000211, 省份: "山西省", 品牌: '国际品牌'},
          {'sum(销售金额)': 14982340.380000211, 'sum(销售数量)': 3082340.380000211, 省份: "山西省", 品牌: '非国际品牌'},
          {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 3657181.70000026, 省份: "广东省", 品牌: '国际品牌'},
          {'sum(销售金额)': 34657181.70000026, 'sum(销售数量)': 1657181.70000026, 省份: "广东省", 品牌: '非国际品牌'}
        ]
      }]
    ]
  },
  bar: { 
    //柱子间的距离
    padding: { 
      inner: 0.01, 
      outter: 0.1
    } 
  },
  line: {
    //线粗细+点大小
    size: 1.5,
    //点形状
    pattern: 'diamond', //cross, cross45, triangle, triangle180, star, diamond, square, wye
  },
  //画坐标轴
  axis: {
    rotated: false,
    x: {
      show: true,
      type: '', //bin, category, numeric, (timeseries: 暂未实现)
    },
    //这几个跟zoom axis有关
    zoom: {
      scale: 1,
      translate: undefined,
      panning: undefined,
      enable: true
    }
  }
}

configs[19] = {
  bindto: '#scatter_1',
  size: {
    width: '600', 
    height: '400' 
  },
  data: {
    type: 'scatter',
    json: [{"Embarked":"P","mean(Fare)":7.5875,"sum(Fare)":15.175,"sum(Survived)":1},{"Embarked":"C","mean(Fare)":59.95414404761905,"sum(Fare)":10072.2962,"sum(Survived)":93},{"Embarked":"S","mean(Fare)":27.141456786271394,"sum(Fare)":17397.673799999964,"sum(Survived)":215},{"Embarked":"Q","mean(Fare)":13.44620897435897,"sum(Fare)":1048.8042999999998,"sum(Survived)":31},{"Embarked":"null","mean(Fare)":80.0,"sum(Fare)":160.0,"sum(Survived)":2}],
    column: {
      aggressions: [['sum(Survived)']]
    },
    row: {
      aggressions: [["mean(Fare)"]]
    },
    combined: [
      [{
        axis: 'y', 
        aggr: "mean(Fare)",
        color: {
          feature: 'Embarked',
          type: 'ordinal',
          opacity: 1,
          schemes: [],
          colors: [],
          patterns: [],
          range: []
        },
        size: {
          feature: 'sum(Survived)',
          range: []
        },
        labels: ['Embarked', "mean(Fare)", 'sum(Survived)'],
        type: 'scatter',
        data: [{"Embarked":"P","mean(Fare)":7.5875,"sum(Fare)":15.175,"sum(Survived)":1},{"Embarked":"C","mean(Fare)":59.95414404761905,"sum(Fare)":10072.2962,"sum(Survived)":93},{"Embarked":"S","mean(Fare)":27.141456786271394,"sum(Fare)":17397.673799999964,"sum(Survived)":215},{"Embarked":"Q","mean(Fare)":13.44620897435897,"sum(Fare)":1048.8042999999998,"sum(Survived)":31},{"Embarked":"null","mean(Fare)":80.0,"sum(Fare)":160.0,"sum(Survived)":2}],
      },]
    ]
  },
  axis: {
    x: {
      show: true,
      type: '', //bin, category, numeric, (timeseries: 暂未实现)
    },
    zoom: {
      scale: 1,
      translate: undefined,
      panning: null,
      enable: true
    }
  },
  point: {
    size: 2
  },
}
configs[20] ={
  bindto: '#scatter_2',
  size: {
    width: '600', 
    height: '400' 
  },
  data: {
    type: 'scatter',
    json: [{"Embarked":"P","mean(Fare)":7.5875,"sum(Fare)":15.175,"sum(Survived)":1},{"Embarked":"C","mean(Fare)":59.95414404761905,"sum(Fare)":10072.2962,"sum(Survived)":93},{"Embarked":"S","mean(Fare)":27.141456786271394,"sum(Fare)":17397.673799999964,"sum(Survived)":215},{"Embarked":"Q","mean(Fare)":13.44620897435897,"sum(Fare)":1048.8042999999998,"sum(Survived)":31},{"Embarked":"null","mean(Fare)":80.0,"sum(Fare)":160.0,"sum(Survived)":2}],
    column: {
      aggressions: [['sum(Survived)']]
    },
    row: {
      aggressions: [["mean(Fare)"]]
    },
    combined: [
      [{
        axis: 'y', 
        aggr: "mean(Fare)",
        colored: {
          feature: "sum(Survived)",
          type: 'linear',
          opacity: 1,
          schemes: [],
          colors: [],
          patterns: [],
          range: []
        },
        size: {
          feature: 'sum(Survived)',
          range: []
        },
        labels: ['Embarked', "mean(Fare)"],
        data: [{"Embarked":"P","mean(Fare)":7.5875,"sum(Fare)":15.175,"sum(Survived)":1},{"Embarked":"C","mean(Fare)":59.95414404761905,"sum(Fare)":10072.2962,"sum(Survived)":93},{"Embarked":"S","mean(Fare)":27.141456786271394,"sum(Fare)":17397.673799999964,"sum(Survived)":215},{"Embarked":"Q","mean(Fare)":13.44620897435897,"sum(Fare)":1048.8042999999998,"sum(Survived)":31},{"Embarked":"null","mean(Fare)":80.0,"sum(Fare)":160.0,"sum(Survived)":2}],
      },]
    ]
  },
  axis: {
    x: {
      show: true,
      type: '', //bin, category, numeric, (timeseries: 暂未实现)
    },
    zoom: {
      scale: 1,
      translate: undefined,
      panning: null,
      enable: true
    }
  },
  point: {
    size: 2
  },
}

configs[21] = {
  bindto: '#multiscatter_1',
  size: {
    width: '1500', 
    height: '900' 
  },
  data: {
    type: 'scatter',
    json: [
      {Embarked: "P", 'mean(Fare)': 17.5875, 'sum(Survived)': 100, Sex: 'male', Product: 'A'},
      {Embarked: "P", 'mean(Fare)': 59.95414404761905, 'sum(Survived)': 93, Sex: 'male', Product: 'B'},
      {Embarked: "P", 'mean(Fare)': 47.5875, 'sum(Survived)': 109, Sex: 'female', Product: 'A'},
      {Embarked: "P", 'mean(Fare)': 59.95414404761905, 'sum(Survived)': 93, Sex: 'female', Product: 'B'},
      {Embarked: "S", 'mean(Fare)': 27.141456786271394, 'sum(Survived)': 215, Sex: 'male', Product: 'A'},
      {Embarked: "S", 'mean(Fare)': 13.44620897435897, 'sum(Survived)': 31, Sex: 'male', Product: 'B'},
      {Embarked: "S", 'mean(Fare)': 27.141456786271394, 'sum(Survived)': 215, Sex: 'female', Product: 'A'},
      {Embarked: "S", 'mean(Fare)': 13.44620897435897, 'sum(Survived)': 31, Sex: 'female', Product: 'B'},
      {Embarked: "null", 'mean(Fare)': 80, 'sum(Survived)': 129, Sex: 'male', Product: 'A'},
      {Embarked: "null", 'mean(Fare)': 80, 'sum(Survived)': 112, Sex: 'female', Product: 'A'}
    ],
    column: {
      categories: ['Embarked'],
      aggressions: [['sum(Survived)']]
    },
    row: {
      categories: ['Sex'],
      aggressions: [["mean(Fare)"]]
    },
    combined: [
      [{
        axis: 'y', 
        aggr: "mean(Fare)",
        color: {
          feature: 'Embarked',
          type: 'ordinal',
          opacity: 1,
          schemes: [],
          colors: [],
          patterns: [],
          range: []
        },
        labels: ['Embarked', "mean(Fare)", 'sum(Survived)'],
        size: {
          feature: 'sum(Survived)',
          range: []
        },
        data: [
          {Embarked: "P", 'mean(Fare)': 17.5875, 'sum(Survived)': 100, Sex: 'male', Product: 'A'},
          {Embarked: "P", 'mean(Fare)': 59.95414404761905, 'sum(Survived)': 93, Sex: 'male', Product: 'B'},
          {Embarked: "P", 'mean(Fare)': 47.5875, 'sum(Survived)': 109, Sex: 'female', Product: 'A'},
          {Embarked: "P", 'mean(Fare)': 59.95414404761905, 'sum(Survived)': 93, Sex: 'female', Product: 'B'},
          {Embarked: "S", 'mean(Fare)': 27.141456786271394, 'sum(Survived)': 215, Sex: 'male', Product: 'A'},
          {Embarked: "S", 'mean(Fare)': 13.44620897435897, 'sum(Survived)': 31, Sex: 'male', Product: 'B'},
          {Embarked: "S", 'mean(Fare)': 27.141456786271394, 'sum(Survived)': 215, Sex: 'female', Product: 'A'},
          {Embarked: "S", 'mean(Fare)': 13.44620897435897, 'sum(Survived)': 31, Sex: 'female', Product: 'B'},
          {Embarked: "null", 'mean(Fare)': 80, 'sum(Survived)': 129, Sex: 'male', Product: 'A'},
          {Embarked: "null", 'mean(Fare)': 80, 'sum(Survived)': 112, Sex: 'female', Product: 'A'}
        ]
      },]
    ]
  },
  axis: {
    x: {
      show: true,
      type: '', //bin, category, numeric, (timeseries: 暂未实现)
    },
    zoom: {
      scale: 1,
      translate: undefined,
      panning: null,
      enable: true
    }
  },
  point: {
    size: 2
  },
}

export {configs}