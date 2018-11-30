var express = require('express');
var router = express.Router();
var prometheus = require("prom-client");

const comicbookTotal = new prometheus.Counter({
  name: 'comicbook_total',
  help: 'Total number of comicbook views',
  labelNames: ['comicbook']
})

/* GET home page. */
router.get('/', function(req, res, next) {
  index = {
    "api_name": "comicbox",
    "api_version": "0.1.0"
  }
  res.json(index);
});

/* GET status */
router.get('/status', function(req, res, nex) {
  status = {
    "status": "I am healthy"
  }
  res.json(status);
});

/* GET comicbooks */
router.get('/comicbooks', function(req, res, nex) {
  comicList = [
    {
      "title": "Action Comics",
      "issue": 1005,
      "publisher": "DC Comics",
      "publish_date": "November 28, 2018",
      "price": 3.99,
      "writer": "Brian Michael Bendis",
      "artist": "Ryan Sook",
      "cover": "Ryan Sook",
      "description": "The murderous mystery of the Red Cloud uncovered! Clark Kent draws closer to revealing a secret crime family that has operated for years in Metropolis, but the family's enforcer-the mysterious Red Cloud-proves she's a match for even the Man of Steel with an attack that leaves Superman breathless. Don't miss the last-page shocker as we reveal the true face of the Red Cloud!",
      "page_count": 32,
    },
    {
      "title": "Batman Beyond",
      "issue": 26,
      "publisher": "DC Comics",
      "publish_date": "November 28, 2018",
      "price": 3.99,
      "writer": "Dan Jurgens",
      "artist": ["Norm Rapmund", "Brett Booth"],
      "cover": "Viktor Kalvachev",
      "description": "The Joker’s back—and he wants to turn Batman and Robin into a punchline once and for all! The original Clown Prince of Crime returns to stalk Neo-Gotham in part two of “The Final Joke”! Can you guess what happens when he encounters Barbara Gordon for the first time in decades? And when Robin gets caught on a video feed for the first time, no one’s more delighted than The Joker.",
      "page_count": 32,
    },
    {
      "title": "Old Man Hawkeye",
      "issue": 11,
      "publisher": "Marvel Comics",
      "publish_date": "November 28, 2018",
      "price": 3.99,
      "writer": "Ethan Sacks",
      "artist": "Francesco Mobili",
      "cover": "Marco Checchetto",
      "description": "AT LAST - BARON ZEMO! WEAPON X - the facility that created Wolverine - now holds a shocking new secret. And finally, CLINT BARTON comes face-to-face with his ultimate target: BARON ZEMO, who masterminded the murder of the AVENGERS 45 years before! Don't miss the penultimate issue of OLD MAN HAWKEYE as Clint closes in on his quest and new revelations make you question what you thought you knew! Parental Advisory",
      "page_count": 23,
    },
    {
      "title": "Marvel Two-In-One ",
      "issue": 12,
      "publisher": "Marvel Comics",
      "publish_date": "November 28, 2018",
      "price": 3.99,
      "writer": "Chip Zdarsky",
      "artist": "Ramon Perez",
      "cover": "Paul Renaud",
      "description": "Our heroes were betrayed and left for dead, but now that the FANTASTIC FOUR are back, where’s RACHNA KOUL? The HUMAN TORCH and INVISIBLE WOMAN will soon find out, provided they can get past THE MOLE MAN!",
      "page_count": 23,
    }
  ]
  res.json(comicList);
});

/*router.get('/metrics', (req, res) => {
  res.set('Content-Type', prometheus.register.contentType)
  res.end(prometheus.register.metrics())
});*/

module.exports = router;
