async function getPosts() {
    try {
        const response = await fetch("http://localhost:3000/posts");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const getBlogPost = document.getElementById("getBlogPost");
        getBlogPost.innerHTML = "";

        if (data.length === 0) {
            getBlogPost.innerHTML = '<p class="text-center fs-3 fw-bold">No posts available</p>';
            return;
        }

        data.forEach((post) => {
            // Create buttons based on post category or default to HTML/CSS/JS
            const buttons = post.category 
                ? `<button type="button" class="btn btn-outline-light p-2 fs-4 my-4">${post.category}</button>`
                : `
                    <button type="button" class="btn btn-outline-light p-2 fs-4 my-4">HTML</button>
                    <button type="button" class="btn btn-outline-light p-2 fs-4 my-4">CSS</button>
                    <button type="button" class="btn btn-outline-light p-2 fs-4 my-4">JS</button>
                `;

            getBlogPost.innerHTML += `
                <div class="col">
                    <div class="card h-100">
                        <img src="${post.image || 'placeholder-image.jpg'}" 
                             class="card-img-top" 
                            //  style="height: 200px; object-fit: cover"
                             alt="${post.title || 'Post image'}">
                        <div class="card-body" style="background-color: black; color: white">
                            <h5 class="card-title fs-2">${post.title || 'Untitled Post'}</h5>
                            ${buttons}
                        </div>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        const getBlogPost = document.getElementById("getBlogPost");
        getBlogPost.innerHTML = '<p class="text-center fs-3 fw-bold">Error loading posts. Please try again later.</p>';
        console.error("Error fetching posts:", error);
    }
}

// Load posts when page loads and refresh every 5 seconds
document.addEventListener('DOMContentLoaded', getPosts);
setInterval(getPosts, 5000);