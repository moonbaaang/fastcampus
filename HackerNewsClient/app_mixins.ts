interface Store {
  currentPage : number;
  lastPage : number;
  feeds : NewsFeed[];
}

interface News { // 중복되는 type 을 합침
  // 변경 불가능 하도록 readonly 지시어 사용 가능
  readonly id: number;
  readonly time_ago : string;
  readonly title: string;
  readonly url: string;
  readonly user: string;
  readonly content: string;
}

interface NewsFeed extends News { // News와 뒤의 3가지 속성이 포함됨. 
  readonly comments_count : number;
  readonly points: number;
  read? : boolean; // optional 한 데이터
}

interface NewsDetail extends News {
  readonly comments : NewsComment[];
}

interface NewsComment extends News {
  readonly comments: NewsComment[];
  readonly level:number;
}

const container : HTMLElement | null = document.getElementById('root');
const ajax : XMLHttpRequest = new XMLHttpRequest(); // 다른 데이터로 변경 불가 (상수)
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'; // 바뀔 가능성이 있는 변수는 따로 빼주는게 좋음
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'; //값을 확정할 수 없음
const store : Store = {
    currentPage: 1,
    lastPage: 0,
    feeds: [],
}

// 믹스인 기법 사용 시
function applyApiMixins(targetClass: any, baseClasses: any[]): void{
  baseClasses.forEach(baseClass => {
    Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
      const descriptor = Object.getOwnPropertyDescriptor(baseClass.prototype, name);

      if (descriptor) {
        Object.defineProperty(targetClass.prototype, name, descriptor);
      }
    });
  });
}

class Api {
  getRequest<AjaxResponse>(url: string) : AjaxResponse{
    const ajax = new XMLHttpRequest()
    ajax.open('GET', url, false);
    ajax.send();

    return JSON.parse(ajax.response)
  }
}

class NewsFeedApi{
  getData() : NewsFeed[] {
    return this.getRequest<NewsFeed[]>(NEWS_URL);
  }
}

class NewsDetailApi{
  getData(id : string) : NewsDetail {
    return this.getRequest<NewsDetail>(CONTENT_URL.replace('@id', id));
  }
}

//첫번째 인자로 받은 class에 두번째 인자로 받은 class의 인자를 상속
interface NewsFeedApi extends Api{};
interface NewsDetailApi extends Api{};

applyApiMixins(NewsFeedApi, [Api]);
applyApiMixins(NewsDetailApi, [Api]);

// view와 관련된 업데이트 처리
function makeFeeds(feeds : NewsFeed[]) : NewsFeed[] {
    for (let i=0; i<feeds.length; i++){
        feeds[i].read = false;
    }
    
    return feeds
}

// view와 관련된 업데이트 처리
function updateView(html: string): void{ //리턴이 없을 때 void
  if (container != null){
    container.innerHTML = html
  } else {
    console.error("최상위 컨테이너가 없어 UI를 진행하지 못합니다.")
  }
}

// 페이지, 메인 뷰 처리 로직
function newsFeed(): void{ // 입력은 없음
    let api = new NewsFeedApi()
    let newsFeed : NewsFeed[] = store.feeds;
    const newsList = [];
    let template = `
    <div class="bg-gray-600 min-h-screen">
        <div class="bg-white text-xl">
            <div class="mx-auto px-4">
                <div class="flex justify-between items-center py-6">
                    <div class="flex justify-start">
                        <h1 class="font-extrabold">Hacker News</h1>
                    </div>
                    <div class="item-center justify-end">
                        <a href="#/page/{{__prev_page__}}" class="text-gray-500">
                            Previous
                        </a>
                        <a href="#/page/{{__next_page__}}" class="text-gray-500 ml-4">
                            Next
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4 text-2xl text-gray-700">
            {{__news_feed__}}
        </div>
    </div>
    `
    
    if (newsFeed.length == 0){
        newsFeed = store.feeds = makeFeeds(api.getData());
    }

    store.lastPage = newsFeed.length%10 == 0? newsFeed.length/10:newsFeed.length/10+1
    
    for(let i = (store.currentPage-1)*10 ; i < store.currentPage*10 ; i++){
        newsList.push(`
            <div class="p-6 ${newsFeed[i].read ? 'bg-gray-500' : 'bg-white'} mt-6 rounded-lg shadow-md transition-colors duration-500 hover:bg-green-100">
                <div class='flex'>
                    <div class='flex-auto'>
                        <a href="#/show/${newsFeed[i].id}">${newsFeed[i].title}</a>
                    </div>
                    <div class='text-center text-sm'>
                        <div class="w-10 text-white bg-green-300 rounded-lg px-0 py-2">${newsFeed[i].comments_count}</div>
                    </div>
                </div>
                <div class="flex mt-3">
                    <div class="grid grid-cols-3 text-sm text-gray-500">
                        <div><i class="fas fa-user mr-1"></i>${newsFeed[i].user}</div>
                        <div><i class="fas fa-heart mr-1"></i>${newsFeed[i].points}</div>
                        <div><i class="fas fa-clock mr-1"></i>${newsFeed[i].time_ago}</div>
                    </div>
                </div>
            </div>
        `);             
    }

    /*
        <li>
            <a href='#/show/${newsFeed[i].id}'>
                ${newsFeed[i].title} (${newsFeed[i].comments_count})
            </a>
        </li>
    */
    
    template = template.replace('{{__news_feed__}}', newsList.join(''))
    template = template.replace('{{__prev_page__}}', String(store.currentPage > 1 ? store.currentPage - 1 : 1))
    template = template.replace('{{__next_page__}}',
        String(store.currentPage < store.lastPage ? store.currentPage + 1 : store.lastPage))

    updateView(template)
}

// 페이지, 메인 뷰 처리 로직
function newsDetail(): void{
    const id = location.hash.substr(7); // 1부터 반환
    const api = new NewsDetailApi(id)
    const newsContent: NewsDetail = api.getData(id);

    let template = `
    <div class="bg-gray-600 min-h-screen pb-8">
        <div class="bg-white text-xl">
            <div class="mx-auto px-4">
                <div class="flex justify-between items-center py-6">
                    <div class="flex justify-start">
                        <h1 class="font-extrabold">Hacker News</h1>
                    </div>
                    <div class="items-center justify-end">
                        <a href="#/page/${store.currentPage}" class="text-gray-500">
                            <i class="fa fa-times"></i>
                        </a>
                    </div>
                </div>
            </div
        </div>

        <div class="h-full border rounded-xl bg-white m-6 p-4 ">
            <h2>${newsContent.title}</h2>
            <div class="text-gray-400 h-20">
                ${newsContent.content}
            </div>

            {{__comments__}}
        </div>
    <div>
    `

    for (let i=0; i< store.feeds.length; i++){
        if(store.feeds[i].id === Number(id)){
            store.feeds[i].read = true;
            break;
        }
    }

    

    updateView(template.replace('{{__comments__}}', makeComment(newsContent.comments)))
}

// 내용 뷰에서 코멘트를 나타냄
function makeComment(comments : NewsComment[]): string{
  const commentString = [];

  for(let i = 0 ; i < comments.length; i++){
      const comment: NewsComment = comments[i];

      commentString.push(`
          <div style="padding-left: ${comment.level * 40}px;" class="mt-4">
              <div class="text-gray-400">
                  <i class="fa fa-sort-up mr-2"></i>
                  <strong>${comment.user}</strong> ${comment.time_ago}
              </div>
              <p class="text-gray-700">${comment.content}</p>
          </div>
      `);

      if (comment.comments.length > 0){
          commentString.push(makeComment(comment.comments));
      }
  }

  return commentString.join("")
}



function router(): void {
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




