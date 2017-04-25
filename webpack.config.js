const common = {
  resolve: {
        modulesDirectories: ['node_modules', './components'],
        extensions: ['', '.js', '.jsx'],
      
  }

};

module.exports = {
  entry: './components/main.js',
  output: {
    path: __dirname,
    filename: "index.js"
  },
  devServer:{
    inline: true,
    port: 1111
  },
  module:{
    loaders: [{
        test: /\.js?$/, 
        exclude: /node_modules/,
        loader: 'babel-loader'

    }]
  }
};
