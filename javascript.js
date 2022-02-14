let DragArea = document.getElementById('DragArea');
let dragtext = document.getElementById("text");
let file;

DragArea.addEventListener("dragover",(event)=>{
    //console.log("drag");
    event.preventDefault();
    DragArea.classList.add("active");
    dragtext.textContent="Release to Upload File";
})

DragArea.addEventListener("dragleave",()=>{
    //console.log("leave");
    DragArea.classList.remove("active");
    dragtext.textContent="Drag & Drop to Upload File";
})

DragArea.addEventListener("drop",(event)=>{
    //console.log("drop");
    event.preventDefault();
    DragArea.classList.remove("active");

    file = event.dataTransfer.files[0];
    

    let fileType = file.type;
    

    let validFileExtentions = [ "image/png","image/jpeg","image/jpg"];

    if(validFileExtentions.includes(fileType)){
        

        let fileReader = new FileReader();

        fileReader.onload = () =>{
            let fileURL = fileReader.result;
            console.log(fileURL);
            let imatag = `<img src=${fileURL}>`;
            DragArea.innerHTML=imatag;
        }
        fileReader.readAsDataURL(file);
    }
    else{
        alert("This is not image file");
    }


})