const hash = require("string-hash");
const path = require("path");

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      include: path.resolve(__dirname, "src"),
      use: ({ resource }) => [
        {
          loader: "babel-loader?cacheDirectory"
        },
        {
          loader: "react-svg-loader",
          options: {
            svgo: {
              plugins: [
                {
                  cleanupIDs: {
                    prefix: `svg${hash(path.relative(__dirname, resource))}`
                  }
                }
              ]
            }
          }
        }
      ]
    });

    return config;
  }
};
