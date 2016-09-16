(function () {
	'use strict';

	angular
		.module('threeMinuteHero.music')
		.factory('musicDataService', musicDataService);

	musicDataService.$inject = [];

	/* @ngInject */
	function musicDataService() {
		var albums = [{
			id: 0,
			smallImg: 'images/albums/small-bingo.jpg',
			fullImg: 'images/albums/full-bingo.jpg',
			name: 'Bingo',
			releaseYear: '1997',
			description: 'AllMusic Review by Jo-Ann Greene: \n\nEven in a region renowned for its diversity, 3 Minute Hero boast a sound far removed from their Midwestern compatriots; perhaps hailing from North Dakota means they shouldn\'t be classified as Midwest bag at all, yet they have little in common with most of the West Coast crew. \n\n So, here\'s what the Heroes are not: they\'re not skacore, they\'re not trad, they\'re not ska-pop or even ska-rock, although that latter label is the closest you\'re gonna get. The only real comparisons one can make are with the likes of Reel Big Fish and Goldfinger, bands that loved 2-Tone, but were equally infatuated with new wave and \'80s pop/rock. \n\nHowever, as the Heroes honed their skills in front of college crowds, they quickly developed an agile sound that deftly folds in every style any audience could demand. Want to swing to a big-band sound? Then bop and jive to \"Girls.\" Want a slow mambo? Then sweep your way across \"The Ska (Ska for Moms).\" Prefer to show off your salsa? Then \"Geeks on Bikes\" is for you. Keen to do the moonstomp? \"Charlie\" is just want you\'re looking for. A skanking frenzy your cup of tea? Check out \"Sno Cone of Luv\" or kick your heels up to the Cossack-skewered \"Trailer Park.\" Any funk fans in the house? Welcome to the \"Chinese Restaurant.\" Dreaming of the \'80s? So\'s the \"Landlord,\" or perhaps if you want to get close and personal with your partner, then grab your flame for the \"Tangerine.\" \n\nAs the titles imply, Bingo is meant to be entertaining, not provocative or insightful, and it certainly is that -- all good humor, sharp arrangements tightly delivered, and a wicked sense of fun that never takes itself too seriously. In that respect, like a drunken night out, it leaves little impression when it\'s over, which is a shame, for the group certainly has style and talent. \n\nThis is a real band of heroes struggling to escape the confines of the college circuit/club crawl scene, to be more than just yahoos\' fave rave, and if 3 Minute Hero last more than three minutes, perhaps their next album will do them proud.',
			songs: [
				'1. Geeks On Bikes',
				'2. Parking Lot',
				'3. Charlie',
				'4. Sno Cone Of Luv',
				'5. Tangerine',
				'6. Rude Girl',
				'7. Babbitt',
				'8. Toob Igtos Inn',
				'9. Girls',
				'10. The Ska (Ska For Moms)',
				'11. Trailer Park',
				'12. Chinese Restaurant',
				'13. Big Fish',
				'14. Landlord'
			],
		}, {
			id: 1,
			smallImg: 'images/albums/small-ninjas.png',
			fullImg: 'images/albums/full-ninjas.png',
			name: 'Everyday Ninjas',
			releaseYear: '1998',
			description: '"Everyday Ninjas," the follow-up CD to 3 Minute Hero\'s enormously successful "Bingo," whips up another infectious blend of ska, salsa, jazz, r&b and just plain horn-fueled rock. Lead singer and songwriter Jeff Nelson takes another surreal spin through the worlds of spurned love, the state fair, psycho-paranoid circus performers, and more of life\'s mysteries and eccentricities. The upper Midwest\'s premier club and college band, 3 Minute Hero reveals musical marvels on CD that often are missed by sweaty, dance-crazed live audiences.',
			songs: [
				'1. Valentines Day',
				'2. Julie Loves a Blender',
				'3. Flowers(Charlie part 2)',
				'4. Jelly Donut',
				'5. Graduation Song',
				'6. Roadwhore',
				'7. Lust',
				'8. Mean Man from the Circus (Circucide)',
				'9. Big Porch',
				'10. Shampoo',
				'11. Wish I Was Single',
				'12. Bathroom Graffiti'
			],
		}, {
			id: 2,
			smallImg: 'images/albums/small-brownstar.png',
			fullImg: 'images/albums/full-brownstar.png',
			name: 'Operation Brown Star',
			releaseYear: '2000',
			description: 'Album Notes\n\nPart 1 take the (the fancy studio tracks) were recorded stealthily at 3rd Ear Studio in the oppressive Minneapolis August heat. Those tracks were surreptitiously transported down the street to Seedy Underbelly where they were engineered, mixed, & mastered by Alex Oana. They were produced under a cloak of secrecy by Alex Oana and Jay Kalk. Part II songs were recorded in front of live audiences (who continued to make loud noise despite knowing that we were attempting to record). These landmark recordings took place on and between 7/22/99 and 8/20/99 at the Fine Line in Minneapolis, MN and the Red Carpet in St Cloud MN. Live sessions were recorded by operatives Jake Hamond and Wes of Two Fish Studios and then mastered by the elusive Alex Oana at City Cabin. Doug Wild digitally produced the goods. Linda Kalk helped fund the project. Anthony Brandenburg loaned some fierce guitars. Agent A. Brandenburg is a man of many hats; he was also our designer for this project. I came up with the concept and took all of the surveillance shots. Obvious man on the hot seat: Ansel Adams.\n\n3MH (possessing monobrain via The Head) would like to thank all of the friends, families, wives, girlfriends, rodeo clowns, and participating members of the United States Armed Forces that never stopped believing in us for a second. Anybody who stopped believing in us for a second, or more, has a monkey coffin waiting for them in H-E-Double Hockey Sticks...right next to Gary Coleman\'s bus locker of infinite pain.\n\nThis recording is dedicated to the smartest, nicest, prettiest-smelling, best-looking, fans in the history of music. (ya\'ll)\n\n',
			songs: [
				'1. Robot Factory',
				'2. Spies',
				'3. Too Much Wine',
				'4. Rubber Room',
				'5. Spider Monkey Pt.1',
				'6. Spider Monkey Pt.2',
				'7. Valentine\'s Day',
				'8. Julie Love a Blender',
				'9. Girls',
				'10. I\'m So Happy',
				'11. Wish I Was Single',
				'12. Jelly Donut'
			],
		}, {
			id: 3,
			smallImg: 'images/albums/small-fminus.png',
			fullImg: 'images/albums/full-fminus.png',
			name: 'F Minus Uncollected Works',
			releaseYear: '2011',
			description: 'This album brought to you by the hardworking men, women and children of 3 Minute Hero records.',
			songs: [
				'1. Overture (From "Leviticus!: The Musical")',
				'2. Happy',
				'3. So Strange',
				'4. Hook / Hole',
				'5. Love Special',
				'6. Blue Pepper (Far East of the Blues)',
				'7. Las Vegas',
				'8. Woman on the Street',
				'9. Little Dog',
				'10. Cone of Shame'
			],
		}, {
			id: 4,
			smallImg: '',
			fullImg: '',
			name: 'Jumbo-Jet Whispers & Thunder-Lizard Serenades',
			releaseYear: 'SOON!',
			description: 'A preview by Jeff Nelson: \n\n\"One does not invoke a higher power to assist with the clipping of one\'s toenails or the preparation of an egg bake. One does invoke a higher power when the possibility of failure is fairly high and the stakes (even if only personal) are commensurate. Well, \"aim high,\" as the Air Force once said. Of course they have flying machines that rain death and we only have musical gear (but so very much musical gear!)\n\nStefan Zweig is one of my favorite writers, despite the fact that his entire body of work is one long, protracted howl for help. He said, and I\'m paraphrasing here (imagine it with more angst), that the story we keep in us can be perfect. As long as we keep it in the confines of our head, it is without flaw. The moment we let it out and begin to work on it is the moment where our lack of craftsmanship (or, infinitely worse, our lack of imagination to deal with said lack of craftsmanship) can torpedo our spirit and doom a project. That\'s why one of the best things you can do in life is to surround yourself with relentlessly creative people who a.) have the ability to not just take a joke, but a relentless barrage of bullshit, b.) pride themselves on making everything they touch better, and c.) aren\'t afraid to tell you that something you\'ve worked on for a decade doesn\'t work, but then do it in such a way that it doesn\'t really even bother you, because they have already come up with something far superior. Luckily, that is exactly what we have here at 3 Minute Hero Industries. If we didn\'t have that to begin with, there\'s no way we would have tried to make this ridiculous behemoth of an album.\n\nI started writing these songs towards the end of our first incarnation, which was way back when some of us were hoarding canned peaches for the imminent collapse of civilization triggered by the Y2K bug. Remember that? I still can\'t look at a can of peaches without feeling sheepish. I had enrolled at Minnesota State University Moorhead Normal Teaching College to finish off my English degree because without it, I was a laughingstock of all of the other English lit graduates at the coffeeshop I worked at. I had dropped out to tour with the band and only needed a semester or two to finish things off. I was returning with valuable knowledge. My first stint at college had me picking up a humanities course with a Dr. Robert McGahey. It was an elective and the book list looked interesting so, why not. I gladly accepted every opportunity to increase the breadth of my black-spined Penguin Classics on my bookshelf. Professor McGahey was, what I would soon discover, an archetype; he was a professor right out of central casting. Tweed coat? Check. Elbow patches? Check. Mark Ruffalo degree of unkemptness? Check. Story about road-tripping to meet American Zen luminary Alan Watts on his houseboat unannounced? Check. This guy was the real deal.\n\nOne of the first books we dug into was Wolfram Von Eschenbach\'s \"Parzifal.\" It\'s the medieval German take on the Arthurian hero\'s [spoiler] unsuccessful quest for the Holy Grail. About a third of the way through the book was when the good doctor drew the diagram that kind of ruined my life. It was a circle bisected by a horizontal line. \"Why would a childlike drawing of Saturn ruin your life?\" you may be asking. Because since that drawing was explained to me, I have seen the same pattern in nearly every single book and every single movie. \"Star Wars,\" \"Ulysses,\" \"Finding Nemo,\" \"Hot Tub Time Machine,\" \"Light in August,\" \"Henry IV,\" \"The Lego Movie,\" \"The Matrix,\" \"Anchorman,\" \"Pee-Wee\'s Big Adventure,\" \"Lord of the Rings,\" ad infinitum. THEY ARE ALL THE SAME STORY. And that\'s OK.\n\nMost people, of a certain age, came to this through a series of recorded interviews that Bill Moyers had with Joseph Campbell in the late 80\'s collectively called \"The Power of Myth.\" (Yeth?) Building on the observations of Sir James Frazer\'s fascinating doorstop \"The Golden Bough,\" the relevant work of Swiss psychoanalyst and subconscious man-about-town Carl Jung, and his own extensive research into thousands of myths from around the world, Campbell published \"The Hero With A Thousand Faces\" early on in his career and continued to see everything through that lens for the rest of his life. By the time he taped \"The Power of Myth\" conversations he could deftly connect the heroic journey in ancient Sumerian myths to the Promethean flight of Burt Reynolds\' Bandit across the American South with his forbidden cargo of Coors banquet beer. Actually, I made that connection. Not him. But that is precisely what it did to my entire frame of reference: \"Smoky & the Bandit\" resonates with us because it\'s essentially the same story we\'ve been listening to since we descended from the baobob trees and whittled our first smartphones. I still haven\'t really explained the diagram.\n\nThe simple version of the diagram has an \"S\" just above where the horizontal line slices through the circle on the left side. That stands for \"Separation.\" Every hero has to leave the comfort of his or her natural surroundings. Frodo leaves the shire, Luke leaves Tatooine, Siddartha leaves the compound. Over on the other side of the circle is \"I\" for \"Initiation.\" The hero leaves all that is known and is initiated into the unknown, dipping below the circle. Frodo and friends learn of the dangers beyond their little patch of hairy-footed heaven, Luke learns of the Force, Siddartha sees the sick, old and dead. \"R\" is on the underbelly of the circle and it is for \"Return.\" After the hero performs some deed or obtains some treasure that will benefit all of those people who she is returning to, she attempts to go home. Then the hero is met with gratitude, ticker-tape parades, and hastily- fashioned paper mache statues...or not. That\'s the abbreviated version. The lengthy, bloated version -- and I don\'t know about you, but I\'ll take lengthy and bloated every time -- runs to seventeen steps. Would you care to take a gentle stab at how many songs are on this new album of ours?\"',
			songs: [
				'Firefly',
				'Ice Cream',
				'...and 18 more!'
			],
		}];

		var service = {
			all: all,
			get: get
		};
		return service;


		function all() {
			// return all music
			return albums;
		}

		function get(albumId) {
			//search the array for a matching albumId
			for (var i = 0; i < albums.length; i++) {
				if (albums[i].id === parseInt(albumId)) {
					var album = albums[i];
					return album;
				}
			}
			return null;
		}

	}
})();
