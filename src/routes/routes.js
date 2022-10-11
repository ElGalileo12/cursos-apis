const routes = [
  {
    path: "/",
    component: () => import("../layouts/Main.layout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../pages/Home.view.vue"),
      },
      {
        path: "/twitter",
        name: "twitter",
        component: () => import("../pages/Twitter/Twitter.view.vue"),
      },
      {
        path: "/cats",
        name: "cats",
        component: () => import("../pages/Cats/Cats.view.vue"),
      },
      {
        path: "/movies",
        name: "movies",
        component: () => import("../pages/Movies/Movies.view.vue"),
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("../pages/ErrorView.vue"),
  },
];

export default routes;
