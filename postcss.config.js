module.exports = {
    plugins: [
      [
        'postcss-preset-env',
        {
          "generateScopedName": "[path]__[name]__[local]__[hash:base64:5]"
        },
      ],
    ]
  }