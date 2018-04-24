/* jshint undef: false, unused: true */
describe('CategorisedUrl.fromUrl', function(){
  var CategorisedUrl = require('../lib/categorised-url.js');

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

    describe('video from embed with query params', function(){
      var url = 'https://www.facebook.com/video/video.php?v=890784274303322';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('facebook');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('890784274303322');
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

    describe('video with user ID and vb segment', function(){
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

    describe('video with username', function(){
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

    describe('photo from canonical', function(){
      var url = 'https://www.facebook.com/photo.php?fbid=1047118108645181';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('facebook');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('1047118108645181');
      });
    });

    describe('photo', function(){
      var url = 'https://www.facebook.com/SaintJosephsCollegeOfMaine/photos/a.116322268422667.28457.100892786632282/949222151799337/?type=3';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('facebook');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('949222151799337');
      });
    });

    describe('photo from story', function(){
      var url = 'https://www.facebook.com/photo.php?fbid=918451731546022&set=a.358203587570842.85413.100001436124570&type=3&permPage=1';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('facebook');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('918451731546022');
      });
    });

    describe('photo from story', function(){
      var url = 'https://www.facebook.com/octopusoficial/photos/pb.470714623073954.-2207520000.-1443532328./742148939263853/?type=3&theater';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('facebook');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('742148939263853');
      });
    });

    describe('post', function(){
      var url = 'https://www.facebook.com/sinead.m.wenn/posts/10153239957579053';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('facebook');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('10153239957579053');
      });
    });

    describe('story', function(){
      var url = 'https://www.facebook.com/permalink.php?story_fbid=1479985105636419&id=1433208640314066';
      var catUrl = CategorisedUrl.fromUrl(url);

      it('should return the provider', function(){
        expect(catUrl.provider).toBe('facebook');
      });

      it('should return the resource_type', function(){
        expect(catUrl.resource_type).toBe('media');
      });

      it('should return the resource', function(){
        expect(catUrl.resource).toBe('story_fbid=1479985105636419&id=1433208640314066');
      });
    });
  });
});
