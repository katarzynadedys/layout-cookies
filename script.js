       window.sr = ScrollReveal();
sr.reveal('.circle-1',{delay: 200})
sr.reveal('.circle-2',{delay: 600})
sr.reveal('.circle-3',{delay: 400})        
          
       $("#commentForm").validate({
  rules: {
    name: "required",
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    name: "Please specify your name",
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    }
  }
});
   

          
   