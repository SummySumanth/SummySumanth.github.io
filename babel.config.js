module.exports = {
    "plugins": [
      [
        "@dr.pogodin/react-css-modules",
        {
          "webpackHotModuleReloading": true,
          "autoResolveMultipleImports": true,
          "generateScopedName": "[path]__[name]__[local]__[hash:base64:5]",
          "handleMissingStyleName": "warn"
        }
      ]
    ]
  }
   