import {load} from './getConfig.js'

class Chart {
  constructor(user_config) {
    this.config = load(user_config)
  }
  draw() {
    let {
      bindto,
      font_size,
      size_width,
      size_height,
      rotate,
      type,
      divide_show,
      divide_color,
      divide_width,
      x_name,
      x_grid_show,
      x_grid_color,
      x_grid_width,
      x_axis_line_show,
      x_axis_line_color,
      x_axis_line_width,
      x_axis_ticks_show,
      x_axis_ticks_color,
      x_axis_title_show,
      x_axis_title_color,
      y_grid_show,
      y_grid_color,
      y_grid_width,
      y_axis_line_show,
      y_axis_line_color,
      y_axis_line_width,
      y_axis_ticks_show,
      y_axis_ticks_color,
      y_axis_title_show,
      y_axis_title_color,
      y2_axis_line_show,
      y2_axis_line_color,
      y2_axis_line_width,
      y2_axis_ticks_show,
      y2_axis_ticks_color,
      y2_axis_title_show,
      y2_axis_title_color,
      tooltip_background,
      tooltip_color,
      padding_left,
      padding_right,
      padding_top,
      padding_bottom,
      data,
      combined,
    } = this.config

    //get size
    let width = size_width - padding_left - padding_right
    let height = size_height - padding_top - padding_bottom

    let container = d3.select(bindto)
    container.html("")
    //在容器上新增画布
    let svg = container
              .append('svg')
              .attr("width", size_width)
              .attr("height", size_height)

    let tooltip = container
                  .append("div")
                  .attr("class", "tooltip")
                  .attr("style", () => {
                    return `
                      border: 1px solid #fff; 
                      background-color: ${tooltip_background}; 
                      color: ${tooltip_color};
                      box-shadow: 0 1px 3px rgba(0,0,0,0.4); 
                      border-radius: 3px; 
                      padding: 6px; 
                      font-size: ${font_size}px; 
                      position: absolute;
                      z-index: 10;
                      opacity: 0
                    `
                  })
    
    let group_x_axis = svg.append('g').attr('class', 'group-x-axis')
    let group_y_axis = svg.append('g').attr('class', 'group-y-axis')
    let group_y2_axis = svg.append('g').attr('class', 'group-y2-axis')
    let main_container = svg.append('g').attr('class', "group-main")
    let group_x_grid = main_container.append("g").attr("class", "group_x_grid")
    let group_y_grid = main_container.append("g").attr("class", "group_y_grid")
    
    let chart_width = width
    let chart_height = height
    let x_range = [0, width]
    let y_range = [0, -height]
    let x_function = d3.axisBottom
    let y_function = d3.axisLeft
    let y2_function = d3.axisRight
    let x_text_pos = {
      x: width,
      y: padding_bottom - 5,
      rotate: 0,
      anchor: "end"
    }
    let y_text_pos = {
      x: -padding_left + 5,
      y: -height,
      rotate: 90,
      anchor: "start"
    }
    let y2_text_pos = {
      x: padding_right - 10,
      y: -height,
      rotate: 90,
      anchor: "start"
    }
    if(rotate) {
      chart_width = height
      chart_height = width
      x_range = [0, height]
      y_range = [0, width]
      x_function = d3.axisLeft
      y_function = d3.axisTop
      y2_function = d3.axisBottom
      x_text_pos = {
        x: -padding_left + 5,
        y: 0,
        rotate: 90,
        anchor: "start"
      }
      y_text_pos = {
        x: width,
        y: -padding_top + 10,
        rotate: 0,
        anchor: "end"
      }
      y2_text_pos = {
        x: width,
        y: height,
        rotate: 0,
        anchor: "end"
      }
      group_x_axis.attr("transform", `translate(${padding_left}, ${padding_top})`)
      group_y_axis.attr("transform", `translate(${padding_left}, ${padding_top})`)
      group_y2_axis.attr("transform", `translate(${padding_left}, ${size_height - padding_bottom})`)
      main_container.attr("transform", `translate(${padding_left}, ${padding_top + height})`)
    } else {
      group_x_axis.attr("transform", `translate(${padding_left}, ${size_height - padding_bottom})`)
      group_y_axis.attr("transform", `translate(${padding_left}, ${size_height - padding_bottom})`)
      group_y2_axis.attr("transform", `translate(${size_width - padding_right}, ${size_height - padding_bottom})`)
      main_container.attr("transform", `translate(${padding_left}, ${padding_top + height})`)
    }
    
    let x_scale
    let y_scale
    let y2_scale
    let isCat = type === 'category'
    if(isCat) {
      let domain = Array.from(new Set(data.map(d => d[x_name])))
      x_scale = d3.scaleBand().domain(domain).range(x_range)
    } else if(type === 'bin') {
      let max = d3.max(data, d => d.end)
      let min = d3.min(data, d => d.start)
      if(min > 0) min = 0
      x_scale = d3.scaleLinear().domain([min, max]).range(x_range).nice()
    } else {
      let domain = d3.extent(data, d => d[x_name])
      if(domain[0] > 0) domain[0] = 0
      x_scale = d3.scaleLinear().domain(domain).range(x_range).nice()
    }
    let y_domain = []
    let y2_domain = []
    let y_name = []
    let y2_name = []
    combined.forEach(c => {
      let {
        type,
        name, 
        axis,
        style
      } = c 
      if(axis === 'y') {
        let range = d3.extent(data, d => d[name])
        if(y_domain[0] === undefined || y_domain[0] > range[0]) y_domain[0] = range[0]
        if(y_domain[1] === undefined || y_domain[1] < range[1]) y_domain[1] = range[1]
        if(y_domain[0] > 0) y_domain[0] = 0
        y_domain[1] *= 1.01
        y_name.push(name)
      }
      if(axis === 'y2') {
        let range = d3.extent(data, d => d[name])
        if(y2_domain[0] === undefined || y2_domain[0] > range[0]) y2_domain[0] = range[0]
        if(y2_domain[1] === undefined || y2_domain[1] < range[1]) y2_domain[1] = range[1]
        if(y2_domain[0] > 0) y2_domain[0] = 0
        y2_domain[1] *= 1.01
        y2_name.push(name)
      }
    })
    y_scale = d3.scaleLinear().domain(y_domain).range(y_range).nice()
    y2_scale = d3.scaleLinear().domain(y2_domain).range(y_range).nice()
    y_name = y_name.join(' & ')
    y2_name = y2_name.join(' & ')
    
    //x axis
    group_x_axis.call(
      x_function(x_scale)
    )
    .select("path")
    .attr("stroke", x_axis_line_show ? x_axis_line_color : "transparent")
    .attr("stroke-width", x_axis_line_width)

    group_x_axis.selectAll("line")
      .attr("stroke", "transparent")
    
    group_x_axis.selectAll("text")
      .attr("fill", x_axis_ticks_show ? x_axis_ticks_color : "transparent")
    
    x_axis_title_show && group_x_axis.append("text")
          .attr("transform", `translate(${x_text_pos.x}, ${x_text_pos.y})rotate(${x_text_pos.rotate})`)
          .attr("text-anchor", x_text_pos.anchor)
          .text(x_name)
          .attr("fill", x_axis_title_color)
    
    // x grid
    x_grid_show && group_x_grid.call(
      x_function(x_scale)
        .tickSize(-chart_height)
        .tickFormat('')
    )
    .selectAll("line")
    .attr("stroke", (d, i) => (i || isCat) ? x_grid_color : "transparent")
    .attr("stroke-width", x_grid_width)

    group_x_grid.select("path").attr("stroke", "transparent")
    
    // y axis
    group_y_axis.call(
      y_function(y_scale)
    )
    .select("path")
    .attr("stroke", y_axis_line_show ? y_axis_line_color : "transparent")
    .attr("stroke-width", y_axis_line_width)

    group_y_axis.selectAll("line")
      .attr("stroke", "transparent")
    
    group_y_axis.selectAll("text")
      .attr("fill", y_axis_ticks_show ? y_axis_ticks_color : "transparent")

    y_axis_title_show && group_y_axis.append("text")
          .attr("transform", `translate(${y_text_pos.x}, ${y_text_pos.y})rotate(${y_text_pos.rotate})`)
          .attr("text-anchor", y_text_pos.anchor)
          .text(y_name)
          .attr("fill", y_axis_title_color)
    
    // y grid
    y_grid_show && group_y_grid.call(
      y_function(y_scale)
        .tickSize(rotate ? chart_width : -chart_width)
        .tickFormat('')
    )
    .selectAll("line")
    .attr("stroke", (d, i) => i ? y_grid_color : "transparent")
    .attr("stroke-width", y_grid_width)

    group_y_grid
      .select("path")
      .attr("stroke", "transparent")

    if(y2_domain.length) {
      //y2 axis
      group_y2_axis.call(
        y2_function(y2_scale)
      )
      .select("path")
      .attr("stroke", y2_axis_line_show ? y2_axis_line_color : "transparent")
      .attr("stroke-width", y2_axis_line_width)

      group_y2_axis.selectAll("line")
        .attr("stroke", "transparent")
      
      group_y2_axis.selectAll("text")
        .attr("fill", y2_axis_ticks_show ? y2_axis_ticks_color : "transparent")

      y2_axis_title_show && group_y2_axis.append("text")
          .attr("transform", `translate(${y2_text_pos.x}, ${y2_text_pos.y})rotate(${y2_text_pos.rotate})`)
          .attr("text-anchor", y2_text_pos.anchor)
          .text(y2_name)
          .attr("fill", y2_axis_title_color)
    }

    if(divide_show) {
      main_container.append("g")
        .attr("class", "divide-line")
        .append("line")
        .attr("stroke", divide_color)
        .attr("stroke-width", divide_width)
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", width)
        .attr("y2", -height)
    }
    
    let bars = combined.filter(c => c.type === 'bar')
    let lines = combined.filter(c => c.type === 'line')
    let bandwidth = isCat ? x_scale.bandwidth() : 0

    //bars
    main_container.append("g")
        .attr("class", "main-bars")
        .selectAll(".group")
        .data(bars)
        .enter()
        .append("g")
        .attr("class", "group")
        .each(function(bar) {
          let band = bar.style.band - bar.style.padding * 2
          let radius = bar.style.radius
          let local = d3.local()
          let rects = d3.select(this).append('g')
            .selectAll(".rect")
            .data(data)
            .enter()
            .append("g")
            .attr("class", "rect")
            .each(function(d) {
              let x, y, w, h, transform, lessThenZero
              if(rotate) {
                lessThenZero = d[bar.name] < 0
                y = x_scale(d[x_name]) + bandwidth / 2 - height
                w = d[bar.name] < 0 ? y_scale(0) - y_scale(d[bar.name]) : y_scale(d[bar.name]) - y_scale(0)
                w -= radius * 2
                x = d[bar.name] > 0 ? y_scale(0) : y_scale(0) - w
                h = band
                transform = `translate(0, ${- band / 2})`
              } else {
                x = x_scale(d[x_name]) + bandwidth / 2
                y = d[bar.name] > 0 ? y_scale(d[bar.name]) : y_scale(0)
                w = band
                h = d[bar.name] > 0 ? y_scale(0) - y_scale(d[bar.name]) : y_scale(d[bar.name]) - y_scale(0)
                // y += radius * 2
                // h -= radius * 2
                transform = `translate(${- band / 2}, 0)`
              }
              local.set(this, {
                x, y, w, h, transform, lessThenZero
              })
            })
          
          rects.append("rect")
            .attr("x", function() {return local.get(this).x})
            .attr("y", function() {return local.get(this).y})
            .attr("width", function() {return local.get(this).w})
            .attr("height", function() {return local.get(this).h})
            .attr("transform", function() {return local.get(this).transform})
            .attr("fill", bar.style.fill)
            .on("mouseenter", d => {
              let str = ``
              Object.keys(d).forEach(k => {
                str += `<div>${k}: ${d[k]}</div>`
              })
              tooltip.html(str)
                    .style("opacity", 1)
                    .style('display', 'block')
                    .style("left", () => d3.event.offsetX + 10 + 'px')
                    .style("top", () => d3.event.offsetY + 'px')
            })
            .on("mouseout", () => {
              tooltip
                .style("opacity", 0)
                .style('display', 'none')
            })
          
          if(radius) {
            let line = d3.line().curve(d3.curveNatural)
            rects.append("path")
              .attr("transform", function() {return local.get(this).transform})
              .attr("d", function() {
                let {x, y, w, h, lessThenZero } = local.get(this)
                if(rotate) {
                  let line_data = []
                  if(lessThenZero) {
                    line_data = [
                      [x, y],
                      [x - radius * 2, y + h / 2],
                      [x, y + h]
                    ]
                  } else {
                    line_data = [
                      [x+w, y],
                      [x+w + radius * 2, y + h / 2],
                      [x+w, y + h]
                    ]
                  }
                  return line(line_data)
                } else {
                  //
                }
              })
              .attr("fill", bar.style.fill)
          }
        })
    //lines
    main_container.append("g")
        .attr("class", "main-lines")
        .selectAll(".group")
        .data(lines)
        .enter()
        .append("g")
        .attr("class", "group")
        .each(function(line) {
          let scale = line.axis === "y" ? y_scale : y2_scale
          let interpolate = line.style.interpolate
          let {color, size, type} = line.style.point
          let stroke_color = line.style.stroke.color
          let stroke_width = line.style.stroke.width
          let symbol = ""
          if(type === 'cross') {
            symbol = d3.symbolCross
          } else if(type === 'triangle') {
            symbol = d3.symbolTriangle
          } else if(type === 'square') {
            symbol = d3.symbolSquare
          } else {
            symbol = d3.symbolCircle
          }
          let arc = d3.symbol().type(symbol).size(size);

          let valueLine = d3.line()
            .defined((d) => d !== undefined)
            .x((d) => x_scale(d[x_name]) + bandwidth / 2)
            .y((d) => {
              return scale(d[line.name])
            })
          
            if(interpolate) {
              valueLine
                .curve(d3.curveCardinal)
            }
          
          d3.select(this).append("path")
            .attr("d", valueLine(data))
            .attr("fill", "none")
            .attr("stroke", stroke_color)
            .attr("stroke-width", stroke_width)

          if(symbol !== "") {
            d3.select(this).append("g")
              .selectAll("path")
              .data(data)
              .enter()
              .append("path")
              .attr('d', arc)
              .attr("fill", color)
              .attr("transform", d => {
                return `translate(${x_scale(d[x_name]) + bandwidth / 2}, ${scale(d[line.name])})`
              })
              .on("mouseenter", d => {
                let str = ``
                Object.keys(d).forEach(k => {
                  str += `<div>${k}: ${d[k]}</div>`
                })
                tooltip.html(str)
                      .style("opacity", 1)
                      .style('display', 'block')
                      .style("left", () => d3.event.offsetX + 10 + 'px')
                      .style("top", () => d3.event.offsetY + 'px')
              })
              .on("mouseout", () => {
                tooltip
                  .style("opacity", 0)
                  .style('display', 'none')
              })
          }
        })

    svg.selectAll("text").attr("font-size", font_size)
  }
}

// export api
const generate = function(config) {
  const inst = new Chart(config)

  inst.draw()
}

export { generate }
export default generate