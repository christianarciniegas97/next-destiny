import { DestinationRepository } from "../repository/destinos.repository"

const repository = new DestinationRepository()

export class DestinosServices {
    
    async getAll() {
        return await repository.findAll()
    }

    async getById(id:number){

        const destino = await repository.findById(id);

        if(!destino){
            return {
                message:"Destination not found"
            }
        }

        return destino;
    }

    async getFeatured(){
        const isFeaturedTrue =  await repository.findFeaturedTrue();
        
        if(!isFeaturedTrue || isFeaturedTrue === null ){
            throw new Error ("Destination not found")
        }
        return isFeaturedTrue
    }
}