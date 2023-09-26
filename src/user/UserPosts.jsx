import React, { useEffect, useState } from "react";

const UserPosts = ({userId}) => {
    const [posts, setPosts] = useState();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <>
            <div>Moji postovi: </div>
            <div>User id: {userId} </div>
            {posts &&
                posts.slice(0, 3).map(({ id, title }) => {
                    return(<div key={id}>"{title}"</div>);
                })}
        </>
    );
};

export default UserPosts;
