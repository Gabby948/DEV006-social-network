export default function posts(navigateTo) {
  const rootElement = document.createElement('section');
  rootElement.classList.add('root-post');

  // header
  const header = document.createElement('header');
  header.classList.add('header');

  const headerText = document.createElement('span');
  // headerText.classList.add('header');
  headerText.textContent = 'WATARIDORI';
  header.appendChild(headerText);

  const homeButton = document.createElement('button');
  homeButton.classList.add('header-icon');
  const homeIcon = document.createElement('i');
  homeIcon.classList.add('fas', 'fa-home');
  header.appendChild(homeIcon);
  homeIcon.addEventListener('click', () => {
    navigateTo('/');
  });
  // header.appendChild(homeButton);

  rootElement.appendChild(header);

  // Create Post button
  const createPostButton = document.createElement('button');
  createPostButton.textContent = 'Create a Post';
  createPostButton.classList.add('create-post-button');
  rootElement.appendChild(createPostButton);

  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const closeButton = document.createElement('span');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '&times;';
  modalContent.appendChild(closeButton);

  const textInput = document.createElement('textarea');
  textInput.classList.add('post-text-input');
  modalContent.appendChild(textInput);
  textInput.placeholder = 'Write a comment...';

  const postButton = document.createElement('button');
  postButton.classList.add('post-button');
  postButton.textContent = 'Post';
  modalContent.appendChild(postButton);

  modal.appendChild(modalContent);
  rootElement.appendChild(modal);

  // Div para el primer cuadrado
  const square1 = document.createElement('div');
  square1.classList.add('post-square'); // Agrega una clase para aplicar estilos CSS
  const deleteButton1 = document.createElement('button');
  const deleteIcon1 = document.createElement('i');
  deleteIcon1.classList.add('fas', 'fa-trash');
  // deleteButton1.textContent = 'Delete';
  deleteButton1.appendChild(deleteIcon1);
  deleteButton1.classList.add('deleteButton1');
  deleteButton1.addEventListener('click', deleteCommentInput);
  function deleteCommentInput() {
    commentInput1.value = '';
  }

  const editButton1 = document.createElement('button');

editButton1.addEventListener('click', enableCommentInput);

function enableCommentInput() {
    commentInput1.readOnly = false;
    commentInput1.focus();
}
  const editIcon1 = document.createElement('i');
  editIcon1.classList.add('fas', 'fa-edit');
  editButton1.appendChild(editIcon1);
  // editButton1.textContent = 'Edite';
  editButton1.classList.add('editButton1');

  const likeButton1 = document.createElement('button');
  const likeIcon1 = document.createElement('i');
  likeIcon1.classList.add('fas', 'fa-thumbs-up');
  // likeButton1.textContent = 'Like';
  likeButton1.appendChild(likeIcon1);
  likeButton1.classList.add('likeButton1');
  const commentInput1 = document.createElement('input');
  commentInput1.classList.add('comment-input1');
  // commentInput1.placeholder = 'Write a comment...';

  const container1 = document.createElement('div');
  container1.appendChild(commentInput1);
  container1.appendChild(deleteButton1);
  container1.appendChild(editButton1);
  container1.appendChild(likeButton1);

  square1.appendChild(container1);
  rootElement.appendChild(square1);

  // Div para el segundo cuadrado
  const square2 = document.createElement('div');
  square2.classList.add('post-square2');
  const deleteButton2 = document.createElement('button');
  const deleteIcon2 = document.createElement('i');
  deleteIcon2.classList.add('fas', 'fa-trash');
  // deleteButton2.textContent = 'Delete';
  deleteButton2.appendChild(deleteIcon2);
  deleteButton2.classList.add('deleteButton2');

  const editButton2 = document.createElement('button');
  const editIcon2 = document.createElement('i');
  editIcon2.classList.add('fas', 'fa-edit');
  editButton2.appendChild(editIcon2);
  // editButton2.textContent = 'Edite';
  editButton2.classList.add('editButton2');

  const likeButton2 = document.createElement('button');
  const likeIcon2 = document.createElement('i');
  likeIcon2.classList.add('fas', 'fa-thumbs-up');
  // likeButton2.textContent = 'Like';
  likeButton2.appendChild(likeIcon2);
  likeButton2.classList.add('likeButton2');
  const commentInput2 = document.createElement('input');
  commentInput2.classList.add('comment-input2');
  // commentInput2.placeholder = 'Write a comment...';

  const container2 = document.createElement('div');
  container2.appendChild(commentInput2);
  container2.appendChild(deleteButton2);
  container2.appendChild(editButton2);
  container2.appendChild(likeButton2);

  square2.appendChild(container2);
  rootElement.appendChild(square2);

  // Div para el tercer cuadrado
  const square3 = document.createElement('div');
  square3.classList.add('post-square3');
  const deleteButton3 = document.createElement('button');
  const deleteIcon3 = document.createElement('i');
  deleteIcon3.classList.add('fas', 'fa-trash');
  // deleteButton3.textContent = 'Delete';
  deleteButton3.appendChild(deleteIcon3);
  deleteButton3.classList.add('deleteButton3');

  const editButton3 = document.createElement('button');
  const editIcon3 = document.createElement('i');
  editIcon3.classList.add('fas', 'fa-edit');
  editButton3.appendChild(editIcon3);
  // editButton3.textContent = 'Edite';
  editButton3.classList.add('editButton3');

  const likeButton3 = document.createElement('button');
  const likeIcon3 = document.createElement('i');
  likeIcon3.classList.add('fas', 'fa-thumbs-up');
  // likeButton3.textContent = 'Like';
  likeButton3.appendChild(likeIcon3);
  likeButton3.classList.add('likeButton3');

  const commentInput3 = document.createElement('input');
  commentInput3.classList.add('comment-input3');
  // commentInput3.placeholder = 'Write a comment...';

  const container3 = document.createElement('div');
  container3.appendChild(commentInput3);
  container3.appendChild(deleteButton3);
  container3.appendChild(editButton3);
  container3.appendChild(likeButton3);

  square3.appendChild(container3);
  rootElement.appendChild(square3);

  // Open the MODAL when "Create Post" button is clicked
  createPostButton.addEventListener('click', openModal);

  function openModal() {
    // commentInput1 = document.querySelector('.comment-input1');
    // commentInput2 = document.querySelector('.comment-input2');
    // commentInput3 = document.querySelector('.comment-input3');
    modal.style.display = 'block';
  }

  closeButton.addEventListener('click', closeModal);

  function closeModal() {
    modal.style.display = 'none';
  }

  postButton.addEventListener('click', createPost);

  function createPost() {
    const postText = textInput.value;

    if (commentInput3) {
      commentInput3.value = commentInput2 ? commentInput2.value : '';
    }
    if (commentInput2) {
      commentInput2.value = commentInput1 ? commentInput1.value : '';
    }
    if (commentInput3) {
      commentInput1.value = postText;
    }
    textInput.value = '';
    closeModal();
  }

  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const footerText = document.createElement('p');
  footerText.classList.add('footerText');
  footer.appendChild(footerText);
  rootElement.appendChild(footer);

  return rootElement;
}
