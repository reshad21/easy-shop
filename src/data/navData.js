const commonNavData = [
    {
        path: "/",
        title: "Home",
    },
    {
        path: "/about",
        title: "About",
    },
    {
        path: "/blogs",
        title: "Blog",
    },
    {
        path: "/profile",
        title: "Profile",
    },
    {
        path: "/product",
        title: "Product",
    },
];

export const afterLoginNavData = [
    ...commonNavData,
    {
        path: "/dashboard",
        title: "Dashboard",
    },
]


export const beforeLoginNavData = [
    ...commonNavData,
    {
      path: "/signup",
      title: "Signup",
    },
    {
      path: "/login",
      title: "Login",
    },
  ];