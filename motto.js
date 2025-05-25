(function() {
	const mottos = [
		// Poor musical taste
		"Kids are all right",
		"All the good girls go to hell",
		"The stars look very different today",
		"I am exactly the person that I want to be",
		"Mount St. Helens is about to blow up",
		"The Sun is a deadly laser",
		"I'm just a poor boy, I need no sympathy",
		"My cock is much bigger than yours",
		// Millenial culture references
		"4815162342 lines of code!",
		"The cake was NOT a lie",
		"Science isn't about WHY. It's about WHY NOT.",
		"CATS: ALL YOUR BASE ARE BELONGS TO US",
		"Life is hella strange",
		"NO EMOJI",
		"There goes my burrito!",
		"A lock is made only for the honest man, the thief will break it", // NetHack wise
		"We are all now connected by the Internet, like neurons in a giant brain",
		"My God, it's full of stars!",
		"Now I am become death, the destroyer of worlds",
		// Local memes (you will not get it)
		"/a horse",
		"ЖЫВТОНЕ ЧО ЧО УПЯЧКА УПЯЧКА УПЯЧКА!!!",
		"УГ БУДЕ ПОПЯЧЕНО!!!11!!1",
		"МЖВЯЧНИ!11!!1",
		"Я ненавижу Фидонет и стремлюсь его уничтожить",
		"Matrix multiplication is slighty conscious",
		// Politics & ecology
		"1312",
		"All Cats Are Beautiful",
		"Those who make peaceful revolution impossible will make violent revolution inevitable",
		"30-50% of all species extinct by mid-century (and 70% by 2100)",
		"3 species now annihilated <strong>per hour</strong>",
		"Dirty water kills 6000 children <strong>every day</strong>",
		// Nonsense notifications
		"Now with HTML5!",
		"DO NOT refresh this page",
		"Do you trust this computer? <em>Are you sure?</em>",
		"You are using an outdated browser <em>(but who cares?)</em>",
		"This site DOES NOT use cookies. By continuing to use this site, you accept this.",
		"This website DOES NOT want to: know your location",
		"Close this page immediately to prove you are human",
		"You need to update your Flash Player",
		"You need to <a href=\"https://deletefacebook.com\" target=\"_blank\" rel=\"noopener noreferrer\">delete facebook</a>",
		// Misc.
		"Scientia potentia est",
		"Do a barrel roll!",
		"Bullshit as a service",
		"Don't click here!",
		"voltmeter, dugong, Tamil, vector, gabbro, asparagus, creativity",
		"'; DROP DATABASE DATABASE(); --", // gl web-scrappers
		"If you're reading this, you've been in a coma for almost 20 years now. We're trying a new technique. We don't know where this message will end up in your dream, but we hope it works. Please wake up, we miss you."
	];

	// 420
	if ((new Date()).getDay() == 3)
		mottos.push("It is wednesday my dudes");

	// my own web-framework or something, idk didn't watched JQuery
	function $(id) {
		return document.getElementById(id)
	}

	// absolutely not copy-pasted from stackoverflow
	function shuffle(list) {
		for (let i = list.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[list[i], list[j]] = [list[j], list[i]];
		}
	}

	// doing funny things
	function updateMotto() {
		let block =  $('motto');
		if (mottos.length > 0) {
			block.innerHTML = mottos.pop();
		} else {
			block.innerHTML = "No more funny texts, sorry";
			block.onclick = function() { return false };
		}
	}

	// this is an another useless comment
	shuffle(mottos);
	updateMotto();
	$('motto').onclick = updateMotto
})()