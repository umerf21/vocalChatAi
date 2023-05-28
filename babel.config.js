module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        // root: ['./src'],
        // alias: {
        //   '@screens': './src/screens',
        //   '@components': './src/components',
        //   '@utils': './src/shared/utils/*',
        //   '@hooks': './src/shared/hooks/*',
        //   '@store': './src/store/*',
        //   '@slices': './src/store/slices/*',
        //   '@contexts': './src/shared/contexts/*',
        //   '@types': './src/types/*',
        //   '@assets': './src/assets/*',
        //   '@images': './src/assets/images/*',
        //   '@navigator': './src/navigator/*',
        //   '@constant': './src/shared/constants',
        //   '@theme': './src/theme',
        // },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
