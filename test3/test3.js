let listOfListes ={
    students1 : [
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
],

students2: [
    {id:1,name:"Auri",age:30,class:"B",ghrhet:true,imgsrc:'http://img11.jpg'},
    {id:2,name:"Bibi",age:32,class:"A",ghrhet:true,imgsrc:'http://img12.jpg'},
    {id:3,name:"Nani",age:25,class:"C",ghrhet:false,imgsrc:'http://img13.jpg'},
    {id:4,name:"Daili",age:26,class:"A",ghrhet:true,imgsrc:'http://img14.jpg'},
    {id:5,name:"Mori",age:35,class:"A",ghrhet:false,imgsrc:'http://img15.jpg'},
    {id:6,name:"David",age:20,class:"B",ghrhet:true,imgsrc:'http://img16.jpg'},
    {id:7,name:"Elad",age:37,class:"B",ghrhet:false,imgsrc:'http://img17.jpg'},
    {id:8,name:"Pini",age:22,class:"C",ghrhet:true,imgsrc:'http://img18.jpg'},
    {id:9,name:"Daniel",age:33,class:"A",ghrhet:true,imgsrc:'http://img19.jpg'},
    {id:10,name:"Ishay",age:29,class:"C",ghrhet:false,imgsrc:'http://img20.jpg'},
    {id:11,name:"Gidon",age:33,class:"B",ghrhet:true,imgsrc:'http://img21.jpg'},
    {id:12,name:"Avinoam",age:29,class:"C",ghrhet:true,imgsrc:'http://img22.jpg'}
]}

class StuId extends HTMLElement{

    static get observedAttributes(){
        return['imgsrc','year'];
    }

  constructor(){
        super();

        let shadow = this.attachShadow({mode:'open'});
        let style = document.createElement('style');
        this.link = document.createElement('link');
        this.link.setAttribute("rel","stylesheet")
        this.link.setAttribute('href',"test3.css") 
       

        this.className = 'credit';
     

        this.className += ` ${this.getAttribute('year')}`;
       
       
        let itemDiv = document.createElement('div');
        itemDiv.className = 'itemDiv';
        let stuImgD = document.createElement('div');
        let stuImg = document.createElement('img');
        stuImgD.className = 'stu-img-d';
        stuImg.src = this.getAttribute('img-src');
        
        let stuSpan = document.createElement('span');
        stuSpan.innerHTML = `NAME:${this.getAttribute('name')}<br>AGE:${this.getAttribute('age')}STEP:${this.getAttribute('year')}<br>GREAT:${this.getAttribute('ghrhet')}`
        shadow.appendChild(style);
        shadow.appendChild(this.link);
        shadow.appendChild(itemDiv);
        itemDiv.appendChild(stuImgD);
        stuImgD.appendChild(stuImg);
        itemDiv.appendChild(stuSpan);

        style.textContent = `
        .credit{
            display: flex;
           width: 100%; 
            flex-direction: column;
            border:5px solid blueviolet; 
            margin: 10PX;
            text-align: center;
        }
        
        .A{
            background-color: cornflowerblue;
        }
        
        .B{
            background-color: rgb(100, 237, 111);
        }
        
        .C{
            background-color: rgb(237, 127, 100);
        }
        
        .ghrhet{
            font-weight: bold;
        }
        .itemDiv{
            align-self: center;
        }`


        
    }

    attributeChangedCallback(name,oldValue,newValue){
        console.log('changed',name,oldValue,newValue);
        
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




class ListStu extends HTMLElement{

    tample = `<stu-id stu-id='[id]'
name=[name]
age=[age] 
img-src=[imgsrc] 
year=[class] 
ghrhet=[ghrhet]></stu-id>
  `


    ids = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6},
        {id:7},
        {id:8},
        {id:9},
        {id:10},
        {id:11},
        {id:12}
    ]

    static get observedAttributes(){
        return['imgsrc','year'];
    }

  constructor(){
    super()

    let shadow = this.attachShadow({mode:'open'});
    let style = document.createElement('style');

    let selectList = this.getAttribute('list-id');
    let mYstudents = listOfListes[selectList];
    
    let myDiv = document.createElement('div');

    myDiv.innerHTML = render(this.tample,mYstudents);

    shadow.appendChild(style);
    shadow.appendChild(myDiv);

}

attributeChangedCallback(name,oldValue,newValue){
    console.log('changed',name,oldValue,newValue);
    
}

}

customElements.define('list-stu',ListStu);




