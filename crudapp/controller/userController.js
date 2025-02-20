import { where } from "sequelize";
import { UserModel } from "../postgresql.js"

export const getAllEmp=async(req,res)=>{
    try{
        const users=  await UserModel.findAll();
            if(users.length==0){
                return res.status(200).json({"error":"users not found"})
            }
        return res.status(200).json(users)
    }catch(error){
        console.log(error)
        return res.status(500).json({"error":"internal server error"})
    }
    
}
export const addEmp=async(req,res)=>{
    const {name,email,desgination,empId} =req.body;
    try{
         const emp= await UserModel.findOne({where:{empId:empId}})
         if(empId==null){
            await UserModel.create(req.body);
            return res.status(201).json({message:"emp added successfully"})
         }
         return res.status(200).json({message:"already found"})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({"error":"internal server error"})

    }

}
export const updateEmp=async(req,res)=>{
    let empId=req.params.empId;
    try{
        const emp = await UserModel.update(res.body,{where:{empId}})
        return res.status(200).json({message:"updated successfully"})
    }
    catch(e){
        console.log(e)
        return res.status(500).json({"error":"internal server error"})
    }

}