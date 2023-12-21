const modulesFiles = require.context('./api', true, /\.js$/)

export default modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default || value

  return modules
}, {})
