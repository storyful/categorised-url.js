/* jshint undef: false, unused: true */

describe('CategorisedUrl.fromUrl', function(){

  describe('Vine', function(){

    describe('video', function(){
      var url = 'https://vine.co/v/5gAphDzxlYt';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('vine');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('s');
      });

      it('should return the url', function(){
        expect(catUrl.url).toBe('https://vine.co/v/5gAphDzxlYt');
      });

      it('should return the canonical url', function(){
        expect(catUrl.canonical_url).toBe('https://vine.co/v/');
      });
    });
  });

});
