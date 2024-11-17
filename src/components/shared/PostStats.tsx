import { useDeleteSavedPost, useGetCurrentUser, useLikedPost, useSavedPost } from "@/lib/react-query/queryAndMutations";
import { checkIsLiked } from "@/lib/utils";
import { Models } from "appwrite"
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

type PostStatProps = {
    post? : Models.Document;
    userId : string;
}

const PostStats = ({ post, userId } : PostStatProps) => {

    const likesList = post?.likes.map((user: Models.Document) => user.$id)

    const [likes, setLikes] = useState(likesList)
    const [isSaved, setIsSaved] = useState(false)

    const { mutate : likePost, isPending : isSavingPost } = useLikedPost();
    const { mutate : savePost, isPending : isDeletongSaved } = useSavedPost();
    const { mutate : deleteSavedPost } = useDeleteSavedPost();

    const { data : currentUser } = useGetCurrentUser();

    const savedPostRecord = currentUser?.save.find(( record: Models.Document ) => record.post.$id === post?.$id);

    useEffect(() => {
      setIsSaved(!!savedPostRecord) // it's the same thing if we write savedPostRecord ? true : false
    }, [currentUser])
    
    const handleLikePost = (e : React.MouseEvent) => {
        e.stopPropagation();
        
        let newLikes = [...likes]

        const hasLiked = newLikes.includes(userId)
        if (hasLiked) {
            newLikes = newLikes.filter((id) => id !== userId);
        }
        else { 
            newLikes.push(userId)
        }

        setLikes(newLikes)
        likePost({ postId : post?.$id || '', likesArray : newLikes })
    }

    const handleSavePost = (e : React.MouseEvent) => {
        e.stopPropagation();
        
        if (savedPostRecord) {
            setIsSaved(false)
            deleteSavedPost(savedPostRecord.$id)
        }
        else {
            savePost({ postId : post?.$id || '', userId })
            setIsSaved(true)
        }

    }

  return (
    <div className="flex justify-between items-center z-20">
        <div className="flex gap-2 mr-5">
            <img 
                src={checkIsLiked(likes, userId) ? "/assets/icons/liked.svg" : "/assets/icons/like.svg" }
                alt="like" 
                width={20} 
                height={20} 
                onClick={handleLikePost} 
                className="cursor-pointer" 
            />
            <p className="small-medium lg:based-medium">{likes.length}</p>
        </div>
        <div className="flex gap-2">
            {isSavingPost || isDeletongSaved ? 
            <Loader /> 
            :<img 
                src={ isSaved ? "/assets/icons/saved.svg" : "/assets/icons/save.svg"}
                alt="save" 
                width={20} 
                height={20} 
                onClick={handleSavePost} 
                className="cursor-pointer" 
            />
            }
        </div>
    </div>
  )
}

export default PostStats