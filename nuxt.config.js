export default {
  css: [
    // CSS file in the project
    "~/assets/css/main.css",
    // SCSS file in the project
    "~/assets/css/main.scss",
  ],
  target: "static",
  components: true,
  components: {
    dirs: ["~/components", "~/components/base"],
  },
  ssr: false,
  head: {
    title: "my website title",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "my website description",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  loading: {
    color: "blue",
    height: "5px",
  },
  modules: ["@nuxtjs/axios"],
};
