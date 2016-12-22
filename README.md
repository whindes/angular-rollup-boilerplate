# Summary
* [Preview](#anchor0)
* [How to install it?](#anchor1)
* [How to run it?](#anchor2)
* [Project Architecture](#anchor3)
* [**How to develop using this architecture?**](#anchor4)

## <a name="anchor0"></a>Angular + Stylus + rollup boilerplate
This is a boilerplate using the following tools:
* Angular v1.6;
* ESLint (AirBnb based) v3.12;
* Rollup v0.37;
* Stylus CSS Preprocessor.

## <a name="anchor1"></a>How to install it?

```bash
yarn install
```

**OR**
```bash
npm install
```

## <a name="anchor2"></a>How to run it?

After executing the commands below, access http://localhost:8080 . This command will create both JavaScript and CSS bundles based on `src/**` directory.

```bash
yarn run dev
```

**OR**
```bash
npm run dev
```

## <a name="anchor3"></a>Project Architecture

```bash
├── public
│   ├── css
│   │   └── bundle.css
│   ├── index.html
│   └── js
│       ├── bundle.js
│       └── bundle.js.map
├── src
│   ├── js
│   │   ├── controllers
│   │   ├── directives
│   │   ├── services
│   │   ├── main.js
│   └── stylus
│       ├── main.styl
│       └── reset.styl
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── package.json
└── rollup.config.js
```

## <a name="anchor4"></a>How to develop using this architecture?
Follow my recommendations:
* Use ECMAScript 6;
* Use the `src/js/main.js` file as root of your project. All the Stylus and JavaScript should be imported there;
* All the Stylus code created should be placed under `src/stylus` and imported in `src/stylus/main.styl`;
