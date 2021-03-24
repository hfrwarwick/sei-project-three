const pubSeed = [
  {
    nameOfPub: 'going merry',
    address: {
      line1: '12 straw lane',
      city: 'london',
      postCode: 'postcode',
      description: 'description of bad pub'
    },
  },
  {
    nameOfPub: '19:20',
    address: {
      line1: '19-20 Great Sutton Street',
      line2:'Islington', 
      town:'',
      city: 'London',
      postCode: 'EC1V 0NB'
    },
    description: '' ,
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: true,
    image: 'another image'
  },
  {
    nameOfPub: 'Southampton Arms',
    address: {
      line1: '139 Highgate Rd' ,
      line2: '',
      town: '',
      city: 'London',
      postCode: 'NW5 1LE'
    },
    description: 'The sign outside announces "ale, cider, meat", and that pretty much sums up what\'s on offer at the best pub in Gospel Oak. The interior might make you think it\'s still 1936, as would the cash-only policy. The addition of cheese and charcuterie boards to the offering of meaty bar snacks is about as modern as it gets here. The roster of lovingly tended ales and ciders, all from small independent producers, changes regularly. There\'s also mulled cider. One of the many great things about the Southampton is that it retains its mixed clientele, long-time residents and newcomers alike – and of all ages. There/s also a pub dog. This is a true local hero.',
    isOutsideSeating: false,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: false,
    image: 'https://beersmanchester.files.wordpress.com/2013/05/southampton-arms4.jpg'
  },
  {
    nameOfPub: 'French House',
    address: {
      line1: '49 Dean Street',
      line2: '',
      town: '',
      city: 'London',
      postCode: 'W1D 5BG'
    },
    description: 'If you like to drink in places where the history\'s as important as the drinks list, the Grade II-listed French House should be on your list. Charles de Gaulle used the pub as a workplace during World War II; Dylan Thomas and Francis Bacon both drank here… the list goes on. The interior reflects both the Gallic connection and its long standing in this most exciting of London neighbourhoods. It\'s small, memento-filled, and very crowded when the place is busy. You may end up joining the regulars on the pavement outside, but that\'s just part of the French House experience. Food is served during the daytime only, and beer, famously, is served only in halves. This is Soho history. Come and suck it up.',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: false,
    image: 'https://media.timeout.com/images/100684369/750/422/image.jpg'
  },
  {
    nameOfPub: 'Chesham Arms',
    address: {
      line1: '15 Mehetabel Road',
      line2: '',
      town: '',
      city: 'London',
      postCode: 'E9 6DU'
    },
    description: 'Stroll down a quiet back road in Hackney and you\ll be delighted to come across this handsome pub, its exterior like something on a postcard from the countryside, all light lilac frontage and classic lampposts. You can immediately see why the neighbourhood fought so hard to preserve the Chesham – the pub recently won its status as an Asset of Community Value after a fight that lasted years – and stepping inside just confirms things.' ,
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: false,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Chesham_Arms.jpg/240px-Chesham_Arms.jpg'
  },
  {
    nameOfPub: 'The Mayflower',
    address: {
      line1: '117 Rotherhithe St',
      line2: '',
      town: '',
      city: 'London',
      postCode: 'SE16 4NF' 
    },
    description: 'Of all the Thamesside pubs, this one is the most special, the most atmospheric, the most tucked-away – and its wooden deck at the back has probably the best view of the river too. If there\'s a better accompaniment to an evening pint than the sound of the river slapping away through the slats under your feet, and the lights of the City twinkling away in the distance, we\ve yet to find it. Inside is brilliant too – it dates back to 1620, with ecclesiastical wooden pews, real ales, an open fire and a friendly hubbub of chatter. A real find of a pub.',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: false,
    image: 'https://cdn.diffords.com/contrib/bar/2020/02/5e4c0712c1378.jpg'
  },
  {
    nameOfPub: 'The Ivy House',
    address: {
      line1: '40 Stuart Road',
      line2: '',
      town: '',
      city: 'London',
      postCode: 'SE15 3BE' 
    },
    description: 'If this pub were a film, it would be a heartwarming tale of pluck directed by Mike Leigh. In 2012, the owners gave their tenants one week\'s notice to ship out after selling the property to developers. Instead of going quietly, the tenants set about raising £1 million with the help of the local community to buy the pub and turn it into a cooperative. Nowadays friendly, committed staff welcome locals of all ages for a mates-rates pint of locally brewed ale, carefully sourced pub food (including generous Sunday roasts), and events ranging from live music to yoga classes, knitting circles and kids\ dance lessons. It’s all housed in a Grade-II listed building, with original beams, wall-to-wall wood panelling, leaded windows and an open fire.',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: false,
    isLiveSports: false,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ivy_House%2C_Nunhead%2C_SE15_%285478867910%29.jpg/220px-Ivy_House%2C_Nunhead%2C_SE15_%285478867910%29.jpg'
  },
  {
    nameOfPub: 'Compton Arms',
    address: {
      line1: '4 Compton Avenue',
      line2: '',
      town: '',
      city: 'London',
      postCode: 'N1 2XD' 
    },
    description: 'George Orwell loved pubs so much he wrote an essay about them. The Moon Under Water  was his ode to a fictitious pub that represented the best in boozing culture – a joint down a side street with handsome Victorian features, barmaids who knew your name and plenty of room to bend an elbow. In reality, Orwell was often found drinking at The Compton Arms in Islington. And 70-odd years on from that essay, his favoured pub now merits an essay of its own. In keeping with the considerate refurb, traditional ales remain on cask – Sambrook\'s Wandle and Adnams Ghost Ship side by side. The rest is all modern: London craft beers from the likes of Five Points and Partizan; a small but thoughtful wine list (a £6.50 glass of Argentinian malbec was full of juicy red fruit and vanilla flavours); a bold range of whiskies and mezcals; and a short cocktail list with three twists on the negroni. Prices are fair, particularly for this well-to-do area.',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: true,
    image: 'https://assets.londonist.com/uploads/2015/07/i875/img_1803.jpg'
  },
  {
    nameOfPub: 'Pineapple',
    address: {
      line1: '51 Leverton Street',
      line2: '',
      town: '',
      city: 'London',
      postCode: 'NW5 2NX' 
    },
    description: 'So great is Kentish Town\'s love of the Pineapple that when the pub was threatened with redevelopment into flats in 2002, locals started a campaign to save it – and got the place listed by English Heritage in just eight days. This backstreet boozer dates back to the mid-nineteenth century, and you can feel the history in the weathered wood of the joyously unmodernised main bar. There’s also a conservatory at the back, and outdoor tables when the weather\'s good. The Pineapple hosts a variety of special events, including semi-annual beer festivals, but it\'s at its best on an ordinary weekend, when the locals crowd in for a pint and a gab-fest. And there\'s cheap Thai food if you want to settle in for the long haul.',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: false,
    image: 'https://images.squarespace-cdn.com/content/v1/59c3cdeaedaed82e2b8d7ce1/1506008140270-0EEB5QLUO6L8VQTIY77V/ke17ZwdGBToddI8pDm48kIY_TNWBc1qRH3Eu3XBCQQp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYHKwrlcGC3elbGv2d6ch4xBMDaWcbj4BzpYNMDNdVtDZB8_xpyZX_lkIhacCkJq3w/front.jpg'
  },
  {
    nameOfPub: 'Auld Shillelagh',
    address: {
      line1: '',
      line2: '',
      town: '',
      city: 'London',
      postCode: '' 
    },
    description: 'The added-value attractions at this skinny little Church Street boozer are numerous: sporadic themed music nights, big-screen football, large beer garden. But the Shillelagh is at its best when it keeps things simple, as an honest, uncomplicated Irish pub (as opposed to Irish-themed pub; the difference is crucial) that draws a devoted circle of boozed-up Stoke Newingtonians most nights of the week. It’s the kind of pub where the wine list runs to ‘red or white’, and where the staff are so matey and hospitable that they\ll offer to bring your Guinness over to your table rather than have you hang around at the bar and wait for it to reach perfection. No wonder everybody here always seems to be in such a good mood.',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: true,
    image: 'https://www.irishtimes.com/polopoly_fs/1.2111050.1424431837!/image/image.jpg_gen/derivatives/box_620_330/image.jpg'
  },
  {
    nameOfPub: 'The Salisbury',
    address: {
      line1: '1 Grand Parade',
      line2: '',
      town: '',
      city: 'London',
      postCode: 'N4 1JX' 
    },
    description: 'It is not unusual when frequenting London pubs to share both furniture and personal space with strangers. In this grand old building at the north end of Green Lanes you barely have to share bar staff: its absolutely massive. Taxidermy cases and ornate cornicing decorate the central, beer-focused bar, and drinkers take their pick from private booths, fireside armchairs or more sociable clusters of tables and chairs in one of two huge spaces.',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: false,
    image: 'https://whatpub.com/img/NLD/5584/salisbury-harringay/298/224'
  },
  {
    nameOfPub: 'The Beer Shop',
    address: {
      line1: '40 Nunhead Green',
      line2: '',
      town: '',
      city: 'London',
      postCode: '' 
    },
    description: 'Despite the name, this lovely bar and shop – one of several independent gems in Nunhead – doesn’\t look anything like an off-licence. Its website labels it a micro-pub, but its colourful, light-filled, open-plan front room is probably best described as a drop-in centre for beer-lovers. The tiny back counter dispenses three draught beers – on our visit, these included two pale ales, namely Buxton Brewery\'s sharp, citruous Moor Top, and Northern Monk\'s smooth, fruity Monacus. In addition, there’s a 60-strong list of bottled beers, ciders and porters – mostly (but not all) from London brewers, all with clear, succinct tasting notes. These range from familiar names such as Brewdog or Camden Town Hells to properly niche offerings such as By The Horn\'s Sour to the People, a burgundy-aged, sour-mash vintage beer, or 750ml bottles of Siren\'s blended Ratchet artisan ale.',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: false,
    isLiveSports: false,
    image: 'https://whatpub.com/img/SEL/13493/beer-shop-london-nunhead/298/224/43658'
  },
  {
    nameOfPub: 'Faltering Fullback',
    address: {
      line1: '19 Perth Rd',
      line2: '',
      town: '',
      city: 'London',
      postCode: 'N4 3HB' 
    },
    description: 'Don\t be put off by the fact that the ramshackle horseshoe bar is always full, or that the vast but rowdy main room has the atmosphere of a sixth-form common room crossed with a 1970s pool hall. This vaguely Irish pub has long been a Finsbury Park favourite, and that\s 98 percent down to its amazing garden. Drinks are reasonably priced, the Thai food is good and it’s a sport-watchers paradise, but these are just cherries on the verdant layer cake that is its three storeys of leafy nooks, crannies and look-out posts outside. Even when it\s chilly you\ll find a comfortable outdoor spot as many of the benches are heated and covered. Just be warned that even Ray Mears wouldn\t be able to direct you to his table, so get friends to let off a flare (or carry a helium balloon) if you/re the last to arrive.',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: false,
    image: 'https://cdn.londonandpartners.com/asset/the-faltering-fullback_the-faltering-fullback-image-courtesy-of-the-faltering-fullback_41dcd24dd466e062052ebcf98fe624c5.jpg'
  },
  {
    nameOfPub: 'Bradley/s Spanish Bar',
    address: {
      line1: '42-44 Hanway Street',
      line2: '',
      town: '',
      city: 'London',
      postCode: 'W1T 1UT' 
    },
    description: 'Don\t be fooled by the name: this red and yellow boozer just off Oxford Street\s ropier end is not a hotspot for sherries and fine tapas. In fact, it’s not even a bar. Bradley’s is definitely a pub, and with its jumble sale decor and tattered furniture, it sure puts the shabby in shabby chic. But don\t be put off: Londoners love Bradley’s for its low-key and unpretentious vibe. At the tiny two-floor venue, the atmosphere is warm and friendly (except for when there\s a Spain v England football match on), the drinks are a fair price for area and, the real showpiece, there/s a vinyl jukebox pumping out Motown classics and disco bangers in the ground-floor bar. So fond of this place are the locals that in summer months the thirsty post-work crowd forgo chairs and tables (and walls) and take to the street outside, much to the annoyance of taxi drivers who use Hanway Street as a sneaky shortcut.',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: false,
    isLiveSports: true,
    image: 'https://assets.londonist.com/uploads/2016/06/i875/brad.jpg'
  },
  {
    nameOfPub: 'The Axe',
    address: {
      line1: '18 Northwold Road',
      line2: '',
      town: '',
      city: 'London',
      postCode: 'N16 7HR' 
    },
    description: 'Opening a new boozer on the site of a beloved local institution can be a tricky proposition. But the folks behind Stoke Newington/s new beer-nerd destination The Axe have done a bang-up job, retaining everything that worked at Jan\s Belgian beer bar – the dim, cosy atmosphere, extensive ale selection and welcoming vibe – and adding a bright, airy, pine-lined smoking yard along with a captivating food menu. The drinks selection is frankly ludicrous. There are more than 60 beers on offer (22 of them on tap), ranging from a pint of Camden Lager for less than a fiver (a near-miracle in Stoke Newington) to an 11 percent monstrosity called Marshall Zhukov\s Imperial Stout that costs, I kid you not, £33 for 75cl. You can also choose from eight different gin and tonics and a perfectly serviceable wine list. Oh, and they do negronis on tap, which are flat-out gorgeous. The food is every bit as impressive, with starters and bar snacks several storeys up from your standard sausage roll. Try the olives Ascolane, a kind of Italian scotch egg minus the egg, using olives stuffed with veal.',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: false,
    image: 'https://media.timeout.com/images/103934641/750/422/image.jpg'
  },
  {
    nameOfPub: 'Palm Tree',
    address: {
      line1: '127 Grove Road',
      line2: '',
      town: '',
      city: 'London',
      postCode: 'E3 5BH' 
    },
    description: 'A relic of a pub, the Palm Tree has no time at all for the modern trappings most east London hostelries. Don’t expect the crispest of pints or the most chivalrous service either. But people still traipse to this middle-of-nowhere Mile End venue for something money can’t buy – the Palm Tree provides a Cockney experience more intense than Danny Dyer pulling pints at the Queen Vic. Signed pictures of obsolete celebrities and forgotten jockeys line the walls above the oval-shaped bar, and spaces that aren\t plastered with memorabilia are covered in gold chintz accented by cabaret-esque red lighting. Regulars can be real characters, but it\s refreshing to visit somewhere with a distinct lack of hipsters. Its canalside position is appealing to summer strollers, but it’s the evening vibe that’s the real draw. There’s often a live band, and since there are no neighbours within shouting distance, late-night knees-ups often get lairy.',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: false,
    image: 'https://www.nofilterzine.com/wp-content/uploads/2017/08/Fucktimeout-nofilter-thepalmtree.jpg'
  },
  {
    nameOfPub: 'The Bluecoats',
    address: {
      line1: '',
      line2: '',
      town: '',
      city: 'London',
      postCode: '' 
    },
    description: 'A former school for girls is now offering an education in beer. The chapel-shaped, Victorian building is a bit of an anomaly on Tottenham/s High Road, in among the corner shops and with a glimmer of Spurs shiny new HQ in the distance. Up until recently, it was The Pride of Tottenham, a rowdy match-day pub that shut up shop following noise complaints. Transforming the empty and unloved building into what they/re hoping will be an all-round more neighbour-friendly hangout is the Night Tales team, as well as Tom Gibson, the man behind Dalston cocktail bar Ruby/s. Although the sight of a bouncer on the door midweek felt intimidating, inside, it was welcoming. The pub should suit the seasons – one side is light-filled and modern, while a partition separates off a dark, distressed room with a mahogany bar and vintage signs bearing old-fashioned crests. But the most important season of all is the footie kind – blinds had come down for better TV viewing when we visited. If football is this pub/s first love, beer would have to be its second. A long blackboard advertises 20 house, craft and cask beers. Local breweries Redemption, Pressure Drop and Beavertown are represented, but you/ll also spy Walthamstow and Bermondsey beers, plus Guinness and Heineken – theres a refreshing absence of craft beer snobbery that seems to have struck a chord with locals already. Burgers from top patty peddlers Lucky Chip also hit the mark, enjoyed in a picnic-bench-filled beer garden overlooking the High Street. A secluded attic bar is even set to open.',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: false,
    image: 'https://www.beerguideldn.com/pubs.php?IDKEY=323'
  },
  {
    nameOfPub: 'Priory Arms',
    address: {
      line1: '83 Lansdowne Way',
      line2: '',
      town: '',
      city: 'London',
      postCode: 'SW8 2PB' 
    },
    description: 'There\s not a lot of passing trade down this residential Stockwell street, which is perhaps why the Priory Arms management have made their pub so awesome that you\ll be lured in from miles away. A plain, small main room has been decorated with not much more than fairy lights and a colourful beermat collection, and a beautiful old well-stocked jukebox beams at you from the centre. Elderly regulars chat to a cheerful barmaid while you choose from a brilliant selection of cask ale, craft kegs and a charmingly old-school selection of burgers. If you asked your granddad to design a pub this is probably exactly what he\d come up with, and we mean that in the best possible way – the Priory Arms is untouched by any trappings of 2015 London style, and it’s all the better for it.',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: true,
    image: 'https://whatpub.com/img/SWL/2906/priory-arms-south-lambeth/298/224'
  },
  {
    nameOfPub: 'Dove',
    address: {
      line1: '24-28 Broadway Market',
      line2: '',
      town: '',
      city: 'London',
      postCode: 'E8 4QJ' 
    },
    description: 'Broadway Market\s Dove is Belgian beer heaven. The building has the feel of a Continental tavern: it’s an old-fashioned building decked out in oak with the always oversubscribed bar the focus of the action. There are a few optimistic picnic benches peppering the front pavement. To finish the effect, a distinct waft of yeast hits you as you enter the room. There\s certainly no messing around on Dove\s tome-like menu filled with Trappist, gueuze and fruit beers: it\s an exhaustive list celebrating the best of a proper beer culture. There\s the expected Broadway Market trendy community present at most times, as the Dove makes a perfect post-market pitstop or afternoon party venue. Steaming bowls of moules marinière fly from the kitchen just as steadily as pints from the bar. Craft beer done the time-honoured Low-Country way.',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: false,
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/a2/9e/03/the-dove-broadway-market.jpg'
  },
  {
    nameOfPub: 'Jerusalem Tavern',
    address: {
      line1: '55 Britton Street',
      line2: '',
      town: '',
      city: 'London',
      postCode: 'EC1M 5UQ' 
    },
    description: 'This Farringdon bar has the sort of look many pubs invest a lot of time, effort and money into imitating, but the Jerusalem looks the perfect part. The wooden floor is scuffed, paint is peeling all over the shop and the knackered tables are heavy with what looks like centuries-worth of spilled pints. But although the rooms inside date from the eighteenth century, it has only been a pub since 1990. Maybe it\s because of this that it acknowledges the odd modern trend – poshed-up bar snacks, taxidermy cabinets – and the beer is anything but outdated, with premium-strength IPAs and whisky-accented ale (all of it from St Peter’s Brewery in Suffolk). If you like what you taste, you can pick up a five-litre mini-keg of the pub\s most popular brews to take home. Seating is extremely limited and you\ll need luck on your side to bag the coveted spot by the open fire, but the side-street setting means you won’t be herded into a roped-off pen when the crowd inevitable breaches the precincts and spreads on to the pavement.',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: false,
    image: 'https://lirp-cdn.multiscreensite.com/f4bb5b28/dms3rep/multi/opt/JT+4+583x388-1920w.jpg'
  },
  {
    nameOfPub: 'The High Cross',
    address: {
      line1: '350 High Road',
      line2: '',
      town: '',
      city: 'London',
      postCode: 'N17 9HT' 
    },
    description: 'The best things come in small packages – particularly when they\re micropubs. And squeezing into Tottenham\s diddy boozer The High Cross feels even more thrilling given that it used to be public bogs. The 1920s toilet block halfway up the High Road has been converted into a trad drinker\s paradise, but from the outside, it still looks like it\s open for the other sort of business – the ladies and gents signs are lit up in style. A single room manages to feel semi-spacious with glossy white wall tiles opening things up, while the bar itself is so compact there\s only room for one bartender (or maybe one-and-a-half) behind it. Still, somehow it’s managed to cram in ten taps, ranging from London craft beer – The Kernel, Howling Hops and Beavertown (of course) are regulars – to UK brews (Manchester’s Marble Brewery was a delicious discovery) and popular Belgian cherry beer Boon Kreik.',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: false,
    image: 'https://media.timeout.com/images/105454822/750/422/image.jpg'
  }
  {
    nameOfPub: 'Spread Eagle',
    address: {
      line1: '224 Homerton High Street',
      line2: '',
      town: '',
      city: 'London',
      postCode: 'E9 6AS' 
    },
    description: 'Getting a table at a vegan pub isn\t easy, it turns out. I call, I send two desperate emails, I call again. When I finally get through I\m told there are 60 people on the waiting list. I think I hear the waitress snort when I ask for a Friday night booking. Set at what was previously the lovely but often-empty Jackdaw and Star in Homerton, The Spread Eagle is clearly onto something. Opening a 100 percent animal-free pub (even the candles are vegan) during Veganuary is pure genius, especially when it\s from Meriel Armitage, the woman behind cult vegan-Mexican street food star Club Mexicana.The pub has kept its gorgeous central bar, but has been painted a deep, dark blue; lights are strung from the ceiling, and tables are made from worn wood. The vibe was more relaxed than I was expecting and the food came quickly. That table was (almost) worth all the wait. Much has been said about Club Mexicana\s to-fish: flakey, fleshy, and uncannily like fish, it/s famous in taco form. Here, they\re serving it beer-battered, slathered in tartare sauce and slipped into a soft, brioche bun. I can\t believe something this delicious could be made from bean curd. Another highlight was a spicy jackfruit taco (so meat-like, I swear this jackfruit bled).',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: false,
    image: 'https://www.londonvegandiaries.com/wp-content/uploads/2020/07/PHOTO-2020-07-24-12-13-46-980x735.jpg'
  },
  {
    nameOfPub: 'Pembury Tavern',
    address: {
      line1: '90 Amhurst Road',
      line2: '',
      town: '',
      city: 'London',
      postCode: 'E8 1JH' 
    },
    description: 'For once, there\s something poetic about this buyout. Since May, Hackney\s Five Points Brewing Co has been the proud parent of The Pembury Tavern, a pub on the busy junction with Dalston Lane that the brewery took its name from. Rather than coming in all guns blazing, Five Points got a feel for things behind the bar before a refurb at the end of the summer. And with the team\s sympathetic approach to the wants of existing punters, the two best things about the Pembury – pizza and pints – are still the main focus. The beer line-up has swung towards craft, but is committed to cask, too – it continues to stock Milton Brewery, the pub\s previous owner. Expect the Five Points range on tap – its Railway Porter doing a storming trade – as well as options from UK indies. Beer festivals are niche, with a green hop event in swing when we visited. Pizzas are stonebaked NY-style, the toppings – like sesame seeds for added crunch – are occasionally original and a vegan range is very Hackney.',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: true,
    image: 'https://media.timeout.com/images/105307260/750/422/image.jpg'
  },
  {
    nameOfPub: 'Marksman',
    address: {
      line1: '254 Hackney Rd',
      line2: '',
      town: '',
      city: 'London',
      postCode: 'E2 7SJ' 
    },
    description: 'The first-world conundrum of whether to dedicate Saturday night to fine dining or serious drinking is tackled head-on by the folks behind the relaunched Marksman. This is the latest addition to Hackney Road\s swelling crop of new and refurbed bars and restaurants. The owners decided have made few changes to the interior of this much-loved boozer, which means that the bar has retained many of the locals who used to prop it up. What has changed is the food, courtesy of head chefs and joint owners Tom Harris and Jon Rotheram, whose CVs include stints at St John, One Leicester Street and Fifteen. The Marksman isn\t cheap, but it\s good value for the calibre of cooking. Although there are plans to move the dining room upstairs come autumn, it\s great to get such confidently prepared food in such a convivial, low-maintenance environment. Dinner here is like having your low-end/high-end cake and eating it too.',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: true,
    image: 'https://pubwiki.co.uk/LondonPubs/BethnalGreen/Hackne9.jpg'
  },
  {
    nameOfPub: '',
    address: {
      line1: '',
      line2: '',
      town: '',
      city: 'London',
      postCode: '' 
    },
    description: '',
    isOutsideSeating: true,
    isPetFriendly: true,
    isFoodServed: true,
    isLiveSports: false,
    image: ''
  }
]

export default pubSeed