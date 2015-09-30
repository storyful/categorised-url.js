/* jshint undef: false, unused: true */

describe('CategorisedUrl.fromUrl', function(){

  describe('Instagram', function(){

    describe('user', function(){
      var url = 'http://instagram.com/google/';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('instagram');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('user');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('google');
      });
    });

    describe('media', function(){
      var url = 'http://instagram.com/p/wqLyuvQr9Y';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('instagram');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('wqLyuvQr9Y');
      });

      it('should return the canonical url', function(){
        expect(catUrl.canonical_url).toBe('https://instagram.com/p/wqLyuvQr9Y/');
      });
    });

    describe('media modal', function(){
      var url = 'http://instagram.com/p/wqLyuvQr9Y/?modal=true';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('instagram');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('wqLyuvQr9Y');
      });

      it('should return the canonical url', function(){
        expect(catUrl.canonical_url).toBe('https://instagram.com/p/wqLyuvQr9Y/');
      });
    });

  });

});
