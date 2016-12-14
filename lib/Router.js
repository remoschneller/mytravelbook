//Routen für Menü Buttons
Router.configure({
mainTemplate: 'main',
aboutTemplate: 'about',
contactTemplate: 'contact'
});

Router.route('/',function(){
    this.render('main');
})

Router.route('/about',function(){
    this.render('about');
})

Router.route('/contact',function(){
    this.render('contact');
})