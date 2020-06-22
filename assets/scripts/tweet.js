/**
 * Script for sending a tweet.
 */

window.onload = init;

/* Initialize variables. */
var tweets;
var tweet_button;
var tweet_content;

const new_tweet_html_before = '<div class="tweet row border-bottom py-1 pr-4"><div class="twitter-dp col-2 .align-middle "><img src="assets/images/upd.jpg" class="img-fluid rounded-circle py-1"></div><div class="col px-0"><div class="twitter-username"><span class="display-name">Rene Jotham</span> <span class="username">@renejotham</span><span class="time">Now</span></div><p class="tweet-content mb-0">'
const new_tweet_html_after = '</p><div class="d-flex d-sm-block justify-content-between ml-n1"><button class="interaction-button btn comment p-1"><i class="far fa-comment fa-1x"></i><span class="count-label comment-count">113.2K</span></button><button class="interaction-button btn retweet p-1"><i class="fas fa-retweet fa-1x"></i><span class="count-label retweet-count">364.5K</span></button><button class="interaction-button btn like p-1"><i class="far fa-heart fa-1x"></i><span class="count-label like-count">1.1M</span></button><button class="interaction-button btn p-1"><i class="fas fa-external-link-alt fa-1x"></i></button><button class="interaction-button btn p-1"><i class="fas fa-chart-bar fa-1x"></i></button></div></div></div>'

/* Get corresponding nodes */
function init () {
    tweets = document.getElementById("tweets");
    tweet_content = document.getElementById("tweet-input");
    tweet_button = document.getElementById("tweet-send-button");
    tweet_button.onclick = push_tweet;
}


function push_tweet () {
    console.log(tweet_content.value);
    let tweet_inside = tweet_content.value

    tweets.innerHTML = new_tweet_html_before + tweet_inside + new_tweet_html_after + tweets.innerHTML
}



