import { useState } from "react";
import AnalyticalBarChart from "./bar-chart-graph";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const data = [
	{
		x: "Jan",
		y: 8000,
	},
	{
		x: "Feb",
		y: 18000,
	},
	{
		x: "Mar",
		y: 4000,
	},
	{
		x: "Apr",
		y: 28000,
	},
	{
		x: "May",
		y: 9000,
	},
	{
		x: "Jun",
		y: 45000,
	},
	{
		x: "Jul",
		y: 33000,
	},
	{
		x: "Aug",
		y: 20000,
	},
	{
		x: "Sep",
		y: 32000,
	},
	{
		x: "Oct",
		y: 5000,
	},
	{
		x: "Nov",
		y: 30000,
	},
	{
		x: "Dec",
		y: 26000,
	},
];

const weeklyData = [
	{
		x: "Mon",
		y: 3000,
	},
	{
		x: "Tue",
		y: 2000,
	},
	{
		x: "Wed",
		y: 2780,
	},
	{
		x: "Thu",
		y: 4000,
	},
	{
		x: "Fri",
		y: 1890,
	},
	{
		x: "Sat",
		y: 2390,
	},
	{
		x: "Sun",
		y: 3490,
	},
];

const BarChart = () => {
	const options = {
		daily: weeklyData,
		monthly: data,
	} as const;
	type Options = keyof typeof options;

	const [dataType, setDataType] = useState<Options>("daily");

	const handleSelectData = (option: Options) => setDataType(option);

	return (
		<div className="bg-white dark:bg-[#0D0D0D] col-span-5 flex flex-col border rounded-[14px] border-[#EDF2F7] dark:border-[#1A1A1A]">
			<div className="flex items-center justify-between px-[20px] py-[16px]">
				<h4 className="text-md lg:text-lg font-semibold text-[#26282C] dark:text-[#D3D5D9]">
					Sales Trends
				</h4>

				<div className="flex items-center justify-center gap-2.5">
					<h4 className="text-xs lg:text-sm font-medium text-[#3A3F51] dark:text-[#D3D5D9]">
						Short By:
					</h4>
					<Select
						onValueChange={(value: Options) => handleSelectData(value)}
						defaultValue={Object.keys(options)[0]}
					>
						<SelectTrigger className="w-[180px]">
							<SelectValue
								className="capitalize w-fit"
								placeholder="select duration"
							/>
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{Object.keys(options).map((option, index) => (
									<SelectItem className="capitalize" key={index} value={option}>
										{option}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>
			<div className="h-[200px] w-full lg:h-auto lg:flex-1">
				<AnalyticalBarChart data={options[dataType]} />
			</div>
		</div>
	);
};

export default BarChart;
