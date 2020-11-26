describe('CategorisedUrl.fromUrl', function(){
  var CategorisedUrl = require('../lib/categorised-url.js');

  describe('Instagram', function(){
    describe('media', function(){
      var url = 'https://www.tiktok.com/@green.rabbit/video/6876435599335705858';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('tiktok');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('6876435599335705858');
      });

      it('should return the canonical url', function(){
        expect(catUrl.canonical_url).toBe('https://www.tiktok.com/@green.rabbit/video/6876435599335705858');
      });
    });
 
    describe('url with lang and special characters', function(){
      var url = 'https://www.tiktok.com/@green.rabbit/video/6876435599335705858?lang=en';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('tiktok');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('6876435599335705858');
      });

      it('should return the canonical url', function(){
        expect(catUrl.canonical_url).toBe('https://www.tiktok.com/@green.rabbit/video/6876435599335705858');
      });
    });
  });
});
