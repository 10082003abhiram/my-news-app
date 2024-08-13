import React, { Component } from "react";
import alternative from './alternative.jpg'

export default class NewsItem extends Component {

  render() {
    let { title, description, newsurl, date, author, source } = this.props;
    return (
      <div>
        <div class="card">

           <div style={{ display:'flex', justifyContent : 'flez-end', position: 'absolute', right : '0'}}>
            <span class=" badge rounded-pill bg-success">
            {source}
          </span>
           </div>

           <div className="imgc">
           <img src= {alternative} alt="..." />
            </div>
          <div class="card-body">
            <h5 class="card-title">
              {title}...{" "}
             
            </h5>

            <p class="card-text">{description}...</p>

            <a href={newsurl} target="_blank" class="btn btn-primary">
              Read More
            </a>
          </div>
          <div className="newsic"></div>
          <div class="card-footer">
            <div className="footo">
            <small class="text-body-secondary-text-danger">
              <strong>Published At</strong>- {new Date(date).toGMTString()}
            </small>
            </div>
            
            <div className="foott">
            <small class="text-body-secondary-text-danger"><strong> Author</strong>- {author}</small>
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}
