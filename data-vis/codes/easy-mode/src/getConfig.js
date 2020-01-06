const load = function(user_config) {
  let config = {
    bindto: '#chart',
    font_size: 12,
    size_width: 400,
    size_height: 400,
    rotate: false,
    type: 'category', //bin, numeric
    divide_show: false,
    divide_color: 'grey',
    divide_width: 1,
    x_name: '',
    x_grid_show: false,
    x_grid_color: 'grey',
    x_grid_width: 1,
    x_axis_line_show: true,
    x_axis_line_color: 'black',
    x_axis_line_width: 1,
    x_axis_ticks_show: true,
    x_axis_ticks_color: 'grey',
    x_axis_title_show: true,
    x_axis_title_color: 'black',
    y_grid_show: true,
    y_grid_color: 'grey',
    y_grid_width: 1,
    y_axis_line_show: true,
    y_axis_line_color: 'black',
    y_axis_line_width: 1,
    y_axis_ticks_show: true,
    y_axis_ticks_color: 'grey',
    y_axis_title_show: true,
    y_axis_title_color: 'black',
    y2_axis_line_show: true,
    y2_axis_line_color: 'black',
    y2_axis_line_width: 1,
    y2_axis_ticks_show: true,
    y2_axis_ticks_color: 'grey',
    y2_axis_title_show: true,
    y2_axis_title_color: 'black',
    tooltip_background: 'white',
    tooltip_color: 'black',
    padding_left: 50,
    padding_right: 10,
    padding_top: 10,
    padding_bottom: 50,
    data: [],
    /** 
    combined: [
      {
        type: 'bar', //line,
        name: '',
        axis: 'y',
        style: {
          fill: 'blue',
          radius: 5,
          band: 30,
          padding: 5
        }
      },
      {
        type: "line",
        name: '',
        axis: 'y2',
        style: {
          stroke: {
            color: 'blue',
            width: 2
          },
          point: {
            type: 'cross',
            size: 5,
            color: 'red'
          },
          interpolate: false
        }
      },
    ] 
    **/
    combined: []
  }
  let target;
  let keys;
  let read;

  const find = () => {
    const key = keys.shift();

    if (key && target && typeof target === "object" && key in target) {
      target = target[key];
      return find();
    } else if (!key) {
      return target;
    }

    return undefined;
  };

  Object.keys(config).forEach(key => {
    target = user_config;
    keys = key.split("_");
    read = find();

    if (read !== undefined) {
      config[key] = read;
    }
  });

  return config
}

export {load}