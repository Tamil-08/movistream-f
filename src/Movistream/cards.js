import React, { useState } from "react";
import Main from "./nav";
import PosterSection from "./PosterSection";
import TrailerModal from "./TrailModal";


import alice from './images/alice.jfif';
import stranger from './images/stranger.jfif';
import wednesday from './images/wednesday.jfif';
import squid from './images/squid2.jpg';
import gbu from './images/gbu.jpg';
import Hit from './images/Hit.jpg';
import inter from './images/intersteller.jfif';
import big from './images/big world.webp';
import squid2 from './images/squid2.jpg';
import sheldon from './images/sheldon.jpg';

//tv shows
import weak from './images/weak.jfif';
import unseen from './images/unseen.jpg';
import friends from './images/friends.jpg';
import dark from './images/dark.jfif';
import forever from './images/forever.jpg';
import boys from './images/boys.jfif';
import peaky from './images/peaky.jfif';
import all from './images/all.jfif';

// Movies

import action from './images/action.jpg'
import deadly from './images/deadly.jpg';
import havoc from './images/havoc.jfif';
import Nonnas from './images/Nonnas.jpg';
import inside from './images/inside.jfif';
import home from './images/home.jfif';
import extract from './images/extract.webp';
import twin from './images/twin.jpg';

// recently added

import rich from './images/rich.jfif';
import office from './images/office.jpg';
import retro from './images/retro.webp';
import world from './images/world.jpg';
import thunder from './images/thunder.webp';
import family from './images/family.jpg';
import craft from './images/craft.jpg';
import seven from './images/seven.jfif';

//Anime

import naruto from './images/naruto.jfif';
import onepiece from './images/one piece.jfif';
import yourname from './images/your name.jfif';
import weather from './images/weather.jfif';
import dragon from './images/dragon.jfif';
import dandad from './images/dandad.jfif';
import blue from './images/blue.webp';
import chainsaw from './images/chainsaw.png';

// Web series

import bad from './images/bad.jfif';
import game from './images/game.jpg';
import guest from './images/guest.jpg';
import paatal from './images/paatal.jpg'
import loki from './images/loki.jfif';
import paatal1 from './images/paatal 1.jpg';
import money from './images/money.jpg';
import voffice from './images/voffice.jpg';

import Carso from './Carso'


const Home = () => {


  const [trailerUrl, setTrailerUrl] = useState(null)

  const handlePlay = (url) => {
    setTrailerUrl(url);

  };

  const popularPosters = [
    {
      name: "Alice in Borderland",
      img: alice,
      trailer: "https://www.youtube.com/watch?v=49_44FFKZ1M",
      genre: "Thriller, Sci-Fi",
      description: "Contestants play deadly games to survive in an abandoned Tokyo."
    },
    {
      name: "Stranger Things",
      img: stranger,
      trailer: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
      genre: "Sci-Fi, Horror",
      description: "Kids uncover supernatural mysteries in a small town."
    },
    {
      name: "Wednesday",
      img: wednesday,
      trailer: "https://www.youtube.com/watch?v=Di310WS8zLk",
      genre: "Comedy, Mystery",
      description: "Wednesday Addams investigates a killing spree at her school."
    },
    {
      name: "Squid Game",
      img: squid,
      trailer: "https://www.youtube.com/watch?v=oqxAJKy0ii4",
      genre: "Drama, Thriller",
      description: "Desperate people compete in deadly games for a cash prize."
    },
    {
      name: "Good Bad Ugly",
      img: gbu,
      trailer: "https://www.youtube.com/watch?v=c9zWcnNR2q0",
      genre: "Western",
      description: "Three men race to find a fortune in buried gold."
    },
    {
      name: "Hit: The First Case",
      img: Hit,
      trailer: "https://www.youtube.com/watch?v=BG1wHm91mmA",
      genre: "Crime, Thriller",
      description: "A detective battles his own trauma while solving a missing case."
    },
    {
      name: "Interstellar",
      img: inter,
      trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
      genre: "Sci-Fi",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
      name: "Big World",
      img: big,
      trailer: "https://www.youtube.com/watch?v=1JVqMj3uv_E",
      genre: "Adventure",
      description: "A journey through vast lands in search of hidden truths."
    },
    {
      name: "Squid Game Season 2",
      img: squid2,
      trailer: "https://www.youtube.com/watch?v=Ed1sGgHUo88",
      genre: "Drama, Thriller",
      description: "The deadly game continues with higher stakes."
    },
    {
      name: "Young Sheldon",
      img: sheldon,
      trailer: "https://www.youtube.com/watch?v=lgE0JaBrL8c",
      genre: "Comedy",
      description: "A child prodigy navigates high school and life."
    }
  ];
  const Tvshows = [
    {
      name: "Weak Hero",
      img: weak,
      trailer: "https://www.youtube.com/watch?v=Y1kiQzQGVEo",
      genre: "Action",
      description: "A studious young man refuses to back down from the bullies in his class."
    },
    {
      name: "Unseen",
      img: unseen,
      trailer: "https://www.youtube.com/watch?v=0n1NvFns3-Y",
      genre: "Drama",
      description: "A mysterious woman becomes involved in a crime."
    },
    {
      name: "Friends",
      img: friends,
      trailer: "https://www.youtube.com/watch?v=8wThS5WCzs4",
      genre: "Comedy, Sitcom",
      description: "A group of friends navigate life in New York City."
    },
    {
      name: "Dark",
      img: dark,
      trailer: "https://www.youtube.com/watch?v=HBpZHcat8DQ",
      genre: "Sci-Fi, Mystery",
      description: "Time travel and dark secrets in a small German town."
    },
    {
      name: "Forever",
      img: forever,
      trailer: "https://www.youtube.com/watch?v=Dqg3pzQH8Ew",
      genre: "Drama",
      description: "A couple questions their relationship and identity."
    },
    {
      name: "The Boys",
      img: boys,
      trailer: "https://www.youtube.com/watch?v=M1bhOaLV4FU",
      genre: "Action, Superhero",
      description: "A group fights corrupt superheroes."
    },
    {
      name: "Peaky Blinders",
      img: peaky,
      trailer: "https://www.youtube.com/watch?v=oVzVdvGIC7U",
      genre: "Crime, Drama",
      description: "A gangster family in 1919 Birmingham, England."
    },
    {
      name: "All of Us Are Dead",
      img: all,
      trailer: "https://www.youtube.com/watch?v=IN5TD4VRcSM",
      genre: "Horror, Thriller",
      description: "Students trapped during a zombie virus outbreak."
    }
  ];

  const movies = [
    {
      name: "Nonnas",
      img: Nonnas,
      trailer: "https://www.youtube.com/watch?v=rDJxJd3FzDY",
      genre: "Drama",
      description: "A heartfelt story about tradition and family."
    },
    {
      name: "Action",
      img: action,
      trailer: "https://www.youtube.com/watch?v=R2gbPxeNk2E",
      genre: "Action, Thriller",
      description: "A rogue agent must fight to expose a conspiracy."
    },
    {
      name: "Havoc",
      img: havoc,
      trailer: "https://www.youtube.com/watch?v=6txjTWLoSc8",
      genre: "Crime, Action",
      description: "After a drug deal goes wrong, a detective fights his way through a criminal underworld."
    },
    {
      name: "Extraction",
      img: extract,
      trailer: "https://www.youtube.com/watch?v=L6P3nI6VnlY",
      genre: "Action",
      description: "A black-market mercenary is hired to rescue the kidnapped son of an international crime lord."
    },
    {
      name: "A Amercian Marriage",
      img: deadly,
      trailer: "https://www.youtube.com/watch?v=cJMq6ykdSPI",
      genre: "Thriller",
      description: "A disturbing 911 call and horrific crime scene raise questions about Jason Corbett's death."
    },
    {
      name: "Inside Out",
      img: inside,
      trailer: "https://www.youtube.com/watch?v=tlg4BQqhn3I",
      genre: "Psychological, Drama",
      description: "A wealthy art thief becomes trapped in a luxury penthouse."
    },
    {
      name: "Home",
      img: home,
      trailer: "https://www.youtube.com/watch?v=MyqZf8LiWvM",
      genre: "Goofy, Sci-fi Adventure",
      description: "Oh, a lovable misfit alien, runs away from his planet and takes shelter on Earth."
    },
    {
      name: "Twinlight Series",
      img: twin,
      trailer: "https://www.youtube.com/watch?v=QDRLSqm_WVg",
      genre: "Mystery, Crime",
      description: "A cop tries to solve the mysterious murder of a judge."
    }
  ];

  const recentlyAdded = [
    {
      name: "Retro",
      img: retro,
      trailer: "https://www.youtube.com/watch?v=ZnH_2I0WoFQ",
      genre: "Action",
      description: "A nostalgic journey through vintage pop culture."
    },
    {
      name: "The Office (US)",
      img: office,
      trailer: "https://www.youtube.com/watch?v=Vmb1tqYqyII",
      genre: "Comedy, Sitcom",
      description: "A mockumentary on a group of typical office workers."
    },
    {
      name: "Bitch x Rich",
      img: rich,
      trailer: "https://www.youtube.com/watch?v=RR9ki1MCYoI",
      genre: "Thiller",
      description: "The world's richest kid lives a lavish life and solves mysteries."
    },
    {
      name: "Reunited World",
      img: world,
      trailer: "https://www.youtube.com/watch?v=jxYxfWrwzBA",
      genre: "Comedy, Drama",
      description: "Dead twelve years earlier, a young man mysteriously reappears with the same appearance."
    },
    {
      name: "Thunderbolts",
      img: thunder,
      trailer: "https://www.youtube.com/watch?v=x52MYc8brac",
      genre: "Action, Comedy",
      description: "Two childhood friends become superheroes in middle age."
    },
    {
      name: " Tourist Family ",
      img: family,
      trailer: "https://www.youtube.com/watch?v=9sH1PoGOydc",
      genre: "Family, Comedy",
      description: "After the COVID-19 pandemic hits Sri Lanka, a family travels to India to begin a new life. Their arrival quickly transforms their new neighbourhood."
    },
    {
      name: "Minecraft",
      img: craft,
      trailer: "https://www.youtube.com/watch?v=wJO_vIDZn-I",
      genre: "Fantasy",
      description: "An eclectic foursome of aspiring teenage witches get more than they bargained for."
    },
    {
      name: " Scissor Seven",
      img: seven,
      trailer: "https://www.youtube.com/watch?v=WaV2GMIZ3l4",
      genre: "Comedy, Action",
      description: "Two detectives hunt a serial killer who uses the seven deadly sins as his motives."
    }
  ];

  const anime = [
    {
      name: "Naruto",
      img: naruto,
      trailer: "https://www.youtube.com/watch?v=-G9BqkgZXRA",
      genre: "Action, Adventure",
      description: "A young ninja seeks recognition and dreams of becoming the Hokage."
    },
    {
      name: "One Piece (Netflix Live Action)",
      img: onepiece,
      trailer: "https://www.youtube.com/watch?v=Ades3pQbeh8",
      genre: "Adventure, Fantasy",
      description: "A young pirate embarks on a journey to find the legendary treasure One Piece."
    },
    {
      name: "Your Name",
      img: yourname,
      trailer: "https://www.youtube.com/watch?v=xU47nhruN-Q",
      genre: "Romance, Fantasy",
      description: "Two strangers find themselves linked in a bizarre way."
    },
    {
      name: "Weathering With You",
      img: weather,
      trailer: "https://www.youtube.com/watch?v=Q6iK6DjV_iE",
      genre: "Fantasy, Drama",
      description: "A boy runs away to Tokyo and meets a girl who can manipulate weather."
    },
    {
      name: "Dragon Ball Super",
      img: dragon,
      trailer: "https://www.youtube.com/watch?v=sxufB6DxXk0",
      genre: "Action, Sci-Fi",
      description: "Goku and Vegeta encounter a Saiyan named Broly."
    },
    {
      name: "Dandadan",
      img: dandad,
      trailer: "https://www.youtube.com/watch?v=0XJxfbN36Uw",
      genre: "Sci-Fi, Supernatural",
      description: "Two teens investigate UFOs and ghosts and get caught up in chaos."
    },
    {
      name: "Blue Lock",
      img: blue,
      trailer: "https://www.youtube.com/watch?v=IVsII3dLbWc",
      genre: "Drama",
      description: "A high school student discovers a passion for art."
    },
    {
      name: "Chainsaw Man",
      img: chainsaw,
      trailer: "https://www.youtube.com/watch?v=rMXILr3zwAY",
      genre: "Action, Horror",
      description: "A young man with a chainsaw dog becomes a devil hunter."
    }
  ];
  const webSeries = [
    {
      name: "Breaking Bad",
      img: bad,
      trailer: "https://www.youtube.com/watch?v=HhesaQXLuRY",
      genre: "Crime, Drama, Thriller",
      description: "A high school chemistry teacher turned methamphetamine producer descends into the criminal underworld."
    },
    {
      name: "Pyramid Game ",
      img: game,
      trailer: "https://www.youtube.com/watch?v=BcYin0vw1yc",
      genre: "Drama, Sport",
      description: "An orphaned chess prodigy's rise to fame while battling addiction and personal demons."
    },
    {
      name: "The Guest",
      img: guest,
      trailer: "https://www.youtube.com/watch?v=LEJDvvJGIuI",
      genre: "Action, Mystery, Thriller",
      description: "A soldier introduces himself to the Peterson family, claiming to be a friend of their son, and soon they find themselves in danger."
    },
    {
      name: "Paatal Lok",
      img: paatal,
      trailer: "https://www.youtube.com/watch?v=KpZnTmAQUfE",
      genre: "Crime, Thriller, Drama",
      description: "A cynical Delhi cop lands a case that leads him into the dark underbelly of the Indian political system."
    },
    {
      name: "Loki",
      img: loki,
      trailer: "https://www.youtube.com/watch?v=nW948Va-l10",
      genre: "Action, Adventure, Fantasy",
      description: "After stealing the Tesseract, Loki lands in a world of trouble with the Time Variance Authority."
    },
    {
      name: "Paatal Lok – Season 2",
      img: paatal1,
      trailer: "https://www.youtube.com/watch?v=RyzVgy8JteA",
      genre: "Crime, Thriller, Drama",
      description: "The gritty cop returns to face a darker conspiracy in the second season of the critically acclaimed Indian crime series."
    },
    {
      name: "Money Heist",
      img: money,
      trailer: "https://www.youtube.com/watch?v=_InqQJRqGW4",
      genre: "Action, Crime, Drama",
      description: "A criminal mastermind plans the biggest heist in history — to print billions of euros in the Royal Mint of Spain."
    },
    {
      name: "Vera Mari Office",
      img: voffice,
      trailer: "https://www.youtube.com/watch?v=hFA4xknFI4A",
      genre: "Comedy",
      description: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium."
    },
    {
      name: "Loki Season 2",
      img: loki,
      trailer: "https://www.youtube.com/watch?v=dug56u8NN7g",
      genre: "Action, Adventure, Fantasy",
      description: "After stealing the Tesseract, Loki lands in a world of trouble with the Time Variance Authority."
    },
  ];

  return (
    <>
      <Main />
      <Carso />

      {/* Anchor lyadded for smooth scrolling */}
      <div id="popular">
        <PosterSection title="Popular on Movistream" posters={popularPosters} onPlay={handlePlay} />
      </div>

      <div id="tvshows">
        <PosterSection title="TV Shows" posters={Tvshows} onPlay={handlePlay} />
      </div>

      <div id="movies">
        <PosterSection title="Movies" posters={movies} onPlay={handlePlay} />
      </div>

      <div id="recent">
        <PosterSection title="Recently Added" posters={recentlyAdded} onPlay={handlePlay} />
      </div>

      <div id="anime">
        <PosterSection title="Anime" posters={anime} onPlay={handlePlay} />
      </div>

      <div id="webseries">
        <PosterSection title="Web Series" posters={webSeries} onPlay={handlePlay} />
      </div>

      {/* Only one Trailer Modal */}
      <TrailerModal url={trailerUrl} onClose={() => setTrailerUrl(null)} />

      {/* <PosterSection title="Popular on Movistream" posters={popularPosters} onPlay={handlePlay} />
      <TrailerModal url={trailerUrl} onClose={() => setTrailerUrl(null)} />
      <PosterSection title="Tv Shows" posters={Tvshows} onPlay={handlePlay} />
      <TrailerModal url={trailerUrl} onClose={() => setTrailerUrl(null)} />
      <PosterSection title="Movies" posters={movies} onPlay={handlePlay} />
      <TrailerModal url={trailerUrl} onClose={() => setTrailerUrl(null)} />
      <PosterSection title="Recently Added" posters={recentlyAdded} onPlay={handlePlay} />
      <TrailerModal url={trailerUrl} onClose={() => setTrailerUrl(null)} />
      <PosterSection title="Anime" posters={anime} onPlay={handlePlay} />
      <TrailerModal url={trailerUrl} onClose={() => setTrailerUrl(null)} />
      <PosterSection title="Web Series" posters={webSeries} onPlay={handlePlay} />
      <TrailerModal url={trailerUrl} onClose={() => setTrailerUrl(null)} /> */}


    </>
  );
};

export default Home;





