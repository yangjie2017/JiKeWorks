fis.match('*', {
      release : '/jike/$0'//指定生成的路径
 });

fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

// 文件启用hash
fis.match('*.{jpg,png}', {
  useHash: true
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


//less装换为css。 当前只有一个less文件（样式文件），不与其他css文件合并
fis.match('*.less', {
  parser: fis.plugin('less'),
  rExt: '.css'
})


// //压缩HTML文件
// npm i fis-optimizer-html-minifier [-g]
// fis.match('*.html', {
//   optimizer: fis.plugin('html-minifier')
// });
