let table_config = {
  //画布id
  bindto: '#table',
  //svg大小
  // size: {
  //   width: '800', //1080
  //   height: '200' //600
  // },
  //除了标签之外图表中其他元素的字体
  font: {
    size: 12,
    color: '#424242'
  },
  tooltip: {
    show: true
  },
  color: {
    //每个aggression所应用的色板[[], [], ...]
    schemes: [],
    //每个aggression的透明度[1, 0.9, 0.6,...]
    opacity: [1],
    //每个aggression所对应的颜色组合[{}, {}, ...]
    colors: [{female: "#e29c45", male: "#23C8AF"}]
  },
  data: {
    type: 'pie',
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
    //颜色对象，包括feature, type这些key (该属性柱、线、或其组合不可用)
    colored: {
      feature: 'Sex',
      type: 'ordinal'
    },
    //标签数组 (该属性柱、线、或其组合不可用)
    labeled: ['Sex', 'sum(Survived)', "sum(Survived) percent"],
    //大小对象 (该属性柱、线、或其组合不可用)
    sized: {
      feature: 'sum(Survived)'
    },
    column: {
      categories: ['Embarked'],
      aggressions: []
    },
    row: {
      categories: ['Pclass'],
      aggressions: []
    },
  },
  arc: {
    size: 0.7,
    innerRadius: 0.4
  },
  //table
  table: {
    //外边框
    outter: {
      color: '#424242',
      width: 2
    },
    //内边框
    inner: {
      color: '#a4a4a4',
      width: 1
    },
    //边距
    padding: {
      top: 0, left: 0, bottom: 0, right: 5
    },
    //表头
    header: {
      top: {
        height: 35
      },
      left: {
        width: 100,
      },
      auto: true
    },
    //cell
    body: {
      width: 250,
      height: 200
    }
  },
}
let table_config1 = {
  //画布id
  bindto: '#table1',
  //svg大小
  // size: {
  //   width: '600', //1080
  //   height: '200' //600
  // },
  //除了标签之外图表中其他元素的字体
  font: {
    size: 12,
    color: '#424242'
  },
  tooltip: {
    show: true
  },
  color: {
    //每个aggression所应用的色板[[], [], ...]
    schemes: [],
    //每个aggression的透明度[1, 0.9, 0.6,...]
    opacity: [],
  },
  data: {
    type: 'bubble',
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
      {Embarked: "null", Pclass: "1", Sex: "male", 'sum(Survived)': 20},
      {Embarked: "null", Pclass: "1", Sex: "female", 'sum(Survived)': 2}
    ],
    //颜色对象，包括feature, type这些key (该属性柱、线、或其组合不可用)
    colored: {
      feature: 'Sex',
      type: 'ordinal'
    },
    //标签数组 (该属性柱、线、或其组合不可用)
    labeled: ['Sex', 'sum(Survived)', "sum(Survived) percent"],
    //大小对象 (该属性柱、线、或其组合不可用)
    sized: {
      feature: 'sum(Survived)'
    },
    column: {
      categories: ['Embarked'],
      aggressions: []
    },
    row: {
      categories: ['Pclass'],
      aggressions: []
    },
  },
  arc: {
    size: 0.9,
  },
  order: {
    style: -1 //-1, 1
  },
  //table
  table: {
    //外边框
    outter: {
      color: '#424242',
      width: 2
    },
    //内边框
    inner: {
      color: '#a4a4a4',
      width: 1
    },
    //边距
    padding: {
      top: 0, left: 0, bottom: 0, right: 5
    },
    //表头
    header: {
      top: {
        height: 35
      },
      left: {
        width: 100,
      },
      auto: false
    },
    //cell
    body: {
      width: 300,
      height: 300
    }
  },
}

export {table_config, table_config1}