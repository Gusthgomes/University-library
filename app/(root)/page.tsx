import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";

const Home = () => {
  return (
    <>
      <BookOverview {...sampleBooks[0]} />

      <BookList
        title="Ultimos Livros"
        books={sampleBooks}
        conatinerClassName="mt-28"
      />
    </>

  );
}

export default Home;

