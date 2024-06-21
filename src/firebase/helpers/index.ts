import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../config";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import { ICategoryType } from "@/models";

export const findSubcategoryByLabel = async (
  categoryType: ICategoryType,
  label: string
) => {
  const q = query(
    collection(firestore, "categories", categoryType, "subcategories"),
    where("label", "==", label)
  );
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    // return querySnapshot.docs.map((doc) => doc.id); // Return an array of document IDs
    return querySnapshot.docs[0];
  } else {
    throw new Error("Category not found");
  }
};

export const useSubcategories = (categoryType: ICategoryType) => {
  const subcategoryRef = collection(
    firestore,
    "categories",
    categoryType,
    "subcategories"
  );
  const queryCategories = query(subcategoryRef, orderBy("label", "asc"));
  return useCollectionData(queryCategories);
};
