(function() {

    var hamburger = {
        navToggle: document.querySelector('.nav-toggle'),
        nav: document.querySelector('nav'),
        firstLogo: document.querySelector('.logo'),

        doToggle: function(e) {
            e.preventDefault();

            this.navToggle.classList.toggle('expanded');
            // this.nav.classList.toggle('expanded');
            this.nav.classList.toggle('set-opacity');

            // console.log(this.firstLogo);
            this.firstLogo.classList.toggle('inactive');
        }
    };

    hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
    hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());
