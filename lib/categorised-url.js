const providers = require('./providers') ;

const defaults = {
  url           : null,
  provider      : null,
  resource_type : null,
  resource      : null,
  canonical_url : null
};

const notEmpty = function(value){
  return value !== undefined;
};

const parseResource = function(pattern, url){
  return pattern.exec(url).filter(notEmpty)[2];
};

const parseUrl = function(pattern, url){
  return pattern.exec(url).filter(notEmpty)[1];
};

const parseCanonicalUrl = function(pattern, categorisedUrl){
  return pattern
    .replace('{RESOURCE}', categorisedUrl.resource)
    .replace('{URL}', categorisedUrl.url);
};

// return an empty categorisedUrl object
const getDefault = function(){
  return JSON.parse(JSON.stringify(defaults));
};

const fromUrl = function(url){
  var provider = {};
  var categorisedUrl = getDefault();
  var decodedUrl = decodeURIComponent(url);

  for(var i = 0; i < providers.length; i++){
    provider = providers[i];

    if( decodedUrl.match(provider.pattern) ){
      categorisedUrl.url            = parseUrl(provider.pattern, decodedUrl);
      categorisedUrl.provider       = provider.provider;
      categorisedUrl.resource_type  = provider.resource_type;
      categorisedUrl.resource       = parseResource(provider.pattern, decodedUrl);
      categorisedUrl.canonical_url  = parseCanonicalUrl( provider.canonical_url, categorisedUrl );

      break;
    }
  }

  return categorisedUrl;
};

module.exports = { fromUrl };
