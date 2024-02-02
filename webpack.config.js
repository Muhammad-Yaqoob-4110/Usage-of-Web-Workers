// webpack.config.js
module.exports = {
    // ... other configurations
    module: {
      rules: [
        // ... other rules
        {
          test: /\.worker\.js$/,
          use: { loader: 'worker-loader' },
        },
      ],
    },
  };