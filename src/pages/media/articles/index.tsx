import { BaseLayout } from "@/components";
import { InnerPageError } from "@/components/errors";
import { InnerPageLoader } from "@/components/loaders";
import { Button } from "@/components/ui/button";
import { firestore } from "@/firebase/config";
import { IArticle } from "@/models";
import dayjs from "dayjs";
import { useSubcategories } from "@/firebase/helpers";
import {
  DocumentData,
  collection,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { FaCircleUser, FaTags } from "react-icons/fa6";


function formatDate(dateString: string): string {
  return dayjs(dateString).format('D MMMM, YYYY HH:mm');
}

const Articles = () => {

  const [category, setCategory] = React.useState("");
  const [categories, catLoading, catError] = useSubcategories("articles");
  const [articles, loading, error] = useCollectionData(
    query(collection(firestore, "articles"), orderBy("modifiedAt", "desc"))
  );




  const categoryLabels = React.useMemo(() => {
    const categoriesSet: Set<string> = new Set();

    // categoriesSet.add("tout");

    categories?.forEach((category) => {
      categoriesSet.add(category.label);
    });

    return Array.from(categoriesSet);
  }, [categories]);

  React.useEffect(() => {
    if (categoryLabels.length > 0 && category === "") {
      setCategory(categoryLabels[0]);
    }
  }, [categoryLabels, category]);



  const filteredArticles = React.useMemo(() => {
    return (
      articles?.filter((document) => {
        // if (category === "tout") {
        //   return true;
        // }
        if (category === document.category) {
          return true;
        }
        return false;
      }) || []
    );
  }, [category, articles]);


  if (loading) return <InnerPageLoader loading={loading} />;

  if (error) return <InnerPageError error={error} />;

  // TODO: ellipsize text overflow

  return (
    <BaseLayout>
      <div className="w-full max-w-screen-lg py-4 mx-auto flex flex-col items-center justify-center gap-2">
        <h1 className="text-3xl md:text-4xl font-bold py-2">Les articles</h1>
        <p className="p-2 px-7 w-full">Catégories</p>
            <div className="categories w-full flex px-5 flex-wrap items-center justify-start gap-2 mt-2 mb-8">
              {categoryLabels.map((cat, idx) => (
                <Button
                  key={idx}
                  variant={cat == category ? "default" : "outline"}
                  className={cn(
                    cat === category ? "text-white" : "hover:text-white",
                    "capitalize"
                  )}
                  // @ts-ignore
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
       
        {!Boolean(filteredArticles?.length) ? (
          <div className="flex text-lg">Aucun article</div>
        ) : (
          <div className="articles w-full p-4">
            {/* <div className="featured w-full mb-8">
              <FeaturedArticle article={articles![0] as IArticle} />
            </div> */}

            <div className="articles my-4 w-full flex flex-wrap items-stretch gap-12 md:gap-8">
              {filteredArticles?.map((article, idx) => (
                <div key={idx} className="article w-full md:w-[47%] lg:w-[31%]">
                  <Article article={article as IArticle} />
                </div>
              ))}
            </div>
          </div>
        )}
       
      </div>
    </BaseLayout>
  );
};

// const FeaturedArticle = ({ article }: { article: IArticle }) => (
//   <div className="w-full h-full flex flex-col md:flex-row gap-4 items-stretch justify-center">
//     <div className="image w-full md:w-[48%] max-h-[250px] md:max-h-[350px] aspect-square relative">
//       <Image
//         src={article.image.src}
//         alt={article.image.caption}
//         fill
//         style={{ borderRadius: 8 }}
//         objectFit="cover"
//       />
//     </div>
//     <div className="details w-full md:w-[48%] flex flex-col items-start justify-between gap-4">
//       <div className="tags w-full flex flex-wrap items-start gap-2 justify-start">
//         {article.tags.map((tag, idx) => (
//           <Button
//             key={idx}
//             className="flex items-center justify-center gap-2 text-white capitalize"
//           >
//             <FaTags />
//             {tag.text}
//           </Button>
//         ))}
//       </div>

//       <Link href={`articles/${article.slug}`}>
//         <h2 className="title text-4xl font-semibold hover:underline transition-all duration-300">
//           {article.title}
//         </h2>
//       </Link>

//       <p className="excerpt text-slate-500">{article.excerpt}</p>

//       <div className="author flex items-stretch justify-center gap-2">
//         <div className="avatar text-slate-500">
//           <FaCircleUser size={45} />
//         </div>
//         <div className="info flex flex-col items-start justify-center text-sm">
//           <p className="author font-semibold">{article.author.name}</p>
//           <p className="date text-slate-500">
//             {dayjs(article.createdAt).format("YYYY-MM-DD")}
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// );

const Article = ({ article }: { article: IArticle }) => (
  <div className="rounded-lg w-full h-full flex flex-col gap-4 items-stretch justify-start">
    <div className="image w-full h-[250px] md:h-[250px] relative">
      <Image
        src={article.image.src}
        alt={article.image.caption}
        fill
        style={{ borderRadius: 8 }}
      />
    </div>
    <div className="details w-full flex flex-col items-start justify-between gap-4">
      <div className="tags w-full flex flex-wrap items-start gap-2 justify-start">
        {article.tags.slice(0, 2).map((tag, idx) => (
          <Button
            key={idx}
            className="flex items-center justify-center gap-2 text-white capitalize"
          >
            <FaTags />
            {tag.text}
          </Button>
        ))}
      </div>

      <Link href={`articles/${article.slug}`}>
        <h2 className="title text-2xl font-semibold hover:underline transition-all duration-300">
          {article.title}
        </h2>
      </Link>

      <p className="excerpt text-slate-500">{article.excerpt}</p>

      <div className="author flex items-stretch justify-center gap-2">
        <div className="avatar text-slate-500">
          <FaCircleUser size={45} />
        </div>
        <div className="info flex flex-col items-start justify-center text-sm">
          <p className="author">{article.author.name}</p>
          <p className="date text-slate-500"> {formatDate(`${article.createdAt}`)}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Articles;
