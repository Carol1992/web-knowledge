const getCombinedKeys = function({data, aggression, category}) {
  let categories = category
  let aggressions = aggression
  let combined_keys = [];
  
  categories.forEach(v => {
    let val = v.val ? data[v.val] : data[v]
    combined_keys.push(val)
  })
  
  if(aggressions !== undefined) {
    combined_keys.push(aggressions)
  }
  
  return JSON.stringify(combined_keys)
}

const getNestedData = function({data, aggressions=[], category, isAggr}) {
  let data_list = []
  if(isAggr) {
    aggressions.forEach(c => {
      d3.nest()
        .key(() => JSON.stringify([c]))
        .entries(data)
        .forEach(t => data_list.push(t))
    })
  } else {
    let total_aggr = aggressions.length;
    let i = 0 
    data_list = d3.nest()
      .key((d) => {
        let result = getCombinedKeys({
          data: d, 
          category: category, 
          aggression: total_aggr <= 1 ? aggressions[0] : aggressions[i % total_aggr]
        })
        d['cross'] = result
        i++
        return result
      })
      .entries(data) 
  }
  return data_list
}

const getNestedList = function({config}) {
  let x_categories = config.data_column_categories;
  let y_categories = config.data_row_categories;
  let x_aggressions = config.data_column_aggressions
  let y_aggressions = config.data_row_aggressions
  let data = config.data_json;
  let isAggr_col = x_categories.length === 0 && x_aggressions.length
  let isAggr_row = y_categories.length === 0 && y_aggressions.length
  let nest_by_column = getNestedData({
    data: data, 
    category: x_categories,
    aggressions: x_aggressions,
    isAggr: isAggr_col,
  })
  let nest_by_row = getNestedData({
    data: data, 
    category: y_categories,
    aggressions: y_aggressions, 
    isAggr: isAggr_row,
  })
  let all_data = []
  nest_by_row.forEach((n, i) => {
    nest_by_column.forEach((m, j) => {
      let values = m.values.filter((e) => e['cross'] === n.key) || []
      let elt = {
        x: j,
        y: i,
        values: isAggr_row ? m.values : values
      }
      if(elt.values.length) {
        all_data.push(elt)
      }
    })
  })
 
  return {
    nest_by_column,
    nest_by_row,
    all_data
  }
}

export {getNestedList}