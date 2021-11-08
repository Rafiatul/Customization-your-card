//seting up logo
const uploadBtn = document.querySelector('#upload');
const logo = document.querySelector('.logo');
const logoSe = document.querySelector('.logo-se')

uploadBtn.addEventListener('change', ()=>{
    if(uploadBtn.files && uploadBtn.files[0]){
        let reader = new FileReader(); //init the file

        reader.addEventListener('load', () => {

            logo.style.backgroundImage = `url('${reader.result}')`;
            logoSe.style.backgroundImage = `url('${reader.result}')`;

        })

        reader.readAsDataURL(uploadBtn.files[0]);
    }
})

//changing the background

const bgs = document.querySelectorAll('.backgrounds img');

const card = document.querySelector('.card');
const cardSE = document.querySelector('.card-se')

let activeBg = 0;

bgs.forEach((item, i ) => {
    item.addEventListener('click', () =>{
        bgs[activeBg].classList.remove('active');
        item.classList.add('active');
        card.style.backgroundImage = `url('${item.src}')`;
        cardSE.style.backgroundImage = `url('${item.src}')`;
        activeBg = i ;
    })
}) 

//download secton start

let downloadBtn = document.querySelector('.download-btn');

let exportCard = () => {
    html2canvas(card)
    .then(canvas => {
        let link = document.getElementById('link');
        link.href = canvas.toDataURL();
        link.click();
    })
    html2canvas(cardSE)
    .then(canvas => {
        let link = document.getElementById('link');
        link.href = canvas.toDataURL();
        link.click();
    })
}

downloadBtn.addEventListener('click', () => {
    exportCard();
})




        // for-clor-start ------------------

        $('.text-color .gold-c').click(function(){
            $('.name, .email, .phn-number, .adress').addClass('gold-clr'); 
            $('.name, .email, .phn-number, .adress').removeClass('silver-clr'); 
            $('.name, .email, .phn-number, .adress').removeClass('black-clr'); 
            $('.name, .email, .phn-number, .adress').removeClass('brass-clr'); 
            $('.name, .email, .phn-number, .adress').removeClass('stainless-clr'); 
        });

        $('.text-color .silver-c').click(function(){
            $('.name, .email, .phn-number, .adress').removeClass('gold-clr'); 
            $('.name, .email, .phn-number, .adress').addClass('silver-clr'); 
            $('.name, .email, .phn-number, .adress').removeClass('black-clr'); 
            $('.name, .email, .phn-number, .adress').removeClass('brass-clr'); 
            $('.name, .email, .phn-number, .adress').removeClass('stainless-clr'); 
        });

        $('.text-color .black-c').click(function(){
            $('.name, .email, .phn-number, .adress').removeClass('gold-clr'); 
            $('.name, .email, .phn-number, .adress').removeClass('silver-clr'); 
            $('.name, .email, .phn-number, .adress').addClass('black-clr'); 
            $('.name, .email, .phn-number, .adress').removeClass('brass-clr'); 
            $('.name, .email, .phn-number, .adress').removeClass('stainless-clr'); 
        });

        $('.text-color .brass-c').click(function(){
            $('.name, .email, .phn-number, .adress').removeClass('gold-clr'); 
            $('.name, .email, .phn-number, .adress').removeClass('silver-clr'); 
            $('.name, .email, .phn-number, .adress').removeClass('black-clr'); 
            $('.name, .email, .phn-number, .adress').addClass('brass-clr'); 
            $('.name, .email, .phn-number, .adress').removeClass('stainless-clr'); 
        });

        $('.text-color .stainless-c').click(function(){
            $('.name, .email, .phn-number, .adress').removeClass('gold-clr'); 
            $('.name, .email, .phn-number, .adress').removeClass('silver-clr'); 
            $('.name, .email, .phn-number, .adress').removeClass('black-clr'); 
            $('.name, .email, .phn-number, .adress').removeClass('brass-clr'); 
            $('.name, .email, .phn-number, .adress').addClass('stainless-clr'); 
        });





        // for-field -----------

        $('.your-name').click(function(){
            $('.card .name').show(); 
            $('.single-input-1 i').show(); 
            
        });

        $('.your-email').click(function(){
            $('.card .email').show(); 
            $('.single-input-2 i').show(); 
        });

        $('.your-number').click(function(){
            $('.card .phn-number').show(); 
            $('.single-input-3 i').show(); 
        });

        $('.your-address').click(function(){
            $('.card .adress').show(); 
            $('.single-input-4 i').show(); 
        });




  

        // for-icon ----------

        $('.single-input-1 i').click(function(){
            $('.card .name').hide(); 
            $('.single-input-1 i').hide(); 
            
        });

        $('.single-input-2 i').click(function(){
            $('.card .email').hide(); 
            $('.single-input-2 i').hide(); 
        });

        $('.single-input-3 i').click(function(){
            $('.card .phn-number').hide(); 
            $('.single-input-3 i').hide(); 
        });

        $('.single-input-4 i').click(function(){
            $('.card .adress').hide(); 
            $('.single-input-4 i').hide(); 
        });


        
        // for-download -----------------
        $('.done-btn p').click(function(){
            $('.single-input i').hide();
        });

        $('.done-btn p').click(function(){
            $('.extra-btn').show();
            $('.done-btn').hide(); 
        });


