// import mathjax3 from 'markdown-it-mathjax3';
// import { ab_mdit, jsdom_init } from "markdown-it-any-block"
// jsdom_init()
import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { vitepressMermaidPreview } from 'vitepress-mermaid-preview';

const customElements = ['mjx-container'];


const JS_PREFIX = "/appdev-II-theory/javascript"
const VUE_PREFIX = "/appdev-II-theory/vue"


export default defineConfig({  
  title: 'Application Development',
  description: 'Documentation for AppDev Projects and Theory',
  base: '/MAD1TAs-book/',
  lang: 'en-US',
  head : [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: './assets/favicon.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Appdev I', link: '/appdev-I-index', items : [ 
        {text: 'Appdev I Theory', link: '/appdev-II-theory'},
        {text: 'Appdev I Project',link: '/appdev-II-project'},

      ] },
      { text: 'Appdev II', link: '/appdev-II-index' }
    ],
    search: {
      provider: 'local'
    },

    sidebar: 
      // General sidebar content
     
      {
      // Sidebar for the "appdevI" section
      '/appdev-I/': [
        {
          text: 'Reference',
          items: [
            // { text: 'Introduction', link: '/reference/' },
            // { text: 'CLI', link: '/reference/cli' },
            // { text: 'API', link: '/reference/api' }
          ]
        }
      ],
      '/appdev-I-theory/': [
          {
            text: 'AppDev I Theory',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/appdev-I-theory/index' },
              { text: 'Basic setup', link:'appdev-I-theory/0-basic-setup-guide',
                collapsed: false,
                items: [
                  {
                    text: 'VSCode setup',
                    link: '/appdev-I-theory/0-vscode-setup'
                  },
                  {
                    text: 'Latency & Bandwidth',
                    link: '/appdev-I-theory/0-latency-bandwidth'
                  },
                  {
                    text:'sys',
                    link: '/appdev-I-theory/0-sys'
                  }
      
                ]
              },
              { 
                text: 'W1 – Intro to Applications', link: '/appdev-I-theory/1-intro-to-applications',
                collapsed: false,
                items: [
                  {
                    text: 'Types of architecture',
                    link: '/appdev-I-theory/1-types-architecture'
                  },
                  {
                    text: 'Networks TCP/IP',
                    link: '/appdev-I-theory/1-network-history-TCP'
                  }
                ]
              },
              { text: 'W2 – HTML pages', link: '/appdev-I-theory/2-html' , collapsed: false
                ,items: [
                  {
                    text: 'Binary Decimal Octet Hexadecimal conversions',
                    link: '/appdev-I-theory/2-binary-decimal'
                  },
                  {
                    text: 'ASCII Unicode',
                    link: '/appdev-I-theory/2-ascii-unicode'
                  },
                  {
                    text:'CSS styling',
                    link: '/appdev-I-theory/2-css'
                  }
                ]
              },
              {
                text: 'W3 – Presentation: VIEW',
                link: '/appdev-I-theory/3-presentation-layer-VIEW',
                collapsed: false,
                items: [
                  {
                    text: 'String formatting in python',
                    link: '/appdev-I-theory/3-string-formatting'
                  },
                  {
                    text: 'String Templating',
                    link: '/appdev-I-theory/3-string-templating'
                  },
                  {
                    text: 'Jinja2',
                    link: '/appdev-I-theory/3-jinja2'
                  },
                  {
                    text:'PyHTML',
                    link: '/appdev-I-theory/3-pyhtml'
                  }
                ]
              },
              { text: 'W4 – Database: MODEL', link: '/appdev-I-theory/4-database-layer-MODEL' },
              { text: 'W5 – business logic: CONTROLLER', link: '/appdev-I-theory/5-business-logic-layer-CONTROLLER' },
              { text: 'W6 – REST APIs', link: '/appdev-I-theory/6-Rest-APIs' },
              { text: 'W7 – Backend', link: '/appdev-I-theory/7-Backend' },
              { text: 'W8 – Frontend', link: '/appdev-I-theory/8-Frontend' },
              { text: 'W9 – Security', link: '/appdev-I-theory/9-Security' },
              { text: 'W10 – Testing', link: '/appdev-I-theory/10-Testing' },
              { text: 'W11 – Beyond HTML', link: '/appdev-I-theory/11-Beyond-HTML' },
              { text: 'W12 - Deployment', link: '/appdev-I-theory/12-Deployment' },
            ]
          }
        ],

      // Sidebar for appdevI project section
      '/appdev-I-project/': [
        {
          text: 'Reference',
          items: [
            // { text: 'Introduction', link: '/guide/' },
            // { text: 'Getting Started', link: '/guide/getting-started' },
            // { text: 'Advanced', link: '/guide/advanced' }
          ]
        }
      ],

      // Sidebar for the "app dev II" section
      '/appdev-II-theory/': [
        {
          text: 'Reference',
                    items: [
            { text: 'Week 1 - 4'},
            { text: 'Javascript', 
              collapsed: false,
              items: [
                { text: 'Introduction', link: `${JS_PREFIX}/javascript` },
                { text: 'Variables', link: `${JS_PREFIX}/variables` },
                { text: 'Datatype', link: `${JS_PREFIX}/datatypes` },
                { text: 'Conditional', link: `${JS_PREFIX}/conditionals` },
                { text: 'Math Operators', link: `${JS_PREFIX}/operators` },
                { text: 'Comparison Operators', link: `${JS_PREFIX}/comparisonoperators` },
                { text: 'Logical Operators', link: `${JS_PREFIX}/logicaloperators` },
                { text: 'Type Conversion', link: `${JS_PREFIX}/typeconversion` },
                { text: 'String', link: `${JS_PREFIX}/strings` },
                { text: 'Loops', link: `${JS_PREFIX}/loops` },
                { text: 'Object', link: `${JS_PREFIX}/objects` },
                { text: 'Arrays', link: `${JS_PREFIX}/arrays` },
                { text: 'Functions', link: `${JS_PREFIX}/functions` },
                { text: 'Non Values', link: `${JS_PREFIX}/nonvalues` },
                { text: 'Scoping', link: `${JS_PREFIX}/scoping` },
                { text: 'This', link: `${JS_PREFIX}/this` },
                { text: 'Call Bind Apply', link: `${JS_PREFIX}/callbindapply` },
                { text: 'Closure', link: `${JS_PREFIX}/closures` },
                { text: 'Hoisting', link: `${JS_PREFIX}/hoisting` },
                { text: 'DOM', link: `${JS_PREFIX}/dom` },
              ]},
              { text : 'Vue JS',
                collapsed: false,
                items : [
                {text : 'Introduction', link: `${VUE_PREFIX}/vue`}
              ]},
              { text: 'Week 5 - 8'},
              { text : 'Advanced Javascript',
                collapsed: false,
                items : [
                {text : 'Promises', link: '/appdev-II-theory/placeholder'},
                {text : 'Async Await', link: '/appdev-II-theory/placeholder'},
                {text : 'Browser Storage', link: '/appdev-II-theory/vue'},
              ]},
              { text : 'Vue Router',
                collapsed: false,
                items : [
                {text : 'Promises', link: '/appdev-II-theory/placeholder'},
                {text : 'Async Await', link: '/appdev-II-theory/placeholder'},
                {text : 'Browser Storage', link: '/appdev-II-theory/placeholder'},
              ]},
              { text : 'Vuex',
                collapsed: false,
                items : [
                {text : 'Promises', link: '/appdev-II-theory/placeholder'},
                {text : 'Async Await', link: '/appdev-II-theory/placeholder'},
                {text : 'Browser Storage', link: '/appdev-II-theory/placeholder'},
              ]},
              { text: 'Week 9 - 12'},
            // { text: 'API', link: '/reference/api' }
          ]
        }
      ],

      '/appdev-II-project/': [
        {
          text: 'Reference',
          items: [
            { text: 'FAQ\'s', link: '/appdev-II-project/faq' },
            { text: 'Project Statement', link: '/appdev-II-project/project-statement' },
            { text: 'Development Environment', link: '/appdev-II-project/development-environment-setup' },
            { text: 'Flask', link: '/appdev-II-project/code-examples' },
            { text: 'SQL Alchemy Models', link: '/appdev-II-project/sqlalchemy-models' },
            { text: 'Flask Security', link: '/appdev-II-project/flask-security' },
            // { text: 'CLI', link: '/reference/cli' },
            // { text: 'API', link: '/reference/api' }
          ]
        }
      ],

      // Default sidebar for the root level ("/")
      '/': [
        {
          text: 'Reference',
          items: [
            { text: 'AppDev I', link: '/appdev-I-index' },
            { text: 'AppDev II', link: '/appdev-II-index',items : [ 
              {text: 'AppDev II Theory', link: '/appdev-II-theory'},
              {text: 'AppDev II Project',link: '/appdev-II-project'},
            ]}
           
          ]
        }
      ]}
    ,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AdityaBaxla/app-dev-docs' }
    ]
  },
  mermaid: {
    theme: 'default',
  },
  markdown: {
    math: true,
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    },
    // If you want auto-sidebar generation for deeply nested structures,
    // config: (md) => {
    //   md.use(mathjax3) // md.use(ab_mdit)
    // },
    config(md) {
      md.use(tabsMarkdownPlugin) // ✅ tabs support
      md.use(vitepressMermaidPreview);

    },
  },
      // If you want auto-sidebar generation for deeply nested structures,
    sidebar: {
      '/Appdev_I/': 'auto',
      '/Appdev_II/': 'auto',
    },
    vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('mjx-'),
      },
    },
  },
  }
)