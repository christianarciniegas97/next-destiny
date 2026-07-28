import { prisma } from "../lib/prisma";

export class DestinationRepository {


   async findAll() {
        return  await prisma.destination.findMany({
            where : {
                published:true,
            }
        });
    }

   async findFeaturedTrue () {
        return  await prisma.destination.findMany({
            where : {
                published:true,
                featured : true
            },
        });
   }

   async findById(id : number) {
        return await prisma.destination.findUnique({
            where:{
                id
            }
        });
        
    }

}