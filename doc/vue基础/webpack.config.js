const path=require('path')

module.exports={
  entry:"./src/main.js",
  output:{
    path:path.resolve(__dirname+'./dist'),
    filename:'bundle.js'
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        // loader:css-loader,
        use:[
          "style-loader",
          "css-loader",
          // {
          //   loader:"postcss-loader",
          //   options:{
          //     postcssOptions:{
          //       Plugins:[
          //         require("autoprefixer")
          //       ]
          //     }
          //   }
          // }
          "postcss-loader"
        ]
      },
      {
        test:/\.less$/,
        use:[
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      }
    ]
  }
}