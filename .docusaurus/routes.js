import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/guia-ayudantia/__docusaurus/debug',
    component: ComponentCreator('/guia-ayudantia/__docusaurus/debug', '7b0'),
    exact: true
  },
  {
    path: '/guia-ayudantia/__docusaurus/debug/config',
    component: ComponentCreator('/guia-ayudantia/__docusaurus/debug/config', '1ba'),
    exact: true
  },
  {
    path: '/guia-ayudantia/__docusaurus/debug/content',
    component: ComponentCreator('/guia-ayudantia/__docusaurus/debug/content', '64f'),
    exact: true
  },
  {
    path: '/guia-ayudantia/__docusaurus/debug/globalData',
    component: ComponentCreator('/guia-ayudantia/__docusaurus/debug/globalData', '544'),
    exact: true
  },
  {
    path: '/guia-ayudantia/__docusaurus/debug/metadata',
    component: ComponentCreator('/guia-ayudantia/__docusaurus/debug/metadata', '3f3'),
    exact: true
  },
  {
    path: '/guia-ayudantia/__docusaurus/debug/registry',
    component: ComponentCreator('/guia-ayudantia/__docusaurus/debug/registry', 'db5'),
    exact: true
  },
  {
    path: '/guia-ayudantia/__docusaurus/debug/routes',
    component: ComponentCreator('/guia-ayudantia/__docusaurus/debug/routes', '3d6'),
    exact: true
  },
  {
    path: '/guia-ayudantia/markdown-page',
    component: ComponentCreator('/guia-ayudantia/markdown-page', '5f1'),
    exact: true
  },
  {
    path: '/guia-ayudantia/docs',
    component: ComponentCreator('/guia-ayudantia/docs', '999'),
    routes: [
      {
        path: '/guia-ayudantia/docs',
        component: ComponentCreator('/guia-ayudantia/docs', 'ce3'),
        routes: [
          {
            path: '/guia-ayudantia/docs',
            component: ComponentCreator('/guia-ayudantia/docs', '11c'),
            routes: [
              {
                path: '/guia-ayudantia/docs/category/creacion-de-documentos',
                component: ComponentCreator('/guia-ayudantia/docs/category/creacion-de-documentos', '6a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guia-ayudantia/docs/deberes',
                component: ComponentCreator('/guia-ayudantia/docs/deberes', '2e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guia-ayudantia/docs/documentos/notas_de_capitania',
                component: ComponentCreator('/guia-ayudantia/docs/documentos/notas_de_capitania', '1ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guia-ayudantia/docs/documentos/ordenes_del_dia',
                component: ComponentCreator('/guia-ayudantia/docs/documentos/ordenes_del_dia', '653'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guia-ayudantia/docs/intro',
                component: ComponentCreator('/guia-ayudantia/docs/intro', '2d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guia-ayudantia/docs/lista_referencias',
                component: ComponentCreator('/guia-ayudantia/docs/lista_referencias', '610'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guia-ayudantia/docs/notas_frecuentes',
                component: ComponentCreator('/guia-ayudantia/docs/notas_frecuentes', 'd1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guia-ayudantia/docs/revista_cuarteles',
                component: ComponentCreator('/guia-ayudantia/docs/revista_cuarteles', 'd63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guia-ayudantia/docs/sispar',
                component: ComponentCreator('/guia-ayudantia/docs/sispar', '536'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guia-ayudantia/docs/sispar/mantenedores',
                component: ComponentCreator('/guia-ayudantia/docs/sispar/mantenedores', 'f36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guia-ayudantia/docs/sispar/que_es',
                component: ComponentCreator('/guia-ayudantia/docs/sispar/que_es', '0a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guia-ayudantia/docs/sispar/reportes',
                component: ComponentCreator('/guia-ayudantia/docs/sispar/reportes', '6d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/guia-ayudantia/',
    component: ComponentCreator('/guia-ayudantia/', '9b6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
