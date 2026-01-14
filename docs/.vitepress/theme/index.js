import { h, nextTick, watch } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import { initComponent } from 'vitepress-mermaid-preview/component';
import 'vitepress-mermaid-preview/dist/index.css';

import OSSwitcher from '../components/OSSwitcher.vue'
import './style.css'
import './table.css'

const components = import.meta.glob('../components/*.vue', { eager: true })

export default {
  extends: DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'sidebar-top': () => h(OSSwitcher),
    })
  },

  enhanceApp({ app }) {
    enhanceAppWithTabs(app);
    initComponent(app);

    // auto-register components
    for (const path in components) {
      const component = components[path].default

      if (!component?.name) {
        console.warn(`[vitepress] Skipping unnamed component: ${path}`)
        continue
      }

      app.component(component.name, component)
    }
  },
}

