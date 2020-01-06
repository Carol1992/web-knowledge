const fs = require('fs');
const SourceMap = require('source-map');

const { readFileSync } = fs;
const { SourceMapConsumer } = SourceMap;

const rawSourceMap = JSON.parse(readFileSync('path/to/js/map/file', 'utf8'));

SourceMapConsumer.with(rawSourceMap, null, consumer => {
  const pos = consumer.originalPositionFor({
    line: 1,
    column: 982
  });

  console.log(pos);
});

//找到发生错误的文件和位置
// { 
//   source: 'path/to/index.js',
//   line: 8,
//   column: 7,
//   name: 'hello' 
// }