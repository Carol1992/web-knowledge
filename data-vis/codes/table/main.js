import {updateConfig} from './getConfig.js'
import {setChartSize} from './getSize.js'
import {getNestedList} from './getData.js'
import {drawBorder} from './drawBorder.js'
import {drawLabel} from './drawLabel.js'

export default class Table {
  constructor(user_config) {
    this.config = updateConfig(user_config)
  }
  draw () {
    let config_0 = this.config
    //获取数据
    let { nest_by_column, nest_by_row, all_data } = getNestedList({config: config_0})
    
    //获取容器并清空内容
    let container = d3.select(config_0.bindto)
    container.html("")
    //在容器上新增画布
    let svg = container.append("svg")
                      .style("overflow", "hidden")
                      .style("display", "block")
                      .style('background-color', 'transparent')
    //计算画布大小
    let config = setChartSize({config: config_0, svg, nest_by_column, nest_by_row})
    //更新画布大小
    svg
      .attr('width', config.size_width)
      .attr('height', config.size_height)
    //增加主分组
    let main = svg.append("g")
                  .attr('class', 'main')
                  .attr("transform", 'translate(0, 20)')
    //增加子分组，画表格线和表头
    let group_1 = main.append('g').attr('class', 'group-1')
    let group_2 = main.append('g').attr('class', 'group-2')
    drawBorder({config, nest_by_column, nest_by_row, row_group: group_1, column_group: group_2})
    //计算位移
    let header_height = config.table_header_top_height
    let rowder_width = config.table_header_left_width
    let row_factor = config.data_row_aggressions.length ? 1 : 0
    let col_factor = config.data_column_aggressions.length ? 1 : 0
    let margin_left = (config.data_row_categories.length + row_factor) * rowder_width
    let margin_top = (config.data_column_categories.length + col_factor) * header_height
    //增加子分组，画标签
    let tableContainer = main.append('g').attr('class', 'table')
    tableContainer.attr('transform', `translate(${margin_left}, ${margin_top})`)
    drawLabel({container: tableContainer, data: all_data, config})
  }
}