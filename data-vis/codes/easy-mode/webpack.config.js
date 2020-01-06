const path = require('path');

var config = {
    //Add common Configuration
    watch: true,
};

var config_1 = Object.assign({}, config, {
    name: "ai_1",
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, '../../client/public'),
      filename: 'ai.js',
      library: 'ai',
      libraryTarget: "umd",
      umdNamedDefine: true,
    },
    externals: {
      d3: {
        commonjs: 'd3',
        commonjs2: 'd3',
        amd: 'd3',
        root: 'd3'
      }
    },
    //mode: 'development'
});
var config_2 = Object.assign({}, config,{
    name: "ai_2",
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'ai.js',
      library: 'ai',
      libraryTarget: "umd",
      umdNamedDefine: true,
    },
    mode: 'development',
    externals: {
      d3: {
        commonjs: 'd3',
        commonjs2: 'd3',
        amd: 'd3',
        root: 'd3'
      }
    }
});

// Return Array of Configurations
module.exports = [
  config_1, config_2      
];