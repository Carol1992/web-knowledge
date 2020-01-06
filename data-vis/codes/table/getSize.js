let main_svg = null
let main_config = {}
const getLength = function() {
  let textLengthStore = {}

  return function(str, fontSize) {
    let text = str.toString(), size = {}
    let exit = textLengthStore[text]

    if(exit) {
      return exit
    } else {
      if(text === '') {
        size = {
          width: 0
        }
      } else {
        let textNode = main_svg.append('text').text(text).attr('style', `font-size: ${fontSize || main_config.font_size}`)
        size = textNode.node() ? textNode.node().getBoundingClientRect() : {}
        textNode.remove()
      }
      
      textLengthStore[text] = size.width || 0
        
      return size.width
    }
  }
}

const getTextLength = getLength()

const truncateText = function({text, max_length, fontSize}) {
  text = text.toString()
  let textLength = getTextLength(text, fontSize), long_text = false
  while (textLength > max_length && text.length > 0) {
    long_text = true
    text = text.slice(0, -1)
    textLength = getTextLength(text, fontSize);
  }
  return long_text ? (text+'..') : text
}

const setChartSize = function({config, svg, nest_by_column, nest_by_row}) {
  main_svg = svg
  main_config = config
  let column_categories = config.data_column_categories
  let row_categories = config.data_row_categories
  let column_aggressions = config.data_column_aggressions
  let row_aggressions = config.data_row_aggressions
  let total_rows = nest_by_row.length || 1 
  let total_columns = nest_by_column.length || 1 
  let row_factor = row_aggressions.length ? 1 : 0
  let col_factor = column_aggressions.length ? 1: 0
  let labels = config.data_labeled
  let header_height = config.table_header_top_height
  let calculateHeader = config.table_header_auto
  let limit_max = 300
  let limit_min = 90

  if(calculateHeader) {
    let temp_arr = []
    //表格行属性的宽度根据数据最长的长度来决定
    row_categories.forEach(r => {
      temp_arr.push(getTextLength(r))
      nest_by_row.forEach(n => {
        let keys = JSON.parse(n.key) 
        keys.forEach(k => {
          temp_arr.push(getTextLength(k || ''))
        })
      })
    })
    row_aggressions.forEach(r => {
      temp_arr.push(getTextLength(r))
    })

    config.table_header_left_width = Math.min(d3.max([...temp_arr, limit_min]), limit_max)
  }

  if(config.size_width && config.size_height) {
    config.table_body_width = (config.size_width - (row_categories.length + row_factor) * config.table_header_left_width) / total_columns
    config.table_body_height = (config.size_height - (column_categories.length + col_factor) * header_height - 20) / total_rows
  } else {
    config.table_body_height = 24 * (labels.length + row_factor + col_factor)
    config.size_height = total_rows * config.table_body_height + (column_categories.length + col_factor) * header_height + 20
    config.size_width = total_columns * config.table_body_width + (row_categories.length + row_factor) * config.table_header_left_width
  }
  return config
}

export {setChartSize, truncateText}