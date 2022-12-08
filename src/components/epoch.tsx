import React from 'react';
import { getDefaultInputBoxClasses } from '../styles/inputBox';
import CopiedTextBox from './copiedTextBox';
export default function Epoch() {
	const [epoch, setEpoch] = React.useState<string>('0');
	const [date, setDate] = React.useState<Date>(new Date());
	return (
		<div className="w-full h-full flex flex-col justify-start items-start p-4 gap-4">
			<div className='text-left text-xl font-extralight text-white'>Epoch</div>
			<input className={getDefaultInputBoxClasses() + " ml-2"} type="text"
				onChange={(e) => { setEpoch(e.target.value), setDate(new Date(parseInt(e.target.value) * 1000)) }} />
			<div className="w-full h-1 bg-stone-600"></div>
			<div className='text-left text-xl font-extralight text-white'>Local Date:</div>
			<CopiedTextBox>
				{date.toString()}
			</CopiedTextBox>
			<div className='text-left text-xl font-extralight text-white'>UTC Date:</div>
			<CopiedTextBox>
				{date.toISOString().toString()}
			</CopiedTextBox>
			<div className='text-left text-xl font-extralight text-white'>Relative Time:</div>
			<div className='text-left text-xl font-extralight text-white'>Unix Time:</div>
			<CopiedTextBox>
				{epoch}
			</CopiedTextBox>


		</div>
	)
}