function getSize({range, domain}) {
  let scale = d3.scaleLinear().range(range).domain(domain).clamp(true)

  return function(d) {
    return Math.max(scale(d), 0)
  }
}

export {getSize}