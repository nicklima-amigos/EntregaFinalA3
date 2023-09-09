module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@usersQuery": "./src/infrastructure/database/queries/users",
          "@gamesQuery": "./src/infrastructure/database/queries/games",
          "@games_plataformsQuery": "./src/infrastructure/database/queries/games_plataforms",
          "@migrationsQuery": "./src/infrastructure/database/queries/migrations",
          "@platformsQuery": "./src/infrastructure/database/queries/platforms",

          "@exceptions": "./src/exceptions",
          "@infrastructure": "./src/infrastructure",
          "@middleware": "./src/middleware",
          "@modules": "./src/modules",
          "@types": "./src/types"
        }
      }
    ]
  ]
};
