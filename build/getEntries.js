const glob = require('glob')

module.exports = function(targetPath) {
  let entries = {}, pathname, tmp, tmp2;
  glob.sync(targetPath).forEach(function(entry) {
    tmp = entry.split('/').splice(-2)
    tmp2 = entry.substring(0, entry.lastIndexOf('/'))
    pathname = tmp[0]
    entries[pathname] = {
      entry: entry,
      template: `${tmp2}/index.html`,
      filename: `bk_${pathname}.html`,
      // chunks: ['chunk-libs', 'manifest', pathname, 'chunk-elementUI', 'chunk-swiper']
    }
  })
  return entries
}