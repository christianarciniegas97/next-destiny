import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();


async function main(){

    await prisma.destination.createMany({
        data:[
            {
                name:"Tailandia",
                slug:"tailandia",
                image: "../public/images/tailandia.jpg",
                description:
                "Playas paradisíacas, templos milenarios, selvas exuberantes y una gastronomía que conquista desde el primer bocado… ¡Tailandia lo tiene todo! Este destino del Sudeste Asiático se ha convertido en el sueño de muchos viajeros, y no es para menos.",
                published:true
            },
            {
                name:"Vietnam",
                slug:"vietnam",
                image: "../public/images/tailandia.jpg",
                description:
                "Vietnam es una de las maravillas del planeta que hay que visitar. Se puede combinar con los destinos de Camboya y Tailandia.",
                published:true
            }
        ]
    })

}


main()
.then(()=>{
    console.log("Seed completed")
})
.catch(error=>{
    console.error(error)
})
.finally(async()=>{
    await prisma.$disconnect()
})

