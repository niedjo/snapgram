import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery
} from '@tanstack/react-query'
import { createPost, createUserAccount, deletePost, deleteSavedPost, getCurrentUser, getInfinitePost, getPostById, getRecentPosts, likePost, savedPost, searchPost, signInAccount, signOutAccount, updatePost } from '../appwrite/api'
import { INewPost, INewUser, IUpdatePost } from '@/types'
import { QUERY_KEYS } from './queryKeys'

export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn : (user : INewUser) => createUserAccount(user)
    })
}

export const useSigninAccount = () => {
    return useMutation({
        mutationFn : (user : {
            email : string; 
            password : string;
        }) => signInAccount(user)
    })
}

export const useSignOutAccount = () => {
    return useMutation({
        mutationFn : signOutAccount
    })
}

export const useCreatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (post: INewPost) => createPost(post),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
        });
      },
    });
};

export const useGetRecentPosts = () => {
    return useQuery({
        queryKey : [QUERY_KEYS.GET_RECENT_POSTS],
        queryFn : getRecentPosts,
    })
}

export const useLikedPost = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn : ({ postId, likesArray } : { postId : string, likesArray : string[]}) => likePost(postId, likesArray),
        onSuccess : (data) => {
            queryClient.invalidateQueries({
                queryKey : [QUERY_KEYS.GET_POST_BY_ID, data?.$id]
            })
            queryClient.invalidateQueries({
                queryKey : [QUERY_KEYS.GET_RECENT_POSTS]
            })
            queryClient.invalidateQueries({
                queryKey : [QUERY_KEYS.GET_POSTS]
            })
            queryClient.invalidateQueries({
                queryKey : [QUERY_KEYS.GET_CURRENT_USER]
            })
        }
    })
}

export const useSavedPost = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn : ({ postId, userId } : { postId : string, userId : string}) => savedPost(postId, userId),
        onSuccess : () => {
            queryClient.invalidateQueries({
                queryKey : [QUERY_KEYS.GET_RECENT_POSTS]
            })
            queryClient.invalidateQueries({
                queryKey : [QUERY_KEYS.GET_POSTS]
            })
            queryClient.invalidateQueries({
                queryKey : [QUERY_KEYS.GET_CURRENT_USER]
            })
        }
    })
}

export const useDeleteSavedPost = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn : (savedRecordId : string) => deleteSavedPost(savedRecordId),
        onSuccess : () => {
            queryClient.invalidateQueries({
                queryKey : [QUERY_KEYS.GET_RECENT_POSTS]
            })
            queryClient.invalidateQueries({
                queryKey : [QUERY_KEYS.GET_POSTS]
            })
            queryClient.invalidateQueries({
                queryKey : [QUERY_KEYS.GET_CURRENT_USER]
            })
        }
    })
}

export const useGetCurrentUser = () => {
    return useQuery({
        queryKey : [QUERY_KEYS.GET_CURRENT_USER],
        queryFn : getCurrentUser
    })
}

export const useGetPostById = (postId : string) => {
    return useQuery({
        queryKey : [QUERY_KEYS.GET_POST_BY_ID, postId],
        queryFn : () => getPostById(postId),
        enabled : !!postId
    })
}

export const useUpdatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn : (post : IUpdatePost) => updatePost(post),
        onSuccess : (data) => {
            queryClient.invalidateQueries({
                queryKey : [QUERY_KEYS.GET_POST_BY_ID, data?.$id]
            })
        }
    })
}

export const useDeletePost = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn : ({ postId, imageId } : { postId : string, imageId : string }) => deletePost(postId, imageId),
        onSuccess : (data) => {
            queryClient.invalidateQueries({
                queryKey : [QUERY_KEYS.GET_RECENT_POSTS]
            })
        }
    })
}

export const useGetPost = () => {
    return useInfiniteQuery({
        queryKey : [QUERY_KEYS.GET_INFINITE_POSTS],
        queryFn : getInfinitePost,
        // @ts-ignore
        getNextPageParam: (lastPage) => {
            if(lastPage && lastPage.documents.length === 0) return null
            else {
                const lastId = lastPage?.documents[lastPage.documents.length - 1].$id
                return lastId
            }
        }
    })
}

export const useSearchPost = (searchTerm : string ) => {
    return useQuery({
        queryKey : [QUERY_KEYS.SEARCH_POSTS, searchTerm],
        queryFn: () => searchPost(searchTerm),
        enabled : !!searchTerm
    }) 
}