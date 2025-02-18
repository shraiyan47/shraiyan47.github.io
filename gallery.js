function createGallerySection(projectName, images) {
    console.log('Creating gallery for:', projectName, 'with images:', images);
    
    const projectSection = document.createElement('div');
    projectSection.classList.add('gallery-project');

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = projectName;
    projectSection.appendChild(projectTitle);

    const imageGrid = document.createElement('div');
    imageGrid.classList.add('image-grid');

    images.forEach(image => {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('image-container');

        const img = document.createElement('img');
        const imagePath = `public/image/${projectName}/${image}`;
        img.src = imagePath;
        img.alt = image.split('.')[0];
        img.loading = 'lazy';

        // Add error handling for images
        img.onerror = () => {
            console.error(`Failed to load image: ${imagePath}`);
            imgContainer.innerHTML = `<div class="image-error">Image not found</div>`;
        };

        img.addEventListener('click', () => {
            openImageModal(img.src);
        });

        imgContainer.appendChild(img);
        imageGrid.appendChild(imgContainer);
    });

    projectSection.appendChild(imageGrid);
    return projectSection;
}

function openImageModal(src) {
    const modal = document.createElement('div');
    modal.classList.add('image-modal');
    
    const modalImg = document.createElement('img');
    modalImg.src = src;
    
    modal.appendChild(modalImg);
    modal.addEventListener('click', () => {
        modal.remove();
    });
    
    document.body.appendChild(modal);
}

function populateGallery(galleryData) {
    const container = document.getElementById('gallery-container');
    if (!container) return;

    Object.entries(galleryData).forEach(([projectName, images]) => {
        const section = createGallerySection(projectName, images);
        container.appendChild(section);
    });
}

// Separate fetch for gallery data
document.addEventListener('DOMContentLoaded', () => {
    console.log('Loading gallery data...');
    
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Gallery data received:', data.gallery);
            if (data.gallery) {
                populateGallery(data.gallery);
            } else {
                console.error('No gallery data found in JSON');
            }
        })
        .catch(error => {
            console.error('Error loading gallery:', error);
            const container = document.getElementById('gallery-container');
            if (container) {
                container.innerHTML = `<p class="error">Error loading gallery: ${error.message}</p>`;
            }
        });
});
