fis.match('*', {
      release : '/baidu/$0'//指定生成的路径
 });


fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

//对系统中的js，css，文件启用hash
fis.match('*.{js,css,jpg}', {
  useHash: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

//启用插件 
fis.hook('relative'); 

//让所有文件，都使用相对路径
fis.match('**', { 
	relative: true 
})


// // 压缩HTML文件
// // npm i fis-optimizer-html-minifier [-g]
// // fis.match('*.html', {
// //   optimizer: fis.plugin('html-minifier')
// // });
