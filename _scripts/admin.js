// eslint-disable-next-line no-unused-vars
let app = new Vue({
  el: '#app',
  components: {
    minus: httpVueLoader('_components/minus.vue')
  },
  data: {
    networkError: false,
    selectedTool: 'new',
    tools: [],
    tool: null,
    platforms: [],
    languages: [],
    sites: [],
    newLanguageChoice: null,
    newPlatformChoice: null
  },
  methods: {
    clearForm: function () {
      this.tool = {
        title: '',
        url: '',
        logo: '',
        deprecated: false,
        languages: [],
        platforms: [],
        pros: [],
        cons: [],
        frameworks: [],
        tools: [],
        tutorials: [],
        notableProjects: []
      };
    },
    addNew: function (section) {
      this.tool[section].push('');
    },
    addNewFramework: function () {
      this.tool.frameworks.push({
        framework: '',
        title: '',
        url: ''
      });
    },
    addNewToolTool: function () {
      this.tool.tools.push({
        type: '',
        title: '',
        url: ''
      });
    },
    addNewTutorial: function () {
      this.tool.tutorials.push({
        title: '',
        author: '',
        URL: '',
        site: ''
      });
    },
    addNewNotableProject: function () {
      this.tool.notableProjects.push({
        title: '',
        url: '',
        description: ''
      });
    },
    addNewLanguageChoice: function () {
      this.tool.languages.push(this.newLanguageChoice);
    },
    addNewPlatformChoice: function () {
      this.tool.platforms.push(this.newPlatformChoice);
    }
  },
  computed: {
    joinedSites: function () {
      let sites = [];

      this.sites.forEach(function (site) {
        sites.push(site.title);
      });
      sites = sites.join(', ');

      return sites;
    }
  },
  filters: {
    JSONstringify: function (val) {
      return beautifyJSON(val);
    }
  },
  watch: {
    selectedTool: function (title) {
      if (title === 'new') {
        this.clearForm();
      } else {
        this.tools.forEach((tool) => {
          if (tool.title === title) {
            this.tool = tool;
          }
        });
      }
    },
    tools: function () {
      this.clearForm();
    }
  },
  created: function () {
    axios.get('/_data/tools.json')
      .then((response) => {
        let tools = response.data;
        this.tools = tools;
        this.platforms = helpers.setFilterValues(tools, 'platforms');
        this.languages = helpers.setFilterValues(tools, 'languages');
        this.sites = helpers.listAllSites(tools);
      })
      .catch((err) => {
        if (err) {
          this.networkError = true;
        }
      });
  }
});