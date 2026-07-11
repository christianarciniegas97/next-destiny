
import Card from "@/src/components/layout/card"
import { cardInfo } from "@/src/data/cards"


export default function Destinos() {
  return (
    <>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card 
        id={cardInfo[0].id}
        image={cardInfo[0].img}
        alt={cardInfo[0].title}
        title={cardInfo[0].title}
        paragraph={cardInfo[0].paragraph}
        url={cardInfo[0].url || "/"}
      />
      <Card 
        id={cardInfo[1].id}
        image={cardInfo[1].img}
        alt={cardInfo[1].title}
        title={cardInfo[1].title}
        paragraph={cardInfo[1].paragraph}
      url={cardInfo[1].url || "/"}
      />
      <Card 
        id={cardInfo[2].id}
        image={cardInfo[2].img}
        alt={cardInfo[2].title}
        title={cardInfo[2].title}
        paragraph={cardInfo[2].paragraph}
        url={cardInfo[2].url || "/"}
      />
      <Card 
        id={cardInfo[3].id}
        image={cardInfo[3].img}
        alt={cardInfo[3].title}
        title={cardInfo[3].title}
        paragraph={cardInfo[3].paragraph}
        url={cardInfo[3].url || "/"}
      />
     </div>
     </>
  )
}