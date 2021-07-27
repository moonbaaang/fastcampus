// 라우터 (화면 처리기) 추가

const container = document.getElementById('root');
const ajax = new XMLHttpRequest(); // 다른 데이터로 변경 불가 (상수)
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'; // 바뀔 가능성이 있는 변수는 따로 빼주는게 좋음
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'; //값을 확정할 수 없음
const store = {
    currentPage: 1,
    lastPage: 0,
}


function getData(url){
    ajax.open('GET', url, false);
    ajax.send();

    return JSON.parse(ajax.response)
}

function newsFeed(){
    const newsFeed = getData(NEWS_URL)
    const newsList = [];
    store.lastPage = newsFeed.length%10 == 0? newsFeed.length/10:newsFeed.length%10+1
    console.log("store.lastPage : "+store.lastPage)

    newsList.push('<ul>')

    for(let i = (store.currentPage-1)*10 ; i < store.currentPage*10 ; i++){
        newsList.push( `
        <li>
            <a href='#/show/${newsFeed[i].id}'>
                ${newsFeed[i].title} (${newsFeed[i].comments_count})
            </a>
        </li>
        `);
    }
 
    newsList.push('</ul>')
    newsList.push(`
        <div>
            <a href='#/page/${store.currentPage>1 ? store.currentPage-1 : 1}'>이전페이지</a>
            <a href='#/page/${store.currentPage<store.lastPage ? store.currentPage+1 : store.lastPage}'>다음페이지</a>
        </div>
    `);
    container.innerHTML = newsList.join("") // 배열 요소를 모두 합쳐 반환 ,(콤마로 기본 연결)
}


function newsDetail(){
    const id = location.hash.substr(7); // 1부터 반환
    
    const newsContent = getData(CONTENT_URL.replace('@id', id))

    container.innerHTML = `
    <h1>
        ${newsContent.title}
    </h1>
    <div>
        <a href="#/page/${store.currentPage}">목록으로</a>
    </div>
    `;
}

function router(){
    const routePath = location.hash;

    if (routePath == ''){
        newsFeed()
    } else if(routePath.indexOf('#/page/')>=0) {
        store.currentPage = Number(routePath.substr(7));
        newsFeed()
    } else {
        newsDetail()
    }
}

window.addEventListener('hashchange', router);

router();




