/* jshint undef: false, unused: true */

describe('CategorisedUrl.fromUrl', function(){
  var CategorisedUrl = require('../lib/categorised-url.js');

  describe('YouTube', function(){
    describe('user', function(){
      var url = 'https://www.youtube.com/user/storyful';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('youtube');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('user');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('storyful');
      });
    });

    describe('channel', function(){
      var url = 'https://www.youtube.com/channel/storyful';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('youtube');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('user');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('storyful');
      });
    });

    describe('video', function(){
      var url = 'https://www.youtube.com/watch?v=ORmZxqEl_AY';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('youtube');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('ORmZxqEl_AY');
      });

      it('should return the canonical url', function(){
        expect(catUrl.canonical_url).toBe('https://www.youtube.com/watch?v=ORmZxqEl_AY');
      });
    });

    describe('video short', function(){
      var url = 'http://youtu.be/0zM3nApSvMg';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('youtube');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('0zM3nApSvMg');
      });

      it('should return the canonical url', function(){
        expect(catUrl.canonical_url).toBe('https://www.youtube.com/watch?v=0zM3nApSvMg');
      });
    });

    describe('video embed', function(){
      var url = 'http://www.youtube.com/embed/vt3i65Uk5p0?start=0';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('youtube');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('vt3i65Uk5p0');
      });

      it('should return the canonical url', function(){
        expect(catUrl.canonical_url).toBe('https://www.youtube.com/watch?v=vt3i65Uk5p0');
      });
    });

    describe('video embed withoud protocol', function(){
      var url = '//www.youtube.com/embed/9LU1AgqqUpA?hd=1&rel=0';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('youtube');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('9LU1AgqqUpA');
      });

      it('should return the canonical url', function(){
        expect(catUrl.canonical_url).toBe('https://www.youtube.com/watch?v=9LU1AgqqUpA');
      });
    });

    describe('video at current time', function(){
      var url = 'https://youtu.be/2X-BEZCSR1U?t=3';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('youtube');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('2X-BEZCSR1U');
      });

      it('should return the canonical url', function(){
        expect(catUrl.canonical_url).toBe('https://www.youtube.com/watch?v=2X-BEZCSR1U');
      });
    });

    describe('video as mobile URL', function(){
      var url = 'http://m.youtube.com/watch?v=0zM3nApSvMg&desktop_uri=%2Fwatch%3Fv%3D0zM3nApSvMg';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('youtube');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('0zM3nApSvMg');
      });

      it('should return the canonical url', function(){
        expect(catUrl.canonical_url).toBe('https://www.youtube.com/watch?v=0zM3nApSvMg');
      });
    });

    describe('video at current time (reversed)', function(){
      var url = 'https://www.youtube.com/watch?t=3&v=ORmZxqEl_AY';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('youtube');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('ORmZxqEl_AY');
      });

      it('should return the canonical url', function(){
        expect(catUrl.canonical_url).toBe('https://www.youtube.com/watch?v=ORmZxqEl_AY');
      });
    });
  });
});
