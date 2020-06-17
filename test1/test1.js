let students = [
    {id:1,name:"Ariel",age:30,class:"B",ghrhet:true},
    {id:2,name:"Avi",age:32,class:"A",ghrhet:true},
    {id:3,name:"Shimi",age:25,class:"G",ghrhet:false},
    {id:4,name:"Shuki",age:26,class:"A",ghrhet:true},
    {id:5,name:"Momi",age:35,class:"A",ghrhet:false},
    {id:6,name:"Dani",age:20,class:"B",ghrhet:true},
    {id:7,name:"Ely",age:37,class:"B",ghrhet:false},
    {id:8,name:"Poly",age:22,class:"g",ghrhet:true},
    {id:9,name:"Dudi",age:33,class:"A",ghrhet:true},
    {id:10,name:"Igal",age:29,class:"G",ghrhet:false},
    {id:11,name:"Gil",age:33,class:"B",ghrhet:true},
    {id:12,name:"Ary",age:29,class:"G",ghrhet:true}
]

let temples = {

    stuTable:`<table>
        <th>[name]</th>
        <tr>[age]</tr>
        <tr>[class]</tr>
        <tr>[ghrhet]</tr>
    </table>`,
    stuLi:`<ul>
        <li>name:[name]</li>
        <li>age:[age]</li>
        <li>class:[class]</li>
        <li>ghrhet:[ghrhet]</li>
    </ul>`

}

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

let studentsDiv = document.querySelector('.students');
studentsDiv.innerHTML= render(temples.stuLi,students);
studentsDiv.innerHTML += render(temples.stuTable,students);


