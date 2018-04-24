module.exports = [
  {
    // YouTube User
    pattern: /((?:https?:)?\/\/(?:www\.)?youtube\.com\/(?:channel\/|user\/|attribution_link\/)([a-zA-Z0-9-_]{1,}))/,
    provider: 'youtube',
    resource_type: 'user',
    canonical_url: 'https://www.youtube.com/user/{RESOURCE}/featured'
  },
  {
    // YouTube Media
    pattern: /((?:https?:)?\/{2}(?:(?:www|m)\.)?(?:(?:youtu\.be)|(?:youtube\.com)){1}\/?(?:attribution_link)?(?:(?:v\/)|(?:\/u\/\w\/)|(?:embed\/)|(?:watch\?))?\??(?:(?:t=\S*&|u=\S*&)+)?(?:v=)?(?:v=)?(?!channel|user|results)([A-Za-z0-9-_]+).*)/,
    provider: 'youtube',
    resource_type: 'media',
    canonical_url: 'https://www.youtube.com/watch?v={RESOURCE}'
  },
  {
    // Instagram User
    pattern: /((?:https?:)?\/\/(?:www\.)?(?:instagr\.am|instagram\.com)\/(?!p\/)([\w.]*)(?:\/)?$)/,
    provider: 'instagram',
    resource_type: 'user',
    canonical_url: 'https://www.instagram.com/p/{RESOURCE}/'
  },
  {
    // Instagram Media
    pattern: /((?:https?:)?\/\/(?:www\.)?(?:insta)(?:gr\.am|gram\.com)\/p\/([a-zA-Z0-9-_]+)(?:\/|\?){0,2}.*$)/,
    provider: 'instagram',
    resource_type: 'media',
    canonical_url: 'https://www.instagram.com/p/{RESOURCE}/'
  },
  {
    // Facebook Media: videos
    pattern: /((?:https?:)?\/\/(?:www\.)facebook\.com\/(?:video\/)?(?:video\.php\?v=(\d+)|\S+\/videos\/(?:vb\.\S+\/)?(\d+))\/?.*$)/,
    provider: 'facebook',
    resource_type: 'media',
    canonical_url: 'https://www.facebook.com/{RESOURCE}'
  },
  {
    // Facebook Media: photo
    pattern: /((?:https?:)?\/\/(?:www\.)facebook\.com\/(?:(?:[a-zA-Z0-9.]+\/?photos\/(?:[a-zA-Z0-9.-]+\/)?[a-zA-Z0-9.-]+\/(\d+))|(?:photo.php\?fbid=(\d+)&?))+(.+)?)/,
    provider: 'facebook',
    resource_type: 'media',
    canonical_url: 'https://www.facebook.com/{RESOURCE}'
  },
  {
    // Facebook Media: posts
    pattern: /((?:https?:)?\/\/(?:www\.)facebook\.com\/(?:[a-zA-Z0-9.]+\/?)(?:posts\/)+(\d+))/,
    provider: 'facebook',
    resource_type: 'media',
    canonical_url: '{URL}'
  },
  {
    // Facebook Media: stories
    pattern: /((?:https?:)?\/\/(?:www\.)facebook\.com\/permalink\.php\?(.+))/,
    provider: 'facebook',
    resource_type: 'media',
    canonical_url: '{URL}'
  },
  {
    // Facebook Profile
    pattern: /((?:https?:)?\/\/(?:www\.)facebook\.com\/(?:[a-zA-Z0-9.]+\/?))/,
    provider: 'facebook',
    resource_type: 'user',
    canonical_url: 'https://www.facebook.com/{RESOURCE}'
  },
  {
    // Twitter Media
    pattern: /((?:https?:)?\/\/(www\.)?twitter\.com\/[_a-zA-Z0-9]{0,}.\/status\/([0-9]{1,})\??(?:\S+)?$)/,
    provider: 'twitter',
    resource_type: 'media',
    canonical_url: '{URL}'
  },
  {
    // Twitter Profile
    pattern: /((?:https?:)?\/\/(?:www\.)?twitter\.com\/([_a-zA-Z0-9]{0,}.)\/?$)/,
    provider: 'twitter',
    resource_type: 'user',
    canonical_url: 'categorisedUrl'
  },
  {
    // Vimeo Media
    pattern: /(.*vimeo\..*\/(\d+))/,
    provider: 'vimeo',
    resource_type: 'media',
    canonical_url: 'https://vimeo.com/{RESOURCE}'
  },
  {
    // Vine Resource
    pattern: /(.*vine\.co\/v\/([a-zA-Z0-9]+))/,
    provider: 'vine',
    resource_type: 'media',
    canonical_url: 'https://vine.co/v/{RESOURCE}' //https://vine.co/v/5gAphDzxlYt
  },
  {
    // Vine Profile
    pattern: /(.*vine\.co\/([a-zA-Z0-9]+))/,
    provider: 'vine',
    resource_type: 'user',
    canonical_url: 'https://vine.co/{RESOURCE}' //https://vine.co/mmitchelldaviss?mode=list
  }
];
