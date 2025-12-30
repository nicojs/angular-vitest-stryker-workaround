import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      excludeAfterRemap: true,
      reportsDirectory: 'coverage/ng-stryker',
      enabled: false,
      thresholds: {},
      watermarks: {},
    },
    projects: [
      {
        test: {
          setupFiles: ['init-testbed.js'],
          globals: true,
          isolate: false,
          sequence: {
            setupFiles: 'list',
          },
          root: '.angular/cache/21.0.4/ng-stryker/unit-test/output-files',
          name: 'ng-stryker',
          include: ['spec-app-app.js'],
          environment: 'jsdom',
        },
        optimizeDeps: {
          noDiscovery: true,
          include: [
            '@angular/core',
            '@angular/core/testing',
            '@angular/platform-browser/testing',
            '@angular/router',
          ],
        },
        resolve: {
          mainFields: ['es2020', 'module', 'main'],
          conditions: ['es2015', 'es2020', 'module', 'node', 'development|production'],
        },
        plugins: [
          {
            name: 'angular:test-in-memory-provider',
            enforce: 'pre',
          },
          {
            name: 'angular:html-index',
          },
        ],
      },
    ],
  },
});
