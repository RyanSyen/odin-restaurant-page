
var getCurrentYear = () => {
    const d = new Date();
    let year = d.getFullYear();
    return year;
}

const generateHome = (() => {
    console.log('generate home')
    const body = document.getElementById('content');
    // ---------- header ----------
    const header = document.createElement('header');

    // ---------- header_nav ----------
    const generate_header_nav = () => {
        const nav = document.createElement('nav');
        // ###
        const nav_h2 = document.createElement('h2');
        const nav_h2_a = document.createElement('a');
        nav_h2_a.setAttribute('id', 'logo');
        nav_h2_a.innerText = 'rosa';
        nav_h2_a.style.cursor = 'default';
        nav_h2.appendChild(nav_h2_a);
        // ###
        const nav_btn = document.createElement('button');
        nav_btn.classList.add('nav-button', 'fa', 'fa-bars');
        // ###
        const nav_div = document.createElement('div');
        const nav_div_ul = document.createElement('ul');
        const nav_div_ul_btn = document.createElement('button');
        nav_div_ul_btn.classList.add('exit-menu', 'fa', 'fa-times');
        nav_div_ul.appendChild(nav_div_ul_btn);
        const navBar = ['welcome', 'menu', 'reservations', 'contact'];
        for (const el of navBar) {
            var nav_div_ul_li = document.createElement('li');
            const nav_div_ul_li_a = document.createElement('a');
            nav_div_ul_li_a.innerText = el;
            nav_div_ul_li_a.setAttribute('id', el);
            nav_div_ul_li_a.style.cursor = 'pointer';
            // nav_div_ul_li_a.onmouseleave = (e) => {
            //     nav_div_ul_li_a.style.pointer = 'cursor';
            //     console.log(e)
            // }
            if (navBar[0] === el) nav_div_ul_li_a.classList.add('active');
            nav_div_ul_li.appendChild(nav_div_ul_li_a);
            nav_div_ul.appendChild(nav_div_ul_li);
        }
        nav_div.appendChild(nav_div_ul);
        // append h2, button, div to nav
        nav.append(nav_h2, nav_btn, nav_div);
        return nav;
    }

    // ---------- header_div ----------
    const generate_header_div = () => {
        var header_Div = document.createElement('div');
        header_Div.classList.add('center');
        // ### 
        header_Div.innerHTML = `
            <h1 class="alex-brush">Welcome</h1>
            <h2>the rosa</h2>
            <span id="asterisk">*</span>
            <p>ready to be opened</p>
        `
        return header_Div;
    }

    // ---------- section1 ----------
    const generate_section1 = () => {
        const section1 = document.createElement('section');
        section1.classList.add('add-padding', 'add-flex');
        section1.innerHTML = `
            <div class="center-text">
                <h1 class="alex-brush"><span class="custom-font">Discover</span><br />OUR STORY</h1>
                <h2>*</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit aspernatur beatae laboriosam dicta
                    tempora ab, dolorem mollitia perspiciatis, deleniti quidem dolor repellat animi. Quidem eligendi iste
                    distinctio fugit maxime modi. Lorem ipsum dolor sit amet.</p>
                <a href="#">about us</a>
            </div>
            <div class="stuffed-cherries" data-aos="fade-left" data-aos-delay="300">
            </div>
        `
        return section1;
    }


    // ---------- section2 ----------
    const generate_section2 = () => {
        const section2 = document.createElement('section');
        section2.classList.add('bread-background', 'center-h1');
        section2.innerHTML = `
        <h1 class="custom-h1 alex-brush"><span class="custom-font">Tasteful</span><br />RECIPES</h1>
        `
        return section2;
    }

    // ---------- section3 ----------
    const generate_section3 = () => {
        const section3 = document.createElement('section');
        section3.classList.add('menu', 'add-flex', 'add-padding');
        section3.innerHTML = `
        <div class="menu-images">
                    <img src="http://www.konoba-mirakul.com/wp-content/uploads/2015/03/delikatesa4.jpg" data-aos="fade-down"
                        data-aos-delay="300" />
                    <img src="http://www.konoba-mirakul.com/wp-content/uploads/2015/03/delikatesa21.jpg"
                        data-aos="fade-left" data-aos-delay="300" />
                    <img src="https://www.gourmetsociety.co.uk/uploads/images/restaurants/093ce538894c95892f62dc93bb023636-image.png"
                        data-aos="fade-right" data-aos-delay="300" />
                    <img src="http://retrokitchenbar.com/wp-content/uploads/2014/05/menu-thumb-4-300x218.jpg"
                        data-aos="fade-up" data-aos-delay="300" />
                </div>
                <div class="center-text">
                    <h1><span class="custom-font alex-brush">Discover</span><br />MENU</h1>
                    <h2>*</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae distinctio possimus tempore
                        voluptatem, quo repellendus quas culpa quasi, hic optio sapiente molestias necessitatibus, aliquam
                        excepturi consequatur a voluptates quam beatae!</p>
                    <a href="#">view the full menu</a>
                </div>
        `
        return section3;
    }

    // ---------- section4 ----------
    const generate_section4 = () => {
        const section4 = document.createElement('section');
        section4.classList.add('cake-background', 'center-h1');
        section4.innerHTML = `
            <h1 class="custom-h1"><span class="custom-font alex-brush">The perfect</span><br />BLEND</h1>
        `
        return section4;
    }

    // ---------- section5 ----------
    const generate_section5 = () => {
        const section5 = document.createElement('section');
        section5.classList.add('add-flex', 'reservation-section');
        section5.innerHTML = `
            <div class="center-text add-padding">
                <h1><span class="custom-font alex-brush">Culinary</span><br />DELIGHT</h1>
                <h2>*</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animi odit in dignissimos neque
                    ratione,
                    laboriosam rerum! Deleniti accusamus non, aliquam tempora, mollitia laborum ad, fugiat at explicabo
                    esse
                    aut. Lorem ipsum dolor sit amet, adipisicing elit.</p>
                <a href="#">make a reservation</a>
            </div>
            <div>
                <img src="http://www.konoba-mirakul.com/wp-content/uploads/2015/03/kulinarstvo11.jpg" data-aos="fade-up"
                    data-aos-delay="300" />
                <img src="http://www.konoba-mirakul.com/wp-content/uploads/2015/03/kulinarstvo21.jpg"
                    data-aos="fade-down" data-aos-delay="300" />
            </div>
        `
        return section5;
    }

    // ---------- footer ----------
    const generate_footer = (year) => {
        const footer = document.createElement('footer');
        footer.innerHTML = `
            <button class="to-top" id="scroll"><i class="fa fa-chevron-up"></i>TOP</button>

            <div class="restaurant-info">

                <div class="locations">
                    <h4>LOCATIONS</h4>
                    <div class="location-1">
                        <h5>376 Van Brun St<br />Brooklyn, NY &#8212; 11231</h5>
                    </div>
                    <!--location-1-->
                    <div class="location-2">
                        <h5>25 Union Square West<br />New York, NY &#8212; 10003</h5>
                    </div>
                </div>
                <!--locations end-->

                <div class="hours">
                    <h4>HOURS</h4>
                    <div class="weekdays">
                        <h5>Monday - Thursday<br />
                            5:30pm - 10:00pm
                        </h5>
                    </div>
                    <!--weekdays end-->

                    <div class="weekends">
                        <h5>Friday & Saturday<br />
                            5:30pm - 11:00pm
                        </h5>
                    </div>
                    <!--weekends end-->

                    <div class="private-events">
                        <h5>Available for private<br />
                            events on Sunday
                        </h5>
                    </div>

                </div>
                <!--hours end-->

            </div>
            <!--restaurant-info end-->

            <div class="copyright">
                <p><small>Copyright ${year} &#169; Handcrafted with love by <span>Ryan</span></small></p>
                <p><small>Permissions and Copyright &#8226;</small></p>
            </div>
        `
        return footer;
    }

    // append header_nav and header_div to header
    header.append(generate_header_nav(), generate_header_div());

    body.insertBefore(header, body.children[0]);
    body.append(generate_section1(), generate_section2(), generate_section3(), generate_section4(), generate_section5(), generate_footer(getCurrentYear()));
});

export default generateHome;