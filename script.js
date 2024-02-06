
function openBlogPage() {
    window.open('blog.html', '_blank');
}


// Function to toggle the like button
function toggleLike(postId) {
    const likeButton = document.getElementById(`likeButton${postId}`);
    const likeCount = document.getElementById(`likeCount${postId}`);
    
    // Check if the like button is active
    const isLiked = likeButton.classList.contains('active');

    if (isLiked) {
        // Unlike the post
        likeButton.classList.remove('active');
        decrementLikeCount(postId);
    } else {
        // Like the post
        likeButton.classList.add('active');
        incrementLikeCount(postId);
    }
}

// Function to increment the like count
function incrementLikeCount(postId) {
    let count = parseInt(localStorage.getItem(`likeCount${postId}`)) || 0;
    count++;

    // Update the UI and store the updated count in local storage
    updateLikeCount(postId, count);
}

// Function to decrement the like count
function decrementLikeCount(postId) {
    let count = parseInt(localStorage.getItem(`likeCount${postId}`)) || 0;
    
    // Ensure the count doesn't go below zero
    count = Math.max(0, count - 1);

    // Update the UI and store the updated count in local storage
    updateLikeCount(postId, count);
}

// Function to update the UI and store the like count in local storage
function updateLikeCount(postId, count) {
    const likeCount = document.getElementById(`likeCount${postId}`);
    likeCount.innerText = `${count} Likes`;

    // Store the updated count in local storage
    localStorage.setItem(`likeCount${postId}`, count);
}

// Initialize the like count when the page loads
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 1; i <= 2; i++) {
        const initialLikeCount = parseInt(localStorage.getItem(`likeCount${i}`)) || 0;
        updateLikeCount(i, initialLikeCount);
    }
});



// dark and light mode



var mode= document.getElementById("mode");

mode.onclick = function(){
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        mode.src = "files/sun.png";
    }
    else{
        mode.src = "files/light-moon.png";
    }
}


// JavaScript code to trigger animation when the element enters the viewport
const aboutColumns = document.querySelectorAll('.about-column1, .about-column2');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
}, {
  threshold: 0.3 // threshold (0.5 means half of the element is visible)
});

aboutColumns.forEach(column => {
  observer.observe(column);
});

