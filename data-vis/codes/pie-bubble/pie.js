import {getColor} from './color.js'
function drawPie({data, container, config}) {
  let color = config.data_colored_feature
  let colored_type = config.data_colored_type
  let size = config.data_sized_feature
  let labels = config.data_labeled
  let opacity = config.color_opacity[0] || 1
  let midAngle = function(d) { return d.startAngle + (d.endAngle - d.startAngle) / 2; } 
  let domain = d3.extent(data.map((d) => d[color]))
  let pieColor = getColor({domain, isLinear: colored_type === 'linear'})
  let total_height = labels.length * 16.5

  let width = config.table_body_width
  let height = config.table_body_height
  let radius = d3.min([width, height]) / 2 * config.arc_size
  let arc = d3.arc().outerRadius(radius * 0.7).innerRadius(radius * config.arc_innerRadius).cornerRadius(2).padAngle(0.04).padRadius(50)
  let label_arc = d3.arc().outerRadius(radius).innerRadius(radius * 0.5)
  let pie = d3.pie().value(d => d[size])
  let new_data = pie(data).filter(d => d.endAngle - d.startAngle > 0);
  
  let group = container.selectAll('.group')
    .data(new_data)
    //.enter().append('g')
    .join('g')
    .attr('class', 'group')
    .attr('transform', `translate(${width / 2}, ${height / 2})`)

  group.append('path')
    .attr('d', arc)
    .style('fill', (d, i) => pieColor(d.data[color]))
    .attr("opacity", opacity)
    .on("mouseenter", function(d) {
      
    })
    .on("mouseout", function(d) {
      
    })
    .on('click', function(d, i){
      
    })

  group.append('polyline')
    .attr('points', function(d) {
      let pos_label = label_arc.centroid(d);
      let pos = [radius * (midAngle(d) < Math.PI ? 1 : -1), pos_label[1]]
      return [arc.centroid(d), pos_label, pos]
    })
    .attr('opacity', 0.3)
    .attr('fill', 'none')
    .attr('stroke-width', '1px')
    .attr('stroke', '#000')
  
  group.append('text')
    .attr('style', `fill: ${config.font_color}; font-size: ${config.font_size}`)
    .attr('transform', function(d) {
        let pos = label_arc.centroid(d);
        pos[0] = radius * (midAngle(d) < Math.PI ? 1 : -1) + (midAngle(d) < Math.PI ? 3 : -3)
        pos[1] = pos[1] - total_height / 2 - (labels.length === 1 ? 5 : 0)
        return 'translate(' + pos + ')';
    })
    .style('text-anchor', d => midAngle(d) < Math.PI ? 'start' : 'end')
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

export {drawPie}