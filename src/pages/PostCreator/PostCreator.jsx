import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createPosts } from "../../store/postsSlice"; 

import s from "./PostCreator.module.scss"

function PostCreator ({submitHandler}) {
    const { id } = useParams();
    const { posts } = useSelector((state) => state.posts);
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const dispatch = useDispatch();
    
    const onTitleChange = (event) => {
        setTitle(event.target.value)
    }
    const onContentChange = (event) => {
        setContent(event.target.value)
    }
    useEffect(() => {
        dispatch(createPosts(id));
      }, []);
    const onSubmit = (event) => {
        event.preventDefault();

        if(!title) alert("incorrect image url")
        if(!content) alert("incorrect title")

        console.log(`${title}-${content}`)

        submitHandler({title,content})

        setTitle("");
        setContent("");
    }

    return (
        // <div>Posts</div>
    //     <div className={s.PostCreator}>
    //     {/* <div className={s.firstTitle}>PostPage</div> */}
    //     <div className={s.title}>{posts[0]?.title}</div>
    //     {/* <div className={s.description}> */}
    //     {posts[0]?.image && <img className={s.imageEachPost} src={posts[0]?.image} alt="" />}
    //     <div className={s.textBlock}>
    //     <div className={s.texts}>{posts[0]?.text}</div>
    //     </div>
    //     {/* </div> */}
    //     <br />
    //   </div>
        <div className={s.wrapper}>
            <form className={s.userForm} onSubmit={onSubmit}>
                <label className={s.label}>
                    <span className={s.spanText}>Image url:</span>
                    < input
                    type="text" 
                    className={s.input}
                    value={title}
                    onChange={onTitleChange}
                    />
                </label>
                <label className={s.label}>
                    <span className={s.spanText}>Title</span>
                    <textarea
                    className={s.textareaBlock}
                    value={content}
                    onChange={onContentChange}
                    />
                </label>
                <Button
                className={s.submit}
                type="submit"
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default PostCreator;