$('.button').click(function(){
    var $this = $(this);
    if($this.hasClass('button1')){
        $this.text('Parked Here!'); 
        button1.disabled= true; 
        button2.disabled = true; 
        button1.style.background = '#1f7a1f';     
    } else {
        $this.text('Parked Here!');
        button2.disabled= true;
        button1.disabled = true;
        button2.style.background = '#1f7a1f'; 
    }
});