import {truncateText} from './getSize.js'
const drawLabel = function({container, data, config}) {
  let cell_width = config.table_body_width
  let cell_height = config.table_body_height
  let band = cell_width - config.table_padding_left - config.table_padding_right
  let colored_feature = config.data_colored_feature
  let row_factor = config.data_row_aggressions.length ? 1 : 0
  let col_factor = config.data_column_aggressions.length ? 1 : 0
  let mixin = row_factor && config.data_row_categories.length || col_factor && config.data_column_categories.length
  let labels = row_factor ? config.data_row_aggressions : col_factor ? config.data_column_aggressions : config.data_labeled
  let text_data = d3.local()

  container
    .selectAll('.table-label')
    .data(data)
    .join('text')
    .attr('class', 'table-label')
    .each(function(d) {
      let temp = []
      if(mixin) {
        temp = labels.filter(l => d.values[0][l] !== undefined)
        if(temp.length > 1) {
          temp = temp.filter(l => l !== colored_feature).slice(0, 1)
        }
      } else if(col_factor){
        temp = [labels[d.x]]
      } else if(row_factor) {
        temp = [labels[d.y]]
      } else {
        temp = labels
      }
      let tspan_data = temp.map((l, i) => {
        let index = mixin ? 0 : row_factor ? d.y : col_factor ? d.x : 0
        let value = d.values[index][l]
        
        return {val: value || ''}
      })
      text_data.set(this, {
        tspan_data,
        total_height: tspan_data.length * 24
      })
    })
    .attr('transform', function(d) {
      let total_height = text_data.get(this).total_height
      let x = d.x * cell_width
      let y = d.y * cell_height + (cell_height - total_height) / 2 + 5
      return `translate(${x}, ${y})`
    })
    .on("mouseenter", function(d) {

    })
    .on("mouseout", function() {
      
    })
    .selectAll('tspan')
    .data(function() {
      return text_data.get(this).tspan_data
    })
    .join('tspan')
    .attr('style', `fill: ${config.font_color}; font-size: ${config.font_size}`)
    .attr('x', band + config.table_padding_left)
    .attr('y', (d, i) => {
      return 24 * (i + 0.5)
    })
    .attr('text-anchor', 'end')
    .text((d) => {
      let text = truncateText({
        text: d.val, 
        max_length: band
      })
      return text
    })
}

export {drawLabel}