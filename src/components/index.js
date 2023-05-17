import {useState} from 'react';


export const Navigation = () => {
    return (
        <div
            data-collapse="medium"
            data-animation="default"
            data-duration="400"
            data-easing="ease"
            data-easing2="ease"
            role="banner"
            class="navbar w-nav"
            >
            <div class="container navbar-container w-container">
                <div class="nav-column left">
                    <a
                        href="/"
                        aria-current="page"
                        class="w-nav-brand w--current"
                        aria-label="home"
                        >
                            <h1 class="logo-head">Work<span class="logo">Star</span></h1>
                    </a>
                </div>

                <nav role="navigation" class="nav-menu w-nav-menu">
                    <a href="/" class="nav-link w-nav-link" style={{maxWidth: "1200px"}}> Home </a>
                    <a href="/#about-us" class="nav-link w-nav-link" style={{maxWidth: "1200px"}}> About Us </a>
                    <a href="/contact-us" class="nav-link w-nav-link" style={{maxWidth: "1200px"}}> Contact Us </a>
                    <a href="/work-for-us" class="nav-link w-nav-link" style={{maxWidth: "1200px"}}> Work for us! </a>
                </nav>
            
                <div class="menu-button w-nav-button" style={{"-webkit-user-select": "text"}}
                    aria-label="menu" role="button" tabindex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false"
                >
                    <div class="w-icon-nav-menu"></div>
                </div>

                <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
            </div>

            {/* <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div> */}
        </div>
    )
}


export const Footer = ({}) => {
    return(
        <footer id="footer" class="footer dark wf-section">
        <div class="container w-container">
          <div class="footer-flex-container flex">
            <div
              data-w-id="b87708be-27ea-57cf-161e-b5863cd3be2d"
              class="footer-column-info big image"
              style={{
                opacity: "1",
                transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) \
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d"
              }}
            ></div>
            
            <div class="footer-column-div">
              <h2 class="footer-heading">Company</h2>
              <ul role="list" class="w-list-unstyled">
                <li>
                  <a href="/#about-us" class="white-footer-link"
                    >About us</a
                  >
                </li>
  
                <li>
                  <a href="/contact-us" class="white-footer-link"
                    >Contact us</a
                  >
                </li>
  
                <li>
                  <a href="/faqs" class="white-footer-link"
                    >F.A.Q. page</a
                  >
                </li>
  
                <li>
                  <a href="/privacy-policy" class="white-footer-link"
                    >Privacy policy</a
                  >
                </li>
              </ul>
            </div>
          </div>
  
          <div class="footer-copyright color">
            <div class="footer-bottom-text">
              © Copyright 2023
              <a href="/" target="_same"
                ><strong class="white-footer-link bottom">WorkStar</strong></a
              >
            </div>
          </div>
          
        </div>
      </footer>
    )
}