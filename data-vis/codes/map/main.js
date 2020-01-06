import {updateConfig} from './getConfig.js'
import {setChartSize} from './getSize.js'
import {getNestedList} from './getData.js'
import {drawBorder} from './drawBorder.js'
import {drawMap} from './map.js'

export default class Table {
  constructor(user_config) {
    this.config = updateConfig(user_config)
  }
  draw () {
    let config_0 = this.config
    let type = config_0.data_type
    //获取数据
    let { nest_by_column, nest_by_row, all_data } = getNestedList({config: config_0})
    
    //获取容器并清空内容
    let container = d3.select(config_0.bindto)
    container.html("")
    //在容器上新增画布
    let svg = container.append("svg")
                      .style("position", "absolute")
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
    let margin_left = (config.data_row_categories.length) * rowder_width
    let margin_top = (config.data_column_categories.length) * header_height + 20
    //增加子分组，画标签
    let cell_width = config.table_body_width
    let cell_height = config.table_body_height
    let width = config.size_width
    let height = config.size_height
    let tableContainer = container.append('div').attr('class', 'map-mapbox')
    tableContainer.attr('style', `transform: translate(${margin_left}px, ${margin_top}px); width: ${width - margin_left}px; height: ${height - margin_top}px;`)
    
    all_data.forEach(data => {
      let mapContainer = tableContainer.append('div')
        .attr('id', `map-${data.x}-${data.y}`)
        .attr('style', `width: ${cell_width}px; height: ${cell_height}px; display: block; position: absolute;
        transform: translate(${data.x * cell_width}px, ${data.y * cell_height}px)`)
        
      let map = L.map(`map-${data.x}-${data.y}`, {preferCanvas: true});

      drawMap({data, container: mapContainer, config, map})
    })
  }
}