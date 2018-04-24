/* jshint undef: false, unused: true */

describe('CategorisedUrl.fromUrl', function(){
  const CategorisedUrl = require('../lib/categorised-url.js');

  describe('Vine', function(){
    describe('video for resource url', function(){
      var url = 'https://vine.co/v/5gAphDzxlYt';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('vine');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('5gAphDzxlYt');
      });

      it('should return the url', function(){
        expect(catUrl.url).toBe('https://vine.co/v/5gAphDzxlYt');
      });

      it('should return the canonical url', function(){
        expect(catUrl.canonical_url).toBe('https://vine.co/v/5gAphDzxlYt');
      });
    });

    describe('user timeline', function(){
      var url = 'https://vine.co/mmitchelldaviss?mode=list'
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('vine');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('user');
      });

      it('should return the canonical url', function(){
        expect(catUrl.canonical_url).toBe('https://vine.co/mmitchelldaviss');
      });

      it('should return the url', function(){
        expect(catUrl.url).toBe('https://vine.co/mmitchelldaviss');
      });
    });
  });
});
