const labels = document.querySelectorAll('.form-control label');

labels.forEach(label =>{
    label.innerHTML = label.innerText //we get the inner text which is each letter
                            .split('')  //we split every letter
                            .map((letter, index)=>`<span style="transition-delay:${index*50}ms">${letter}</span>`)   //we put a <span></span> around it 
                            .join('') ;                                      //we make it string again 
});