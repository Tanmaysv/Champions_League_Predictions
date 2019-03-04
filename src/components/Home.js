import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Pokeball from '../pokeball.png';
import Champions_League from '../Champions_League.png';
// import UCL from '../UCL.png';
// import UCL_Latest from '../UCL_Latest.jpg'
import { connect } from 'react-redux';

class Home extends Component{
    render(){
        console.log(this.props)
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Champions_League} alt="champions league logo" />
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title blue-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <p>There are no posts yet</p>
        )
        return (
            <div className="container home">
                <h4 className="center">Round Of 16</h4>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps)(Home);