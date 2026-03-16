import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.TINA_BRANCH ||
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  clientId:
    process.env.TINA_CLIENT_ID || process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  // Uncomment to allow cross-origin requests from non-localhost origins
  // during local development (e.g. GitHub Codespaces, Gitpod, Docker).
  // Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
  // server: {
  //   allowedOrigins: ['https://your-codespace.github.dev'],
  // },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "feature",
        label: "Features",
        path: "src/content/features",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "number",
            name: "order",
            label: "Order",
          },
          {
            type: "boolean",
            name: "hidden",
            label: "Hidden",
          },
        ],
      },
      {
        name: "pricing",
        label: "Pricing",
        path: "src/content/pricing",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Plan Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            required: true,
          },
          {
            type: "string",
            name: "price",
            label: "Price",
            required: true,
          },
          {
            type: "string",
            name: "period",
            label: "Period",
            required: true,
          },
          {
            type: "string",
            name: "features",
            label: "Included Features",
            list: true,
            required: true,
          },
          {
            type: "string",
            name: "ctaLabel",
            label: "CTA Label",
            required: true,
          },
          {
            type: "string",
            name: "ctaHref",
            label: "CTA Link",
            required: true,
          },
          {
            type: "boolean",
            name: "highlight",
            label: "Highlight Plan",
          },
          {
            type: "number",
            name: "order",
            label: "Order",
            required: true,
          },
          {
            type: "boolean",
            name: "hidden",
            label: "Hidden",
          },
        ],
      },
      {
        name: "review",
        label: "Reviews",
        path: "src/content/reviews",
        format: "md",
        fields: [
          {
            type: "string",
            name: "author",
            label: "Author",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "comment",
            label: "Comment",
            required: true,
          },
          {
            type: "number",
            name: "order",
            label: "Order",
          },
          {
            type: "boolean",
            name: "hidden",
            label: "Hidden",
          },
        ],
      },
    ],
  },
});
