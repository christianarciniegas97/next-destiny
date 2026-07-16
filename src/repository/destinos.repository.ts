export class DestinationRepository {
    private destinos = [
            {
                id: 1,
                name:"Thailand"
            },

            {
                id: 2,
                name:"Vietnam"
            }
    ]

    findAll() {
        return this.destinos;
    }

    findById(id : number) {
        return this.destinos.find( (destinos) => destinos.id === id)
        
    }

}