import Chart from "../components/Chart";
import Headers from "../components/Headers";
import Products from "../components/Products";
import Schedule from "../components/Schedule";
import Sidebar from "../components/Sidebar";
import TopCards from "../components/TopCards";
const DashboardLayout = ({
  
    }) => {
    return (
        <div className="h-full relative bg-[#F5F5F5] ">
            <div className="hidden h-[650px] mt-6 ml-6 md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-black rounded-3xl">
                <div>
                    <Sidebar />
                </div>
               

            </div>
            <main className="md:pl-80 bg-[#F5F5F5] min-h-screen">
                <Headers />
                <div className="min-h-screen ml-4"> 
                    <TopCards />
                    <Chart />
                    <div className="grid lg:grid-cols-4 p-4 gap-8">
                        <Products />
                        <Schedule />

                    </div>
                </div>

                
                
               
              

            </main>
        </div>
    )
    
}

export default DashboardLayout