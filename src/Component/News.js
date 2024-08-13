import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import Alternative from "./Alternative";
import sangeeta from './sangeeta.jpg'

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    
    };
  }
  async componentDidMount() {
    this.props.setProgress(10);
    this.state.loading = true
    let { pagesize } = this.props;
    let url = `https://newsapi.org/v2/top-headlines? &country=${this.props.country}&category=${this.props.category}&apiKey=387cd61590ec4ae0a020bd994aca77d4&page=1&pageSize=${pagesize}`;
    
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.props.setProgress(78);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }
  // handlenext = async () => {
  //   let { pagesize } = this.props;
  //   let url = `https://newsapi.org/v2/top-headlines? &country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=387cd61590ec4ae0a020bd994aca77d4&page=${
  //     this.state.page + 1
  //   }&pageSize=${pagesize}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);

  //   this.setState({
  //     page: this.state.page + 1,
  //     articles: parsedData.articles,
  //   });
  // };

  // handleprevious = async () => {
  //   let { pagesize } = this.props;
  //   let url = `https://newsapi.org/v2/top-headlines? &country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=387cd61590ec4ae0a020bd994aca77d4&page=${
  //     this.state.page - 1
  //   }&pageSize=${pagesize}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);

  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //   });
  // };

  

  fetchMoreData = async () => {
    
    let { pagesize } = this.props;
    let url = `https://newsapi.org/v2/top-headlines? &country=${this.props.country}&category=${this.props.category}&apiKey=387cd61590ec4ae0a020bd994aca77d4&page=${this.state.page}&pageSize=${pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      page: this.state.page + 1, 
    });
  };

  render() {
    return (
      <div>
        <div className="lhdiv">
          <div className="hcont">
          <h2 className="text-center my-3"> 
          NewsSky's-{(document.title = this.props.category)} Headlines/-</h2>
          </div>

        </div>
       
      
        
       
        <div className="loaderclass"> {this.state.loading && <div className="position-absolute top-50 start-50"><Spinner/> </div>} </div>
         
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
        loader={ this.state.loading && <div className="position-absolute top-50 start-50"><Spinner/> </div>}
        >
          <div className="rowclass">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 " key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 40) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 80)
                          : ""
                      }
                      imageurl={element.urlToImage? element.urlToImage: <Alternative></Alternative>}
                      newsurl={element.url}
                      date={element.publishedAt}
                      author={element.author ? element.author : "Unknown"}
                      source={element.source.name}
                    />
                      {this.state.loading= false}
                  </div>
                );
              

              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
