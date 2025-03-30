import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra({
  output: "export",
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
  trailingSlash: true, // Ensures correct URL routing for GitHub Pages
});
