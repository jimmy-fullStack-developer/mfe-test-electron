module.exports = {
  name: 'Jimmy First Electron APP',
  version: '1.0.0',
  packagerConfig: {
    asar: true,
    targets: {
      darwin: ['dmg'],
    },
  },
  outDir:"./release",
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
