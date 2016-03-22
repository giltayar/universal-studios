module.exports = {
    entry: "./src/public/app.jsx",
    output: {
        path: __dirname + "/lib/public",
        filename: "bundle.js"
    },
    module: {
      loaders: [
          {
              loader: 'babel-loader',
              test: /\.jsx?$/,
              include: __dirname + "/src"
          }
      ]
    }
};