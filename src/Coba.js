import dayjs from 'dayjs';
import React, { useState, useRef, useEffect } from 'react'


const Coba = () => {

	// We need ref in this, because we are dealing
	// with JS setInterval to keep track of it and
	// stop it when needed
	const Ref = useRef(null);

	// The state for our timer
	const [timer, setTimer] = useState(null);


	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 * 60 * 60) % 24);
		console.log(total,'total');
		// console.log(new Date(),"tanggal baru");
		return {
			total, hours, minutes, seconds
		};

	}


	const startTimer = (x) => {
		let { total, hours, minutes, seconds }
					= getTimeRemaining(x);
		if (total >= 0) {

			// update the timer
			// check if less than 10 then we need to
			// add '0' at the begining of the variable
			setTimer(
				(hours > 9 ? hours : '0' + hours) + ':' +
				(minutes > 9 ? minutes : '0' + minutes) + ':'
				+ (seconds > 9 ? seconds : '0' + seconds)
			)
		}
	}


	const clearTimer = (x) => {

		// If you adjust it you should also need to
		// adjust the Endtime formula we are about
		// to code next	
		setTimer('00:10:00');

		// If you try to remove this line the
		// updating of timer Variable will be
		// after 1000ms or 1sec
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(x);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();

		// This is where you need to adjust if
		// you entend to add more time
		// deadline.setSeconds(deadline.getSeconds() + 10);
		deadline.setMinutes(deadline.getMinutes() + 10);

		return deadline;
	}

	// We can use useEffect so that when the component
	// mount the timer will start as soon as possible

	// We put empty array to act as componentDid
	// mount only
	useEffect(() => {
		clearTimer(getDeadTime());
		
	}, []);

	


	// Another way to call the clearTimer() to start
	// the countdown is via action event from the
	// button first we create function to be called
	// by the button
	const onClickReset = () => {
		clearTimer(getDeadTime());
	}
	const now = dayjs().add(1, 'hour').format('YYYY-MM-DD HH:mm:ss');

	console.log(now,"sekarang");

// console.log(Ref.current,"ref");
	return (
		<div className="App">
			{timer === '00:00:00' && (<p>Berhasil</p>)}
			<h2>{timer}</h2>
			<button onClick={onClickReset}>Reset</button>
		</div>
	)
}

export default Coba;
