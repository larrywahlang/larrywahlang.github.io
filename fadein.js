
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector('.animated').classList.add('fadein-left')
        }
    })
},{
    rootMargin:'-150px'
})
observer.observe(document.querySelector('.projects'))


const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector('.what-i-do').classList.add('fadein-left')
        }
    })
},{
    rootMargin:'-150px'
})

observer3.observe(document.querySelector('.what-i-do'))

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector('.carousel').classList.add('fadein-bottom')
        }
    })
},{
    rootMargin:'-200px'
})

observer2.observe(document.querySelector('.carousel'))

const observer4 = new IntersectionObserver(entries => {

    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector('.skill1').classList.add('fadein-bottom')
            document.querySelector('.skill2').classList.add('fadein-bottom2')
        }
    })
},{
    rootMargin:'-150px'
})

observer4.observe(document.querySelector('.skill'))

const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector('.contact').classList.add('fadein-left')
        }
    })
},{
    rootMargin:'-150px'
})

observer5.observe(document.querySelector('.contact_me'))


const observer6 = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector('.form-name').classList.add('fadein-bottom')
        }
    })
},{
    rootMargin:'-150px'
})

observer6.observe(document.querySelector('.form'))

// const observer7 = new IntersectionObserver(entries => {
//     entries.forEach(entry =>{
//         if(entry.isIntersecting){
//             document.querySelector('.form-company').classList.add('fadein-bottom')
       
//         }
//     })
// },{
//     rootMargin:'-150px'
// })

// observer7.observe(document.querySelector('.form-company'))

const observer8 = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector('.form-email').classList.add('fadein-bottom')
       
        }
    })
},{
    rootMargin:'-150px'
})

observer8.observe(document.querySelector('.form-email'))

const observer9 = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector('.form-phone').classList.add('fadein-bottom')
       
        }
    })
},{
    rootMargin:'-150px'
})

observer9.observe(document.querySelector('.form-phone'))

const observer10 = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector('.form-website').classList.add('fadein-bottom')
       
        }
    })
},{
    rootMargin:'-150px'
})

observer10.observe(document.querySelector('.form-website'))

const observer11 = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector('.form-project').classList.add('fadein-bottom')
       
        }
    })
},{
    rootMargin:'-150px'
})

observer11.observe(document.querySelector('.form-project'))

const observer12 = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector('.btn-submit').classList.add('fadein-bottom')
       
        }
    })
},{
    rootMargin:'-150px'
})

observer12.observe(document.querySelector('.btn-submit'))

const observer13= new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector('.mobile-slide1').classList.add('fadein-bottom')
       
        }
    })
},{
    rootMargin:'-180px'
})

observer13.observe(document.querySelector('.mobile-slide1'))

const observer14= new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector('.mobile-slide2').classList.add('fadein-bottom')
       
        }
    })
},{
    rootMargin:'-180px'
})

observer14.observe(document.querySelector('.mobile-slide2'))

const observer15= new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector('.mobile-slide3').classList.add('fadein-bottom')
       
        }
    })
},{
    rootMargin:'-180px'
})

observer15.observe(document.querySelector('.mobile-slide3'))




