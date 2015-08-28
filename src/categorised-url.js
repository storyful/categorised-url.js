/*!
 * categorised-url.js
 *
 * Released under the MIT license
 */

(function( global ) {
  var CategorisedUrl = (function() {

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
        },
        getCanonicalUrl: function(resource){
          return 'https://www.youtube.com/watch?v=' + resource;
        }
      },
      {
        // YouTube Media
        // http://stackoverflow.com/questions/3452546/javascript-regex-how-to-get-youtube-video-id-from-url
        pattern: /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??(v=)?([^#\&\?]*).*/,
        provider: 'youtube',
        resource_type: 'media',
        getResource: function(url){
          var match = url.match(this.pattern);
          return (match[8].length == 11) ? match[8] : null;
        },
        getCanonicalUrl: function(resource){
          return 'https://www.youtube.com/watch?v=' + resource;
        }
      },
      {
        // Instagram User
        pattern: /(http|https):\/\/(www\.)?(instagr\.am|instagram\.com)\/(?!p\/).*/,
        provider: 'instagram',
        resource_type: 'user',
        getResource: function(url){
          return parseUrl(url).pathname_segments[1];
        },
        getCanonicalUrl: function(resource){
          return 'https://instagram.com/p/' + resource + '/';
        }
      },
      {
        // Instagram Media
        pattern: /(http|https):\/\/(www\.)?(instagr\.am|instagram\.com)\/p\/.*/,
        provider: 'instagram',
        resource_type: 'media',
        getResource: function(url){
          return parseUrl(url).pathname_segments[2];
        },
        getCanonicalUrl: function(resource){
          return 'https://instagram.com/p/' + resource + '/';
        }
      },
      {
        // Facebook Media
        pattern: /(http|https):\/\/www\.facebook\.com\/video\.php\?v=[a-zA-Z0-9]{1,}.*/,
        provider: 'facebook',
        resource_type: 'media',
        getResource: function(url){
          return parseUrl(url).search_segments.v;
        },
        getCanonicalUrl: function(resource){
          return null;
        }
      },
      {
        // Twitter Media
        pattern: /(http|https):\/\/(www\.)?twitter\.com\/[a-zA-Z0-9]{3,}.\/status\/([0-9]{1,})$/,
        provider: 'twitter',
        resource_type: 'media',
        getResource: function(url){
          return parseUrl(url).pathname_segments[3];
        },
        getCanonicalUrl: function(resource){
          return null;
        }
      },
      {
        // Twitter Profile
        pattern: /(http|https):\/\/(www\.)?twitter\.com\/[a-zA-Z0-9]{3,}.$\/?/,
        provider: 'twitter',
        resource_type: 'user',
        getResource: function(url){
          return parseUrl(url).pathname_segments[1];
        },
        getCanonicalUrl: function(resource){
          return null;
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
          categorisedUrl.canonical_url  = provider.getCanonicalUrl( categorisedUrl.resource );
        }
      }

      return categorisedUrl;
    };

    // expose providers
    exports.providers = providers;

    return exports;

  })();

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
    module.exports = CategorisedUrl;
  } else {
    global.CategorisedUrl = CategorisedUrl;
  }

})( this );