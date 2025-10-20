import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/guia-ayudantia/markdown-page',
    component: ComponentCreator('/guia-ayudantia/markdown-page', '5f1'),
    exact: true
  },
  {
    path: '/guia-ayudantia/docs',
    component: ComponentCreator('/guia-ayudantia/docs', '778'),
    routes: [
      {
        path: '/guia-ayudantia/docs',
        component: ComponentCreator('/guia-ayudantia/docs', '9f9'),
        routes: [
          {
            path: '/guia-ayudantia/docs',
            component: ComponentCreator('/guia-ayudantia/docs', 'a3d'),
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
                path: '/guia-ayudantia/docs/Introduccion',
                component: ComponentCreator('/guia-ayudantia/docs/Introduccion', '75c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guia-ayudantia/docs/referencias_frecuentes',
                component: ComponentCreator('/guia-ayudantia/docs/referencias_frecuentes', '756'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guia-ayudantia/docs/revista_cuarteles',
                component: ComponentCreator('/guia-ayudantia/docs/revista_cuarteles', 'd63'),
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
