const app = new Vue({
  el: '#app',
  data: {
    tools: [
      {
        title: 'NW.js',
        url: 'https://nwjs.io',
        deprecated: false,
        languages: [
          'HTML',
          'CSS',
          'JS',
          'Node.js'
        ],
        platforms: [
          'Windows',
          'Linux',
          'OSX'
        ],
        pros: [
          'Supports twice as many OS\'s as Electron including legacy support to OSX 10.6 and XP (via NW.js 0.14.7 LTS)',
          'Actually cares about proper Linux support',
          'Allows for protected source code (important for proprietary/closed source code)',
          'Backed by Intel',
          'Updated within 24 hours of a Chromium or Node release',
          'Still a resource hog, but uses less RAM and disk space than Electron',
          'Smaller distribution sizes (~25MB windows Installer)',
          'Been around 5 years longer/used by thousands of projects',
          'Assumes you want to create a desktop app, and not a node script with an optional UI.',
          'Super easy to get started with and a no-nonsense API',
          'Can use node_modules',
          'Has Vue, React, Etc. boilerplates available',
          'Plays nicely with Gulp, Webpack, etc.',
          'Ability to share code across Mobile/Web/Desktop if project is setup correctly'
        ],
        cons: [
          'Terrible Name/Branding/Marketing',
          'Small-Medium ecosystem',
          'Basically one person behind most of the code',
          'Everything you need from the documentation is available, but the site is clunky'
        ],
        frameworks: [],
        tools: []
      },
      {
        title: 'Electron',
        url: 'https://electronjs.org',
        deprecated: false,
        languages: [
          'HTML',
          'CSS',
          'JS',
          'Node.js'
        ],
        platforms: [
          'Windows',
          'Linux',
          'OSX'
        ],
        pros: [
          'Great name/marketing/branding',
          'Big ecosystem',
          'Good documentation',
          'Used by a few big name projects',
          'Backed by GitHub',
          'Can use node_modules',
          'Has Vue, React, Etc. boilerplates available',
          'Plays nicely with Gulp, Webpack, etc.',
          'Ability to share code across Mobile/Web/Desktop if project setup correctly'
        ],
        cons: [
          'Basically one person behind most of the code',
          'Doesn\'t take Linux support seriously',
          'Does not support any legacy OS\'s',
          'Resource Hog',
          'No way to protect your source code',
          'Perpetually out of date, releases typically ship with versions of Node/Chromium from 3-6 months ago'
        ],
        frameworks: [],
        tools: []
      },
      {
        title: 'Xamarin',
        url: 'https://visualstudio.microsoft.com/xamarin',
        deprecated: false,
        languages: [],
        platforms: [],
        pros: [],
        cons: []
      },
      {
        title: 'Ultralight',
        url: 'https://ultralig.ht',
        deprecated: false,
        languages: [
          'C++',
          'HTML',
          'CSS'
        ],
        platforms: [
          'Windows',
          'OSX',
          'Linux'
        ],
        pros: [
          'Distribution sizes are as low as ~8MB',
          'Low memory usage',
          'GPU-Accelerated, drivers for Direct3D, Metal, and OpenGL (optimized for games)',
          'Ultralight is designed for C++ developers, however it plans to add bindings for C, C#, .NET, Node.js, and Python',
          'Free for non-commercial use, educational use, and commercial use by indie devs making less than US$100,000 a year'
        ],
        cons: [
          'Currently in beta and missing many features',
          'Not free for all commercial use',
          'Mostly closed source',
          'Basically one person behind most of the code',
          'Currently requires the end user have a GPU',
          'Lacking full support for CSS3, especially around SVG, filters, and dropshadows',
          'Limited JavaScript interaction through C++',
          'Internal Webkit is based off of Safari with many features disabled, notably WebWorkers, WebAudio and Video'
        ],
        frameworks: [],
        tools: []
      },
      {
        title: 'LibUI-Node',
        url: 'https://github.com/parro-it/libui-node',
        deprecated: false,
        languages: [
          'JS',
          'Node.js'
        ],
        platforms: [],
        pros: [
          'Uses minimal amounts of resources, much less than NW.js and Electron',
          'Built package can be as small as ~20MB (compared to ~70MB (NW) and ~120MB (Electron))',
          'Distribution sizes can be as low as 10MB (packaged installer)',
          'Can use node_modules',
          'Has Vue, React, Etc. boilerplates available',
          'Plays nicely with Gulp, Webpack, etc.',
          'Ability to share code across Mobile/Web/Desktop if project setup correctly'
        ],
        cons: [
          'Limited-to-no styling options, all apps look like vanilla form fields',
          'Very new, not out of beta',
          'Not great OS support, or build tools yet',
          'Builds tools aren\'t very robust yet',
          'Dev tooling is pretty non-existent',
          'Lots of unknowns'
        ],
        frameworks: [
          {
            framework: 'React',
            title: 'Proton-Native',
            url: 'https://proton-native.js.org'
          },
          {
            framework: 'Vue.js',
            title: 'Vuido',
            url: 'https://vuido.mimec.org'
          }
        ],
        tools: []
      },
      {
        title: 'Sciter',
        url: 'https://sciter.com',
        deprecated: false,
        languages: [],
        platforms: [],
        pros: [],
        cons: [],
        frameworks: [],
        tools: []
      },
      {
        title: 'Carlo',
        url: 'https://github.com/GoogleChromeLabs/carlo',
        deprecated: false,
        languages: [
          'HTML',
          'CSS',
          'JS',
          'Node.js'
        ],
        platforms: [],
        pros: [],
        cons: [],
        frameworks: [],
        tools: []
      },
      {
        title: 'PyQt',
        url: 'https://www.riverbankcomputing.com/software/pyqt',
        deprecated: false,
        languages: [
          'Python'
        ],
        platforms: [
          'Windows',
          'Linux',
          'OSX',
          'iOS',
          'Android'
        ],
        pros: [
          'Qt is built with C++ which can be cumbersome, the Python bindings simplify interacting with it'
        ],
        cons: [
          'If your project is not licensed under GPLV2, GPLV3, or LGPL3 then Qt costs $459/developer/month.'
        ],
        frameworks: [],
        tools: [
          {
            type: 'Build System',
            title: 'fman',
            url: 'https://build-system.fman.io'
          }
        ]
      },
      {
        title: 'Lorca',
        url: 'https://github.com/zserge/lorca',
        deprecated: false,
        languages: [],
        platforms: [],
        pros: [],
        cons: [],
        frameworks: [],
        tools: []
      },
      {
        title: 'Tint2',
        url: 'https://github.com/trueinteractions/tint2',
        deprecated: true,
        languages: [
          'HTML',
          'CSS',
          'JS',
          'Node.js'
        ],
        platforms: [],
        pros: [
          'Similar approach to that of NW.js or Electron'
        ],
        cons: [
          'Project is deprecated. Last release was in 2016.'
        ],
        frameworks: [],
        tools: []
      },
      {
        title: 'AppJS',
        url: 'http://appjs.com',
        deprecated: true,
        languages: [
          'HTML',
          'CSS',
          'JS'
        ],
        platforms: [
          'Windows',
          'Linux',
          'OSX'
        ],
        pros: [],
        cons: [
          'Project has been deprecated for many years'
        ],
        frameworks: [],
        tools: []
      }
    ]
  }
});
