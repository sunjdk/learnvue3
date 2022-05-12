我们已经可以通过css-loader来加载css文件了
但是你会发现这个css在我们的代码中并没有生效(页面没有效果)。这是为什么呢?
因为css-loader只是负责将.css文件进行解析，并不会将解析之后的css插入到页面中;如果我们希望再完成插入style的操作，那么我们还需要另外一个loader，就是style-loader ;


npm install style-loader -D

less-loader

npm install -less -D
npm install -less-loader -D
npx lessc ./test.less dome.css
npx lessc ./src/css/title.less  ./src/css/title.css


什么是PostCSS呢?
PostCSS是一个通过JavaScript来转换样式的工具;
这个工具可以帮助我们进行一些CSS的转换和适配，比如自动添加浏览器前缀、css样式的重置;口但是实现这些功能，我们需要借助于PostCSS对应的插件;

如何使用PostCSS呢?主要就是两个步骤:
口第一步:查找PostCSS在构建工具中的扩展，比如webpack中的postcss-loader ;口第二步:选择可以添加你需要的PostCSS相关的插件;

当然，我们能不能也直接在终端使用PostCSS呢?
口也是可以的，但是我们需要单独安装一个工具postcss-cli ;

npm install postcss postcss-cli -D
npm install postcss-loader -D
autoprefix插件

npm install autoprefixer -D
npx postcss --use autoprefixer -o end.css ./src/css/style.css



事实上，在配置postcss-loader时，我们配置插件并不需要使用autoprefixer。我们可以使用另外一个插件: postcss-preset-env
postcss-preset-env也是一个postcss的插件;
口它可以帮助我们将一些现代的CSS特性，转成大多数浏览器认识的CSS ,并且会根据目标浏览器或者运行时环境添加所需的polyfill ;
也包括会自动帮助我们添加autoprefixer(所以相当于已经内置了autoprefixer

npm install postcss-preset-env -D