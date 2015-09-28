/*!
 * categorised-url.js
 *
 * Released under the MIT license
 */

(function( global ) {
  var CategorisedUrl = (function() {
    var exports = {};

    var defaults = {
      url           : null,
      provider      : null,
      resource_type : null,
      resource      : null,
      canonical_url : null
    };

    var providers = [
      {
        // YouTube User
        pattern: /(?:https?:)?\/\/(?:www\.)?youtube\.com\/(?:channel\/|user\/|attribution_link\/)([a-zA-Z0-9]{1,})$/,
        provider: 'youtube',
        resource_type: 'user',
        canonical_url: 'https://www.youtube.com/watch?v={RESOURCE}'
      },
      {
        // YouTube Media
        pattern: /(?:https?:)?\/{2}(?:(?:www|m)\.)?(?:(?:youtu\.be)|(?:youtube\.com)){1}\/?(?:attribution_link)?(?:(?:v\/)|(?:\/u\/\w\/)|(?:embed\/)|(?:watch\?))?\??(?:(?:t=\S*&|u=\S*&)+)?(?:v=)?(?:v=)?([A-Za-z0-9-_]+).*/,
        provider: 'youtube',
        resource_type: 'media',
        canonical_url: 'https://www.youtube.com/watch?v={RESOURCE}'
      },
      {
        // Instagram User
        pattern: /(?:https?:)?\/\/(?:www\.)?(?:instagr\.am|instagram\.com)\/(?!p\/)([\w\.]*)(?:\/)?$/,
        provider: 'instagram',
        resource_type: 'user',
        canonical_url: 'https://instagram.com/p/{RESOURCE}/'
      },
      {
        // Instagram Media
        pattern: /(?:https?:)?\/\/(?:www\.)?(?:insta)(?:gr\.am|gram\.com)\/p\/(\w+)(?:\/|\?){0,2}.*$/,
        provider: 'instagram',
        resource_type: 'media',
        canonical_url: 'https://instagram.com/p/{RESOURCE}/'
      },
      {
        // Facebook Media: videos
        pattern: /(?:https?:)?\/\/(?:www\.)facebook\.com\/(?:video\.php\?v=(\d+)|\S+\/videos\/(?:vb\.\S+\/)?(\d+))\/?.*$/,
        provider: 'facebook',
        resource_type: 'media',
        canonical_url: '{URL}'
      },
      {
        // Facebook Media: photo
        pattern: /(?:https?:)?\/\/(?:www\.)facebook\.com\/(?:(?:[a-zA-Z0-9\.]+\/?photos\/(?:[a-zA-Z0-9\.]+\/)?[a-zA-Z0-9\.]+\/(\d+))|(?:photo.php\?fbid=(\d+)\&?))+.+/,
        provider: 'facebook',
        resource_type: 'media',
        canonical_url: 'https://www.facebook.com/photo.php?fbid={RESOURCE}'
      },
      {
        // Facebook Media: posts
        pattern: /(?:https?:)?\/\/(?:www\.)facebook\.com\/(?:[a-zA-Z0-9\.]+\/?)(?:posts\/)*(\d+)/,
        provider: 'facebook',
        resource_type: 'media',
        canonical_url: '{URL}'
      },
      {
        // Twitter Media
        pattern: /(?:https?:)?\/\/(www\.)?twitter\.com\/[_a-zA-Z0-9]{3,}.\/status\/([0-9]{1,})\??(?:\S+)?$/,
        provider: 'twitter',
        resource_type: 'media',
        canonical_url: '{URL}'
      },
      {
        // Twitter Profile
        pattern: /(?:https?:)?\/\/(?:www\.)?twitter\.com\/([_a-zA-Z0-9]{3,}.)\/?$/,
        provider: 'twitter',
        resource_type: 'user',
        canonical_url: 'categorisedUrl'
      }
    ];

    var notEmpty = function(value){
      return value !== undefined;
    };

    var parseResource = function(pattern, url){
      return pattern.exec(url).filter(notEmpty)[1];
    };

    var parseCanonicalUrl = function(pattern, categorisedUrl){
      return pattern
        .replace('{RESOURCE}', categorisedUrl.resource)
        .replace('{URL}', categorisedUrl.url);
    };

    // return an empty categorisedUrl object
    var getDefault = function(){
      return JSON.parse(JSON.stringify(defaults));
    };

    exports.fromUrl = function(url){
      var provider = {};
      var categorisedUrl = getDefault();
      var decodedUrl = decodeURIComponent(url);

      for(var i = 0; i < providers.length; i++){
        provider = providers[i];

        if( decodedUrl.match(provider.pattern) ){
          categorisedUrl.url            = decodedUrl;
          categorisedUrl.provider       = provider.provider;
          categorisedUrl.resource_type  = provider.resource_type;
          categorisedUrl.resource       = parseResource(provider.pattern, decodedUrl);
          categorisedUrl.canonical_url  = parseCanonicalUrl( provider.canonical_url, categorisedUrl );

          break;
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
