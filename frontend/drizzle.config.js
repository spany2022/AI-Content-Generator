/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://AI-Content-Generator_owner:Ndo2QhB3YFOn@ep-jolly-fire-a52guw2o.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require',
    }
  };