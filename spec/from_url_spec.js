describe('CategorisedUrl.fromUrl', function(){

  describe('YouTube', function(){
    describe('YouTube User', function(){
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

    describe('YouTube Channel', function(){
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

    describe('YouTube Video', function(){
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

    describe('YouTube Video (short)', function(){
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

    describe('YouTube Video Embed', function(){
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

    describe('YouTube Video at current time', function(){
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

    describe('YouTube Video at current time (reversed)', function(){
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

  describe('Instagram', function(){
    describe('instagram user', function(){
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

    describe('instagram media', function(){
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

    describe('instagram media modal', function(){
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

  describe('Facebook', function(){
    describe('facebook video params', function(){
      var url = 'https://www.facebook.com/video.php?v=587644514714297&fref=nf',
          catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('facebook');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('587644514714297');
      });
    });

    describe('facebook video', function(){
      var url = 'https://www.facebook.com/video.php?v=679866472111060';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('facebook');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('679866472111060');
      });
    });
  });

  describe('Twitter', function(){
    describe('twitter profile', function(){
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

    describe('twitter media with special characters', function(){
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

    describe('twitter media', function(){
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
  });

  describe('Google+', function(){
    it('google plus video');
  });

});