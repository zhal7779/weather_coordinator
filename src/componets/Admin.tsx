import { doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db, storage } from '../firebase';
import {
  getDownloadURL,
  listAll,
  uploadBytes,
  ref as storageRef,
} from 'firebase/storage';

const Admin = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState<any>();

  const upload = async () => {
    const washingtonRef = doc(db, 'admin', 'pGA34c2Zvm2URwPlaFvI');

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      textarea: text,
    });

    // Check if an image is selected
    if (img) {
      // Create a reference to the root of your Storage
      const storageRootRef = storageRef(storage, 'your-storage-root-folder');

      // Create a reference to the selected image file
      const imageRef = storageRef(storageRootRef, img.name);

      // Upload the image to Firebase Storage
      await uploadBytes(imageRef, img).then(async (snapshot) => {
        console.log('Uploaded a blob or file!');

        // Get the download URL of the uploaded image
        const downloadURL = await getDownloadURL(snapshot.ref);

        // Update the Firestore document with the image download URL
        await updateDoc(washingtonRef, {
          imageURL: downloadURL,
        });
      });
    }

    alert('업로드 완료!');

    // // 'file' comes from the Blob or File API
    // await uploadBytes(storageRef, img).then((snapshot) => {
    //   console.log("Uploaded a blob or file!");
    // });
  };

  const onText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setText(value);
  };

  const onImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.files;
    const img = value && value[0];
    setImg(img);
    console.log(value);
    console.log(img);
  };

  return (
    <section>
      <h1>ADMIN 자크</h1>

      <div>
        <h2>자크의 조언</h2>
        <textarea cols={30} rows={10} onChange={(event) => onText(event)} />

        <h2>자크의 오늘의 옷</h2>
        <input
          type="file"
          name="file"
          accept="image/*"
          onChange={(event) => onImg(event)}
        />

        <button onClick={upload}>upload</button>
      </div>
    </section>
  );
};

export default Admin;
