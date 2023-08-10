// change navbar state on scroll
const navbarEl = document.querySelector("#navbar");

// change navbar backgroud color and add shadow if windows scrollY is greater than 60
// show scroll_to_top_btn
const scrollTopBtn = document.querySelector(".scroll_top_btn");
window.onscroll = () => {
  if (window.scrollY >= 10) {
    navbarEl.classList.add("shadow-sm");
    scrollTopBtn.classList.add("show_btn")
  } else {
    navbarEl.classList.remove("shadow-sm");
    scrollTopBtn.classList.remove("show_btn")
  }
}

// diplay services in browser
const ourServices = [
  {
    icon: "fa-newspaper",
    title: "Web Development",
    detail: "Mauris quis sem erat. Sed pulvinar, lectus in ultricies elementum."
  },
  {
    icon: "fa-mobile-phone",
    title: "App Development",
    detail: "Mauris quis sem erat. Sed pulvinar, lectus in ultricies elementum."
  },
  {
    icon: "fa-file",
    title: "Online Booking",
    detail: "Mauris quis sem erat. Sed pulvinar, lectus in ultricies elementum."
  },
  {
    icon: "fa-shopping-cart",
    title: "eCommerce Sevices",
    detail: "Mauris quis sem erat. Sed pulvinar, lectus in ultricies elementum."
  },
  {
    icon: "fa-shield",
    title: "Network Support",
    detail: "Mauris quis sem erat. Sed pulvinar, lectus in ultricies elementum."
  },
  {
    icon: "fa-cloud",
    title: "Cloud Solutions",
    detail: "Mauris quis sem erat. Sed pulvinar, lectus in ultricies elementum."
  }
]

const servicesEl = document.querySelector('#services');

// loop through ourServices array and display on the browser
ourServices.forEach((service) => {
  const { icon, title, detail } = service
  servicesEl.innerHTML += `
    <div class="col-lg-4 col-md-6 mb-3">
      <div class="bg-light p-5 rounded-3 services_card">
        <h2 class="text_success">
          <i class="fas ${icon}"></i>
        </h2>
        <h4 class="text_dark">
          ${title}
        </h4>
        <p class="mt-3 text-muted small">
          ${detail}
        </p>
      </div>
    </div>
  `;
})

// display blog posts array in browser
const blogPosts = [
  {
    imgUrl: "blog-1.jpg",
    postTitle: "Writing down your ideas in a note.",
    postText: "Mauris quis sem erat. Sed pulvinar, lectus in ultricies elementum.",
    adminName: "Admin"
  },
  {
    imgUrl: "blog-2.jpg",
    postTitle: "Writing down your ideas in a note.",
    postText: "Mauris quis sem erat. Sed pulvinar, lectus in ultricies elementum.",
    adminName: "Admin"
  },
  {
    imgUrl: "blog-3.jpg",
    postTitle: "Writing down your ideas in a note.",
    postText: "Mauris quis sem erat. Sed pulvinar, lectus in ultricies elementum.",
    adminName: "Admin"
  }
];

const blogPostEl = document.querySelector('#blogPosts');

blogPosts.forEach((posts) => {
  const { imgUrl, postTitle, postText, adminName } = posts;
  blogPostEl.innerHTML += `
    <div class="col-lg-4 col-md-6 mb-md-3">
      <a href="#" class="text-decoration-none blog_post">
        <div class="blog_img_container">
          <img src="./assets/images/${imgUrl}" width="100%" alt="blog image" class="rounded-3" />
        </div>
        <div class="mt-2">
          <div class="d-flex">
            <div class="me-auto">
              <div class="text-muted small">
                ${adminName}
              </div>
            </div>
            <div class="text-muted small">
              <i class="far fa-clock me-2"></i> 8 mins
            </div>
          </div>
          <div class="mt-2">
            <h5 class="text_dark">
              ${postTitle}
            </h5>
            <div class="text-muted small">
              ${postText}
            </div>
          </div>
        </div>
      </a>
    </div>
  `;
});

// update date according to lates date
const date = new Date();
const year = date.getFullYear();
const dateUpdate = document.querySelector('#dateUpdate');

dateUpdate.innerHTML = year;

// reviews slider function
const reviewsWrap = document.querySelector('.reviews_wrapper');
const reviews = document.querySelectorAll('.reveiws');
let totalSlides = reviews.length;
reviewsWrap.style.width = `${totalSlides}00vw`;
let slideIndex = 0;
setInterval(() => {
  slideIndex = slideIndex % totalSlides;
  reviewsWrap.style.transform = `translateX(-${slideIndex}00vw)`;
  slideIndex++;
}, 9000);