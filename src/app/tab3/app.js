// const cafeList = document.querySelector('#cafe-list');
// const form = document.querySelector('#add-cafe-form');

// // create element & render cafe
// function renderCafe(doc){
//     let li = document.createElement('li');
//     let name = document.createElement('span');
//     let post = document.createElement('span');
//     let cross = document.createElement('div');

//     li.setAttribute('data-id', doc.id);
//     name.textContent = doc.data().name;
//     city.textContent = doc.data().post;
//     cross.textContent = 'x';

//     li.appendChild(name);
//     li.appendChild(post);
//     li.appendChild(cross);

//     cafeList.appendChild(li);

//     // deleting data
//     cross.addEventListener('click', (e) => {
//         e.stopPropagation();
//         let id = e.target.parentElement.getAttribute('data-id');
//         db.collection('post').doc(id).delete();
//     });
// }

// // getting data
//  db.collection('post').orderBy('post').get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//          renderCafe(doc);
//     });
//  });

// // saving data
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     db.collection('post').add({
//         name: form.name.value,
//         city: form.city.value
//     });
//     form.name.value = '';
//     form.post.value = '';
// });

// // real-time listener
// db.collection('cafes').orderBy('posr').onSnapshot(snapshot => {
//     let changes = snapshot.docChanges();
//     changes.forEach(change => {
//         console.log(change.doc.data());
//         if(change.type == 'added'){
//             renderCafe(change.doc);
//         } else if (change.type == 'removed'){
//             let li = cafeList.querySelector('[data-id=' + change.doc.id + ']');
//             cafeList.removeChild(li);
//         }
//     });
// });

// // updating records (console demo)
// // db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').update({
// //     name: 'mario world'
// // });

// // db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').update({
// //     city: 'hong kong'
// // });

// // setting data
// // db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').set({
// //     city: 'hong kong'
// // });