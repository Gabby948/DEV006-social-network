import {
  collection, addDoc, getDocs, doc as docMethod, updateDoc, deleteDoc, deleteField,
} from 'firebase/firestore';
import { db } from '../assets/firebaseconfig';

export default function posts(navigateTo) {
  const rootElement = document.createElement('section');
  rootElement.classList.add('root-post');

  const header = document.createElement('header');
  header.classList.add('header');

  const headerText = document.createElement('span');

  headerText.textContent = 'WATARIDORI';
  header.appendChild(headerText);

  const homeButton = document.createElement('button');
  homeButton.classList.add('header-icon');
  homeButton.addEventListener('click', () => {
    navigateTo('/');
  });

  const homeIcon = document.createElement('i');
  homeIcon.classList.add('fas', 'fa-home');

  homeButton.appendChild(homeIcon);

  header.appendChild(homeButton);

  rootElement.appendChild(header);

  const modal = document.createElement('div');
  modal.classList.add('modal');
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const textInput = document.createElement('textarea');
  textInput.classList.add('post-text-input');
  textInput.placeholder = 'Write a comment...';
  textInput.id = 'textPost';

  const postButton = document.createElement('button');
  postButton.classList.add('post-button');
  postButton.textContent = 'Post';

  modalContent.appendChild(textInput);
  modalContent.appendChild(postButton);
  modal.appendChild(modalContent);

  const createPostButton = document.createElement('button');
  createPostButton.textContent = 'Create a Post';
  createPostButton.classList.add('create-post-button');
  rootElement.appendChild(createPostButton);
  rootElement.appendChild(modal);

  function openModal() {
    modal.style.display = 'block';
  }
  createPostButton.addEventListener('click', openModal);

  const postContainer = document.createElement('div');
  postContainer.classList.add('post-container');
  rootElement.appendChild(postContainer);

  function createPost() {
    postButton.addEventListener('click', createPost);
    const postText = textInput.value;

    // const square = document.createElement('div');
    // square.classList.add('post-square');

    // const postContent = document.createElement('p');
    // postContent.textContent = postText;

    // likeIcon.addEventListener('click', () => {
    //   // const currentLikes = parseInt(likeCount.textContent);
    //   likeCount.textContent = currentLikes + 1;
    // });

    // postContainer.appendChild(square);

    // Hacer scroll hasta el nuevo cuadrado

    // Eliminar cuadrados anteriores si hay más de 5
    // const squares = postContainer.getElementsByClassName('post-square');
    // if (squares.length > 5) {
    //   for (let i = 0; i < squares.length - 5; i += 1) {
    //     squares[i].remove();
    //   }
    // }
  }
  postButton.addEventListener('click', async () => {
    const textContent = document.getElementById('textPost');
    const docRef = await addDoc(collection(db, 'posts'), {
      content: textContent.value,
      likes: 0,
    });
    console.log('Document written with ID: ', docRef.id);

    const querySnapshot = await getDocs(collection(db, 'posts'));
    // Elimina el contenido actual del modal
    modalContent.innerHTML = '';
    querySnapshot.forEach(async (doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());

      const postSquare = document.createElement('div');
      postSquare.classList.add('post-square');

      const contentLength = doc.data().content.length;
      if (contentLength > 5) {
        postSquare.classList.add('long-content');
      }

      const postContent = document.createElement('p');
      postContent.textContent = doc.data().content;

      const editIcon = document.createElement('i');
      editIcon.classList.add('fas', 'fa-edit');
      const deleteIcon = document.createElement('i');
      deleteIcon.classList.add('fas', 'fa-trash-alt');
      const likeIcon = document.createElement('i');
      likeIcon.classList.add('fas', 'fa-heart');
      const likeCount = document.createElement('span');
      likeCount.textContent = doc.data().likes.toString();
      likeCount.classList.add('like-count');

      postSquare.appendChild(postContent);
      postSquare.appendChild(editIcon);
      postSquare.appendChild(deleteIcon);
      postSquare.appendChild(likeIcon);
      postSquare.appendChild(likeCount);

      // postContainer.insertBefore(postSquare, postContainer.firstChild);

      postContainer.appendChild(postSquare);
      postSquare.scrollIntoView({ behavior: 'smooth', block: 'end' });// revisar o eliminar

      postSquare.setAttribute('data-post-id', doc.id);

      editIcon.addEventListener('click', () => {
        postContent.contentEditable = true;
        postContent.focus();
        postContent.addEventListener('blur', async () => {
          const postId = postSquare.getAttribute('data-post-id');
          const updatedContent = postContent.textContent.trim();

          // Actualiza el contenido del post en Firestore
          await updateDoc(docMethod(db, 'posts', postId), { content: updatedContent });

          // Deshabilita la edición del contenido
          postContent.contentEditable = false;
        });
      });
      deleteIcon.addEventListener('click', async () => {
        const postId = postSquare.getAttribute('data-post-id');

        // Elimina el post de Firestore

        await deleteDoc(docMethod(db, 'posts', postId));

        // Elimina el post de la interfaz
        postSquare.remove();
      });

      likeIcon.addEventListener('click', async (event) => {
        const postId = event.target.closest('.post-square').getAttribute('data-post-id');
        const postRef = docMethod(db, 'posts', postId);
        const postSnapshot = await getDocs(postRef);
        const postDoc = postSnapshot.docs[0]; // Obtén el primer documento del QuerySnapshot
        const currentLikes = postDoc.data().likes || 0;
        const updatedLikes = currentLikes + 1;

        await updateDoc(docMethod(db, 'posts', postId), { likes: updatedLikes });

        likeCount.textContent = updatedLikes.toString();
      });
    });

    textContent.value = '';
    modal.style.display = 'none';
  });
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const footerText = document.createElement('p');
  footerText.classList.add('footerText');
  footer.appendChild(footerText);
  rootElement.appendChild(footer);

  return rootElement;
}
