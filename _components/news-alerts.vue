<template>
  <div class="news">
    <h2>XPDA News: ({{ story.date | formatDate }})</h2>
    <h3><a :href="story.url" target="_blank" rel="nofollow">{{ story.headline }}</a></h3>
    <p><strong>Summary</strong> {{ story.summary }} (<a :href="story.url" target="_blank" rel="nofollow">Read more</a>)</p>
    <div class="news-controls">
      «
      <span :class="{ 'news-link': !latestStory }" @click="nextStory">Next Story</span>
      |
      <span :class="{ 'news-link': !oldestStory }" @click="previousStory">Previous story</span>
      »
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'news-alerts',
  data: function () {
    return {
      currentStory: 0,
      stories: [
        {
          date: '2020-02-28T00:01:38.000Z',
          headline: 'Carlo no longer maintained',
          summary: 'The Google Chrome Lab experimental project, Carlo, will no longer be maintained. A similar project, inspired by Carlo, called Lorca is still maintained.',
          url: 'https://github.com/GoogleChromeLabs/carlo'
        },
        {
          date: '2019-11-13T14:00:00.000Z',
          headline: 'Big news for NW.js',
          summary: 'The NW NewWin (NW2) refactor is no longer behind a flag, it is now the default in v0.42.4! This will allow for many new features and access to aspects of the Chromium browser in your own apps that was previously not possible. More details at the blog post.',
          url: 'https://nwjs.io/blog/nw2-mode/'
        },
        {
          date: '2019-11-09T00:02:00.000Z',
          headline: 'Apple has begun blocking Electron',
          summary: 'Apple is strategically banning apps made in tools that allow for cross-platform development again (they have done this in the past). Apps made with Electron will no longer be permitted in the Apple App Store. NW.js is seemingly unaffected for the time being. Electron apps can still be distributed to OSX users from your own website (not the App Store), however Apple is likely to block this approach as well in the near future.',
          url: 'https://onezero.medium.com/apple-is-trying-to-kill-web-technology-a274237c174d'
        }
      ]
    };
  },
  methods: {
    nextStory: function () {
      if (!this.latestStory) {
        this.currentStory = this.currentStory - 1;
      }
    },
    previousStory: function () {
      if (!this.oldestStory) {
        this.currentStory = this.currentStory + 1;
      }
    }
  },
  computed: {
    story: function () {
      return this.stories[this.currentStory];
    },
    latestStory: function () {
      return this.currentStory === 0;
    },
    oldestStory: function () {
      return this.currentStory === (this.stories.length - 1);
    }
  },
  filters: {
    formatDate: function (value) {
      return (new Date(value)).toLocaleDateString();
    }
  }
};
</script>
