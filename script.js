/*this code is very complex and slow becuse i feath a single json file 4 times this is not optimum way 
i can pass the json data as an argument but instede of doing this i featch da sme file 3 times this cause meny errors,
and it slow this website ,
and also make it very complex
*/

//let dt1;
//let dt2;
//let array=[];
fetch('text.json').then((responce) => {
  return responce.json()
}).then(data => {
  const song_data = data;
  let k = 0;
  for (const i in song_data) {
    let div = document.createElement("div");
    div.classList.add("container");
    div.classList.add("flx");
    div.innerHTML = `<p>${i}<button onclick="flex(this)">See More</button> </p>`;
    for (const j in song_data[i]) {



      div.innerHTML += `<button class="song_btn" onclick="play_song(this)"><div class="hidden"><span>${i}</span><span>${j}</span></div><img src="${song_data[i][j].img_src}" alt="img" class="song_img"><br>${j}</button>`


    }
    document.getElementById("content_body").appendChild(div);
  }
  dt1 = document.getElementById("content_body").innerHTML;
  //print(song_data);
})


function flex(list) {
  list.parentElement.parentElement.classList.toggle("flx");
  if (list.innerHTML == "See More") {
    list.innerHTML = "See Less"
  } else {
    list.innerHTML = "See More"
  }
}

function play_song(element) {
  try {
    fetch('text.json').then((responce) => {
      return responce.json()
    }).then(data => {
      const song_data = data;
      let a = element.firstElementChild;
      let b = a.firstElementChild.innerHTML;
      let c = a.lastElementChild.innerHTML;
      let x = document.getElementById("content_body");
      //array=[];
      document.getElementById("audio_box").style.visibility = "visible";
      x.innerHTML = "";
      let cp = document.createElement("div");
      let y = document.createElement("div");
      let z = document.createElement("p");
      y.setAttribute("id", "playlist");
      z.setAttribute("id", "hidden_list");
      cp.setAttribute("id", "top");
      y.innerHTML += `<p class="pt">${b}</p>`;
      cp.innerHTML = `<img src="${song_data[b][c].img_src}" alt="img" id="c-p-s"><span id="current_playing"></span><p><span id="cd"></span><input type="range" name="range" id="range"><span id="td"></span></p><p><span class="material-symbols-outlined" id="left" title="Replay" onclick="chenge(this)">
    replay
    </span><b><span class="material-symbols-outlined pointer" onclick="play_priv()">
    skip_previous
    </span>&nbsp; &nbsp;&nbsp; <span class="material-symbols-outlined pointer" id="play_symbol1" onclick="play_pause()">
        pause_circle
        </span>&nbsp; &nbsp;&nbsp; <span class="material-symbols-outlined pointer" onclick="play_next()">
            skip_next
            </span></b></p>`;
      for (const i in song_data[b]) {
        z.innerHTML += `<i>${song_data[b][i].song_src}</i>`;
        //array.push(song_data[b][i].song_src);
        if (i == c) {
          y.innerHTML += `<button onclick="play(null,this)" class="pb"><sub>${b}</sub><span>${i}</span><img src="song_image/playing.gif" alt="" style="display: inline;"><span class="duration">${song_data[b][i].duration}</span><sub>${i}</sub></button><br>`
        } else {
          y.innerHTML += `<button onclick="play(null,this)" class="pb"><sub>${b}</sub><span>${i}</span><img src="song_image/playing.gif" alt=""><span class="duration">${song_data[b][i].duration}</span><sub>${i}</sub></button><br>`
        }
      }
      y.innerHTML += `<p id="space"></p>`
      x.appendChild(y);
      x.prepend(cp);
      x.appendChild(z);


      document.getElementById("current_playin_song").innerHTML = c;
      document.getElementById("current_playing").innerHTML = document.getElementById("current_playin_song").innerHTML;
      play(song_data[b][c].song_src, null);
      let myProgressBar = document.getElementById('range');
      let audioElement = document.getElementById("audio");

      audioElement.ontimeupdate = () => {
        let a = Math.round(audioElement.currentTime);
        let td = Math.floor(audioElement.duration);
        let b, c;
        let bb, cc;
        b = Math.floor(a / 60);
        c = a - (b * 60);
        bb = Math.floor(td / 60);
        cc = td - (bb * 60);

        document.getElementById("td").innerHTML = `${bb}:${cc}`;
        document.getElementById("cd").innerHTML = `${b}:${c}`;
      }

      audioElement.addEventListener('timeupdate', () => {
        // Update Seekbar
        let d = document.getElementById("left");
        let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        myProgressBar.value = progress;
        if (progress == 100) {
          if (d.innerHTML == "repeat") {
            play_next();
          } else {
            audioElement.play();
          }
        }
      })

      myProgressBar.addEventListener('change', () => {
        audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
      })


      //console.log(dt1);






    })
  } catch (error) {

  }
  //dt2 = document.getElementById("content_body").innerHTML;
}

function play(srcs, element) {

  let x = document.getElementById("audio");
  let p = document.getElementById("current_playin_song");
  let q = document.getElementById("current_playing");
  let cps = document.getElementById("c-p-s")
  x.pause();
  if (srcs == null && element != null) {
    fetch('text.json').then((responce) => {
      return responce.json()
    }).then(data => {
      const song_data = data;
      //let a=element.firstElementChild;
      let b = element.firstElementChild.innerHTML;
      let c = element.lastElementChild.innerHTML;
      p.innerHTML = `${c}`;
      q.innerHTML = `${c}`;
      cps.src = song_data[b][c].img_src;
      let collection = element.children;
      const nodeList = document.querySelectorAll(".pb");
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].children[2].style.display = "none";
      }


      collection[2].style.display = "inline";

      x.src = song_data[b][c].song_src;

      x.play();
    })
  } else {

    x.src = srcs;

    x.play();
  }
}

function play_priv() {
  let a = document.getElementById("hidden_list").children;
  //const collection = document.body.children;
  let x = document.getElementById("audio").getAttribute("src");
  let p = document.getElementById("current_playin_song");
  let q = document.getElementById("current_playing");
  let cps = document.getElementById("c-p-s");
  //let y = toString(x.src)
  const nodeList = document.querySelectorAll(".pb");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].children[2].style.display = "none";
  }
  let j = [];
  let l = 0;
  for (let i = 0; i < a.length; i++) {
    j[i] = `${a[i].textContent}`;
  }
  for (let k = 0; k < j.length; k++) {
    if (j[k] == `${x}`) {
      l = k;
      break;
    }
  }
  if (l == 0) {
    l = j.length - 1;
    nodeList[l].children[2].style.display = "inline";
    p.innerHTML = nodeList[l].children[1].innerHTML;
    q.innerHTML = p.innerHTML;
    cps.src = "song_image/Up2T (1).gif";
    play(j[l], null)
  } else {
    l = l - 1;
    nodeList[l].children[2].style.display = "inline";
    p.innerHTML = nodeList[l].children[1].innerHTML;
    q.innerHTML = p.innerHTML;
    cps.src = "song_image/Up2T (1).gif";
    play(j[l], null);

  }

  //console.log(`${x}`)
}


function play_next() {
  let a = document.getElementById("hidden_list").children;
  //const collection = document.body.children;
  let x = document.getElementById("audio").getAttribute("src");
  let cps = document.getElementById("c-p-s");
  //let y = toString(x.src)
  let p = document.getElementById("current_playin_song");
  let q = document.getElementById("current_playing");
  const nodeList = document.querySelectorAll(".pb");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].children[2].style.display = "none";
  }
  let j = [];
  let l = 0;
  for (let i = 0; i < a.length; i++) {
    j[i] = `${a[i].textContent}`;
  }
  for (let k = 0; k < j.length; k++) {
    if (j[k] == `${x}`) {
      l = k;
      break;
    }
  }
  if (l == j.length - 1) {
    l = 0;
    nodeList[l].children[2].style.display = "inline";
    p.innerHTML = nodeList[l].children[1].innerHTML;
    q.innerHTML = p.innerHTML;
    cps.src = "song_image/Up2T (1).gif";
    play(j[l], null)
  } else {
    l = l + 1;
    nodeList[l].children[2].style.display = "inline";
    p.innerHTML = nodeList[l].children[1].innerHTML;
    q.innerHTML = p.innerHTML;
    cps.src = "song_image/Up2T (1).gif";
    play(j[l], null);

  }

  //console.log(`${x}`)
}

function chenge(params) {
  if (params.innerHTML == "replay") {
    params.innerHTML = "repeat";
    params.setAttribute("title", "repeat")
  } else {
    params.innerHTML = "replay";
  }
}

function sleep(element) {
  let time = Number.parseInt(prompt("Enter Time In Minitus To Set Timer !"));
  let x;
  let y = document.getElementById("play_symbol");
  let z = document.getElementById("play_symbol1");
  let a = 0, b, c;
  if (time == NaN || time <= 0) {
    alert("Invalid Value !")
  } else {
    x = setInterval(() => {
      b = Math.floor(a / 60);
      c = a - (b * 60);
      element.innerHTML = `${b} : ${c}`;
      a++;
    }, 1000);
    setTimeout(() => {
      document.getElementById("audio").pause();
      clearInterval(x);
      element.innerHTML = "Add Sleep Timer";
      y.innerHTML = "play_circle";
      z.innerHTML = "play_circle";
    }, time * 60 * 1000);
  }

}


function search(val) {
  //console.log(val);
  //document.getElementById("audio").pause();
  document.getElementById("content_body").innerHTML = "";

  fetch('text.json').then((responce) => {
    return responce.json()
  }).then(data => {
    const song_data = data;
    let div = document.createElement("div");
    div.classList.add("container");
    div.classList.add("flx");

    //let value=val.toUpperCase();
    for (const i in song_data) {
      if (i.toUpperCase().indexOf(val.toUpperCase()) > -1) {

        div.innerHTML = `<p>${i}<button onclick="flex(this)">See More</button> </p>`;
        for (const j in song_data[i]) {
          div.innerHTML += `<button class="song_btn" onclick="play_song(this)"><div class="hidden"><span>${i}</span><span>${j}</span></div><img src="${song_data[i][j].img_src}" alt="img" class="song_img"><br>${j}</button>`
        }
        document.getElementById("content_body").appendChild(div);
        return;
      }
    }
    div.innerHTML = `<p>Item Found!<button onclick="flex(this)">See More</button> </p>`;
    for (const i in song_data) {
      for (const j in song_data[i]) {
        if (j.toUpperCase().indexOf(val.toUpperCase()) > -1) {
          div.innerHTML += `<button class="song_btn" onclick="play_song(this)"><div class="hidden"><span>${i}</span><span>${j}</span></div><img src="${song_data[i][j].img_src}" alt="img" class="song_img"><br>${j}</button>`

        } else {
          //div.innerHTML+="<h1>Not Found !</h1>"
        }
      }
    }
    document.getElementById("content_body").appendChild(div);

  })
}



// function print(params) {
//   for (const i in params) {
//    console.log(i);
//   }
// }