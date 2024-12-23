function addPost(event) {
    // Prevent the default action, if needed
    event.preventDefault();

    const blogText = document.getElementById('blog-text');
    const blogPostsContainer = document.getElementById('blog-posts');
    const postContent = blogText.value.trim();  // Get the content from the textarea

    if (postContent !== '') {
        const postElement = document.createElement('div');
        postElement.className = 'blog-post';
        postElement.innerHTML = `
            <p>${postContent}</p>
            <button class="delete-post" onclick="deletePost(this)">Delete</button>
        `;
        blogPostsContainer.appendChild(postElement);

        // Clear the input field
        blogText.value = '';
    }
}


function deletePost(button) {
    const postElement = button.parentElement;
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.removeChild(postElement);
}
// Separate Email Functionality (If needed)
const handleSendEmail = (event) => {
    event.preventDefault();
    console.log('Email sent');
    // Email functionality here using email.js
};

// Add event listener for email (this is a different button)
document.getElementById('emailButton').addEventListener('click', handleSendEmail);

// append,prepend,replace

    $("#prepend, #append, #replace").on('click', function(e) {
        var el = $(e.currentTarget);
        var action = el.attr('id');
        var content = $('.text').val();  // Get content from the textarea
    
        if (action == "prepend") {
            console.log("Prepending..." + content);  // Corrected log
            $('#main').prepend(content);  // Prepend content
        } else if (action == "append") {
            console.log("Appending...");
            $('#main').append(content);  // Append content
        } else if (action == "replace") {
            console.log("Replacing...");
            $('#main').html(content);  // Replace the content
        }
    });
    
