import { DestinosServices } from "@/src/services/destinos.service"

const service = new DestinosServices();

export async function GET(
    request : Request,
    {params} : { params : Promise<{ id: string}>}
) {
    const { id } = await params
    const destinoID = parseInt(id, 10)
        if(isNaN(destinoID) ) {
            return Response.json(
                {
                     "message":"Invalid destination id"
                },
                {
                    status : 400
                }
            )
        }
    const destino = await service.getById(destinoID)
    if(!destino){
        return Response.json( 
                {
                     "message":"destination not found"
                },
                {
                    status : 404
                }
        )
        }

    return Response.json(destino)
}