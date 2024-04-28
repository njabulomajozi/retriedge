import { useState, useEffect } from 'react';

const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;

interface IUseRequestParam {
	path: string;
	method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
	body?: any;
	trigger?: boolean;
}

interface IUseRequestReturn {
	data: any;
	error: any;
	isLoading: boolean;
}

export const useRequest = ({
	path,
	method,
	body = null,
	trigger = false,
}: IUseRequestParam): IUseRequestReturn => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState<any>(null);

    const url = `${baseUrl}/${path}`;

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(url, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(body),
				});

				if (!response.ok) {
					throw new Error(await response.text());
				}

				const responseData = await response.json();

                console.log({
                    responseData: responseData.data
                })
				setData(responseData.data);
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();

		//TODO: return () => fetchData().abort(); // Abort any ongoing fetch on unmount
	}, [trigger === true]);

	return { data, isLoading, error };
};
