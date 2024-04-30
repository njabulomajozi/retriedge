import React, { useState } from 'react';
import Lottie from 'react-lottie';

interface IProps {
	animationData: any;
}

const Animation = (props: IProps) => {
	const {animationData} = props;

	const [isStopped, setIsStopped] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<div className='flex h-full justify-center items-center'>
			<Lottie
				options={defaultOptions}
				height={400}
				width={400}
				isStopped={isStopped}
				isPaused={isPaused}
			/>
		</div>
	);
};

export default Animation;
