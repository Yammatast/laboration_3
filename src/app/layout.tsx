import type { Metadata } from 'next';
import './globals.css';
import { Footer, Heading, ToastProvider } from '@/ui/components';
import { Header } from '@/ui/components/Header';
import { CartProvider } from '@/context/cartContext';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
			>
				<ToastProvider>
					<CartProvider>
						<Header
							navigation={[
								{ name: 'Products', url: '/products' },
								{ name: 'Cart', url: '/cart' },
							]}
						/>
						{children}
						<Footer />
					</CartProvider>
				</ToastProvider>
			</body>
		</html>
	);
}
