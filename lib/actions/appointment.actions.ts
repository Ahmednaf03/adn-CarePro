
"use server"
import { ID } from "node-appwrite";
import { APPOINTMENT_COLLECTION_ID, DATABASE_ID, databases, ENDPOINT,  PROJECT_ID } from "../appwrite.config";
import { parseStringify } from "../utils";


export const createAppointment = async (appointment :CreateAppointmentParams)=>{
    try {
        console.log(appointment);
        
        const newAppointment = await databases.createDocument(
            DATABASE_ID!,
            APPOINTMENT_COLLECTION_ID!,
            ID.unique(),
            {
              
            ...appointment
            }
          );
      
          return parseStringify(newAppointment);
    } catch (error) {
        console.log(error);
        
    }
}
export const getAppointment = async (appointmentId:string)=>{
try {
    const appointment = await databases.getDocument(
        DATABASE_ID!,
        APPOINTMENT_COLLECTION_ID!,
        appointmentId
    )

    return parseStringify(appointment);
} catch (error) {
    console.log("following error has occured "+error);
    
}
}