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
)
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
