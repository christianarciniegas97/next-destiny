
import { DestinosServices } from "@/src/services/destinos.service"

const service =  new DestinosServices ();

export async  function GET () {
    const destinos = await service.getAll()
    return Response.json(destinos)
}