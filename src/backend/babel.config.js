module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@usersQueries": "./src/modules/user/queries",
          "@gamesQueries": "./src/modules/game/queries",
          "@gradesQueries": "./src/modules/grade/queries",
          "@gamesPlatformsQueries": "./src/modules/queries/gamesPlatforms",
          "@migrationsQueries":
            "./src/infrastructure/database/queries/migrations",
          "@platformsQueries": "./src/modules/platform/queries",

          "@infrastructure": "./src/infrastructure",
          "@exceptions": "./src/exceptions",
          "@middleware": "./src/middleware",
          "@modules": "./src/modules",
          "@types": "./src/types",
        },
      },
    ],
  ],
};
