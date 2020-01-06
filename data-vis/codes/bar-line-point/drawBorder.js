import {truncateText} from './getSize.js'
const drawBorder = function({config, nest_by_column, nest_by_row, row_group, column_group, spaces}) {
  let column_length = nest_by_column.length
  let row_length = nest_by_row.length
  let isRotated = config.axis_rotated
  let isScatter = config.data_type === 'scatter'
  let data_row_categories = config.data_row_categories
  let data_column_categories = config.data_column_categories
  let columns = (isRotated || isScatter) ? data_column_categories : data_column_categories.slice(0, data_column_categories.length-1)
  let rows = isRotated ? data_row_categories.slice(0, data_row_categories.length-1) : data_row_categories
  let border_color = config.table_inner_color
  let border_width = config.table_inner_width
  let header_height = 30
  let rowder_width = 90
  let title_height = spaces.height_for_col_title
  let row_height = spaces.height_for_cell
  let band = spaces.width_for_cell
  let margin_left = 0
  let margin_top = 0
  
  if(column_length <= 1 && row_length <= 1) return

  if(isScatter) {
    let {
      width_for_row_cat, 
      width_for_y_axis,
      height_for_col_cat,
      height_for_col_title,
      height_for_x_axis,
    } = spaces
    margin_left = width_for_row_cat + width_for_y_axis
    margin_top = height_for_col_title + height_for_col_cat
  } else if(isRotated) {
    let  {
      width_for_row_cat, 
      height_for_y_axis,
      height_for_y2_axis,
      height_for_col_cat,
      height_for_col_title,
      width_for_x_axis,
    } = spaces
    margin_left = width_for_row_cat + width_for_x_axis
    margin_top = height_for_y2_axis + height_for_col_cat + height_for_col_title
  } else {
    let {
      width_for_row_cat, 
      width_for_y_axis,
      width_for_y2_axis,
      height_for_col_cat,
      height_for_col_title,
      height_for_x_axis,
    } = spaces
    margin_left = width_for_row_cat + width_for_y_axis
    margin_top = height_for_col_cat + height_for_col_title
  }

  row_group.attr('transform', `translate(0, ${isRotated ? 0 : title_height})`)
  column_group.attr('transform', `translate(0, ${title_height})`)
  
  //分割行的属性名与数据的竖线
  rows.forEach((y, yi) => {
    row_group.append('path')
      .attr('d', `M ${(yi+1) * rowder_width} 0 V ${margin_top + row_length * row_height}`)
      .attr('stroke', border_color)
      .attr('stroke-width', border_width)

    let text = truncateText({
      text: y, 
      max_length: rowder_width
    })

   row_group.append('text')
      .text(text)
      .attr('text-anchor', 'end')
      .attr('style', `fill: ${config.font_color}; font-size: ${config.font_size}`)
      .attr('transform', () => {
        let x = rowder_width * (yi + 1)
        let y = columns.length * header_height - 10
        return `translate(${x}, ${y})`
      })
  })

  //分割列的属性名与数据的横线
  columns.forEach((c, ci) => {
    column_group.append('path')
      .attr('d', `M ${ci === columns.length-1 ? 0 : margin_left} ${(ci+1) * header_height} H ${margin_left + band * column_length}`)
      .attr('stroke', border_color)
      .attr('stroke-width', border_width)
  })

  let text = columns.filter(col => col !== '').join(' / ')
  column_group.append('text')
    .text(text)
    .attr('text-anchor', 'middle')
    .attr('style', `fill: ${config.font_color}; font-size: ${config.font_size}`)
    .attr('transform', () => {
      let x = margin_left + column_length * band / 2
      let y = -8
      return `translate(${x}, ${y})`
    })
  
  //计算线的位置，文本的位置
  let mc_divide_lines = []
  nest_by_column.forEach(v => {
    let split_keys = JSON.parse(v.key)
    if(!isRotated && !isScatter) {
      split_keys = split_keys.slice(0, split_keys.length-1)
    }
    split_keys.forEach((s, i) => {
      let past = split_keys.slice(0, i + 1)
      let key = JSON.stringify(past)
      let exit = mc_divide_lines.filter(m => m.txt === key);
      if(exit.length) {
        exit[0].length++
      } else {
        mc_divide_lines.push({txt: key, length: 1, group_idx: i})
      }
    })
  })

  let ci = 0
  do {
    let groups = mc_divide_lines.filter(m => m.group_idx === ci)
    let new_group = groups.map((g, gi) => {
      let length = groups.slice(0, gi + 1).reduce((a, b) => a += b.length, 0)
      let length2 = length - g.length / 2
      let text = JSON.parse(g.txt).pop() || ''
      let available_w = (length - length2) * band * 2;
      let txt = truncateText({
        text, 
        max_length: available_w
      })
      return {txt, length, length2}
    })
    
    let line_group = new_group.slice(0, new_group.length - 1) 
    column_group.selectAll(`.border-column-${ci}`)
      .data(line_group)
      .enter().append('path')
      .attr('class', `border-column-${ci}`)
      .attr('stroke', border_color)
      .attr('stroke-width', border_width)
      .attr('d', (d, i) => `M ${d.length * band + margin_left} ${header_height * ci} V 
        ${margin_top + row_length * row_height}`)

    column_group.selectAll(`.label-column-${ci}`)
      .data(new_group)
      .enter().append('text')
      .attr('class', `label-column-${ci}`)
      .attr('text-anchor', 'middle')
      .attr('style', `fill: ${config.font_color}; font-size: ${config.font_size}`)
      .text(d => d.txt)
      .attr('transform', (d) => {
        let x = margin_left + d.length2 * band
        let y = header_height * (ci + 1) - 10
        return `translate(${x}, ${y})`
      })

    ci += 1
  } while (ci < columns.length)

  let mc_divide_lines2 = []
  nest_by_row.forEach(v => {
    let split_keys = JSON.parse(v.key)
    if(isRotated) {
      split_keys = split_keys.slice(0, split_keys.length-1)
    }
    split_keys.forEach((s, i) => {
      let past = split_keys.slice(0, i + 1)
      let key = JSON.stringify(past)
      let exit = mc_divide_lines2.filter(m => m.txt === key);
      if(exit.length) {
        exit[0].line_pos += 1
        exit[0].txt_pos += 0.5
      } else {
        let obj = {txt: key, line_pos: 1, group_idx: i};
        let line_pos_past = mc_divide_lines2.filter(m => m.group_idx === i).map(m => m.line_pos).pop();
        let val = line_pos_past || 0;
        obj.line_pos = val + 1
        obj.txt_pos = val + 0.5
        mc_divide_lines2.push(obj)
      }
    })
  })
  
  let yi = 0
  do {
    let groups = mc_divide_lines2.filter(m => m.group_idx === yi)
    groups.forEach(g => {
      let text = JSON.parse(g.txt).pop() || ''
      text = truncateText({
        text, 
        max_length: rowder_width, 
      })
      g.text = text
    })
    let line_group = groups.slice(0, groups.length - 1)
    
    row_group.selectAll(`.border-row-${yi}`)
      .data(line_group)
      .enter().append('path')
      .attr('class', `border-row-${yi}`)
      .attr('stroke', border_color)
      .attr('stroke-width', border_width)
      .attr('d', (d, i) => {
        return `M ${rowder_width * yi} ${d.line_pos * row_height + margin_top - 10} H 
        ${margin_left + band * column_length}`
      })
    
    row_group.selectAll(`.label-row-${yi}`)
      .data(groups)
      .enter().append('text')
      .attr('class', `label-row-${yi}`)
      .attr('style', `fill: ${config.font_color}; font-size: ${config.font_size}`)
      .text(d => d.text)
      .attr('text-anchor', 'end')
      .attr('transform', (d) => {
        let x = rowder_width * (yi + 1)
        let pos_y = d.txt_pos * row_height + margin_top + 5
        return `translate(${x}, ${pos_y})`
      })
    
      yi += 1
  } while (yi < rows.length)
}

export {drawBorder}
