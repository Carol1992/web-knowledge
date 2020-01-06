import {getColor} from './color.js'
function drawBubble({data, container, config}) {
  let color = config.data_colored_feature
  let colored_type = config.data_colored_type
  let size = config.data_sized_feature
  let labels = config.data_labeled
  let opacity = config.color_opacity[0] || 1
  let domain = d3.extent(data.map((d) => d[color]))
  let bubbleColor = getColor({domain, isLinear: colored_type === 'linear'})
  let total_height = labels.length * 16.5

  let width = config.table_body_width
  let height = config.table_body_height
  let order_style = config.order_style
  let arc_size = config.arc_size
  let pack = d3.pack().size([width * arc_size, height * arc_size]).padding(2 * arc_size)
  let root = d3.hierarchy({children: data}).sum(d => {return d[size]})
  if(order_style == -1) {
    root.sort((a, b) => b.value - a.value)
  } else if(order_style == 1) {
    root.sort((a, b) => a.value - b.value)
  }
  let nodes = pack(root).leaves().filter(d => d.r)
  
  let group = container.selectAll('.group')
    .data(nodes)
    //.enter().append('g')
    .join('g')
    .attr('class', 'group')

  group.append('circle')
    .attr('r', d => d.r)
    .attr('fill', d => bubbleColor(d.data[color]))
    .attr("opacity", opacity)
    .attr("transform", d => `translate(${d.x},${d.y})`)
    .on("mouseenter", function(d) {
      
    })
    .on("mouseout", function(d) {
      
    })
    .on('click', function(d, i){
      
    })
  
  group.append('text')
    .attr('style', `fill: ${config.font_color}; font-size: ${config.font_size}`)
    .attr('transform', d => `translate(${d.x}, ${d.y - total_height / 2})`)
    .style('text-anchor', d => 'middle')
    .selectAll('tspan')
    .data(d => {
      return labels.map((v, i) => d.data[v])
    })
    //.enter().append('tspan')
    .join('tspan')
    .attr('x', 0)
    .attr('dy', 16.5)
    .text(d => d)
}

export {drawBubble}