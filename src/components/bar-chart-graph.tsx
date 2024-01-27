"use client";
import { useState } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	ResponsiveContainer,
	CartesianGrid,
	BarProps,
} from "recharts";

interface AnalyticalBarChartProps {
	data: { x: string; y: number }[];
}

type RenderCustormAxisTick = {
	x: number;
	y: number;
	payload: { value: string | number };
	[arg: string]: unknown;
};
const renderCustomXAxisTick = ({ x, y, payload }: RenderCustormAxisTick) => {
	return (
		<text
			orientation="bottom"
			width="350"
			height="30"
			x={x}
			y={y}
			stroke="none"
			fill="#888888"
			className="recharts-text recharts-cartesian-axis-tick-value"
			textAnchor="middle"
			fontSize={13.5}
		>
			<tspan x={x} dy="0.71em">
				{payload.value}
			</tspan>
		</text>
	);
};

const renderCustomYAxisTick = ({ x, y, payload }: RenderCustormAxisTick) => {
	return (
		<text
			orientation="left"
			width="60"
			height="280"
			x={x}
			y={y}
			stroke="none"
			fill="#888888"
			className="recharts-text recharts-cartesian-axis-tick-value"
			textAnchor="end"
			fontSize={13.5}
		>
			<tspan x={x} dy="0.355em">
				{payload.value}
			</tspan>
		</text>
	);
};

const getPath = (
	x: BarProps["x"],
	y: BarProps["y"],
	width: BarProps["width"],
	height: BarProps["height"]
) => {
	if (
		typeof x != "number" ||
		typeof y != "number" ||
		typeof width != "number" ||
		typeof height != "number"
	)
		return;

	console.log("new", x, y, width, height);

	return `M${x + 0.727539} ${y + 15}C${x + 0.727539} ${y + 6.71572} ${
		x + 7.44327
	} ${y + 0} ${x + 15.7275} ${y + 0}C${x + 24.0118} ${y + 0} ${x + 30.7275} ${
		y + 6.71573
	} ${x + 30.7275} ${y + 15}V${y + height}H${x + 0.727539}V${y + 15}Z`;
};

const RectanglarRoundedBar = (props: BarProps) => {
	const [isActive, setIsActive] = useState(false);
	const { x, y, width, height } = props;
	return (
		<>
			<path
				onMouseEnter={() => setIsActive(true)}
				onMouseLeave={() => setIsActive(false)}
				d={getPath(x, y, width, height)}
				// fill="url(#paint0_linear_2126_1974)"
				fill={isActive ? "url(#paint0_linear_2126_1974)" : "#34CAA5"}
				fillOpacity={isActive ? 1 : 0.1}
			/>
			<defs>
				<linearGradient
					id="paint0_linear_2126_1974"
					x1="15.7275"
					y1="0"
					x2="15.7275"
					y2="216"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#34CAA5" />
					<stop offset="1" stop-color="#34CAA5" stop-opacity="0" />
				</linearGradient>
			</defs>
		</>
	);
};

const AnalyticalBarChart = (props: AnalyticalBarChartProps) => {
	const { data } = props;
	// const [activeBar, setActiveBar] = useState<number | undefined>();

	// const handleSetActiveBar = (_: unknown, index: number) => setActiveBar(index);
	// const handleRemoveActiveBar = () => setActiveBar(undefined);

	return (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart
				width={450}
				height={350}
				data={data}
				margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
			>
				<CartesianGrid vertical={false} strokeDasharray="3 3" />
				<XAxis
					interval={0}
					dataKey="x"
					tickLine={false}
					axisLine={false}
					tick={renderCustomXAxisTick}
				/>
				<YAxis
					tick={renderCustomYAxisTick}
					axisLine={false}
					tickLine={false}
					tickCount={7}
					interval={"equidistantPreserveStart"}
					type="number"
				/>
				{/* <Tooltip content={<CustomTooltip />} /> */}
				<Bar
					barSize={30}
					shape={<RectanglarRoundedBar dataKey={1} />}
					dataKey="y"
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default AnalyticalBarChart;
