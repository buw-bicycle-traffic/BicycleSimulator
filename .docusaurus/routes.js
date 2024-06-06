import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/BISIMEYER/blog',
    component: ComponentCreator('/BISIMEYER/blog', 'a8e'),
    exact: true
  },
  {
    path: '/BISIMEYER/blog/archive',
    component: ComponentCreator('/BISIMEYER/blog/archive', '2b3'),
    exact: true
  },
  {
    path: '/BISIMEYER/blog/greetings',
    component: ComponentCreator('/BISIMEYER/blog/greetings', 'c09'),
    exact: true
  },
  {
    path: '/BISIMEYER/blog/tags',
    component: ComponentCreator('/BISIMEYER/blog/tags', 'a3a'),
    exact: true
  },
  {
    path: '/BISIMEYER/blog/tags/greetings',
    component: ComponentCreator('/BISIMEYER/blog/tags/greetings', '4b9'),
    exact: true
  },
  {
    path: '/BISIMEYER/markdown-page',
    component: ComponentCreator('/BISIMEYER/markdown-page', '1d7'),
    exact: true
  },
  {
    path: '/BISIMEYER/my-markdown-page',
    component: ComponentCreator('/BISIMEYER/my-markdown-page', '2e8'),
    exact: true
  },
  {
    path: '/BISIMEYER/my-react-page',
    component: ComponentCreator('/BISIMEYER/my-react-page', '121'),
    exact: true
  },
  {
    path: '/BISIMEYER/docs',
    component: ComponentCreator('/BISIMEYER/docs', 'aae'),
    routes: [
      {
        path: '/BISIMEYER/docs',
        component: ComponentCreator('/BISIMEYER/docs', 'f14'),
        routes: [
          {
            path: '/BISIMEYER/docs',
            component: ComponentCreator('/BISIMEYER/docs', 'b3e'),
            routes: [
              {
                path: '/BISIMEYER/docs/BISIMEYER Overview/Equipment-requirements',
                component: ComponentCreator('/BISIMEYER/docs/BISIMEYER Overview/Equipment-requirements', 'b4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BISIMEYER/docs/BISIMEYER Overview/introduction',
                component: ComponentCreator('/BISIMEYER/docs/BISIMEYER Overview/introduction', 'a92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BISIMEYER/docs/BISIMEYER Overview/small_electronics',
                component: ComponentCreator('/BISIMEYER/docs/BISIMEYER Overview/small_electronics', '46f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BISIMEYER/docs/BISIMEYER Overview/Software',
                component: ComponentCreator('/BISIMEYER/docs/BISIMEYER Overview/Software', '82d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BISIMEYER/docs/Calabration_and_Validation/Calabration',
                component: ComponentCreator('/BISIMEYER/docs/Calabration_and_Validation/Calabration', 'ba1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BISIMEYER/docs/Calabration_and_Validation/Valadation',
                component: ComponentCreator('/BISIMEYER/docs/Calabration_and_Validation/Valadation', '26e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BISIMEYER/docs/category/bismeyer-overview',
                component: ComponentCreator('/BISIMEYER/docs/category/bismeyer-overview', 'e6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BISIMEYER/docs/category/calabration-and-validation',
                component: ComponentCreator('/BISIMEYER/docs/category/calabration-and-validation', '9d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BISIMEYER/docs/category/research-methodology',
                component: ComponentCreator('/BISIMEYER/docs/category/research-methodology', 'c5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BISIMEYER/docs/category/setup-and-building-of-simulator',
                component: ComponentCreator('/BISIMEYER/docs/category/setup-and-building-of-simulator', '0a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BISIMEYER/docs/IntroductionBISIM',
                component: ComponentCreator('/BISIMEYER/docs/IntroductionBISIM', '86d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BISIMEYER/docs/Reseach_Methodology/ethics',
                component: ComponentCreator('/BISIMEYER/docs/Reseach_Methodology/ethics', '94b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BISIMEYER/docs/Reseach_Methodology/measured_inputs',
                component: ComponentCreator('/BISIMEYER/docs/Reseach_Methodology/measured_inputs', 'd5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BISIMEYER/docs/Reseach_Methodology/Simulator_Training',
                component: ComponentCreator('/BISIMEYER/docs/Reseach_Methodology/Simulator_Training', 'ebf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BISIMEYER/docs/Setup_and_Building_of_Simulator/Computer_Setup',
                component: ComponentCreator('/BISIMEYER/docs/Setup_and_Building_of_Simulator/Computer_Setup', 'a34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BISIMEYER/docs/Setup_and_Building_of_Simulator/Setup_of_Scenarios',
                component: ComponentCreator('/BISIMEYER/docs/Setup_and_Building_of_Simulator/Setup_of_Scenarios', '9d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BISIMEYER/docs/Setup_and_Building_of_Simulator/Simulator_Setup',
                component: ComponentCreator('/BISIMEYER/docs/Setup_and_Building_of_Simulator/Simulator_Setup', 'd69'),
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
    path: '/BISIMEYER/',
    component: ComponentCreator('/BISIMEYER/', 'faf'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
