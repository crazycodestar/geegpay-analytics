"use client";
import { useState } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	ResponsiveContainer,
	CartesianGrid,
	Cell,
	Tooltip,
	// ResponsiveContainer,
	// Tooltip,
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

const AnalyticalBarChart = (props: AnalyticalBarChartProps) => {
	const { data } = props;
	const [activeBar, setActiveBar] = useState<number | undefined>();

	const handleSetActiveBar = (_: unknown, index: number) => setActiveBar(index);
	const handleRemoveActiveBar = () => setActiveBar(undefined);

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
				<Tooltip />
				<Bar
					dataKey="y"
					onMouseEnter={handleSetActiveBar}
					onMouseLeave={handleRemoveActiveBar}
				>
					{data.map((_, index) => (
						<Cell
							cursor="pointer"
							// width={30}
							radius={"200px, 20, 0, 0"}
							fill={index === activeBar ? "#34CAA5" : "#34CAA519"}
							key={`cell-${index}`}
						/>
					))}
				</Bar>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default AnalyticalBarChart;
