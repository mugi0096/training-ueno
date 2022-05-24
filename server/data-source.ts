import { DataSource } from "typeorm";
import { Article } from "./entity/Article";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 9306,
    username: "db_user",
    password: "db_password",
    database: "blog_typeorm",
    synchronize: false,
    logging: false,
    // entities: ["src/entity/**/*.ts"],
    // entities: [ "../entity/Article.ts" ],
    entities: [ Article ],
    migrations: ["server/migration/**/*.ts"],
    subscribers: [],
})
