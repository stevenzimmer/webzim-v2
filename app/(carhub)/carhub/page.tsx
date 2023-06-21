import CarCard from "@/components/carhub/CarCard";
import { CustomFilter } from "@/components/carhub/CustomFilter"
import Hero from "@/components/carhub/Hero"
import SearchBar from "@/components/carhub/SearchBar"
import { fetchCars } from "@/utils/carhub"


export default async function CarHub() {
  const allCars = await fetchCars();
  console.log({allCars});
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
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
        {!isDataEmpty ? (
          <div className="home__cars">
            {allCars.map((car) => (
             <CarCard car={car} key={car.id} />
            ))}
          </div>
        ) : (
          <div className="home__error-container">
            <p className="text-black text-bold text-xl">There are no cars</p>
            {allCars?.message && <p>{allCars.message}</p>}
          </div>
        )}
      </div>
    
    </div>
  )
}
