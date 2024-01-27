import { DarkModeSwitch } from "./DarkModeSwitch";

const Sidebar = () => {
	return (
		<div className="h-[100vh] fixed hidden lg:flex py-5 bg-[#F7F8FA] dark:bg-[#131313] border-r border-[#EBECF2] dark:border-[#171823] flex-col items-center justify-between gap-[28px]">
			<div className="flex flex-col gap-5">
				<div className="px-5 cursor-pointer">
					{/* prettier-ignore */}
					<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path className="fill-[#34CAA5] dark:fill-[#48D0AE]" fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95429 0 0 8.95431 0 20C0 31.0457 8.95429 40 20 40ZM26.2393 9.31684C26.543 8.23805 25.4961 7.60013 24.54 8.2813L11.1931 17.7896C10.1562 18.5283 10.3193 20 11.4381 20H14.9527V19.9728H21.8025L16.2212 21.9421L13.7607 30.6832C13.457 31.762 14.5038 32.3999 15.46 31.7187L28.8069 22.2105C29.8438 21.4718 29.6806 20 28.5619 20H23.2321L26.2393 9.31684Z"/>
          </svg>
				</div>

				<div className="flex flex-col gap-[16px] w-full items-center justify-center">
					<div className="py-[8px] w-full flex items-center justify-center relative cursor-pointer">
						{/* prettier-ignore */}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path className="fill-[#0D062D] dark:fill-[#D9D2F9]" d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z"/>
              <path className="fill-[#0D062D] dark:fill-[#D9D2F9]" opacity="0.4" d="M18.6699 2H16.7699C14.5899 2 13.4399 3.15 13.4399 5.33V7.23C13.4399 9.41 14.5899 10.56 16.7699 10.56H18.6699C20.8499 10.56 21.9999 9.41 21.9999 7.23V5.33C21.9999 3.15 20.8499 2 18.6699 2Z"/>
              <path className="fill-[#0D062D] dark:fill-[#D9D2F9]" d="M18.6699 13.4301H16.7699C14.5899 13.4301 13.4399 14.5801 13.4399 16.7601V18.6601C13.4399 20.8401 14.5899 21.9901 16.7699 21.9901H18.6699C20.8499 21.9901 21.9999 20.8401 21.9999 18.6601V16.7601C21.9999 14.5801 20.8499 13.4301 18.6699 13.4301Z"/>
              <path className="fill-[#0D062D] dark:fill-[#D9D2F9]" opacity="0.4" d="M7.24 13.4301H5.34C3.15 13.4301 2 14.5801 2 16.7601V18.6601C2 20.8501 3.15 22.0001 5.33 22.0001H7.23C9.41 22.0001 10.56 20.8501 10.56 18.6701V16.7701C10.57 14.5801 9.42 13.4301 7.24 13.4301Z"/>
            </svg>

						{/* prettier-ignore */}
						<svg xmlns="http://www.w3.org/2000/svg" width="3" height="21" viewBox="0 0 3 21" fill="none" className="absolute top-0 bottom-0 right-0 my-auto">
              <path className="fill-[#0D062D] dark:fill-[#D9D2F9]" d="M6.53467e-06 3.02509C7.11773e-06 1.42129 1.40951 0.182713 3 0.388889V21C1.34315 21 4.88293e-07 19.6569 1.09063e-06 18L6.53467e-06 3.02509Z"/>
            </svg>
					</div>

					<div className="p-[8px] rounded-full hover:bg-[#B2ABAB]/20 cursor-pointer">
						{/* prettier-ignore */}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M2 12.98V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.17 12L10.7 11.3L7.5 14.5" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.5 9.5L14.99 11.01L14 12" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.5 9.5H16.5V11.5" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
					</div>

					<div className="p-[8px] rounded-full hover:bg-[#B2ABAB]/20 cursor-pointer">
						{/* prettier-ignore */}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12.6801 3.96C13.1601 4.67 13.4401 5.52 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.4098 4C18.3498 4 19.9098 5.57 19.9098 7.5C19.9098 9.39 18.4098 10.93 16.5398 11C16.4598 10.99 16.3698 10.99 16.2798 11" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.16021 14.56C1.74021 16.18 1.74021 18.82 4.16021 20.43C6.91021 22.27 11.4202 22.27 14.1702 20.43C16.5902 18.81 16.5902 16.17 14.1702 14.56C11.4302 12.73 6.92021 12.73 4.16021 14.56Z" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
					</div>

					<div className="p-[8px] rounded-full hover:bg-[#B2ABAB]/20 cursor-pointer">
						{/* prettier-ignore */}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3.16992 7.44006L11.9999 12.55L20.7699 7.47003" stroke="#B7B0B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 21.61V12.54" stroke="#B7B0B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.39014 9.17007C2.39014 7.79007 3.38012 6.11009 4.59012 5.44009L9.93011 2.47006C11.0701 1.84006 12.9401 1.84006 14.0801 2.47006L19.4201 5.44009C20.6301 6.11009 21.6201 7.79007 21.6201 9.17007V14.8201C21.6201 16.2001 20.6301 17.8801 19.4201 18.5501L14.0801 21.5201C12.9401 22.1501 11.0701 22.1501 9.93011 21.5201L4.59012 18.5501C3.38012 17.8801 2.39014 16.2001 2.39014 14.8201V14.0001" stroke="#B7B0B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.9998 13.24V9.58002L10.9297 6.07001L9.87976 5.46997L7.50977 4.09998" stroke="#B7B0B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
					</div>

					<div className="p-[8px] rounded-full hover:bg-[#B2ABAB]/20 cursor-pointer">
						{/* prettier-ignore */}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M14.6599 20.01L13.1399 21.53C12.5199 22.15 11.4999 22.15 10.8799 21.53L9.3599 20.01C9.0999 19.75 8.58992 19.54 8.22992 19.54H6.0799C5.1999 19.54 4.47992 18.8199 4.47992 17.9399V15.79C4.47992 15.43 4.26992 14.92 4.00992 14.66L2.4899 13.14C1.8699 12.52 1.8699 11.5 2.4899 10.88L4.00992 9.35999C4.26992 9.09999 4.47992 8.58998 4.47992 8.22998V6.07996C4.47992 5.19996 5.1999 4.47998 6.0799 4.47998" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.33984 3.99002L10.8598 2.47C11.4798 1.85 12.4998 1.85 13.1198 2.47L14.6399 3.99002C14.8999 4.25002 15.4098 4.46 15.7698 4.46H17.9199C18.7999 4.46 19.5198 5.18009 19.5198 6.06009V8.21C19.5198 8.57 19.7298 9.08 19.9898 9.34L21.5099 10.86C22.1299 11.48 22.1299 12.5 21.5099 13.12L19.9898 14.64C19.7298 14.9 19.5198 15.4101 19.5198 15.7701V17.9201C19.5198 18.8001 18.7999 19.5201 17.9199 19.5201" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 15L15 9" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.4945 14.5H14.5035" stroke="#B2ABAB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.49451 9.5H9.50349" stroke="#B2ABAB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
					</div>

					<div className="p-[8px] rounded-full hover:bg-[#B2ABAB]/20 cursor-pointer">
						{/* prettier-ignore */}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 8V13" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.9946 16H12.0036" stroke="#B2ABAB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
					</div>

					<DarkModeSwitch />
				</div>
			</div>

			<div className="flex flex-col gap-[16px] w-full items-center justify-center">
				<div className="p-[8px] rounded-full hover:bg-[#B2ABAB]/20 cursor-pointer">
					{/* prettier-ignore */}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8.5 12H14.5" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.5 15L15.5 12L12.5 9" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
				</div>

				<div className="p-[8px] rounded-full hover:bg-[#B2ABAB]/20 cursor-pointer">
					{/* prettier-ignore */}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C12.41 15 12.81 14.92 13.17 14.76" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.87988 20.5799L7.96988 21.2099C8.75988 21.6799 9.77988 21.3999 10.2499 20.6099L10.3599 20.4199C11.2599 18.8499 12.7399 18.8499 13.6499 20.4199L13.7599 20.6099C14.2299 21.3999 15.2499 21.6799 16.0399 21.2099L17.7699 20.2199C18.6799 19.6999 18.9899 18.5299 18.4699 17.6299C17.5599 16.0599 18.2999 14.7799 20.1099 14.7799C21.1499 14.7799 22.0099 13.9299 22.0099 12.8799V11.1199C22.0099 10.0799 21.1599 9.21995 20.1099 9.21995C19.0999 9.21995 18.4199 8.81995 18.1799 8.18995C17.9899 7.69995 18.0699 7.05995 18.4699 6.36995C18.9899 5.45995 18.6799 4.29995 17.7699 3.77995L16.9599 3.31995" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.64 3.58006C12.74 5.15006 11.26 5.15006 10.35 3.58006L10.24 3.39006C9.78 2.60006 8.76 2.32006 7.97 2.79006L6.24 3.78006C5.33 4.30006 5.02 5.47006 5.54 6.38006C6.45 7.94006 5.71 9.22006 3.9 9.22006C2.86 9.22006 2 10.0701 2 11.1201V12.8801C2 13.9201 2.85 14.7801 3.9 14.7801C5.71 14.7801 6.45 16.0601 5.54 17.6301" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
				</div>

				<div className="p-[8px] rounded-full hover:bg-[#B2ABAB]/20 cursor-pointer">
					{/* prettier-ignore */}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6.56 14.5599L4 11.9999L6.56 9.43994" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.23982 12H4.06982" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.2398 12H12.2798" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.01 6.47998C19.25 7.83998 20 9.70998 20 12C20 17 16.42 20 12 20" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 4C13.05 4 14.05 4.17 14.97 4.49" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
