describe('CategorisedUrl.fromUrl', function(){

  describe('YouTube', function(){

    it('youtube user', function(){
      var url = 'https://www.youtube.com/user/storyful',
          catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('youtube');
      expect(catUrl.resource_type).toBe('user');
      expect(catUrl.resource).toBe('storyful');
    });

    it('youtube channel', function(){
      var url = 'https://www.youtube.com/channel/storyful',
          catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('youtube');
      expect(catUrl.resource_type).toBe('user');
      expect(catUrl.resource).toBe('storyful');
    });

    it('youtube video', function(){
      var url = 'https://www.youtube.com/watch?v=ORmZxqEl_AY',
          catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('youtube');
      expect(catUrl.resource_type).toBe('media');
      expect(catUrl.resource).toBe('ORmZxqEl_AY');
    });

    it('youtube video short', function(){
      var url = 'http://youtu.be/0zM3nApSvMg',
          catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('youtube');
      expect(catUrl.resource_type).toBe('media');
      expect(catUrl.resource).toBe('0zM3nApSvMg');
    });

  });

  describe('Instagram', function(){

    it('instagram media modal', function(){
      var url = 'http://instagram.com/google/',
          catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('instagram');
      expect(catUrl.resource_type).toBe('user');
      expect(catUrl.resource).toBe('google');
    });

    it('instagram media', function(){
      var url = 'http://instagram.com/p/wqLyuvQr9Y',
          catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('instagram');
      expect(catUrl.resource_type).toBe('media');
      expect(catUrl.resource).toBe('wqLyuvQr9Y');
    });

    it('instagram media modal', function(){
      var url = 'http://instagram.com/p/wqLyuvQr9Y/?modal=true',
          catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('instagram');
      expect(catUrl.resource_type).toBe('media');
      expect(catUrl.resource).toBe('wqLyuvQr9Y');
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
      var url = 'https://www.facebook.com/video.php?v=679866472111060',
          catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('facebook');
      expect(catUrl.resource_type).toBe('media');
      expect(catUrl.resource).toBe('679866472111060');
    });

  });

  describe('Twitter', function(){

    it('twitter profile', function(){
      var url = 'https://twitter.com/storyful',
          catUrl = CategorisedUrl.fromUrl(url);

      expect(catUrl.provider).toBe('twitter');
      expect(catUrl.resource_type).toBe('user');
      expect(catUrl.resource).toBe('storyful');
    });

  });

  describe('Google+', function(){

    it('google plus video');

  });

});