import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://contact-info_owner:kmMi50tKaUpe@ep-dawn-dust-a5ys2ybz.us-east-2.aws.neon.tech/contact-info?sslmode=require",
  },
});
