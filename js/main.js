(() => {
    
  let sigils = document.querySelectorAll('.teamContainer'),    
      bannersImages = document.querySelector('#teamImages'),
      mo_bannersImages = document.querySelector('#mo_teamImages'),
      productBtn1 = document.querySelector('.product-btn1'),
      productBtn2 = document.querySelector('.product-btn2'),
      productBtn3 = document.querySelector('.product-btn3'),
      productBoxes = document.querySelectorAll('.info'),
      closeBut1 = document.querySelector('.close1'),
      closeBut2 = document.querySelector('.close2'),
      closeBut3 = document.querySelector('.close3');
  

  const productData = [
    [`<div class="product">
    <p><span class="pdt_title">Dr. Nut LEMON</span><br>
          <br>
          <span class="sm_title">Brewed</span> <br>
          In the United States <br>
          <br>
          <span class="sm_title">Ingredients</span> <br>
          Almond, Lemon, Sugar, Barleycorn, yeast, and water<br>
          <br>
          <span class="sm_title">Volume</span><br>
          355ml
        </p>              
    </div>`],
  
      [`<div class="product">
        <p><span class="pdt_title">Dr. Nut ORIGINAL</span><br>
          <br>
          <span class="sm_title">Brewed</span> <br>
          In the United States <br>
          <br>
          <span class="sm_title">Ingredients</span> <br>
          Almond, Sugar, Barleycorn, yeast, and water<br>
          <br>
          <span class="sm_title">Volume</span><br>
          355ml
          </p> 
      
        </div>`],
  
      [`<div class="product">
        <p><span class="pdt_title">Dr. Nut STRAWBERRY</span><br>
          <br>
          <span class="sm_title">Brewed</span> <br>
          In the United States <br>
          <br>
          <span class="sm_title">Ingredients</span> <br>
          Almond, Strawberry, Sugar, Barleycorn, yeast, and water<br>
          <br>
          <span class="sm_title">Volume</span><br>
          355ml
        </p> 
  
        </div>`]
  ]

  function showProductInfo() {
    let currentProduct = this.dataset.offset;
    productBoxes[this.dataset.offset].innerHTML = productData[this.dataset.offset][0];
    productBoxes[this.dataset.offset].classList.remove('hidden');

    closeBut1.classList.remove('hidden');
    closeBut2.classList.remove('hidden');
    closeBut3.classList.remove('hidden');
  }


  function closelightbox() {
    this.parentNode.classList.add('hidden');
    
    closeBut1.classList.add('hidden');
    closeBut2.classList.add('hidden');
    closeBut3.classList.add('hidden');
  }
  
  function showTeamData() {

      let animationTotal = 1500 * this.dataset.offset;
  
      bannersImages.style.right = `${animationTotal}px`;
  
      console.log('move the banner images', animationTotal);
  }


  function mo_showTeamData() {

    let mo_animationTotal = 480 * this.dataset.offset;
        
    mo_bannersImages.style.right = `${mo_animationTotal}px`;

    console.log('move the banner images', mo_animationTotal);
}
  
    
  
 
  sigils.forEach(sigil => sigil.addEventListener('click', showTeamData));
  sigils.forEach(sigil => sigil.addEventListener('click', mo_showTeamData));

  productBtn1.addEventListener('click', showProductInfo);
  productBtn2.addEventListener('click', showProductInfo);
  productBtn3.addEventListener('click', showProductInfo);
  
  closeBut1.addEventListener('click', closelightbox);
  closeBut2.addEventListener('click', closelightbox);
  closeBut3.addEventListener('click', closelightbox);
  
  })();
  