/* jshint undef: false, unused: true */

describe('CategorisedUrl.fromUrl', function(){
  var CategorisedUrl = require('../lib/categorised-url.js');

  describe('Vimeo', function(){
    describe('video', function(){
      var url = 'https://vimeo.com/24228405';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('vimeo');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('24228405');
      });

      it('should return the canonical url', function(){
        expect(catUrl.canonical_url).toBe('https://vimeo.com/24228405');
      });
    });
  });
});
