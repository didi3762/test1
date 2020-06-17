listOfListes = { 
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
    {id:1,name:"Auri",age:30,class:"B",ghrhet:true,imgsrc:'http://img1.jpg'},
    {id:2,name:"Bibi",age:32,class:"A",ghrhet:true,imgsrc:'http://img2.jpg'},
    {id:3,name:"Nani",age:25,class:"C",ghrhet:false,imgsrc:'http://img3.jpg'},
    {id:4,name:"Daili",age:26,class:"A",ghrhet:true,imgsrc:'http://img4.jpg'},
    {id:5,name:"Mori",age:35,class:"A",ghrhet:false,imgsrc:'http://img5.jpg'},
    {id:6,name:"David",age:20,class:"B",ghrhet:true,imgsrc:'http://img6.jpg'},
    {id:7,name:"Elad",age:37,class:"B",ghrhet:false,imgsrc:'http://img7.jpg'},
    {id:8,name:"Pini",age:22,class:"C",ghrhet:true,imgsrc:'http://img8.jpg'},
    {id:9,name:"Daniel",age:33,class:"A",ghrhet:true,imgsrc:'http://img9.jpg'},
    {id:10,name:"Ishay",age:29,class:"C",ghrhet:false,imgsrc:'http://img10.jpg'},
    {id:11,name:"Gidon",age:33,class:"B",ghrhet:true,imgsrc:'http://img11.jpg'},
    {id:12,name:"Avinoam",age:29,class:"C",ghrhet:true,imgsrc:'http://img12.jpg'}
],
students3 : [
    {id:1,name:"Asi",age:30,class:"B",ghrhet:true,imgsrc:'http://img1.jpg'},
    {id:2,name:"Ahron",age:32,class:"A",ghrhet:true,imgsrc:'http://img2.jpg'},
    {id:3,name:"Shchar",age:25,class:"C",ghrhet:false,imgsrc:'http://img3.jpg'},
    {id:4,name:"Sely",age:26,class:"A",ghrhet:true,imgsrc:'http://img4.jpg'},
    {id:5,name:"Midi",age:35,class:"A",ghrhet:false,imgsrc:'http://img5.jpg'},
    {id:6,name:"Dadi",age:20,class:"B",ghrhet:true,imgsrc:'http://img6.jpg'},
    {id:7,name:"Esy",age:37,class:"B",ghrhet:false,imgsrc:'http://img7.jpg'},
    {id:8,name:"Nachman",age:22,class:"C",ghrhet:true,imgsrc:'http://img8.jpg'},
    {id:9,name:"Sofi",age:33,class:"A",ghrhet:true,imgsrc:'http://img9.jpg'},
    {id:10,name:"Imano",age:29,class:"C",ghrhet:false,imgsrc:'http://img10.jpg'},
    {id:11,name:"Gilad",age:33,class:"B",ghrhet:true,imgsrc:'http://img11.jpg'},
    {id:12,name:"Arsaf",age:29,class:"C",ghrhet:true,imgsrc:'http://img12.jpg'}
],

students4: [
    {id:1,name:"Aefi",age:30,class:"B",ghrhet:true,imgsrc:'http://img1.jpg'},
    {id:2,name:"Bini",age:32,class:"A",ghrhet:true,imgsrc:'http://img2.jpg'},
    {id:3,name:"Nasi",age:25,class:"C",ghrhet:false,imgsrc:'http://img3.jpg'},
    {id:4,name:"Daxi",age:26,class:"A",ghrhet:true,imgsrc:'http://img4.jpg'},
    {id:5,name:"Moli",age:35,class:"A",ghrhet:false,imgsrc:'http://img5.jpg'},
    {id:6,name:"Dazzzz",age:20,class:"B",ghrhet:true,imgsrc:'http://img6.jpg'},
    {id:7,name:"Ekom",age:37,class:"B",ghrhet:false,imgsrc:'http://img7.jpg'},
    {id:8,name:"Psisi",age:22,class:"C",ghrhet:true,imgsrc:'http://img8.jpg'},
    {id:9,name:"Dibibb",age:33,class:"A",ghrhet:true,imgsrc:'http://img9.jpg'},
    {id:10,name:"Isssssaaaa",age:29,class:"C",ghrhet:false,imgsrc:'http://img10.jpg'},
    {id:11,name:"Gmcl",age:33,class:"B",ghrhet:true,imgsrc:'http://img11.jpg'},
    {id:12,name:"Ashul",age:29,class:"C",ghrhet:true,imgsrc:'http://img12.jpg'}
]}

class StuId extends HTMLElement{

    static get observedAttributes(){
        return ['img-src','year','name','age','ghrhet'];
    }

  constructor(){
        super();

        

        let shadow = this.attachShadow({mode:'open'});
        // let style = document.createElement('style');
        let link = document.createElement('link');
        link.setAttribute('rel',"stylesheet");
        link.setAttribute('href',"test4.css");
       

        this.className = 'credit';
        this.className += ` ${this.getAttribute('year')}`;
       
     

        
       
       
        let itemDiv = document.createElement('div');
        itemDiv.className = 'itemDiv';
        let stuImgD = document.createElement('div');
        this.stuImg = document.createElement('img');
        stuImgD.className = 'stu-img-d';
       
        
        this.stuSpan = document.createElement('span');
        
        // shadow.appendChild(style);
        shadow.appendChild(link);
        shadow.appendChild(itemDiv);
        itemDiv.appendChild(stuImgD);
        stuImgD.appendChild(this.stuImg);
        itemDiv.appendChild(this.stuSpan);

        // style.textContent = `
        // .credit{
        //     display: flex;
        //    width: 30%; 
        //     flex-direction: column;
        //     border:5px solid blueviolet; 
        //     margin: 10PX;
        //     text-align: center;
        // } 
        // .A{
        //     background-color: cornflowerblue;
        // }
        // .B{
        //     background-color: rgb(100, 237, 111);
        // }
        // .C{
        //     background-color: rgb(237, 127, 100);
        // }
        // .ghrhet{
        //     font-weight: bold;
        // }
        // .itemDiv{
        //     align-self: center;
        // }`


        
    }

    attributeChangedCallback(name,oldValue,newValue){
        console.log('changed',name,oldValue,newValue);
        if(name=='ghrhet'){
            console.log(this.getAttribute('ghrhet'));
            
            if(this.getAttribute('ghrhet')=="true"){
            this.className += ' ghrhet';}
        }
        
        this.stuImg.src = this.getAttribute('img-src');
        this.stuSpan.innerHTML = `NAME:${this.getAttribute('name')}<br>AGE:${this.getAttribute('age')}STEP:${this.getAttribute('year')}<br>GREAT:${this.getAttribute('ghrhet')}`
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
    static get observedAttributes(){
        return['list-id'];
    }

  constructor(){
    super()

    let shadow = this.attachShadow({mode:'open'});
    let style = document.createElement('style');

    this.selectList = this.getAttribute('list-id');
    this.mYstudents = listOfListes[this.selectList];
    console.log(this.mYstudents);
    
    
    this.myDiv = document.createElement('div');

    this.myDiv.innerHTML = render(this.tample,this.mYstudents);

    shadow.appendChild(style);
    shadow.appendChild(this.myDiv);

}

attributeChangedCallback(name,oldValue,newValue){
    console.log('changed',name,oldValue,newValue);
    this.selectList = this.getAttribute('list-id');
    this.mYstudents = listOfListes[this.selectList];
    this.myDiv.innerHTML = render(this.tample,this.mYstudents);
}

}

customElements.define('list-stu',ListStu);

class SelectStu extends HTMLElement{

    listOfListesNames = [{nameList:'students1'},{nameList:'students2'},{nameList:'students3'},{nameList:'students4'},]
    tample = `<option>[nameList]</option>`

    constructor(){
        super();

        let shadow = this.attachShadow({mode:'open'});
        let style = document.createElement('style');
        let selectList = this.getAttribute('list-id');
        this.myList = document.querySelector(selectList);

        let selectList2 = document.createElement('select');
        selectList2.className = 'selct-list'
        selectList2.innerHTML = render(this.tample,this.listOfListesNames);

        shadow.appendChild(style)
        shadow.appendChild(selectList2)

        style.textContent = `
        .selct-list{
            display: flex;
            width: 150px;
            flex-direction: column;
            border:5px solid blueviolet;
            margin: 10PX;
            text-align: center;
        }`

        selectList2.onchange = ev => {
            console.log(selectList2.selectedOptions[0].innerHTML);
            
            this.myList.setAttribute('list-id',`${selectList2.selectedOptions[0].innerHTML}`);
        }
        
        



        
    }
}

customElements.define('select-stu',SelectStu);

