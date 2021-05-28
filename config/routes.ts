export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    name: 'render-from',
    icon: 'table',
    path: '/renderForm',
    component: './RenderForm',
  },
  {
    name: 'render-table',
    icon: 'table',
    path: '/renderTable',
    component: './RenderTable',
  },
  {
    name: 'render-chart',
    icon: 'table',
    path: '/renderChart',
    component: './RenderChart',
  },
  {
    name: 'render-generator',
    icon: 'table',
    path: '/renderGenerator',
    component: './RenderGenerator',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
