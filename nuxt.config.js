module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {	name:'baidu-site-verification',content:'J6E07FaVns'},
      {	name:'google-site-verification',content:'hPPjMCLI5NFhStE7_KN3D4L6o7m_iaBgYndz6Y4h45s'},
      {	name:'360-site-verification',content:'61e73cb61391c58d456fa6b2299b3c58'},
      {	name:'sogou_site_verification',content:'NgJXGNyqJp'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/guo.ico' },
      { rel: 'stylesheet', href: '/css/common.css' }
    ],
    script: [
     	{src: 'https://hm.baidu.com/hm.js?52eb6578ee12ac37771f1af16e482611'},/*引入百度统计的js*/
    ]
  },
  
  plugins: [
   '~plugins/ga.js',/*百度统计*/
	],
  
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
//  extend (config, { isDev, isClient }) {
//    if (isDev && isClient) {
//      config.module.rules.push({
//        enforce: 'pre',
//        test: /\.(js|vue)$/,
//        loader: 'eslint-loader',
//        exclude: /(node_modules)/
//      })
//    }
//  }
  }
}

