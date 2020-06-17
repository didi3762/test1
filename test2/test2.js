class StuId extends HTMLElement{

    students = [
        {id:1,name:"Ariel",age:30,class:"B",ghrhet:true,imgsrc:'http://img1.jpg'},
        {id:2,name:"Avi",age:32,class:"A",ghrhet:true,imgsrc:'http://img2.jpg'},
        {id:3,name:"Shimi",age:25,class:"C",ghrhet:false,imgsrc:'http://img3.jpg'},
        {id:4,name:"Shuki",age:26,class:"A",ghrhet:true,imgsrc:'http://img4.jpg'},
        {id:5,name:"Momi",age:35,class:"A",ghrhet:false,imgsrc:'http://img5.jpg'},
        {id:6,name:"Dani",age:20,class:"B",ghrhet:true,imgsrc:'http://img6.jpg'},
        {id:7,name:"Ely",age:37,class:"B",ghrhet:false,imgsrc:'http://img7.jpg'},
        {id:8,name:"Poly",age:22,class:"C",ghrhet:true,imgsrc:'http://img8.jpg'},
        {id:9,name:"Dudi",age:33,class:"A",ghrhet:true,imgsrc:'http://img9.jpg'},
        {id:10,name:"Igal",age:29,class:"C",ghrhet:false,imgsrc:'http://img10.jpg'},
        {id:11,name:"Gil",age:33,class:"B",ghrhet:true,imgsrc:'http://img11.jpg'},
        {id:12,name:"Ary",age:29,class:"C",ghrhet:true,imgsrc:'http://img12.jpg'}
    ]

    constructor(){
        super();

        let shadow = this.attachShadow({mode:'open'});
        let style = document.createElement('style');
        let selectStu = this.getAttribute('stu-id');
        let student;
        
        
        this.students.forEach(stu =>{
            if(selectStu==stu.id){
                student = stu;
            }

        })
        this.className = 'credit';
        if(student.ghrhet){
            this.className += ' ghrhet';
        }
        this.className += ` ${student.class}`;
        this.setAttribute('img-src',student.imgsrc);
        this.setAttribute('iyear',student.class);
        this.setAttribute('ghrhet',student.ghrhet);
       
        let itemDiv = document.createElement('div');
        itemDiv.className = 'itemDiv';
        let stuImgD = document.createElement('div');
        let stuImg = document.createElement('img');
        stuImg.src = this.getAttribute('img-src');
        
        let stuSpan = document.createElement('span');
        stuSpan.innerHTML = `NAME:${student.name}<br>AGE:${student.age}STEP:${student.class}<br>GREAT:${student.ghrhet}`
        shadow.appendChild(style);
        shadow.appendChild(itemDiv);
        itemDiv.appendChild(stuImgD);
        stuImgD.appendChild(stuImg);
        itemDiv.appendChild(stuSpan);

        style.textContent = `
        .itemDiv{
            align-self: center;
        }`


        
    }
}

customElements.define('stu-id',StuId);


function render(tample,dataArr) {

    let p='';
    let pattern = /\[(.*)\]/g;
    let matches = [...tample.matchAll(pattern)];

    dataArr.forEach(data => {
        renderTample = tample;
        matches.forEach(match => {
            renderTample = renderTample.replace(match[0],data[match[1]]);
        })
        p += renderTample;
    });
    
    return p;
}

