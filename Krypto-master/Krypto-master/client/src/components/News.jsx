import React, { Component } from 'react'
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import newsimg from '../../images/news.jpg'


export default class News extends Component {
    capsfirstletter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 0,
            totalres: 0
        }
    }
    async updatenews() {
        this.setState({ loading: true })
        const apiurl = `http://localhost:5000/api/getnews`;
        let data = await fetch(apiurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ page: this.state.page })
        });
        let parseddata = await data.json();
        this.setState({
            articles: parseddata.results,
            totalres: parseddata.totalResults,
            loading: false,
            page: parseddata.nextPage
        })
    }
    async componentDidMount() {
        this.updatenews()
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const apiurl = `http://localhost:5000/api/getnews`;
        let data = await fetch(apiurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ page: this.state.page })
        });
        let parseddata = await data.json();
        this.setState({
            articles: this.state.articles.concat(parseddata.results),
            totalres: parseddata.totalResults
        })
    };
    render() {
        return (
            <div className='flex flex-col w-full justify-start items-center'>
                <h1 className='text-3xl sm:text-5xl text-white py-1'>
                    News
                </h1>
                <div className='flex mf:flex-col flex-col items-start justify-between md:p-20 py-12 px-4'>
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalres}
                        loader={<Loader />}
                    >
                        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
                            <div className="flex flex-col md:p-12 py-12 px-4">
                                <div className="flex flex-wrap justify-center items-start mt-10">
                                    {this.state.loading && <Loader />}
                                    {this.state.articles.map((item) => (
                                        <div key={item.title} className="bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] min-w-full flex-col p-3 rounded-md hover:shadow-2xl">
                                            <div className="flex flex-col items-center w-full mt-3">
                                                <img src={item.image_url || newsimg} alt="nature" className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover" />
                                                <div className="display-flex justify-start w-full mb-6 p-2">
                                                    <a href={item.link} target="_blank" rel="noreferrer">
                                                        <p className="text-cyan-300 text-xl">{item.title}</p>
                                                    </a>
                                                    <a href={item.link} target="_blank" rel="noreferrer">
                                                        <p className="text-white text-sm">{item.content === null ? item.content : `${item.content.slice(0, 300)}...`}</p>
                                                    </a>
                                                    <p className="text-cyan-300 text-xs">Source: {item.source_id}</p>
                                                </div>
                                                <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                                                    <p className="text-[#37c7da] font-bold">{item.pubDate}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}
