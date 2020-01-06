import {loadConfig} from './loadConfig.js'

let updateConfig = function(user_config) {
  let config = {
    bindto: '#chart',
    size_width: undefined,
    size_height: undefined,
    container_width: undefined,
    container_height: undefined,
    font_size: 12,
    font_color: '#000',
    data_json: [],
    data_type: 'bar',
    /* data_combined
    {
      axis: 'y',
      show: true,
      aggr: '',
      title: '',
      color: {
        feature: '',
        type: '',
        stacked: false,
        opacity: 1,
        schemes: [],
        patterns: [],
        range: []
      },
      labels: []
      type: 'bar', //line, scatter
      data: []
    } 
    */
    data_combined: [],
    data_row_categories: [],
    data_row_aggressions: [],
    data_column_categories: [],
    data_column_aggressions: [],
    data_colored_feature: undefined,
    data_colored_type: undefined, //linear or ordinal
    data_labeled: [], //['sum(sales)', 'sum(profits)']
    table_inner_color: '#ccc',
    table_inner_width: 1,
    table_padding_top: 0,
    table_padding_left: 0,
    table_padding_bottom: 0,
    table_padding_right: 0,
    table_header_top_height: 35,
    table_header_left_width: 100,
    table_header_auto: false,
    tooltip_show: true,
    axis_zoom_scale: 1,
    axis_zoom_translate: undefined,
    axis_zoom_panning: null,
    axis_zoom_enable: false,
    axis_rotated: false,
    axis_percent: false, //坐标轴使用百分比展示
    axis_x_show: true,
    axis_x_type: undefined, 
    line_size: 1,
    line_pattern: "circle", //rect, ...
    point_size: 2,
    bar_padding_inner: 0,
    bar_padding_outter: 0,
  }
  return loadConfig(config, user_config)
}

export {updateConfig}