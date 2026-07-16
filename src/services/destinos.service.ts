import { DestinationRepository } from "../repository/destinos.repository"

const repository = new DestinationRepository()

export class DestinosServices {
    getAll() {
        return repository.findAll()
    }

    getById(id : number ){
        return repository.findById(id)
    }
}