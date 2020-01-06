const loadConfig = function(basic_config, user_config) {
  const thisConfig = basic_config
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

  Object.keys(thisConfig).forEach(key => {
    target = user_config;
    keys = key.split("_");
    read = find();

    if (read) {
      thisConfig[key] = read;
    }
  });

  return thisConfig
}

export {loadConfig}