
const _ = e => document.querySelector(e);

const render = _('.result');

// create video

const createVideo = data => {

  let v = document.createElement('video');

  v.id = "instavideo";

  v.src = data.content; 

  v.controls = true;

  v.autoplay = true;

  

   const setlink =document.querySelector('#setlink').href=data.content;

  // create info

  //let info = document.createElement('p');

 // info.textContent = "Click the right button on video and select save as.";

 

  render.innerHTML = ""; 

  render.appendChild(v);

  render.appendChild(info);

};

// create image

const createImg = data => {

  // create image

  let i = document.createElement('img');

  i.id = "instaImg";

  i.src = data.content;

 const setlink =document.querySelector('#setlink').href=data.content;

  // create info

  //let info = document.createElement('p');

//  info.textContent = "Click the right button on the image and select save image..";

 

  render.innerHTML = ""; 

  render.appendChild(i); 	  render.appendChild(info); 

 

};

 

// extract html

const getMedia = () => {

  render.innerHTML = "<div class='image-placeholder'></div>";

  // get input value

  let url = _('input').value;

  if (url) {

    fetch(url).

    then(r => r.text()).

    then(r => {

      // render html

      render.innerHTML = r;

      // wait, find meta and create video or image

      let w = setTimeout(() => {

        let v = _('meta[property="og:video"]');

        if (v) {

          createVideo(v);

        } else {

          let img = _('meta[property="og:image"]');

          if (img) {

            createImg(img);

          } else {

            document.body.innerHTML = body;

            alert('Error extracting Instagram image / video.');

          };

        }

        clearTimeout(w);

      }, 200);

    });

  } else {

    _('input').setAttribute('placeholder', 'Invalid address, use a proper Insagram link');

 

  }

  document.getElementById('rs-show').style.display="block";

  document.getElementById('rset1').style.display="none";

  document.getElementById('rset').style.display="";

};
