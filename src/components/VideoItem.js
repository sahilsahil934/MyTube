import './VideoItem.css';
import React from 'react';

class VideoItem extends React.Component {


    render() {

        const snippet = this.props.video.snippet;
        return (
            <div onClick={() => this.props.onVideoSelect(this.props.video)} className="video-item item">
                <img className="ui image" alt={snippet.title} src={snippet.thumbnails.medium.url} />
                <div className="content">
                    <div className="header">{snippet.title}</div>
                </div>
            </div>
        );
    }
}

export default VideoItem;