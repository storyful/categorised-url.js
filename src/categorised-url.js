/*!
 * categorised-url.js
 *
 * Released under the MIT license
 */

(function( global ) {
  var Module = (function() {

    var exports = {};

    var defaults = {
      provider      : null,
      resource_type : null,
      resource      : null
    };

    var providers = [
      {
        // YouTube User
        pattern: /((http|https):\/\/|)(www\.)?youtube\.com\/(channel\/|user\/)[a-zA-Z0-9]{1,}/,
        provider: 'youtube',
        resource_type: 'user',
        getResource: function(url){
          return parseUrl(url).pathname_segments[2];
        }
      },
      {
        // YouTube Media
        // http://stackoverflow.com/questions/3452546/javascript-regex-how-to-get-youtube-video-id-from-url
        pattern: /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
        provider: 'youtube',
        resource_type: 'media',
        getResource: function(url){
          var match = url.match(this.pattern);
          return (match[7].length == 11) ? match[7] : null;
        }
      },
      {
        // Instagram User
        pattern: /(http|https):\/\/(www\.)?(instagr\.am|instagram\.com)\/(?!p\/).*/,
        provider: 'instagram',
        resource_type: 'user',
        getResource: function(url){
          return parseUrl(url).pathname_segments[1];
        }
      },
      {
        // Instagram Media
        pattern: /(http|https):\/\/(www\.)?(instagr\.am|instagram\.com)\/p\/.*/,
        provider: 'instagram',
        resource_type: 'media',
        getResource: function(url){
          return parseUrl(url).pathname_segments[2];
        }
      },
      {
        // Facebook Media
        pattern: /(http|https):\/\/www\.facebook\.com\/video\.php\?v=[a-zA-Z0-9]{1,}.*/,
        provider: 'facebook',
        resource_type: 'media',
        getResource: function(url){
          return parseUrl(url).search_segments.v;
        }
      },
      {
        // Twitter Profile
        pattern: /(http|https):\/\/(www\.)?twitter\.com\/[a-zA-Z0-9]{1,}.*/,
        provider: 'twitter',
        resource_type: 'user',
        getResource: function(url){
          return parseUrl(url).pathname_segments[1];
        }
      }
    ];

    // create parser, parse pathname segments
    // and search segments and return a url object
    var parseUrl = function(url){

      var parser = document.createElement('a');
      parser.href = url;

      parser.pathname_segments = parser.pathname.split('/');

      parser.search_segments = parser.search
        .substring(1)
        .split("&")
        .reduce(function(prev, curr, i, arr) {
          var p = curr.split("=");
          prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
          return prev;
        }, {});

      return parser;
    };

    // return an empty categorisedUrl object
    var getCategorisedUrl = function(){
      return JSON.parse(JSON.stringify(defaults));
    };

    // given a url run over all the providers
    // and return a categorisedUrl object
    exports.fromUrl = function(url){
      var provider,
          categorisedUrl = getCategorisedUrl();

      for(var i = 0; i < providers.length; i++){
        provider = providers[i];
        if( url.match(provider.pattern) ){
          categorisedUrl.provider       = provider.provider;
          categorisedUrl.resource_type  = provider.resource_type;
          categorisedUrl.resource       = provider.getResource(url);
        }
      }

      return categorisedUrl;
    };

    // expose providers
    exports.providers = providers;

    return exports;

  })();

  global.CategorisedUrl = Module;

})( this );