const animation=document.querySelector(".slidercentral")
const serviceImage=document.querySelectorAll(".servicimage")
  r=0
 function apicture(){
  for(let r=0; r<=serviceImage.length-1; r++){
    
  
  serviceImage[r].style.backgroundImage="URL('img/image"+r+".jpg')"
}} 
      apicture()
 










      let p=0
    setInterval(function (){
      
   
   animation.style.backgroundImage="URL('img/image"+p+".jpg')" ; 
   
    if(p==11){
      p=0}
    p++
},5000)

function serviceClick(index){
  const service=document.querySelectorAll(".service")
  const ServiceHeader=document.querySelectorAll(".service h3")
  service.forEach(service=>{
    service.style.backgroundColor="white"
    service.classList.remove("clipPath")
  }) 
  ServiceHeader.forEach(header=>{
          header.style.color="black"
  })
    
    let a=ServiceHeader[index].textContent
    ServiceHeader[index].style.color="white"
    service[index].classList.add("clipPath")
    document.querySelector(".slidertitle").textContent=a
  service[index].style.backgroundColor="rgb(107,57,70)"
}