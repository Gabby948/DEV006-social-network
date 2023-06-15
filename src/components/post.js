import {
  collection, addDoc, getDocs, doc as docMethod, updateDoc, deleteDoc,
} from 'firebase/firestore';
import { db, auth } from '../assets/firebaseconfig';

export default function posts(navigateTo) {
  const rootElement = document.createElement('section');
  const header = document.createElement('header');
  const headerText = document.createElement('span');
  const homeButton = document.createElement('button');
  const homeIcon = document.createElement('i');
  const modal = document.createElement('div');
  const modalContent = document.createElement('div');
  const textInput = document.createElement('textarea');
  const postButton = document.createElement('button');
  const createPostButton = document.createElement('button');
  const footer = document.createElement('footer');
  const footerText = document.createElement('p');

  rootElement.classList.add('root-post');
  header.classList.add('header');
  homeButton.classList.add('header-icon');
  homeIcon.classList.add('fas', 'fa-home');
  modal.classList.add('modal');
  textInput.classList.add('post-text-input');
  modalContent.classList.add('modal-content');
  postButton.classList.add('post-button');
  createPostButton.classList.add('create-post-button');
  footer.classList.add('footer');
  footerText.classList.add('footerText');

  textInput.id = 'textPost';

  headerText.textContent = 'WATARIDORI';
  postButton.textContent = 'Post';
  createPostButton.textContent = 'Create a Post';

  textInput.placeholder = 'Write a comment...';

  header.appendChild(headerText);
  header.appendChild(homeButton);
  homeButton.appendChild(homeIcon);
  modalContent.appendChild(textInput);
  modalContent.appendChild(postButton);
  modal.appendChild(modalContent);
  rootElement.appendChild(header);
  rootElement.appendChild(createPostButton);
  rootElement.appendChild(modal);
  footer.appendChild(footerText);
  rootElement.appendChild(footer);

  homeButton.addEventListener('click', () => {
    navigateTo('/');
  });

  function openModal() {
    modal.style.display = 'block';
  }
  createPostButton.addEventListener('click', openModal);

  const postContainer = document.createElement('div');
  postContainer.classList.add('post-container');
  rootElement.appendChild(postContainer);

  // function createPost() {
  //   postButton.addEventListener('click', createPost);
  //   const postText = textInput.value;

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
  // }
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
      const editIcon = document.createElement('i');
      const deleteIcon = document.createElement('i');
      const likeIcon = document.createElement('i');
      const likeCount = document.createElement('span');

      editIcon.classList.add('fas', 'fa-edit');
      deleteIcon.classList.add('fas', 'fa-trash-alt');
      likeIcon.classList.add('fas', 'fa-heart');
      likeCount.textContent = doc.data().likes.toString();
      likeCount.classList.add('like-count');

      postContent.textContent = doc.data().content;

      postSquare.setAttribute('data-post-id', doc.id);

      postSquare.appendChild(postContent);
      postSquare.appendChild(editIcon);
      postSquare.appendChild(deleteIcon);
      postSquare.appendChild(likeIcon);
      postSquare.appendChild(likeCount);
      // postContainer.insertBefore(postSquare, postContainer.firstChild);
      postContainer.appendChild(postSquare);

      // postSquare.scrollIntoView({ behavior: 'smooth', block: 'end' });// revisar o eliminar

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
    modal.style.display = 'none'; // Realiza la accion que el modal desaparezca
  });

  return rootElement;
}
