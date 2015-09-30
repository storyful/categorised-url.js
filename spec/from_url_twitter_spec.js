/* jshint undef: false, unused: true */

describe('CategorisedUrl.fromUrl', function(){

  describe('Twitter', function(){
    describe('profile', function(){
      var url = 'https://twitter.com/storyful';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('twitter');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('user');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('storyful');
      });
    });

    describe('media with special characters', function(){
      var url = 'https://twitter.com/_Jordan/status/630053580301447169';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('twitter');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('630053580301447169');
      });
    });

    describe('media with params', function(){
      var url = 'https://twitter.com/BabyAnimalGifs/status/628559021042200576?ref_src=twsrc%5Etfw';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('twitter');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('628559021042200576');
      });
    });

    describe('media', function(){
      var url = 'https://twitter.com/BabyAnimalGifs/status/628559021042200576';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('twitter');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('628559021042200576');
      });
    });

    describe('media matched as YouTube due to parse order', function(){
      var url = 'https://twitter.com/ChromiumDev/status/646221201254166528';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('twitter');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('646221201254166528');
      });
    });
  });
});
