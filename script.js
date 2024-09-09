
    // Function to toggle navigation menu
    document.getElementById('menu-btn').addEventListener('click', function() {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('hidden');
    });


//feeeddd
    document.getElementById('post-button').addEventListener('click', function() {
        const input = document.getElementById('post-input');
        const fileInput = document.getElementById('post-image');
        const postsContainer = document.getElementById('posts-container');
        
        if (input.value.trim() || fileInput.files.length > 0) {
            // Create a new post element
            const newPost = document.createElement('div');
            newPost.className = 'post p-4 border-b border-gray-200 bg-gray-50 rounded-lg card mb-4';
            
            // Create the post content
            let postContent = `<p class="mb-2">${input.value}</p>`;
            
            // Handle image file if selected
            if (fileInput.files.length > 0) {
                const file = fileInput.files[0];
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    postContent += `<img src="${e.target.result}" alt="Post Image" class="w-full h-64 object-cover rounded mb-4">`;
                    
                    // Set the content of the new post
                    newPost.innerHTML = postContent + `
                        <div class="flex space-x-4">
                            <button class="text-blue-600 hover:underline transition">Like</button>
                            <button class="text-blue-600 hover:underline transition">Comment</button>
                            <button class="text-blue-600 hover:underline transition">Share</button>
                        </div>
                    `;
                    
                    // Append the new post to the posts container
                    postsContainer.prepend(newPost);
                    
                    // Clear the input fields
                    input.value = '';
                    fileInput.value = '';
                };
                
                reader.readAsDataURL(file);
            } else {
                // Set the content of the new post
                newPost.innerHTML = postContent + `
                    <div class="flex space-x-4">
                        <button class="text-blue-600 hover:underline transition">Like</button>
                        <button class="text-blue-600 hover:underline transition">Comment</button>
                        <button class="text-blue-600 hover:underline transition">Share</button>
                    </div>
                `;
                
                // Append the new post to the posts container
                postsContainer.prepend(newPost);
                
                // Clear the input fields
                input.value = '';
            }
        }
    });



    //// 

     // Toggle mobile menu
     const menuBtn = document.getElementById('menu-btn');
     const mobileMenu = document.getElementById('mobile-menu');
 
     menuBtn.addEventListener('click', () => {
         mobileMenu.classList.toggle('hidden');
     });
 
     // Show the Profile Page
     function showProfilePage() {
         document.getElementById('home-page').classList.add('hidden');
         document.getElementById('profile-page').classList.remove('hidden');
     }
 
     // Show the Home Page
     function showHomePage() {
         document.getElementById('home-page').classList.remove('hidden');
         document.getElementById('profile-page').classList.add('hidden');
     }
 
     // Handle Profile link click
     document.querySelectorAll('a[href="#"]').forEach(link => {
         link.addEventListener('click', function (e) {
             e.preventDefault();
             const targetPage = this.textContent.trim();
 
             if (targetPage === 'Profile') {
                 showProfilePage();
             } else if (targetPage === 'Home') {
                 showHomePage();
             }
 
             if (!mobileMenu.classList.contains('hidden')) {
                 mobileMenu.classList.add('hidden');
             }
         });
     });



     //// message chat box

     

     
        