const BabelPresetEnv = require('@babel/preset-env');
const BabelPresetTypescript = require('@babel/preset-typescript');
const BabelPluginClassProperties = require('@babel/plugin-proposal-class-properties');

module.exports = {
  presets: [
    BabelPresetEnv,
    BabelPresetTypescript
  ],
  plugins: [
    BabelPluginClassProperties
  ]
};