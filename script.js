const theBestAlbum = {
  title: "Midnight Frequencies",
  artist: "Neon Pulse",
  genre: "Synthwave",
  duration: "42:18",
  tracks: [
    {
      title: "City Lights",
      duration: "4:36",
    },
    {
      title: "Digital Horizon",
      duration: "5:02",
    },
    {
      title: "Neon Rain",
      duration: "3:58",
    },
    {
      title: "Echoes in the Grid",
      duration: "6:14",
    },
    {
      title: "Last Train Home",
      duration: "4:47",
    },
  ],
}

const favouritesAlbums = [
  {
    title: "Nebula Dreams",
    artist: "The Astrals",
    genre: "Electronic",
    duration: "4:12",
  },
  {
    title: "Crimson Sky",
    artist: "Solar Drift",
    genre: "Rock",
    duration: "3:45",
  },
  {
    title: "Silent Waves",
    artist: "Lunar Tide",
    genre: "Ambient",
    duration: "5:03",
  },
  {
    title: "Golden Echo",
    artist: "Echo District",
    genre: "Pop",
    duration: "3:21",
  },
  {
    title: "Midnight Transit",
    artist: "Neon Pulse",
    genre: "Synthwave",
    duration: "4:58",
  },
  {
    title: "Velvet Horizon",
    artist: "Aurora Lines",
    genre: "Indie",
    duration: "3:37",
  },
  {
    title: "Parallel Lights",
    artist: "Photon Avenue",
    genre: "Electronic",
    duration: "4:05",
  },
  {
    title: "Fading Polaroids",
    artist: "Memory Lane",
    genre: "Lo-Fi",
    duration: "2:54",
  },
  {
    title: "Storm over Tokyo",
    artist: "Kaiju Sunset",
    genre: "Post-Rock",
    duration: "6:11",
  },
  {
    title: "Desert Mirage",
    artist: "Sahara Bloom",
    genre: "World",
    duration: "4:26",
  },
  {
    title: "Broken Satellites",
    artist: "Orbit Fall",
    genre: "Alternative",
    duration: "3:49",
  },
  {
    title: "Northern Lights",
    artist: "Arctic Choir",
    genre: "Chillout",
    duration: "5:22",
  },
]

function colNode() {
  const col = document.createElement("div")
  col.classList.add(
    "col-6",
    "col-md-4",
    "col-lg-3",
    "d-flex",
    "justify-content-center",
  )
  return col
}

function cardNode(imgSrc, title, artist, genre, duration) {
  const card = document.createElement("div")
  card.classList.add("custom-card")

  const imgWrapper = document.createElement("div")
  imgWrapper.classList.add("custom-card-img")

  const img = document.createElement("img")
  img.src = imgSrc

  imgWrapper.appendChild(img)
  card.appendChild(imgWrapper)

  const titleWrapper = document.createElement("div")
  titleWrapper.classList.add("title")

  const titleBox = document.createElement("h3")
  titleBox.textContent = title

  const genreBox = document.createElement("p")
  genreBox.textContent = genre

  titleWrapper.appendChild(titleBox)
  titleWrapper.appendChild(genreBox)
  card.appendChild(titleWrapper)

  const detailsWrapper = document.createElement("div")
  detailsWrapper.classList.add("details")

  const artistBox = document.createElement("p")
  artistBox.textContent = artist

  const durationBox = document.createElement("p")
  durationBox.textContent = duration

  detailsWrapper.appendChild(artistBox)
  detailsWrapper.appendChild(durationBox)
  card.appendChild(detailsWrapper)

  return card
}

function generateBestAlbum() {
  const bestContainer = document.getElementById("the-best")

  const col = document.createElement("div")
  col.classList.add(
    "col",
    "col-lg-6",
    "d-flex",
    "flex-column",
    "gap-4",
    "justify-content-center",
  )

  const card = document.createElement("div")
  card.classList.add("custom-landscape-card")

  const imgWrapper = document.createElement("div")
  imgWrapper.classList.add("custom-card-img")

  const img = document.createElement("img")
  img.src = "https://picsum.photos/500/500?id=-1"

  imgWrapper.appendChild(img)
  card.appendChild(imgWrapper)

  const titleWrapper = document.createElement("div")
  titleWrapper.classList.add("title")

  const title = document.createElement("h3")
  title.textContent = theBestAlbum.title

  const genre = document.createElement("p")
  genre.textContent = theBestAlbum.genre

  titleWrapper.appendChild(title)
  titleWrapper.appendChild(genre)
  card.appendChild(titleWrapper)

  const detailsWrapper = document.createElement("div")
  detailsWrapper.classList.add("details")

  const artist = document.createElement("p")
  artist.textContent = theBestAlbum.artist

  const duration = document.createElement("p")
  duration.textContent = theBestAlbum.duration

  detailsWrapper.appendChild(artist)
  detailsWrapper.appendChild(duration)
  card.appendChild(detailsWrapper)

  const trackList = document.createElement("ul")
  trackList.classList.add("list-group")

  for (let track of theBestAlbum.tracks) {
    const li = document.createElement("li")
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center",
    )

    li.textContent = track.title

    const span = document.createElement("span")
    span.textContent = track.duration

    li.appendChild(span)
    trackList.appendChild(li)
  }

  card.appendChild(trackList)
  col.appendChild(card)
  bestContainer.appendChild(col)
}

function generateCards() {
  const favouritesAlbumsContainer = document.getElementById("favourites")

  for (let i = 0; i < favouritesAlbums.length; i++) {
    const col = colNode()
    col.appendChild(
      cardNode(
        `https://picsum.photos/500/500?id=${i}`,
        favouritesAlbums[i].title,
        favouritesAlbums[i].artist,
        favouritesAlbums[i].genre,
        favouritesAlbums[i].duration,
      ),
    )
    favouritesAlbumsContainer.appendChild(col)
  }
}

window.addEventListener("load", () => {
  generateCards()
  generateBestAlbum()
})
