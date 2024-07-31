// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { Food } from "../types/type";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfP8tty8dVNLbt3yxsosXDoEYH0cEOdTM",
  authDomain: "mcdonalds-store-b93e3.firebaseapp.com",
  projectId: "mcdonalds-store-b93e3",
  storageBucket: "mcdonalds-store-b93e3.appspot.com",
  messagingSenderId: "217499277822",
  appId: "1:217499277822:web:ee9a93983d7b4b58fd48af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// OBTENER TODOS LOS PRODUCTOS
export function getAllProducts(callback: (products: Food[]) => void): void {
  const productsCollection = collection(db, "products");

  onSnapshot(productsCollection, (snapshot) => {
    const listAllProducts: Food[] = [];

    snapshot.forEach((docu) => {
      const data = docu.data();
      const product: Food = {
        id: docu.id,
        category: data.category,
        description: data.description,
        img: data.img,
        name: data.name,
        price: data.price,
        stock: data.stock,
        options: data.options ? { size: data.options.size } : undefined
      };

      listAllProducts.push(product);
    });

    callback(listAllProducts); // Llama al callback con la lista de productos actualizada
  });
}