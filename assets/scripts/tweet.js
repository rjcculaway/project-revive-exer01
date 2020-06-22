/**
 * Script for sending a tweet.
 */

window.onload = init;

/* Initialize variables. */

const new_tweet_html_before = '<div class="tweet row border-bottom py-1 pr-4"><div class="twitter-dp col-2 .align-middle "><img src="assets/images/upd.jpg" class="img-fluid rounded-circle py-1"></div><div class="col px-0"><div class="twitter-username"><span class="display-name">Rene Jotham</span> <span class="username">@renejotham</span><span class="time">Now</span></div><p class="tweet-content mb-0">'
const new_tweet_html_after = '</p><div class="d-flex d-sm-block justify-content-between ml-n1"><button class="interaction-button btn comment p-1"><i class="far fa-comment fa-1x"></i><span class="count-label comment-count">113.2K</span></button><button class="interaction-button btn retweet p-1"><i class="fas fa-retweet fa-1x"></i><span class="count-label retweet-count">364.5K</span></button><button class="interaction-button btn like p-1"><i class="far fa-heart fa-1x"></i><span class="count-label like-count"> 1.1M</span></button><button class="interaction-button btn p-1"><i class="fas fa-external-link-alt fa-1x"></i></button><button class="interaction-button btn p-1"><i class="fas fa-chart-bar fa-1x"></i></button></div></div></div>'
var old_tweets;

function init () {
    /* Check if there are tweets currently stored in local storage */
    let old_tweets_string = window.localStorage.getItem('old_tweets')

    if (!old_tweets_string) {
        old_tweets = []
    } else {
        old_tweets = JSON.parse(old_tweets_string)
        for (let i = 0; i < old_tweets.length; i++) {
            insert_tweet(old_tweets[i]);
        }
    }

    document.getElementById('tweet-send-button').onclick = post_tweet;
}

/* Posts a tweet when clicking the Tweet button. ALso stores the tweet to local storage. */
function post_tweet () {
    let new_tweet = read_tweet();
    
    insert_tweet(new_tweet)
    store_tweet(new_tweet);
}

/* Reads the tweet in the text area. */
function read_tweet() {
    return document.getElementById('tweet-input').value;
}

/* From the tweets list, stringify it to store to local storage. */
function store_tweet (new_tweet) {
    old_tweets.push(new_tweet);
    window.localStorage.setItem('old_tweets', JSON.stringify(old_tweets));
}

/* Inserts a tweet into HTML. */
function insert_tweet (new_tweet) {
    let tweets_html = document.getElementById('tweets')

    tweets_html.innerHTML = new_tweet_html_before + new_tweet + new_tweet_html_after + tweets_html.innerHTML;
}