import {getCombinedKeys} from './getData.js'
function getXDomain({isScatter, nested_data, aggressions}) {
  if(isScatter) {
    let values = d3.extent(nested_data.map(d => d[aggressions[0]]))
    return [Math.min(d3.min(values), 0), d3.max(values) * 1.1]
  } else {
    let domain = nested_data.map(n => n.key)
    return domain
  }
}

function getXScale({domain, range, linear}) {
  if(linear) {
    return d3.scaleLinear().domain(domain).range(range).nice()
  } else {
    return d3.scaleBand().domain(domain).range(range)
  }
}

function getYDomain({data_combined, aggressions, column_categories, row_categories}) {
  let domain_list = []
  aggressions.forEach((r, idx) => {
    let data_y = [], data_y2 = [], style = {}, y_title = [], y2_title = [], type = {}, sizes = {}
    let combined = data_combined[idx]
    combined.forEach(v => {
      let color = v.color || {}
      let size = v.size || {}
      let colored_stacked = color.stacked;
      let axis = v.axis;
      let aggr = v.aggr
      let chartType = v.type
      let data = v.data
      let domain = []

      style[aggr] = color
      type[aggr] = axis
      sizes[aggr] = size
      
      if(colored_stacked) {
        d3.nest()
          .key(function (d) { 
            return getCombinedKeys({
              data: d, 
              category: column_categories.concat(row_categories)
            })
          })
          .rollup(function(d){
            if(chartType !== 'line') {
              domain.push(d.reduce((a, b) => a += (b[aggr] || 0), 0))
            } else {
              d.forEach(sd => domain.push(sd[aggr]))
            }
          })
          .entries(data)
      } else {
        data.forEach(d => {
          let val = d[aggr]
          if(val !== undefined) {
            domain.push(val)
          }
        })
      }

      if(axis === 'y') {
        data_y = [...data_y, ...domain]
        y_title.push(aggr)
      }
      if(axis === 'y2') {
        data_y2 = [...data_y2, ...domain]
        y2_title.push(aggr)
      }
    })
     
    let y_domain = data_y.length ? [Math.min(d3.min(data_y), 0), Math.max(d3.max(data_y) * 1.1, 0)] : []
    let y2_domain = data_y2.length ? [Math.min(d3.min(data_y2), 0), Math.max(d3.max(data_y2) * 1.1, 0)] : []
    if(y_domain[0] === 0 && y_domain[1] === 0) {
      y_domain[1] = 1
    }
    if(y2_domain[0] === 0 && y2_domain[1] === 0) {
      y2_domain[1] = 1
    }
    
    domain_list.push({
      idx,
      y_title,
      y2_title,
      y_domain,
      y2_domain,
      style,
      type,
      sizes
    })
  }) 
  return domain_list
}

function getYScale({domain_list, range}) {
  domain_list.forEach(list => {
    let {y_domain, y2_domain} = list
    list.y_scale = y_domain.length ? d3.scaleLinear().range(range).domain(y_domain).nice() : null
    list.y2_scale = y2_domain.length ? d3.scaleLinear().range(range).domain(y2_domain).nice() : null
  })
  return domain_list
}

function getSpaces({config, x_domain, y_y2_domains}) {
  let isRotated = config.axis_rotated
  let isScatter = config.data_type === 'scatter'
  let column_categories = config.data_column_categories
  let row_categories = config.data_row_categories
  let row_aggressions = config.data_row_aggressions
  let column_aggressions = config.data_column_aggressions
  let has_y2_axis = false
  let has_y_axis = false
  y_y2_domains.forEach(d => {
    let y2_domain = d.y2_domain
    let y_domain = d.y_domain
    if(y2_domain.length) {
      has_y2_axis = true
    }
    if(y_domain.length) {
      has_y_axis = true
    }
  })
  if(isScatter) {
    return {
      width_for_row_cat: row_categories.length * 90,
      width_for_y_axis: 50,
      height_for_col_cat: column_categories.length * 30,
      height_for_col_title: 20,
      height_for_x_axis: 50,
      width_for_cell: 300,
      height_for_cell: 300
    }
  } else if(isRotated) {
    let length = row_categories.length
    return {
      width_for_row_cat: row_categories.slice(0, length-1).length * 90,
      height_for_y_axis: has_y_axis ? 50 : 0,
      height_for_y2_axis: has_y2_axis ? 50 : 0,
      height_for_col_cat: column_categories.length * 30,
      height_for_col_title: 20,
      width_for_x_axis:50,
      width_for_cell: 300,
      height_for_cell: 50
    }
  } else {
    let length = column_categories.length
    return {
      width_for_row_cat: row_categories.length * 90,
      width_for_y_axis: has_y_axis ? 50 : 0,
      width_for_y2_axis: has_y2_axis ? 50 : 0,
      height_for_col_cat: column_categories.slice(0, length-1).length * 30,
      height_for_col_title: 20,
      height_for_x_axis: 50,
      width_for_cell: 50,
      height_for_cell: 300
    }
  }
}

function drawAxis({container, axis, scale, width, height, index, title, isRotated, isScatter, axis_type}) {
  let axis_func = null
  let isYAxis = axis === 'y'
  
  if(isYAxis || axis === 'y2') {
    if(isYAxis) {
      axis_func = isRotated ? d3.axisBottom(scale) : d3.axisLeft(scale)
    } else {
      axis_func = isRotated ? d3.axisTop(scale) : d3.axisRight(scale)
    }
    axis_func.tickFormat(d3.format('.3s'))

    let axis = container.call(axis_func)

    let text = axis
                .append("text")
                .attr("text-anchor", "end")
                .text(title)
                .attr('style', "font-size:12px; fill:#000;")
                .attr('class', 'y-axis-labels')

    if(isRotated) {
      text.attr('transform', `rotate(0)translate(${width}, ${isYAxis ? height : -height})`)

      axis.selectAll(`.tick text`)
        .attr('transform', `rotate(90)translate(${isYAxis ? 10 : -10}, ${isYAxis ? -12 : 12})`)
        .attr('text-anchor', isYAxis ? 'start' : "end")

      if(index !== 0) {
        axis.select(`.tick text`).attr('fill', 'transparent')
      }
    } else {
      text.attr('transform', `rotate(-90)translate(${width}, ${isYAxis ? 12 - height : height})`)

      if(index !== 0) {
        let group = axis.selectAll(`.tick text`)
        d3.select(axis.selectAll(`.tick text`)['_groups'][0][group.size() - 1]).attr('fill', 'transparent')
      }
    }
  }

  if(axis === 'x') {
    let x_is_numeric = ['bin', 'numeric'].includes(axis_type) || isScatter
    let x_axis;

    function formatText(d) {
      let keys = d ? JSON.parse(d) : [];
      return keys.pop() || ''
    }
    
    if(isRotated) {
      axis_func = d3.axisLeft(scale).tickFormat(x_is_numeric ? d3.format('.3s') : formatText)
      x_axis = container.call(axis_func)
    } else {
      axis_func = d3.axisBottom(scale).tickFormat(x_is_numeric ? d3.format('.3s') : formatText)
      x_axis = container.call(axis_func)
    }

    if(x_axis) {
      if(!isRotated) {
        x_axis.append("text")
          .attr("text-anchor", "end")
          .attr('transform', `translate(${width}, ${height-5})`)
          .text(title)
          .attr('style', "font-size: 12px; fill: #000;")
          .attr('class', 'x-axis-title')
      }

      let bands = Math.round((isScatter ? 1 : 16.5 / scale.bandwidth()) + (isRotated ? 0.5 : 0)) || 1
      x_axis
        .selectAll(`.tick text`)
        .attr('style', "font-size: 12px; fill: #000;")
        .attr('fill', (d, i) => (d, i) => (isRotated && (i + 1) % bands) ? 'transparent' : "#000")
        //.attr('transform', `translate()rotate()`)
        //.attr('text-anchor', 'start')

      x_axis
        .selectAll(`.tick line`)
        .attr('stroke', (d, i) => (isRotated && (i + 1) % bands) ? 'transparent' : "#000")
    }
  }
}

function drawGrid({x_range, container, scale, vertical}) {
  if(vertical) {
    container
      .call(
        d3.axisBottom(scale)
          .tickSize(-x_range)
          .tickFormat('')
      )
  } else {
    container
      .call(
        d3.axisLeft(scale)
          .tickSize(-x_range)
          .tickFormat('')
      )
  }

  container.selectAll("path").attr("stroke", "transparent")
  container.selectAll("line").attr("stroke", "rgba(0,0,0,0.2)")
}

export {
  getXDomain,
  getXScale,
  getYDomain,
  getYScale,
  getSpaces,
  drawAxis,
  drawGrid
}