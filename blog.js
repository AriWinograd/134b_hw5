let docFrag;
let posts = JSON.parse(window.localStorage.getItem("posts")) || [];


function formSubmitHandler(){
    let post = document.getElementById('blog_template').content;
    let el = post.cloneNode(true);
    let title = document.getElementById('title');
    let time = new Date().toLocaleDateString("en-us");
    let summary = document.getElementById('summary');

    el.querySelector('h3').innerHTML = title.value;
    el.querySelector('time').innerHTML = time;
    el.querySelector('p').innerHTML = summary.value;
    let ebtn = el.querySelector('.edit_btn');
    let dbtn = el.querySelector('.delete_btn');
    
    if(docFrag == null){
        document.getElementById('posts').appendChild(el);
        posts.push({
            Title: title.value,
            Time: time,
            Summary: summary.value 
        });
    }
    else{
        console.log(docFrag);
        console.log(docFrag.querySelector('h3').innerHTML);
        posts[posts.findIndex(samePost)] = 
        {
           Title: title.value,
           Time: docFrag.querySelector('time').innerHTML,
           Summary: summary.value
        };

        document.getElementById('posts').replaceChild(el, docFrag);
    }
    let form = document.getElementById('form');
    form.reset();
    localStorage.setItem('posts', JSON.stringify(posts));
    

    ebtn.addEventListener('click', () => {editBtnHandler(ebtn.parentNode)});
    dbtn.addEventListener('click', () => {deleteBtnHandler(dbtn.parentNode)});
    docFrag = null;

    console.log(posts);
}

function samePost(obj){
    if(docFrag){
        return (obj.Title == docFrag.querySelector('h3').innerHTML 
            && obj.Time == docFrag.querySelector('time').innerHTML 
            && obj.Summary == docFrag.querySelector('p').innerHTML);
    }
    return false;
}

function newPostHandler(){
    let dialog = document.getElementById('post_dia');
    dialog.showModal();
}

function cancelBtnHandler(){
    let dialog = document.getElementById('post_dia');
    let form = document.getElementById('form');
    dialog.close();
    form.reset();
    docFrag = null;
}

function editBtnHandler(el){
    let dialog = document.getElementById('post_dia');
    let title = document.getElementById('title');
    let summary = document.getElementById('summary');

    title.value = el.querySelector('h3').innerHTML;
    summary.value = el.querySelector('p').innerHTML;

    docFrag = el;
    dialog.showModal();
}

function deleteBtnHandler(el){
    docFrag = el;
    el.remove();
    posts.splice(posts.findIndex(samePost), 1);
    window.localStorage.setItem('posts', JSON.stringify(posts));
    docFrag = null;
    console.log(posts);
}

function instantiatePage(postObj){
    let post = document.getElementById('blog_template').content;
    let el = post.cloneNode(true);
    let title = postObj.Title;
    let time = postObj.Time;
    let summary = postObj.Summary;

    el.querySelector('h3').innerHTML = title;
    el.querySelector('time').innerHTML = time;
    el.querySelector('p').innerHTML = summary;
    let ebtn = el.querySelector('.edit_btn');
    let dbtn = el.querySelector('.delete_btn');
    ebtn.addEventListener('click', () => {editBtnHandler(ebtn.parentNode)});
    dbtn.addEventListener('click', () => {deleteBtnHandler(dbtn.parentNode)});

    document.getElementById('posts').appendChild(el);
}

export function init(){
    console.log(posts)

    posts.forEach(element => instantiatePage(element));

    let post = document.getElementById('blog_template').content;

    let form = document.getElementById('form');
    form.addEventListener('submit', formSubmitHandler);

    let pbtn = document.getElementById('new_post');
    pbtn.addEventListener('click', newPostHandler);

    let cbtn = document.getElementById('cancel_btn');
    cbtn.addEventListener('click', cancelBtnHandler);
}