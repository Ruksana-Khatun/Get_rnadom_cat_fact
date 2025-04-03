
let btn=document.querySelector("button");
let url="https://dog.ceo/api/breeds/image/random";
btn.addEventListener("click" ,async()=>{
    let link=await getImage()
    // console.log(link);
    let img=document.querySelector("#result")
    img.setAttribute("src",link)
  
});


async function getImage(){
    try{

       let res= await axios.get(url)
    //    let data=await res.json(
    //   console.log(res.data.fact);
    console.log(res.data.message);
      return res.data.message
    
    }catch(erro){
        console.log("eror".eror);
        return "NO found Fact "
    }
    
}
