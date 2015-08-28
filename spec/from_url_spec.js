describe('CategorisedUrl.fromUrl', function(){

  describe('YouTube', function(){

    it('youtube user', function(){
      var url = 'https://www.youtube.com/user/storyful';
      var catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('youtube');
      expect(catUrl.resource_type).toBe('user');
      expect(catUrl.resource).toBe('storyful');
    });

    it('youtube channel', function(){
      var url = 'https://www.youtube.com/channel/storyful';
      var catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('youtube');
      expect(catUrl.resource_type).toBe('user');
      expect(catUrl.resource).toBe('storyful');
    });

    it('youtube video', function(){
      var url = 'https://www.youtube.com/watch?v=ORmZxqEl_AY';
      var catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('youtube');
      expect(catUrl.resource_type).toBe('media');
      expect(catUrl.resource).toBe('ORmZxqEl_AY');
      expect(catUrl.canonical_url).toBe('https://www.youtube.com/watch?v=ORmZxqEl_AY');
    });

    it('youtube video short', function(){
      var url = 'http://youtu.be/0zM3nApSvMg';
      var catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('youtube');
      expect(catUrl.resource_type).toBe('media');
      expect(catUrl.resource).toBe('0zM3nApSvMg');
      expect(catUrl.canonical_url).toBe('https://www.youtube.com/watch?v=0zM3nApSvMg');
    });

    it('youtube video embed', function(){
      var url = 'http://www.youtube.com/embed/vt3i65Uk5p0?start=0';
      var catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('youtube');
      expect(catUrl.resource_type).toBe('media');
      expect(catUrl.resource).toBe('vt3i65Uk5p0');
      expect(catUrl.canonical_url).toBe('https://www.youtube.com/watch?v=vt3i65Uk5p0');
    });

  });

  describe('Instagram', function(){

    it('instagram user', function(){
      var url = 'http://instagram.com/google/';
      var catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('instagram');
      expect(catUrl.resource_type).toBe('user');
      expect(catUrl.resource).toBe('google');
    });

    it('instagram media', function(){
      var url = 'http://instagram.com/p/wqLyuvQr9Y';
      var catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('instagram');
      expect(catUrl.resource_type).toBe('media');
      expect(catUrl.resource).toBe('wqLyuvQr9Y');
      expect(catUrl.canonical_url).toBe('https://instagram.com/p/wqLyuvQr9Y/');
    });

    it('instagram media modal', function(){
      var url = 'http://instagram.com/p/wqLyuvQr9Y/?modal=true';
      var catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('instagram');
      expect(catUrl.resource_type).toBe('media');
      expect(catUrl.resource).toBe('wqLyuvQr9Y');
      expect(catUrl.canonical_url).toBe('https://instagram.com/p/wqLyuvQr9Y/');
    });

  });

  describe('Facebook', function(){

    it('facebook video params', function(){
      var url = 'https://www.facebook.com/video.php?v=587644514714297&fref=nf',
          catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('facebook');
      expect(catUrl.resource_type).toBe('media');
      expect(catUrl.resource).toBe('587644514714297');
    });

    it('facebook video', function(){
      var url = 'https://www.facebook.com/video.php?v=679866472111060';
      var catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('facebook');
      expect(catUrl.resource_type).toBe('media');
      expect(catUrl.resource).toBe('679866472111060');
    });

  });

  describe('Twitter', function(){

    it('twitter profile', function(){
      var url = 'https://twitter.com/storyful';
      var catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('twitter');
      expect(catUrl.resource_type).toBe('user');
      expect(catUrl.resource).toBe('storyful');
    });

    it('twitter media', function(){
      var url = 'https://twitter.com/BabyAnimalGifs/status/628559021042200576';
      var catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('twitter');
      expect(catUrl.resource_type).toBe('media');
      expect(catUrl.resource).toBe('628559021042200576');
    });

  });

  describe('Google+', function(){

    it('google plus video');

  });

});