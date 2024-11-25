![screenshot](https://portfolio-v2-sigma-eight-85.vercel.app/Screenshot%20(114)-min.png)
 
# Simple Online Music Player

A lightweight, static music player website built using HTML, CSS, and JavaScript. This music player supports predefined audio files, fetched dynamically from a `text.json` file that contains song metadata. Users can select from different categories or playlists and enjoy basic playback controls along with additional features like looping, sleep timer, and more.

## Features

1. **Song Categories or Playlists:**
   - Organize songs into different categories or playlists, fetched dynamically from the `text.json` file.
2. **Basic Playback Controls:**

   - Standard music controls: **Play**, **Pause**, **Next**, and **Previous** buttons to control playback of the audio files.

3. **Play Modes:**

   - **Play one:** Repeats the current song in a loop until stopped.
   - **Play All In loop:** Repeats the entire playlist indefinitely.

4. **Sleep Timer:**
   - Set a timer to stop music playback after a specified duration.

## Technologies Used

- **HTML5:** Structure and layout of the website.
- **CSS3:** Styling the music player interface, including responsive design.
- **JavaScript (ES6):** Core logic to handle fetching song info, controlling playback, managing categories, and handling features like looping and sleep timer.
- **JSON:** A `text.json` file is used to store song metadata (song name, artist, file path, etc.), which is fetched by the app to dynamically display songs.

## Setup Instructions

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/kuntal-hub/spotify_clone.git
   ```

2. Navigate to the project directory:

   ```bash
   cd spotify_clone
   ```

3. Ensure the `text.json` file and the predefined audio files are available in the project structure:

   ```bash
   ├── index.html
   ├── styles.css
   ├── script.js
   ├── text.json
   └── songs/
       ├── song1.mp3
       ├── song2.mp3
       └── ...
   └── song_image/
       ├── song1_image.jpg
       ├── song2_image.jpg
       └── ...
   ```

4. Open the `index.html` file in your browser to run the music player:
   ```bash
   open index.html
   ```

No additional installation is needed, as the app is built using vanilla HTML, CSS, and JavaScript.

## How It Works

1. **Loading Songs:**

   - The app fetches the `text.json` file at runtime to load the song information (like title, artist, file path) and populate the player with available categories and songs.

2. **Selecting a Playlist/Category:**

   - The user can browse through categories/playlists fetched from the JSON file and select the desired one to view its songs.

3. **Playback Controls:**
   - **Play/Pause:** Starts or pauses the current song.
   - **Next/Previous:** Skips to the next or previous song in the current playlist.
4. **Loop Modes:**

   - **Play One In Loop:** Repeats the current song indefinitely.
   - **Loop All:** Repeats the entire playlist indefinitely.

5. **Sleep Timer:**
   - Users can set a timer to stop the music playback after a specific amount of time (e.g., 15 minutes, 30 minutes, etc.).

## File Structure

```bash
├── index.html          # Main HTML file
├── style.css           # CSS file for styling the music player
├── style2.css          # CSS file for styling the music player
├── utility.css         # utility css file
├── script.js           # JavaScript file for handling player logic
├── text.json           # JSON file containing song metadata
└── songs/              # Directory containing all audio files
    ├── song1.mp3
    ├── song2.mp3
    └── ...
└── song_image/         # Directory containing all song images
    ├── song1_image.jpg
    ├── song2_image.jpg
    └── ...
```

### Example `text.json` File:

```json
{
  "anupom roy songs": {
    "Alada Alada sob": {
      "song_src": "songs/Alada_Alada_anupom_ror.mp3",
      "img_src": "song_image/alada_alada.jpg",
      "duration": "03:33"
    },
    "Ami Ajkal Valo Achi": {
      "song_src": "songs/Ami_Ajkal_Bhalo_Achi.mp3",
      "img_src": "song_image/ami_ajkal_valo_achi.jpg",
      "duration": "03:34"
    },
    "Boba Tunnel": {
      "song_src": "songs/Boba_Tunnel_Video_Song___Bengali_Film__Chotushkone____Anupam_Roy.mp3",
      "img_src": "song_image/boba_tunnel.jpg",
      "duration": "03:34"
    }
  },
  "Somlata Acharyya Chowdhury songs": {
    "amar khola hawa...": {
      "song_src": "songs/Khola_Hawa___Somlata___The_Aces___Rabindra_Sangeet___Somlata_Acharyya_Chowdhury.mp3",
      "img_src": "song_image/Tomar-Khola-Hawa.jpg",
      "duration": "03:34"
    },
    "o ja mana na mana...": {
      "song_src": "songs/Rabindra_Sangeet___O_Je_Mane_Na_Mana___Somlata_Acharyya_Chowdhury___Somlata_And_The_Aces_.mp3",
      "img_src": "song_image/o_ja_mana_na_mana.jpg",
      "duration": "03:34"
    },
    "Nishitho Raater...": {
      "song_src": "songs/Rabindrasangeet___Nishitho_Raater___Somlata_Acharyya_Chowdhury___Somlata_And_The_Aces.mp3",
      "img_src": "song_image/amar_nishit.jpg",
      "duration": "03:34"
    }
  },
  "fakira band songs": {
    "HARA KRISHNA": {
      "song_src": "songs/HARE_KRISHNA.mp3",
      "img_src": "song_image/hara_krishna.jpeg",
      "duration": "03:34"
    },
    "Rai jago go": {
      "song_src": "songs/RAAI_JAGO___FAKIRA___PRABHATI_SONG___Album_-_HARE_KRISHNA___BENGALI_FOLK__2022.mp3",
      "img_src": "song_image/raai_jago.jpg",
      "duration": "03:34"
    },
    "Geet Gobindo": {
      "song_src": "songs/Geet_Gobindo.mp3",
      "img_src": "song_image/mone.jpg",
      "duration": "03:34"
    }
  }
}
```

## Demo

Try out the live demo of the music player here: [Live Demo](https://kuntal-hub.github.io/spotify_clone/)
