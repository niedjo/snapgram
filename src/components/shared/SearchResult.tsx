import { Models } from "appwrite";
import Loader from "./Loader";
import GridPostList from "./GridPostList";

type SearchResultProps = {
  isSearchFetching : boolean;
  searchPosts : Models.Document[];
}
const SearchResult = ({ isSearchFetching, searchPosts } : SearchResultProps) => {
  
  if (!isSearchFetching) return <Loader />
  
  // @ts-ignore 
  if (searchPosts && searchPosts.documents.length > 0) return <GridPostList posts={searchPosts.documents}/>
  
  return (
    <p className="text-light-4 mt-10 text-center w-full">No Result Found</p>
  )
}

export default SearchResult