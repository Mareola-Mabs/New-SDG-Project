/*Using Pure Javascript to Make The Intersection Observer*/
const brands_that = document.querySelectorAll('.brands_that')

const observer = new IntersectionObserver(
    entries =>{
        entries.forEach(
            entry =>{
                entry.target.classList.toggle("move", entry.isIntersecting)
                if (entry.isIntersecting){
                    observer.unobserve(entry.target)
                }
                
            }
        )
    }
)

brands_that.forEach(
    sliders =>{
        observer.observe(sliders)
    }
);

const about_link = document.querySelectorAll('.about__link')
about_link.forEach(item=>item.addEventListener('click',()=>{
    brands_that.forEach(item=>{
        item.classList.add("move")
        item.style.transition="0s"
        
    })
}));



// about.forEach(
//     abouts =>{
//         observer.observe(abouts)
//     }
// )

// observer.observe(brands_that)
// observer.observe(slider__link)
// observer.observe(counter)
// observer.observe(sales)
/*End of Intrsection Observer*/
