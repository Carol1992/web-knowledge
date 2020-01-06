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

const setChartSize = function({config, svg, spaces, total_rows, total_columns}) {
  main_svg = svg
  main_config = config
  let isRotated = config.axis_rotated
  let isScatter = config.data_type === 'scatter'
  let width = config.size_width
  let height = config.size_height

  if(isScatter) {
    let {
      width_for_row_cat, 
      width_for_y_axis,
      height_for_col_cat,
      height_for_col_title,
      height_for_x_axis,
      width_for_cell,
      height_for_cell
    } = spaces

    if(width && height) {
      spaces.width_for_cell = (width - width_for_row_cat - width_for_y_axis) / total_columns
      spaces.height_for_cell = (height - height_for_col_cat - height_for_col_title - height_for_x_axis) / total_rows
    } else {
      config.size_width = width_for_row_cat + width_for_y_axis + width_for_cell * total_columns
      config.size_height = height_for_col_cat + height_for_col_title + height_for_x_axis + height_for_cell * total_rows
    }
  } else if(isRotated) {
    let  {
      width_for_row_cat, 
      height_for_y_axis,
      height_for_y2_axis,
      height_for_col_cat,
      height_for_col_title,
      width_for_x_axis,
      width_for_cell,
      height_for_cell
    } = spaces

    if(width && height) {
      spaces.width_for_cell = (width - width_for_row_cat - width_for_x_axis) / total_columns
      spaces.height_for_cell = (height - height_for_y_axis - height_for_y2_axis - height_for_col_title) / total_rows
    } else {
      config.size_width = width_for_row_cat + width_for_x_axis + width_for_cell * total_columns
      config.size_height = height_for_y_axis + height_for_y2_axis + height_for_col_cat + height_for_col_title + height_for_cell * total_rows
    }
  } else {
    let {
      width_for_row_cat, 
      width_for_y_axis,
      width_for_y2_axis,
      height_for_col_cat,
      height_for_col_title,
      height_for_x_axis,
      width_for_cell,
      height_for_cell
    } = spaces

    if(width && height) {
      spaces.width_for_cell = (width - width_for_row_cat - width_for_y_axis - width_for_y2_axis) / total_columns
      spaces.height_for_cell = (height - height_for_col_cat - height_for_col_title - height_for_x_axis) / total_rows
    } else {
      config.size_width = width_for_row_cat + width_for_y_axis + width_for_y2_axis + width_for_cell * total_columns
      config.size_height = height_for_col_cat + height_for_col_title + height_for_x_axis + height_for_cell * total_rows
    }
  }
  config.size_width += 10
  config.size_height += 10
  return config
}

export {setChartSize, truncateText}