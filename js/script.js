function method2func() {
	let id = Number(document.getElementById('num-of-sub').value);
	let subs = document.getElementById('mysubs');
	let ansbox = document.getElementById('res2');
	// let rbtn = document.getElementById('rbtn');
	// let ansbtn = document.getElementById('ansbtn');
	if (id < 1 || id >= 11) {
		ansbox.innerHTML = "Please Enter Greater Than 0 And Less Than 11 Subjects";
	}
	else if (id > 1 || id <= 11) {

		subs.innerHTML = ``;
		// rbtn.style.display = "inline-block";
		// ansbtn.innerText = "Cheak Answer";
		let inputlist = "";
		for (let i = 1; i <= id; i++) {
			let subs = document.getElementById('mysubs');
			inputlist += `<div class="input-group" >
		<span class="input-group-text bg-secondary text-dark">Subject${i}</span>
			<input type="number" placeholder="Enter Total Marks" id="subject${i}total"
			class="form-control bg-dark text-light text-center">
			<input type="number" placeholder="Enter Obtain Marks" id="subject${i}obtain" class="form-control bg-dark text-light text-center">
		</div>
		<br>`

		}
		subs.innerHTML = `<form class="mt-5" onsubmit="method2(); return false"><div id="childs">${inputlist}</div>
		<button type="button" id="rbtn" onclick="rsub(document.getElementById('mysubs'))"
		class="btn btn-danger mt-2 ">Remove All Subjects</button>
	<button type="submit" id="method2ansbtn" class="btn btn-primary mt-2 ">Cheak Answer</button></form>`;

	}

}

function method2() {
	let subject = document.getElementById("childs").childElementCount;
	let tmarks = 0;
	let omarks = 0;
	let subjects = subject / 2;
	let Grade;
	let res;
	let submarks;
	let subcheak = true;
	for (let i = 1; i <= subjects; i++) {
		let total_marks = Number(document.getElementById(`subject${i}total`).value);
		let obtain_marks = Number(document.getElementById(`subject${i}obtain`).value);
		if (total_marks >= obtain_marks) {
			tmarks += total_marks;
			omarks += obtain_marks;
		}
		else if (total_marks <= obtain_marks) {
			subcheak = false;
			let ans = `Somting Else In Subject No ${i} Total Marks Must Be A Greater Then Obtain Marks`
			document.getElementById('res2').innerText = ans;

		}

	}
	if (subcheak === true) {
		submarks = Math.round((omarks * 100) / tmarks);
		console.log(submarks);
	}




	if (submarks > 90 && submarks < 100 && tmarks >= omarks) {
		Grade = "A++ Grade";
		let ans = `Your Percentage Is " ${submarks} " % With " ${Grade} "`
		document.getElementById('res2').innerText = ans;

	}
	else if (submarks >= 80 && tmarks >= omarks) {
		Grade = "A+ Grade";
		let ans = `Your Percentage Is " ${submarks} " % With " ${Grade} "`
		document.getElementById('res2').innerText = ans;

	}
	else if (submarks >= 70 && tmarks >= omarks) {

		Grade = "A Grade";
		let ans = `Your Percentage Is " ${submarks} " % With " ${Grade} "`
		document.getElementById('res2').innerText = ans;

	}
	else if (submarks >= 60 && tmarks >= omarks) {
		Grade = "B Grade";
		let ans = `Your Percentage Is " ${submarks} " % With " ${Grade} "`
		document.getElementById('res2').innerText = ans;

	}
	else if (submarks >= 50 && tmarks >= omarks) {
		Grade = "C Grade";
		let ans = `Your Percentage Is " ${submarks} " % With " ${Grade} "`
		document.getElementById('res2').innerText = ans;

	}
	else if (submarks >= 40 && tmarks >= omarks) {
		Grade = "D Grade";
		let ans = `Your Percentage Is " ${submarks} " % With " ${Grade} "`
		document.getElementById('res2').innerText = ans;

	}
	else if (submarks >= 33 && tmarks >= omarks) {
		Grade = "F Grade";
		let ans = `Your Percentage Is " ${submarks} " % With " ${Grade} "`
		document.getElementById('res2').innerText = ans;

	}
	else if (submarks <= 33 && tmarks >= omarks) {
		Grade = "Fail";
		let ans = `Your Percentage Is " ${submarks} " % With " ${Grade} "`
		document.getElementById('res2').innerText = ans;

	}
	// else {
	// 	Grade = 'Failed'
	// 	let ans = `Invaled Marks Please Enter Valid Marks`
	// 	document.getElementById('res2').innerText = ans;



	// }

}
















function rsub(id) {
	// let rbtn = document.getElementById('rbtn');
	// let ansbtn = document.getElementById('ansbtn');
	// rbtn.style.display = "none";
	// ansbtn.innerHTML = "Enter";
	id.innerHTML = `<form class="mt-5" onsubmit="method2func(); return false">
		<div class="mb-1">
			<label for="num-of-sub" class="form-label">Enter Number Of Subjects</label>
			<input type="number" name="num-of-sub" id="num-of-sub" class="form-control bg-dark text-light text-center" placeholder="0000"
				aria-describedby="helpId">
		</div>
		<button type="submit" id="ansbtn" class="btn btn-primary mt-4 container">Enter</button>
		</form>`

}





function myclassl(id) {
	let btn1 = document.getElementById('btn1');
	let btn2 = document.getElementById('btn2');
	if (id === btn1) {
		btn2.classList.remove('active');
		btn2.classList.add('bg-light')
		btn1.classList.remove('bg-light');
		btn1.classList.add('active')
	}
	if (id === btn2) {
		btn1.classList.remove('active');
		btn1.classList.add('bg-light')
		btn2.classList.remove('bg-light');
		btn2.classList.add('active')
	}

}

function method1func() {
	let tmarks = Number(document.getElementById('tmarks').value);
	let omarks = Number(document.getElementById('omarks').value);
	let Grade;
	let res;
	let submarks = Math.round((omarks * 100) / tmarks);

	if (submarks > 90 && submarks < 100 && tmarks >= omarks) {
		Grade = "A++ Grade";
		let ans = `Your Percentage Is " ${submarks} " % With " ${Grade} "`
		document.getElementById('res').innerText = ans;

	}
	else if (submarks >= 80 && tmarks >= omarks) {
		Grade = "A+ Grade";
		let ans = `Your Percentage Is " ${submarks} " % With " ${Grade} "`
		document.getElementById('res').innerText = ans;

	}
	else if (submarks >= 70 && tmarks >= omarks) {

		Grade = "A Grade";
		let ans = `Your Percentage Is " ${submarks} " % With " ${Grade} "`
		document.getElementById('res').innerText = ans;

	}
	else if (submarks >= 60 && tmarks >= omarks) {
		Grade = "B Grade";
		let ans = `Your Percentage Is " ${submarks} " % With " ${Grade} "`
		document.getElementById('res').innerText = ans;

	}
	else if (submarks >= 50 && tmarks >= omarks) {
		Grade = "C Grade";
		let ans = `Your Percentage Is " ${submarks} " % With " ${Grade} "`
		document.getElementById('res').innerText = ans;

	}
	else if (submarks >= 40 && tmarks >= omarks) {
		Grade = "D Grade";
		let ans = `Your Percentage Is " ${submarks} " % With " ${Grade} "`
		document.getElementById('res').innerText = ans;

	}
	else if (submarks >= 33 && tmarks >= omarks) {
		Grade = "F Grade";
		let ans = `Your Percentage Is " ${submarks} " % With " ${Grade} "`
		document.getElementById('res').innerText = ans;

	}
	else if (submarks <= 33 && tmarks >= omarks) {
		Grade = "Fail";
		let ans = `Your Percentage Is " ${submarks} " % With " ${Grade} "`
		document.getElementById('res').innerText = ans;

	}
	else {
		Grade = 'Failed'
		let ans = `Invaled Marks Please Enter Valid Marks`
		document.getElementById('res').innerText = ans;



	}
	let ans = document.getElementById('res').innerHTML;

	ans = `Your Percentage Is " ${submarks} " % With " ${Grade} "`
}