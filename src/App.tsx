import "./index.css";

import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import BarChart from "./components/bar-chart";
import StatsCard from "./components/stats-cards";
import OrdersTable from "./components/orders-table";
import PlatformChart from "./components/platform-chart";

function App() {
	return (
		<main className="bg-[#FAFAFA] dark:bg-[#121212] h-[100vh] w-full flex items-center justify-centers">
			<Sidebar />
			<div className="hidden lg:block h-[100vh] w-[85px]"></div>
			<div className="h-[100vh] w-[100%]">
				<Navbar />
				<div className="w-full h-[90px]"></div>

				<section className="flex flex-col gap-[24px] lg:gap-[20px] p-5 w-full bg-[#FAFAFA] dark:bg-[#121212]">
					<div className="grid grid-cols-1 space-y-5 lg:space-y-0 lg:space-x-5 lg:grid-cols-8">
						<BarChart />
						<StatsCard />
					</div>
					<div className="grid grid-cols-1 space-y-5 lg:space-y-0 lg:space-x-5 lg:grid-cols-8">
						<OrdersTable />
						<PlatformChart />
					</div>
				</section>
			</div>
		</main>
	);
}

export default App;
