const mongoose = require('mongoose')
const Movies = require('../models/Movies')

mongoose.connect("mongodb+srv://admin:0000@cluster0.g2xzumv.mongodb.net/?retryWrites=true&w=majority")
    .then (()=> {
        console.log('listening to db')
    })
    .catch((error) => {
        console.log(error)
    })

const seedMovies = {
    "page": 1,
    "results": [
    {
    "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    "genre_ids": [
    28,
    12,
    878
    ],
    "TMDBId": 505642,
    "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    "release_date": "2022-11-09",
    "title": "Black Panther: Wakanda Forever"
     },
    {
    "backdrop_path": "/9Rq14Eyrf7Tu1xk0Pl7VcNbNh1n.jpg",
    "genre_ids": [
    28,
    12,
    53
    ],
    "TMDBId": 646389,
    "overview": "After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take the plane and its passengers hostage.",
    "poster_path": "/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg",
    "release_date": "2023-01-13",
    "title": "Plane"
    },
    {
    "backdrop_path": "/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg",
    "genre_ids": [
    16,
    12,
    35,
    10751,
    14
    ],
    "TMDBId": 315162,
    "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
    "release_date": "2022-12-07",
    "title": "Puss in Boots: The Last Wish"
     },
    {
    "backdrop_path": "/q2fY4kMXKoGv4CQf310MCxpXlRI.jpg",
    "genre_ids": [
    878,
    27,
    35
    ],
    "TMDBId": 536554,
    "overview": "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
    "poster_path": "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
    "release_date": "2022-12-28",
    "title": "M3GAN"
    },
    {
    "backdrop_path": "/zGoZB4CboMzY1z4G3nU6BWnMDB2.jpg",
    "genre_ids": [
    28,
    10749,
    35
    ],
    "TMDBId": 758009,
    "overview": "Darcy and Tom gather their families for the ultimate destination wedding but when the entire party is taken hostage, “’Til Death Do Us Part” takes on a whole new meaning in this hilarious, adrenaline-fueled adventure as Darcy and Tom must save their loved ones—if they don’t kill each other first.",
    "poster_path": "/t79ozwWnwekO0ADIzsFP1E5SkvR.jpg",
    "release_date": "2022-12-28",
    "title": "Shotgun Wedding"
     },
    {
    "backdrop_path": "/HfjndPe768ZLyjMNySmeNyJdl4.jpg",
    "genre_ids": [
    878,
    12,
    35
    ],
    "TMDBId": 640146,
    "overview": "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
    "poster_path": "/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
    "release_date": "2023-02-10",
    "title": "Ant-Man and the Wasp: Quantumania"
    },
    {
    "backdrop_path": "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
    "genre_ids": [
    878,
    12,
    28
    ],
    "TMDBId": 76600,
    "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    "release_date": "2022-12-14",
    "title": "Avatar: The Way of Water"
     },
    {
    "backdrop_path": "/cL0cdccOMzM508ODsWPfHVMMAzo.jpg",
    "genre_ids": [
    28
    ],
    "TMDBId": 267805,
    "original_title": "There Are No Saints",
    "overview": "A man is imprisoned for a crime he didn't commit. When his wife is murdered and his son kidnapped and taken to Mexico, he devises an elaborate and dangerous plan to rescue his son and avenge the murder.",
    "poster_path": "/fcOTYArjKuAgufwHoTvx8w9UKCv.jpg",
    "release_date": "2022-05-27",
    "title": "There Are No Saints"
     },
    {
    "backdrop_path": "/a4I481szRmycyreQTLrRe4f4YJe.jpg",
    "genre_ids": [
    80,
    53,
    18
    ],
    "TMDBId": 842544,
    "overview": "Ryan Logan, a former Special Forces operative, is battling to cope with life after the loss of his wife.  He is thrusted into the criminal underworld to keep his only son from being taken from him.",
    "poster_path": "/bxh5xCCW9Ynfg6EZJWUkc1zqTnr.jpg",
    "release_date": "2023-01-05",
    "title": "Transfusion"
    },
    {
    "backdrop_path": "/qHdPNd1cUaSNYLLNgt1Pv3LVd0T.jpg",
    "genre_ids": [
    878,
    28,
    12
    ],
    "TMDBId": 843794,
    "overview": "On an uninhabitable 22nd-century Earth, the outcome of a civil war hinges on cloning the brain of an elite soldier to create a robot mercenary.",
    "poster_path": "/z2nfRxZCGFgAnVhb9pZO87TyTX5.jpg",
    "release_date": "2023-01-20",
    "title": "JUNG_E"
    },
    {
    "backdrop_path": "/1pDYetDF3r9V7ZB5SeyoPcUkBiB.jpg",
    "genre_ids": [
    27,
    53,
    9648
    ],
    "TMDBId": 788752,
       "overview": "After witnessing a grotesque murder at a party in her new town, a teenager starts having strange visions and bizarre desires.",
    "popularity": 858.469,
    "poster_path": "/abBDzmy35A3Nkupn6wK2DKyFamd.jpg",
    "release_date": "2022-11-18",
    "title": "Viking Wolf"
    },
    {
    "backdrop_path": "/tCpMRsHlfR6CcqJYA3kJMS3YApt.jpg",
    "genre_ids": [
    28,
    80,
    53
    ],
    "TMDBId": 1035806,
    "original_language": "en",
    "original_title": "Detective Knight: Independence",
    "overview": "Detective James Knight 's last-minute assignment to the Independence Day shift turns into a race to stop an unbalanced ambulance EMT from imperiling the city's festivities. The misguided vigilante, playing cop with a stolen gun and uniform, has a bank vault full of reasons to put on his own fireworks show... one that will strike dangerously close to Knight's home.",
    "poster_path": "/jrPKVQGjc3YZXm07OYMriIB47HM.jpg",
    "release_date": "2023-01-20",
    "title": "Detective Knight: Independence"
      },
    {
    "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    "genre_ids": [
    14,
    28,
    878
    ],
    "TMDBId": 436270,
    "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    "poster_path": "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    "release_date": "2022-10-19",
    "title": "Black Adam"
    },
    {
    "backdrop_path": "/jhi3K0rN46SSu9wEu6zYVCOeVtH.jpg",
    "genre_ids": [
    16,
    28,
    878
    ],
    "TMDBId": 1003580,
    "overview": "Kara, devastated by the loss of Krypton, struggles to adjust to her new life on Earth. Her cousin, Superman, mentors her and suggests she leave their space-time to attend the Legion Academy in the 31st century, where she makes new friends and a new enemy: Brainiac 5. Meanwhile, she must contend with a mysterious group called the Dark Circle as it searches for a powerful weapon held in the Academy’s vault.",
    "poster_path": "/3whQLi8RI7h2h2Si2KTDFJxfEcR.jpg",
    "release_date": "2023-02-07",
    "title": "Legion of Super-Heroes"
    },
    {
    "backdrop_path": "/cU7itLM8qmwMiaNnWsJPQLKe79j.jpg",
    "genre_ids": [
    878,
    27,
    12,
    28
    ],
    "TMDBId": 1013870,
    "overview": "All Gary wants is to make awesome home movies with his best buds. All his older sister Samantha wants is to hang with the cool kids. When their parents head out of town one Halloween weekend, an all-time rager of a teen house party turns to terror when aliens attack, forcing the siblings to band together to survive the night.",
    "popularity": 884.388,
    "poster_path": "/wQ53sO5n9LCFbssV3oQ4CuajL1L.jpg",
    "release_date": "2023-01-20",
    "title": "Kids vs. Aliens"

    },
    {
    "backdrop_path": "/3LsHvo8VTSrcN7nZSy3jyNYGdCW.jpg",
    "genre_ids": [
    18,
    27,
    53
    ],
    "TMDBId": 931954,
    "overview": "Lucía, a club dancer on the run, takes refuge in a sinister building on the outskirts of Madrid where her sister Rocío lives with her daughter Alba.",
    "popularity": 792.74,
    "poster_path": "/go41vTWzN5B17keXyBOYgc7kbyh.jpg",
    "release_date": "2022-12-02",
    "title": "Venus"
    },
    {
    "backdrop_path": "/u6HeK9nl6p2MAKSxHF613LOhuFM.jpg",
    "genre_ids": [
    10749,
    35
    ],
    "TMDBId": 703451,
    "overview": "When best friends and total opposites Debbie and Peter swap homes for a week, they get a peek into each other's lives that could open the door to love.",
    "popularity": 782.638,
    "poster_path": "/ApkSeqfIPRCxOtfjXYYE6Ji7jVU.jpg",
    "release_date": "2023-02-10",
    "title": "Your Place or Mine"
    },
    {
    "backdrop_path": "/5pMy5LF2JAleBNBtuzizfCMWM7k.jpg",
    "genre_ids": [
    10752,
    36,
    18
    ],
    "TMDBId": 653851,
    "overview": "The harrowing true story of two elite US Navy fighter pilots during the Korean War. Their heroic sacrifices would ultimately make them the Navy's most celebrated wingmen.",
    "poster_path": "/26yQPXymbWeCLKwcmyL8dRjAzth.jpg",
    "release_date": "2022-11-23",
    "title": "Devotion"
    },
    {
    "backdrop_path": "/Aqldsq65Nj1KAkQD2MzkZsAk5N5.jpg",
    "genre_ids": [
    28,
    53,
    18
    ],
    "TMDBId": 846433,
    "overview": "A noir thriller set in Miami, the film follows an enforcer who discovers his femme fatale boss has branched out into cyber sex trafficking, putting a young runaway he’s befriended at risk. He sacrifices everything to save the young girl from the deadly organization he’s spent his life building.",
    "popularity": 806.695,
    "poster_path": "/pXC8JJbfnRWtbD8i2yKFqqWEO4X.jpg",
    "release_date": "2022-09-22",
    "title": "The Enforcer"
    },
    {
    "backdrop_path": "/pV9cKtUOpJFTG9Ub816XhTpQMbF.jpg",
    "genre_ids": [
    53,
    27
    ],
    "TMDBId": 746524,
    "overview": "Jess, a newly separated mother and nurse, moves into her old family farmhouse with Tyler, her teenage daughter, and Owen, her eight-year-old son. One night, the family dog senses something in the woods and runs off to find it. He returns a couple of days later and attacks Owen, savagely biting him before Jess is able to intervene. Owen is rushed to the hospital. His condition worsens, and no one can figure out why... until Jess discovers a disturbing cure...",
    "poster_path": "/gCUFtTvjK4gbmjVxhx8bhyOhAeW.jpg",
    "release_date": "2023-01-12",
    "title": "Blood"
    }
    ],
    "total_pages": 37140,
    "total_results": 742798
    }

const seedDatabase = async () => {
    await Movies.insertMany(seedMovies.results)
}

seedDatabase().then(() => {
    mongoose.connection.close()
})