// Ignite CLI plugin for ReactNativePopin
// ----------------------------------------------------------------------------

const NPM_MODULE_NAME = 'react-native-popin'
const NPM_MODULE_VERSION = '0.0.1'

// const PLUGIN_PATH = __dirname
// const APP_PATH = process.cwd()
const EXAMPLE_FILE = 'ReactNativePopinExample.js.ejs'

const add = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // install an NPM module and link it
  await ignite.addModule(NPM_MODULE_NAME, { version: NPM_MODULE_VERSION })

  await ignite.addPluginComponentExample(EXAMPLE_FILE, { title: 'ReactNativePopin Example' })

  // Example of copying templates/ReactNativePopin to App/ReactNativePopin
  // if (!filesystem.exists(`${APP_PATH}/App/ReactNativePopin`)) {
  //   filesystem.copy(`${PLUGIN_PATH}/templates/ReactNativePopin`, `${APP_PATH}/App/ReactNativePopin`)
  // }

  // Example of patching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   insert: `import '../ReactNativePopin/ReactNativePopin'\n`,
  //   before: `export default {`
  // })
}

/**
 * Remove yourself from the project.
 */
const remove = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // remove the npm module and unlink it
  await ignite.removeModule(NPM_MODULE_NAME, {  })

  await ignite.removePluginComponentExample(EXAMPLE_FILE)

  // Example of removing App/ReactNativePopin folder
  // const removeReactNativePopin = await context.prompt.confirm(
  //   'Do you want to remove App/ReactNativePopin?'
  // )
  // if (removeReactNativePopin) { filesystem.remove(`${APP_PATH}/App/ReactNativePopin`) }

  // Example of unpatching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   delete: `import '../ReactNativePopin/ReactNativePopin'\n`
  // )
}

// Required in all Ignite CLI plugins
module.exports = { add, remove }

