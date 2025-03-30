import nextra from "nextra";

const isProd = process.env.NODE_ENV === "production";

const withNextra = nextra({
  // ... Other Nextra config options
});

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  output: "export",
  assetPrefix: isProd ? "/finance-for-testers/" : "",
  basePath: isProd ? "/finance-for-testers" : "",
  trailingSlash: true, // Ensure trailing slashes for GitHub Pages
  images: {
    unoptimized: true,
  },
});
