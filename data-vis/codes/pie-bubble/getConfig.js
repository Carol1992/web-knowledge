import {config} from './config.js'
import {loadConfig} from './loadConfig.js'

let updateConfig = function(user_config) {
  return loadConfig(config, user_config)
}

export {updateConfig}