import {truncateText} from './getSize.js'
const drawBorder = function({config, nest_by_column, nest_by_row, row_group, column_group}) {
  let column_length = nest_by_column.length
  let row_length = nest_by_row.length
  let row_factor = config.data_row_aggressions.length ? 1 : 0
  let col_factor = config.data_column_aggressions.length ? 1 : 0
  let rows = row_factor ? config.data_row_categories.concat('') : config.data_row_categories
  let columns = col_factor ? config.data_column_categories.concat('') : config.data_column_categories
  let border_color = config.table_inner_color
  let border_outter_color = config.table_outter_color
  let border_width = config.table_inner_width
  let border_outter_width = config.table_outter_width
  let band = config.table_body_width
  let header_height = config.table_header_top_height
  let rowder_width = config.table_header_left_width
  let margin_left = rows.length * rowder_width
  let margin_top = columns.length * header_height
  let row_height = config.table_body_height
  let colored_feature = config.data_colored_feature

  if(column_length <= 1 && row_length <= 1) return

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
  
  let most_right = margin_left + band * column_length
  let most_bottom = margin_top + row_length * row_height
  let half_border = border_outter_width / 2
  //左边border
  column_group.append('path')
    .attr('d', `M ${half_border} 0 V ${most_bottom}`)
    .attr('stroke', border_outter_color)
    .attr('stroke-width', border_outter_width)
  //最上面的border
  row_group.append('path')
    .attr('d', `M 0 0 H ${most_right}`)
    .attr('stroke', border_outter_color)
    .attr('stroke-width', border_outter_width)
  //最下面的border
  row_group.append('path')
    .attr('d', `M 0 ${most_bottom - half_border} H ${most_right}`)
    .attr('stroke', border_outter_color)
    .attr('stroke-width', border_outter_width)
  //最右边的border
  column_group.append('path')
    .attr('d', `M ${most_right - half_border} 0 V ${most_bottom}`)
    .attr('stroke', border_outter_color)
    .attr('stroke-width', border_outter_width)
  
  //计算线的位置，文本的位置
  let mc_divide_lines = []
  nest_by_column.forEach(v => {
    let split_keys = JSON.parse(v.key)
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
      //.enter().append('path')
      .join('path')
      .attr('class', `border-column-${ci}`)
      .attr('stroke', border_color)
      .attr('stroke-width', border_width)
      .attr('d', (d, i) => `M ${d.length * band + margin_left} ${header_height * ci} V 
        ${margin_top + row_length * row_height}`)

    column_group.selectAll(`.label-column-${ci}`)
      .data(new_group)
      //.enter().append('text')
      .join('text')
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
    
    if(groups.length > 1 && yi === rows.length - 1 && colored_feature === undefined) {
      row_group.selectAll('rect')
        .data(groups)
        //.enter().append('rect')
        .join('rect')
        .attr('width', `${margin_left + band * column_length}`)
        .attr('height', row_height)
        .attr('x', `${rowder_width * yi}`)
        .attr('y', (d) => `${(d.line_pos - 1) * row_height + margin_top}`)
        .attr('stroke-width', 0)
        .attr('fill', (d, i) => (i % 2 === 1 ? 'rgba(245, 249, 254, 0.5)' : 'rgba(255, 255, 255, 0.1)'))
    }

    row_group.selectAll(`.border-row-${yi}`)
      .data(line_group)
      //.enter().append('path')
      .join('path')
      .attr('class', `border-row-${yi}`)
      .attr('stroke', border_color)
      .attr('stroke-width', border_width)
      .attr('d', (d, i) => {
        return `M ${rowder_width * yi} ${d.line_pos * row_height + margin_top} H 
        ${margin_left + band * column_length}`
      })
    
    row_group.selectAll(`.label-row-${yi}`)
      .data(groups)
      //.enter().append('text')
      .join('text')
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
