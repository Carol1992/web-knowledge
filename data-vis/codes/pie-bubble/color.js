function getColor({schemes, range, domain, isLinear}) {
  let ordinalColors = d3.scaleOrdinal(schemes || d3.schemeCategory10).range(); //d3.schemeSet3, schemeCategory10
  let linearColors = d3.scaleLinear().range(range || ['#7AC9F5', '#2A5783']).domain(domain).clamp(true)
  let values = []
  let colors = {}
  return function(value) {
    if(isLinear) {
      return linearColors(value)
    } else {
      if(colors[value]) {
        return colors[value]
      } else {
        values.push(value)
        let index = values.length
        let color = ordinalColors[index % ordinalColors.length]
        colors[value] = color
        return color
      }
    }
  }
}

export {getColor}