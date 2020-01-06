import {updateConfig} from './getConfig.js'
import {setChartSize} from './getSize.js'
import {getNestedList} from './getData.js'
import {drawBorder} from './drawBorder.js'
import {getColor} from './color.js'
import {getSize} from './size.js'
import {
  getXDomain,
  getXScale,
  getYDomain,
  getYScale,
  getSpaces,
  drawAxis,
  drawGrid
} from './axis.js'

export default class Table {
  constructor(user_config) {
    this.config = updateConfig(user_config)
  }
  draw () { 
    let config_0 = this.config
    let type = config_0.data_type
    let isScatter = type === 'scatter'
    let isRotated = config_0.axis_rotated
    //获取数据
    let { nest_by_column, nest_by_row } = getNestedList({config: config_0})
    //获取容器并清空内容
    let container = d3.select(config_0.bindto)
    container.html("")
    //在容器上新增画布
    let svg = container
              .append('svg')
              .style("overflow", "hidden")
              .style("display", "block")
              .style('background-color', 'cornsilk')
     /*
      一、柱子、线:
      1. 旋转坐标轴：否
      width_for_row_cat: 
      width_for_y_axis:
      width_for_y2_axis:
      height_for_col_cat:
      height_for_col_title:
      height_for_x_axis:
      width_for_cell: 50
      height_for_cell: 300

      2. 旋转坐标轴：是
      width_for_row_cat: 
      height_for_y_axis:
      height_for_y2_axis:
      height_for_col_cat:
      height_for_col_title:
      width_for_x_axis:
      width_for_cell: 300
      height_for_cell: 50

      二、散点:
      width_for_row_cat: 
      width_for_y_axis:
      height_for_col_cat:
      height_for_col_title:
      height_for_x_axis:
      width_for_cell: 300
      height_for_cell: 300
    */
    let column_categories = config_0.data_column_categories
    let row_categories = config_0.data_row_categories
    let row_aggressions = config_0.data_row_aggressions
    let column_aggressions = config_0.data_column_aggressions
    let data_combined = config_0.data_combined
    let data = config_0.data_json
    let x_domain = getXDomain({
      isScatter, 
      nested_data: isRotated ? nest_by_row : isScatter ? data :  nest_by_column, 
      aggressions: column_aggressions
    })
    let y_y2_domains = getYDomain({
      data_combined, 
      aggressions: isRotated ? column_aggressions : row_aggressions , 
      column_categories, 
      row_categories
    })
    let spaces = getSpaces({config: config_0, x_domain, y_y2_domains})
    //计算画布大小
    //配置不提供width, height的话，这边要计算；提供的话要计算cell_width, cell_height
    let total_rows = nest_by_row.length * Math.max(row_aggressions.length, 1) || 1
    let total_columns = nest_by_column.length * Math.max(column_aggressions.length, 1) || 1
  
    let config = setChartSize({config: config_0, svg, spaces, total_rows, total_columns})
    let size_height = config.size_height
    let size_width = config.size_width
    //更新画布大小
    svg
      .attr('width', size_width)
      .attr('height', size_height)

    //增加子分组，画表格线和表头
    let group_rows = svg.append('g').attr('class', 'group-rows')
    let group_columns = svg.append('g').attr('class', 'group-columns')
    drawBorder({
      config, 
      nest_by_column, 
      nest_by_row, 
      row_group: group_rows, 
      column_group: group_columns, 
      spaces
    })
    
    //增加子分组，画坐标轴
    let group_x_axis = svg.append('g').attr('class', 'group-x-axis')
    let group_y_axis = svg.append('g').attr('class', 'group-y-axis')
    let group_y2_axis = svg.append('g').attr('class', 'group-y2-axis')
    //增加子分组，画主图
    let main_container = svg.append('g').attr('class', "svg-main")

    let x_range = 0
    let y_range = 0
    let x_height = 0
    let y_width = 0
    let y2_width = 0
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
      group_y2_axis.remove()
      x_range = width_for_cell
      x_height = height_for_x_axis
      y_range = height_for_cell
      y_width = width_for_y_axis
      
      group_x_axis
        .attr('transform', `translate(${width_for_row_cat + y_width}, ${size_height - x_height})`)
       
      group_y_axis
        .attr('transform', `translate(${width_for_row_cat + width_for_y_axis}, ${height_for_col_title + height_for_col_cat + y_range + 10})`)

      main_container
        .attr('transform', `translate(${width_for_row_cat + y_width}, ${height_for_col_title + height_for_col_cat + 10})`)

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
      if(height_for_y_axis === 0) {
        group_y_axis.remove()
      }
      if(height_for_y2_axis === 0) {
        group_y2_axis.remove()
      }
      x_range = height_for_cell * total_rows
      x_height = width_for_x_axis
      y_range = width_for_cell
      y_width = height_for_y_axis
      y2_width = height_for_y2_axis
      group_x_axis
        .attr('transform', `translate(${width_for_row_cat + width_for_x_axis}, ${height_for_col_title + height_for_col_cat + height_for_y2_axis})`)
      
      group_y_axis
        .attr('transform', `translate(${width_for_row_cat + width_for_x_axis}, ${size_height - height_for_y_axis - 10})`)
      
      group_y2_axis
        .attr('transform', `translate(${width_for_row_cat + width_for_x_axis}, ${height_for_col_title + height_for_col_cat + height_for_y2_axis})`)

      main_container
        .attr('transform', `translate(${width_for_row_cat + width_for_x_axis}, ${height_for_col_title + height_for_col_cat + height_for_y2_axis})`)
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
      if(width_for_y_axis === 0) {
        group_y_axis.remove()
      }
      if(width_for_y2_axis === 0) {
        group_y2_axis.remove()
      }
      x_range = width_for_cell * total_columns
      x_height = height_for_x_axis
      y_range = height_for_cell
      y_width = width_for_y_axis
      y2_width = width_for_y2_axis
      group_x_axis
        .attr('transform', `translate(${width_for_row_cat + width_for_y_axis}, ${size_height - height_for_x_axis})`)
    
      group_y_axis
        .attr('transform', `translate(${width_for_row_cat + width_for_y_axis}, ${height_for_col_title + height_for_col_cat + y_range + 10})`)

      group_y2_axis
        .attr('transform', `translate(${size_width - width_for_y2_axis -10}, ${height_for_col_title + height_for_col_cat + y_range + 10})`)

      main_container
        .attr('transform', `translate(${width_for_row_cat + width_for_y_axis}, ${height_for_col_title + height_for_col_cat + 10})`)
    }
    
    let x_scale = getXScale({domain: x_domain, range: [0, x_range], linear: isScatter})
    let title = isRotated ? row_categories[row_categories.length-1] : column_categories[column_categories.length-1]
    let y_y2_scale = getYScale({domain_list: y_y2_domains, range: [0, isRotated ? y_range : -y_range]})

    if(isScatter) {
      let col = column_aggressions[0]
      let row = row_aggressions[0]
      let y_scale = y_y2_scale[0].y_scale
      let y_title = y_y2_scale[0].y_title
      let style = y_y2_scale[0].style[row]
      let size = y_y2_scale[0].sizes[row]
      let domain = y_scale.domain()
      let min_radius = config.point_size;
      let max_radius = min_radius * 8;
      let mid_radius = max_radius / 3;
      let range = size !== undefined ? [min_radius, max_radius] : [mid_radius, mid_radius]
      let get_color = getColor({domain, isLinear: style.type === 'linear'})
      let get_size = getSize({domain, range})
      let chart_data = []
      nest_by_column.forEach((c, ci) => {
        nest_by_row.forEach((r, ri) => {
          chart_data.push({
            x_index: ci,
            y_index: ri,
            values: c.values.filter(v => v.cross === r.key)
          })
        })
      })
      
      let axis_x = group_x_axis.append("g")
          .attr("class", "scatter-x-axis")
          .selectAll(".axis-group")
          .data(nest_by_column)
          .join("g")
          .attr("class", "axis-group")
          .attr("transform", (d, index) => {
            return `translate(${y_range * index}, 0)`
          })
          .each(function(d) {
            drawAxis({
              axis: 'x', 
              scale: x_scale, 
              container: d3.select(this), 
              width: x_range, 
              height: x_height, 
              title, 
              isScatter, 
              axis_type: config.axis_x_type
            })
          })
      
      let axis_y = group_y_axis.append("g")
        .attr("class", "scatter-y-axis")
        .selectAll(".axis-group")
        .data(nest_by_row)
        .join("g")
        .attr("class", "axis-group")
        .attr("transform", (d, index) => {
          return `translate(0, ${y_range * index})`
        })
        .each(function(d, idx) {
          drawAxis({
            index: idx,
            axis: 'y', 
            scale: y_scale, 
            container: d3.select(this), 
            width: y_range, 
            height: y_width, 
            title: y_title.join('/'),
            isScatter, 
          })
        })

      let group = main_container.append("g")
        .selectAll(".group")
        .data(chart_data)
        .join("g")
        .attr("class", "group")
        .attr("transform", d => {
          let start_x1 = x_range * d.x_index
          let start_y1 = y_range * d.y_index
          return `translate(${start_x1}, ${start_y1})`
        })

      let scatter_divide_line = group.append("path")
        .attr("d", d => {
          return `M 0 ${y_range}  L ${x_range} 0`
        })
        .attr("stroke", "#000")
      
      let scatter_grid_v = group.append("g")
        .call(
          d3.axisBottom(x_scale)
            .tickSize(x_range)
            .tickFormat('')
        )
        .selectAll("line")
        .attr("stroke", "rgba(0,0,0,0.2)")

      let scatter_grid_h = group.append("g")
        .attr("transform", d => {
          return `translate(0, ${y_range})`
        })
        .call(
          d3.axisLeft(y_scale)
            .tickSize(-y_range)
            .tickFormat('')
        )
        .selectAll("line")
        .attr("stroke", "rgba(0,0,0,0.2)")
      
      let scatter_point = group.append("g")
          .attr("transform", (d) => {
            return `translate(0, ${y_range})`
          })
      
      let points = scatter_point.append("g")
          .attr("class", "points")
          .selectAll("circle")
          .data(d => d.values)
          .join("circle")
          .attr("cx", d => x_scale(d[col]))
          .attr("cy", d => y_scale(d[row]))
          .attr("fill", d => get_color(d[style.feature]))
          .attr("r", d => get_size(d[size.feature]))
    } else {
      let cats = isRotated ? nest_by_column : nest_by_row
      let chart_data = []
      cats.forEach((c, ci) => {
        y_y2_scale.forEach((y, yi) => {
          chart_data.push({
            x_index: ci,
            y_index: yi,
            scale_info: y
          })
        })
      })
      
      let group = main_container.append("g")
        .attr("class", "main-svg")
        .selectAll(".group")
        .data(chart_data)
        .join("g")
        .attr("class", "group")
      
      group.append("g")
        .attr("class", "grid-group")
        .attr("transform", (d, index) => {
          return isRotated ? `translate(${y_range * (index)}, ${x_range})` : `translate(0, ${y_range * (index+1)})`
        })
        .each(function(d) {
          let {
            y_scale,
          } = d.scale_info
          drawGrid({
            x_range: x_range, 
            container: d3.select(this), 
            scale: y_scale, 
            vertical: isRotated ? true : false,
          })
        })

      group.append("g")
        .attr("class", "chart")
        .attr("transform", (d, index) => {
          return isRotated ? `translate(${y_range * (index+1)}, 0)` : `translate(0, ${y_range * (index+1)})`
        })
        .each(function(d, i) {
          
        })

      drawAxis({
        axis: 'x', 
        scale: x_scale, 
        container: group_x_axis, 
        width: x_range, 
        height: x_height, 
        title, 
        isRotated, 
        axis_type: config.axis_x_type
      })

      let axis = group_y_axis.append("g")
        .attr("class", "y-axis")
        .selectAll(".axis-group")
        .data(chart_data)
        .join("g")
        .attr("class", "axis-group")
      
      let axis2 = group_y2_axis.append("g")
        .attr("class", "y2-axis")
        .selectAll(".axis-group")
        .data(chart_data)
        .join("g")
        .attr("class", "axis-group")
      
      axis.append("g")
        .attr("class", "y")
        .attr("transform", (d, index) => {
          return isRotated ? `translate(${y_range * index}, 0)` : `translate(0, ${y_range * index})`
        })
        .each(function(d) {
          let {
            idx,
            y_domain,
            y_scale,
            y_title,
          } = d.scale_info

          if(y_domain.length) {
            drawAxis({
              index: idx,
              axis: 'y', 
              scale: y_scale, 
              container: d3.select(this), 
              width: y_range, 
              height: y_width, 
              title: y_title.join('/'),
              isRotated
            })
          }
        })

      axis2.append("g")
        .attr("class", "y2")
        .attr("transform", (d, index) => {
          return isRotated ? `translate(${y_range * index}, 0)` : `translate(0, ${y_range * index})`
        })
        .each(function(d) {
          let {
            idx,
            y2_domain,
            y2_scale,
            y2_title,
          } = d.scale_info
          if(y2_domain.length) {
            drawAxis({
              index: idx,
              axis: 'y2', 
              scale: y2_scale, 
              container: d3.select(this), 
              width: y_range, 
              height: y2_width, 
              title: y2_title.join('/'),
              isRotated, 
              isScatter, 
            })
          }
        })
      
        

        

      // cats.forEach((cat, cat_idx) => {
      //   let group_cat_y
      //   let group_cat_y2
      //   let translate = cat_idx === 0 ? 0 : y_y2_scale.length * y_range
      //   let translateY = `translate(${isRotated ? translate : 0}, ${isRotated ? 0 : translate})`
      //   if(group_y_axis) {
      //     group_cat_y = group_y_axis.append('g')
      //                     .attr('class', `group-cat-y-${cat_idx}`)
      //                     .attr('transform', translateY)
      //   }
      //   if(group_y2_axis) {
      //     group_cat_y2 = group_y2_axis.append('g')
      //                     .attr('class', `group-cat-y2-${cat_idx}`)
      //                     .attr('transform', translateY)
      //   }
      //   let main = main_container.append("g")
      //               .attr("class", `small-multiples-${cat_idx}`)
      //               .attr("transform", translateY)
                    
      //   y_y2_scale.forEach((scale_info, scale_info_index) => {
      //     let {
      //       idx,
      //       y2_domain,
      //       y2_scale,
      //       y2_title,
      //       y_domain,
      //       y_scale,
      //       y_title,
      //     } = scale_info
      //     let translate = y_range * scale_info_index
      //     let translateY = `translate(${isRotated ? translate : 0}, ${isRotated ? 0 : translate})`
      //     if(y_domain.length) {
      //       let g = group_cat_y.append('g')
      //                          .attr('class', `axis-grid-${idx}`)
      //                          .attr('transform', translateY)
      //       let group_y = g.append('g').attr('class', `axis-y`)
      //       let group_grid = g.append('g').attr('class', `grid-y`)
      //       drawAxis({
      //         index: idx,
      //         axis: 'y', 
      //         scale: y_scale, 
      //         container: group_y, 
      //         width: y_range, 
      //         height: y_width, 
      //         title: y_title.join('/'),
      //         isRotated, 
      //         isScatter, 
      //       })
      //       drawGrid({
      //         x_range: isScatter ? x_range * total_columns : x_range, 
      //         container: group_grid, 
      //         scale: y_scale, 
      //         vertical: isRotated ? true : false,
      //       })
      //     } 
      //     if(y2_domain.length) {
      //       let group_y2 = group_cat_y2.append('g')
      //                     .attr('class', `axis-y2-${idx}`)
      //                     .attr('transform', translateY)
      //       drawAxis({
      //         index: idx,
      //         axis: 'y2', 
      //         scale: y2_scale, 
      //         container: group_y2, 
      //         width: y_range, 
      //         height: y2_width, 
      //         title: y2_title.join('/'),
      //         isRotated, 
      //         isScatter, 
      //       })
      //     }
  
      //     // main.append("rect")
      //     //     .attr("transform", translateY)
      //     //     .attr("fill", "red")
      //     //     .attr("width",  isRotated ? y_range : x_range)
      //     //     .attr("height", isRotated ? x_range : y_range)
      //   })
      // })

      
    }
  }
}