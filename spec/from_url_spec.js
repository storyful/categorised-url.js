describe('CategorisedUrl.fromUrl', function(){

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

  describe('Facebook', function(){
    describe('video as with multiple query param', function(){
      var url = 'https://www.facebook.com/video.php?v=587644514714297&fref=nf';
      var catUrl = CategorisedUrl.fromUrl(url);

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

    describe('video with query params', function(){
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

    describe('video with user ID', function(){
      var url = 'https://www.facebook.com/112235829462/videos/10153555865639463/';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('facebook');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('10153555865639463');
      });
    });

    describe('Facebook Video with user ID and vb segment', function(){
      var url = 'https://www.facebook.com/100004967499160/videos/vb.100004967499160/534252576750321/?type=3&permPage=1';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('facebook');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('534252576750321');
      });
    });

    describe('Facebook Video with username', function(){
      var url = 'https://www.facebook.com/LovinDublin/videos/vb.113566062003506/1174153659278069/?type=2&theater';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('facebook');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('1174153659278069');
      });
    });
  });

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

    describe('twitter media with params', function(){
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

});