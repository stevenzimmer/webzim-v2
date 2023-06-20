import { CustomFilter } from "@/components/carhub/CustomFilter"
import Hero from "@/components/carhub/Hero"
import SearchBar from "@/components/carhub/SearchBar"



export default function CarHub() {
  return (
    <div>
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Cataolog
          </h1>
          <p>
            Explore the cars you might like
          </p>
        </div>
        <div className="home__filters">
        <SearchBar />
        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>
       
      </div>
      </div>
    
    </div>
  )
}
