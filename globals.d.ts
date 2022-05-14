declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: number;
    DATABASE_URL: string;
    NODE_ENV: "development" | "production" | "test";
  }
}
