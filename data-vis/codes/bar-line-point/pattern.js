function createPatterns({fill, type, id, defs}) {
  let pattern = defs.append('pattern')
    .attr("patternUnits", "userSpaceOnUse")
    .attr('id', id)
    .attr("width", "6")
    .attr("height", "6");

  let g = pattern
    .append("g")
    .attr("fill-rule", "evenodd")
    .attr("stroke-width", 1)
    .append("g")
    .attr('class', 'pattern')
    .attr("fill", fill || 'rgb(225, 127, 8)');

  switch(type) {
    case 'zuo':
      //左斜纹
      g.append("polygon").attr("points", "6 5 6 6 5 6");
      g.append("polygon").attr("points", "5 0 6 0 0 6 0 5");
      break;
    case 'you':
      //右斜纹
      g.append("polygon").attr("points", "6 0 6 1 5 0");
      g.append("polygon").attr("points", "0 0 6 6 5 6 0 1");
      break;
    case 'heng':
      //横纹
      g.append('polygon').attr('points', '0 0 6 0 6 1 0 1')
      break;
    case 'shu':
      //竖纹
      g.append('polygon').attr('points', '0 0 1 0 1 6 0 6')
      break;
    case 'ge':
      //格子
      g.append('polygon').attr('points', '0 0 6 0 6 1 0 1')
      g.append('polygon').attr('points', '0 0 1 0 1 6 0 6')
      break;
    case 'zha':
      //栅栏
      g.append("polygon").attr("points", "6 5 6 6 5 6");
      g.append("polygon").attr("points", "5 0 6 0 0 6 0 5");
      g.append("polygon").attr("points", "6 0 6 1 5 0");
      g.append("polygon").attr("points", "0 0 6 6 5 6 0 1");
      break;
    case 'fill':
      //实填充
      g.append('polygon')
        .attr('points', '0 0 6 0 6 6 0 6')
        .attr('fill', fill)
      break
     default:
      g.append("polygon");
  }
  return pattern.node()
}

export {createPatterns}