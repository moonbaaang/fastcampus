//let ajax = new XMLHttpRequest();
// https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest 참고

const container = document.getElementById('root');
const ajax = new XMLHttpRequest(); // 다른 데이터로 변경 불가 (상수)
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'; // 바뀔 가능성이 있는 변수는 따로 빼주는게 좋음
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'; //값을 확정할 수 없음


function getData(url){
    ajax.open('GET', url, false);
    ajax.send();

    return JSON.parse(ajax.response)
}
//ajax.open('GET', url, false);
//ajax.send(); >> 위의 함수화

//console.log(ajax.response);
const newsFeed = getData(NEWS_URL)
//console.log(newsFeed)
const ul = document.createElement('ul');

window.addEventListener('hashchange', function(){
    //console.log("해시가 변경됨");
    const id = location.hash.substr(1); // 1부터 반환
    
    
    //ajax.open('GET', CONTENT_URL.replace('@id', id), false); //@id를 변경
    //ajax.send();

    //const newsContent = JSON.parse(ajax.response)
    const newsContent = getData(CONTENT_URL.replace('@id', id))
    const title = document.createElement('h1')

    title.innerHTML = newsContent.title
    content.appendChild(title)
    console.log(newsContent)
});

for(let i=0 ; i < 10 ; i++){
    const div = document.createElement('div')
    const li = document.createElement('li');
    const a = document.createElement('a')
    //<li>${newsFeed[i].title}</li> 하드코딩 시

    div.innerHTML = 
    `
    <li>
        <a href='#${newsFeed[i].id}'>
            ${newsFeed[i].title} (${newsFeed[i].comments_count})
        </a>
    </li>
    `

    //a.href = `#${newsFeed[i].id}`;
    //a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;
    
    //a.addEventListener('click', function(){});

    //li.appendChild(a);
    //ul.appendChild(div.children[0]); //임시로 div 태그의 DOM형태를 이용하고 div를 버림
    ul.appendChild(div.firstElementChild); // 위와 같은 표현
}



container.appendChild(ul)
container.appendChild(content)