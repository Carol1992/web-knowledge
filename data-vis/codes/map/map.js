import {getColor} from './color.js'
import {getSize} from './size.js'
function drawMap({data, container, config, map}) {
  let values = data.values
  let x_aggressions = config.data_column_aggressions
  let y_aggressions = config.data_row_aggressions
  let color = config.data_colored_feature
  let colored_type = config.data_colored_type
  let size = config.data_sized_feature
  let labels = config.data_labeled
  let opacity = config.color_opacity[0] || 1
  let map_center = config.map_center
  let zoom_level = config.map_level
  let map_change = config.map_change
  let valid_values = values.filter(v => {
    let pos_x = v[x_aggressions[0]]
    let pos_y = v[y_aggressions[0]]
    return pos_x !== undefined && pos_y !== undefined
  })
  let domain = d3.extent(values.map((d) => d[color]))
  let min_radius = config.point_size;
  let max_radius = min_radius * 8;
  let mid_radius = max_radius / 3;
  let range = size !== undefined ? [min_radius, max_radius] : [mid_radius, mid_radius]
  let mapColor = getColor({domain, isLinear: colored_type === 'linear'})
  let mapSize = getSize({domain, range})

  //map.setView(map_center, zoom_level)
  
  let latlngs = valid_values.map(v => {
    return [v[x_aggressions[0]], v[y_aggressions[0]]]
  })
  
  if(latlngs.length) {
    let polyline = L.polyline(latlngs)
    map.fitBounds(polyline.getBounds()).panInsideBounds(polyline.getBounds())
  }

  map.on('zoomend', function() {
    let zoom_level = map.getZoom();
    if(map_change !== undefined && Array.prototype.toString.call(map_change) === '[object Function]') map_change('zoom', zoom_level)

    setTimeout(() => {
      addLabels();
    }, 0)
  })

  map.on('moveend', function() {
    let move_center = [map.getCenter().lat, map.getCenter().lng]
    if(map_change !== undefined && Array.prototype.toString.call(map_change) === '[object Function]') map_change('move', move_center)
  })

  // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
  // { maxZoom: 18,
  //   attribution: '<a href="https://www.openstreetmap.org/">OpenStreetMap</a> © <a href="https://www.mapbox.com/">Mapbox</a>',
  //   id: 'mapbox.light', //street, light, dark, satellite, outdoors 
  //   accessToken: 'pk.eyJ1IjoiY2Fyb2xseW5uIiwiYSI6ImNqbHJ0Znp5dDA4dTYzdnJ4Z2dtZmF6anAifQ.cXeSRUkVZ4wZ8l35rJvmlA'
  // }).addTo(map);
  //provider options: OpenStreetMap.BlackAndWhite, OpenStreetMap.DE, OpenStreetMap.Mapnik, CartoDB.VoyagerNoLabels, CartoDB.PositronNoLabels
  L.tileLayer.provider('CartoDB.PositronNoLabels').addTo(map); 
  
  let all_circles = []
  valid_values.forEach((v) => {
    let color_feature = v[color]
    let size_feature = v[size]
    let fill_color = mapColor(color_feature)
    let fill_size = size_feature !== undefined ? mapSize(size_feature) : mid_radius
    let position = [v[x_aggressions[0]], v[y_aggressions[0]]]
    
    let circle = L.circleMarker(position, {
      color: fill_color,
      fillColor: fill_color,
      fillOpacity: opacity,
      radius: fill_size * (map._zoom > 5 ? map._zoom / 5 : 1),
      stroke: false,
      className: 'map-point',
      labels: labels.map(l => v[l])
    }).addTo(map);

    let str = ''
    Object.keys(v).forEach(s => {
      str += `<div>${s}: ${v[s]}</div>`
    })

    circle.on('mouseover', function() {
      L.tooltip({
        permanent: false,
        direction: 'auto',
        className: 'map-tooltip'
      })
      .setLatLng(position)
      .setContent(str)
      .addTo(map);
    })

    circle.on('mouseout', function() {
      container.selectAll('.map-tooltip').remove()
    })

    all_circles.push(circle)
  })

  all_circles.sort((a, b) => b._point.y - a._point.y)

  addLabels()
  function addLabels() {
    container.selectAll('.map-labels').remove()
    
    all_circles.forEach((circle,i) => {
      let labels = circle.options.labels
      let position = circle._latlng
      let max_txt = 0;
      labels.forEach((l) => {
        max_txt = l.length > max_txt ? l.length : max_txt
      })

      let x_left = circle._point.x - max_txt * 8;
      let x_right = circle._point.x + max_txt * 8;
      let y_bottom = circle._point.y + labels.length * 20 + 20;

      let slice_begin = 0
      for(let k = 0; k < i; k++) {
        if(all_circles[k]._point.y <= y_bottom) {
          slice_begin = k;
          break;
        }
      }

      let slice_data = all_circles.slice(i - slice_begin > 100 ? (i - 100) : slice_begin, i)

      let excludes = slice_data.filter((v, idx) => {
        return idx !== i && (v._point.x >= x_left && v._point.x <= x_right && v._point.y <= y_bottom)
      });

      if(excludes.length) return
        
      let str = ``
      labels.forEach((l, k) => {
        str += `<div>${l}</div>`
      })

      L.tooltip({
        permanent: true,
        direction: 'bottom',
        className: 'map-labels'
      })
      .setContent(str)
      .setLatLng(position)
      .addTo(map)
    })
    container.selectAll('.map-labels').style("background-color", "transparent")
    container.selectAll('.map-labels').style("border", "none")
    container.selectAll('.map-labels').style("box-shadow", "none")
  }
}

export {drawMap}