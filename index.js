const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked: false

    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin just a bit stressed!",
        likes: 4,
        liked: false

    },
    {
        name: "Pablo Ruiz  Picasso",
        username: "pp1881",
        location: "Málaga, Spain",
        avatar: "images/avatar-picasso.jpg",
        post: "images/post-picasso1.jpg",
        comment: "I am sooooo bored!",
        likes: 32,
        liked: false

    },

    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "You, my friend! Yes, you are the man",
        likes: 152,
        liked: false

    }]

const postContentEl = document.getElementById("postContent");

function rest() {
    postContent.innerHTML = "";
}

function renderPosts() {
    for (let i = 0; i < posts.length; i++) {
        postContentEl.innerHTML += `
            <section class="user-info">
                <div class="user-pic">
                    <img src="${posts[i].avatar}" class="user-avatar" alt="avatar">
                    </div>
                <div class="user-information">
                    <span class="user-full-name">${posts[i].name}</span>
                    <span class="user-location-text">${posts[i].location}</span>
                </div>
            </section>
            <section>
                <img src="${posts[i].post}" class="post-image" alt="painter's self-portrait">
            </section>
            <section class="post-body">
                <div class="icons">
                    <img ondblclick="addLike(${i})" src="images/${posts[i].liked ? 'red-heart.png' : 'icon-heart.png'}" class="icon icon-heart" alt="heart icon">
                    <img onclick="addComment(${i})" id="icon-comment" src="images/icon-comment.png" class="icon icon-comment" alt="comment icon">
                    <img onclick="shareThePage()" src="images/icon-dm.png" class="icon icon-share" alt="share icon">
                </div>
                <p class="likes-count">${posts[i].likes} Likes</p>
                <p class="username-caption">
                    <span class="username">${posts[i].username}</span>
                    <span class="comment">${posts[i].comment}</span>
                </p>
            </section>
        `;
    }
}

renderPosts();

const likes = document.getElementsByClassName("icon-heart");
let likesCount = document.querySelectorAll(".likes-count");

let addLike = (i) => {
    if (posts[i].liked === false) {
        posts[i] = {
            ...posts[i],
            likes: posts[i].likes + 1,
            liked: true
        }
    }
    else {
        posts[i] = {
            ...posts[i],
            likes: posts[i].likes - 1,
            liked: false
        }
    }
    rest();
    renderPosts();
}

let addCommentEl = document.getElementById("icon-comment");

let addComment = (i) => {
    addCommentEl = prompt("Enter your quote: ");
    posts[i] = {
        ...posts[i],
        comment: addCommentEl
    }
    rest();
    renderPosts();
}

function shareThePage() {

    let addr = prompt("what is the email address: ")

    window.location.assign(`mailto:${addr}?Subject=Check This Out&body=https://oldagram-4b7ef1.netlify.app/`);
}
