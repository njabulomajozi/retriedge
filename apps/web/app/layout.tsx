import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';
// import { ClerkProvider, UserButton } from '@clerk/nextjs';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'retriedge',
	description: '',
};

interface IMenuItem {
	icons: {
    left: {
      iconName: string;
      alt: string;
      width: number;
      height: number;
    };
    right?: {
      iconName: string;
      alt: string;
      width: number;
      height: number;
    };
	};
	href: string;
	title: string;
}

const Subscription = (props: { subscription: string }) => {
	return (
		<span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
			{props.subscription}
		</span>
	);
};

const Counter = (props: { value: string }) => {
	return (
		<span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
			{props.value}
		</span>
	);
};

const menuItems: Array<IMenuItem> = [
	// {
	// 	icons: {
	// 		left: {
  //       iconName: 'home',
  //       alt: '',
  //       width: 32,
  //       height: 32
  //     }
	// 	},
	// 	href: '/',
	// 	title: 'Dashboard',
	// },
  {
		icons: {
			left: {
        iconName: 'database',
        alt: '',
        width: 32,
        height: 32
      }
		},
		href: '/',
		title: 'Testing',
	},
];

function Base({ children }: { children: React.ReactNode }) {
	return (
		<>
			<nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
				<div className="px-3 py-3 lg:px-5 lg:pl-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center justify-start rtl:justify-end">
							<button
								data-drawer-target="logo-sidebar"
								data-drawer-toggle="logo-sidebar"
								aria-controls="logo-sidebar"
								type="button"
								className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							>
								<span className="sr-only">Open sidebar</span>
								<svg
									className="w-6 h-6"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										clip-rule="evenodd"
										fill-rule="evenodd"
										d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
									></path>
								</svg>
							</button>
							<a
								href="https://flowbite.com"
								className="flex ms-2 md:me-24"
							>
								<span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
									retriedge
								</span>
							</a>
						</div>
						<div className="flex items-center">
							<div className="flex items-center ms-3">
								{/* <UserButton /> */}
							</div>
						</div>
					</div>
				</div>
			</nav>

			<aside
				id="logo-sidebar"
				className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
				aria-label="Sidebar"
			>
				<div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
					<ul className="space-y-2 font-medium">
						{menuItems.map(({ icons, href, title }) => {
							return (
								<li key={title}>
									<Link
										href={href}
										className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
									>
                    {
                      <Image src={`/icons/${icons.left.iconName}.svg`} alt={icons.left.alt} width={icons.left.width} height={icons.left.height} />
                    }
										<span className="ms-3">{title}</span>
                    {
                      icons.right && <Image src={`/icons/${icons.right.iconName}.svg`} alt={icons.right.alt} width={icons.right.width} height={icons.right.height} />
                    }
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</aside>

      <div className='bg-red-400a flex sm:ml-64 p-8 pt-[5%]'>{children}</div>
		</>
	);
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		// <ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
					<Base>{children}</Base>
					{/* <Toaster /> */}
				</body>
			</html>
		// </ClerkProvider>
	);
}

