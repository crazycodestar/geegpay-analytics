import marcus from "../assets/marcus.jpeg";
import jaydon from "../assets/jaydon.jpeg";
import corey from "../assets/corey.jpeg";
import cooper from "../assets/cooper.jpeg";
import phillip from "../assets/phillip.jpeg";
import { useState } from "react";
import { RotateCcwIcon } from "lucide-react";

const orders = [
	{
		image: marcus,
		name: "Marcus Bergson",
		date: new Date("November 15, 2023"), // date at whatever time
		amount: 80000,
		status: true,
	},
	{
		image: jaydon,
		name: "Jaydon Vaccaro",
		date: new Date("November 15, 2023"), // date at whatever time
		amount: 150000,
		status: false,
	},
	{
		image: corey,
		name: "Corey Schleifer",
		date: new Date("November 14, 2023"), // date at whatever time
		amount: 87000,
		status: true,
	},
	{
		image: cooper,
		name: "Cooper Press",
		date: new Date("November 14, 2023"), // date at whatever time
		amount: 100000,
		status: false,
	},
	{
		image: phillip,
		name: "Phillip Lubin",
		date: new Date("November 13, 2023"), // date at whatever time
		amount: 78000,
		status: true,
	},
];

const OrdersTable = () => {
	const [tableData, setTableData] = useState(orders);
	const [showRefresh, setShowRefresh] = useState(true);
	const handleAddNewRows = () => {
		setShowRefresh(false);
		setTableData((init) => {
			const newData = [
				{
					image: cooper,
					name: "Daniel Mayers",
					date: new Date(),
					amount: 60000,
					status: Boolean(Math.random() < 0.5),
				},
				{
					image: phillip,
					name: "Brian Obama",
					date: new Date(),
					amount: 280000,
					status: Boolean(Math.random() < 0.5),
				},
				...init.filter((_, index) => index < 3),
			];
			return newData;
		});
	};
	return (
		<div className="bg-white col-span-5 dark:bg-[#0D0D0D] border rounded-[14px] border-[#EDF2F7] dark:border-[#1A1A1A] pt-[18px] pb-[31px] px-[20px] flex gap-[14px] flex-col w-full h-fit">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<h2 className="text-[#26282C] dark:text-[#D3D5D9] text-md lg:text-lg  font-semibold">
						Last Orders
					</h2>
					{showRefresh && (
						<div
							className="p-2 rounded-full cursor-pointer hover:bg-accent"
							onClick={handleAddNewRows}
						>
							<RotateCcwIcon className="w-4 h-4" />
						</div>
					)}
				</div>
				<h2 className="text-[#34CAA5] text-md lg:text-lg  font-medium cursor-pointer">
					See All
				</h2>
			</div>

			<div className="items-center justify-center w-full overflow-hidden overflow-x-auto overflow-y-auto md:flex sm:w-full xl:w-full">
				<div className="flex items-center justify-center w-full">
					<table className="w-full overflow-x-auto text-sm text-left text-gray-500 overflow-clip">
						<thead className="text-xxs font-bold text-gray-700 border-b border-[#EDF2F6] dark:border-[#1A1A1A] bg-transparent ">
							<tr>
								<th
									scope="col"
									className="text-xxs font-bold text-[#9CA4AB] bg-transparent pb-5 !pl-0 w-[250.75px]"
								>
									Name
								</th>
								<th
									scope="col"
									className="text-xxs font-bold text-[#9CA4AB] bg-transparent pr-[34.75px] pb-5 !pl-0 w-[116px]"
								>
									Date
								</th>
								<th
									scope="col"
									className="text-xxs font-bold text-[#9CA4AB] bg-transparent pr-[34.75px] pb-5 !pl-0 w-[150px]"
								>
									Amount
								</th>
								<th
									scope="col"
									className="text-xxs font-bold text-[#9CA4AB] bg-transparent pr-[34.75px] pb-5 !pl-0 min-w-[95px]"
								>
									Status
								</th>
								<th
									scope="col"
									className="text-xxs font-bold text-[#9CA4AB] bg-transparent pb-5 !pl-0 w-[80px]"
								>
									Invoice
								</th>
							</tr>
						</thead>
						<tbody>
							{tableData.map((item, index) => {
								const date = item.date.toLocaleDateString("en-US", {
									year: "numeric",
									month: "short",
									day: "numeric",
								});
								const amount = item.amount.toLocaleString("en-US");
								return (
									<tr
										key={index}
										className="border-b border-[#EDF2F6] dark:border-[#1A1A1A] border-opacity-50 text-sm"
									>
										<td className="pt-[13px] pb-4 flex items-start justify-start">
											<div className="min-w-[79px] flex items-center justify-center gap-[10px]">
												<img
													src={item.image}
													alt=""
													className="w-[32px] h-[32px] rounded-full justify-center object-cover bg-cover bg-center"
												/>
												<p className="text-[#3A3F51] dark:text-[#D3D5D9] font-medium text-base line-clamp-1 break-all">
													{item.name}
												</p>
											</div>
										</td>
										<th
											scope="row"
											className="font-medium w-fit pr-9 text-sm text-[#737373]"
										>
											<p className="w-[116px]">{date}</p>
										</th>
										<td className="pr-9">
											<p className="line-clamp-1 break-all text-[#0D062D] dark:text-[#D9D2F9] text-base font-medium">
												${amount}
											</p>
										</td>
										<td className="pr-9 max-w-[320px]">
											<p
												className={`line-clamp-1 ${
													item.status ? "text-[#34CAA5]" : "text-[#ED544E]"
												} text-base`}
											>
												{item.status ? "Paid" : "Refund"}
											</p>
										</td>
										<td className="">
											<div className="flex gap-[6px] items-center cursor-pointer">
												{/* prettier-ignore */}
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path className="fill-[#292D32] dark:fill-[#CDD1D6]" d="M6 11.8334C5.93333 11.8334 5.87333 11.82 5.80667 11.7934C5.62 11.72 5.5 11.5334 5.5 11.3334V7.33337C5.5 7.06004 5.72667 6.83337 6 6.83337C6.27333 6.83337 6.5 7.06004 6.5 7.33337V10.1267L6.98 9.64671C7.17333 9.45337 7.49333 9.45337 7.68667 9.64671C7.88 9.84004 7.88 10.16 7.68667 10.3534L6.35333 11.6867C6.26 11.78 6.12667 11.8334 6 11.8334Z"/>
                          <path className="fill-[#292D32] dark:fill-[#CDD1D6]" d="M5.99964 11.8334C5.87297 11.8334 5.7463 11.7867 5.6463 11.6867L4.31297 10.3534C4.11964 10.16 4.11964 9.84004 4.31297 9.64671C4.5063 9.45338 4.8263 9.45338 5.01964 9.64671L6.35297 10.98C6.5463 11.1734 6.5463 11.4934 6.35297 11.6867C6.25297 11.7867 6.1263 11.8334 5.99964 11.8334Z"/>
                          <path className="fill-[#292D32] dark:fill-[#CDD1D6]" d="M9.99967 15.1667H5.99967C2.37967 15.1667 0.833008 13.62 0.833008 10V6.00004C0.833008 2.38004 2.37967 0.833374 5.99967 0.833374H9.33301C9.60634 0.833374 9.83301 1.06004 9.83301 1.33337C9.83301 1.60671 9.60634 1.83337 9.33301 1.83337H5.99967C2.92634 1.83337 1.83301 2.92671 1.83301 6.00004V10C1.83301 13.0734 2.92634 14.1667 5.99967 14.1667H9.99967C13.073 14.1667 14.1663 13.0734 14.1663 10V6.66671C14.1663 6.39337 14.393 6.16671 14.6663 6.16671C14.9397 6.16671 15.1663 6.39337 15.1663 6.66671V10C15.1663 13.62 13.6197 15.1667 9.99967 15.1667Z"/>
                          <path className="fill-[#292D32] dark:fill-[#CDD1D6]" d="M14.6663 7.1667H11.9997C9.71967 7.1667 8.83301 6.28003 8.83301 4.00003V1.33337C8.83301 1.13337 8.95301 0.9467 9.13967 0.873366C9.32634 0.793366 9.53967 0.840033 9.68634 0.980033L15.0197 6.31337C15.1597 6.45337 15.2063 6.67337 15.1263 6.86003C15.0463 7.0467 14.8663 7.1667 14.6663 7.1667ZM9.83301 2.54003V4.00003C9.83301 5.72003 10.2797 6.1667 11.9997 6.1667H13.4597L9.83301 2.54003Z"/>
                        </svg>
												<p className="text-[#0D062D] dark:text-[#D9D2F9]">
													View
												</p>
											</div>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default OrdersTable;
