import Card from "@/src/components/layout/card"
import { CostosData, cardInfo } from "@/src/data/cards"


export default function Dashboard() {
  return (
    <>
    <main className="p-10 bg-gray-500">
        <div className="max-w-5xl mx-auto"> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
                
                  <Card 
                  id={CostosData[0].id}
                  image={cardInfo[0].img}
                  alt={cardInfo[0].title}
                  title={CostosData[0].title}
                  paragraph={""}
                  url={cardInfo[0].url || "/"}
                />
                <Card 
                  id={cardInfo[1].id}
                  image={cardInfo[1].img}
                  alt={cardInfo[1].title}
                  title={CostosData[1].title}
                  paragraph={""}
                url={cardInfo[1].url || "/"}
                />
          </div>
        </div>
      </main>
    </>
  )
}