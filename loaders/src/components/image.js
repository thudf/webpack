class Image {
  constructor(imagem) {
    this.source = imagem;
  }

  insertBanner() {
    const img = document.createElement('img');

    img.src= this.source;
    img.width = 200;

    document.querySelector('body').appendChild(img);
  }

}

export default Image;