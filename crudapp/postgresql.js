import { Sequelize } from "sequelize";
import { createUserModel } from "./model/userSchema.js";

let UserModel =null;
const connection=async()=>{
const sequelize = new Sequelize('SQL', 'postgres', '12345', {
    host: 'localhost',
    dialect:'postgres'
  });

let UserModel =null;
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    UserModel= await createUserModel(sequelize)
    await sequelize.sync();
    console.log("Database Synced")
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
export {connection,UserModel}
