import { useState } from "react";
import profile from "../assets/profile.jpeg";
import MobileSidebar from "./mobile-sidebar";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuGroup,
	DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { User, LogOut, CreditCard } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { formatDate, getInitials } from "@/lib/utils";

const DATA = {
	username: "Justin Bergson",
	email: "Justin@gmail.com",
	image: profile,
};

const NOTIFICATION_DATA = [
	{
		name: "Louwra Croth",
		date: "Just now",
		content: "Lorem ipsum dolor sit amet ipsum consectetur adipisicing elit.",
		image: "https://picsum.photos/200",
	},
	{
		name: "Banner Durello",
		date: "1 minute ago",
		content: "Lorem ipsum dolor sit amet con adipi elit. Eaque, atque!",
		image: "https://picsum.photos/200",
	},
];

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState<Date | undefined>(new Date());
	// TODO: make notifications go off
	const [isNewNotification] = useState(true);

	// const handleTurnOffNotificationAlert = () => setIsNewNotification(false);

	return (
		<>
			<nav className="px-[18px] z-40 fixed bg-[#FAFAFA] dark:bg-[#121212] dark:border-[#171823] py-[18px] border border-b border-[#E5EAEF] flex items-center justify-between w-full lg:pr-[99px]">
				<h1 className="hidden text-[#26282C] dark:text-[#D3D5D9] text-lg font-semibold cursor-pointer lg:block lg:text-xl">
					Dashboard
				</h1>
				<div
					className="border dark:border-[#262626] cursor-pointer border-[#DADDDD] lg:hidden flex items-center justify-center px-[15px] py-[18px] rounded-full"
					onClick={() => setOpen(!open)}
				>
					{/* prettier-ignore */}
					<svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" width="15" height="2" rx="1" className="fill-[#78828A] dark:fill-[#171823]"/>
            <rect x="0.5" y="4" width="15" height="2" rx="1" fill="#78828A"/>
            <rect x="0.5" y="8" width="15" height="2" rx="1" fill="#78828A"/>
            </svg>
				</div>

				<div className="flex flex-col md:flex-row items-center justify-center gap-[22px]">
					<div className="relative hidden lg:block">
						<div className="absolute inset-y-0 start-0 flex items-center ps-[16px] pointer-events-none">
							{/* prettier-ignore */}
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68945 1C12.9293 1 16.3781 4.3727 16.3781 8.51907C16.3781 10.4753 15.6104 12.2595 14.3542 13.5986L16.8261 16.0109C17.0574 16.2371 17.0582 16.6031 16.8269 16.8294C16.7116 16.9436 16.5592 17 16.4076 17C16.2568 17 16.1052 16.9436 15.9892 16.8309L13.4874 14.3912C12.1714 15.4219 10.5028 16.0389 8.68945 16.0389C4.44955 16.0389 1 12.6655 1 8.51907C1 4.3727 4.44955 1 8.68945 1ZM8.68945 2.15821C5.10251 2.15821 2.18433 5.01125 2.18433 8.51907C2.18433 12.0269 5.10251 14.8807 8.68945 14.8807C12.2756 14.8807 15.1938 12.0269 15.1938 8.51907C15.1938 5.01125 12.2756 2.15821 8.68945 2.15821Z" fill="#78828A"/>
              </svg>
						</div>
						<input
							type="text"
							className="block w-[250px] xl:w-[333px] p-3 ps-10 text-base dark:text-[#A3A3A3] text-[#A3A3A3] border border-[#DADDDD] rounded-[24px] dark:border-[#2E3232] bg-white dark:bg-[#0D0D0D] placeholder:text-[#A3A3A3] dark:placeholder:text-[#A3A3A3]"
							placeholder="Search..."
							required
						/>
					</div>

					<DropdownMenu>
						<DropdownMenuTrigger className="gap-2.5 hidden lg:flex px-[16px] py-[12px]">
							{/* prettier-ignore */}
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2 9.79483C2 6.70067 2 5.15318 2.9376 4.19236C3.8744 3.23071 5.3832 3.23071 8.4 3.23071H11.6C14.6168 3.23071 16.1256 3.23071 17.0624 4.19236C18 5.15318 18 6.70067 18 9.79483V11.4359C18 14.53 18 16.0775 17.0624 17.0383C16.1256 18 14.6168 18 11.6 18H8.4C5.3832 18 3.8744 18 2.9376 17.0383C2 16.0775 2 14.53 2 11.4359V9.79483Z" stroke="black" stroke-width="1.37144"/>
            <path d="M5.9999 3.23077V2M13.9999 3.23077V2M2.3999 7.33334H17.5999" stroke="black" stroke-width="1.37144" stroke-linecap="round"/>
            <path d="M14.8002 13.8974C14.8002 14.115 14.7159 14.3237 14.5659 14.4776C14.4159 14.6314 14.2124 14.7179 14.0002 14.7179C13.788 14.7179 13.5845 14.6314 13.4345 14.4776C13.2845 14.3237 13.2002 14.115 13.2002 13.8974C13.2002 13.6798 13.2845 13.4711 13.4345 13.3172C13.5845 13.1633 13.788 13.0769 14.0002 13.0769C14.2124 13.0769 14.4159 13.1633 14.5659 13.3172C14.7159 13.4711 14.8002 13.6798 14.8002 13.8974ZM14.8002 10.6153C14.8002 10.8329 14.7159 11.0416 14.5659 11.1955C14.4159 11.3494 14.2124 11.4358 14.0002 11.4358C13.788 11.4358 13.5845 11.3494 13.4345 11.1955C13.2845 11.0416 13.2002 10.8329 13.2002 10.6153C13.2002 10.3977 13.2845 10.189 13.4345 10.0351C13.5845 9.88125 13.788 9.7948 14.0002 9.7948C14.2124 9.7948 14.4159 9.88125 14.5659 10.0351C14.7159 10.189 14.8002 10.3977 14.8002 10.6153ZM10.8002 13.8974C10.8002 14.115 10.7159 14.3237 10.5659 14.4776C10.4159 14.6314 10.2124 14.7179 10.0002 14.7179C9.78802 14.7179 9.58454 14.6314 9.43451 14.4776C9.28448 14.3237 9.2002 14.115 9.2002 13.8974C9.2002 13.6798 9.28448 13.4711 9.43451 13.3172C9.58454 13.1633 9.78802 13.0769 10.0002 13.0769C10.2124 13.0769 10.4159 13.1633 10.5659 13.3172C10.7159 13.4711 10.8002 13.6798 10.8002 13.8974ZM10.8002 10.6153C10.8002 10.8329 10.7159 11.0416 10.5659 11.1955C10.4159 11.3494 10.2124 11.4358 10.0002 11.4358C9.78802 11.4358 9.58454 11.3494 9.43451 11.1955C9.28448 11.0416 9.2002 10.8329 9.2002 10.6153C9.2002 10.3977 9.28448 10.189 9.43451 10.0351C9.58454 9.88125 9.78802 9.7948 10.0002 9.7948C10.2124 9.7948 10.4159 9.88125 10.5659 10.0351C10.7159 10.189 10.8002 10.3977 10.8002 10.6153ZM6.8002 13.8974C6.8002 14.115 6.71591 14.3237 6.56588 14.4776C6.41585 14.6314 6.21237 14.7179 6.0002 14.7179C5.78802 14.7179 5.58454 14.6314 5.43451 14.4776C5.28448 14.3237 5.2002 14.115 5.2002 13.8974C5.2002 13.6798 5.28448 13.4711 5.43451 13.3172C5.58454 13.1633 5.78802 13.0769 6.0002 13.0769C6.21237 13.0769 6.41585 13.1633 6.56588 13.3172C6.71591 13.4711 6.8002 13.6798 6.8002 13.8974ZM6.8002 10.6153C6.8002 10.8329 6.71591 11.0416 6.56588 11.1955C6.41585 11.3494 6.21237 11.4358 6.0002 11.4358C5.78802 11.4358 5.58454 11.3494 5.43451 11.1955C5.28448 11.0416 5.2002 10.8329 5.2002 10.6153C5.2002 10.3977 5.28448 10.189 5.43451 10.0351C5.58454 9.88125 5.78802 9.7948 6.0002 9.7948C6.21237 9.7948 6.41585 9.88125 6.56588 10.0351C6.71591 10.189 6.8002 10.3977 6.8002 10.6153Z" fill="black"/>
            </svg>

							<h3 className="text-sm text-[#26282C] dark:text-[#D3D5D9] font-medium">
								{formatDate(date || new Date())}
							</h3>
						</DropdownMenuTrigger>

						<DropdownMenuContent>
							<Calendar
								mode="single"
								selected={date}
								onSelect={setDate}
								// className="border rounded-md shadow"
							/>
						</DropdownMenuContent>
					</DropdownMenu>

					<DropdownMenu>
						<DropdownMenuTrigger className="relative border-[0.769px] cursor-pointer border-[#DADDDD] hidden lg:flex items-center justify-center p-[11px] rounded-full">
							{/* prettier-ignore */}
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path className="fill-[#0D062D] dark:fill-[#D9D2F9]" fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 1.04163C8.2872 1.04163 6.64449 1.72206 5.43332 2.93323C4.22215 4.1444 3.54172 5.7871 3.54172 7.49996V8.08663C3.54167 8.66737 3.36973 9.23511 3.04755 9.71829L2.09172 11.1541C0.980053 12.8208 1.82839 15.0858 3.76089 15.6125C4.39005 15.7841 5.02505 15.9291 5.66422 16.0483L5.66589 16.0525C6.30589 17.7625 8.01839 18.9583 10.0001 18.9583C11.9817 18.9583 13.6942 17.7625 14.3351 16.0525L14.3367 16.0483C14.9769 15.9292 15.6119 15.7838 16.2401 15.6125C18.1726 15.0858 19.0209 12.8208 17.9092 11.1541L16.9526 9.71829C16.6304 9.23511 16.4584 8.66737 16.4584 8.08663V7.49996C16.4584 5.7871 15.778 4.1444 14.5668 2.93323C13.3556 1.72206 11.7129 1.04163 10.0001 1.04163ZM12.8134 16.2808C10.9442 16.5041 9.05507 16.5041 7.18589 16.2808C7.77839 17.1316 8.80922 17.7083 10.0001 17.7083C11.1909 17.7083 12.2209 17.1316 12.8134 16.2808ZM4.79172 7.49996C4.79172 6.11862 5.34045 4.79386 6.31721 3.81711C7.29396 2.84036 8.61872 2.29163 10.0001 2.29163C11.3814 2.29163 12.7062 2.84036 13.6829 3.81711C14.6597 4.79386 15.2084 6.11862 15.2084 7.49996V8.08663C15.2084 8.91412 15.4534 9.72329 15.9126 10.4116L16.8692 11.8475C17.0175 12.0695 17.1108 12.3235 17.1415 12.5887C17.1722 12.8539 17.1393 13.1226 17.0457 13.3726C16.9521 13.6226 16.8004 13.8467 16.6031 14.0265C16.4057 14.2063 16.1685 14.3366 15.9109 14.4066C12.0407 15.4621 7.95855 15.4621 4.08839 14.4066C3.83103 14.3364 3.59403 14.206 3.39692 14.0263C3.19981 13.8465 3.04822 13.6225 2.95464 13.3727C2.86106 13.1228 2.82816 12.8544 2.85866 12.5893C2.88915 12.3243 2.98217 12.0703 3.13005 11.8483L4.08839 10.4116C4.54717 9.72303 4.79189 8.91406 4.79172 8.08663V7.49996Z" fill="#0D062D"/>
            </svg>
							{isNewNotification && (
								<span className="absolute top-2 right-2">
									<span className="relative flex w-3 h-3">
										<span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
										<span className="relative inline-flex w-3 h-3 rounded-full bg-primary" />
									</span>
								</span>
							)}
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<div className="space-y-2">
								{NOTIFICATION_DATA.map((notification, index) => {
									return (
										<div className="flex gap-3 p-3 cursor-pointer hover:bg-accent rounded-2xl">
											<Avatar>
												<AvatarImage
													alt="user image"
													src={notification.image + "?random" + index}
												/>
												<AvatarFallback>
													{getInitials(notification.name)}
												</AvatarFallback>
											</Avatar>
											<div>
												<div className="flex items-center gap-1">
													<p className="font-semibold tracking-tight scroll-m-20">
														{notification.name}
													</p>
													<p className="text-sm text-muted-foreground">
														{notification.date}
													</p>
												</div>
												<p className="w-[280px]">{notification.content}</p>
											</div>
										</div>
									);
								})}
							</div>
						</DropdownMenuContent>
					</DropdownMenu>
					<DropdownMenu>
						<DropdownMenuTrigger className="cursor-pointer hidden lg:flex gap-[8px] items-center justify-center border-[0.769px] border-[#DADDDD] rounded-full px-[8px] py-[4px]">
							<Avatar>
								{DATA.image ? (
									<AvatarImage src={DATA.image} alt="image" />
								) : null}
								<AvatarFallback>JB</AvatarFallback>
							</Avatar>
							<div className="flex gap-[1px] flex-col items-end justify-center inter">
								<h3 className="text-base text-[#26282C] dark:text-[#D3D5D9]">
									Justin Bergson
								</h3>
								<h4 className="text-sm text-[#787486]">Justin@gmail.com</h4>
							</div>

							{/* prettier-ignore */}
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="pl-2 w-fit">
            <path d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z" fill="#0D062D"/>
            </svg>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuGroup>
								<DropdownMenuItem asChild>
									<a href="/#account">
										<User className="w-4 h-4 mr-2" />
										<span>Account</span>
									</a>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<CreditCard className="w-4 h-4 mr-2" />
									<span>Billing</span>
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<LogOut className="w-4 h-4 mr-2" />
								<span>Log out</span>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					<div className="flex items-center justify-center gap-5 lg:hidden b order">
						{/* <img
              src={profile}
              alt=""
              className="w-[47px] h-[47px] rounded-full justify-center object-cover bg-cover bg-center"
            /> */}
						<div className="cursor-pointer flex gap-[8px] items-center justify-center border-[0.769px] border-[#DADDDD] rounded-full px-[16px] py-[16px]">
							{/* prettier-ignore */}
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68945 1C12.9293 1 16.3781 4.3727 16.3781 8.51907C16.3781 10.4753 15.6104 12.2595 14.3542 13.5986L16.8261 16.0109C17.0574 16.2371 17.0582 16.6031 16.8269 16.8294C16.7116 16.9436 16.5592 17 16.4076 17C16.2568 17 16.1052 16.9436 15.9892 16.8309L13.4874 14.3912C12.1714 15.4219 10.5028 16.0389 8.68945 16.0389C4.44955 16.0389 1 12.6655 1 8.51907C1 4.3727 4.44955 1 8.68945 1ZM8.68945 2.15821C5.10251 2.15821 2.18433 5.01125 2.18433 8.51907C2.18433 12.0269 5.10251 14.8807 8.68945 14.8807C12.2756 14.8807 15.1938 12.0269 15.1938 8.51907C15.1938 5.01125 12.2756 2.15821 8.68945 2.15821Z" fill="#78828A"/>
              </svg>
						</div>

						<div className="cursor-pointer flex gap-[8px] items-center justify-center border-[0.769px] border-[#DADDDD] rounded-full px-[6px] py-[6px]">
							<img
								src={profile}
								alt=""
								className="w-[38px] h-[38px] rounded-full justify-center object-cover bg-cover bg-center"
							/>
						</div>
					</div>
				</div>
			</nav>

			{open ? (
				<div className="fixed lg:hidden top-0 bottom-0 my-auto z-50 h-[100vh] w-full flex items-start justify-start">
					<div className="w-fit ml-[150px] h-[100vh] my-auto flex items-start justify-center">
						<MobileSidebar />
					</div>

					<div
						className="bg-black/50 h-[100vh] w-full flex items-center justify-start"
						onClick={() => setOpen(!open)}
					></div>
				</div>
			) : null}
		</>
	);
};

export default Navbar;
