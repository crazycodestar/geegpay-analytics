import { Graph1, Graph2, Graph3, Graph4 } from "./svgs/graph";
import { Icon1, Icon2, Icon3, Icon4 } from "./svgs/icons";
import { Rate1, Rate2, Rate3, Rate4 } from "./svgs/rates";

const STATS = [
	{
		Logo: <Icon1 />,
		graph: <Graph1 />,
		title: "Total Order",
		numbers: 350,
		rates: <Rate1 />,
	},
	{
		Logo: <Icon2 />,
		graph: <Graph2 />,
		title: "Total Refund",
		numbers: 270,
		rates: <Rate2 />,
	},
	{
		Logo: <Icon3 />,
		graph: <Graph3 />,
		title: "Average Sales",
		numbers: 1567,
		rates: <Rate3 />,
	},
	{
		Logo: <Icon4 />,
		graph: <Graph4 />,
		title: "Total Income",
		numbers: "$350.000",
		rates: <Rate4 />,
	},
];

const StatsCard = () => {
	return (
		<div className="grid grid-cols-1 col-span-3 gap-5 md:grid-cols-2">
			{STATS.map((stat, index) => (
				<div
					key={index}
					className="bg-white dark:bg-[#0D0D0D] dark:border-[#1A1A1A] col-span-1 border flex flex-col rounded-[14px] border-[#EDF2F7] w-full p-4 gap-2.5 h-fit"
				>
					<div className="flex flex-wrap items-center justify-between w-full gap-2">
						<div className="border border-[#DADDDD] dark:border-[#262626] flex items-center justify-center rounded-full w-10 h-10">
							{stat.Logo}
						</div>
						{stat.graph}
					</div>

					<div className="flex flex-col gap-[5px]">
						<h2 className="text-[#898989] font-medium  text-md lg:text-lg  leading-[26px]">
							{stat.title}
						</h2>
						<h1 className="font-semibold text-[#3A3F51] text-2xl leading-[32px]">
							{stat.numbers}
						</h1>
					</div>

					<div className="flex gap-2.5 items-center justify-start w-fit flex-wrap">
						{stat.rates}

						<h4 className="inter text-[#606060] text-sm">vs. previous month</h4>
					</div>
				</div>
			))}
		</div>
	);
};

export default StatsCard;
