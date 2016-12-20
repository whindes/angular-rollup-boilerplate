import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import eslint from 'rollup-plugin-eslint';
import html from 'rollup-plugin-html';
import livereload from 'rollup-plugin-livereload';
import nodeResolve from 'rollup-plugin-node-resolve';
import path from 'path';
import serve from 'rollup-plugin-serve';
import stylus from 'rollup-plugin-stylus-css-modules';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: path.join(__dirname, 'src/js/main.js'),
  dest: path.join(__dirname, 'public/js/bundle.js'),
  format: 'cjs',
  sourceMap: true,
  plugins: [
    stylus({
      include: path.join(__dirname, 'src/stylus/main.styl'),
      output: path.join(__dirname, 'public/css/bundle.css'),
      sourceMap: true,
    }),
    babel({
      exclude: path.join(__dirname, 'node_modules/**'),
    }),
    eslint({
      exclude: path.join(__dirname, 'src/stylus/**'),
    }),
    html({
      include: path.join(__dirname, 'index.html'),
      htmlMinifierOptions: {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        conservativeCollapse: true,
        html5: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),
    nodeResolve({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: 'node_modules/**',  // Default: undefined
      exclude: ['node_modules/foo/**', 'node_modules/bar/**'],  // Default: undefined

      // search for files other than .js files (must already
      // be transpiled by a previous plugin!)
      extensions: ['.js', '.coffee'],  // Default: ['.js']

      // if true then uses of `global` won't be dealt with by this plugin
      ignoreGlobal: false,  // Default: false

      // if false then skip sourceMap generation for CommonJS modules
      sourceMap: false,  // Default: true

      // explicitly specify unresolvable named exports
      // (see below for more details)
      namedExports: { './module.js': ['foo', 'bar'] }, // Default: undefined
    }),
    uglify(),
    serve({
      // Folder to serve files from,
      contentBase: path.join(__dirname, 'public'),

      // Set to true to return index.html instead of 404
      historyApiFallback: false,

      // Options used in setting up server
      host: 'localhost',
      port: 8080,
    }),
    livereload({
      watch: path.join(__dirname, 'src/js'),
      // Disable console output
      verbose: false,
      // other livereload options
      // https: true
    }),
  ],
};
