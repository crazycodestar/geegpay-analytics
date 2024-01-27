import { motion } from "framer-motion";

const PlatformChart = () => {
	return (
		<div className="bg-white col-span-3 dark:bg-[#0D0D0D] border rounded-[14px] border-[#EDF2F7] dark:border-[#1A1A1A] pt-[18px] pb-[31px] px-[20px] flex gap-[20px] flex-col w-full">
			<div className="flex items-center justify-between">
				<h2 className="text-[#26282C] dark:text-[#D3D5D9] text-md lg:text-lg font-semibold">
					Top Platform
				</h2>
				<h2 className="text-[#34CAA5] text-md lg:text-lg  font-medium cursor-pointer underline-offset-4 hover:underline">
					See All
				</h2>
			</div>

			<div className="flex flex-col gap-5">
				<div className="flex flex-col items-start justify-center gap-4">
					<h2 className="text-[#22242C] dark:text-[#D3D5DD] text-md lg:text-lg  font-semibold">
						Book Bazaar
					</h2>
					<div className="w-full bg-[#F5F5F5] dark:bg-[#171717] rounded-full h-3">
						<motion.div
							initial={{ width: "0%" }}
							animate={{ width: "54.2%" }}
							transition={{
								duration: 0.5,
								delay: 0.5,
								ease: [0, 0.71, 0.2, 1.01],
							}}
							className="bg-[#6160DC] h-3 rounded-full"
						></motion.div>
					</div>
					<div className="flex items-center justify-between w-full">
						<h2 className="text-md lg:text-lg  text-[#525252]">$2,500,000</h2>

						<h2 className="text-md lg:text-lg  text-[#525252]">+15%</h2>
					</div>
				</div>

				<div className="flex flex-col items-start justify-center gap-4">
					<h2 className="text-[#22242C] dark:text-[#D3D5DD] text-md lg:text-lg  font-semibold">
						Artisan Aisle
					</h2>
					<div className="w-full bg-[#F5F5F5]  dark:bg-[#171717] rounded-full h-3">
						<motion.div
							initial={{ width: "0%" }}
							animate={{ width: "45.2%" }}
							transition={{
								duration: 0.5,
								delay: 0.5,
								ease: [0, 0.71, 0.2, 1.01],
							}}
							className="bg-[#54C5EB] h-3 rounded-full"
						></motion.div>
					</div>
					<div className="flex items-center justify-between w-full">
						<h2 className="text-md lg:text-lg  text-[#525252]">$1,800,000</h2>

						<h2 className="text-md lg:text-lg  text-[#525252]">+10%</h2>
					</div>
				</div>

				<div className="flex flex-col items-start justify-center gap-4">
					<h2 className="text-[#22242C] dark:text-[#D3D5DD] text-md lg:text-lg  font-semibold">
						Toy Troop
					</h2>
					<div className="w-full bg-[#F5F5F5] dark:bg-[#171717] rounded-full h-3">
						<motion.div
							initial={{ width: "0%" }}
							animate={{ width: "27.02%" }}
							transition={{
								duration: 0.5,
								delay: 0.5,
								ease: [0, 0.71, 0.2, 1.01],
							}}
							className="bg-[#FFB74A] h-3 rounded-full"
						></motion.div>
					</div>
					<div className="flex items-center justify-between w-full">
						<h2 className="text-md lg:text-lg  text-[#525252]">$1,200,000</h2>

						<h2 className="text-md lg:text-lg  text-[#525252]">+8%</h2>
					</div>
				</div>

				<div className="flex flex-col items-start justify-center gap-4">
					<h2 className="text-[#22242C] dark:text-[#D3D5DD] text-md lg:text-lg  font-semibold">
						XStore
					</h2>
					<div className="w-full bg-[#F5F5F5] dark:bg-[#171717] rounded-full h-3">
						<motion.div
							initial={{ width: "0%" }}
							animate={{ width: "27.002%" }}
							transition={{
								duration: 0.5,
								delay: 0.5,
								ease: [0, 0.71, 0.2, 1.01],
							}}
							className="bg-[#FF4A55] h-3 rounded-full"
						></motion.div>
					</div>
					<div className="flex items-center justify-between w-full">
						<h2 className="text-md lg:text-lg  text-[#525252]">$600,000</h2>

						<h2 className="text-md lg:text-lg  text-[#525252]">+5%</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlatformChart;
