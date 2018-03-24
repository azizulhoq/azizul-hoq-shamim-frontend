# azizul-hoq-shamim-frontend

1. Project structure
```
  * Problem 1
        |__assets
	| |__css
	| |  |__style.css
	| |__fonts
	| |__img
	| |__js
	|    |__bundle.js
	|
	|__src
	| |__js
	| | |__custom-script.js
	| |
	| |__sass
	| |  |____bootstrap4
	| |  |____theme
	| |  
	| |__vendors
	|    |____css
	|    |____js
	|
	|__index.html
	|__gulpfile.js
	|__package.json
```
# Guideline Problem 1
1.Enter problem-1 folder and open index.html on your browser
*Project modification
2. Enter the problem-1 folder and run command
```
npm install
```
3. After npm installation run command
```
gulp
```
4. This project based on bootstrap 4 css framework.
5. For edit or add css you have to work in [src/sass/theme] folder sass files and this code you find on [assets/css/style.css].
6. For edit or add js you have to work in [src/js/custom-script.js] file and this code you find on [assets/js/bundle.css].
7. For browser sync option open gulp.js and set your project path.
```
var browserSyncOptions = {
    proxy: "http://localhost/others/azizul_hoq_shamim_frontend/problem-1/",
    notify: false
};
```
# Guideline Problem 2
1. Enter problem-2 folder and open index.html on your browser
